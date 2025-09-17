import express from "express";
import notificationsRouter from "./routes/notifications.js";

const app = express();

app.use(express.json());

app.use("/notify", notificationsRouter);

export default app;
