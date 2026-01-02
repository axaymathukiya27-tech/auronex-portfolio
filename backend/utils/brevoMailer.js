export async function sendContactEmail({ name, email, subject, message }) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: process.env.CONTACT_FROM_NAME,
        email: process.env.CONTACT_FROM_EMAIL,
      },
      to: [{ email: process.env.CONTACT_FROM_EMAIL }],
      replyTo: { email, name },
      subject: subject || "New Contact Message",
      textContent: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
}
