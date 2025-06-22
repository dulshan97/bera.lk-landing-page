"use client"

import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"
import Link from "next/link"
import type { NavigationItem } from "@/lib/types"

interface HeaderProps {
  navigationItems?: NavigationItem[]
  cartCount?: number
}

const defaultNavigation: NavigationItem[] = [
  { href: "#products", label: "Instruments" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export default function Header({ navigationItems = defaultNavigation, cartCount = 0 }: HeaderProps) {
  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">Bera.LK</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 hover:text-orange-600 transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <Button className="bg-orange-600 hover:bg-orange-700">Cart ({cartCount})</Button>
        </div>
      </div>
    </header>
  )
}
