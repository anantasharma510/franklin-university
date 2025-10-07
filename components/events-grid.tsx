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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join our events to learn more about study opportunities and connect with university representatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-0 bg-white/90 backdrop-blur-sm ${
                event.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-primary/20 shadow-lg' : ''
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-to-r from-primary to-primary/80 text-white border-0 px-4 py-2 text-sm font-semibold"
                  >
                    {event.type}
                  </Badge>
                  {event.featured && (
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2 text-sm font-bold animate-pulse">
                      ⭐ Featured
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-base">
                  {event.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium">{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium">{event.attendees} attendees</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="gap-3 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
            View All Events
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
