import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { query } from "../db.js";
import { requireAdmin } from "../middleware/adminAuth.js";
import { runPipelineForStock } from "../pipeline/coordinator.js";

const router = express.Router();

// --- Login (no auth required) ---
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "email and password required" });

  const result = await query(`SELECT * FROM admin_users WHERE email = $1`, [email]);
  const admin = result.rows[0];
  if (!admin) return res.status(401).json({ error: "Invalid credentials" });

  const valid = await bcrypt.compare(password, admin.password_hash);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.json({ token });
});

// Everything below requires a valid admin token
router.use(requireAdmin);

// --- Pending review queue ---
router.get("/digests/pending", async (req, res) => {
  const result = await query(
    `SELECT d.*, s.name AS stock_name, s.ticker
     FROM digests d JOIN stocks s ON s.id = d.stock_id
     WHERE d.status = 'pending'
     ORDER BY d.created_at DESC`
  );
  res.json(result.rows);
});

// Approve — promotes a digest to published. This is the human checkpoint.
router.post("/digests/:id/approve", async (req, res) => {
  const { editedSummary } = req.body; // optional: admin's edited version of summary_json
  const fields = editedSummary
    ? { summary_json: editedSummary, edited_by_admin: true }
    : {};

  const result = await query(
    `UPDATE digests
     SET status = 'published', published_at = now()
         ${editedSummary ? ", summary_json = $2, edited_by_admin = true" : ""}
     WHERE id = $1
     RETURNING *`,
    editedSummary ? [req.params.id, editedSummary] : [req.params.id]
  );
  res.json(result.rows[0]);
});

router.post("/digests/:id/reject", async (req, res) => {
  const result = await query(
    `UPDATE digests SET status = 'rejected' WHERE id = $1 RETURNING *`,
    [req.params.id]
  );
  res.json(result.rows[0]);
});

// Unpublish something that's already live
router.post("/digests/:id/unpublish", async (req, res) => {
  const result = await query(
    `UPDATE digests SET status = 'archived' WHERE id = $1 RETURNING *`,
    [req.params.id]
  );
  res.json(result.rows[0]);
});

// --- Stock management ---
router.get("/stocks", async (req, res) => {
  const result = await query(`SELECT * FROM stocks ORDER BY added_at DESC`);
  res.json(result.rows);
});

router.post("/stocks", async (req, res) => {
  const { ticker, name, sector, exchange } = req.body;
  if (!ticker || !name) return res.status(400).json({ error: "ticker and name required" });
  const result = await query(
    `INSERT INTO stocks (ticker, name, sector, exchange) VALUES ($1, $2, $3, $4) RETURNING *`,
    [ticker, name, sector || null, exchange || "NSE"]
  );
  res.json(result.rows[0]);
});

router.patch("/stocks/:id", async (req, res) => {
  const { is_active } = req.body;
  const result = await query(
    `UPDATE stocks SET is_active = $2 WHERE id = $1 RETURNING *`,
    [req.params.id, is_active]
  );
  res.json(result.rows[0]);
});

// Manual re-run for one stock, right now
router.post("/stocks/:id/run", async (req, res) => {
  const stockResult = await query(`SELECT * FROM stocks WHERE id = $1`, [req.params.id]);
  const stock = stockResult.rows[0];
  if (!stock) return res.status(404).json({ error: "Stock not found" });

  try {
    const outcome = await runPipelineForStock(stock);
    res.json(outcome);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Pipeline pause/resume ---
router.post("/pipeline/pause", async (req, res) => {
  await query(`UPDATE pipeline_settings SET is_paused = true, updated_at = now() WHERE id = 1`);
  res.json({ paused: true });
});

router.post("/pipeline/resume", async (req, res) => {
  await query(`UPDATE pipeline_settings SET is_paused = false, updated_at = now() WHERE id = 1`);
  res.json({ paused: false });
});

// --- Trade journal ---
// The admin has already executed each trade themselves through their own broker
// before it's logged here. These endpoints just record and edit that history -
// nothing here generates a trade or a signal.
router.get("/trades", async (req, res) => {
  const result = await query(`SELECT * FROM trades ORDER BY entry_date DESC, id DESC`);
  res.json(result.rows);
});

router.post("/trades", async (req, res) => {
  const { ticker, name, quantity, entry_price, entry_date, entry_notes } = req.body;
  if (!ticker || !name || !quantity || !entry_price || !entry_date) {
    return res.status(400).json({ error: "ticker, name, quantity, entry_price and entry_date are required" });
  }
  const result = await query(
    `INSERT INTO trades (ticker, name, quantity, entry_price, entry_date, entry_notes)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [ticker, name, quantity, entry_price, entry_date, entry_notes || null]
  );
  res.json(result.rows[0]);
});

router.patch("/trades/:id/close", async (req, res) => {
  const { exit_price, exit_date, exit_notes } = req.body;
  if (!exit_price || !exit_date) return res.status(400).json({ error: "exit_price and exit_date are required" });
  const result = await query(
    `UPDATE trades SET status = 'closed', exit_price = $2, exit_date = $3, exit_notes = $4, updated_at = now()
     WHERE id = $1 RETURNING *`,
    [req.params.id, exit_price, exit_date, exit_notes || null]
  );
  if (!result.rows[0]) return res.status(404).json({ error: "Trade not found" });
  res.json(result.rows[0]);
});

router.delete("/trades/:id", async (req, res) => {
  await query(`DELETE FROM trades WHERE id = $1`, [req.params.id]);
  res.json({ deleted: true });
});

// --- Logs ---
router.get("/logs", async (req, res) => {
  const limit = Math.min(parseInt(req.query.limit) || 100, 500);
  const result = await query(
    `SELECT * FROM run_logs ORDER BY created_at DESC LIMIT $1`,
    [limit]
  );
  res.json(result.rows);
});

export default router;
