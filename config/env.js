import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

if (!SLACK_WEBHOOK_URL) {
  console.error("❌ Missing SLACK_WEBHOOK_URL in .env");
}
