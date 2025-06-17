export interface Destination {
  slug: string
  name: string
  title: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  highlights: string[]
  bestTime: string
  duration: string
  difficulty: string
  price: string
  activities: string[]
  accommodation: string[]
  transportation: string
  climate: string
  currency: string
  language: string[]
  attractions: {
    name: string
    description: string
    image: string
  }[]
}

export interface Tour {
  slug: string
  name: string
  title: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  duration: string
  difficulty: string
  groupSize: string
  price: string
  includes: string[]
  excludes: string[]
  itinerary: {
    day: number
    title: string
    description: string
    activities: string[]
    accommodation: string
    meals: string
  }[]
  highlights: string[]
  bestTime: string
  category: string
  destinations: string[]
}

export const destinations: Destination[] = [
  {
    slug: "tanzania",
    name: "Tanzania",
    title: "Tanzania - The Heart of East Africa",
    description: "Home to the Serengeti, Mount Kilimanjaro, and Ngorongoro Crater",
    longDescription:
      "Tanzania is a land of extraordinary diversity, where the Great Migration thunders across the Serengeti plains, Mount Kilimanjaro towers majestically above the clouds, and the Ngorongoro Crater harbors one of the world's most concentrated wildlife populations. From the endless savannas to pristine beaches, Tanzania offers an unparalleled safari experience that captures the essence of wild Africa.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    highlights: [
      "Serengeti National Park - Great Migration",
      "Mount Kilimanjaro - Africa's Highest Peak",
      "Ngorongoro Crater - World's Largest Caldera",
      "Tarangire National Park - Elephant Paradise",
      "Lake Manyara - Tree-Climbing Lions",
      "Ruaha National Park - Wild and Remote",
    ],
    bestTime: "June - October (Dry season), December - March (Calving season)",
    duration: "5-14 days",
    difficulty: "Easy to Challenging",
    price: "From $2,500",
    activities: [
      "Game drives",
      "Mountain climbing",
      "Walking safaris",
      "Cultural visits",
      "Hot air balloon rides",
      "Photography tours",
    ],
    accommodation: ["Luxury safari lodges", "Tented camps", "Mountain huts", "Budget campsites", "Boutique hotels"],
    transportation: "4WD safari vehicles, domestic flights, mountain porters",
    climate:
      "Tropical with dry and wet seasons. Temperatures range from 20-30°C in lowlands, much cooler on Kilimanjaro",
    currency: "Tanzanian Shilling (TZS), US Dollars widely accepted",
    language: ["Swahili (official)", "English", "Local tribal languages"],
    attractions: [
      {
        name: "Serengeti National Park",
        description: "Witness the Great Migration and endless plains teeming with wildlife",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Mount Kilimanjaro",
        description: "Climb Africa's highest peak and stand on the Roof of Africa",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Ngorongoro Crater",
        description: "Explore the world's largest intact volcanic caldera",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    title: "Zanzibar - The Spice Island Paradise",
    description: "Pristine beaches, spice tours, and rich cultural heritage",
    longDescription:
      "Zanzibar, the legendary Spice Island, is a tropical paradise where pristine white sand beaches meet crystal-clear turquoise waters. This UNESCO World Heritage site combines rich Swahili culture, historic Stone Town, aromatic spice plantations, and some of the world's most beautiful beaches. It's the perfect destination for relaxation, cultural exploration, and romantic getaways.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    highlights: [
      "Stone Town - UNESCO World Heritage Site",
      "Spice Tours - Cloves, Cinnamon, Cardamom",
      "Pristine Beaches - Nungwi, Kendwa, Paje",
      "Jozani Forest - Red Colobus Monkeys",
      "Dhow Sailing - Traditional Arab Boats",
      "Prison Island - Giant Tortoises",
    ],
    bestTime: "June - September, December - February",
    duration: "3-7 days",
    difficulty: "Easy",
    price: "From $1,200",
    activities: [
      "Beach relaxation",
      "Spice tours",
      "Snorkeling & diving",
      "Cultural tours",
      "Dhow sailing",
      "Kite surfing",
    ],
    accommodation: ["Beach resorts", "Boutique hotels", "Stone Town guesthouses", "Luxury villas", "Budget hostels"],
    transportation: "Taxis, dalla-dallas (local buses), rental cars, boats",
    climate: "Tropical with high humidity. Temperatures 24-32°C year-round",
    currency: "Tanzanian Shilling (TZS), US Dollars widely accepted",
    language: ["Swahili (official)", "English", "Arabic"],
    attractions: [
      {
        name: "Stone Town",
        description: "Historic center with narrow alleys, markets, and Swahili architecture",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Spice Plantations",
        description: "Tour aromatic spice farms and learn about Zanzibar's spice trade history",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Nungwi Beach",
        description: "Pristine white sand beach perfect for swimming and sunset views",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    slug: "kenya",
    name: "Kenya",
    title: "Kenya - Where Safari Dreams Come True",
    description: "Maasai Mara, coastal beauty, and diverse landscapes",
    longDescription:
      "Kenya is the birthplace of safari, offering some of Africa's most iconic wildlife experiences. From the legendary Maasai Mara where the Great Migration crosses the Mara River, to the snow-capped peaks of Mount Kenya, and the pristine beaches of the Indian Ocean coast, Kenya provides incredible diversity in landscapes, wildlife, and cultural experiences.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    highlights: [
      "Maasai Mara - Great Migration River Crossings",
      "Amboseli National Park - Elephants & Kilimanjaro Views",
      "Lake Nakuru - Flamingo Spectacle",
      "Tsavo National Parks - Red Elephants",
      "Mount Kenya - Second Highest Peak in Africa",
      "Coastal Beaches - Diani, Malindi, Watamu",
    ],
    bestTime: "July - October (Migration), January - March (Calving)",
    duration: "4-10 days",
    difficulty: "Easy to Moderate",
    price: "From $2,200",
    activities: [
      "Game drives",
      "Great Migration viewing",
      "Mountain climbing",
      "Beach activities",
      "Cultural visits",
      "Bird watching",
    ],
    accommodation: ["Safari lodges", "Tented camps", "Beach resorts", "Mountain lodges", "Budget campsites"],
    transportation: "4WD safari vehicles, domestic flights, matatus (local transport)",
    climate: "Varied from tropical coast to temperate highlands. Generally 20-28°C",
    currency: "Kenyan Shilling (KES), US Dollars accepted in tourist areas",
    language: ["English (official)", "Swahili (official)", "Local tribal languages"],
    attractions: [
      {
        name: "Maasai Mara National Reserve",
        description: "World-famous for the Great Migration and Big Five wildlife",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Amboseli National Park",
        description: "Best views of Mount Kilimanjaro and large elephant herds",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Lake Nakuru National Park",
        description: "Spectacular flamingo populations and rhino sanctuary",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
]

export const tours: Tour[] = [
  {
    slug: "wildlife-safari",
    name: "Wildlife Safari",
    title: "Classic Wildlife Safari - Big Five Adventure",
    description: "Experience the Big Five and incredible wildlife in their natural habitat",
    longDescription:
      "Our Classic Wildlife Safari takes you on an unforgettable journey through East Africa's most renowned national parks and game reserves. Witness the Big Five - lion, leopard, elephant, buffalo, and rhino - in their natural habitat while experiencing the raw beauty of the African wilderness. This comprehensive safari combines the best wildlife viewing opportunities with comfortable accommodations and expert guiding.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    duration: "5-14 days",
    difficulty: "Easy",
    groupSize: "2-8 people",
    price: "From $2,500",
    category: "Wildlife",
    destinations: ["Tanzania", "Kenya"],
    includes: [
      "Professional safari guide",
      "4WD safari vehicle",
      "All park fees and permits",
      "Accommodation (lodge/camp)",
      "All meals during safari",
      "Game drives",
      "Airport transfers",
      "Bottled water",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
      "Tips and gratuities",
      "Optional activities",
    ],
    highlights: [
      "Big Five wildlife viewing",
      "Great Migration (seasonal)",
      "Professional photography opportunities",
      "Luxury safari lodges",
      "Expert local guides",
      "Cultural village visits",
    ],
    bestTime: "June - October, December - March",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Arusha",
        description: "Arrive at Kilimanjaro Airport and transfer to Arusha for briefing",
        activities: ["Airport pickup", "Hotel check-in", "Safari briefing", "Equipment check"],
        accommodation: "Arusha Safari Lodge",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description: "Full day game drive in Tarangire, famous for elephants and baobab trees",
        activities: ["Morning game drive", "Picnic lunch", "Afternoon game drive", "Wildlife photography"],
        accommodation: "Tarangire Safari Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3,
        title: "Serengeti National Park",
        description: "Travel to Serengeti for afternoon game drive",
        activities: ["Travel to Serengeti", "Afternoon game drive", "Sunset viewing"],
        accommodation: "Serengeti Safari Camp",
        meals: "Breakfast, Lunch, Dinner",
      },
    ],
  },
  {
    slug: "mountain-climbing",
    name: "Mountain Climbing",
    title: "Kilimanjaro Climbing - Roof of Africa",
    description: "Conquer Africa's highest peaks with experienced guides",
    longDescription:
      "Challenge yourself with the ultimate African adventure - climbing Mount Kilimanjaro, the highest free-standing mountain in the world. Our experienced guides will lead you through diverse climate zones, from tropical rainforest to arctic summit, as you make your way to Uhuru Peak at 5,895 meters. This life-changing experience combines physical challenge with breathtaking scenery.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    duration: "6-10 days",
    difficulty: "Challenging",
    groupSize: "4-12 people",
    price: "From $2,200",
    category: "Adventure",
    destinations: ["Tanzania"],
    includes: [
      "Professional mountain guides",
      "Porters and cook",
      "All camping equipment",
      "Park fees and permits",
      "All meals on mountain",
      "Airport transfers",
      "Pre-climb briefing",
      "Certificate of achievement",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal climbing gear",
      "Tips for guides/porters",
      "Hotel accommodation",
      "Personal expenses",
    ],
    highlights: [
      "Uhuru Peak - 5,895m summit",
      "Multiple route options",
      "Professional mountain guides",
      "All equipment provided",
      "Small group sizes",
      "High success rates",
    ],
    bestTime: "January - March, June - October",
    itinerary: [
      {
        day: 1,
        title: "Machame Gate to Machame Camp",
        description: "Begin trek through rainforest to first camp",
        activities: ["Registration", "Rainforest trek", "Camp setup"],
        accommodation: "Machame Camp (3,000m)",
        meals: "Lunch, Dinner",
      },
      {
        day: 2,
        title: "Machame Camp to Shira Camp",
        description: "Trek through moorland to Shira Plateau",
        activities: ["Morning trek", "Moorland exploration", "Acclimatization"],
        accommodation: "Shira Camp (3,840m)",
        meals: "Breakfast, Lunch, Dinner",
      },
    ],
  },
  {
    slug: "beach-holidays",
    name: "Beach Holidays",
    title: "Zanzibar Beach Paradise - Tropical Getaway",
    description: "Relax on pristine beaches and enjoy tropical paradise",
    longDescription:
      "Escape to the pristine beaches of Zanzibar, where powder-white sand meets crystal-clear turquoise waters. Our beach holiday packages combine relaxation with cultural exploration, offering the perfect blend of tropical paradise and rich Swahili heritage. Enjoy world-class resorts, water sports, spice tours, and the historic charm of Stone Town.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    duration: "5-10 days",
    difficulty: "Easy",
    groupSize: "2-6 people",
    price: "From $1,200",
    category: "Beach",
    destinations: ["Zanzibar"],
    includes: [
      "Beach resort accommodation",
      "Airport transfers",
      "Daily breakfast",
      "Stone Town tour",
      "Spice tour",
      "Dhow sailing trip",
      "Snorkeling equipment",
      "Cultural experiences",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Lunch and dinner",
      "Alcoholic beverages",
      "Water sports activities",
      "Personal expenses",
    ],
    highlights: [
      "Pristine white sand beaches",
      "Crystal clear waters",
      "Stone Town UNESCO site",
      "Spice plantation tours",
      "Dhow sailing adventures",
      "Snorkeling and diving",
    ],
    bestTime: "June - September, December - February",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Stone Town",
        description: "Arrive in Zanzibar and explore historic Stone Town",
        activities: ["Airport pickup", "Stone Town tour", "Spice market visit"],
        accommodation: "Stone Town Hotel",
        meals: "Breakfast",
      },
      {
        day: 2,
        title: "Spice Tour & Beach Transfer",
        description: "Morning spice tour, then transfer to beach resort",
        activities: ["Spice plantation tour", "Beach resort check-in", "Sunset viewing"],
        accommodation: "Beach Resort",
        meals: "Breakfast",
      },
    ],
  },
  {
    slug: "cultural-tours",
    name: "Cultural Tours",
    title: "Maasai Cultural Experience - Authentic Africa",
    description: "Immerse yourself in local cultures and authentic experiences",
    longDescription:
      "Discover the rich cultural heritage of East Africa through authentic interactions with local communities. Our cultural tours provide meaningful encounters with the Maasai people, traditional villages, local markets, and age-old customs. Learn about traditional ways of life, participate in cultural ceremonies, and gain deep insights into African traditions that have been preserved for centuries.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    duration: "3-7 days",
    difficulty: "Easy",
    groupSize: "4-10 people",
    price: "From $800",
    category: "Cultural",
    destinations: ["Tanzania", "Kenya"],
    includes: [
      "Cultural guide",
      "Village visits",
      "Traditional meals",
      "Cultural performances",
      "Craft workshops",
      "Local transportation",
      "Community fees",
      "Cultural certificates",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Hotel accommodation",
      "Some meals",
      "Personal purchases",
      "Tips and gratuities",
    ],
    highlights: [
      "Maasai village visits",
      "Traditional ceremonies",
      "Local craft workshops",
      "Authentic cultural meals",
      "Traditional dancing",
      "Community projects",
    ],
    bestTime: "Year-round",
    itinerary: [
      {
        day: 1,
        title: "Maasai Village Visit",
        description: "Full day with Maasai community learning traditions",
        activities: ["Village welcome", "Traditional activities", "Craft making", "Cultural dinner"],
        accommodation: "Cultural Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
    ],
  },
  {
    slug: "luxury-safari",
    name: "Luxury Safari",
    title: "Ultra-Luxury Safari - Premium African Experience",
    description: "Ultra-luxury safari experiences with premium accommodations",
    longDescription:
      "Experience Africa in ultimate luxury with our premium safari packages. Stay in world-class lodges and camps, enjoy private game drives with expert guides, and indulge in gourmet cuisine while witnessing incredible wildlife. Our luxury safaris combine the thrill of African wildlife with five-star comfort, personalized service, and exclusive access to prime locations.",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    duration: "7-14 days",
    difficulty: "Easy",
    groupSize: "2-6 people",
    price: "From $8,000",
    category: "Luxury",
    destinations: ["Tanzania", "Kenya"],
    includes: [
      "5-star luxury lodges",
      "Private safari guides",
      "Private vehicles",
      "All meals and beverages",
      "Premium park fees",
      "Private airstrips",
      "Spa treatments",
      "Butler service",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal shopping",
      "Premium alcohols",
      "Private helicopter",
      "Extra spa treatments",
    ],
    highlights: [
      "5-star luxury accommodations",
      "Private safari guides",
      "Exclusive game viewing",
      "Gourmet dining",
      "Spa and wellness",
      "Private airstrips",
    ],
    bestTime: "Year-round",
    itinerary: [
      {
        day: 1,
        title: "Luxury Lodge Arrival",
        description: "Private transfer to luxury safari lodge",
        activities: ["Private transfer", "Lodge orientation", "Sunset game drive", "Gourmet dinner"],
        accommodation: "Luxury Safari Lodge",
        meals: "All meals included",
      },
    ],
  },
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug)
}

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug)
}

export function getRelatedTours(category: string, currentSlug: string): Tour[] {
  return tours.filter((tour) => tour.category === category && tour.slug !== currentSlug).slice(0, 3)
}

export function getRelatedDestinations(currentSlug: string): Destination[] {
  return destinations.filter((destination) => destination.slug !== currentSlug).slice(0, 2)
}
