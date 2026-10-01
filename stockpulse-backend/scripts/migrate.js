import "dotenv/config";
import fs from "fs";
import path from "path";
import { pool } from "../src/db.js";

const schema = fs.readFileSync(path.join(process.cwd(), "db", "schema.sql"), "utf-8");

try {
  await pool.query(schema);
  console.log("Schema applied successfully.");
} catch (err) {
  console.error("Migration failed:", err.message);
  process.exit(1);
} finally {
  await pool.end();
}
