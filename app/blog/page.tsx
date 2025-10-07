import { Navigation } from "@/components/navigation"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogCategories } from "@/components/blog-categories"
import { BlogGrid } from "@/components/blog-grid"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <NewsletterSignup />
      <EnhancedFooter />
    </main>
  )
}
