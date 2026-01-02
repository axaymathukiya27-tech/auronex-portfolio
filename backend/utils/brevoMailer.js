import fetch from "node-fetch";

export async function sendContactEmail({ name, email, subject, message }) {
  const apiKey = process.env.BREVO_API_KEY;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !sender) {
    throw new Error("Missing Brevo credentials");
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: { email: sender, name: "Portfolio Contact" },
      to: [{ email: sender }],
      subject: `New Contact Message: ${subject}`,
      htmlContent: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error("Brevo error:", err);
    throw new Error("Email send failed");
  }

  return true;
}
