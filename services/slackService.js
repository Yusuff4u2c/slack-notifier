import axios from "axios";
import { SLACK_BOT_TOKEN } from "../config/env.js";

export async function sendSlackMessage(text, targetId) {
  if (!SLACK_BOT_TOKEN) {
    throw new Error("Slack Bot Token is missing.");
  }

  try {
    await axios.post(
      "https://slack.com/api/chat.postMessage",
      { channel: process.env.SLACK_DEFAULT_CHANNEL_ID, text: text },
      {
        headers: {
          Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (targetId) {
      await axios.post(
        "https://slack.com/api/chat.postMessage",
        { channel: targetId, text: text },
        {
          headers: {
            Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
            "Content-Type": "application/json",
          },
        },
      );
    }
  } catch (err) {
    console.error(
      "Error sending Slack message:",
      err.response?.data || err.message,
    );
    throw err;
  }
}
