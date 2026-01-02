import "dotenv/config";
import express from "express";
import cors from "cors";
import pool from "./db.js";
import { sendContactEmail } from "./utils/brevoMailer.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "Database connected", time: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required" });
  }

  try {
    await sendContactEmail({ name, email, subject, message });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
