import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, TelescopeIcon as Binoculars, Camera, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"


export default function WildlifeSafariPage() {
  const safariPackages = [
    {
      name: "Classic Big Five Safari",
      duration: "7 days",
      destinations: ["Serengeti", "Ngorongoro", "Tarangire"],
      price: "$2,850",
      difficulty: "Easy",
      groupSize: "2-6 people",
      includes: ["Game drives", "Professional guide", "Accommodation", "All meals", "Park fees"],
      highlights: ["Big Five viewing", "Great Migration", "Crater exploration", "Cultural visit"],
    },
    {
      name: "Great Migration Safari",
      duration: "10 days",
      destinations: ["Serengeti", "Maasai Mara", "Ngorongoro"],
      price: "$4,200",
      difficulty: "Moderate",
      groupSize: "2-8 people",
      includes: ["Migration tracking", "River crossing viewing", "Hot air balloon", "Luxury camps", "Expert guide"],
      highlights: ["Migration river crossing", "Predator action", "Aerial views", "Photography opportunities"],
    },
    {
      name: "Ultimate Wildlife Experience",
      duration: "14 days",
      destinations: ["Tanzania", "Kenya", "Zanzibar"],
      price: "$5,800",
      difficulty: "Easy to Moderate",
      groupSize: "2-6 people",
      includes: ["Multi-country safari", "Beach extension", "Cultural experiences", "Luxury accommodation"],
      highlights: ["Complete East Africa", "Wildlife & beaches", "Cultural immersion", "Luxury experience"],
    },
  ]

  const wildlifeHighlights = [
    {
      animal: "African Lion",
      description: "The king of the savanna, best spotted in Serengeti and Maasai Mara",
      bestSpots: ["Serengeti", "Maasai Mara", "Ngorongoro"],
      bestTime: "Early morning and evening",
    },
    {
      animal: "African Elephant",
      description: "Largest land mammal, famous herds in Amboseli and Tarangire",
      bestSpots: ["Amboseli", "Tarangire", "Serengeti"],
      bestTime: "All day, especially near water",
    },
    {
      animal: "Leopard",
      description: "Elusive big cat, excellent climbers often found in trees",
      bestSpots: ["Serengeti", "Maasai Mara", "Lake Nakuru"],
      bestTime: "Early morning and late afternoon",
    },
    {
      animal: "Black Rhino",
      description: "Critically endangered, best viewing in Ngorongoro Crater",
      bestSpots: ["Ngorongoro Crater", "Lake Nakuru"],
      bestTime: "Early morning",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Wildlife Safari" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Wildlife Safari Tours</h1>
          <p className="text-xl mb-6">Experience the Big Five and Great Migration</p>
          <div className="flex items-center justify-center gap-4 text-green-300">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-1">
              <Binoculars className="h-5 w-5" />
              <span>Expert Wildlife Guides</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Ultimate Wildlife Safari Experience</h2>
            <p className="text-lg text-gray-700 mb-8">
              Embark on the adventure of a lifetime with our wildlife safari tours. Witness the Big Five in their
              natural habitat, experience the drama of the Great Migration, and create memories that will last forever.
              Our expert guides ensure you get the best wildlife viewing opportunities while learning about conservation
              efforts and local ecosystems.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Binoculars className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Big Five Guarantee</h3>
                <p className="text-gray-600">Lion, Leopard, Elephant, Buffalo, Rhino</p>
              </div>
              <div className="text-center">
                <Camera className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Photography Focus</h3>
                <p className="text-gray-600">Perfect shots with expert guidance</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Small Groups</h3>
                <p className="text-gray-600">Maximum 8 people per vehicle</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Safety First</h3>
                <p className="text-gray-600">Professional guides and safety equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Safari Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect wildlife safari for your adventure</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {safariPackages.map((safari, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-green-600 text-white">
                  <CardTitle>{safari.name}</CardTitle>
                  <CardDescription className="text-green-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4" />
                      <span>{safari.duration}</span>
                    </div>
                    <div className="text-2xl font-bold">{safari.price}</div>
                    <div>Difficulty: {safari.difficulty}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Destinations:</h4>
                      <p className="text-sm text-gray-600">{safari.destinations.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Group Size:</h4>
                      <p className="text-sm text-gray-600">{safari.groupSize}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Package Includes:</h4>
                    <ul className="list-disc pl-4 text-sm text-gray-600">
                      {safari.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {safari.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/booking">Book This Safari</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Highlights */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Wildlife You&apos;ll Encounter</h2>
            <p className="text-xl text-gray-600">Meet Africa&apos;s most iconic animals in their natural habitat</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {wildlifeHighlights.map((wildlife, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-green-800">{wildlife.animal}</CardTitle>
                  <CardDescription>{wildlife.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Best Viewing Locations:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {wildlife.bestSpots.map((spot, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800 text-xs">
                            {spot}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Best Viewing Time:</h4>
                      <p className="text-sm text-gray-600">{wildlife.bestTime}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Wildlife Safari Adventure</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join us for an unforgettable wildlife safari experience with expert guides and guaranteed Big Five sightings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/booking">Book Safari Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Customize Safari</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}