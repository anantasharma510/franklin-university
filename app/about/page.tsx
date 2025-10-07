import { Navigation } from "@/components/navigation"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { TimelineDemo } from "@/components/timeline-demo"
import { WorldMapDemo } from "@/components/world-map-demo"
import { DraggableCardsDemo } from "@/components/draggable-cards-demo"
import { About3Demo } from "@/components/about-3-demo"
import { AboutHero } from "@/components/about-hero"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Enhanced About Hero Section */}
      <AboutHero />

      {/* Timeline */}
      <section className="py-10">
        <TimelineDemo />
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <WorldMapDemo />
      </section>

      {/* Team & Offices */}
      <DraggableCardsDemo />

      {/* About3 Section */}
      <About3Demo />

      <EnhancedFooter />
    </main>
  )
}
