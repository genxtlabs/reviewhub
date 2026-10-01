import "dotenv/config";
import express from "express";
import cors from "cors";
import cron from "node-cron";
import publicRoutes from "./src/routes/public.js";
import adminRoutes from "./src/routes/admin.js";
import { runPipelineForAllActiveStocks } from "./src/pipeline/coordinator.js";
import { log } from "./src/logger.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", publicRoutes);
app.use("/api/admin", adminRoutes);

app.get("/health", (req, res) => res.json({ status: "ok" }));

// Manual trigger for the whole batch, gated behind admin auth in routes/admin.js
// isn't needed separately — per-stock re-run already covers that. This schedule
// is what runs the daily job automatically.
const SCHEDULE = process.env.PIPELINE_CRON || "0 8 * * *"; // 8am IST daily by default
cron.schedule(SCHEDULE, async () => {
  await log("coordinator", { action: "scheduled run starting" });
  const outcome = await runPipelineForAllActiveStocks();
  await log("coordinator", { action: "scheduled run finished", outcome });
}, { timezone: "Asia/Kolkata" });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`StockPulse API running on port ${port}`));
