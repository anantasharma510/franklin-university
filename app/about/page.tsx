import { Navigation } from "@/components/navigation"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { TimelineDemo } from "@/components/timeline-demo"
import { WorldMapDemo } from "@/components/world-map-demo"
import { DraggableCardsDemo } from "@/components/draggable-cards-demo"
import { About3Demo } from "@/components/about-3-demo"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* About Us Hero Section */}
      <section className="pt-24 pb-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Discover our global presence and the connections that make international education accessible worldwide
          </p>
        </div>
      </section>

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
