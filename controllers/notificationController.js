import { sendSlackMessage } from "../services/slackService.js";

export async function notifyOrder(req, res) {
  try {
    const { orderId, userId, amount, targetId } = req.body;

    await sendSlackMessage(
      `New Order\nOrder ID: ${orderId}\nUser: ${userId}\nAmount: ${amount}`,
      targetId,
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
    const { userId, verificationType, targetId } = req.body;

    await sendSlackMessage(
      `Verification Request\nUser: ${userId}\nType: ${verificationType}`,
      targetId,
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
    const { userId, amount, currency, targetId } = req.body;

    await sendSlackMessage(
      `Deposit\nUser: ${userId}\nAmount: ${amount} ${currency}\n<!channel>`,
      targetId,
    );

    res.status(200).json({ status: true, message: "Slack notification sent" });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message || "Slack notification failed",
    });
  }
}

export async function notifyLogin(req, res) {
  try {
    const { email, targetId } = req.body;

    if (!targetId) {
      return res
        .status(400)
        .json({ status: false, message: "Slack user ID is required" });
    }

    const code = Math.floor(100000 + Math.random() * 900000);
    await sendSlackMessage(`Your Login code is: *${code}*`, targetId);
    res
      .status(200)
      .json({ status: true, message: `Code sent to DM for ${email}` });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
}
