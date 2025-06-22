import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Music, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PercussionLandingPage() {
  const productCategories = [
    {
      name: "Cajon",
      description: "Versatile box drums perfect for acoustic sessions",
      image: "/placeholder.svg?height=300&width=400",
      price: "From $89",
    },
    {
      name: "Darbuka",
      description: "Traditional Middle Eastern goblet drums",
      image: "/placeholder.svg?height=300&width=400",
      price: "From $65",
    },
    {
      name: "Guitars",
      description: "Acoustic and electric guitars for every style",
      image: "/placeholder.svg?height=300&width=400",
      price: "From $199",
    },
    {
      name: "Violins",
      description: "Professional and student violins with rich tone",
      image: "/placeholder.svg?height=300&width=400",
      price: "From $149",
    },
    {
      name: "Melodicas",
      description: "Portable wind instruments with keyboard layout",
      image: "/placeholder.svg?height=300&width=400",
      price: "From $45",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Professional Percussionist",
      content:
        "The cajon I bought here has incredible sound quality. It's become my go-to instrument for studio sessions.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Ahmed Hassan",
      role: "World Music Enthusiast",
      content: "Amazing selection of darbukas! The craftsmanship is outstanding and the customer service is top-notch.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Chen",
      role: "Music Teacher",
      content:
        "I've purchased several instruments for my students. Great quality at affordable prices. Highly recommend!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">Bera.lk</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#products" className="text-gray-700 hover:text-orange-600 transition-colors">
                Instruments
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors">
                Reviews
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </Link>
            </nav>
            <Button className="bg-orange-600 hover:bg-orange-700">Cart (0)</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">✨ New Arrivals Available</Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Discover Your
                  <span className="text-orange-600 block">Perfect Sound</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From traditional percussion to modern strings, find premium instruments that inspire your musical
                  journey. Crafted for musicians, by musicians.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-50"
                >
                  View Catalog
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Free Shipping Over $100</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Musical instruments collection"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-gray-600">from 2,000+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Explore Our Instruments</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated collection of premium instruments, each selected for exceptional quality
              and sound.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-600 text-white">{category.price}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">View Collection</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">🎵 Limited Time Offer</h2>
            <p className="text-xl mb-6 opacity-90">Get 25% off on all percussion instruments this month!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
                Shop Sale Items
              </Button>
              <span className="text-lg font-semibold">
                Use code: <span className="bg-white/20 px-3 py-1 rounded">RHYTHM25</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Musicians Say</h2>
            <p className="text-xl text-gray-600">Trusted by professionals and enthusiasts worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Music className="h-8 w-8 text-orange-600" />
                <span className="text-2xl font-bold">RhythmCraft</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for premium musical instruments. Inspiring musicians since 2010.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-600 transition-colors">
                    All Instruments
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-600 transition-colors">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-600 transition-colors">
                    Sale Items
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-600 transition-colors">
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-600 transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-600 transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-600 transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-600 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-600" />
                  <span>hello@rhythmcraft.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  <span>123 Music Street, NY 10001</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} RhythmCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
