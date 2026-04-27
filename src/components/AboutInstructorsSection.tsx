"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

const instructors = [
  {
    id: 1,
    name: "Barath Manoharan",
    role: "HEAD OF TRAINING",
    desc: "Equestrian national champion guiding our riders with confidence and real sportsman spirit",
    image: "/assets/images/pic1.jpg",
    gridImage: "col-start-5 col-span-3",
    gridText: "col-start-8 col-span-4",
  },
  {
    id: 2,
    name: "Barath Manoharan",
    role: "HEAD OF TRAINING",
    desc: "Equestrian national champion guiding our riders with confidence and real sportsman spirit",
    image: "/assets/images/pic1.jpg", // Using placeholder images for now until distinct ones are provided
    gridImage: "col-start-1 col-span-3",
    gridText: "col-start-4 col-span-3",
  },
  {
    id: 3,
    name: "Barath Manoharan",
    role: "HEAD OF TRAINING",
    desc: "Equestrian national champion guiding our riders with confidence and real sportsman spirit",
    image: "/assets/images/pic1.jpg",
    gridImage: "col-start-7 col-span-3 mt-16 md:mt-32 lg:mt-48 relative z-20",
    gridText: "col-start-10 col-span-3 mt-16 md:mt-32 lg:mt-48 relative z-20",
  }
];

export default function AboutInstructorsSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Create a scroll trigger for the background color transition
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 20%"] // Transitions as the section comes into view
  });

  // #1C2245 is the dark blue from the previous section
  // #85431E is the brown/orange color from the design
  const color1 = useTransform(scrollYProgress, [0, 1], ['#1C2245', '#1C2245']);
  const color2 = useTransform(scrollYProgress, [0, 1], ['#1C2245', '#85431E']);
  const color3 = useTransform(scrollYProgress, [0, 1], ['#1C2245', '#85431E']);

  const background = useMotionTemplate`linear-gradient(to bottom, ${color1} 0%, ${color2} 40%, ${color3} 100%)`;

  return (
    <motion.section
      ref={containerRef}
      className="relative w-full py-20 md:py-32 overflow-hidden"
      style={{ background }}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
          <h2 className="text-[#FFF8E5] font-sans text-3xl md:text-5xl font-normal tracking-wide mb-6">
            The People You'll Ride With
          </h2>
          <p className="text-[#FFF8E5] text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
            The right guidance changes everything. And that's exactly what you'll find here, instructors who care about how you ride and how you feel while doing it.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-12 gap-y-4 relative w-full">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="contents">
              <div className={`${instructor.gridImage} relative aspect-[4/5] shadow-2xl`}>
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className={`${instructor.gridText} flex flex-col justify-center pl-8 lg:pl-12`}>
                <h3 className="text-[#FFF8E5] text-xl lg:text-2xl font-normal mb-2">
                  {instructor.name}
                </h3>
                <p className="text-[#FFF8E5]/80 text-[10px] lg:text-xs uppercase tracking-widest font-light mb-4">
                  {instructor.role}
                </p>
                <p className="text-[#FFF8E5]/70 text-sm lg:text-base font-light leading-relaxed max-w-[300px]">
                  {instructor.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Flex Layout */}
        <div className="flex md:hidden flex-col gap-16">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="flex flex-col items-center text-center">
              <div className="relative w-[280px] aspect-[4/5] shadow-2xl mb-8">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <h3 className="text-[#FFF8E5] text-xl font-normal mb-2">
                {instructor.name}
              </h3>
              <p className="text-[#FFF8E5]/80 text-[10px] uppercase tracking-widest font-light mb-4">
                {instructor.role}
              </p>
              <p className="text-[#FFF8E5]/70 text-sm font-light leading-relaxed max-w-[280px]">
                {instructor.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
