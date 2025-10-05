"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
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

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSlider() {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our partners say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our university partners and agents have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
