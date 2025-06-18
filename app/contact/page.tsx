"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import Navigation from "@/components/navigation"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date(),
        }),
      })

      if (response.ok) {
        alert("Message sent successfully! We'll get back to you within 24 hours.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          inquiryType: "",
          message: "",
        })
      } else {
        alert("Error sending message. Please try again.")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      alert("Error sending message. Please try again.")
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+255 123 456 789", "+255 987 654 321"],
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@greentanzania.com", "bookings@greentanzania.com"],
      description: "Send us your inquiries anytime",
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Arusha, Tanzania", "Near Kilimanjaro Airport"],
      description: "Visit our office for personalized service",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat - Sun: 9:00 AM - 4:00 PM"],
      description: "East Africa Time (EAT)",
    },
  ]

  const faqs = [
    {
      question: "What's the best time to visit East Africa?",
      answer:
        "The best time depends on your interests. For the Great Migration, visit July-October. For fewer crowds and good weather, December-February is ideal.",
    },
    {
      question: "Do I need vaccinations for Tanzania and Kenya?",
      answer:
        "Yellow fever vaccination is required if coming from endemic areas. We recommend consulting your doctor about malaria prophylaxis and other vaccinations.",
    },
    {
      question: "What should I pack for a safari?",
      answer:
        "Pack neutral-colored clothing, comfortable walking shoes, hat, sunscreen, binoculars, and camera. We provide a detailed packing list upon booking.",
    },
    {
      question: "Are your tours suitable for children?",
      answer:
        "Yes! We offer family-friendly safaris with age-appropriate activities. Some lodges have minimum age requirements, which we&apos;ll discuss during planning.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r from-green-800 to-green-600">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We&apos;re here to help plan your perfect East African adventure</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>Fill out the form below and we&apos;ll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Inquiry Type *</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => handleInputChange("inquiryType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="booking">New Booking</SelectItem>
                            <SelectItem value="existing">Existing Booking</SelectItem>
                            <SelectItem value="custom">Custom Tour Request</SelectItem>
                            <SelectItem value="general">General Information</SelectItem>
                            <SelectItem value="group">Group Booking</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your travel plans, questions, or special requirements..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Get in Touch</CardTitle>
                  <CardDescription>Multiple ways to reach our friendly team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <info.icon className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Quick Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Need immediate assistance? Call us directly or send a WhatsApp message for the fastest response.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="tel:+255123456789">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now: +255 123 456 789
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="mailto:info@greentanzania.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Email: info@greentanzania.com
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to common questions</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-green-800 text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">Located in the heart of Arusha, Tanzania</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="bg-green-100 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">greenTanzania Office</h3>
                    <p className="text-gray-600">Arusha, Tanzania</p>
                    <p className="text-gray-600">Near Kilimanjaro International Airport</p>
                    <p className="text-sm text-gray-500 mt-2">Interactive map integration available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}