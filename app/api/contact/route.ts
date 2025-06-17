import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import nodemailer from "nodemailer"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

// Configure Hostinger SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const contactData = await request.json()

    // Save to Supabase
    const { data, error } = await supabase.from("contacts").insert([contactData]).select()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Database error" }, { status: 500 })
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
          📧 info@greentanzania.com</p>
          
          <p>Best regards,<br>The greenTanzania Team</p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: contactData.email,
      subject: "Message Received - greenTanzania",
      html: customerEmailHtml,
    })

    // Send notification email to admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #059669;">New Contact Form Submission</h2>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
          <h3>Contact Information:</h3>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone || "Not provided"}</p>
          
          <h3>Inquiry Details:</h3>
          <p><strong>Type:</strong> ${contactData.inquiryType}</p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          
          <h3>Message:</h3>
          <p style="background: white; padding: 15px; border-radius: 5px;">${contactData.message}</p>
          
          <p><strong>Submitted:</strong> ${new Date(contactData.submittedAt).toLocaleString()}</p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: "New Contact Form Submission - greenTanzania",
      html: adminEmailHtml,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
