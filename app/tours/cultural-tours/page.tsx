import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Heart, Home, Music, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"


export default function CulturalToursPage() {
  const culturalPackages = [
    {
      name: "Maasai Cultural Experience",
      duration: "3 days",
      location: "Maasai Villages, Tanzania",
      price: "$850",
      groupSize: "2-8 people",
      includes: [
        "Village visits",
        "Traditional ceremonies",
        "Local guide",
        "Accommodation",
        "All meals",
        "Cultural activities",
      ],
      highlights: ["Traditional dances", "Boma visits", "Cattle herding", "Jewelry making", "Warrior training"],
      description: "Immerse yourself in authentic Maasai culture with overnight stays in traditional villages.",
    },
    {
      name: "Stone Town Heritage Tour",
      duration: "2 days",
      location: "Zanzibar Stone Town",
      price: "$450",
      groupSize: "2-12 people",
      includes: ["Guided tours", "Museum visits", "Spice market", "Local meals", "Cultural performances"],
      highlights: ["UNESCO sites", "Spice markets", "Sultan's Palace", "Local cuisine", "Swahili culture"],
      description: "Explore the rich history and culture of Zanzibar's UNESCO World Heritage Stone Town.",
    },
    {
      name: "Multi-Cultural East Africa",
      duration: "7 days",
      location: "Tanzania & Kenya",
      price: "$1,800",
      groupSize: "4-10 people",
      includes: [
        "Multiple communities",
        "Cultural exchanges",
        "Traditional crafts",
        "Local transportation",
        "Expert guide",
      ],
      highlights: ["Maasai villages", "Hadzabe tribe", "Local markets", "Traditional crafts", "Cultural ceremonies"],
      description: "Comprehensive cultural journey visiting multiple ethnic communities across East Africa.",
    },
  ]

  const culturalExperiences = [
    {
      icon: Music,
      title: "Traditional Ceremonies",
      description: "Participate in authentic cultural ceremonies and rituals",
      activities: ["Wedding ceremonies", "Coming of age rituals", "Harvest celebrations", "Spiritual ceremonies"],
    },
    {
      icon: Home,
      title: "Village Life",
      description: "Experience daily life in traditional African communities",
      activities: ["Cooking with families", "Farming activities", "Craft making", "Storytelling sessions"],
    },
    {
      icon: Heart,
      title: "Community Projects",
      description: "Support local communities through meaningful projects",
      activities: ["School visits", "Healthcare support", "Conservation projects", "Skill sharing"],
    },
    {
      icon: Camera,
      title: "Cultural Photography",
      description: "Capture authentic moments with respectful photography",
      activities: ["Portrait sessions", "Ceremony documentation", "Daily life photography", "Landscape shots"],
    },
  ]

  const communities = [
    {
      name: "Maasai People",
      location: "Northern Tanzania & Southern Kenya",
      description: "Semi-nomadic pastoralists known for their distinctive culture and warrior traditions",
      traditions: ["Cattle herding", "Traditional dress", "Jumping dance", "Oral history"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Hadzabe Tribe",
      location: "Lake Eyasi, Tanzania",
      description: "One of the last hunter-gatherer tribes in Africa with ancient traditions",
      traditions: ["Hunting with bows", "Gathering wild foods", "Click language", "Fire making"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Chagga People",
      location: "Mount Kilimanjaro, Tanzania",
      description: "Agricultural community living on the slopes of Mount Kilimanjaro",
      traditions: ["Coffee farming", "Banana cultivation", "Traditional brewing", "Mountain culture"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Swahili Culture",
      location: "Zanzibar & Coast",
      description: "Blend of African, Arab, and Indian cultures along the East African coast",
      traditions: ["Spice trading", "Dhow sailing", "Islamic architecture", "Taarab music"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Cultural Tours" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Cultural Tours</h1>
          <p className="text-xl mb-6">Authentic Cultural Experiences & Community Connections</p>
          <div className="flex items-center justify-center gap-4 text-green-300">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-current" />
              <span>Authentic Experiences</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-5 w-5" />
              <span>Community Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Discover Rich Cultural Heritage</h2>
            <p className="text-lg text-gray-700 mb-8">
              Experience the vibrant cultures of East Africa through authentic community visits, traditional ceremonies,
              and meaningful cultural exchanges. Our cultural tours provide respectful and educational interactions with
              local communities while supporting their development through responsible tourism. Learn about ancient
              traditions, participate in daily activities, and create lasting connections with the people who call East
              Africa home.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {culturalExperiences.map((experience, index) => (
                <div key={index} className="text-center">
                  <experience.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{experience.title}</h3>
                  <p className="text-gray-600 text-sm">{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Cultural Tour Packages</h2>
            <p className="text-xl text-gray-600">Choose your cultural adventure</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {culturalPackages.map((tour, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-green-600 text-white">
                  <CardTitle>{tour.name}</CardTitle>
                  <CardDescription className="text-green-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4" />
                      <span>{tour.groupSize}</span>
                    </div>
                    <div className="text-2xl font-bold">{tour.price}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{tour.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">Location:</h4>
                    <p className="text-sm text-gray-600">{tour.location}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Package Includes:</h4>
                    <ul className="list-disc pl-4 text-sm text-gray-600">
                      {tour.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Cultural Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/booking">Book This Tour</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Communities You&apos;ll Meet</h2>
            <p className="text-xl text-gray-600">Discover the diverse cultures of East Africa</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {communities.map((community, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={community.image || "/placeholder.svg"}
                    alt={community.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-green-800">{community.name}</CardTitle>
                    <CardDescription className="text-green-600">{community.location}</CardDescription>
                  </CardHeader>
                  <p className="text-gray-600 mb-4">{community.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Cultural Traditions:</h4>
                    <div className="flex flex-wrap gap-1">
                      {community.traditions.map((tradition, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          {tradition}
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

      {/* Responsible Tourism */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Responsible Cultural Tourism</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Our Commitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 text-gray-600 space-y-2">
                    <li>Fair compensation for communities</li>
                    <li>Respectful cultural interactions</li>
                    <li>Support for local development projects</li>
                    <li>Preservation of traditional practices</li>
                    <li>Educational cultural exchanges</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Visitor Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 text-gray-600 space-y-2">
                    <li>Respect local customs and traditions</li>
                    <li>Ask permission before taking photos</li>
                    <li>Dress modestly and appropriately</li>
                    <li>Participate with open mind and heart</li>
                    <li>Support local crafts and products</li>
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
          <h2 className="text-4xl font-bold mb-4">Connect with East African Cultures</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Experience authentic cultural exchanges that create lasting memories and meaningful connections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/booking">Book Cultural Tour</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Plan Custom Experience</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}