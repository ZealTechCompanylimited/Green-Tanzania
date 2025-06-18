import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Crown, Plane, Utensils } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"


export default function LuxurySafariPage() {
  const luxuryPackages = [
    {
      name: "Ultimate Luxury Tanzania Safari",
      duration: "10 days",
      destinations: ["Serengeti", "Ngorongoro", "Tarangire"],
      price: "$8,500",
      rating: 5.0,
      accommodation: "5-Star Luxury Lodges",
      includes: [
        "Private vehicle",
        "Professional guide",
        "All meals",
        "Premium lodges",
        "Private airstrip transfers",
        "Butler service",
      ],
      highlights: ["Private game drives", "Luxury lodges", "Gourmet dining", "Spa treatments", "Hot air balloon"],
      description: "The ultimate luxury safari experience with exclusive access and world-class amenities.",
    },
    {
      name: "Exclusive Kenya Luxury Safari",
      duration: "8 days",
      destinations: ["Maasai Mara", "Amboseli", "Samburu"],
      price: "$7,200",
      rating: 4.9,
      accommodation: "Luxury Tented Camps",
      includes: ["Private conservancy access", "Expert guide", "Fine dining", "Spa services", "Cultural experiences"],
      highlights: ["Private conservancies", "Migration viewing", "Luxury tents", "Cultural visits", "Photography"],
      description: "Exclusive safari experience in Kenya&apos;s premier private conservancies and luxury camps.",
    },
    {
      name: "Grand East Africa Luxury Tour",
      duration: "14 days",
      destinations: ["Tanzania", "Kenya", "Zanzibar"],
      price: "$12,800",
      rating: 5.0,
      accommodation: "Ultra-Luxury Resorts",
      includes: [
        "Private jet transfers",
        "Personal butler",
        "Michelin-level dining",
        "Exclusive experiences",
        "Luxury beach resort",
      ],
      highlights: ["Private jet", "Ultra-luxury", "Exclusive access", "Beach extension", "Personal service"],
      description: "The pinnacle of luxury travel combining the best of safari and beach in ultimate comfort.",
    },
  ]

  const luxuryFeatures = [
    {
      icon: Crown,
      title: "Ultra-Luxury Accommodations",
      description: "5-star lodges and camps with world-class amenities",
      features: ["Private suites", "Butler service", "Infinity pools", "Spa facilities"],
    },
    {
      icon: Plane,
      title: "Private Transportation",
      description: "Exclusive vehicles and private aircraft transfers",
      features: ["Private game vehicles", "Charter flights", "Helicopter transfers", "Airport VIP service"],
    },
    {
      icon: Utensils,
      title: "Gourmet Dining",
      description: "World-class cuisine with personal chefs",
      features: ["Michelin-level dining", "Private chefs", "Wine pairings", "Bush dinners"],
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Dedicated staff and customized experiences",
      features: ["Personal guide", "Butler service", "Concierge", "Custom itineraries"],
    },
  ]

  const luxuryLodges = [
    {
      name: "Four Seasons Safari Lodge",
      location: "Serengeti, Tanzania",
      description: "Luxury lodge overlooking the endless Serengeti plains",
      amenities: ["Infinity pool", "Spa", "Fine dining", "Private decks", "Butler service"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Angama Mara",
      location: "Maasai Mara, Kenya",
      description: "Suspended above the Great Rift Valley with breathtaking views",
      amenities: ["Panoramic views", "Photography studio", "Spa treatments", "Private dining", "Hot air balloon"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "The Residence Zanzibar",
      location: "Zanzibar, Tanzania",
      description: "Ultra-luxury beach resort with private villas",
      amenities: ["Private beach", "Villa suites", "Spa sanctuary", "Fine dining", "Water sports"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Singita Grumeti",
      location: "Western Serengeti, Tanzania",
      description: "Exclusive private reserve with unparalleled luxury",
      amenities: ["Private reserve", "Wine cellar", "Spa", "Private airstrip", "Conservation center"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Luxury Safari" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Luxury Safari Tours</h1>
          <p className="text-xl mb-6">Ultimate Safari Experiences in Unparalleled Luxury</p>
          <div className="flex items-center justify-center gap-4 text-green-300">
            <div className="flex items-center gap-1">
              <Crown className="h-5 w-5" />
              <span>5-Star Luxury</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-current" />
              <span>Exclusive Experiences</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-6">The Pinnacle of Safari Luxury</h2>
            <p className="text-lg text-gray-700 mb-8">
              Experience East Africa&apos;s wildlife in absolute luxury with our premium safari packages. Stay in world-class
              lodges, enjoy private game drives with expert guides, and indulge in gourmet dining under the African
              stars. Our luxury safaris combine exceptional wildlife viewing with unparalleled comfort, personalized
              service, and exclusive access to private conservancies and premium locations.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {luxuryFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Luxury Safari Packages</h2>
            <p className="text-xl text-gray-600">Choose your ultimate luxury adventure</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {luxuryPackages.map((safari, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow border-2 border-yellow-200"
              >
                <CardHeader className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="h-5 w-5" />
                    <Badge className="bg-white text-yellow-600">LUXURY</Badge>
                  </div>
                  <CardTitle>{safari.name}</CardTitle>
                  <CardDescription className="text-yellow-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4" />
                      <span>{safari.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{safari.rating}/5 Rating</span>
                    </div>
                    <div className="text-2xl font-bold">{safari.price}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{safari.description}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Destinations:</h4>
                      <p className="text-sm text-gray-600">{safari.destinations.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Accommodation:</h4>
                      <p className="text-sm text-gray-600">{safari.accommodation}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Luxury Includes:</h4>
                    <ul className="list-disc pl-4 text-sm text-gray-600">
                      {safari.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Exclusive Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {safari.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white" asChild>
                    <Link href="/booking">Book Luxury Safari</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Lodges */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">World-Class Luxury Lodges</h2>
            <p className="text-xl text-gray-600">Stay at Africa&apos;s most exclusive safari lodges</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {luxuryLodges.map((lodge, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={lodge.image || "/placeholder.svg"} alt={lodge.name} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-yellow-600">LUXURY</Badge>
                </div>
                <CardContent className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-green-800">{lodge.name}</CardTitle>
                    <CardDescription className="text-green-600">{lodge.location}</CardDescription>
                  </CardHeader>
                  <p className="text-gray-600 mb-4">{lodge.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Luxury Amenities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {lodge.amenities.map((amenity, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          {amenity}
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

      {/* Exclusive Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Exclusive Luxury Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <Crown className="h-5 w-5 text-yellow-600" />
                    VIP Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 text-gray-600 space-y-2">
                    <li>Private airport transfers and VIP lounges</li>
                    <li>Personal butler and concierge services</li>
                    <li>Private game vehicles with expert guides</li>
                    <li>Helicopter and charter flight transfers</li>
                    <li>24/7 personal assistance</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-yellow-600" />
                    Culinary Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 text-gray-600 space-y-2">
                    <li>Michelin-level gourmet dining experiences</li>
                    <li>Personal chefs and customized menus</li>
                    <li>Premium wine selections and pairings</li>
                    <li>Private bush dinners under the stars</li>
                    <li>Special dietary accommodations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Experience Safari in Ultimate Luxury</h2>
          <p className="text-xl mb-8 text-yellow-100 max-w-2xl mx-auto">
            Indulge in the finest safari experience with world-class accommodations and personalized service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/booking">Book Luxury Safari</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Plan Bespoke Experience</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}