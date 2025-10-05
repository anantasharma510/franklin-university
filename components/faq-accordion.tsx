"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Users,
  Globe,
  Shield,
  GraduationCap,
  Building,
} from "lucide-react";
import { ElementType } from "react";

type AccordionItemType = {
  icon: ElementType;
  value: string;
  question: string;
  answer: string;
};

const accordionItems: AccordionItemType[] = [
  {
    icon: Building,
    value: "item-1",
    question: "How can universities partner with THE OFFICIALS?",
    answer:
      "Universities can partner with us to access our global network of 1500+ verified agents, launch targeted recruitment campaigns, and gain valuable market intelligence. We provide comprehensive support including compliance management, technology platforms, and professional training for your recruitment teams.",
  },
  {
    icon: Users,
    value: "item-2",
    question: "What benefits do education agents get from joining your network?",
    answer:
      "Education agents gain access to 35+ prestigious UK universities, receive professional training and certification, utilize ready-to-use marketing materials, and leverage our advanced technology platform for streamlined operations. We also provide ongoing support and compliance guidance.",
  },
  {
    icon: Globe,
    value: "item-3",
    question: "Which countries do you operate in?",
    answer:
      "We have offices in 3 countries: Nepal (Kathmandu), United Kingdom (London), and UAE (Dubai). Our global network spans multiple continents, connecting students with educational opportunities worldwide through our extensive partner network.",
  },
  {
    icon: Shield,
    value: "item-4",
    question: "How do you ensure quality and compliance?",
    answer:
      "We maintain the highest standards through ISO 9001 certification, British Council partnership, and membership in industry organizations like ICEF, PIER, and AIRC. All our agents undergo rigorous verification and training processes to ensure compliance with international education standards.",
  },
  {
    icon: GraduationCap,
    value: "item-5",
    question: "What types of educational programs do you support?",
    answer:
      "We specialize in connecting students with undergraduate, postgraduate, and pathway programs across various fields including business, engineering, medicine, arts, and sciences. Our partner universities offer programs from foundation courses to PhD studies.",
  },
  {
    icon: HelpCircle,
    value: "item-6",
    question: "How can students get started with THE OFFICIALS?",
    answer:
      "Students can contact us through our website, visit one of our global offices, or connect with our verified agents in their region. We provide free consultations to help students find the right program and university that matches their academic goals and career aspirations.",
  },
];

export function FAQAccordion() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our services, partnerships, and global education opportunities.
        </p>
      </div>
      
      <Accordion type="single" collapsible className="space-y-4">
        {accordionItems.map(({ icon: Icon, value, question, answer }) => (
          <AccordionItem
            key={value}
            value={value}
            className="group border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50"
          >
            <AccordionTrigger
              className="flex items-center justify-between w-full px-6 py-4 bg-background text-left group-data-[state=open]:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-data-[state=open]:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base font-semibold text-foreground">
                  {question}
                </span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-6 py-4 text-muted-foreground border-t border-border bg-muted/30">
              <div className="pl-14">
                {answer}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
