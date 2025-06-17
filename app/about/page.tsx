import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Users, Award, Shield, Heart, Clock, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "David Mwangi",
      role: "Founder & CEO",
      experience: "15+ years",
      specialization: "Wildlife Conservation & Safari Planning",
      image: "/placeholder.svg?height=300&width=300",
      description: "Passionate conservationist with deep knowledge of East African wildlife and ecosystems.",
    },
    {
      name: "Sarah Kimani",
      role: "Head of Operations",
      experience: "12+ years",
      specialization: "Tour Operations & Customer Experience",
      image: "/placeholder.svg?height=300&width=300",
      description: "Expert in creating seamless travel experiences with attention to every detail.",
    },
    {
      name: "James Olekina",
      role: "Senior Safari Guide",
      experience: "18+ years",
      specialization: "Wildlife Photography & Maasai Culture",
      image: "/placeholder.svg?height=300&width=300",
      description: "Maasai guide with unparalleled knowledge of wildlife behavior and local traditions.",
    },
    {
      name: "Grace Wanjiku",
      role: "Travel Consultant",
      experience: "8+ years",
      specialization: "Custom Itineraries & Client Relations",
      image: "/placeholder.svg?height=300&width=300",
      description: "Dedicated to crafting personalized safari experiences that exceed expectations.",
    },
  ]

  const achievements = [
    {
      icon: Users,
      number: "10,000+",
      title: "Happy Travelers",
      description: "Satisfied customers from around the world",
    },
    {
      icon: Award,
      number: "50+",
      title: "Awards Won",
      description: "Recognition for excellence in tourism",
    },
    {
      icon: Globe,
      number: "15+",
      title: "Years Experience",
      description: "Expertise in East African tourism",
    },
    {
      icon: Heart,
      number: "95%",
      title: "Return Rate",
      description: "Customers who book with us again",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is our top priority with comprehensive insurance and experienced guides",
    },
    {
      icon: Heart,
      title: "Conservation",
      description: "Supporting wildlife conservation and local communities through responsible tourism",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Delivering exceptional experiences that exceed expectations every time",
    },
    {
      icon: Users,
      title: "Community",
      description: "Empowering local communities and creating sustainable tourism opportunities",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image src="/placeholder.svg?height=400&width=1200" alt="About greenTanzania" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About greenTanzania</h1>
          <p className="text-xl mb-6">Your Trusted Partner for East African Adventures</p>
          <div className="flex items-center justify-center gap-4 text-green-300">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-current" />
              <span>15+ Years of Excellence</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-5 w-5" />
              <span>Based in Arusha, Tanzania</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Born from Passion for Africa</h3>
                <p className="text-gray-700 mb-4">
                  greenTanzania was founded in 2009 with a simple mission: to share the incredible beauty and wildlife
                  of East Africa while supporting local communities and conservation efforts. What started as a small
                  family business has grown into one of the region's most trusted safari operators.
                </p>
                <p className="text-gray-700 mb-4">
                  Our founder, David Mwangi, grew up in the shadow of Mount Kilimanjaro and spent his childhood
                  exploring the vast savannas of Tanzania. His deep connection to the land and its wildlife inspired him
                  to create a company that would offer authentic, responsible, and unforgettable safari experiences.
                </p>
                <p className="text-gray-700">
                  Today, we're proud to have welcomed over 10,000 travelers from around the world, each leaving with
                  memories that last a lifetime and a deeper appreciation for Africa's natural wonders.
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Our founder with local community"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <achievement.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-800 mb-2">{achievement.number}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-green-800">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind your unforgettable experiences</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{member.experience}</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 mb-3">
                    {member.specialization}
                  </Badge>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Efforts */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Conservation Commitment</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Conservation efforts"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Protecting Africa's Wildlife</h3>
                <p className="text-gray-700 mb-4">
                  We believe that tourism should benefit both visitors and the destinations they explore. That's why
                  we're committed to responsible tourism practices that support wildlife conservation and local
                  communities.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>5% of all profits donated to wildlife conservation projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Employment opportunities for local communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Support for anti-poaching initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Environmental education programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience East Africa?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have discovered the magic of East Africa with greenTanzania
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/booking">Start Your Journey</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
