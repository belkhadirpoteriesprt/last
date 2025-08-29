import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";
import { submitOrder } from "../server/routes/orders";

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.post("/orders", submitOrder);

// Health check
app.get("/ping", (req, res) => {
  res.json({
    message: "Belkhadir Poterie API is running!",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// Export pour Vercel
export default (req: VercelRequest, res: VercelResponse) => {
  return app(req, res);
};
