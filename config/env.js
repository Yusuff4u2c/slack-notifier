import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;

if (!SLACK_BOT_TOKEN) {
  console.error("Missing SLACK_BOT_TOKEN in .env");
}
