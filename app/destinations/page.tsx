import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Clock, Users, Plane, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DestinationsPage() {
  const destinations = [
    {
      name: "Tanzania",
      description:
        "Home to the Serengeti, Mount Kilimanjaro, and Ngorongoro Crater. Experience the Great Migration and climb Africa's highest peak.",
      image: "/placeholder.svg?height=400&width=600",
      highlights: ["Serengeti National Park", "Mount Kilimanjaro", "Ngorongoro Crater", "Tarangire National Park"],
      slug: "tanzania",
      bestTime: "June - October",
      duration: "5-14 days",
      difficulty: "Moderate to Challenging",
      price: "From $2,500",
    },
    {
      name: "Zanzibar",
      description:
        "The Spice Island offers pristine beaches, historic Stone Town, and rich Swahili culture in the Indian Ocean.",
      image: "/placeholder.svg?height=400&width=600",
      highlights: ["Stone Town", "Spice Tours", "Jozani Forest", "Beach Resorts"],
      slug: "zanzibar",
      bestTime: "June - September, December - February",
      duration: "3-7 days",
      difficulty: "Easy",
      price: "From $1,200",
    },
    {
      name: "Kenya",
      description:
        "Witness the Great Migration in Maasai Mara and explore diverse ecosystems from savannas to mountains.",
      image: "/placeholder.svg?height=400&width=600",
      highlights: ["Maasai Mara", "Amboseli National Park", "Lake Nakuru", "Mount Kenya"],
      slug: "kenya",
      bestTime: "July - October, January - March",
      duration: "4-10 days",
      difficulty: "Easy to Moderate",
      price: "From $2,200",
    },
  ]

  const quickFacts = [
    {
      icon: MapPin,
      title: "3 Countries",
      description: "Tanzania, Zanzibar & Kenya",
    },
    {
      icon: Camera,
      title: "Big Five",
      description: "Lion, Leopard, Elephant, Buffalo, Rhino",
    },
    {
      icon: Users,
      title: "Expert Guides",
      description: "Local professional guides",
    },
    {
      icon: Plane,
      title: "Easy Access",
      description: "International airports in all destinations",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-green-800 to-green-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="East Africa Destinations"
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Destinations</h1>
          <p className="text-xl mb-6">Discover the most spectacular places in East Africa</p>
          <div className="flex items-center justify-center gap-4 text-green-300">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-current" />
              <span>Premium Destinations</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-5 w-5" />
              <span>East Africa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {quickFacts.map((fact, index) => (
              <div key={index} className="text-center">
                <fact.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">{fact.title}</h3>
                <p className="text-gray-600">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Choose Your Adventure</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each destination offers unique experiences, from wildlife safaris to cultural immersion and beach
              relaxation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                    <div className="flex items-center gap-1 text-green-300">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{destination.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span>
                        <strong>Best Time:</strong> {destination.bestTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-green-600" />
                      <span>
                        <strong>Duration:</strong> {destination.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span>
                        <strong>Difficulty:</strong> {destination.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{destination.price}</span>
                    <span className="text-sm text-gray-500">per person</span>
                  </div>

                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href={`/destinations/${destination.slug}`}>Explore {destination.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore East Africa?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Let us help you plan the perfect safari adventure across our amazing destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/booking">Plan Your Trip</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Get Expert Advice</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
