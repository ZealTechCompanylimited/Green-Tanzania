import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Star, Users, CheckCircle, XCircle, Calendar, Camera, Mountain } from "lucide-react"
import { getTourBySlug, getRelatedTours } from "@/lib/data"

interface TourPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return [
    { slug: "wildlife-safari" },
    { slug: "mountain-climbing" },
    { slug: "beach-holidays" },
    { slug: "cultural-tours" },
    { slug: "luxury-safari" },
  ]
}

export default function TourPage({ params }: TourPageProps) {
  const tour = getTourBySlug(params.slug)

  if (!tour) {
    notFound()
  }

  const relatedTours = getRelatedTours(tour.category, params.slug)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="bg-green-600 text-white mb-4">{tour.category}</Badge>
          <h1 className="text-6xl font-bold mb-4">{tour.title}</h1>
          <p className="text-xl mb-8 text-gray-200">{tour.description}</p>
          <div className="flex items-center justify-center gap-6 text-green-300">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{tour.groupSize}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span>{tour.difficulty}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Duration</h3>
              <p className="text-gray-600 text-sm">{tour.duration}</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Group Size</h3>
              <p className="text-gray-600 text-sm">{tour.groupSize}</p>
            </div>
            <div className="text-center">
              <Mountain className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Difficulty</h3>
              <p className="text-gray-600 text-sm">{tour.difficulty}</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">Best Time</h3>
              <p className="text-gray-600 text-sm">{tour.bestTime.split(",")[0]}</p>
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
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-green-800 mb-4">Tour Overview</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{tour.longDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-4">Tour Highlights</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {tour.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <Star className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-4">Destinations Covered</h3>
                    <div className="flex flex-wrap gap-2">
                      {tour.destinations.map((destination, index) => (
                        <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                          <MapPin className="h-4 w-4 mr-1" />
                          {destination}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="itinerary" className="space-y-6">
                  <h2 className="text-3xl font-bold text-green-800 mb-6">Detailed Itinerary</h2>
                  <div className="space-y-6">
                    {tour.itinerary.map((day, index) => (
                      <Card key={index} className="p-6">
                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                              {day.day}
                            </div>
                            <div>
                              <CardTitle className="text-green-800">{day.title}</CardTitle>
                              <CardDescription>{day.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">Activities</h4>
                              <ul className="space-y-1">
                                {day.activities.map((activity, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <Camera className="h-3 w-3 text-green-600" />
                                    <span className="text-gray-600">{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">Accommodation</h4>
                              <p className="text-gray-600">{day.accommodation}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">Meals</h4>
                              <p className="text-gray-600">{day.meals}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="inclusions" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                        What&apos;s Included
                      </h3>
                      <div className="space-y-3">
                        {tour.includes.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                        <XCircle className="h-6 w-6 text-red-600" />
                        What&apos;s Not Included
                      </h3>
                      <div className="space-y-3">
                        {tour.excludes.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="space-y-6">
                  <h2 className="text-3xl font-bold text-green-800 mb-6">Photo Gallery</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {tour.gallery.map((image, index) => (
                      <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${tour.name} gallery ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">{tour.price}</div>
                  <div className="text-gray-600">per person</div>
                </div>
                <div className="space-y-4">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700" size="lg">
                    <Link href="/booking">Book This Tour</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full" size="lg">
                    <Link href="/contact">Get Custom Quote</Link>
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Tour Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-medium">{tour.groupSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">{tour.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-medium">{tour.bestTime.split(",")[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {tour.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-green-800 text-center mb-12">Similar Tours</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedTours.map((related) => (
                <Card key={related.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={related.image || "/placeholder.svg"} alt={related.name} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-600 text-white">{related.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-green-800">{related.name}</CardTitle>
                      <CardDescription>{related.description}</CardDescription>
                    </CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-600">{related.price}</span>
                      <div className="text-sm text-gray-600">{related.duration}</div>
                    </div>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <Link href={`/tours/${related.slug}`}>View Details</Link>
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