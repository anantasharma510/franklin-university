import { Navigation } from "@/components/navigation"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogCategories } from "@/components/blog-categories"
import { BlogGrid } from "@/components/blog-grid"
import { EventsSection } from "@/components/events-section"
import { NewsSection } from "@/components/news-section"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <EventsSection />
      <NewsSection />
      <EnhancedFooter />
    </main>
  )
}
