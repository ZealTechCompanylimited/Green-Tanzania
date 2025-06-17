import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Clock, Users, Camera, Mountain, Waves, TreePine, Crown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ToursPage() {
  const tourCategories = [
    {
      name: "Wildlife Safari",
      description: "Experience the Big Five and witness the Great Migration",
      image: "/placeholder.svg?height=300&width=400",
      icon: Camera,
      tours: ["Classic Safari", "Migration Safari", "Big Five Safari"],
      duration: "3-10 days",
      price: "From $2,200",
      slug: "wildlife-safari",
    },
    {
      name: "Mountain Climbing",
      description: "Conquer Africa's highest peaks with expert guides",
      image: "/placeholder.svg?height=300&width=400",
      icon: Mountain,
      tours: ["Kilimanjaro", "Mount Kenya", "Mount Meru"],
      duration: "5-9 days",
      price: "From $1,800",
      slug: "mountain-climbing",
    },
    {
      name: "Beach Holidays",
      description: "Relax on pristine beaches and explore island culture",
      image: "/placeholder.svg?height=300&width=400",
      icon: Waves,
      tours: ["Zanzibar Beach", "Coastal Kenya", "Island Hopping"],
      duration: "3-7 days",
      price: "From $1,200",
      slug: "beach-holidays",
    },
    {
      name: "Cultural Tours",
      description: "Immerse yourself in local traditions and communities",
      image: "/placeholder.svg?height=300&width=400",
      icon: Users,
      tours: ["Maasai Villages", "Tribal Experiences", "Local Markets"],
      duration: "2-5 days",
      price: "From $800",
      slug: "cultural-tours",
    },
    {
      name: "Luxury Safari",
      description: "Premium accommodations and exclusive wildlife experiences",
      image: "/placeholder.svg?height=300&width=400",
      icon: Crown,
      tours: ["Luxury Lodges", "Private Guides", "Exclusive Access"],
      duration: "5-12 days",
      price: "From $5,000",
      slug: "luxury-safari",
    },
  ]

  const featuredTours = [
    {
      name: "Serengeti Migration Safari",
      description: "Witness the world's greatest wildlife spectacle",
      image: "/placeholder.svg?height=200&width=300",
      duration: "7 days",
      price: "$3,200",
      rating: 4.9,
      highlights: ["Great Migration", "Hot Air Balloon", "Luxury Camps"],
    },
    {
      name: "Kilimanjaro Machame Route",
      description: "Climb the roof of Africa via the scenic route",
      image: "/placeholder.svg?height=200&width=300",
      duration: "7 days",
      price: "$2,800",
      rating: 4.8,
      highlights: ["Uhuru Peak", "Professional Guides", "All Equipment"],
    },
    {
      name: "Zanzibar Paradise",
      description: "Perfect beach getaway with cultural experiences",
      image: "/placeholder.svg?height=200&width=300",
      duration: "5 days",
      price: "$1,650",
      rating: 4.9,
      highlights: ["Stone Town", "Spice Tours", "Beach Resort"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-green-800 to-green-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Safari Tours"
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Tours</h1>
          <p className="text-xl mb-6">Discover East Africa through our expertly crafted tour experiences</p>
          <div className="flex items-center justify-center gap-4 text-green-300">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-current" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-5 w-5" />
              <span>10,000+ Happy Travelers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Tour Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our diverse range of tour experiences designed to create unforgettable memories
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {tourCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <category.icon className="h-8 w-8 text-green-300 mb-2" />
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span>Duration: {category.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span>Price: {category.price}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Popular Tours:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.tours.map((tour, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          {tour}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href={`/tours/${category.slug}`}>Explore {category.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Featured Tours</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most popular and highly-rated tour experiences
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{tour.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-green-800">{tour.name}</CardTitle>
                    <CardDescription>{tour.description}</CardDescription>
                  </CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{tour.duration}</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">{tour.price}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/booking">Book This Tour</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Tours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Why Choose Our Tours?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide exceptional experiences with professional service and local expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Expert Guides</h3>
              <p className="text-gray-600">Professional local guides with deep knowledge and experience</p>
            </div>
            <div className="text-center">
              <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Small Groups</h3>
              <p className="text-gray-600">Intimate group sizes for personalized experiences</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Custom Itineraries</h3>
              <p className="text-gray-600">Tailored tours to match your interests and preferences</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">5-Star Service</h3>
              <p className="text-gray-600">Exceptional service from booking to your return home</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Adventure?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Book your dream tour today and create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/booking">Book Your Tour</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
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
