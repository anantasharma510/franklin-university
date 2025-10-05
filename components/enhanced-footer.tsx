"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Award,
  Facebook,
  Globe,
  GraduationCap,
  Instagram,
  Linkedin,
  MapPin,
  Send,
  Twitter,
  Users,
} from "lucide-react"

// --- Data (Moved outside the component for clarity and performance) ---

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/about#leadership", label: "Leadership" },
  { href: "/about#values", label: "Our Values" },
  { href: "/careers", label: "Careers" },
]

const servicesLinks = [
  { href: "/partner#universities", label: "For Universities" },
  { href: "/partner#agents", label: "For Agents" },
  { href: "/services/technology", label: "Technology Support" },
  { href: "/services/compliance", label: "Compliance Management" },
]

const destinationsLinks = [
  { href: "/destinations?country=uk", label: "United Kingdom" },
  { href: "/destinations?country=canada", label: "Canada" },
  { href: "/destinations?country=australia", label: "Australia" },
  { href: "/destinations?country=usa", label: "United States" },
]

const offices = [
  {
    location: "Nepal",
    address: "Kathmandu, Nepal",
    phone: "+977-9805869216",
  },
  {
    location: "London",
    address: "London, United Kingdom",
  },
  {
    location: "Dubai",
    address: "Dubai, UAE",
  },
]

const certifications = [
  { name: "British Council", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80" },
  { name: "ICEF", logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80" },
  { name: "PIER", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80" },
  { name: "AIRC", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80" },
]

const universityLogos = [
  "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
]

const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
]

// --- Reusable Link Column Component ---
interface FooterLinkColumnProps {
  title: string
  icon: React.ElementType
  links: { href: string; label: string }[]
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ title, icon: Icon, links }) => (
  <div>
    <h4 className="flex items-center text-lg font-semibold text-foreground mb-4">
      <Icon className="w-5 h-5 mr-3 text-primary" />
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

// --- Main Footer Component ---
export function EnhancedFooter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <footer className="bg-gradient-to-br from-primary/10 via-muted/50 to-accent/10 text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Social Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/logo.jpg"
                alt="THE OFFICIALS Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Your trusted partner in global education, connecting students with world-class universities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-110"
                >
                    <social.icon className="w-6 h-6" />
                    <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <FooterLinkColumn title="Company" icon={GraduationCap} links={companyLinks} />
          <FooterLinkColumn title="Services" icon={Users} links={servicesLinks} />
          <FooterLinkColumn title="Destinations" icon={Globe} links={destinationsLinks} />
        </div>

        {/* Global Offices Section */}
        <div className="mt-16 pt-8 border-t border-border">
            <h4 className="flex items-center text-lg font-semibold text-foreground mb-6">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                Global Offices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                {offices.map((office) => (
                    <div key={office.location}>
                        <p className="font-semibold text-accent">{office.location}</p>
                        <p className="text-muted-foreground">{office.address}</p>
                        {office.phone && <p className="text-muted-foreground">{office.phone}</p>}
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Trust & Newsletter Section */}
      <div className="bg-gradient-to-r from-primary/15 via-muted/40 to-accent/15 py-12">
        <div className="container mx-auto px-4">
          {/* Certifications & Partners */}
          <div className="text-center mb-12">
            <h5 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              Certified & Trusted By
            </h5>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {certifications.map((cert) => (
                <Image
                  key={cert.name}
                  src={cert.logo}
                  alt={cert.name}
                  width={100}
                  height={35}
                  className="opacity-70 hover:opacity-100 transition-opacity rounded-lg"
                />
              ))}
            </div>
          </div>
           {/* University Partners Marquee */}
           <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-12">
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {universityLogos.map((logo, index) => (
                  <li key={index}>
                    <Image src={logo} alt={`University logo ${index + 1}`} width={100} height={30} className="opacity-60 hover:opacity-90 transition-opacity rounded-lg"/>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {universityLogos.map((logo, index) => (
                  <li key={index}>
                    <Image src={logo} alt={`University logo ${index + 1}`} width={100} height={30} className="opacity-60 hover:opacity-90 transition-opacity rounded-lg"/>
                  </li>
                ))}
              </ul>
            </div>

          {/* Newsletter */}
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-2">Stay Connected</h3>
            <p className="text-muted-foreground mb-6">
              Get exclusive insights on global education trends and opportunities.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:ring-primary focus:ring-2"
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 whitespace-nowrap"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <Award className="w-4 h-4 mr-2 animate-pulse" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 text-sm text-muted-foreground">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} THE OFFICIALS. All Rights Reserved.</p>
                <div className="flex items-center gap-x-6">
                    <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                    <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
}