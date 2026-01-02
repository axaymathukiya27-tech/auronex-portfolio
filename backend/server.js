import "dotenv/config";
import express from "express";
import cors from "cors";
import pool from "./db.js";
import { sendContactEmail } from "./utils/brevoMailer.js";

const app = express();

// ------------------ MIDDLEWARE ------------------
app.use(express.json({ limit: "10kb" }));
app.use(cors());

// ------------------ HEALTH CHECK ------------------
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      status: "Backend running",
      dbTime: result.rows[0].now,
    });
  } catch (error) {
    console.error("DB health check failed:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// ------------------ CONTACT FORM API ------------------
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, email, and message are required",
    });
  }

  try {
    // 1. Save to database
    const result = await pool.query(
      `INSERT INTO contacts (name, email, subject, message)
       VALUES ($1, $2, $3, $4)
       RETURNING id`,
      [name, email, subject, message]
    );

    console.log("✅ DB INSERTED ID:", result.rows[0].id);

    // 2. Send email
    await sendContactEmail({ name, email, subject, message });

    // 3. Success response
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("❌ ERROR:", error);
    res.status(500).json({
      error: "Something went wrong while sending message",
    });
  }
});

// ------------------ START SERVER ------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
