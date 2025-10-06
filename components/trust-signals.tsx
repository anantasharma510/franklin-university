"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Shield, Award, CircleCheck as CheckCircle } from "lucide-react"

export function TrustSignals() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const partnerLogos = [
    { name: "BPP University", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "bpp.com/about-bpp/bpp-university" },
    { name: "University of the West of Scotland", logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "uwslondon.ac.uk" },
    { name: "University of Roehampton", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "roehampton.ac.uk" },
    { name: "University of East London", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "uel.ac.uk" },
    { name: "University College Birmingham", logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "ucb.ac.uk" },
    { name: "Ulster University", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "ulster.ac.uk" },
    { name: "Northumbria University", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "northumbria.ac.uk" },
    { name: "Ravensbourne University London", logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "ravensbourne.ac.uk" },
    { name: "University for the Creative Arts", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "uca.ac.uk" },
    { name: "Buckinghamshire New University", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "bucks.ac.uk" },
    { name: "Coventry University", logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "coventry.ac.uk" },
    { name: "University of Sunderland", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "sunderland.ac.uk" },
    { name: "University of West London", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "uwl.ac.uk" },
    { name: "Canterbury Christ Church University", logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "canterbury.ac.uk" },
    { name: "University of Chester", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "chester.ac.uk" },
    { name: "University of Wolverhampton", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "wlv.ac.uk" },
    { name: "UWE Bristol", logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "uwe.ac.uk" },
    { name: "The University of Law", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "law.ac.uk" },
    { name: "University of Greenwich", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "gre.ac.uk" },
    { name: "London Metropolitan University", logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "londonmet.ac.uk" },
    { name: "Abertay University", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "abertay.ac.uk" },
    { name: "University of Kent", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "kent.ac.uk" },
    { name: "Edinburgh Napier University", logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "napier.ac.uk" },
    { name: "De Montfort University", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "dmu.ac.uk" },
    { name: "Solent University", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "solent.ac.uk" },
    { name: "University of South Wales", logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", website: "southwales.ac.uk" },
  ]

  const firstRow = partnerLogos.slice(0, 12)
  const secondRow = partnerLogos.slice(12)

  function ScrollingRow({ logos, offset = false }: { logos: typeof partnerLogos; offset?: boolean }) {
    const duplicatedLogos = [...logos, ...logos, ...logos]

    return (
      <div className="relative py-6 overflow-hidden">
        <div
          className="flex gap-24 animate-scroll-left"
          style={{
            width: 'max-content',
            marginLeft: offset ? '-24rem' : '0'
          }}
        >
          {duplicatedLogos.map((partner, index) => (
            <a
              key={index}
              href={`https://${partner.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center w-[200px]"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain w-auto h-24"
              />
            </a>
          ))}
        </div>
      </div>
    )
  }

  const certifications = [
    {
      icon: Shield,
      title: "ISO 9001 Certified",
      description: "Quality Management",
    },
    {
      icon: Award,
      title: "ICEF Quality Network",
      description: "Industry Excellence",
    },
    {
      icon: CheckCircle,
      title: "British Council",
      description: "Certified Partner",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <div
            className={`inline-block mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-sm font-semibold tracking-wide uppercase text-primary">
              Our Partners
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Trusted By Leading Institutions
          </h2>
          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            Over 35+ universities, colleges, and pathway providers across the UK trust THE OFFICIALS
            for premium student recruitment and partnership services.
          </p>
        </div>

        <div
          className={`relative mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="space-y-8">
            <ScrollingRow logos={firstRow} />
            <ScrollingRow logos={secondRow} offset={true} />
          </div>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.5s" }}
        >
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl group-hover:opacity-100"></div>
                <div className="relative h-full p-8 transition-all duration-300 border bg-card border-border rounded-2xl hover:border-primary/50">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex items-center justify-center transition-transform duration-300 w-14 h-14 rounded-xl bg-primary/10 group-hover:scale-110">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-foreground">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
