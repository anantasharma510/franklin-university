import { Navigation } from "@/components/navigation"
import { NoticeBar } from "@/components/notice-bar"
import { Hero } from "@/components/hero-with-image-text-and-two-buttons"
import { TrustSignals } from "@/components/trust-signals"
import { PlatformSolutions } from "@/components/core-values"
import { DestinationsShowcase } from "@/components/destinations-showcase"
import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { FAQAccordion } from "@/components/faq-accordion"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { BentoGridGalleryDemo } from "@/components/bento-gallery-demo"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <NoticeBar />
      <Hero />
      <TrustSignals />
      <PlatformSolutions />
      <BentoGridGalleryDemo />
      <DestinationsShowcase />
      <Feature108 />
      <TestimonialsSlider />
      <FAQAccordion />
      <EnhancedFooter />
      <WhatsAppChat />
    </main>
  )
}
