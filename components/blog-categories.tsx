"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "All", count: 24, active: true },
  { name: "Education", count: 8, active: false },
  { name: "University News", count: 6, active: false },
  { name: "Student Success", count: 5, active: false },
  { name: "Partnerships", count: 3, active: false },
  { name: "Events", count: 2, active: false }
]

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Explore by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the content that interests you most from our comprehensive collection of articles and insights.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              onClick={() => setActiveCategory(category.name)}
              className={`gap-2 transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-border hover:border-primary/50 hover:text-primary"
              }`}
            >
              {category.name}
              <Badge 
                variant="secondary" 
                className={`ml-2 ${
                  activeCategory === category.name 
                    ? "bg-primary-foreground/20 text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
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