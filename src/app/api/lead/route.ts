
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Create Nodemailer transporter
  const transporterConfig = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };
  console.log('Nodemailer transporter config:', transporterConfig);
  const transporter = nodemailer.createTransport(transporterConfig);

  // Compose the email
  const mailOptions = {
    from: process.env.MAIL_FROM || 'noreply@yourdomain.com',
    to: process.env.MAIL_TO || 'your-email@yourdomain.com',
    subject: 'New Lead from Website',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    replyTo: email,
  };

  try {
    console.log('Sending email with options:', mailOptions);
    const result = await transporter.sendMail(mailOptions);
    console.log('Nodemailer sendMail result:', result);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
  }
}