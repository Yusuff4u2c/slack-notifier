import express from "express";
import {
  notifyOrder,
  notifyVerification,
  notifyDeposit,
} from "../controllers/notificationController.js";

const router = express.Router();

router.post("/order", notifyOrder);
router.post("/verification", notifyVerification);
router.post("/deposit", notifyDeposit);

export default router;
