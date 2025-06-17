import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Clock,
  Star,
  Users,
  Plane,
  Camera,
  Calendar,
  Thermometer,
  CreditCard,
  MessageCircle,
} from "lucide-react"
import { getDestinationBySlug, getRelatedDestinations } from "@/lib/data"

interface DestinationPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return [{ slug: "tanzania" }, { slug: "zanzibar" }, { slug: "kenya" }]
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = getDestinationBySlug(params.slug)

  if (!destination) {
    notFound()
  }

  const relatedDestinations = getRelatedDestinations(params.slug)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4">{destination.title}</h1>
          <p className="text-xl mb-8 text-gray-200">{destination.description}</p>
          <div className="flex items-center justify-center gap-6 text-green-300">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-current" />
              <span>Premium Destination</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>East Africa</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{destination.duration}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Best Time</h3>
              <p className="text-gray-600 text-sm">{destination.bestTime}</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Difficulty</h3>
              <p className="text-gray-600 text-sm">{destination.difficulty}</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Duration</h3>
              <p className="text-gray-600 text-sm">{destination.duration}</p>
            </div>
            <div className="text-center">
              <CreditCard className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Price Range</h3>
              <p className="text-gray-600 text-sm">{destination.price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="attractions">Attractions</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="practical">Practical Info</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-green-800 mb-4">About {destination.name}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{destination.longDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-4">Highlights</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {destination.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <Star className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-4">Photo Gallery</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {destination.gallery.map((image, index) => (
                        <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${destination.name} gallery ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="attractions" className="space-y-6">
                  <h2 className="text-3xl font-bold text-green-800 mb-6">Top Attractions</h2>
                  <div className="space-y-6">
                    {destination.attractions.map((attraction, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="md:flex">
                          <div className="md:w-1/3 relative h-48 md:h-auto">
                            <Image
                              src={attraction.image || "/placeholder.svg"}
                              alt={attraction.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <CardHeader className="p-0 mb-4">
                              <CardTitle className="text-green-800">{attraction.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                              <p className="text-gray-700">{attraction.description}</p>
                            </CardContent>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="activities" className="space-y-6">
                  <h2 className="text-3xl font-bold text-green-800 mb-6">Activities & Experiences</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {destination.activities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-white border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <Camera className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{activity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-green-800 mb-4">Accommodation Options</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {destination.accommodation.map((option, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                          <Users className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="practical" className="space-y-6">
                  <h2 className="text-3xl font-bold text-green-800 mb-6">Practical Information</h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <Thermometer className="h-5 w-5" />
                        Climate
                      </h3>
                      <p className="text-gray-700 mb-6">{destination.climate}</p>

                      <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Currency
                      </h3>
                      <p className="text-gray-700 mb-6">{destination.currency}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Languages
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {destination.language.map((lang, index) => (
                          <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                            {lang}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <Plane className="h-5 w-5" />
                        Transportation
                      </h3>
                      <p className="text-gray-700">{destination.transportation}</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Plan Your Trip</h3>
                <div className="space-y-4">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700" size="lg">
                    <Link href="/booking">Book This Destination</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <Link href="/contact">Get Custom Quote</Link>
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">{destination.bestTime.split(",")[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{destination.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">{destination.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price Range:</span>
                    <span className="font-medium text-green-600">{destination.price}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      {relatedDestinations.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-green-800 text-center mb-12">Other Destinations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedDestinations.map((related) => (
                <Card key={related.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={related.image || "/placeholder.svg"} alt={related.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-green-800">{related.name}</CardTitle>
                      <CardDescription>{related.description}</CardDescription>
                    </CardHeader>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href={`/destinations/${related.slug}`}>Explore {related.name}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
