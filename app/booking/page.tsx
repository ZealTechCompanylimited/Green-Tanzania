"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Users, MapPin, Mail, Phone } from "lucide-react"
import { format } from "date-fns"
import Navigation from "@/components/navigation"

export default function BookingPage() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    tourType: "",
    guests: "",
    duration: "",
    budget: "",
    specialRequests: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          travelDate: date,
          submittedAt: new Date(),
        }),
      })

      if (response.ok) {
        alert("Booking request submitted successfully! We will contact you soon.")
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          destination: "",
          tourType: "",
          guests: "",
          duration: "",
          budget: "",
          specialRequests: "",
        })
        setDate(undefined)
      } else {
        alert("Error submitting booking. Please try again.")
      }
    } catch (error) {
      console.error("Booking error:", error)
      alert("Error submitting booking. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-800 mb-4">Book Your Safari Adventure</h1>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll create a personalized itinerary for your dream African safari
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Booking Details</CardTitle>
                  <CardDescription>
                    Please provide your information and preferences for your safari experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
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
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Trip Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Destination *</Label>
                        <Select
                          value={formData.destination}
                          onValueChange={(value) => handleInputChange("destination", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select destination" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tanzania">Tanzania</SelectItem>
                            <SelectItem value="zanzibar">Zanzibar</SelectItem>
                            <SelectItem value="kenya">Kenya</SelectItem>
                            <SelectItem value="multi-country">Multi-Country Tour</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Tour Type *</Label>
                        <Select
                          value={formData.tourType}
                          onValueChange={(value) => handleInputChange("tourType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select tour type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="safari">Wildlife Safari</SelectItem>
                            <SelectItem value="cultural">Cultural Tour</SelectItem>
                            <SelectItem value="beach">Beach Holiday</SelectItem>
                            <SelectItem value="adventure">Adventure Tour</SelectItem>
                            <SelectItem value="luxury">Luxury Safari</SelectItem>
                            <SelectItem value="budget">Budget Safari</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label>Travel Date *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <Label>Number of Guests *</Label>
                        <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Guest</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="3-5">3-5 Guests</SelectItem>
                            <SelectItem value="6-10">6-10 Guests</SelectItem>
                            <SelectItem value="10+">10+ Guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Duration *</Label>
                        <Select
                          value={formData.duration}
                          onValueChange={(value) => handleInputChange("duration", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3-5">3-5 Days</SelectItem>
                            <SelectItem value="6-10">6-10 Days</SelectItem>
                            <SelectItem value="11-15">11-15 Days</SelectItem>
                            <SelectItem value="15+">15+ Days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label>Budget Range (USD) *</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10000+">$10,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="specialRequests">Special Requests or Preferences</Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or specific interests..."
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                      Submit Booking Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Why Book With Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Expert Local Guides</h4>
                      <p className="text-sm text-gray-600">Professional guides with deep local knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Customized Itineraries</h4>
                      <p className="text-sm text-gray-600">Tailored experiences based on your preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">24/7 Support</h4>
                      <p className="text-sm text-gray-600">Round-the-clock assistance during your trip</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span>+255 123 456 789</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span>info@greentanzania.com</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      We typically respond to booking requests within 24 hours with a detailed quote and itinerary.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
