'use client'

import { useState, useRef, useEffect } from 'react';
import { GraduationCap, Clock, FileText, TrendingUp, CheckCircle2, ArrowRight, Globe as Globe2 } from 'lucide-react';
import { Navigation } from "@/components/navigation";
import { EnhancedFooter } from "@/components/enhanced-footer";

const destinations = {
  uk: {
    name: 'United Kingdom',
    code: 'UK',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80',
    hero: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=1600&q=80',
    tagline: 'World-Class Education, Rich Heritage',
    description: 'Study at institutions with centuries of academic excellence',
    requirements: [
      'IELTS 6.0-7.5 depending on course level',
      'Academic transcripts with certified translations',
      'Personal statement and references',
      'Financial proof of £15,000-£40,000 per year',
      'Valid passport with minimum 6 months validity',
    ],
    process: [
      'Research universities and courses',
      'Submit UCAS or direct applications',
      'Receive conditional offer letter',
      'Meet English language requirements',
      'Apply for Student Route visa',
      'Complete biometric enrollment',
      'Receive visa decision within 3 weeks',
      'Arrange accommodation and travel',
    ],
    universities: [
      'University of Oxford',
      'University of Cambridge',
      'Imperial College London',
      'UCL',
      'LSE',
      'King\'s College',
    ],
    stats: {
      duration: '3-4 years',
      intake: 'Sep, Jan, May',
      work: '20 hrs/week',
      stay: '2 years post-study',
    },
  },
  australia: {
    name: 'Australia',
    code: 'AU',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80',
    hero: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1600&q=80',
    tagline: 'Innovation Hub, Lifestyle Excellence',
    description: 'Experience world-class education in a vibrant, multicultural environment',
    requirements: [
      'IELTS 6.0-7.0 with minimum component scores',
      'Academic transcripts and certificates',
      'Statement of purpose and CV',
      'Financial capacity of AUD 24,505 per year',
      'Overseas Student Health Cover (OSHC)',
    ],
    process: [
      'Choose institution and course',
      'Submit online application',
      'Receive Letter of Offer',
      'Accept offer and pay tuition deposit',
      'Arrange OSHC coverage',
      'Apply for Student visa (subclass 500)',
      'Health examination and biometrics',
      'Visa grant notification',
    ],
    universities: [
      'University of Melbourne',
      'ANU',
      'University of Sydney',
      'UNSW',
      'UQ',
      'Monash University',
    ],
    stats: {
      duration: '3-4 years',
      intake: 'Feb, Jul, Nov',
      work: '48 hrs/fortnight',
      stay: '2-4 years post-study',
    },
  },
  canada: {
    name: 'Canada',
    code: 'CA',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=80',
    hero: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1600&q=80',
    tagline: 'Quality Education, Global Opportunities',
    description: 'Build your future in one of the world\'s most welcoming countries',
    requirements: [
      'IELTS 6.0-7.0 or equivalent test scores',
      'WES evaluated academic credentials',
      'Statement of purpose outlining goals',
      'Proof of funds CAD 10,000-20,000',
      'Medical examination if required',
    ],
    process: [
      'Research programs and institutions',
      'Submit application with documents',
      'Receive Letter of Acceptance',
      'Pay tuition fee deposit',
      'Apply for Study Permit online',
      'Provide biometric information',
      'Medical exam (if applicable)',
      'Study permit approval',
    ],
    universities: [
      'University of Toronto',
      'UBC',
      'McGill University',
      'University of Alberta',
      'McMaster',
      'Waterloo',
    ],
    stats: {
      duration: '4 years',
      intake: 'Sep, Jan, May',
      work: '20 hrs/week',
      stay: '3 years PGWP',
    },
  },
};

export default function DestinationsPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof destinations>('uk');
  const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const activeDestination = destinations[activeTab];

  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      setTabIndicator({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={activeDestination.hero}
            alt={activeDestination.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 mx-auto text-center text-white fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full bg-white/10 backdrop-blur-md border-white/20">
            <Globe2 className="w-4 h-4" />
            <span className="text-sm font-medium">Study Abroad</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            Study Destinations
          </h1>

          <p className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed md:text-2xl text-white/90">
            Explore world-renowned education systems and transform your future with global opportunities
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(destinations).map(([key, dest]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as keyof typeof destinations)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-white text-gray-900 shadow-xl scale-105'
                    : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {dest.name}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <div className="flex items-start justify-center w-6 h-10 p-2 border-2 rounded-full border-white/30">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="relative mb-16">
            <div className="relative flex justify-center gap-2">
              {Object.entries(destinations).map(([key, dest]) => (
                <button
                  key={key}
                  ref={(el) => {
                    if (el) {
                      tabRefs.current[key] = el;
                    }
                  }}
                  onClick={() => setActiveTab(key as keyof typeof destinations)}
                  className={`px-8 py-4 font-semibold transition-all duration-300 relative ${
                    activeTab === key ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {dest.code}
                </button>
              ))}
              <div
                className="absolute bottom-0 h-1 transition-all duration-300 rounded-full bg-primary"
                style={{
                  left: `${tabIndicator.left}px`,
                  width: `${tabIndicator.width}px`,
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-16 lg:grid-cols-2 fade-in">
            <div className="relative overflow-hidden shadow-xl group destination-card rounded-3xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={activeDestination.image}
                  alt={activeDestination.name}
                  className="object-cover w-full h-full destination-image"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent image-overlay">
                <h2 className="mb-2 text-4xl font-bold">{activeDestination.name}</h2>
                <p className="text-lg text-white/90">{activeDestination.tagline}</p>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="mb-4 text-3xl font-bold text-foreground">{activeDestination.description}</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border shadow-sm bg-card border-border rounded-2xl">
                  <Clock className="w-6 h-6 mb-3 text-primary" />
                  <div className="mb-1 text-sm text-muted-foreground">Duration</div>
                  <div className="font-semibold text-foreground">{activeDestination.stats.duration}</div>
                </div>
                <div className="p-6 border shadow-sm bg-card border-border rounded-2xl">
                  <GraduationCap className="w-6 h-6 mb-3 text-primary" />
                  <div className="mb-1 text-sm text-muted-foreground">Intakes</div>
                  <div className="font-semibold text-foreground">{activeDestination.stats.intake}</div>
                </div>
                <div className="p-6 border shadow-sm bg-card border-border rounded-2xl">
                  <TrendingUp className="w-6 h-6 mb-3 text-primary" />
                  <div className="mb-1 text-sm text-muted-foreground">Work Rights</div>
                  <div className="font-semibold text-foreground">{activeDestination.stats.work}</div>
                </div>
                <div className="p-6 border shadow-sm bg-card border-border rounded-2xl">
                  <CheckCircle2 className="w-6 h-6 mb-3 text-primary" />
                  <div className="mb-1 text-sm text-muted-foreground">Post-Study</div>
                  <div className="font-semibold text-foreground">{activeDestination.stats.stay}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-16 lg:grid-cols-2">
            <div className="p-8 border shadow-sm bg-card border-border rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Entry Requirements</h3>
              </div>
              <div className="space-y-3">
                {activeDestination.requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 transition-colors rounded-xl hover:bg-muted/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 border shadow-sm bg-card border-border rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Application Process</h3>
              </div>
              <div className="space-y-2">
                {activeDestination.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 transition-colors rounded-xl hover:bg-muted/50">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold rounded-full text-primary-foreground bg-primary">
                      {index + 1}
                    </div>
                    <span className="pt-1 text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 border shadow-sm bg-card border-border rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Top Universities</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {activeDestination.universities.map((university, index) => (
                <span
                  key={index}
                  className="px-5 py-3 font-medium transition-all duration-200 border rounded-full cursor-pointer text-foreground border-border bg-muted/50 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                >
                  {university}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-primary-foreground bg-primary">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mb-10 text-xl leading-relaxed text-primary-foreground/80">
            Our experienced counselors will guide you through every step of your study abroad journey
          </p>
          <button className="px-10 py-5 font-semibold transition-all duration-300 rounded-full shadow-xl text-primary bg-primary-foreground hover:bg-primary-foreground/90 hover:shadow-2xl hover:scale-105">
            Schedule Free Consultation
          </button>
        </div>
      </section>
      <EnhancedFooter />
    </div>
  );
}
