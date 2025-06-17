import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import nodemailer from "nodemailer"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json()

    // Add timestamp and status
    const bookingWithTimestamp = {
      ...bookingData,
      submittedAt: new Date().toISOString(),
      status: "pending",
    }

    // Save to Supabase
    const { data, error } = await supabase.from("bookings").insert([bookingWithTimestamp]).select()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Database error" }, { status: 500 })
    }

    // Log the booking for now (you can add email functionality later)
    console.log("New booking received:", bookingWithTimestamp)

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: bookingData.email,
      subject: "Booking Request Received",
      text: `Thank you for your booking request! We'll contact you within 24 hours.\n\nDetails:\n${JSON.stringify(bookingData, null, 2)}`,
    }

    try {
      await transporter.sendMail(mailOptions)
      console.log("Email sent successfully")
    } catch (emailError) {
      console.error("Email sending error:", emailError)
    }

    return NextResponse.json({
      success: true,
      data,
      message: "Booking request received! We'll contact you within 24 hours.",
    })
  } catch (error) {
    console.error("Booking API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
