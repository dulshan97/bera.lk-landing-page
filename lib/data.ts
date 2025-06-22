import { ProductCategory, Testimonial } from "../lib/types"


export const productCategories: ProductCategory[] = [
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

export const testimonials: Testimonial[] = [
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
