import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Only initialize Supabase if environment variables are available
let supabase: any = null
if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
  const { createClient } = require("@supabase/supabase-js")
  supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
}

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json()

    // Add timestamp and status
    const bookingWithTimestamp = {
      ...bookingData,
      submittedAt: new Date().toISOString(),
      status: "pending",
    }

    // Save to Supabase if available
    if (supabase) {
      try {
        const { data, error } = await supabase.from("bookings").insert([bookingWithTimestamp]).select()

        if (error) {
          console.error("Supabase error:", error)
        } else {
          console.log("Booking saved to Supabase:", data)
        }
      } catch (supabaseError) {
        console.error("Supabase connection error:", supabaseError)
      }
    } else {
      console.log("Supabase not configured, logging booking locally:", bookingWithTimestamp)
    }

    // Send email notification if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })

        // Send confirmation email to customer
        const customerMailOptions = {
          from: process.env.SMTP_USER,
          to: bookingData.email,
          subject: "Booking Request Received - Green Tanzania",
          html: `
            <h2>Thank you for your booking request!</h2>
            <p>Dear ${bookingData.firstName} ${bookingData.lastName},</p>
            <p>We have received your booking request and will contact you within 24 hours with a detailed quote and itinerary.</p>
            
            <h3>Your Booking Details:</h3>
            <ul>
              <li><strong>Destination:</strong> ${bookingData.destination}</li>
              <li><strong>Tour Type:</strong> ${bookingData.tourType}</li>
              <li><strong>Travel Date:</strong> ${new Date(bookingData.travelDate).toLocaleDateString()}</li>
              <li><strong>Guests:</strong> ${bookingData.guests}</li>
              <li><strong>Duration:</strong> ${bookingData.duration} days</li>
              <li><strong>Budget:</strong> $${bookingData.budget}</li>
            </ul>
            
            ${bookingData.specialRequests ? `<p><strong>Special Requests:</strong> ${bookingData.specialRequests}</p>` : ""}
            
            <p>Best regards,<br>Green Tanzania Team</p>
            <p>Email: info@greentanzania.com<br>Phone: +255 123 456 789</p>
          `,
        }

        // Send notification email to admin
        const adminMailOptions = {
          from: process.env.SMTP_USER,
          to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
          subject: "New Booking Request - Green Tanzania",
          html: `
            <h2>New Booking Request Received</h2>
            
            <h3>Customer Information:</h3>
            <ul>
              <li><strong>Name:</strong> ${bookingData.firstName} ${bookingData.lastName}</li>
              <li><strong>Email:</strong> ${bookingData.email}</li>
              <li><strong>Phone:</strong> ${bookingData.phone}</li>
            </ul>
            
            <h3>Trip Details:</h3>
            <ul>
              <li><strong>Destination:</strong> ${bookingData.destination}</li>
              <li><strong>Tour Type:</strong> ${bookingData.tourType}</li>
              <li><strong>Travel Date:</strong> ${new Date(bookingData.travelDate).toLocaleDateString()}</li>
              <li><strong>Guests:</strong> ${bookingData.guests}</li>
              <li><strong>Duration:</strong> ${bookingData.duration} days</li>
              <li><strong>Budget:</strong> $${bookingData.budget}</li>
            </ul>
            
            ${bookingData.specialRequests ? `<p><strong>Special Requests:</strong> ${bookingData.specialRequests}</p>` : ""}
            
            <p><strong>Submitted:</strong> ${new Date(bookingWithTimestamp.submittedAt).toLocaleString()}</p>
          `,
        }

        await transporter.sendMail(customerMailOptions)
        await transporter.sendMail(adminMailOptions)
        console.log("Emails sent successfully")
      } catch (emailError) {
        console.error("Email sending error:", emailError)
      }
    } else {
      console.log("SMTP not configured, skipping email notifications")
    }

    return NextResponse.json({
      success: true,
      message: "Booking request received! We'll contact you within 24 hours.",
      data: bookingWithTimestamp,
    })
  } catch (error) {
    console.error("Booking API error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        message: "There was an error processing your booking request. Please try again or contact us directly.",
      },
      { status: 500 },
    )
  }
}
