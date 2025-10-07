import { Navigation } from "@/components/navigation"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { EventsNewsHero } from "@/components/events-news-hero"
import { EventsNewsTabs } from "@/components/events-news-tabs"
import { EventsGrid } from "@/components/events-grid"
import { NewsSection } from "@/components/news-section"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function EventsNewsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EventsNewsHero />
      <EventsNewsTabs />
      <EventsGrid />
      <NewsSection />
      <NewsletterSignup />
      <EnhancedFooter />
    </main>
  )
}
