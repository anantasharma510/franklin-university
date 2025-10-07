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
    { name: "University of the West of Scotland (UWS)", logo: "/placeholder-logo.png", website: "https://www.uwslondon.ac.uk" },
    { name: "University of Roehampton", logo: "/3- University of Roehampton (1).png", website: "https://www.roehampton.ac.uk" },
    { name: "University of East London", logo: "/4 - University of East London.jpeg", website: "https://www.uel.ac.uk" },
    { name: "University College Birmingham (UCB)", logo: "/5 - University College Birmingham (UCB).jpg", website: "https://www.ucb.ac.uk" },
    { name: "Ulster University", logo: "/6-Ulster University.png", website: "https://www.ulster.ac.uk" },
    { name: "Northumbria University", logo: "/7- Northumbria University.png", website: "https://www.northumbria.ac.uk" },
    { name: "Ravensbourne University London", logo: "/8-Ravensbourne University London.png", website: "https://www.ravensbourne.ac.uk" },
    { name: "University for the Creative Arts (UCA)", logo: "/9- University for the Creative Arts (UCA).png", website: "https://www.uca.ac.uk" },
    { name: "Buckinghamshire New University (BNU)", logo: "/10- Buckinghamshire New University (BNU).png", website: "https://www.bucks.ac.uk" },
    { name: "Coventry University", logo: "/placeholder-logo.png", website: "https://www.coventry.ac.uk" },
    { name: "University of Sunderland", logo: "/placeholder-logo.png", website: "https://www.sunderland.ac.uk" },
    { name: "University of West London", logo: "/westlondon.png", website: "https://www.uwl.ac.uk" },
    { name: "Canterbury Christ Church University", logo: "/14 - Canterbury Christ Church University.png", website: "https://www.canterbury.ac.uk" },
    { name: "University of Chester", logo: "/15 -University of Chester.png", website: "https://www.chester.ac.uk" },
    { name: "Regent College London", logo: "/16- Regent College London.jpg", website: "https://www.regentcollege.london" },
    { name: "University of Wolverhampton", logo: "/17- University of Wolverhampton.png", website: "https://www.wlv.ac.uk" },
    { name: "UWE Bristol", logo: "/18- UWE Bristol.jpeg", website: "https://www.uwe.ac.uk" },
    { name: "The University of Law", logo: "/19- The University of Law.jpeg", website: "https://www.law.ac.uk" },
    { name: "University of Greenwich", logo: "/20- University of Greenwich.png", website: "https://www.gre.ac.uk" },
    { name: "London Metropolitan University", logo: "/21- London Metropolitan University.png", website: "https://www.londonmet.ac.uk" },
    { name: "Richmond American University London", logo: "/22 - Richmond American University London.jpg", website: "https://www.richmond.ac.uk" },
    { name: "Abertay University", logo: "/23- Abertay University.png", website: "https://www.abertay.ac.uk" },
    { name: "University of Kent", logo: "/24- University of Kent.jpg", website: "https://www.kent.ac.uk" },
    { name: "Edinburgh Napier University", logo: "/25- Edinburgh Napier University.jpeg", website: "https://www.napier.ac.uk" },
    { name: "De Montfort University (DMU)", logo: "/26 - De Montfort University (DMU).png", website: "https://www.dmu.ac.uk" },
    { name: "Solent University", logo: "/27 - Solent University.png", website: "https://www.solent.ac.uk" },
    { name: "University of South Wales", logo: "/28 - University of South Wales.png", website: "https://www.southwales.ac.uk" },
  ]

  const firstRow = partnerLogos.slice(0, 14)
  const secondRow = partnerLogos.slice(14)

  function ScrollingRow({ logos, offset = false }: { logos: typeof partnerLogos; offset?: boolean }) {
    const [isPaused, setIsPaused] = useState(false)
    const duplicatedLogos = [...logos, ...logos, ...logos]

    const handleLogoClick = (website: string) => {
      // Stop animation by setting paused state
      setIsPaused(true)
      // Navigate to the university website
      window.open(website, '_blank', 'noopener,noreferrer')
      
      // Resume animation after 3 seconds
      setTimeout(() => {
        setIsPaused(false)
      }, 3000)
    }

    return (
      <div className="relative py-6 overflow-hidden">
        {isPaused && (
          <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground text-xs px-3 py-1 rounded-full z-20 animate-pulse">
            Animation paused - Click any logo to visit website
          </div>
        )}
        <div
          className={`flex gap-24 ${isPaused ? 'animate-none' : 'animate-scroll-left'}`}
          style={{
            width: 'max-content',
            marginLeft: offset ? '-24rem' : '0'
          }}
        >
          {duplicatedLogos.map((partner, index) => (
            <div
              key={index}
              onClick={() => handleLogoClick(partner.website)}
              className="flex-shrink-0 flex items-center justify-center w-[200px] cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-90 group relative"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain w-auto h-24 relative z-10 transition-all duration-300 group-hover:brightness-110"
              />
            </div>
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
            Over 28+ universities, colleges, and pathway providers across the UK trust THE OFFICIALS
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
