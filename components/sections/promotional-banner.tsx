import { Button } from "@/components/ui/button"

interface PromotionalBannerProps {
  title?: string
  description?: string
  buttonText?: string
  promoCode?: string
  discount?: string
}

export default function PromotionalBanner({
  title = "🎵 Limited Time Offer",
  description = "Get 25% off on all percussion instruments this month!",
  buttonText = "Shop Sale Items",
  promoCode = "RHYTHM25",
  discount = "25%",
}: PromotionalBannerProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl mb-6 opacity-90">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
              {buttonText}
            </Button>
            <span className="text-lg font-semibold">
              Use code: <span className="bg-white/20 px-3 py-1 rounded">{promoCode}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
