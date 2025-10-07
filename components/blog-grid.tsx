"use client"

import { Calendar, Clock, User, ArrowRight, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "UK University Rankings 2024: What's New",
    excerpt: "Discover the latest university rankings and what they mean for international students.",
    category: "Education",
    author: "THE OFFICIALS",
    readTime: "4 min read",
    publishDate: "2024-01-15",
    views: 1250,
    featured: true
  },
  {
    id: 2,
    title: "Student Visa Updates: Everything You Need to Know",
    excerpt: "Latest updates on UK student visa requirements and application processes.",
    category: "University News",
    author: "THE OFFICIALS",
    readTime: "6 min read",
    publishDate: "2024-01-12",
    views: 980,
    featured: false
  },
  {
    id: 3,
    title: "Success Story: From Nepal to Oxford",
    excerpt: "How our student achieved their dream of studying at Oxford University.",
    category: "Student Success",
    author: "THE OFFICIALS",
    readTime: "5 min read",
    publishDate: "2024-01-10",
    views: 2100,
    featured: false
  },
  {
    id: 4,
    title: "New Partnership with University of Manchester",
    excerpt: "We're excited to announce our new partnership with the University of Manchester.",
    category: "Partnerships",
    author: "THE OFFICIALS",
    readTime: "3 min read",
    publishDate: "2024-01-08",
    views: 750,
    featured: false
  },
  {
    id: 5,
    title: "International Education Fair 2024",
    excerpt: "Join us at the upcoming education fair to meet university representatives.",
    category: "Events",
    author: "THE OFFICIALS",
    readTime: "4 min read",
    publishDate: "2024-01-05",
    views: 1200,
    featured: false
  },
  {
    id: 6,
    title: "Scholarship Opportunities for 2024",
    excerpt: "Explore various scholarship opportunities available for international students.",
    category: "Education",
    author: "THE OFFICIALS",
    readTime: "7 min read",
    publishDate: "2024-01-03",
    views: 1800,
    featured: false
  }
]

export function BlogGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Latest Articles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest insights, news, and updates from the world of international education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-border ${
                post.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-12 h-12 text-primary mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-foreground">Article Preview</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {post.category}
                  </Badge>
                  {post.featured && (
                    <Badge variant="default" className="bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{post.views}</span>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Load More Articles
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}