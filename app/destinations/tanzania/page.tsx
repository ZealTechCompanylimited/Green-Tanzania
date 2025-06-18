import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Star, Clock, Users, Mountain, TreePine, Waves } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TanzaniaPage() {
  const attractions = [
    {
      name: "Serengeti National Park",
      description: "Witness the Great Migration and endless plains teeming with wildlife",
      image: "/placeholder.svg?height=400&width=600",
      duration: "3-5 days",
      bestTime: "June - October",
      highlights: ["Great Migration", "Big Five", "Hot Air Balloon Safari"],
    },
    {
      name: "Mount Kilimanjaro",
      description: "Climb Africa's highest peak and stand on the roof of Africa",
      image: "/placeholder.svg?height=400&width=600",
      duration: "5-9 days",
      bestTime: "January - March, June - October",
      highlights: ["Uhuru Peak", "Multiple Routes", "Glaciers"],
    },
    {
      name: "Ngorongoro Crater",
      description: "Explore the world's largest intact volcanic caldera",
      image: "/placeholder.svg?height=400&width=600",
      duration: "1-2 days",
      bestTime: "Year-round",
      highlights: ["Crater Floor", "Black Rhinos", "Maasai Culture"],
    },
    {
      name: "Tarangire National Park",
      description: "Famous for its large elephant herds and ancient baobab trees",
      image: "/placeholder.svg?height=400&width=600",
      duration: "1-2 days",
      bestTime: "June - October",
      highlights: ["Elephant Herds", "Baobab Trees", "Tree-climbing Lions"],
    },
  ]

  const tourPackages = [
    {
      name: "Classic Tanzania Safari",
      duration: "7 days",
      price: "$2,850",
      includes: ["Serengeti", "Ngorongoro", "Tarangire"],
      type: "Group Tour",
    },
    {
      name: "Kilimanjaro Adventure",
      duration: "8 days",
      price: "$3,200",
      includes: ["Machame Route", "Professional Guide", "All Equipment"],
      type: "Adventure",
    },
    {
      name: "Luxury Tanzania Experience",
      duration: "10 days",
      price: "$6,500",
      includes: ["Luxury Lodges", "Private Vehicle", "All Parks"],
      type: "Luxury",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Tanzania Safari" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Tanzania</h1>
          <p className="text-xl mb-6">The Heart of East African Safari</p>
          <div className="flex items-center justify-center gap-4 text-green-300">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-5 w-5" />
              <span>East Africa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Discover Tanzania</h2>
            <p className="text-lg text-gray-700 mb-8">
              Tanzania is home to some of Africa&apos;s most iconic wildlife destinations. From the endless plains of the
              Serengeti to the snow-capped peak of Mount Kilimanjaro, Tanzania offers unparalleled natural beauty and
              wildlife experiences. Witness the Great Migration, encounter the Big Five, and immerse yourself in rich
              Maasai culture.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">16 National Parks</h3>
                <p className="text-gray-600">Protected wilderness areas covering 38% of the country</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">120+ Tribes</h3>
                <p className="text-gray-600">Rich cultural diversity with unique traditions</p>
              </div>
              <div className="text-center">
                <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">5,895m Peak</h3>
                <p className="text-gray-600">Mount Kilimanjaro - Africa&apos;s highest mountain</p>
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
            <p className="text-xl text-gray-300">Explore Tanzania&apos;s most spectacular destinations</p>
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
            <p className="text-xl text-gray-600">Discover our curated tour packages for an unforgettable experience</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Tanzania?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Let us create a personalized Tanzania safari experience just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-green-50 px-8 py-4 text-lg font-semibold" asChild>
              <Link href="/booking">Plan Your Safari</Link>
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