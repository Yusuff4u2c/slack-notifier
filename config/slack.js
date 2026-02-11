import dotenv from "dotenv";
dotenv.config();

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;

if (!SLACK_BOT_TOKEN) {
  console.error("Slack Bot Token is missing.");
}

export default SLACK_BOT_TOKEN;
