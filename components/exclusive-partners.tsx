"use client"

import React from 'react';
import Image from 'next/image';

// --- Data for University Partners ---
// We store partner info in an array to keep the component clean and scalable.
const partners = [
  {
    name: 'BPP University',
    logoUrl: '/bpp logo.png', // Local BPP logo
    websiteUrl: 'https://www.bpp.com/about-bpp/bpp-university',
  },
  {
    name: 'University of West London',
    logoUrl: '/westlondon.png', // Local UWL logo
    websiteUrl: 'https://www.uwl.ac.uk/',
  },
 
];

// --- Main Component ---
export const ExclusivePartners = () => {
  return (
    <section className="px-5 py-16 text-center bg-muted/30">
      <h2 className="mb-12 text-4xl font-semibold text-foreground">
        Our Exclusive University Partners
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {partners.map((partner) => (
          <div 
            key={partner.name}
            className="flex flex-col items-center p-16 transition-all duration-300 border rounded-xl shadow-lg bg-card hover:-translate-y-2 hover:shadow-xl border-border/50 w-96 min-h-[28rem]"
          >
            {/* Logo Section */}
            <div className="flex items-center justify-center h-40 mb-8 w-full">
              <Image 
                src={partner.logoUrl} 
                alt={`${partner.name} logo`}
                width={280}
                height={120}
                className="object-contain max-w-64 max-h-32"
                onError={(e) => {
                  // Fallback for broken logo URLs
                  e.currentTarget.src = '/placeholder-logo.svg';
                }}
              />
            </div>
            
            {/* University Name */}
            <h3 className="mb-12 text-3xl font-bold text-card-foreground text-center leading-tight">
              {partner.name}
            </h3>
            
            {/* Visit Website Button */}
            <div className="mt-auto">
              <a 
                href={partner.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 text-xl font-bold transition-all duration-300 rounded-lg shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
