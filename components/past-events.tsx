"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"

const pastEvents = [
  {
    id: 1,
    title: "Global Leadership Summit 2024",
    date: "March 15, 2024",
    location: "Main Auditorium",
    attendees: 250,
    category: "Leadership",
    description: "An inspiring day of leadership development with industry experts and Franklin alumni.",
    image: "/events/leadership-summit.jpg",
    status: "completed"
  },
  {
    id: 2,
    title: "Tech Innovation Workshop",
    date: "February 28, 2024",
    location: "Computer Lab 3",
    attendees: 45,
    category: "Technology",
    description: "Hands-on workshop exploring the latest trends in artificial intelligence and machine learning.",
    image: "/events/tech-workshop.jpg",
    status: "completed"
  },
  {
    id: 3,
    title: "Cultural Diversity Festival",
    date: "February 10, 2024",
    location: "Student Center",
    attendees: 180,
    category: "Cultural",
    description: "Celebrating the rich diversity of our international student community with food, music, and performances.",
    image: "/events/cultural-festival.jpg",
    status: "completed"
  },
  {
    id: 4,
    title: "Career Fair 2024",
    date: "January 25, 2024",
    location: "Sports Complex",
    attendees: 320,
    category: "Career",
    description: "Connect with top employers and explore career opportunities across various industries.",
    image: "/events/career-fair.jpg",
    status: "completed"
  }
]

export function PastEvents() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Past Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent successful events and see what you might have missed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{event.date}</p>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {event.attendees} attendees
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Completed
                  </Badge>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Photos
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Past Events
          </Button>
        </div>
      </div>
    </section>
  )
}
