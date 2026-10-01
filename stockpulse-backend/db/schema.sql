-- StockPulse data model
-- Same researcher -> summarizer -> evaluator -> coordinator pipeline from the newsletter,
-- but the coordinator writes to `digests` with status='pending' instead of auto-publishing.
-- An admin has to promote a digest to 'published' before it's visible on the public site.

CREATE TABLE IF NOT EXISTS admin_users (
  id            SERIAL PRIMARY KEY,
  email         TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Public site users (for logins, watchlists, digest emails later)
CREATE TABLE IF NOT EXISTS users (
  id            SERIAL PRIMARY KEY,
  email         TEXT UNIQUE NOT NULL,
  password_hash TEXT,             -- null if user signed up via Google OAuth
  google_id     TEXT UNIQUE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- The stocks you're actively tracking. Adding/removing one is an admin-panel action,
-- not a code change.
CREATE TABLE IF NOT EXISTS stocks (
  id           SERIAL PRIMARY KEY,
  ticker       TEXT UNIQUE NOT NULL,      -- e.g. "RELIANCE.NS"
  name         TEXT NOT NULL,             -- e.g. "Reliance Industries Ltd"
  sector       TEXT,
  exchange     TEXT NOT NULL DEFAULT 'NSE',
  is_active    BOOLEAN NOT NULL DEFAULT true,  -- pause a stock without deleting its history
  added_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- One row per pipeline run per stock. This is the actual content.
CREATE TABLE IF NOT EXISTS digests (
  id              SERIAL PRIMARY KEY,
  stock_id        INTEGER NOT NULL REFERENCES stocks(id) ON DELETE CASCADE,
  status          TEXT NOT NULL DEFAULT 'pending', -- pending | published | rejected | archived
  price_snapshot  JSONB,        -- { price, change, changePercent, volume, ... } at fetch time
  research_notes  TEXT,         -- raw researcher output (news + data), kept for the admin to check grounding
  summary_json    JSONB,        -- { title, keyPoints[], takeaway } from the summarizer
  evaluator_verdict TEXT,       -- APPROVED | REVISE, from the automated grounding check
  iterations      INTEGER NOT NULL DEFAULT 1,
  edited_by_admin BOOLEAN NOT NULL DEFAULT false,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  published_at    TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_digests_stock_status ON digests(stock_id, status);
CREATE INDEX IF NOT EXISTS idx_digests_status_created ON digests(status, created_at DESC);

-- Every stage of every run, same idea as logger.js in the newsletter but persisted in the DB
-- so the admin panel can show it, not just a local log file.
CREATE TABLE IF NOT EXISTS run_logs (
  id          SERIAL PRIMARY KEY,
  stock_id    INTEGER REFERENCES stocks(id) ON DELETE SET NULL,
  digest_id   INTEGER REFERENCES digests(id) ON DELETE SET NULL,
  stage       TEXT NOT NULL,     -- researcher | summarizer | evaluator | coordinator
  data        JSONB NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS watchlists (
  user_id   INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  stock_id  INTEGER NOT NULL REFERENCES stocks(id) ON DELETE CASCADE,
  added_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, stock_id)
);

-- One row = the whole pipeline is on or off. Lets the admin hit "pause everything"
-- from the panel without touching the server.
CREATE TABLE IF NOT EXISTS pipeline_settings (
  id            INTEGER PRIMARY KEY DEFAULT 1,
  is_paused     BOOLEAN NOT NULL DEFAULT false,
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT single_row CHECK (id = 1)
);
INSERT INTO pipeline_settings (id, is_paused) VALUES (1, false) ON CONFLICT (id) DO NOTHING;

-- Personal trade journal - a transparent, after-the-fact disclosure of trades the
-- admin has ALREADY executed themselves through their own broker. This is never
-- AI-generated and never a live buy/sell signal: the admin decides and executes a
-- trade on their own, then logs it here once it's already done. A trade starts
-- 'open' at entry; closing it fills in the exit fields and the realized P&L becomes
-- visible. Deliberately separate from the `digests` pipeline, which stays
-- informational-only and never touches real trades.
CREATE TABLE IF NOT EXISTS trades (
  id            SERIAL PRIMARY KEY,
  ticker        TEXT NOT NULL,
  name          TEXT NOT NULL,
  quantity      NUMERIC NOT NULL,
  entry_price   NUMERIC NOT NULL,
  entry_date    DATE NOT NULL,
  entry_notes   TEXT,
  exit_price    NUMERIC,
  exit_date     DATE,
  exit_notes    TEXT,
  status        TEXT NOT NULL DEFAULT 'open',  -- open | closed
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_trades_status_entry ON trades(status, entry_date DESC);
