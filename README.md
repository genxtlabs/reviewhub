# ReviewHub

Live at **genxtlabs.com**. A review aggregator, currently live for Movies
(Cars and Stocks are "coming soon" tiles on the hub) — showing an
aggregate score, verdict, and a language-filterable list of YouTube
reviewer videos per movie, plus an admin panel to add movies and their
reviews.

This is a **static site** — plain HTML/CSS/JS, no server, no build
step, no database. Data lives in the browser's `localStorage`, hosted
for free on GitHub Pages. Open the `.html` files directly (`file://`)
in any browser to work on it locally.

## Files

**Public site**
- `index.html` — the hub/landing page (icon tiles for each vertical)
- `movies/index.html` — Movies homepage: hero, movie grid, language filter
- `movies/movie.html` — movie detail page: score, verdict, official trailer, pros/cons, reviewer videos
- `data.js` — seed data for the 9 demo movies + shared helpers (verdict labels, summary-text builder)
- `store.js` — the `localStorage` data layer (all pages read/write through this)
- `styles.css` — shared styling (dark "cinematic" theme, Fraunces + Manrope)
- `assets/` — hero/tile images actually used by the live site

**Admin**
- `admin-login.html` — login (`admin` / `reviewhub2026` — hardcoded, not real auth, see Limitations)
- `admin.html` — dashboard: list movies, publish/unpublish, delete
- `admin-edit.html` — add/edit a movie: poster upload, language picker, paste or import review links, fill in verdict/rating/quote per video, edit the aggregate summary/pros/cons, save draft or publish
- `admin-settings.html` — upload a replacement hero photo per vertical without touching code

**Automation scripts** (`scripts/`, all free — no paid API involved)
- `yt_ranker.py` — shared core: given a movie title, searches YouTube and ranks review videos by view count (top 10) and channel subscriber count (top 5)
- `youtube_reviews.py` — CLI for one movie's reviews at a time
- `batch_reviews.py` — CLI for a hand-written list of movies (a week's releases) at once
- `cinemaip_releases.py` — **the recommended path**: pulls real release data (title, language, synopsis, poster, banner, trailer) from cinemaip.ai's public API *and* ranks YouTube reviews, in one command
- `releases.example.json` — example input shape for `batch_reviews.py`

## Setup

1. Get a free **YouTube Data API v3** key (console.cloud.google.com →
   new project → enable "YouTube Data API v3" → Credentials → Create
   API key). 10,000 free quota units/day.
2. Put it in a `.env` file in this folder:
   ```
   YOUTUBE_API_KEY=your_key_here
   ```
   (`.env` is git-ignored — never share this file or commit it.)

That's the only credential actually in use. `SARVAM_API_KEY` and
`XAI_API_KEY` may also be sitting in `.env` from earlier experiments
with real transcription — nothing currently calls them, so they cost
nothing to leave there. cinemaip.ai's API needs no key at all (it's
public, owned by the same person running this project).

## Weekly workflow

1. **Pull this week's releases + rank their reviews, in one command:**
   ```
   source .env
   python3 scripts/cinemaip_releases.py --category in_theatres --language Telugu --outdir scripts/releases/2026-08-21
   ```
   (`--category upcoming` for not-yet-released films; drop `--language`
   for all languages.) Writes one JSON file per movie with real title,
   synopsis, poster/banner URLs, trailer ID, and ranked review videos.

   If cinemaip.ai doesn't have a movie you want, the older path still
   works: ask Claude to check Wikipedia's "List of Hindi/Telugu/Tamil/
   Kannada films of `<year>`" pages (BookMyShow itself can't be
   fetched — see Limitations), then run `youtube_reviews.py` or
   `batch_reviews.py` by hand.
2. **Import into admin.** Log into `admin-login.html`, **Add new
   movie**, open **"+ Import from youtube_reviews.py output"**, paste
   one movie's JSON. Title, language, industry, synopsis, poster,
   banner, and trailer all auto-fill; every review appears as a row
   with its real channel name, view count, and subscriber count.
3. **Watch and fill in.** For each video worth including, open the
   link, watch/skim it, and type in Verdict / Rating / a one-line
   quote yourself. There is no automatic transcription — this is a
   deliberate choice to keep the whole thing free (see below).
4. **Publish.** The aggregate score/verdict/spread compute
   automatically from whatever you've filled in. Publish makes it
   appear on the live site.

## Why there's no automatic transcription

Real transcription would mean downloading each video's audio (e.g.
via `yt-dlp`) and sending it to a speech-to-text API (Sarvam) plus an
LLM (Grok) for summarization — both cost money, and downloading
YouTube audio for this kind of reuse isn't something YouTube's ToS
authorizes. Given that tradeoff, the current design keeps the
free/automatic part (finding movies, finding and ranking real review
videos) and makes the paid/judgment part (what does this reviewer
actually say) a fast manual step: you already know which videos are
worth watching because they're pre-ranked by real popularity.

## Known limitations

- **No real backend.** Everything is `localStorage` in one browser.
  Publishing on one computer/browser won't show up on another device.
- **Admin login is not secure.** Hardcoded credentials, client-side
  check, trivially bypassable via dev tools. Fine for a solo
  operator; not for anything with other people's access to it.
- **BookMyShow can't be fetched directly** — blocked at the network
  level for this tool. cinemaip.ai (own site) and Wikipedia are the
  working substitutes.
- **The "top 10 by views / top 5 by subscribers" rule is best-effort.**
  It depends on a title/keyword filter to exclude trailers, music
  videos, and unrelated same-named content — reasonably solid in
  testing, but a very generic movie title can still need a manual
  once-over.
- **Reviews are sparse for movies that haven't released yet.** The
  ranking script works best run on or after release day — the day
  before, there may be only a handful of embargo reviews.
- **YouTube trailer embeds don't render over `file://`** (shows
  "Error 153") — this is a YouTube iframe restriction on the `file://`
  origin, not a bug. Works fine on the real hosted site, or when
  testing locally over `http://localhost` (e.g. `python3 -m http.server`).

## Original scope

This started from a full PRD for a much larger product (multi-vertical,
auto-discovery, monetization, a real Postgres/queue backend — see the
conversation history / `Main.dc.html` + `MovieDetail.dc.html`, which
are early Design-canvas mockups, not part of the working site).
What's built here is a deliberately smaller, zero-cost slice of that:
Movies live now, Cars/Stocks as placeholders, admin-curated, manual
review entry, real discovery/ranking automation underneath it.
