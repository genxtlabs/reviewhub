#!/usr/bin/env python3
"""Generate a branded Instagram post image for one or more ReviewHub movies or cars.

Usage:
    python3 scripts/generate_ig_post.py <id> [<id> ...]              # movies (default)
    python3 scripts/generate_ig_post.py --type car <id> [<id> ...]   # cars
    python3 scripts/generate_ig_post.py --all-missing [--type car]   # every entry with no post yet

Requires: pip install playwright && playwright install chromium
Output: social-posts/<id>-<slug>.jpg (1080x1350, Instagram portrait feed format)

This only renders the image. It does not post anything to Instagram — actual
publishing needs a Meta Developer app + Instagram Business account access
token, which is a one-time manual setup (see project notes), then a separate
publish step using the Instagram Graph API's media/media_publish endpoints.
"""
import argparse
import re
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE_PATH = ROOT / "scripts" / "ig_post_template.html"
OUTPUT_DIR = ROOT / "social-posts"

VERDICT_STYLE = {
    "must":    {"color": "#2f8f5b", "text": "#baf0cf", "bg": "rgba(47,143,91,0.16)",  "border": "rgba(47,143,91,0.5)"},
    "good":    {"color": "#6a9e2f", "text": "#d7f0a8", "bg": "rgba(106,158,47,0.16)", "border": "rgba(106,158,47,0.5)"},
    "onetime": {"color": "#c98a1c", "text": "#ffdb99", "bg": "rgba(201,138,28,0.16)", "border": "rgba(201,138,28,0.5)"},
    "wait":    {"color": "#3b6ea5", "text": "#b9d9f5", "bg": "rgba(59,110,165,0.16)", "border": "rgba(59,110,165,0.5)"},
    "skip":    {"color": "#b3402f", "text": "#ffb3a3", "bg": "rgba(179,64,47,0.16)",  "border": "rgba(179,64,47,0.5)"},
}


def slugify(title):
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", title.lower())).strip("-")


MOVIE_VERDICT_LABELS = {"must": "Must Watch", "good": "Good Watch", "onetime": "One-Time Watch",
                         "wait": "Wait for OTT", "skip": "Skip"}
CAR_VERDICT_LABELS = {"must": "Must Buy", "good": "Good Buy", "onetime": "Decent Pick",
                       "wait": "Wait & Watch", "skip": "Skip"}


def pick_pull_quote(entry):
    """Prefer the highest-rated review matching the entry's own dominant verdict;
    fall back to the highest-rated review overall. Extract just the 'Bottom line'
    sentence — those are already written as short, punchy pull-quotes."""
    videos = [v for v in entry["videos"] if v.get("verdictKey") and v.get("quote")]
    if not videos:
        return None
    same_verdict = [v for v in videos if v["verdictKey"] == entry["verdictKey"]]
    pool = same_verdict or videos
    pool.sort(key=lambda v: float(str(v["rating"]).split("/")[0] or 0), reverse=True)
    quote = pool[0]["quote"]
    m = re.search(r"Bottom line:\s*(.+)$", quote)
    text = m.group(1).strip() if m else quote
    text = text[:1].upper() + text[1:]
    return text.rstrip(".") + "."


def render(page, entry, out_path, entry_type="movie"):
    style = VERDICT_STYLE[entry["verdictKey"]]
    quote = pick_pull_quote(entry)
    if not quote:
        print(f"  skipping id {entry['id']} ({entry['title']}): no reviewed videos yet")
        return False

    if entry_type == "car":
        eyebrow = f"{entry['brand']} &middot; {entry['fuelType']} &middot; {entry['priceRange']}"
        verdict_label = CAR_VERDICT_LABELS[entry["verdictKey"]]
    else:
        eyebrow = f"{entry['industry']} &middot; {entry['language']} &middot; Now in Theatres"
        verdict_label = MOVIE_VERDICT_LABELS[entry["verdictKey"]]

    poster_url = entry.get("bannerUrl") or entry.get("posterUrl") or ""
    if poster_url.startswith("/"):
        # Root-relative site path (e.g. "/assets/cars/x.jpg") - resolve against
        # the repo root as a real file:// path, since this renders standalone
        # via file://, not through the site's actual HTTP root.
        poster_url = f"file://{ROOT / poster_url.lstrip('/')}"

    html = TEMPLATE_PATH.read_text(encoding="utf-8")
    replacements = {
        "POSTER_URL": poster_url,
        "EYEBROW_TEXT": eyebrow,
        "TITLE_TEXT": entry["title"],
        "SCORE_TEXT": str(entry["score"]),
        "VERDICT_COLOR": style["color"],
        "VERDICT_BG": style["bg"],
        "VERDICT_BORDER": style["border"],
        "VERDICT_TEXT_COLOR": style["text"],
        "VERDICT_LABEL": verdict_label,
        "QUOTE_TEXT": quote,
        "REVIEW_COUNT": str(entry["reviewCount"]),
    }
    for k, v in replacements.items():
        html = html.replace(k, v)

    tmp_path = ROOT / "scripts" / "_ig_render_tmp.html"
    tmp_path.write_text(html, encoding="utf-8")
    page.goto(f"file://{tmp_path}")
    page.wait_for_timeout(800)
    page.screenshot(path=str(out_path), type="jpeg", quality=88)
    tmp_path.unlink()
    print(f"  wrote {out_path.relative_to(ROOT)}")
    return True


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("ids", nargs="*", help="Movie or car ids to render")
    ap.add_argument("--type", choices=["movie", "car"], default="movie", help="Which vertical (default: movie)")
    ap.add_argument("--all-missing", action="store_true", help="Render every entry that has no post yet")
    args = ap.parse_args()

    OUTPUT_DIR.mkdir(exist_ok=True)
    js_array_name = "CARS" if args.type == "car" else "MOVIES"

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1080, "height": 1350})

        page.goto("about:blank")
        page.add_script_tag(path=str(ROOT / "data.js"))
        all_entries = page.evaluate(f"() => {js_array_name}")

        if args.all_missing:
            targets = [e["id"] for e in all_entries
                       if not any(f.name.startswith(f"{e['id']}-") for f in OUTPUT_DIR.glob("*.jpg"))]
        else:
            if not args.ids:
                ap.error("pass ids, or --all-missing")
            targets = args.ids

        for entry_id in targets:
            entry = next((e for e in all_entries if str(e["id"]) == str(entry_id)), None)
            if not entry:
                print(f"  no {args.type} with id {entry_id}, skipping")
                continue
            slug = slugify(entry["title"])
            out_path = OUTPUT_DIR / f"{entry['id']}-{slug}.jpg"
            render(page, entry, out_path, entry_type=args.type)

        browser.close()


if __name__ == "__main__":
    main()
