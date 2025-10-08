import { NextResponse } from "next/server"

function sanitize(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { fullName, email, course, age, phone, notes } = body || {}

    // Basic server-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!fullName || String(fullName).trim().length < 2) {
      return NextResponse.json({ message: "Full name is required" }, { status: 400 })
    }
    if (!emailRegex.test(String(email))) {
      return NextResponse.json({ message: "Valid email is required" }, { status: 400 })
    }
    if (!course) {
      return NextResponse.json({ message: "Course of interest is required" }, { status: 400 })
    }
    const ageNum = Number(age)
    if (!ageNum || isNaN(ageNum) || ageNum < 12 || ageNum > 120) {
      return NextResponse.json({ message: "Valid age is required" }, { status: 400 })
    }

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6;">
        <h2 style="margin:0 0 12px;">New Waitlist Submission</h2>
        <p><strong>Full Name:</strong> ${sanitize(String(fullName))}</p>
        <p><strong>Email:</strong> ${sanitize(String(email))}</p>
        <p><strong>Course of Interest:</strong> ${sanitize(String(course))}</p>
        <p><strong>Age:</strong> ${ageNum}</p>
        ${phone ? `<p><strong>Phone:</strong> ${sanitize(String(phone))}</p>` : ""}
        ${notes ? `<p><strong>Notes:</strong> ${sanitize(String(notes))}</p>` : ""}
        <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb;" />
        <p style="font-size:12px;color:#6b7280;">Submitted via stgabrieltech.com</p>
      </div>
    `

    // Send email using Resend API (no client-side secrets)
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ message: "Email service not configured" }, { status: 500 })
    }

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "no-reply@stgabrieltech.com",
        to: ["info@stgabrieltech.com", "waitlist@stgabrieltech.com"],
        subject: "New Waitlist Submission",
        html,
      }),
    })

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}))
      return NextResponse.json({ message: err?.message || "Failed to send email" }, { status: 502 })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 })
  }
}