
import Hero from "@/components/sections/hero"
import ProductGrid from "@/components/sections/product-grid"
import PromotionalBanner from "@/components/sections/promotional-banner"
import Testimonials from "@/components/sections/testimonial"
import Footer from "@/components/ui/layouts/footer"
import { productCategories, testimonials } from "@/lib/data"
import  Header  from "@/components/ui/layouts/header"

export default function PercussionLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={0} />

      <Hero />

      <ProductGrid products={productCategories} />

      <PromotionalBanner />

      <Testimonials testimonials={testimonials} />

      <Footer />
    </div>
  )
}
