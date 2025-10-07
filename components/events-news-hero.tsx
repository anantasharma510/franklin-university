"use client"

import { Calendar, Newspaper, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function EventsNewsHero() {
  return (
    <section className="relative py-20 bg-white">
      <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Events & News.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest events, workshops, and news from the world of international education.
          </p>
        </div>

        {/* Featured Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Featured Event</h3>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                  Education Fair
                </Badge>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>March 15, 2024</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                UK University Fair 2024
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Meet representatives from top UK universities, explore study opportunities, 
                and get personalized guidance on your academic journey.
              </p>
              <Button className="gap-2 bg-primary hover:bg-primary/90 text-white border-0">
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
