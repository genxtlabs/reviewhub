import express from "express";
import { query } from "../db.js";
import { fetchPriceSnapshot } from "../pipeline/researcher.js";

const router = express.Router();

// Trade journal - a transparent, after-the-fact record of trades already executed
// by the admin through their own broker. Never AI-generated, never a live signal.
// Open positions get a live current price so unrealized P&L can be shown; closed
// positions use the exit price the admin already entered, no live fetch needed.
router.get("/trades", async (req, res) => {
  const result = await query(`SELECT * FROM trades ORDER BY entry_date DESC, id DESC`);
  const trades = await Promise.all(result.rows.map(async (t) => {
    if (t.status !== "open") return t;
    try {
      const snapshot = await fetchPriceSnapshot(t.ticker);
      return { ...t, current_price: snapshot.price };
    } catch {
      return t;
    }
  }));
  res.json(trades);
});

// Latest published digest per stock — this is the homepage feed
router.get("/stocks", async (req, res) => {
  const result = await query(`
    SELECT DISTINCT ON (s.id)
      s.id, s.ticker, s.name, s.sector,
      d.id AS digest_id, d.summary_json, d.price_snapshot, d.published_at
    FROM stocks s
    JOIN digests d ON d.stock_id = s.id AND d.status = 'published'
    WHERE s.is_active = true
    ORDER BY s.id, d.published_at DESC
  `);
  res.json(result.rows);
});

// One stock's full history of published digests
router.get("/stocks/:ticker", async (req, res) => {
  const stockResult = await query(`SELECT * FROM stocks WHERE ticker = $1`, [req.params.ticker]);
  const stock = stockResult.rows[0];
  if (!stock) return res.status(404).json({ error: "Stock not found" });

  const digests = await query(
    `SELECT id, summary_json, price_snapshot, published_at
     FROM digests WHERE stock_id = $1 AND status = 'published'
     ORDER BY published_at DESC`,
    [stock.id]
  );

  res.json({ stock, digests: digests.rows });
});

export default router;
