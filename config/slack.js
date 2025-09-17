import dotenv from "dotenv";
dotenv.config(); // ensures env is loaded before reading

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

if (!SLACK_WEBHOOK_URL) {
  console.error("❌ Slack Webhook URL is missing.");
}

export default SLACK_WEBHOOK_URL;
