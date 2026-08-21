# ReviewHub

A movie-review aggregator: a public site showing an aggregate score,
verdict, and a language-filterable list of YouTube reviewer videos per
movie, plus an admin panel to add movies and their reviews.

This is a **static prototype** — plain HTML/CSS/JS, no server, no
build step, no database. Data lives in the browser's `localStorage`.
Open the `.html` files directly (`file://`) in any browser.

## Files

**Public site**
- `index.html` — homepage: movie grid, language filter
- `movie.html` — movie detail page: score, verdict, pros/cons, reviewer videos
- `data.js` — seed data for the 9 demo movies + shared helpers (verdict labels, summary-text builder)
- `store.js` — the `localStorage` data layer (all pages read/write through this)
- `styles.css` — shared styling

**Admin**
- `admin-login.html` — login (`admin` / `reviewhub2026` — hardcoded, not real auth, see Limitations)
- `admin.html` — dashboard: list movies, publish/unpublish, delete
- `admin-edit.html` — add/edit a movie: poster upload, language picker (can add new languages), paste or import review links, fill in verdict/rating/quote per video, edit the aggregate summary/pros/cons, save draft or publish

**Automation scripts** (`scripts/`, all free — no paid API involved)
- `yt_ranker.py` — shared core: given a movie title, searches YouTube and ranks review videos by view count (top 10) and channel subscriber count (top 5)
- `youtube_reviews.py` — CLI for one movie at a time
- `batch_reviews.py` — CLI for a whole list of movies at once (a week's releases)
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
nothing to leave there.

## Weekly workflow

1. **Find new releases.** Ask Claude to check Wikipedia's "List of
   Hindi/Telugu/Tamil/Kannada films of `<year>`" pages for a given date
   (BookMyShow itself can't be fetched — see Limitations). This step
   isn't scripted; Claude does it live via web fetch each time you ask.
2. **Rank YouTube reviews for those movies.** Either:
   - One movie: `python3 scripts/youtube_reviews.py --title "Irumudi" --language Telugu --industry Tollywood --release-date "21 Aug 2026" --out out.json`
   - A whole week: write a JSON list like `releases.example.json`, then
     `python3 scripts/batch_reviews.py --input releases.json --outdir scripts/releases/2026-08-21`
   (Remember to `source .env` first so `YOUTUBE_API_KEY` is set — or
   just ask Claude to run it.)
3. **Import into admin.** Log into `admin-login.html`, **Add new
   movie**, open **"+ Import from youtube_reviews.py output"**, paste
   the JSON. Title/language/industry auto-fill; every video appears as
   a row with its real channel name, view count, and subscriber count
   already filled in.
4. **Watch and fill in.** For each video worth including, open the
   link, watch/skim it, and type in Verdict / Rating / a one-line
   quote yourself. There is no automatic transcription — this is a
   deliberate choice to keep the whole thing free (see below).
5. **Publish.** The aggregate score/verdict/spread compute
   automatically from whatever you've filled in. Publish makes it
   appear on `index.html`.

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
  Publishing on one computer won't show up on another. There's no
  real user-facing hosting yet.
- **Admin login is not secure.** Hardcoded credentials, client-side
  check, trivially bypassable via dev tools. Fine for a solo
  prototype; not for anything with other people's access to it.
- **BookMyShow can't be fetched directly** — blocked at the network
  level for this tool. Wikipedia's per-language film-list pages are
  the working substitute.
- **The "top 10 by views / top 5 by subscribers" rule is best-effort.**
  It depends on a title/keyword filter to exclude trailers, music
  videos, and unrelated same-named content — reasonably solid in
  testing, but a very generic movie title can still need a manual
  once-over.
- **Reviews are sparse for movies that haven't released yet.** The
  ranking script works best run on or after release day — the day
  before, there may be only a handful of embargo reviews.

## Original scope

This started from a full PRD for a much larger product (multi-vertical,
auto-discovery, monetization, a real Postgres/queue backend — see the
conversation history / `Main.dc.html` + `MovieDetail.dc.html`, which
are early Design-canvas mockups, not part of the working prototype).
What's built here is a deliberately smaller, zero-cost slice of that:
Movies only, admin-curated, manual review entry, real discovery and
ranking automation underneath it.
