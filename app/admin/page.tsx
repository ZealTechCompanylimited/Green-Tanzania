"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Mountain, Plus, Edit, Trash2, Eye, Mail, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

interface Booking {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  destination: string
  tourType: string
  guests: string
  duration: string
  budget: string
  travelDate: string
  specialRequests?: string
  status: string
  submittedAt: string
}

interface Destination {
  id: string
  name: string
  description: string
  highlights: string[]
  image: string
  slug: string
  featured: boolean
}

export default function AdminCMS() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [newDestination, setNewDestination] = useState({
    name: "",
    description: "",
    highlights: "",
    image: "",
    slug: "",
    featured: false,
  })

  // Mock data - In real app, fetch from Supabase
  useEffect(() => {
    // Mock bookings data
    setBookings([
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "+1234567890",
        destination: "tanzania",
        tourType: "safari",
        guests: "2",
        duration: "6-10",
        budget: "2500-5000",
        travelDate: "2024-07-15",
        specialRequests: "Vegetarian meals preferred",
        status: "pending",
        submittedAt: "2024-01-15T10:30:00Z",
      },
      {
        id: "2",
        firstName: "Sarah",
        lastName: "Johnson",
        email: "sarah@example.com",
        phone: "+1987654321",
        destination: "zanzibar",
        tourType: "beach",
        guests: "4",
        duration: "3-5",
        budget: "1000-2500",
        travelDate: "2024-08-20",
        status: "confirmed",
        submittedAt: "2024-01-14T14:20:00Z",
      },
    ])

    // Mock destinations data
    setDestinations([
      {
        id: "1",
        name: "Tanzania",
        description: "Experience the majestic Serengeti and climb Mount Kilimanjaro",
        highlights: ["Serengeti National Park", "Mount Kilimanjaro", "Ngorongoro Crater"],
        image: "/placeholder.svg?height=400&width=600",
        slug: "tanzania",
        featured: true,
      },
      {
        id: "2",
        name: "Zanzibar",
        description: "Pristine beaches and rich cultural heritage await",
        highlights: ["Stone Town", "Spice Tours", "Beach Resorts"],
        image: "/placeholder.svg?height=400&width=600",
        slug: "zanzibar",
        featured: true,
      },
    ])
  }, [])

  const updateBookingStatus = async (bookingId: string, status: string) => {
    // In real app, update in Supabase
    setBookings((prev) => prev.map((booking) => (booking.id === bookingId ? { ...booking, status } : booking)))
  }

  const addDestination = async () => {
    if (!newDestination.name || !newDestination.description) return

    const destination: Destination = {
      id: Date.now().toString(),
      ...newDestination,
      highlights: newDestination.highlights.split(",").map((h) => h.trim()),
    }

    setDestinations((prev) => [...prev, destination])
    setNewDestination({
      name: "",
      description: "",
      highlights: "",
      image: "",
      slug: "",
      featured: false,
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">greenTanzania CMS</span>
            </Link>
            <nav className="flex items-center space-x-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
                Back to Website
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Content Management System</h1>
          <p className="text-gray-600">Manage bookings, destinations, and website content</p>
        </div>

        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Booking Management
                </CardTitle>
                <CardDescription>View and manage customer booking requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Destination</TableHead>
                        <TableHead>Travel Date</TableHead>
                        <TableHead>Guests</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">
                                {booking.firstName} {booking.lastName}
                              </div>
                              <div className="text-sm text-gray-500">{booking.email}</div>
                            </div>
                          </TableCell>
                          <TableCell className="capitalize">{booking.destination}</TableCell>
                          <TableCell>{new Date(booking.travelDate).toLocaleDateString()}</TableCell>
                          <TableCell>{booking.guests}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm" onClick={() => setSelectedBooking(booking)}>
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>Booking Details</DialogTitle>
                                    <DialogDescription>
                                      Complete booking information for {booking.firstName} {booking.lastName}
                                    </DialogDescription>
                                  </DialogHeader>
                                  {selectedBooking && (
                                    <div className="grid gap-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <Label>Customer Name</Label>
                                          <p className="font-medium">
                                            {selectedBooking.firstName} {selectedBooking.lastName}
                                          </p>
                                        </div>
                                        <div>
                                          <Label>Email</Label>
                                          <p className="font-medium">{selectedBooking.email}</p>
                                        </div>
                                        <div>
                                          <Label>Phone</Label>
                                          <p className="font-medium">{selectedBooking.phone}</p>
                                        </div>
                                        <div>
                                          <Label>Destination</Label>
                                          <p className="font-medium capitalize">{selectedBooking.destination}</p>
                                        </div>
                                        <div>
                                          <Label>Tour Type</Label>
                                          <p className="font-medium capitalize">{selectedBooking.tourType}</p>
                                        </div>
                                        <div>
                                          <Label>Travel Date</Label>
                                          <p className="font-medium">
                                            {new Date(selectedBooking.travelDate).toLocaleDateString()}
                                          </p>
                                        </div>
                                        <div>
                                          <Label>Guests</Label>
                                          <p className="font-medium">{selectedBooking.guests}</p>
                                        </div>
                                        <div>
                                          <Label>Duration</Label>
                                          <p className="font-medium">{selectedBooking.duration} days</p>
                                        </div>
                                        <div>
                                          <Label>Budget</Label>
                                          <p className="font-medium">${selectedBooking.budget}</p>
                                        </div>
                                        <div>
                                          <Label>Status</Label>
                                          <Select
                                            value={selectedBooking.status}
                                            onValueChange={(value) => updateBookingStatus(selectedBooking.id, value)}
                                          >
                                            <SelectTrigger>
                                              <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="pending">Pending</SelectItem>
                                              <SelectItem value="confirmed">Confirmed</SelectItem>
                                              <SelectItem value="cancelled">Cancelled</SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </div>
                                      </div>
                                      {selectedBooking.specialRequests && (
                                        <div>
                                          <Label>Special Requests</Label>
                                          <p className="mt-1 p-3 bg-gray-50 rounded-md">
                                            {selectedBooking.specialRequests}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(`mailto:${booking.email}`)}
                              >
                                <Mail className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Destinations Tab */}
          <TabsContent value="destinations">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Add New Destination
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Destination Name</Label>
                        <Input
                          id="name"
                          value={newDestination.name}
                          onChange={(e) => setNewDestination((prev) => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="slug">URL Slug</Label>
                        <Input
                          id="slug"
                          value={newDestination.slug}
                          onChange={(e) => setNewDestination((prev) => ({ ...prev, slug: e.target.value }))}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newDestination.description}
                        onChange={(e) => setNewDestination((prev) => ({ ...prev, description: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="highlights">Highlights (comma-separated)</Label>
                      <Input
                        id="highlights"
                        value={newDestination.highlights}
                        onChange={(e) => setNewDestination((prev) => ({ ...prev, highlights: e.target.value }))}
                        placeholder="Serengeti National Park, Mount Kilimanjaro, Ngorongoro Crater"
                      />
                    </div>
                    <div>
                      <Label htmlFor="image">Image URL</Label>
                      <Input
                        id="image"
                        value={newDestination.image}
                        onChange={(e) => setNewDestination((prev) => ({ ...prev, image: e.target.value }))}
                      />
                    </div>
                    <Button onClick={addDestination} className="bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Destination
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Existing Destinations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {destinations.map((destination) => (
                      <div key={destination.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{destination.name}</h3>
                          <p className="text-sm text-gray-600">{destination.description}</p>
                          <div className="flex gap-2 mt-2">
                            {destination.highlights.map((highlight, idx) => (
                              <Badge key={idx} variant="secondary">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Website Content Management</CardTitle>
                <CardDescription>Update homepage content, about page, and other website sections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="heroTitle">Hero Section Title</Label>
                    <Input id="heroTitle" defaultValue="Discover East Africa's Hidden Treasures" />
                  </div>
                  <div>
                    <Label htmlFor="heroSubtitle">Hero Section Subtitle</Label>
                    <Textarea
                      id="heroSubtitle"
                      defaultValue="Experience unforgettable safaris, pristine beaches, and rich cultures across Tanzania, Zanzibar, and Kenya"
                    />
                  </div>
                  <div>
                    <Label htmlFor="aboutText">About Section</Label>
                    <Textarea
                      id="aboutText"
                      rows={6}
                      defaultValue="Your trusted partner for unforgettable East African adventures..."
                    />
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">Update Content</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure email settings, integrations, and other system preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="adminEmail">Admin Email</Label>
                    <Input id="adminEmail" type="email" defaultValue="admin@greentanzania.com" />
                  </div>
                  <div>
                    <Label htmlFor="smtpHost">SMTP Host (Hostinger)</Label>
                    <Input id="smtpHost" defaultValue="smtp.hostinger.com" />
                  </div>
                  <div>
                    <Label htmlFor="companyPhone">Company Phone</Label>
                    <Input id="companyPhone" defaultValue="+255 123 456 789" />
                  </div>
                  <div>
                    <Label htmlFor="companyAddress">Company Address</Label>
                    <Textarea id="companyAddress" defaultValue="Arusha, Tanzania" />
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">Save Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
