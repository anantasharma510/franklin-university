import { Navigation } from "@/components/navigation"
import { PartnerBenefits } from "@/components/partner-benefits"
import { PartnerForm } from "@/components/partner-form"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { ShuffleHeroDemo } from "@/components/shuffle-hero-demo"

export default function PartnerPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Shuffle Hero Section */}
      <ShuffleHeroDemo />

      <PartnerBenefits />
      <PartnerForm />
      <EnhancedFooter />
    </main>
  )
}
