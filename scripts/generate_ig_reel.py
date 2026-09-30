#!/usr/bin/env python3
"""Generate a narrated, animated Instagram Reel for one or more ReviewHub
movies or cars, built on top of the existing static post image.

Usage:
    python3 scripts/generate_ig_reel.py <id> [<id> ...]              # movies (default)
    python3 scripts/generate_ig_reel.py --type car <id> [<id> ...]   # cars
    python3 scripts/generate_ig_reel.py --all-missing [--type car]   # every entry with no reel yet

Requires: the matching social-posts/<id>-<slug>.jpg to already exist
(run generate_ig_post.py first), Node.js, macOS's built-in `say` command,
and ffmpeg — all already used elsewhere in this project, no new installs.

The narration is built entirely from real, already-published site data
(title, score, verdict, and the same pull-quote used on the poster) — no
new text is invented. Output: social-posts/<id>-<slug>.mp4 (same frame as
the source JPEG, slow Ken Burns zoom, narrated).

This only renders the video. It does not post anything to Instagram —
see generate_ig_post.py's docstring for what real publishing still needs.
"""
import argparse
import json
import subprocess

from generate_ig_post import (
    ROOT, OUTPUT_DIR, MOVIE_VERDICT_LABELS, CAR_VERDICT_LABELS,
    slugify, pick_pull_quote,
)

DEFAULT_VOICE = "Samantha"


def load_entries(js_array_name):
    script = (
        f"const fs=require('fs');"
        f"const code=fs.readFileSync('{ROOT / 'data.js'}','utf8');"
        f"const sandbox={{}};"
        f"require('vm').createContext(sandbox);"
        f"require('vm').runInContext(code+'\\nthis.{js_array_name}={js_array_name};',sandbox);"
        f"console.log(JSON.stringify(sandbox.{js_array_name}));"
    )
    result = subprocess.run(["node", "-e", script], check=True, capture_output=True, text=True)
    return json.loads(result.stdout)


def build_narration(entry, entry_type):
    quote = pick_pull_quote(entry)
    if not quote:
        return None
    verdict_label = (CAR_VERDICT_LABELS if entry_type == "car" else MOVIE_VERDICT_LABELS)[entry["verdictKey"]]
    return (
        f"{entry['title']}. Rated {entry['score']} out of 10 — {verdict_label}, "
        f"based on {entry['reviewCount']} real reviews. {quote}"
    )


def make_reel(image_path, narration_text, out_path, voice):
    aiff_path = out_path.with_suffix(".aiff")
    subprocess.run(["say", "-v", voice, "-o", str(aiff_path), narration_text], check=True)
    try:
        subprocess.run(
            [
                "ffmpeg", "-y", "-loop", "1", "-i", str(image_path), "-i", str(aiff_path),
                "-filter_complex",
                "[0:v]scale=2160:2700,zoompan=z='min(zoom+0.0008,1.15)':d=1:s=1080x1350:fps=30[v]",
                "-map", "[v]", "-map", "1:a",
                "-c:v", "libx264", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "128k",
                "-shortest", str(out_path),
            ],
            check=True, capture_output=True, text=True,
        )
    finally:
        aiff_path.unlink(missing_ok=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("ids", nargs="*", help="Movie or car ids to render")
    ap.add_argument("--type", choices=["movie", "car"], default="movie", help="Which vertical (default: movie)")
    ap.add_argument("--all-missing", action="store_true", help="Render every entry that has a poster but no reel yet")
    ap.add_argument("--voice", default=DEFAULT_VOICE, help=f"macOS 'say' voice to narrate with (default: {DEFAULT_VOICE})")
    args = ap.parse_args()

    js_array_name = "CARS" if args.type == "car" else "MOVIES"
    all_entries = load_entries(js_array_name)

    if args.all_missing:
        targets = []
        for e in all_entries:
            jpgs = list(OUTPUT_DIR.glob(f"{e['id']}-*.jpg"))
            mp4s = list(OUTPUT_DIR.glob(f"{e['id']}-*.mp4"))
            if jpgs and not mp4s:
                targets.append(e["id"])
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
        image_path = OUTPUT_DIR / f"{entry['id']}-{slug}.jpg"
        if not image_path.exists():
            print(f"  skipping id {entry_id} ({entry['title']}): no poster image yet — run generate_ig_post.py first")
            continue

        narration = build_narration(entry, args.type)
        if not narration:
            print(f"  skipping id {entry_id} ({entry['title']}): no reviewed videos yet")
            continue

        out_path = OUTPUT_DIR / f"{entry['id']}-{slug}.mp4"
        make_reel(image_path, narration, out_path, args.voice)
        print(f"  wrote {out_path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
