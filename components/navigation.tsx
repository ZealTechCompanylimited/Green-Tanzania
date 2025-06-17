"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Mountain, Menu, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const destinations = [
    {
      name: "Tanzania",
      href: "/destinations/tanzania",
      description: "Serengeti, Kilimanjaro & Ngorongoro Crater",
    },
    {
      name: "Zanzibar",
      href: "/destinations/zanzibar",
      description: "Pristine beaches & Stone Town",
    },
    {
      name: "Kenya",
      href: "/destinations/kenya",
      description: "Maasai Mara & Amboseli National Park",
    },
  ]

  const tours = [
    {
      name: "Wildlife Safari",
      href: "/tours/wildlife-safari",
      description: "Big Five & Great Migration tours",
    },
    {
      name: "Mountain Climbing",
      href: "/tours/mountain-climbing",
      description: "Kilimanjaro & Mount Kenya expeditions",
    },
    {
      name: "Beach Holidays",
      href: "/tours/beach-holidays",
      description: "Zanzibar & coastal getaways",
    },
    {
      name: "Cultural Tours",
      href: "/tours/cultural-tours",
      description: "Maasai villages & local experiences",
    },
    {
      name: "Luxury Safari",
      href: "/tours/luxury-safari",
      description: "Premium lodges & private guides",
    },
  ]

  return (
    <header className="bg-white shadow-md border-b border-black/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-black">greenTanzania</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-black/10 data-[state=open]:bg-black/10"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-black hover:text-white">Destinations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                    {destinations.map((destination) => (
                      <ListItem key={destination.name} title={destination.name} href={destination.href}>
                        {destination.description}
                      </ListItem>
                    ))}
                    <ListItem title="All Destinations" href="/destinations">
                      View all our amazing destinations
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-black hover:text-white">Tours</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                    {tours.map((tour) => (
                      <ListItem key={tour.name} title={tour.name} href={tour.href}>
                        {tour.description}
                      </ListItem>
                    ))}
                    <ListItem title="All Tours" href="/tours">
                      Browse all available tour packages
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/blog"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-black/10 data-[state=open]:bg-black/10"
                  >
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/travel-guide"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-black/10 data-[state=open]:bg-black/10"
                  >
                    Travel Guide
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-black/10 data-[state=open]:bg-black/10"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-black/10 data-[state=open]:bg-black/10"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button asChild className="bg-black hover:bg-gray-800 text-white">
              <Link href="/booking">Book Now</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-black/10">
            <nav className="flex flex-col space-y-2 pt-4">
              <Link href="/" className="text-gray-700 hover:text-black font-medium py-2">
                Home
              </Link>
              <div className="py-2">
                <div className="font-medium text-gray-700 mb-2">Destinations</div>
                <div className="pl-4 space-y-1">
                  {destinations.map((destination) => (
                    <Link
                      key={destination.name}
                      href={destination.href}
                      className="block text-gray-600 hover:text-black py-1"
                    >
                      {destination.name}
                    </Link>
                  ))}
                  <Link href="/destinations" className="block text-gray-600 hover:text-black py-1">
                    All Destinations
                  </Link>
                </div>
              </div>
              <div className="py-2">
                <div className="font-medium text-gray-700 mb-2">Tours</div>
                <div className="pl-4 space-y-1">
                  {tours.map((tour) => (
                    <Link key={tour.name} href={tour.href} className="block text-gray-600 hover:text-black py-1">
                      {tour.name}
                    </Link>
                  ))}
                  <Link href="/tours" className="block text-gray-600 hover:text-black py-1">
                    All Tours
                  </Link>
                </div>
              </div>
              <Link href="/blog" className="text-gray-700 hover:text-black font-medium py-2">
                Blog
              </Link>
              <Link href="/travel-guide" className="text-gray-700 hover:text-black font-medium py-2">
                Travel Guide
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black font-medium py-2">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black font-medium py-2">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black hover:text-white focus:bg-black focus:text-white",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
