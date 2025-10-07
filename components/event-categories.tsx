"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "All Events", count: 24 },
  { id: "academic", name: "Academic", count: 8 },
  { id: "career", name: "Career Development", count: 6 },
  { id: "networking", name: "Networking", count: 5 },
  { id: "cultural", name: "Cultural", count: 3 },
  { id: "sports", name: "Sports & Recreation", count: 2 },
]

export function EventCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Events by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover events that match your interests and help you grow both academically and professionally.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full px-6 py-2 h-auto"
            >
              {category.name}
              <Badge 
                variant="secondary" 
                className="ml-2 bg-gray-200 text-gray-700"
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500">
            Showing {categories.find(cat => cat.id === activeCategory)?.count} events in{" "}
            <span className="font-semibold text-gray-900">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
