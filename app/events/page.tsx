import { Navigation } from "@/components/navigation"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { EventsHero } from "@/components/events-hero"
import { EventsGrid } from "@/components/events-grid"
import { EventCategories } from "@/components/event-categories"
import { PastEvents } from "@/components/past-events"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EventsHero />
      <EventCategories />
      <EventsGrid />
      <PastEvents />
      <NewsletterSignup />
      <EnhancedFooter />
    </main>
  )
}

