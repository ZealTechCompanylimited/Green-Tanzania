import Link from "next/link"
import { Mountain, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">greenTanzania</span>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner for unforgettable East African adventures since 2009.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Explore</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/destinations" className="hover:text-green-400 transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-green-400 transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/travel-guide" className="hover:text-green-400 transition-colors">
                  Travel Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>123 Safari Road, Arusha, Tanzania</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>+255 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>info@greentanzania.com</span>
              </li>
            </ul>
          </div>

          {/* Best Time to Visit */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Best Time to Visit</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="font-medium block">Safari Season:</span>
                <span className="text-sm">June - October (Dry Season)</span>
              </li>
              <li>
                <span className="font-medium block">Beach Season:</span>
                <span className="text-sm">June - September & December - March</span>
              </li>
              <li>
                <span className="font-medium block">Climbing Season:</span>
                <span className="text-sm">January - March & June - October</span>
              </li>
              <li>
                <span className="font-medium block">Cultural Tours:</span>
                <span className="text-sm">Year-round</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} greenTanzania. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-green-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-green-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
