"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {

  const { scrollY } = useScroll();

  // Shrink Hero while scrolling
  const scale = useTransform(scrollY, [0, 600], [1, 0.85]);

  // Move slightly upward
  const y = useTransform(scrollY, [0, 600], [0, -80]);

  //AOS useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  

  return (
    <div className="bg-surface" style={{fontFamily:"Be Vietnam Pro"}} >
    <motion.section

      style={{
        scale,
        y
      }}

      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 mt-35 bg-white rounded-b-[30px] shadow-[30px_30px_20px_1px_rgba(0,0,0,0.1)]"
    >

      {/* Heading */}
      <h1
       data-aos="fade-up"
        className="text-5xl md:text-7xl font-medium tracking-tight max-w-5xl  "
        
      >
        Xartech 
      </h1>

      {/* Subtext */}
      <p 
      data-aos="fade-up"
      data-aos-delay="100"
      className="mt-6 text-lg text-black tracking-wide max-w-3xl font-normal pb-12">
Designing sleek platforms, software, and immersive journeys for scaling brands.      </p>

      {/* CTA */}
     <button
     data-aos="fade-up"
      data-aos-delay="300"
      className="relative overflow-hidden  px-10 py-3 rounded-full border-none bg-surface group font-medium   cursor-none
">

  {/* Sliding background */}
  <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-300"></span>

  {/* Button text */}
  <a href="#contactUs" className="contents">
  <span className="relative z-10 text-black group-hover:text-white transition">
    Request a quote 👋
  </span>
</a>

</button >
      {/* Scroll indicator */}
      <a
      data-aos="fade-up"
      data-aos-delay="400"
        href="#about"
        className="mt-45 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center animate-bounce"
      >
        ↓
      </a>

      {/* Marquee */}
      <div className="overflow-hidden w-full pt-8">

        <div  className="flex gap-12 animate-marquee whitespace-nowrap text-4xl font-medium">

          <span>/ PURPOSEFUL DESIGNS</span>
          <span>/ STRATEGIC EXPERIENCES</span>
          <span>/ RESULTS DRIVEN SOLUTIONS</span>

          <span>/ PURPOSEFUL DESIGNS</span>
          <span>/ STRATEGIC EXPERIENCES</span>
          <span>/ RESULTS DRIVEN SOLUTIONS</span>

        </div>
      </div>

    </motion.section>
    </div>
  );
}