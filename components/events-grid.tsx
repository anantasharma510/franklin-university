"use client"

import { Calendar, MapPin, Clock, Users, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const events = [
  {
    id: 1,
    title: "UK University Fair 2024",
    description: "Meet representatives from top UK universities and explore study opportunities.",
    date: "2024-03-15",
    time: "10:00 AM - 4:00 PM",
    location: "Kathmandu, Nepal",
    attendees: 500,
    type: "Education Fair",
    featured: true,
    status: "upcoming"
  },
  {
    id: 2,
    title: "Scholarship Workshop",
    description: "Learn about various scholarship opportunities and application processes.",
    date: "2024-02-28",
    time: "2:00 PM - 5:00 PM",
    location: "Online",
    attendees: 200,
    type: "Workshop",
    featured: false,
    status: "upcoming"
  },
  {
    id: 3,
    title: "Student Success Stories",
    description: "Hear from successful students who achieved their study abroad dreams.",
    date: "2024-02-20",
    time: "6:00 PM - 8:00 PM",
    location: "Kathmandu, Nepal",
    attendees: 150,
    type: "Seminar",
    featured: false,
    status: "upcoming"
  },
  {
    id: 4,
    title: "Visa Application Workshop",
    description: "Get expert guidance on UK student visa application process.",
    date: "2024-02-10",
    time: "3:00 PM - 6:00 PM",
    location: "Online",
    attendees: 100,
    type: "Workshop",
    featured: false,
    status: "upcoming"
  },
  {
    id: 5,
    title: "University Application Masterclass",
    description: "Learn how to write compelling personal statements and applications.",
    date: "2024-01-25",
    time: "2:00 PM - 5:00 PM",
    location: "Kathmandu, Nepal",
    attendees: 80,
    type: "Masterclass",
    featured: false,
    status: "upcoming"
  },
  {
    id: 6,
    title: "IELTS Preparation Session",
    description: "Free IELTS preparation tips and strategies from certified trainers.",
    date: "2024-01-18",
    time: "4:00 PM - 6:00 PM",
    location: "Online",
    attendees: 300,
    type: "Training",
    featured: false,
    status: "upcoming"
  }
]

export function EventsGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our events to learn more about study opportunities and connect with university representatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-border ${
                event.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/10 text-primary"
                  >
                    {event.type}
                  </Badge>
                  {event.featured && (
                    <Badge variant="default" className="bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-primary/90 transition-all duration-300"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Events
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
