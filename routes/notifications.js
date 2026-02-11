import express from "express";
import {
  notifyOrder,
  notifyVerification,
  notifyDeposit,
  notifyLogin,
} from "../controllers/notificationController.js";

const router = express.Router();

router.post("/order", notifyOrder);
router.post("/verification", notifyVerification);
router.post("/deposit", notifyDeposit);
router.post("/login", notifyLogin);

export default router;
