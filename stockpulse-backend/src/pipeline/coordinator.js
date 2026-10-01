import { research } from "./researcher.js";
import { summarize } from "./summarizer.js";
import { evaluate } from "./evaluator.js";
import { log } from "../logger.js";
import { query } from "../db.js";

const MAX_ITERATIONS = 3;

// Runs the full pipeline for one stock and inserts a 'pending' digest row.
// Nothing here ever writes status='published' — that promotion only happens
// from the admin panel (see routes/admin.js), which is the human-in-the-loop
// checkpoint before anything goes live.
export async function runPipelineForStock(stock) {
  const { notes, priceSnapshot } = await research(stock);

  let summary = await summarize(stock, notes);
  let iteration = 1;
  let verdict = await evaluate(stock, notes, summary);

  while (verdict !== "APPROVED" && iteration < MAX_ITERATIONS) {
    await log("coordinator", { iteration, verdict, action: "retrying summarizer" }, { stockId: stock.id });
    summary = await summarize(stock, notes);
    verdict = await evaluate(stock, notes, summary);
    iteration++;
  }

  const result = await query(
    `INSERT INTO digests (stock_id, status, price_snapshot, research_notes, summary_json, evaluator_verdict, iterations)
     VALUES ($1, 'pending', $2, $3, $4, $5, $6)
     RETURNING id`,
    [stock.id, priceSnapshot, notes, summary, verdict, iteration]
  );

  const digestId = result.rows[0].id;
  await log("coordinator", { finalIteration: iteration, verdict, digestId }, { stockId: stock.id, digestId });

  return { digestId, verdict, iterations: iteration };
}

// Runs the pipeline across every active, tracked stock — this is what the
// scheduled job calls. Failures on one stock never block the others.
export async function runPipelineForAllActiveStocks() {
  const settings = await query(`SELECT is_paused FROM pipeline_settings WHERE id = 1`);
  if (settings.rows[0]?.is_paused) {
    await log("coordinator", { action: "skipped — pipeline is paused" });
    return { skipped: true };
  }

  const stocks = await query(`SELECT * FROM stocks WHERE is_active = true`);
  const results = [];

  for (const stock of stocks.rows) {
    try {
      const outcome = await runPipelineForStock(stock);
      results.push({ ticker: stock.ticker, ...outcome });
    } catch (err) {
      await log("coordinator", { ticker: stock.ticker, error: err.message }, { stockId: stock.id });
      results.push({ ticker: stock.ticker, error: err.message });
    }
  }

  return { results };
}
