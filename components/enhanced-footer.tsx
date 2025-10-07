"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Users, Globe, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

// Static data to prevent hydration issues
const exclusivePartners = [
  { name: "BPP University", logo: "/bpp logo.png", website: "https://www.bpp.com/about-bpp/bpp-university" },
  { name: "University of West London", logo: "/westlondon.png", website: "https://www.uwl.ac.uk/" }
]

export function EnhancedFooter() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribe:", email)
  }

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Part 1: Newsletter Signup */}
      <div className="border-b border-border">
        <div className="container px-4 py-12 mx-auto md:py-16">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-primary-foreground md:text-3xl text-balance">
              Stay Connected with THE OFFICIALS
            </h2>
            <p className="text-primary-foreground/80 text-pretty">
              Get exclusive insights on global education trends, university partnerships, and recruitment opportunities.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex max-w-xl gap-3 mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-primary-foreground bg-background/10 border-border placeholder:text-primary-foreground/50 focus-visible:ring-primary"
              required
            />
            <Button type="submit" className="gap-2 px-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Send className="w-4 h-4" />
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Quick Links and Offices */}
      <div className="border-b border-border">
        <div className="container px-4 py-12 mx-auto md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-12">
            <div>
              <div className="mb-4">
                <div className="text-xl font-bold text-primary-foreground">THE OFFICIALS</div>
                <div className="text-sm text-primary-foreground/60">The Official Representative</div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-primary-foreground/80">
                Your trusted partner in global education, connecting students with world-class universities.
              </p>
              <div className="flex gap-4">
                <a href="#" className="transition-colors text-primary-foreground/70 hover:text-primary" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="transition-colors text-primary-foreground/70 hover:text-primary" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="transition-colors text-primary-foreground/70 hover:text-primary" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="transition-colors text-primary-foreground/70 hover:text-primary" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="flex items-center gap-2 mb-4 text-lg font-semibold text-primary">
                <Users className="w-5 h-5 text-accent" />
                Our Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="transition-colors text-primary-foreground/80 hover:text-primary">
                    For Universities
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors text-primary-foreground/80 hover:text-primary">
                    For Agents
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors text-primary-foreground/80 hover:text-primary">
                    Technology Support
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors text-primary-foreground/80 hover:text-primary">
                    Compliance Management
                  </a>
                </li>
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h3 className="flex items-center gap-2 mb-4 text-lg font-semibold text-primary">
                <Globe className="w-5 h-5 text-accent" />
                Destinations
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="transition-colors text-primary-foreground/80 hover:text-primary">
                    United Kingdom
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors text-primary-foreground/80 hover:text-primary">
                    Canada
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors text-primary-foreground/80 hover:text-primary">
                    Australia
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors text-primary-foreground/80 hover:text-primary">
                    United States
                  </a>
                </li>
              </ul>
            </div>

            {/* Global Offices */}
            <div>
              <h3 className="flex items-center gap-2 mb-4 text-lg font-semibold text-primary">
                <MapPin className="w-5 h-5 text-accent" />
                Global Offices
              </h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-semibold text-accent">Nepal</div>
                  <div className="text-sm text-primary-foreground/80">Kathmandu, Nepal</div>
                  <div className="text-sm text-primary">+977-9805386916</div>
                </li>
                <li>
                  <div className="font-semibold text-accent">London</div>
                  <div className="text-sm text-primary-foreground/80">London, United Kingdom</div>
                </li>
                <li>
                  <div className="font-semibold text-accent">Dubai</div>
                  <div className="text-sm text-primary-foreground/80">Dubai, UAE</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Trust and Partnership Logos */}
      <div className="border-b border-border">
        <div className="container px-4 py-12 mx-auto md:py-16">
          {/* Certifications */}
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-semibold text-center text-primary">Certified & Trusted By</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { name: "British Council", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/British_Council_logo.svg/1200px-British_Council_logo.svg.png" },
                { name: "ICEF", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ICEF_logo.svg/1200px-ICEF_logo.svg.png" },
                { name: "ISO 9001", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/ISO_9001_logo.svg/1200px-ISO_9001_logo.svg.png" },
                { name: "AIRC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/AIRC_logo.svg/1200px-AIRC_logo.svg.png" }
              ].map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-24 p-4 border rounded-lg bg-background/5 border-border"
                >
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="object-contain w-auto transition-opacity max-h-16 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Exclusive Partners */}
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-semibold text-center text-primary">Our Exclusive University Partners</h3>
            <div className="flex justify-center gap-8 max-w-4xl mx-auto">
              {exclusivePartners.map((partner, i) => (
                <a
                  key={`${partner.name}-${i}`}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl h-32 flex items-center justify-center border-2 border-accent/50 shadow-[0_0_20px_rgba(15,70%,50%,0.3)] p-6 w-64 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-accent/70"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain w-auto transition-opacity max-h-20 opacity-90 hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Trusted Partners Carousel */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-center text-primary">Trusted University Partners</h3>
            <div className="relative overflow-hidden">
              <div className="flex gap-4 animate-scroll">
                {[
                  { name: "University of Roehampton", logo: "/3- University of Roehampton (1).png", website: "https://www.roehampton.ac.uk" },
                  { name: "University of East London", logo: "/4 - University of East London.jpeg", website: "https://www.uel.ac.uk" },
                  { name: "University College Birmingham (UCB)", logo: "/5 - University College Birmingham (UCB).jpg", website: "https://www.ucb.ac.uk" },
                  { name: "Ulster University", logo: "/6-Ulster University.png", website: "https://www.ulster.ac.uk" },
                  { name: "Northumbria University", logo: "/7- Northumbria University.png", website: "https://www.northumbria.ac.uk" },
                  { name: "Ravensbourne University London", logo: "/8-Ravensbourne University London.png", website: "https://www.ravensbourne.ac.uk" },
                  { name: "University for the Creative Arts (UCA)", logo: "/9- University for the Creative Arts (UCA).png", website: "https://www.uca.ac.uk" },
                  { name: "Buckinghamshire New University (BNU)", logo: "/10- Buckinghamshire New University (BNU).png", website: "https://www.bucks.ac.uk" },
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
                  { name: "University of South Wales", logo: "/28 - University of South Wales.png", website: "https://www.southwales.ac.uk" }
                ].map((partner, i) => (
                  <a
                    key={i}
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg h-20 min-w-[160px] flex items-center justify-center border border-gray-200 p-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-accent/50"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="object-contain w-auto transition-opacity max-h-12 opacity-80 hover:opacity-100"
                    />
                  </a>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  { name: "University of Roehampton", logo: "/3- University of Roehampton (1).png", website: "https://www.roehampton.ac.uk" },
                  { name: "University of East London", logo: "/4 - University of East London.jpeg", website: "https://www.uel.ac.uk" },
                  { name: "University College Birmingham (UCB)", logo: "/5 - University College Birmingham (UCB).jpg", website: "https://www.ucb.ac.uk" },
                  { name: "Ulster University", logo: "/6-Ulster University.png", website: "https://www.ulster.ac.uk" },
                  { name: "Northumbria University", logo: "/7- Northumbria University.png", website: "https://www.northumbria.ac.uk" },
                  { name: "Ravensbourne University London", logo: "/8-Ravensbourne University London.png", website: "https://www.ravensbourne.ac.uk" },
                  { name: "University for the Creative Arts (UCA)", logo: "/9- University for the Creative Arts (UCA).png", website: "https://www.uca.ac.uk" },
                  { name: "Buckinghamshire New University (BNU)", logo: "/10- Buckinghamshire New University (BNU).png", website: "https://www.bucks.ac.uk" },
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
                  { name: "University of South Wales", logo: "/28 - University of South Wales.png", website: "https://www.southwales.ac.uk" }
                ].map((partner, i) => (
                  <a
                    key={`dup-${i}`}
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg h-20 min-w-[160px] flex items-center justify-center border border-gray-200 p-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-accent/50"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="object-contain w-auto transition-opacity max-h-12 opacity-80 hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: Legal and Copyright Bar */}
      <div className="bg-muted">
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row text-muted-foreground">
            <div>© 2025 THE OFFICIALS. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Terms & Conditions
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}