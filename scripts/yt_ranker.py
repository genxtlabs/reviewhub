"""
Shared core: find and rank YouTube review videos for a movie using the real
YouTube Data API v3.

Selection rule: top 10 videos by view count, unioned with the videos
belonging to the top 5 channels by subscriber count (among the same
candidate pool). Overlap between the two groups is expected and fine.

Used by both youtube_reviews.py (single movie) and batch_reviews.py
(a whole week's worth of releases in one run).

Requires YOUTUBE_API_KEY in the environment (see ../.env).
"""

import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request

API_BASE = "https://www.googleapis.com/youtube/v3"

EXCLUDE_KEYWORDS = [
    "trailer", "teaser", "first look", "glimpse", "motion poster",
    "audio launch", "pre-release event", "pre release event", "trailer launch",
    "song", "lyrical", "making video", "behind the scenes", "interview",
    "music video", "video song", "audio song", "hero introduction",
    "introducing the hero", "introducing the", "single track", "whistle podu",
]

# A title must actually read like a review, not just mention the movie —
# without this, promo content (which gets posted earlier and racks up more
# views before real reviews exist) dominates the views ranking for movies
# that just released or haven't released yet.
REQUIRE_KEYWORDS = [
    "review", "public talk", "talk", "verdict", "rating", "reaction",
    "genuine", "hit or flop", "hit or miss",
    # Car-review title patterns that don't necessarily say "review" outright.
    "first drive", "test drive", "road test", "walkaround", "walk around",
]


class ApiError(Exception):
    pass


def get_api_key():
    key = os.environ.get("YOUTUBE_API_KEY")
    if not key:
        raise ApiError("YOUTUBE_API_KEY is not set. Run: source .env")
    return key


def api_get(path, params, api_key):
    params = {**params, "key": api_key}
    url = f"{API_BASE}/{path}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers={"Accept": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            return json.load(resp)
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        raise ApiError(f"YouTube API error ({e.code}) on {path}: {body}")


def is_relevant(title, video_title):
    norm_title = "".join(ch for ch in title.lower() if ch.isalnum() or ch.isspace()).strip()
    norm_video = video_title.lower()
    if norm_title and norm_title not in norm_video:
        return False
    if any(kw in norm_video for kw in EXCLUDE_KEYWORDS):
        return False
    if not any(kw in norm_video for kw in REQUIRE_KEYWORDS):
        return False
    return True


def search_candidates(title, region, pool_size, api_key, query_suffix="movie review"):
    items = []
    page_token = None
    query = f"{title} {query_suffix}"
    while len(items) < pool_size:
        params = {
            "part": "snippet",
            "q": query,
            "type": "video",
            "maxResults": min(50, pool_size - len(items)),
            "regionCode": region,
            "relevanceLanguage": "en",
        }
        if page_token:
            params["pageToken"] = page_token
        data = api_get("search", params, api_key)
        items.extend(data.get("items", []))
        page_token = data.get("nextPageToken")
        if not page_token:
            break
    return items[:pool_size]


def fetch_video_stats(video_ids, api_key):
    out = {}
    for i in range(0, len(video_ids), 50):
        chunk = video_ids[i:i + 50]
        data = api_get("videos", {"part": "snippet,statistics", "id": ",".join(chunk)}, api_key)
        for it in data.get("items", []):
            out[it["id"]] = it
    return out


def fetch_channel_stats(channel_ids, api_key):
    out = {}
    ids = list(dict.fromkeys(channel_ids))
    for i in range(0, len(ids), 50):
        chunk = ids[i:i + 50]
        data = api_get("channels", {"part": "snippet,statistics", "id": ",".join(chunk)}, api_key)
        for it in data.get("items", []):
            out[it["id"]] = it
    return out


def find_reviews(title, language="", industry="", release_date="", region="IN", pool_size=40, api_key=None, query_suffix="movie review"):
    """Returns the same JSON-shaped dict youtube_reviews.py used to print."""
    api_key = api_key or get_api_key()

    candidates = search_candidates(title, region, pool_size, api_key, query_suffix=query_suffix)
    video_ids = [c["id"]["videoId"] for c in candidates if c.get("id", {}).get("videoId")]
    if not video_ids:
        return {
            "title": title, "language": language, "industry": industry,
            "releaseDate": release_date, "candidatesConsidered": 0,
            "videos": [], "note": "no candidates found",
        }

    stats = fetch_video_stats(video_ids, api_key)
    videos = []
    for vid, data in stats.items():
        snip = data.get("snippet", {})
        st = data.get("statistics", {})
        if not is_relevant(title, snip.get("title", "")):
            continue
        videos.append({
            "videoId": vid,
            "url": f"https://www.youtube.com/watch?v={vid}",
            "title": snip.get("title", ""),
            "channelId": snip.get("channelId", ""),
            "channelTitle": snip.get("channelTitle", ""),
            "publishedAt": snip.get("publishedAt", ""),
            "viewCount": int(st.get("viewCount", 0)),
        })

    channel_ids = [v["channelId"] for v in videos]
    channel_stats = fetch_channel_stats(channel_ids, api_key)
    for v in videos:
        ch = channel_stats.get(v["channelId"], {})
        v["subscriberCount"] = int(ch.get("statistics", {}).get("subscriberCount", 0))

    by_views = sorted(videos, key=lambda v: v["viewCount"], reverse=True)
    top_by_views = by_views[:10]

    best_per_channel = {}
    for v in videos:
        cur = best_per_channel.get(v["channelId"])
        if cur is None or v["viewCount"] > cur["viewCount"]:
            best_per_channel[v["channelId"]] = v
    by_subs = sorted(best_per_channel.values(), key=lambda v: v["subscriberCount"], reverse=True)
    top_by_subs = by_subs[:5]

    selected = {}
    for v in top_by_views:
        selected[v["videoId"]] = {**v, "matchedBy": ["views"]}
    for v in top_by_subs:
        if v["videoId"] in selected:
            selected[v["videoId"]]["matchedBy"].append("subscribers")
        else:
            selected[v["videoId"]] = {**v, "matchedBy": ["subscribers"]}

    return {
        "title": title,
        "language": language,
        "industry": industry,
        "releaseDate": release_date,
        "candidatesConsidered": len(videos),
        "videos": sorted(selected.values(), key=lambda v: v["viewCount"], reverse=True),
    }
