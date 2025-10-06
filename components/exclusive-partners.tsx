"use client"

import React from 'react';
import Image from 'next/image';

// --- Data for University Partners ---
// We store partner info in an array to keep the component clean and scalable.
const partners = [
  {
    name: 'BPP University',
    logoUrl: 'https://www.bpp.com/images/logo-bpp.svg', // Official BPP logo
    websiteUrl: 'https://www.bpp.com/about-bpp/bpp-university',
  },
  {
    name: 'University of West London',
    logoUrl: 'https://www.uwl.ac.uk/themes/uwl/assets/images/UWL-logo.svg', // Official UWL logo
    websiteUrl: 'https://www.uwl.ac.uk/',
  },
  {
    name: 'University of Roehampton',
    logoUrl: 'https://www.roehampton.ac.uk/globalassets/images/branding/roehampton-logo.svg', // Updated official Roehampton logo
    websiteUrl: 'https://www.roehampton.ac.uk/',
  },
];

// --- Main Component ---
export const ExclusivePartners = () => {
  return (
    <section className="px-5 py-16 text-center bg-muted/30">
      <h2 className="mb-12 text-4xl font-semibold text-foreground">
        Our Exclusive University Partners
      </h2>
      <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <div 
            key={partner.name}
            className="flex flex-col items-center justify-between p-10 transition-all duration-300 border rounded-lg shadow-sm bg-card hover:-translate-y-2 hover:shadow-lg border-border/50"
          >
            <div className="flex items-center h-20 mb-6">
              <Image 
                src={partner.logoUrl} 
                alt={`${partner.name} logo`}
                width={176}
                height={60}
                className="object-contain max-w-44 max-h-15"
                onError={(e) => {
                  // Fallback for broken logo URLs
                  e.currentTarget.src = '/placeholder-logo.svg';
                }}
              />
            </div>
            <h3 className="my-5 text-xl font-medium text-card-foreground">
              {partner.name}
            </h3>
            <a 
              href={partner.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 font-semibold transition-all duration-300 rounded-md shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
