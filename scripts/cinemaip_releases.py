#!/usr/bin/env python3
"""
Pull real release data from cinemaip.ai's public API and rank each movie's
YouTube reviews in one step — replaces the old "check Wikipedia by hand,
then run youtube_reviews.py" two-step workflow.

Usage:
    python3 cinemaip_releases.py --category upcoming --language Telugu --outdir releases/2026-08-22
    python3 cinemaip_releases.py --category in_theatres --outdir releases/2026-08-22

Writes one <slug>.json per movie (ready to paste into admin-edit.html's
"Import" box) plus an index.json summary. No auth needed — the API is public.
Requires YOUTUBE_API_KEY in the environment for the review-ranking half
(see ../.env) — release data alone works without it.
"""

import argparse
import json
import re
import sys
import urllib.parse
import urllib.request
from datetime import datetime
from pathlib import Path

from yt_ranker import ApiError, find_reviews

CINEAPI_BASE = "https://cineapi-48276813435.asia-south1.run.app"

LANGUAGE_TO_INDUSTRY = {
    "hindi": "Bollywood",
    "telugu": "Tollywood",
    "tamil": "Kollywood",
    "kannada": "Sandalwood",
    "malayalam": "Mollywood",
    "english": "Indie",
}


def slugify(title):
    return re.sub(r"[^A-Za-z0-9]+", "_", title).strip("_")


def fetch_movies(category, language, limit, max_pages):
    movies = []
    page = 1
    while page <= max_pages:
        params = {"category": category, "limit": limit, "page": page}
        if language:
            params["language"] = language
        url = f"{CINEAPI_BASE}/movies?{urllib.parse.urlencode(params)}"
        req = urllib.request.Request(url, headers={"Accept": "application/json"})
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = json.load(resp)
        batch = data.get("movies", [])
        movies.extend(batch)
        if page >= data.get("pages", 1) or not batch:
            break
        page += 1
    return movies


def primary_language(language_cd):
    if not language_cd:
        return ""
    return language_cd.split(",")[0].strip()


def format_date(iso_date):
    if not iso_date:
        return ""
    try:
        return datetime.strptime(iso_date, "%Y-%m-%d").strftime("%d %b %Y")
    except ValueError:
        return iso_date


def best_trailer(movie):
    for key in ["trailer_id", "trailer_id_2", "trailer_id_3", "trailer_id_4", "trailer_id_5",
                "teaser_id", "teaser_id_2", "teaser_id_3", "teaser_id_4", "teaser_id_5"]:
        if movie.get(key):
            return movie[key]
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--category", required=True, choices=["in_theatres", "upcoming", "ott"])
    ap.add_argument("--language", default=None, help="e.g. Telugu, Hindi, Tamil, Kannada, English")
    ap.add_argument("--limit", type=int, default=20, help="Movies per page from the API")
    ap.add_argument("--max-pages", type=int, default=1, help="How many pages to pull")
    ap.add_argument("--outdir", required=True)
    ap.add_argument("--pool-size", type=int, default=40, help="YouTube search pool size per movie")
    ap.add_argument("--skip-reviews", action="store_true", help="Only pull release data, skip YouTube ranking")
    args = ap.parse_args()

    outdir = Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)

    print(f"Fetching {args.category} releases" + (f" ({args.language})" if args.language else "") + "...", file=sys.stderr)
    try:
        movies = fetch_movies(args.category, args.language, args.limit, args.max_pages)
    except urllib.error.URLError as e:
        print(f"Could not reach cinemaip.ai API: {e}", file=sys.stderr)
        sys.exit(1)
    print(f"Found {len(movies)} movie(s).", file=sys.stderr)

    index = []
    for m in movies:
        title = m["title"]
        lang = primary_language(m.get("language_cd"))
        industry = LANGUAGE_TO_INDUSTRY.get(lang.lower(), "")
        release_date = format_date(m.get("release_date"))
        print(f"=== {title} ({lang}) ===", file=sys.stderr)

        result = {
            "title": title,
            "language": lang,
            "industry": industry,
            "releaseDate": release_date,
            "synopsis": m.get("synopsis") or "",
            "posterUrl": m.get("poster_url"),
            "bannerUrl": m.get("banner_url"),
            "trailerId": best_trailer(m),
            "cpid": m.get("cpid"),
            "candidatesConsidered": 0,
            "videos": [],
        }

        if not args.skip_reviews:
            try:
                review_data = find_reviews(title=title, language=lang, industry=industry,
                                            release_date=release_date, pool_size=args.pool_size)
                result["candidatesConsidered"] = review_data["candidatesConsidered"]
                result["videos"] = review_data["videos"]
            except ApiError as e:
                print(f"  YouTube ranking failed: {e}", file=sys.stderr)

        slug = slugify(title)
        out_path = outdir / f"{slug}.json"
        out_path.write_text(json.dumps(result, indent=2, ensure_ascii=False))
        print(f"  {len(result['videos'])} review video(s) -> {out_path}", file=sys.stderr)
        index.append({
            "title": title, "language": lang, "industry": industry, "releaseDate": release_date,
            "file": out_path.name, "videoCount": len(result["videos"]), "cpid": m.get("cpid"),
        })

    index_path = outdir / "index.json"
    index_path.write_text(json.dumps(index, indent=2, ensure_ascii=False))
    print(f"\nWrote index of {len(index)} movie(s) to {index_path}", file=sys.stderr)


if __name__ == "__main__":
    main()
