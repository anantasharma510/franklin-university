"use client"

import { Calendar, Clock, ExternalLink, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const newsItems = [
  {
    id: 1,
    title: "New UK Student Visa Rules Announced",
    description: "The UK government has announced updated student visa rules that will benefit international students.",
    date: "2024-01-20",
    category: "Immigration",
    source: "BBC News",
    trending: true
  },
  {
    id: 2,
    title: "University of Oxford Opens New International Office",
    description: "Oxford University establishes a new office to better serve international students and partnerships.",
    date: "2024-01-18",
    category: "University News",
    source: "Oxford University",
    trending: false
  },
  {
    id: 3,
    title: "Scholarship Program for Nepali Students",
    description: "New scholarship opportunities specifically designed for students from Nepal studying in the UK.",
    date: "2024-01-15",
    category: "Scholarships",
    source: "THE OFFICIALS",
    trending: true
  },
  {
    id: 4,
    title: "UK Universities See Record International Applications",
    description: "UK universities report a significant increase in international student applications for 2024.",
    date: "2024-01-12",
    category: "Education",
    source: "The Guardian",
    trending: false
  },
  {
    id: 5,
    title: "New Partnership Agreement with University of Manchester",
    description: "THE OFFICIALS signs new partnership agreement with University of Manchester for student recruitment.",
    date: "2024-01-10",
    category: "Partnerships",
    source: "THE OFFICIALS",
    trending: false
  },
  {
    id: 6,
    title: "International Education Summit 2024",
    description: "Global education leaders gather to discuss the future of international education.",
    date: "2024-01-08",
    category: "Events",
    source: "Times Higher Education",
    trending: true
  }
]

export function NewsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Latest News
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news and developments in international education and university partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <Card 
              key={news.id} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/10 text-primary"
                  >
                    {news.category}
                  </Badge>
                  {news.trending && (
                    <div className="flex items-center gap-1 text-accent">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">Trending</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {news.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(news.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{news.source}</span>
          </div>
        </div>
        
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Read Full Article
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All News
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}