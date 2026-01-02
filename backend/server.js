import "dotenv/config";
import express from "express";
import cors from "cors";
import pool from "./db.js";
import { sendContactEmail } from "./utils/brevoMailer.js";

const app = express();

// Middleware
app.use(express.json({ limit: "10kb" }));
app.use(cors());

// Health check
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "Database connected", time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

// Contact endpoint
app.post("/api/contact", async (req, res) => {
  console.log("Incoming data:", req.body);

  try {
    const { name, email, subject, message } = req.body;

    const result = await pool.query(
      `INSERT INTO contacts (name, email, subject, message)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, email, subject, message]
    );

    console.log("Inserted row:", result.rows[0]);

    await sendContactEmail({ name, email, subject, message });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("DB ERROR:", err);
    res.status(500).json({ error: "Database insert failed" });
  }
});


// 🚀 START SERVER (THIS WAS MISSING)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
