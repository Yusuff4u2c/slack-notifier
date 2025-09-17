import axios from "axios";
import { SLACK_WEBHOOK_URL } from "../config/env.js";

export async function sendSlackMessage(text) {
  console.log(SLACK_WEBHOOK_URL);

  if (!SLACK_WEBHOOK_URL) {
    console.error("Slack Webhook URL is missing.");
    return;
  }

  try {
    await axios.post(SLACK_WEBHOOK_URL, { text });
  } catch (err) {
    console.error(
      "Error sending Slack message:",
      err.response?.data || err.message
    );
  }
}
