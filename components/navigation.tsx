"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { AppointmentModal } from "@/components/appointment-modal";

export function Navigation() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Partner With Us",
      link: "/partner",
    },
    {
      name: "Destinations",
      link: "/destinations",
    },
    {
      name: "Blogs",
      link: "/blog",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "News",
      link: "/news",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  return (
    <>
      <div className="relative w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <CustomNavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton 
                variant="secondary"
                onClick={() => setShowAppointmentModal(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Book Consultation
              </NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <CustomNavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-foreground hover:text-primary transition-colors"
                >
                  <span className="block">{item.name}</span>
                </Link>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setShowAppointmentModal(true);
                  }}
                  variant="primary"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Book Consultation
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

      <AppointmentModal isOpen={showAppointmentModal} onClose={() => setShowAppointmentModal(false)} />
    </>
  );
}

const CustomNavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center px-2 py-1"
    >
      <div className="flex items-center hover:scale-105 transition-transform duration-200">
        <img
          src="/logo.jpg"
          alt="THE OFFICIALS Logo"
          className="h-8 w-auto object-contain"
        />
      </div>
    </Link>
  );
};
