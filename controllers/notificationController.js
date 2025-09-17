import { sendSlackMessage } from "../services/slackService.js";

export async function notifyOrder(req, res) {
  try {
    const { orderId, userId, amount } = req.body;

    await sendSlackMessage(
      `New Order\nOrder ID: ${orderId}\nUser: ${userId}\nAmount: ${amount}`
    );

    res.status(200).json({ status: true, message: "Slack notification sent" });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message || "Slack notification failed",
    });
  }
}

export async function notifyVerification(req, res) {
  try {
    const { userId, verificationType } = req.body;

    await sendSlackMessage(
      `Verification Request\nUser: ${userId}\nType: ${verificationType}`
    );

    res.status(200).json({ status: true, message: "Slack notification sent" });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message || "Slack notification failed",
    });
  }
}

export async function notifyDeposit(req, res) {
  try {
    const { userId, amount, currency } = req.body;

    await sendSlackMessage(
      `Deposit\nUser: ${userId}\nAmount: ${amount} ${currency}`
    );

    res
      .status(200)
      .json({ status: "true", message: "Slack notification sent" });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message || "Slack notification failed",
    });
  }
}
