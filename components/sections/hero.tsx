
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  heroImage?: string
  badgeText?: string
  rating?: number
  reviewCount?: number
}

export default function Hero({
  title = "Discover Your",
  subtitle = "Perfect Sound",
  description = "From traditional percussion to modern strings, find premium instruments that inspire your musical journey. Crafted for musicians, by musicians.",
  primaryButtonText = "Shop Now",
  secondaryButtonText = "View Catalog",
  heroImage = "/placeholder.svg?height=600&width=600",
  badgeText = "✨ New Arrivals Available",
  rating = 4.9,
  reviewCount = 2000,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-amber-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">{badgeText}</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {title}
                <span className="text-orange-600 block">{subtitle}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3 cursor-pointer">
                {primaryButtonText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-50 cursor-pointer"
              >
                {secondaryButtonText}
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
              src={heroImage || "/placeholder.svg"}
              alt="Musical instruments collection"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{rating}/5</span>
                <span className="text-gray-600">from {reviewCount.toLocaleString()}+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
