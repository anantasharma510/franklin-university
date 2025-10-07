"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Newspaper } from "lucide-react"

const categories = [
  { name: "All", count: 24, active: true },
  { name: "Events", count: 12, active: false },
  { name: "News", count: 8, active: false },
  { name: "Workshops", count: 4, active: false }
]

export function EventsNewsTabs() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              onClick={() => setActiveCategory(category.name)}
              className={`gap-2 transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-primary text-white hover:bg-primary/90 border-0"
                  : "border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white"
              }`}
            >
              {category.name === "Events" && <Calendar className="w-4 h-4" />}
              {category.name === "News" && <Newspaper className="w-4 h-4" />}
              {category.name}
              <Badge 
                variant="secondary" 
                className={`ml-2 ${
                  activeCategory === category.name 
                    ? "bg-white/20 text-white border-0" 
                    : "bg-gray-100 text-gray-600 border-0"
                }`}
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
