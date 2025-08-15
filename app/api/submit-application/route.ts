import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send to institute
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "admissions@stgabriel.edu", // Replace with actual email
      subject: "New Application Submission",
      text: `New application from ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nProgram: ${data.program}\nEducation: ${data.educationLevel}`,
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: data.email,
      subject: "Application Received",
      text: "Thank you for your application to St. Gabriel Technical Institute. We will review it shortly.",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}