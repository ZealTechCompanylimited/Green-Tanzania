import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    title: "The Ultimate Guide to Tanzania's Great Migration",
    excerpt:
      "Discover the best times, locations, and tips for witnessing one of nature's most spectacular events in the Serengeti.",
    image: "/placeholder.svg?height=400&width=800",
    author: "David Mwangi",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Wildlife",
    slug: "ultimate-guide-great-migration",
  }

  const blogPosts = [
    {
      title: "Top 10 Safari Photography Tips for Beginners",
      excerpt:
        "Master the art of wildlife photography with these essential tips from professional safari photographers.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Sarah Kimani",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Photography",
      slug: "safari-photography-tips",
    },
    {
      title: "Climbing Kilimanjaro: Which Route Should You Choose?",
      excerpt: "Compare all Kilimanjaro routes to find the perfect path for your skill level and preferences.",
      image: "/placeholder.svg?height=300&width=400",
      author: "James Olekina",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Adventure",
      slug: "kilimanjaro-routes-guide",
    },
    {
      title: "Zanzibar's Hidden Gems: Beyond the Beaches",
      excerpt: "Explore the cultural treasures and secret spots that make Zanzibar more than just a beach destination.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Grace Wanjiku",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Culture",
      slug: "zanzibar-hidden-gems",
    },
    {
      title: "Maasai Culture: Traditions in the Modern World",
      excerpt: "Learn about the rich traditions of the Maasai people and how they maintain their culture today.",
      image: "/placeholder.svg?height=300&width=400",
      author: "James Olekina",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Culture",
      slug: "maasai-culture-traditions",
    },
    {
      title: "Best Time to Visit Kenya's National Parks",
      excerpt: "Seasonal guide to Kenya's top national parks and when to visit for the best wildlife viewing.",
      image: "/placeholder.svg?height=300&width=400",
      author: "David Mwangi",
      date: "March 3, 2024",
      readTime: "5 min read",
      category: "Travel Tips",
      slug: "best-time-visit-kenya",
    },
    {
      title: "Sustainable Safari: How to Travel Responsibly",
      excerpt: "Tips for eco-friendly safari travel that supports conservation and local communities.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Sarah Kimani",
      date: "March 1, 2024",
      readTime: "8 min read",
      category: "Conservation",
      slug: "sustainable-safari-travel",
    },
  ]

  const categories = [
    { name: "All Posts", count: 25 },
    { name: "Wildlife", count: 8 },
    { name: "Adventure", count: 6 },
    { name: "Culture", count: 5 },
    { name: "Photography", count: 4 },
    { name: "Travel Tips", count: 2 },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r from-green-800 to-green-600">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Safari Stories & Travel Tips</h1>
          <p className="text-xl">Discover East Africa through our expert insights and traveler experiences</p>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Badge
                    key={index}
                    variant={index === 0 ? "default" : "secondary"}
                    className={index === 0 ? "bg-green-600" : "bg-white text-gray-700 hover:bg-green-100"}
                  >
                    {category.name} ({category.count})
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Featured Article</h2>
            </div>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600">{featuredPost.category}</Badge>
                </div>
                <div className="md:w-1/2 p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl text-green-800 mb-2">{featuredPost.title}</CardTitle>
                    <CardDescription className="text-base">{featuredPost.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700" asChild>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-600">Stay updated with our latest safari insights and travel tips</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-green-600">{post.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-lg text-green-800 mb-2 line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors"
                      asChild
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-green-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter for the latest safari tips, travel stories, and exclusive offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input placeholder="Enter your email address" className="flex-1" />
                  <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
                </div>
                <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe at any time.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience East Africa?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Turn your safari dreams into reality with our expert-guided tours and personalized experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/booking">Book Your Safari</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">Plan Custom Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
