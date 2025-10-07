"use client"

import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function BlogHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wide uppercase text-primary">
              Latest Insights
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Blogs, Events & News
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest insights on global education, university partnerships, 
            and recruitment opportunities from THE OFFICIALS.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground">Featured Article</h3>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Education
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>THE OFFICIALS</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The Future of International Education: Trends and Opportunities
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Discover the latest trends shaping international education and how universities 
                are adapting to meet the evolving needs of global students.
              </p>
              <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                Read More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}