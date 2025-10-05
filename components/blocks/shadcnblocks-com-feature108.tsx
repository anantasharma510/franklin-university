"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Users, Globe } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "THE OFFICIALS",
  heading = "Comprehensive Solutions for Global Education",
  description = "Empowering universities and agents with cutting-edge technology and proven strategies.",
  tabs = [
    {
      value: "tab-1",
      icon: <Building className="h-auto w-4 shrink-0" />,
      label: "For Universities",
      content: {
        badge: "University Solutions",
        title: "Expand Your Global Reach with Confidence.",
        description:
          "Access our vetted network of 1500+ agents worldwide, launch targeted recruitment campaigns, and gain actionable market intelligence to drive quality applications and sustainable growth.",
        buttonText: "Partner With Us",
        imageSrc: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        imageAlt: "University Partnership",
      },
    },
    {
      value: "tab-2",
      icon: <Users className="h-auto w-4 shrink-0" />,
      label: "For Agents",
      content: {
        badge: "Agent Network",
        title: "Elevate Your Business with Premium Partnerships.",
        description:
          "Connect with 35+ prestigious UK universities, undergo professional training, utilize ready-to-use marketing materials, and leverage our advanced technology platform for streamlined operations.",
        buttonText: "Join Our Network",
        imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Agent Success",
      },
    },
    {
      value: "tab-3",
      icon: <Globe className="h-auto w-4 shrink-0" />,
      label: "Global Impact",
      content: {
        badge: "Worldwide Reach",
        title: "Building Bridges Across Continents.",
        description:
          "With offices in 3 countries and partnerships spanning multiple continents, we're creating a global ecosystem that connects students with their dream education opportunities worldwide.",
        buttonText: "Explore Destinations",
        imageSrc: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Global Reach",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 mx-auto">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>
                  <Button className="mt-2.5 w-fit gap-2" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl max-w-md w-full h-auto object-cover"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
