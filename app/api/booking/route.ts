import { type NextRequest, NextResponse } from "next/server"
import { createClient, type SupabaseClient } from "@supabase/supabase-js"
import nodemailer from "nodemailer"

// Only initialize Supabase if environment variables are available
let supabase: SupabaseClient | null = null
if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
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
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com"
    const smtpUser = process.env.SMTP_USER || "info@greentanzaniatours.com"
    const smtpPass = process.env.SMTP_PASS || "Info@greentours2025"
    const adminEmail = process.env.ADMIN_EMAIL || "info@greentanzaniatours.com"

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: 587,
          secure: false,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        })

        // Send confirmation email to customer
        const customerMailOptions = {
          from: `"Green Tanzania Tours" <${smtpUser}>`,
          to: bookingData.email,
          subject: "Booking Request Received - Green Tanzania Tours",
          html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Green Tanzania Tours</h1>
            <p style="margin: 5px 0 0 0;">Authentic African Safari Experience</p>
          </div>
          
          <div style="padding: 30px 20px;">
            <h2 style="color: #16a34a;">Thank you for your booking request!</h2>
            <p>Dear ${bookingData.firstName} ${bookingData.lastName},</p>
            <p>We have received your booking request and will contact you within 24 hours with a detailed quote and personalized itinerary.</p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #16a34a; margin-top: 0;">Your Booking Details:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Destination:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${bookingData.destination}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Tour Type:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${bookingData.tourType}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Travel Date:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${new Date(bookingData.travelDate).toLocaleDateString()}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Number of Guests:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${bookingData.guests}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Duration:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${bookingData.duration} days</td></tr>
                <tr><td style="padding: 8px 0;"><strong>Budget Range:</strong></td><td style="padding: 8px 0;">$${bookingData.budget}</td></tr>
              </table>
            </div>
            
            ${bookingData.specialRequests ? `<div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;"><strong>Special Requests:</strong><br>${bookingData.specialRequests}</div>` : ""}
            
            <p style="margin-top: 30px;">Our safari experts will review your requirements and prepare a customized proposal just for you. We look forward to making your African adventure unforgettable!</p>
            
            <div style="background: #16a34a; color: white; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
              <h3 style="margin: 0 0 10px 0;">Contact Us</h3>
              <p style="margin: 5px 0;">📧 info@greentanzaniatours.com</p>
              <p style="margin: 5px 0;">📱 +255 123 456 789</p>
              <p style="margin: 5px 0;">🌐 www.greentanzaniatours.com</p>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #6b7280; font-size: 14px;">
            <p>This email was sent from Green Tanzania Tours. If you have any questions, please contact us at info@greentanzaniatours.com</p>
          </div>
        </div>
      `,
        }

        // Send notification email to admin
        const adminMailOptions = {
          from: `"Green Tanzania Tours" <${smtpUser}>`,
          to: adminEmail,
          subject: "🎯 New Booking Request - Green Tanzania Tours",
          html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">🚨 New Booking Alert!</h1>
            <p style="margin: 5px 0 0 0;">Green Tanzania Tours</p>
          </div>
          
          <div style="padding: 30px 20px;">
            <h2 style="color: #dc2626;">New Booking Request Received</h2>
            
            <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
              <h3 style="color: #dc2626; margin-top: 0;">Customer Information:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #fecaca;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #fecaca;">${bookingData.firstName} ${bookingData.lastName}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #fecaca;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #fecaca;"><a href="mailto:${bookingData.email}" style="color: #dc2626;">${bookingData.email}</a></td></tr>
                <tr><td style="padding: 8px 0;"><strong>Phone:</strong></td><td style="padding: 8px 0;"><a href="tel:${bookingData.phone}" style="color: #dc2626;">${bookingData.phone}</a></td></tr>
              </table>
            </div>
            
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
              <h3 style="color: #16a34a; margin-top: 0;">Trip Details:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #bbf7d0;"><strong>Destination:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #bbf7d0;">${bookingData.destination}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #bbf7d0;"><strong>Tour Type:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #bbf7d0;">${bookingData.tourType}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #bbf7d0;"><strong>Travel Date:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #bbf7d0;">${new Date(bookingData.travelDate).toLocaleDateString()}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #bbf7d0;"><strong>Guests:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #bbf7d0;">${bookingData.guests} people</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #bbf7d0;"><strong>Duration:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #bbf7d0;">${bookingData.duration} days</td></tr>
                <tr><td style="padding: 8px 0;"><strong>Budget:</strong></td><td style="padding: 8px 0;"><strong style="color: #16a34a;">$${bookingData.budget}</strong></td></tr>
              </table>
            </div>
            
            ${bookingData.specialRequests ? `<div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;"><h4 style="color: #f59e0b; margin-top: 0;">Special Requests:</h4><p style="margin: 0;">${bookingData.specialRequests}</p></div>` : ""}
            
            <div style="background: #1f2937; color: white; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <p style="margin: 0;"><strong>⏰ Submitted:</strong> ${new Date(bookingWithTimestamp.submittedAt).toLocaleString()}</p>
              <p style="margin: 10px 0 0 0; color: #fbbf24;"><strong>⚡ Action Required:</strong> Contact customer within 24 hours</p>
            </div>
          </div>
        </div>
      `,
        }

        await transporter.sendMail(customerMailOptions)
        await transporter.sendMail(adminMailOptions)
        console.log("Emails sent successfully to customer and admin")
      } catch (emailError) {
        console.error("Email sending error:", emailError)
      }
    } else {
      console.log("SMTP not fully configured, skipping email notifications")
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
