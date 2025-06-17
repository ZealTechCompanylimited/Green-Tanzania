import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-green-800">Site Map</CardTitle>
            <p className="text-gray-600">Navigate through all pages on our website</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-4">Main Pages</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-blue-600 hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-blue-600 hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-blue-600 hover:underline">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/booking" className="text-blue-600 hover:underline">
                      Book Now
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-blue-600 hover:underline">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel-guide" className="text-blue-600 hover:underline">
                      Travel Guide
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-4">Destinations</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/destinations" className="text-blue-600 hover:underline">
                      All Destinations
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/tanzania" className="text-blue-600 hover:underline">
                      Tanzania
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/zanzibar" className="text-blue-600 hover:underline">
                      Zanzibar
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/kenya" className="text-blue-600 hover:underline">
                      Kenya
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-4">Tours</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/tours" className="text-blue-600 hover:underline">
                      All Tours
                    </Link>
                  </li>
                  <li>
                    <Link href="/tours/wildlife-safari" className="text-blue-600 hover:underline">
                      Wildlife Safari
                    </Link>
                  </li>
                  <li>
                    <Link href="/tours/mountain-climbing" className="text-blue-600 hover:underline">
                      Mountain Climbing
                    </Link>
                  </li>
                  <li>
                    <Link href="/tours/beach-holidays" className="text-blue-600 hover:underline">
                      Beach Holidays
                    </Link>
                  </li>
                  <li>
                    <Link href="/tours/cultural-tours" className="text-blue-600 hover:underline">
                      Cultural Tours
                    </Link>
                  </li>
                  <li>
                    <Link href="/tours/luxury-safari" className="text-blue-600 hover:underline">
                      Luxury Safari
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap" className="text-blue-600 hover:underline">
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
