import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Waves, Sun, Utensils, Wifi } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function BeachHolidaysPage() {
  const beachPackages = [
    {
      name: "Zanzibar Beach Paradise",
      duration: "7 days",
      location: "Zanzibar",
      price: "$2,100",
      rating: 4.8,
      accommodation: "4-Star Beach Resort",
      includes: ["Beach resort", "All meals", "Spice tour", "Stone Town tour", "Airport transfers", "Snorkeling gear"],
      highlights: ["Pristine beaches", "Spice tours", "Stone Town", "Snorkeling", "Sunset dhow cruise"],
      description: "Perfect blend of relaxation and cultural exploration on the Spice Island.",
    },
    {
      name: "Luxury Zanzibar Escape",
      duration: "10 days",
      location: "Zanzibar",
      price: "$4,500",
      rating: 4.9,
      accommodation: "5-Star Luxury Resort",
      includes: ["Luxury resort", "Private beach", "Spa treatments", "Fine dining", "Private tours", "Butler service"],
      highlights: ["Private beach", "Spa & wellness", "Fine dining", "Private tours", "Luxury amenities"],
      description: "Ultimate luxury beach experience with world-class amenities and personalized service.",
    },
    {
      name: "Kenya Coast Adventure",
      duration: "6 days",
      location: "Diani Beach, Kenya",
      price: "$1,800",
      rating: 4.7,
      accommodation: "Beach Lodge",
      includes: ["Beach lodge", "Water sports", "Coral reef snorkeling", "Local excursions", "All meals"],
      highlights: ["Diani Beach", "Water sports", "Coral reefs", "Local culture", "Marine life"],
      description: "Adventure-packed beach holiday with excellent water sports and marine activities.",
    },
  ]

  const activities = [
    {
      icon: Waves,
      title: "Water Sports",
      description: "Snorkeling, diving, kitesurfing, jet skiing, and deep-sea fishing",
      locations: ["Zanzibar", "Diani Beach", "Watamu"],
    },
    {
      icon: Sun,
      title: "Beach Relaxation",
      description: "Pristine white sand beaches with crystal clear waters",
      locations: ["Nungwi", "Kendwa", "Paje"],
    },
    {
      icon: Utensils,
      title: "Culinary Experiences",
      description: "Fresh seafood, Swahili cuisine, and international dining",
      locations: ["Stone Town", "Beach Resorts", "Local Markets"],
    },
    {
      icon: Wifi,
      title: "Cultural Tours",
      description: "Historic sites, spice plantations, and local communities",
      locations: ["Stone Town", "Spice Farms", "Villages"],
    },
  ]

  const beaches = [
    {
      name: "Nungwi Beach",
      location: "Northern Zanzibar",
      description: "Famous for stunning sunsets and vibrant nightlife",
      bestFor: ["Sunsets", "Swimming", "Nightlife", "Dhow cruises"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Kendwa Beach",
      location: "Northwestern Zanzibar",
      description: "Perfect for swimming with minimal tidal changes",
      bestFor: ["Swimming", "Beach parties", "Water sports", "Relaxation"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Paje Beach",
      location: "Eastern Zanzibar",
      description: "Kitesurfing paradise with consistent winds",
      bestFor: ["Kitesurfing", "Windsurfing", "Beach walks", "Local culture"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Diani Beach",
      location: "Kenya Coast",
      description: "Award-winning beach with coral reefs and marine life",
      bestFor: ["Snorkeling", "Diving", "Monkey watching", "Water sports"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Beach Holidays" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Beach Holiday Tours</h1>
          <p className="text-xl mb-6">Paradise Beaches & Island Escapes</p>
          <div className="flex items-center justify-center gap-4 text-green-300">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-current" />
              <span>Pristine Beaches</span>
            </div>
            <div className="flex items-center gap-1">
              <Waves className="h-5 w-5" />
              <span>Crystal Clear Waters</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Tropical Paradise Awaits</h2>
            <p className="text-lg text-gray-700 mb-8">
              Escape to the pristine beaches of Zanzibar and Kenya&apos;s coast for the perfect blend of relaxation and
              adventure. From the historic charm of Stone Town to the crystal-clear waters of the Indian Ocean, our
              beach holidays offer luxury accommodations, exciting water sports, and unforgettable cultural experiences.
              Whether you seek ultimate relaxation or thrilling water adventures, we have the perfect beach escape for
              you.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {activities.map((activity, index) => (
                <div key={index} className="text-center">
                  <activity.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beach Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Beach Holiday Packages</h2>
            <p className="text-xl text-gray-600">Choose your perfect tropical getaway</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {beachPackages.map((beach, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-green-600 text-white">
                  <CardTitle>{beach.name}</CardTitle>
                  <CardDescription className="text-green-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4" />
                      <span>{beach.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{beach.rating}/5 Rating</span>
                    </div>
                    <div className="text-2xl font-bold">{beach.price}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{beach.description}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Location:</h4>
                      <p className="text-sm text-gray-600">{beach.location}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Accommodation:</h4>
                      <p className="text-sm text-gray-600">{beach.accommodation}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Package Includes:</h4>
                    <ul className="list-disc pl-4 text-sm text-gray-600">
                      {beach.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {beach.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/booking">Book This Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Beaches */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Best Beaches to Visit</h2>
            <p className="text-xl text-gray-600">Discover the most beautiful beaches in East Africa</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {beaches.map((beach, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={beach.image || "/placeholder.svg"} alt={beach.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-green-800">{beach.name}</CardTitle>
                    <CardDescription className="text-green-600">{beach.location}</CardDescription>
                  </CardHeader>
                  <p className="text-gray-600 mb-4">{beach.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Best For:</h4>
                    <div className="flex flex-wrap gap-1">
                      {beach.bestFor.map((activity, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Best Time for Beach Holidays</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Dry Season (June - September)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Perfect weather with minimal rainfall and cool trade winds. Ideal for all water activities.
                  </p>
                  <ul className="list-disc pl-4 text-sm text-gray-600">
                    <li>Excellent visibility for snorkeling and diving</li>
                    <li>Perfect conditions for water sports</li>
                    <li>Cool evenings ideal for dining</li>
                    <li>Peak season - book early</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Warm Season (December - March)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Warm and mostly dry with occasional short rains. Great weather with fewer crowds.
                  </p>
                  <ul className="list-disc pl-4 text-sm text-gray-600">
                    <li>Warm ocean temperatures</li>
                    <li>Fewer tourists, better prices</li>
                    <li>Excellent for beach relaxation</li>
                    <li>Perfect for romantic getaways</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Your Tropical Paradise Awaits</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Escape to pristine beaches, crystal-clear waters, and unforgettable island experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/booking">Book Beach Holiday</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Customize Your Escape</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}