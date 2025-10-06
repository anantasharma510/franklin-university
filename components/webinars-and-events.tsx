import React from 'react';

// Define the structure for an event's data
interface EventData {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaLink: string;
  isFeatured?: boolean;
  // Properties specific to the featured card's overlay
  featuredOverlay?: {
    mainText: string;
    subText: string;
    demoText: string;
    buttonText: string;
  };
  // Properties specific to small cards' overlays
  smallOverlay?: {
    line1: string;
    line2: string;
  };
}

// Mock data based on the provided image
const eventsData: EventData[] = [
  {
    isFeatured: true,
    date: 'Saturday, 7th Oct, 2025 - 5:00 PM - 6:30 PM',
    title: 'Test Preparation for IELTS',
    description: 'Crack your IELTS in one go with 8+ Bands. A Gateway to High-Ranked Universities!',
    imageUrl: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ctaLink: '#',
    featuredOverlay: {
      mainText: 'Achieve 8+ IELTS Bands in 30 Days',
      subText: 'Gateway to High-Ranked Universities',
      demoText: 'Free Demo Class',
      buttonText: 'Enrol Now',
    },
  },
  {
    date: 'Friday, 10th Oct, 2025 - 7:30 AM - 9:00 AM',
    title: 'Test Preparation for GRE',
    description: 'Get ready to study at a Top-ranked University with 320+ Score in GRE',
    imageUrl: 'https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ctaLink: '#',
    smallOverlay: {
      line1: 'Get Ready to study at a Top-Ranked University with',
      line2: '320+ SCORE in GRE',
    },
  },
  {
    date: 'Monday, 10th Oct, 2025 - 7:30 AM - 9:00 AM',
    title: 'Test Preparation for GMAT',
    description: 'Score 690+ in GMAT. The Smart Choice for the Top Business School',
    imageUrl: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ctaLink: '#',
    smallOverlay: {
      line1: 'Score 690+ in GMAT',
      line2: 'The Smart Choice for the Top Business Schools',
    },
  },
];

// Reusable CTA Link Component
const RegisterLink = ({ href }: { href: string }) => (
  <a href={href} className="text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700">
    Register Now &gt;
  </a>
);

// Component for the Large Featured Card
const FeaturedEventCard: React.FC<{ event: EventData }> = ({ event }) => (
  <div className="flex flex-col overflow-hidden bg-white shadow-xl rounded-2xl">
    <div className="relative">
      <img className="object-cover w-full h-64" src={event.imageUrl} alt={event.title} />
      {/* Overlay content for the featured card */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white bg-gradient-to-t from-black/50 to-transparent">
        <div>
          <h3 className="text-3xl font-bold">{event.featuredOverlay?.mainText}</h3>
          <p className="text-sm">{event.featuredOverlay?.subText}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="px-4 py-2 text-sm font-bold bg-orange-600 rounded-md">
            {event.featuredOverlay?.demoText}
          </div>
          <a href="#" className="px-6 py-2 text-sm font-bold text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700">
            {event.featuredOverlay?.buttonText}
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-col flex-grow p-6">
      <p className="mb-2 text-xs font-semibold text-blue-600">{event.date}</p>
      <h3 className="mb-2 text-xl font-bold text-gray-900">{event.title}</h3>
      <p className="flex-grow mb-4 text-sm text-gray-600">{event.description}</p>
      <RegisterLink href={event.ctaLink} />
    </div>
  </div>
);

// Component for the Smaller Stacked Cards
const SmallEventCard: React.FC<{ event: EventData }> = ({ event }) => (
  <div className="flex overflow-hidden bg-white shadow-xl rounded-2xl">
    <div className="relative flex-shrink-0 w-40">
      <img className="object-cover w-full h-full" src={event.imageUrl} alt={event.title} />
      {/* Overlay content for small cards */}
      <div className="absolute inset-0 flex flex-col justify-center p-3 text-white bg-black/40">
        <p className="text-sm font-bold leading-tight text-center">{event.smallOverlay?.line1}</p>
        <p className="mt-1 text-sm font-extrabold leading-tight text-center">{event.smallOverlay?.line2}</p>
      </div>
    </div>
    <div className="flex flex-col p-5">
      <p className="mb-2 text-xs font-semibold text-blue-600">{event.date}</p>
      <h3 className="mb-2 text-base font-bold text-gray-900">{event.title}</h3>
      <p className="flex-grow mb-4 text-xs text-gray-600">{event.description}</p>
      <RegisterLink href={event.ctaLink} />
    </div>
  </div>
);

// Main Webinars & Events Component
const WebinarsAndEvents: React.FC = () => {
  const featuredEvent = eventsData.find((e) => e.isFeatured);
  const otherEvents = eventsData.filter((e) => !e.isFeatured);

  return (
    <div className="font-sans bg-white">
      {/* Header Section with curved background */}
      <div className="relative pt-16 pb-32">
        <h2 className="text-4xl font-extrabold tracking-tight text-center text-gray-800">
          Webinars & Events
        </h2>
        {/* SVG to create the curved bottom edge */}
        <div className="absolute bottom-0 left-0 w-full h-20">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full text-white">
             <path d="M0,80 C288,0,576,0,864,40 S1152,80,1440,80 L1440,81 L0,81 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Content Grid */}
      <div className="px-4 mx-auto -mt-20 max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Featured Card (Left Column) */}
          <div className="lg:col-span-3">
            {featuredEvent && <FeaturedEventCard event={featuredEvent} />}
          </div>
          
          {/* Small Cards (Right Column) */}
          <div className="flex flex-col space-y-8 lg:col-span-2">
            {otherEvents.map((event) => (
              <SmallEventCard key={event.title} event={event} />
            ))}
          </div>
        </div>
        
        {/* See More Link */}
        <div className="mt-12 text-center">
          <a href="#" className="font-semibold text-orange-600 transition-colors hover:text-orange-700">
            See More &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebinarsAndEvents;
