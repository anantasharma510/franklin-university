"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "THE OFFICIALS has transformed our international recruitment strategy. Their professional approach and extensive agent network have helped us achieve a 40% increase in quality applications from diverse markets.",
    image: "/professional-headshot-of-dr-sarah-mitchell--middle.jpg",
    name: "Dr. Sarah Mitchell",
    role: "International Admissions Director",
  },
  {
    text: "Working with THE OFFICIALS has been exceptional. Their comprehensive support, training programs, and university partnerships have enabled us to provide the best guidance to our students while growing our business significantly.",
    image: "/professional-headshot-of-rajesh-sharma--indian-man.jpg",
    name: "Rajesh Sharma",
    role: "Senior Education Consultant",
  },
  {
    text: "The quality of students and the professionalism of THE OFFICIALS team is outstanding. They understand our requirements and consistently deliver results that exceed our expectations.",
    image: "/professional-headshot-of-prof-james-wilson--distin.jpg",
    name: "Prof. James Wilson",
    role: "Vice-Chancellor",
  },
  {
    text: "THE OFFICIALS provides unmatched support and resources. Their technology platform and dedicated account management have streamlined our operations and improved our success rates dramatically.",
    image: "/professional-headshot-of-maria-rodriguez--hispanic.jpg",
    name: "Maria Rodriguez",
    role: "Director",
  },
  {
    text: "Their deep understanding of global markets and commitment to quality has made THE OFFICIALS our preferred recruitment partner. The results speak for themselves - consistent growth year over year.",
    image: "/professional-headshot-of-dr-emily-chen--asian-woma.jpg",
    name: "Dr. Emily Chen",
    role: "Head of International Relations",
  },
  {
    text: "The partnership with THE OFFICIALS has been transformative for our business. Their comprehensive training, marketing support, and university relationships have positioned us as market leaders.",
    image: "/professional-headshot-of-ahmed-al-rashid--middle-e.jpg",
    name: "Ahmed Al-Rashid",
    role: "Managing Director",
  },
  {
    text: "THE OFFICIALS has revolutionized our student recruitment process. Their innovative platform and dedicated support team have made international partnerships seamless and profitable.",
    image: "/professional-headshot-of-dr-sarah-mitchell--middle.jpg",
    name: "Dr. Lisa Thompson",
    role: "Global Partnerships Manager",
  },
  {
    text: "Working with THE OFFICIALS has elevated our agency to new heights. Their training programs and university connections have helped us become the go-to education consultancy in our region.",
    image: "/professional-headshot-of-rajesh-sharma--indian-man.jpg",
    name: "Michael Chen",
    role: "Education Consultant",
  },
  {
    text: "The results speak for themselves - THE OFFICIALS has helped us increase our international student enrollment by 60% while maintaining the highest quality standards.",
    image: "/professional-headshot-of-prof-james-wilson--distin.jpg",
    name: "Dr. Anna Williams",
    role: "International Office Director",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
