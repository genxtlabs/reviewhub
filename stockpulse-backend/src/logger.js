import { query } from "./db.js";

// Same purpose as the newsletter's logger.js — every handoff between agents gets recorded,
// not just the final output — but persisted to Postgres so the admin panel can display it,
// instead of a local .log file that only exists on the server's disk.
export async function log(stage, data, { stockId = null, digestId = null } = {}) {
  const entry = { stage, data, stockId, digestId, timestamp: new Date().toISOString() };
  console.log(`[${entry.timestamp}] [${stage}]`, JSON.stringify(data).slice(0, 500));
  try {
    await query(
      `INSERT INTO run_logs (stock_id, digest_id, stage, data) VALUES ($1, $2, $3, $4)`,
      [stockId, digestId, stage, JSON.stringify(data)]
    );
  } catch (err) {
    // Logging must never crash the pipeline itself
    console.error("Failed to persist log entry:", err.message);
  }
}
