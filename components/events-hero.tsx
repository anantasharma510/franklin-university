"use client"

import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function EventsHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wide uppercase text-primary">
              Upcoming Events
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Events & Workshops
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our exclusive events, workshops, and education fairs to connect with university representatives 
            and discover your study abroad opportunities.
          </p>
        </div>

        {/* Featured Event */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground">Featured Event</h3>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Education Fair
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>March 15, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                UK University Fair 2024
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Meet representatives from top UK universities, explore study opportunities, 
                and get personalized guidance on your academic journey.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>500+ attendees expected</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
              <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                Register Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

