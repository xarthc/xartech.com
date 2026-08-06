"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
   
    {
      quote:
        "The UI/UX of this medical application, designed and developed by Xartech, is truly impressive.",
      name: "Anav Chawla",
      role: "CEO, S.E.H.A.T",
      image: "/testi_2.jpeg",
    },
    {
      quote:
        "From complex motion graphics to flawless transitions, Xartech redefined our visual identity.",
      name: "Bhargav Patel",
      role: "Founder, Four Turrets",
      image: "/testi_3.png",
    },
    {
      quote:
        "Their UI design elevated our product experience dramatically.",
      name: "Rachel Coleman",
      role: "Product Lead, Nova",
      image: "/testi_4.jpg",
    },
     {
      quote:
        "Our promotional video exceeded expectations. The editing and motion graphics were world-class.",
      name: "Manisha Ghosh",
      role: "GISP Coordinator, Geomaticsx",
      image: "/testi_1.png",
    },
    {
      quote:
        "The team delivered an incredible website faster than we imagined.",
      name: "Dan George",
      role: "Manager.IMPR",
      image: "/testi_5.jpg",
    },
  ];

  const duplicated = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const [index, setIndex] = useState(testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= testimonials.length * 2) {
      setTimeout(() => {
        setIndex(testimonials.length);
      }, 800);
    }
  }, [index]);

  const activeDot = index % testimonials.length;

  return (
    <section
      id="testimonials"
      className="w-full bg-surface py-10 md:py-12 overflow-hidden px-4 sm:px-6"
      style={{ fontFamily: "Be Vietnam Pro" }}
    >
      {/* Label */}
      <div
        data-aos="fade-right"
        className="max-w-7xl mx-auto mb-6 md:mb-8"
      >
        <p className="text-base md:text-lg font-medium flex items-center gap-2">
          <span className="text-xl">•</span> Voices of Success
        </p>
      </div>

      {/* Heading */}
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        className="max-w-7xl mx-auto mb-10 md:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-semibold leading-tight md:leading-[1.15] tracking-tight max-w-3xl">
          Real feedback from the brands and teams we’ve worked with.
        </h2>
      </div>

      {/* Slider */}
      <div className="relative max-w-5xl mx-auto overflow-visible">
        <motion.div
          animate={{
            x:
              typeof window !== "undefined" && window.innerWidth < 768
                ? `-${index * 100}%`
                : `-${index * 33.33}%`,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex"
        >
          {duplicated.map((t, i) => {
            const centerIndex =
              typeof window !== "undefined" && window.innerWidth < 768
                ? index
                : index + 1;

            const isCenter = i === centerIndex;

            return (
              <motion.div
                key={i}
                animate={{
                  scale: isCenter ? 1 : 0.92,
                  opacity: isCenter ? 1 : 0.65,
                }}
                transition={{ duration: 0.5 }}
                className="min-w-full md:min-w-[33.33%] px-2 md:px-4 flex justify-center"
              >
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-[30px_30px_18px_4px_rgba(0,0,0,0.1)] w-full">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-[16px] text-center">
                    “{t.quote}”
                  </p>

                  <div className="flex items-center gap-4 mt-6">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />

                    <div>
                      <p className="font-semibold text-sm">
                        {t.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* DOT INDICATORS */}
      <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-16">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`
              bg-black rounded-full transition-all duration-300
              ${activeDot === i ? "w-8 h-2" : "w-2 h-2 opacity-40"}
            `}
          />
        ))}
      </div>
    </section>
  );
}