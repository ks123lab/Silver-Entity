import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 }
      );
    }

    // --- NODEMAILER SMTP CONFIGURATION ---
    // Using environment variables for security and to use the new host
    const transporter = nodemailer.createTransport({
      // Use the new hostname from environment variables
      host: process.env.SMTP_HOST, 
      port: 465, // Standard secure SMTP port (SSL/TLS)
      secure: true, // Should be true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // This setting is often needed for shared hosts to prevent certificate errors
      tls: {
          rejectUnauthorized: false
      }
    });

    // Email content
    const mailOptions = {
      // It's best practice for the 'from' address to match the authenticated user
      from: `"Silver Entity Contact" <${process.env.SMTP_USER}>`, 
      to: process.env.SMTP_USER, // Sending to your own email address
      subject: `New Message from ${name} (via Website Form)`,
      text: `
        You have a new message from your contact form:

        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully using Cloudsector SMTP.");

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Server error. Please try again later." }),
      { status: 500 }
    );
  }
}