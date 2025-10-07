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
            <div className="flex justify-center gap-8 max-w-2xl mx-auto">
              {exclusivePartners.map((partner, i) => (
                <a
                  key={`${partner.name}-${i}`}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/5 rounded-lg h-24 flex items-center justify-center border-2 border-accent/50 shadow-[0_0_15px_rgba(15,70%,50%,0.2)] p-4 w-48 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-accent/70"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain w-auto transition-opacity max-h-16 opacity-70 hover:opacity-100"
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
                  { name: "LSE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/London_School_of_Economics_logo.svg/1200px-London_School_of_Economics_logo.svg.png" },
                  { name: "King's College", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/King%27s_College_London_logo.svg/1200px-King%27s_College_London_logo.svg.png" },
                  { name: "University of Edinburgh", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/University_of_Edinburgh_logo.svg/1200px-University_of_Edinburgh_logo.svg.png" },
                  { name: "University of Manchester", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/University_of_Manchester_logo.svg/1200px-University_of_Manchester_logo.svg.png" },
                  { name: "University of Bristol", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/University_of_Bristol_logo.svg/1200px-University_of_Bristol_logo.svg.png" },
                  { name: "University of Warwick", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/University_of_Warwick_logo.svg/1200px-University_of_Warwick_logo.svg.png" },
                  { name: "University of Glasgow", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/University_of_Glasgow_logo.svg/1200px-University_of_Glasgow_logo.svg.png" },
                  { name: "University of Birmingham", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/University_of_Birmingham_logo.svg/1200px-University_of_Birmingham_logo.svg.png" },
                  { name: "University of Leeds", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/University_of_Leeds_logo.svg/1200px-University_of_Leeds_logo.svg.png" },
                  { name: "University of Sheffield", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/University_of_Sheffield_logo.svg/1200px-University_of_Sheffield_logo.svg.png" },
                  { name: "University of Liverpool", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/University_of_Liverpool_logo.svg/1200px-University_of_Liverpool_logo.svg.png" },
                  { name: "University of Nottingham", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/University_of_Nottingham_logo.svg/1200px-University_of_Nottingham_logo.svg.png" }
                ].map((partner, i) => (
                  <div
                    key={i}
                    className="bg-background/5 rounded-lg h-20 min-w-[160px] flex items-center justify-center border border-border p-3"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="object-contain w-auto transition-opacity max-h-12 opacity-60 hover:opacity-90"
                    />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  { name: "LSE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/London_School_of_Economics_logo.svg/1200px-London_School_of_Economics_logo.svg.png" },
                  { name: "King's College", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/King%27s_College_London_logo.svg/1200px-King%27s_College_London_logo.svg.png" },
                  { name: "University of Edinburgh", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/University_of_Edinburgh_logo.svg/1200px-University_of_Edinburgh_logo.svg.png" },
                  { name: "University of Manchester", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/University_of_Manchester_logo.svg/1200px-University_of_Manchester_logo.svg.png" },
                  { name: "University of Bristol", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/University_of_Bristol_logo.svg/1200px-University_of_Bristol_logo.svg.png" },
                  { name: "University of Warwick", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/University_of_Warwick_logo.svg/1200px-University_of_Warwick_logo.svg.png" },
                  { name: "University of Glasgow", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/University_of_Glasgow_logo.svg/1200px-University_of_Glasgow_logo.svg.png" },
                  { name: "University of Birmingham", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/University_of_Birmingham_logo.svg/1200px-University_of_Birmingham_logo.svg.png" },
                  { name: "University of Leeds", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/University_of_Leeds_logo.svg/1200px-University_of_Leeds_logo.svg.png" },
                  { name: "University of Sheffield", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/University_of_Sheffield_logo.svg/1200px-University_of_Sheffield_logo.svg.png" },
                  { name: "University of Liverpool", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/University_of_Liverpool_logo.svg/1200px-University_of_Liverpool_logo.svg.png" },
                  { name: "University of Nottingham", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/University_of_Nottingham_logo.svg/1200px-University_of_Nottingham_logo.svg.png" }
                ].map((partner, i) => (
                  <div
                    key={`dup-${i}`}
                    className="bg-background/5 rounded-lg h-20 min-w-[160px] flex items-center justify-center border border-border p-3"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="object-contain w-auto transition-opacity max-h-12 opacity-60 hover:opacity-90"
                    />
                  </div>
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