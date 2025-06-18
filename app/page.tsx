import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Users, Calendar, Shield, Award, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ImageCarousel from "@/components/image-carousel"

export default function HomePage() {
  const destinations = [
    {
      name: "Tanzania",
      description: "Experience the majestic Serengeti and climb Mount Kilimanjaro",
      image: "/images/tree.webp",
      highlights: ["Serengeti National Park", "Mount Kilimanjaro", "Ngorongoro Crater"],
      slug: "tanzania",
    },
    {
      name: "Zanzibar",
      description: "Pristine beaches and rich cultural heritage await",
      image: "/images/mnemba.jpg",
      highlights: ["Stone Town", "Spice Tours", "Beach Resorts"],
      slug: "zanzibar",
    },
    {
      name: "Kenya",
      description: "Witness the Great Migration and explore diverse landscapes",
      image: "/images/kenya G.webp",
      highlights: ["Maasai Mara", "Amboseli National Park", "Lake Nakuru"],
      slug: "kenya",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Licensed tour operators with comprehensive insurance coverage",
    },
    {
      icon: Award,
      title: "Expert Guides",
      description: "Professional local guides with years of experience",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support throughout your journey",
    },
    {
      icon: Users,
      title: "Group & Private",
      description: "Flexible options for solo travelers, couples, and groups",
    },
  ]

  const carouselImages = [
    {
      src: "/images/wildlifec-good.webp",
      alt: "Serengeti Wildlife Safari",
      title: "Serengeti National Park",
      description: "Witness the Great Migration and incredible wildlife",
    },
    {
      src: "/images/kili1.webp",
      alt: "Mount Kilimanjaro",
      title: "Mount Kilimanjaro",
      description: "Conquer Africa&#39;s highest peak with expert guides",
    },
    {
      src: "/images/mnemba.jpg",
      alt: "Zanzibar Beach",
      title: "Zanzibar Beaches",
      description: "Relax on pristine white sand beaches",
    },
    {
      src: "/images/nyumbu.jpeg",
      alt: "Ngorongoro Crater",
      title: "Ngorongoro Crater",
      description: "Explore the world&#39;s largest intact volcanic caldera",
    },
    {
      src: "/images/cultural.webp",
      alt: "Maasai Culture",
      title: "Cultural Experiences",
      description: "Immerse yourself in authentic local traditions",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Carousel */}
      <section className="relative h-screen">
        <ImageCarousel images={carouselImages} />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4 z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Discover East Africa&#39;s
              <span className="block text-green-300">Hidden Treasures</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Experience unforgettable safaris, pristine beaches, and rich cultures across Tanzania, Zanzibar, and Kenya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 text-lg"
                asChild
              >
                <Link href="/booking" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Start Your Adventure
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
                asChild
              >
                <Link href="/destinations" className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Explore Destinations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-400 mb-4">Why Choose greenTanzania?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We provide exceptional safari experiences with professional service and local expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-green-800 bg-black/80 hover:shadow-lg hover:shadow-green-900/20 transition-shadow"
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <CardTitle className="text-green-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the most spectacular destinations in East Africa
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group border-black">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
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
                <CardContent className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-black/10 text-black border border-black/20">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                    <Link href={`/destinations/${destination.slug}`}>Explore {destination.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your African Adventure?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Book your dream safari today and create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/booking">Book Your Safari</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
