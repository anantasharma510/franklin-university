"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background pointer-events-none" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative w-full py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 lg:gap-20">
            {/* Left Content */}
            <div className="flex gap-6 flex-col opacity-0 animate-fade-in-up">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/20">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  We&apos;re live!
                </Badge>
              </div>

              <div className="flex gap-3 flex-col">
                <h1 className="text-5xl md:text-6xl lg:text-7xl max-w-2xl tracking-tight text-left font-bold leading-[1.1]">
                  Let&apos;s Work Together
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-2xl tracking-tight text-left font-bold leading-[1.1]">
                  And <span className="text-primary">Grow Together</span>
                </h2>
                <p className="text-lg md:text-xl leading-relaxed tracking-normal text-muted-foreground max-w-xl text-left mt-2">
                  Premium B2B student recruitment platform connecting universities with trusted agents worldwide for
                  educational excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                    Jump on a call <PhoneCall className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/partner">
                  <Button size="lg" className="gap-2 w-full sm:w-auto" variant="outline">
                    Partner With Us <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Content - Image with Overlay Stats */}
            <div className="relative opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                {/* Image */}
                <div
                  className="bg-muted aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>


              </div>

              {/* Decorative Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
