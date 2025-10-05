"use client"

import { Building, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
// Assuming ScrollAnimation is a reusable component for fade-in effects.
import { ScrollAnimation } from "./scroll-animations"

// --- Data moved outside the component for better separation of concerns ---
const solutions = [
  {
    key: "universities",
    category: "For Universities",
    icon: Building,
    // Using direct Tailwind color classes is often more maintainable than dynamic strings
    iconColor: "text-primary",
    iconBgColor: "bg-primary/10",
    borderColor: "hover:border-primary/80",
    features: [
      "Access a Vetted Global Agent Network",
      "Launch Targeted Student Recruitment Campaigns",
      "Gain Actionable Market Intelligence & Analytics",
      "Ensure Compliance & Quality Assurance",
      "Strengthen Global Brand Positioning",
    ],
    cta: {
      text: "Partner With Us",
      href: "/partner",
      variant: "default", // Corresponds to shadcn/ui Button variants
    },
  },
  {
    key: "agents",
    category: "For Agents",
    icon: Users,
    iconColor: "text-accent-foreground", // Using a more thematic color
    iconBgColor: "bg-accent",
    borderColor: "hover:border-accent",
    features: [
      "Connect with Prestigious University Partners",
      "Undergo Professional Training & Certification",
      "Utilize Ready-to-Use Marketing Materials",
      "Streamline Commission Management",
      "Leverage Our Advanced Tech Platform",
    ],
    cta: {
      text: "Join Our Network",
      href: "/partner",
      variant: "secondary", // Differentiates the button style
    },
  },
]


// --- The Redesigned Component ---
export function PlatformSolutions() {
  return (
    <section className="py-20 md:py-28 bg-gray-50/50 dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollAnimation
          animation="fade-up"
          className="max-w-3xl mx-auto text-center mb-12 md:mb-20"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            One Unified Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mt-3 mb-5">
            Solutions for Sustainable Growth
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide the technology, network, and insights to help universities
            and recruitment agents thrive in a competitive global market.
          </p>
        </ScrollAnimation>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution) => (
            <ScrollAnimation animation="fade-up" key={solution.key}>
              <div
                className={`flex flex-col h-full bg-card p-8 rounded-2xl border transition-all duration-300 ${solution.borderColor}`}
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${solution.iconBgColor}`}
                  >
                    <solution.icon className={`w-7 h-7 ${solution.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {solution.category}
                  </h3>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Pushed to the bottom */}
                <div className="mt-auto text-center">
                  <Link href={solution.cta.href}>
                    <Button
                      size="lg"
                      variant={solution.cta.variant}
                      className="w-full sm:w-auto px-10"
                    >
                      {solution.cta.text}
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

      </div>
    </section>
  )
}