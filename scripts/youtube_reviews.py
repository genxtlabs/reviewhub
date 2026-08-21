#!/usr/bin/env python3
"""
Find and rank YouTube review videos for a single movie.

Usage:
    python3 youtube_reviews.py --title "Agadha" [--language Telugu] [--industry Tollywood] \
        [--release-date "14 Aug 2026"] [--region IN] [--pool-size 40] [--out out.json]

For a whole week's releases at once, see batch_reviews.py instead.
Requires YOUTUBE_API_KEY in the environment (see ../.env — source it before running).
"""

import argparse
import json
import sys

from yt_ranker import ApiError, find_reviews


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--title", required=True, help="Movie title")
    ap.add_argument("--language", default="", help="e.g. Tamil, Hindi, Telugu, Kannada")
    ap.add_argument("--industry", default="", help="e.g. Kollywood, Bollywood, Tollywood, Sandalwood")
    ap.add_argument("--release-date", default="", help="e.g. '21 Aug 2026'")
    ap.add_argument("--region", default="IN")
    ap.add_argument("--pool-size", type=int, default=40, help="How many search results to consider")
    ap.add_argument("--out", default=None, help="Write JSON to this file (default: stdout)")
    args = ap.parse_args()

    try:
        result = find_reviews(
            title=args.title, language=args.language, industry=args.industry,
            release_date=args.release_date, region=args.region, pool_size=args.pool_size,
        )
    except ApiError as e:
        print(str(e), file=sys.stderr)
        sys.exit(1)

    output = json.dumps(result, indent=2, ensure_ascii=False)
    if args.out:
        with open(args.out, "w") as f:
            f.write(output)
        print(f"Wrote {len(result['videos'])} videos to {args.out}", file=sys.stderr)
    else:
        print(output)


if __name__ == "__main__":
    main()
