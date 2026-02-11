import axios from "axios";
import { SLACK_BOT_TOKEN } from "../config/env.js";

export async function sendSlackMessage(text, targetId) {
  console.log(SLACK_BOT_TOKEN);
  const destination = targetId || process.env.SLACK_DEFAULT_CHANNEL_ID;

  if (!SLACK_BOT_TOKEN) {
    console.error("Slack Bot Token is missing.");
    return;
  }

  try {
    await axios.post(
      "https://slack.com/api/chat.postMessage",

      { channel: destination, text: text },
      {
        headers: {
          Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json",
        },
        data: { text },
      },
    );
  } catch (err) {
    console.error(
      "Error sending Slack message:",
      err.response?.data || err.message,
    );
  }
}
