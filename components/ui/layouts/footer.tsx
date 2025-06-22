import { Music, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

interface FooterLink {
  href: string
  label: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  companyName?: string
  description?: string
  sections?: FooterSection[]
  contactInfo?: {
    phone: string
    email: string
    address: string
  }
}

const defaultSections: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { href: "#", label: "All Instruments" },
      { href: "#", label: "New Arrivals" },
      { href: "#", label: "Sale Items" },
      { href: "#", label: "Gift Cards" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { href: "#", label: "Shipping Info" },
      { href: "#", label: "Returns" },
      { href: "#", label: "Size Guide" },
      { href: "#", label: "FAQ" },
    ],
  },
]

export default function Footer({
  companyName = "RhythmCraft",
  description = "Your trusted partner for premium musical instruments. Inspiring musicians since 2010.",
  sections = defaultSections,
  contactInfo = {
    phone: "+1 (555) 123-4567",
    email: "hello@rhythmcraft.com",
    address: "123 Music Street, NY 10001",
  },
}: FooterProps) {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold">{companyName}</span>
            </div>
            <p className="text-gray-400">{description}</p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-orange-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="hover:text-orange-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-600" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-600" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-600" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
