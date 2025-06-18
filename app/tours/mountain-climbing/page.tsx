import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Mountain, Thermometer, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"


export default function MountainClimbingPage() {
  const climbingPackages = [
    {
      name: "Kilimanjaro Machame Route",
      duration: "7 days",
      difficulty: "Moderate to Challenging",
      price: "$2,850",
      successRate: "85%",
      groupSize: "2-8 people",
      includes: ["Professional guide", "Porters", "All meals", "Camping equipment", "Park fees", "Transfers"],
      highlights: ["Barranco Wall", "Uhuru Peak", "Stella Point", "Scenic campsites"],
      description: "The most scenic route to Kilimanjaro's summit with diverse landscapes and high success rate.",
    },
    {
      name: "Kilimanjaro Lemosho Route",
      duration: "8 days",
      difficulty: "Moderate",
      price: "$3,200",
      successRate: "90%",
      groupSize: "2-6 people",
      includes: ["Expert guide", "Quality equipment", "All meals", "Private toilet tent", "Park fees"],
      highlights: ["Shira Plateau", "Lava Tower", "Barranco Wall", "Western Breach"],
      description: "Longer route with better acclimatization and stunning views from the western approach.",
    },
    {
      name: "Mount Kenya Climbing",
      duration: "5 days",
      difficulty: "Challenging",
      price: "$1,800",
      successRate: "75%",
      groupSize: "2-6 people",
      includes: ["Technical guide", "Climbing gear", "Mountain huts", "All meals", "Park fees"],
      highlights: ["Point Lenana", "Technical climbing", "Alpine lakes", "Unique flora"],
      description: "Technical climb to Africa's second highest peak with stunning alpine scenery.",
    },
  ]

  const routes = [
    {
      name: "Machame Route",
      nickname: "Whiskey Route",
      duration: "6-7 days",
      difficulty: "Moderate to Hard",
      scenery: "Excellent",
      traffic: "High",
      description: "Most popular scenic route with diverse landscapes and good acclimatization profile.",
    },
    {
      name: "Lemosho Route",
      nickname: "Premium Route",
      duration: "7-8 days",
      difficulty: "Moderate",
      scenery: "Outstanding",
      traffic: "Medium",
      description: "Longer route with excellent acclimatization and spectacular western approach views.",
    },
    {
      name: "Rongai Route",
      nickname: "Coca-Cola Route North",
      duration: "6-7 days",
      difficulty: "Moderate",
      scenery: "Good",
      traffic: "Low",
      description: "Only route approaching from the north, drier climate and fewer crowds.",
    },
    {
      name: "Marangu Route",
      nickname: "Coca-Cola Route",
      duration: "5-6 days",
      difficulty: "Moderate",
      scenery: "Good",
      traffic: "High",
      description: "Only route with hut accommodation, shorter but steeper ascent profile.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Mountain Climbing" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Mountain Climbing Tours</h1>
          <p className="text-xl mb-6">Conquer Africa&apos;s Highest Peaks</p>
          <div className="flex items-center justify-center gap-4 text-green-300">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-current" />
              <span>Expert Mountain Guides</span>
            </div>
            <div className="flex items-center gap-1">
              <Mountain className="h-5 w-5" />
              <span>5,895m Kilimanjaro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Climb Africa&apos;s Majestic Peaks</h2>
            <p className="text-lg text-gray-700 mb-8">
              Experience the ultimate adventure by climbing Mount Kilimanjaro, Africa&apos;s highest peak, or challenge
              yourself with the technical ascent of Mount Kenya. Our expert guides ensure your safety while maximizing
              your chances of reaching the summit. With proper acclimatization, quality equipment, and experienced
              support teams, we make your mountain climbing dreams a reality.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Mountain className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Expert Guides</h3>
                <p className="text-gray-600">Certified mountain guides with 10+ years experience</p>
              </div>
              <div className="text-center">
                <Thermometer className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Safety First</h3>
                <p className="text-gray-600">Comprehensive safety protocols and emergency equipment</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Small Groups</h3>
                <p className="text-gray-600">Maximum 8 climbers per guide for personalized attention</p>
              </div>
              <div className="text-center">
                <Camera className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Summit Photos</h3>
                <p className="text-gray-600">Professional summit photography included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climbing Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Mountain Climbing Packages</h2>
            <p className="text-xl text-gray-600">Choose your perfect mountain adventure</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {climbingPackages.map((climb, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-green-600 text-white">
                  <CardTitle>{climb.name}</CardTitle>
                  <CardDescription className="text-green-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4" />
                      <span>{climb.duration}</span>
                    </div>
                    <div className="text-2xl font-bold">{climb.price}</div>
                    <div>Success Rate: {climb.successRate}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{climb.description}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Difficulty:</h4>
                      <p className="text-sm text-gray-600">{climb.difficulty}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Group Size:</h4>
                      <p className="text-sm text-gray-600">{climb.groupSize}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Package Includes:</h4>
                    <ul className="list-disc pl-4 text-sm text-gray-600">
                      {climb.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {climb.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/booking">Book This Climb</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kilimanjaro Routes */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Kilimanjaro Routes Comparison</h2>
            <p className="text-xl text-gray-600">Choose the best route for your climbing experience</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-green-800">{route.name}</CardTitle>
                  <CardDescription className="text-green-600 font-medium">&ldquo;{route.nickname}&rdquo;</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{route.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-700">Duration:</h4>
                      <p className="text-gray-600">{route.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Difficulty:</h4>
                      <p className="text-gray-600">{route.difficulty}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Scenery:</h4>
                      <p className="text-gray-600">{route.scenery}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Traffic:</h4>
                      <p className="text-gray-600">{route.traffic}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Climbing Preparation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Physical Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 text-gray-600 space-y-2">
                    <li>Start training 3-6 months before your climb</li>
                    <li>Focus on cardiovascular endurance and leg strength</li>
                    <li>Practice hiking with a weighted backpack</li>
                    <li>Include stair climbing and hill walking</li>
                    <li>Consider altitude training if possible</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Essential Gear</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 text-gray-600 space-y-2">
                    <li>Quality hiking boots (broken in)</li>
                    <li>Layered clothing system</li>
                    <li>Warm sleeping bag (-10°C rating)</li>
                    <li>Trekking poles</li>
                    <li>Headlamp with extra batteries</li>
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
          <h2 className="text-4xl font-bold mb-4">Ready to Reach New Heights?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join us for the adventure of a lifetime and stand on the roof of Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/booking">Book Your Climb</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Get Climbing Advice</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}