"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The Official Representative has been instrumental in helping our university connect with qualified international students. Their professional approach and extensive network have significantly improved our recruitment process.",
    name: "Dr. Sarah Johnson",
    title: "Director of International Admissions, University of London",
  },
  {
    quote:
      "Working with The Official Representative has transformed our consultancy. Their training programs and support have helped us place over 200 students in UK universities this year alone.",
    name: "Ahmed Hassan",
    title: "Education Consultant, Dubai",
  },
  {
    quote: "The guidance and support I received from The Official Representative made my dream of studying in the UK a reality. They handled everything professionally and made the process seamless.",
    name: "Priya Sharma",
    title: "Student, University of Manchester",
  },
  {
    quote:
      "Their research-driven approach and ethical recruitment practices set them apart in the industry. We trust them completely with our student recruitment needs.",
    name: "Prof. Michael Chen",
    title: "International Office, University of Birmingham",
  },
  {
    quote:
      "The Official Representative's global presence and local expertise have been invaluable. They understand both the UK education system and our local market needs perfectly.",
    name: "Rajesh Kumar",
    title: "Education Agent, Mumbai",
  },
  {
    quote:
      "From application to visa support, The Official Representative provided comprehensive assistance. Their team's dedication and professionalism are unmatched in the industry.",
    name: "Fatima Al-Zahra",
    title: "Student, University of Edinburgh",
  },
];
