import { About3 } from "@/components/ui/about-3";

const About3Demo = () => {
  return (
    <About3
      title="About Us"
      description="The Official Representative is a dynamic, service-oriented organization specializing in student recruitment and international education services. We connect students worldwide with UK universities through a professional, ethical, and transparent process."
      mainImage={{
        src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "University Campus",
      }}
      secondaryImage={{
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Students Success",
      }}
      breakout={{
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        alt: "Leadership",
        title: "Dr. Deepak Bahadur Khadka",
        description:
          "The driving force behind The Official Representative, whose vision and leadership have transformed the company into a trusted international education brand.",
        buttonText: "Learn More",
        buttonUrl: "/about",
      }}
      companiesTitle="Trusted by Leading UK Universities"
      companies={[
        {
          src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          alt: "University of London",
        },
        {
          src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          alt: "University of Manchester",
        },
        {
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          alt: "University of Birmingham",
        },
        {
          src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          alt: "University of Edinburgh",
        },
        {
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          alt: "University of Glasgow",
        },
        {
          src: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          alt: "University of Leeds",
        },
      ]}
      achievementsTitle="Our Impact in Numbers"
      achievementsDescription="Connecting students worldwide with quality education through our extensive network of universities and education consultants."
      achievements={[
        { label: "UK Universities", value: "50+" },
        { label: "Global Consultancies", value: "1,500+" },
        { label: "Students Recruited", value: "5,000+" },
        { label: "Countries Served", value: "6" },
      ]}
    />
  );
};

export { About3Demo };
