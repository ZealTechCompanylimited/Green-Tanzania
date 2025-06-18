import { type NextRequest, NextResponse } from "next/server"
import { createClient, type SupabaseClient } from "@supabase/supabase-js"
import nodemailer from "nodemailer"

// Initialize Supabase client only if environment variables are available
let supabase: SupabaseClient | null = null
if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
  supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
}

// Configure Hostinger SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 587,
  secure: false,
  auth: {
    user: "info@greentanzaniatours.com",
    pass: "Info@greentours2025",
  },
})

export async function POST(request: NextRequest) {
  try {
    const contactData = await request.json()

    // Add timestamp
    const contactWithTimestamp = {
      ...contactData,
      submittedAt: new Date().toISOString(),
    }

    // Save to Supabase if available
    if (supabase) {
      try {
        const { data, error } = await supabase.from("contacts").insert([contactWithTimestamp]).select()

        if (error) {
          console.error("Supabase error:", error)
          // Continue without database - don't fail the entire request
        } else {
          console.log("Contact saved to database:", data)
        }
      } catch (dbError) {
        console.error("Database connection error:", dbError)
        // Continue without database
      }
    } else {
      console.log("Supabase not configured, contact logged locally:", contactWithTimestamp)
    }

    // Send confirmation email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">greenTanzania</h1>
          <p style="color: #d1fae5; margin: 10px 0 0 0;">Thank you for contacting us!</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #059669;">Message Received</h2>
          <p>Dear ${contactData.name},</p>
          
          <p>Thank you for reaching out to greenTanzania! We have received your message and our team will respond within 24 hours.</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #059669; margin-top: 0;">Your Message Details:</h3>
            <p><strong>Subject:</strong> ${contactData.subject}</p>
            <p><strong>Inquiry Type:</strong> ${contactData.inquiryType}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">${contactData.message}</p>
          </div>
          
          <p>If you have any urgent questions, please don't hesitate to call us:</p>
          <p>📞 +255 123 456 789<br>
          📧 info@greentanzaniatours.com</p>
          
          <p>Best regards,<br>The greenTanzania Team</p>
        </div>
      </div>
    `

    try {
      await transporter.sendMail({
        from: "info@greentanzaniatours.com",
        to: contactData.email,
        subject: "Message Received - greenTanzania",
        html: customerEmailHtml,
      })
      console.log("Customer confirmation email sent")
    } catch (emailError) {
      console.error("Failed to send customer email:", emailError)
      // Continue - don't fail the request if email fails
    }

    // Send notification email to admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #dc2626, #ef4444); padding: 20px; text-align: center;">
          <h2 style="color: white; margin: 0;">🚨 NEW CONTACT MESSAGE</h2>
          <p style="color: #fecaca; margin: 5px 0 0 0;">Urgent - Respond within 24 hours</p>
        </div>
        
        <div style="background: #f9fafb; padding: 20px;">
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626;">
            <h3 style="color: #dc2626; margin-top: 0;">Contact Information:</h3>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
            <p><strong>Phone:</strong> ${contactData.phone || "Not provided"}</p>
            
            <h3 style="color: #dc2626;">Inquiry Details:</h3>
            <p><strong>Type:</strong> <span style="background: #fee2e2; padding: 2px 8px; border-radius: 4px;">${contactData.inquiryType}</span></p>
            <p><strong>Subject:</strong> ${contactData.subject}</p>
            
            <h3 style="color: #dc2626;">Message:</h3>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; border-left: 3px solid #059669;">
              ${contactData.message}
            </div>
            
            <p style="margin-top: 20px;"><strong>Submitted:</strong> ${new Date(contactWithTimestamp.submittedAt).toLocaleString()}</p>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <a href="mailto:${contactData.email}" style="background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Reply to Customer</a>
          </div>
        </div>
      </div>
    `

    try {
      await transporter.sendMail({
        from: "info@greentanzaniatours.com",
        to: "info@greentanzaniatours.com",
        subject: `🚨 NEW CONTACT: ${contactData.subject} - ${contactData.name}`,
        html: adminEmailHtml,
      })
      console.log("Admin notification email sent")
    } catch (emailError) {
      console.error("Failed to send admin email:", emailError)
      // Continue - don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      data: contactWithTimestamp,
    })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      {
        error: "Failed to process contact form. Please try again or contact us directly.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
