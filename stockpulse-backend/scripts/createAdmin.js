import "dotenv/config";
import bcrypt from "bcryptjs";
import { query } from "../src/db.js";

// Usage: node scripts/createAdmin.js you@example.com yourpassword
const [, , email, password] = process.argv;

if (!email || !password) {
  console.error("Usage: node scripts/createAdmin.js <email> <password>");
  process.exit(1);
}

const hash = await bcrypt.hash(password, 10);
await query(
  `INSERT INTO admin_users (email, password_hash) VALUES ($1, $2)
   ON CONFLICT (email) DO UPDATE SET password_hash = $2`,
  [email, hash]
);

console.log(`Admin user ready: ${email}`);
process.exit(0);
