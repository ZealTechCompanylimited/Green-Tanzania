import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Star, Clock, Mountain, TreePine, TelescopeIcon as Binoculars } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KenyaPage() {
  const attractions = [
    {
      name: "Maasai Mara",
      description: "Witness the Great Migration and encounter the Big Five",
      image: "/placeholder.svg?height=400&width=600",
      duration: "3-5 days",
      bestTime: "July - October",
      highlights: ["Great Migration", "Big Five", "Maasai Culture"],
    },
    {
      name: "Amboseli National Park",
      description: "Spectacular views of Mount Kilimanjaro and large elephant herds",
      image: "/placeholder.svg?height=400&width=600",
      duration: "2-3 days",
      bestTime: "June - October, January - March",
      highlights: ["Mount Kilimanjaro Views", "Elephant Herds", "Swamplands"],
    },
    {
      name: "Lake Nakuru",
      description: "Famous for flamingos and rhino sanctuary",
      image: "/placeholder.svg?height=400&width=600",
      duration: "1-2 days",
      bestTime: "Year-round",
      highlights: ["Flamingo Flocks", "Black & White Rhinos", "Tree-climbing Lions"],
    },
    {
      name: "Mount Kenya",
      description: "Africa's second highest peak with diverse ecosystems",
      image: "/placeholder.svg?height=400&width=600",
      duration: "4-7 days",
      bestTime: "January - March, June - October",
      highlights: ["Point Lenana", "Alpine Lakes", "Unique Flora"],
    },
  ]

  const tourPackages = [
    {
      name: "Classic Kenya Safari",
      duration: "6 days",
      price: "$2,650",
      includes: ["Maasai Mara", "Lake Nakuru", "Amboseli"],
      type: "Group Safari",
    },
    {
      name: "Mount Kenya Trek",
      duration: "5 days",
      price: "$1,800",
      includes: ["Sirimon Route", "Point Lenana", "All Equipment"],
      type: "Adventure",
    },
    {
      name: "Luxury Kenya Experience",
      duration: "8 days",
      price: "$5,200",
      includes: ["Luxury Camps", "Private Vehicle", "All Parks"],
      type: "Luxury",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Kenya Safari" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Kenya</h1>
          <p className="text-xl mb-6">The Cradle of Safari</p>
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">Discover Kenya</h2>
            <p className="text-lg text-gray-700 mb-8">
              Kenya is the birthplace of safari, offering some of the world&apos;s most spectacular wildlife experiences.
              From the legendary Maasai Mara to the snow-capped peaks of Mount Kenya, this diverse country provides
              unforgettable encounters with nature and culture. Witness the Great Migration, spot the Big Five, and
              immerse yourself in the rich traditions of the Maasai people.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">60+ Parks & Reserves</h3>
                <p className="text-gray-600">Diverse ecosystems from savannas to mountains</p>
              </div>
              <div className="text-center">
                <Binoculars className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Great Migration</h3>
                <p className="text-gray-600">Annual wildebeest migration spectacle</p>
              </div>
              <div className="text-center">
                <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">5,199m Peak</h3>
                <p className="text-gray-600">Mount Kenya - Africa&apos;s second highest mountain</p>
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
            <p className="text-xl text-gray-300">Explore Kenya&apos;s most iconic destinations</p>
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
                        <TreePine className="h-4 w-4" />
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
            <p className="text-xl text-gray-600">Experience the best of Kenya with our expertly crafted tours</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Kenya?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Let us create your perfect Kenyan safari adventure with wildlife, culture, and breathtaking landscapes
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