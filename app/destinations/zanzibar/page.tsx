import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Star, Clock, Waves, Palmtree, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ZanzibarPage() {
  const attractions = [
    {
      name: "Stone Town",
      description: "UNESCO World Heritage site with rich history and Swahili architecture",
      image: "/placeholder.svg?height=400&width=600",
      duration: "1-2 days",
      bestTime: "Year-round",
      highlights: ["Historic Architecture", "Spice Markets", "Cultural Tours"],
    },
    {
      name: "Spice Tours",
      description: "Discover why Zanzibar is called the Spice Island",
      image: "/placeholder.svg?height=400&width=600",
      duration: "Half day",
      bestTime: "Year-round",
      highlights: ["Cloves", "Cinnamon", "Vanilla", "Cardamom"],
    },
    {
      name: "Jozani Forest",
      description: "Home to the endemic Red Colobus monkeys",
      image: "/placeholder.svg?height=400&width=600",
      duration: "Half day",
      bestTime: "Year-round",
      highlights: ["Red Colobus Monkeys", "Mangrove Boardwalk", "Endemic Species"],
    },
    {
      name: "Pristine Beaches",
      description: "White sand beaches with crystal clear turquoise waters",
      image: "/placeholder.svg?height=400&width=600",
      duration: "Flexible",
      bestTime: "June - September, December - February",
      highlights: ["Nungwi Beach", "Kendwa Beach", "Paje Beach"],
    },
  ]

  const tourPackages = [
    {
      name: "Zanzibar Beach Escape",
      duration: "5 days",
      price: "$1,450",
      includes: ["Beach Resort", "Stone Town Tour", "Spice Tour"],
      type: "Beach Holiday",
    },
    {
      name: "Cultural Zanzibar",
      duration: "4 days",
      price: "$1,200",
      includes: ["Stone Town", "Spice Tours", "Local Experiences"],
      type: "Cultural",
    },
    {
      name: "Luxury Zanzibar",
      duration: "7 days",
      price: "$3,500",
      includes: ["5-Star Resort", "Private Tours", "Sunset Cruise"],
      type: "Luxury",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Zanzibar Beach" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Zanzibar</h1>
          <p className="text-xl mb-6">The Spice Island Paradise</p>
          <div className="flex items-center justify-center gap-4 text-green-300">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-current" />
              <span>4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-5 w-5" />
              <span>Indian Ocean</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Discover Zanzibar</h2>
            <p className="text-lg text-gray-700 mb-8">
              Zanzibar is a tropical paradise in the Indian Ocean, famous for its pristine white sand beaches, crystal
              clear turquoise waters, and rich cultural heritage. The island's Stone Town is a UNESCO World Heritage
              site, showcasing centuries of Swahili, Arab, Persian, and European influences. Known as the Spice Island,
              Zanzibar offers aromatic spice tours, historic architecture, and some of the world's most beautiful
              beaches.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Waves className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Pristine Beaches</h3>
                <p className="text-gray-600">25+ stunning beaches with white sand and clear waters</p>
              </div>
              <div className="text-center">
                <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Stone Town</h3>
                <p className="text-gray-600">UNESCO World Heritage site with rich history</p>
              </div>
              <div className="text-center">
                <Palmtree className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Spice Island</h3>
                <p className="text-gray-600">Famous for cloves, cinnamon, and exotic spices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-400 mb-4">Top Attractions</h2>
            <p className="text-xl text-gray-300">Explore Zanzibar's most captivating destinations</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-gray-900 border-gray-700"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-green-400">{attraction.name}</CardTitle>
                      <CardDescription className="text-gray-300">{attraction.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex items-center gap-2 mb-2 text-gray-300">
                        <Clock className="h-4 w-4" />
                        <span>{attraction.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2 text-gray-300">
                        <Waves className="h-4 w-4" />
                        <span>Best Time: {attraction.bestTime}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-green-400">Highlights:</h4>
                        <ul className="list-disc pl-4 text-sm text-gray-300">
                          {attraction.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Tour Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect Zanzibar experience for you</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {tourPackages.map((tour, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-2 border-black">
                <CardHeader className="p-6 bg-black text-white">
                  <CardTitle className="text-green-400">{tour.name}</CardTitle>
                  <CardDescription className="text-gray-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="font-semibold text-green-400">{tour.price}</div>
                    <div>Type: {tour.type}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="text-sm font-semibold text-gray-700">Includes:</h4>
                  <ul className="list-disc pl-4 text-sm text-gray-600">
                    {tour.includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-black hover:bg-gray-800 text-white mt-4">
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Zanzibar?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Let us create your perfect island getaway with beaches, culture, and spice adventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-green-50 px-8 py-4 text-lg font-semibold" asChild>
              <Link href="/booking">Plan Your Trip</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
