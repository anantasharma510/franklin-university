import { Navigation } from "@/components/navigation"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { EventsNewsHero } from "@/components/events-news-hero"
import { EventsNewsTabs } from "@/components/events-news-tabs"
import { EventsGrid } from "@/components/events-grid"
import NewsSection from "@/components/news-section"

export default function EventsNewsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EventsNewsHero />
      <EventsNewsTabs />
      <EventsGrid />
      <NewsSection />
      <EnhancedFooter />
    </main>
  )
}
