"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, MapPin, Users, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DestinationsShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const destinations = [
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
      universities: "35+",
      students: "12,000+",
      highlights: ["World-class education", "Rich cultural heritage", "Global recognition", "Research excellence"],
      description:
        "Home to some of the world's oldest and most prestigious universities, offering unparalleled academic excellence.",
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      image: "https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg",
      universities: "25+",
      students: "8,500+",
      highlights: ["Multicultural society", "High quality of life", "Post-study work options", "Affordable education"],
      description:
        "Known for its welcoming environment and high-quality education system with excellent post-graduation opportunities.",
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      image: "https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg",
      universities: "20+",
      students: "6,200+",
      highlights: ["Innovation hub", "Beautiful landscapes", "Strong economy", "Work-study balance"],
      description:
        "A leading destination for international students with world-renowned universities and vibrant student life.",
    },
    {
      country: "United States",
      flag: "🇺🇸",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
      universities: "15+",
      students: "4,800+",
      highlights: ["Ivy League institutions", "Research opportunities", "Diverse programs", "Career prospects"],
      description: "The global leader in higher education with unmatched research facilities and career opportunities.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Study Destinations
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Connect with top universities across the globe and help students achieve their educational goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`group bg-card rounded-lg overflow-hidden border transition-all duration-500 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md">
                    <span className="text-xl">{destination.flag}</span>
                    <span className="font-semibold text-sm">{destination.country}</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <GraduationCap className="w-3.5 h-3.5 text-foreground/70" />
                      <span className="text-xs text-muted-foreground">Universities</span>
                    </div>
                    <div className="text-lg font-bold">{destination.universities}</div>
                  </div>
                  <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Users className="w-3.5 h-3.5 text-foreground/70" />
                      <span className="text-xs text-muted-foreground">Students</span>
                    </div>
                    <div className="text-lg font-bold">{destination.students}</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{destination.description}</p>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  {destination.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-foreground rounded-full" />
                      <span className="text-xs text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/destinations/${destination.country.toLowerCase().replace(" ", "-")}`}>
                  <Button variant="outline" className="w-full group/btn">
                    <MapPin className="w-4 h-4 mr-2" />
                    Explore {destination.country}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <Link href="/destinations">
            <Button size="lg" className="gap-2">
              View All Destinations
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
