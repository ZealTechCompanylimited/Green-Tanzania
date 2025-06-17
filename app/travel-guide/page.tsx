import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Clock,
  Thermometer,
  Camera,
  Shield,
  Plane,
  Heart,
  AlertTriangle,
  CheckCircle,
  Info,
  Banknote,
  StampIcon as Passport,
} from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"


export default function TravelGuidePage() {
  const essentialInfo = [
    {
      icon: Passport,
      title: "Visa Requirements",
      description: "Most visitors need a visa for Tanzania and Kenya",
      details: [
        "Tourist visa on arrival",
        "Valid for 90 days",
        "Passport valid 6+ months",
        "Yellow fever certificate required",
      ],
    },
    {
      icon: Plane,
      title: "Getting There",
      description: "International airports in Dar es Salaam, Arusha, and Nairobi",
      details: [
        "Kilimanjaro International Airport",
        "Jomo Kenyatta International",
        "Direct flights from Europe/US",
        "Connecting flights via Dubai/Qatar",
      ],
    },
    {
      icon: Banknote,
      title: "Currency & Money",
      description: "Tanzanian Shilling (TZS) and Kenyan Shilling (KES)",
      details: [
        "USD widely accepted",
        "Credit cards in major hotels",
        "ATMs available in cities",
        "Cash needed for rural areas",
      ],
    },
    {
      icon: Heart,
      title: "Health & Safety",
      description: "Malaria prevention and travel insurance recommended",
      details: ["Malaria prophylaxis", "Yellow fever vaccination", "Travel insurance essential", "Safe drinking water"],
    },
  ]

  const packingGuide = {
    clothing: [
      "Neutral-colored safari clothes (khaki, olive, brown)",
      "Long-sleeved shirts for evening protection",
      "Comfortable walking shoes/boots",
      "Sandals for camp/lodge",
      "Warm jacket for early morning drives",
      "Rain jacket (wet season)",
      "Sun hat with chin strap",
      "Swimwear for beach/pool",
    ],
    equipment: [
      "Binoculars (8x32 or 10x42)",
      "Camera with extra batteries",
      "Telephoto lens for wildlife",
      "Headlamp/flashlight",
      "Power bank/portable charger",
      "Universal adapter",
      "Daypack for game drives",
      "Water bottle",
    ],
    health: [
      "Malaria prophylaxis",
      "Insect repellent (DEET)",
      "Sunscreen (SPF 30+)",
      "First aid kit",
      "Personal medications",
      "Hand sanitizer",
      "Lip balm with SPF",
      "Electrolyte tablets",
    ],
  }

  const bestTimes = [
    {
      season: "Dry Season",
      months: "June - October",
      weather: "Cool and dry",
      wildlife: "Excellent game viewing",
      pros: ["Best wildlife viewing", "Clear skies", "Comfortable temperatures", "Great Migration in Mara"],
      cons: ["Peak season prices", "Crowded parks", "Dusty conditions"],
      recommended: "Wildlife Safari, Mountain Climbing",
    },
    {
      season: "Short Rains",
      months: "November - December",
      weather: "Brief afternoon showers",
      wildlife: "Good game viewing",
      pros: ["Fewer crowds", "Green landscapes", "Calving season", "Lower prices"],
      cons: ["Some roads muddy", "Occasional rain", "Higher humidity"],
      recommended: "Photography, Cultural Tours",
    },
    {
      season: "Dry & Hot",
      months: "January - March",
      weather: "Hot and dry",
      wildlife: "Excellent viewing",
      pros: ["Great weather", "Calving season", "Fewer tourists", "Perfect for beaches"],
      cons: ["Very hot midday", "Limited shade", "Water sources scarce"],
      recommended: "Beach Holidays, Safari",
    },
    {
      season: "Long Rains",
      months: "April - May",
      weather: "Heavy rains",
      wildlife: "Limited viewing",
      pros: ["Lowest prices", "Lush landscapes", "Bird watching", "Photography"],
      cons: ["Many camps closed", "Muddy roads", "Limited game viewing"],
      recommended: "Budget Travel, Photography",
    },
  ]

  const culturalTips = [
    {
      title: "Greetings & Respect",
      tips: [
        "Learn basic Swahili greetings (Jambo, Asante)",
        "Handshakes are common, use right hand",
        "Respect for elders is very important",
        "Remove shoes when entering homes",
      ],
    },
    {
      title: "Photography Etiquette",
      tips: [
        "Always ask permission before photographing people",
        "Respect 'no photography' signs",
        "Don't photograph military or government buildings",
        "Be sensitive in villages and cultural sites",
      ],
    },
    {
      title: "Dress Code",
      tips: [
        "Dress modestly, especially in Stone Town",
        "Cover shoulders and knees in religious sites",
        "Neutral colors for safari",
        "Comfortable, practical clothing recommended",
      ],
    },
    {
      title: "Tipping Guidelines",
      tips: [
        "Safari guide: $10-15 per day per person",
        "Lodge staff: $5-10 per day total",
        "Restaurant: 10-15% if service charge not included",
        "Porters: $1-2 per bag",
      ],
    },
  ]

  const safetyTips = [
    {
      category: "Wildlife Safety",
      icon: Shield,
      tips: [
        "Always follow guide instructions",
        "Stay in vehicle during game drives",
        "Keep windows closed near predators",
        "Don't feed or approach animals",
        "Maintain safe distance from all wildlife",
      ],
    },
    {
      category: "Health Precautions",
      icon: Heart,
      tips: [
        "Take malaria prophylaxis as prescribed",
        "Use insect repellent regularly",
        "Drink bottled or purified water",
        "Avoid raw foods and street food",
        "Get travel insurance with medical coverage",
      ],
    },
    {
      category: "General Safety",
      icon: AlertTriangle,
      tips: [
        "Keep valuables in hotel safe",
        "Don't walk alone at night",
        "Use reputable tour operators",
        "Keep copies of important documents",
        "Register with your embassy",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r from-green-800 to-green-600">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">East Africa Travel Guide</h1>
          <p className="text-xl">Everything you need to know for your African adventure</p>
        </div>
      </section>

      {/* Essential Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Essential Travel Information</h2>
            <p className="text-xl text-gray-600">Key information for planning your East African journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {essentialInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <info.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-green-800">{info.title}</CardTitle>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                    {info.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Guide Tabs */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="packing" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="packing">Packing Guide</TabsTrigger>
                <TabsTrigger value="timing">Best Time to Visit</TabsTrigger>
                <TabsTrigger value="culture">Cultural Tips</TabsTrigger>
                <TabsTrigger value="safety">Safety & Health</TabsTrigger>
              </TabsList>

              {/* Packing Guide */}
              <TabsContent value="packing">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center gap-2">
                      <Camera className="h-5 w-5" />
                      Complete Packing Guide
                    </CardTitle>
                    <CardDescription>Essential items for your East African safari and beach adventure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-4">Clothing</h3>
                        <ul className="space-y-2">
                          {packingGuide.clothing.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-4">Equipment</h3>
                        <ul className="space-y-2">
                          {packingGuide.equipment.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-4">Health & Safety</h3>
                        <ul className="space-y-2">
                          {packingGuide.health.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Best Time to Visit */}
              <TabsContent value="timing">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      When to Visit East Africa
                    </CardTitle>
                    <CardDescription>Seasonal guide to help you choose the perfect time for your trip</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {bestTimes.map((season, index) => (
                        <Card key={index} className="border-green-200">
                          <CardHeader>
                            <CardTitle className="text-green-800">{season.season}</CardTitle>
                            <CardDescription>
                              <div className="flex items-center gap-2 mb-1">
                                <Calendar className="h-4 w-4" />
                                <span>{season.months}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Thermometer className="h-4 w-4" />
                                <span>{season.weather}</span>
                              </div>
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div>
                                <h4 className="font-semibold text-green-700 mb-1">Pros:</h4>
                                <ul className="list-disc pl-4 text-sm text-gray-600">
                                  {season.pros.map((pro, idx) => (
                                    <li key={idx}>{pro}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-red-700 mb-1">Cons:</h4>
                                <ul className="list-disc pl-4 text-sm text-gray-600">
                                  {season.cons.map((con, idx) => (
                                    <li key={idx}>{con}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-green-700 mb-1">Best For:</h4>
                                <p className="text-sm text-gray-600">{season.recommended}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Cultural Tips */}
              <TabsContent value="culture">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      Cultural Etiquette & Tips
                    </CardTitle>
                    <CardDescription>Respect local customs and enhance your cultural experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {culturalTips.map((section, index) => (
                        <Card key={index} className="border-green-200">
                          <CardHeader>
                            <CardTitle className="text-green-800 text-lg">{section.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {section.tips.map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <Info className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Safety & Health */}
              <TabsContent value="safety">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Safety & Health Guidelines
                    </CardTitle>
                    <CardDescription>Stay safe and healthy during your East African adventure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {safetyTips.map((category, index) => (
                        <Card key={index} className="border-green-200">
                          <CardHeader>
                            <CardTitle className="text-green-800 text-lg flex items-center gap-2">
                              <category.icon className="h-5 w-5" />
                              {category.category}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {category.tips.map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Quick Reference</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Emergency Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Tanzania Emergency:</strong> 112 or 999
                    </p>
                    <p>
                      <strong>Kenya Emergency:</strong> 999 or 112
                    </p>
                    <p>
                      <strong>Tourist Police Tanzania:</strong> +255 22 211 5897
                    </p>
                    <p>
                      <strong>Tourist Helpline Kenya:</strong> +254 20 271 1262
                    </p>
                    <p>
                      <strong>greenTanzania 24/7:</strong> +255 123 456 789
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-800">Useful Phrases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Hello:</strong> Jambo / Hujambo
                    </p>
                    <p>
                      <strong>Thank you:</strong> Asante (sana)
                    </p>
                    <p>
                      <strong>Please:</strong> Tafadhali
                    </p>
                    <p>
                      <strong>Excuse me:</strong> Samahani
                    </p>
                    <p>
                      <strong>How much?:</strong> Bei gani?
                    </p>
                    <p>
                      <strong>Where is...?:</strong> ...iko wapi?
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Now that you're prepared, let us help you plan the perfect East African experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/booking">Plan Your Trip</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Get Expert Advice</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
