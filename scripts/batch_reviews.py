#!/usr/bin/env python3
"""
Run the YouTube ranking step for a whole week's releases in one command.

Input is a small JSON file you (or Claude) write by hand after checking
Wikipedia's "List of X films of <year>" pages for new releases — see
releases.example.json for the shape. This script does NOT touch Wikipedia
or BookMyShow itself; it only automates the repetitive per-movie YouTube
lookups once you already know what released.

Usage:
    python3 batch_reviews.py --input releases.json --outdir releases/2026-08-21

Writes one <slug>.json per movie into --outdir, plus an index.json summary.
Requires YOUTUBE_API_KEY in the environment (see ../.env — source it before running).
"""

import argparse
import json
import re
import sys
from pathlib import Path

from yt_ranker import ApiError, find_reviews


def slugify(title):
    return re.sub(r"[^A-Za-z0-9]+", "_", title).strip("_")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", required=True, help="JSON file: a list of {title, language, industry, releaseDate}")
    ap.add_argument("--outdir", required=True, help="Directory to write per-movie JSON files into")
    ap.add_argument("--pool-size", type=int, default=40)
    args = ap.parse_args()

    movies = json.loads(Path(args.input).read_text())
    outdir = Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)

    index = []
    for m in movies:
        title = m["title"]
        print(f"=== {title} ===", file=sys.stderr)
        try:
            result = find_reviews(
                title=title,
                language=m.get("language", ""),
                industry=m.get("industry", ""),
                release_date=m.get("releaseDate", ""),
                pool_size=args.pool_size,
            )
        except ApiError as e:
            print(f"  ERROR: {e}", file=sys.stderr)
            index.append({"title": title, "error": str(e)})
            continue

        slug = slugify(title)
        out_path = outdir / f"{slug}.json"
        out_path.write_text(json.dumps(result, indent=2, ensure_ascii=False))
        print(f"  {len(result['videos'])} videos -> {out_path}", file=sys.stderr)
        index.append({
            "title": title,
            "language": m.get("language", ""),
            "industry": m.get("industry", ""),
            "releaseDate": m.get("releaseDate", ""),
            "file": str(out_path.name),
            "videoCount": len(result["videos"]),
        })

    index_path = outdir / "index.json"
    index_path.write_text(json.dumps(index, indent=2, ensure_ascii=False))
    print(f"\nWrote index of {len(index)} movie(s) to {index_path}", file=sys.stderr)


if __name__ == "__main__":
    main()
