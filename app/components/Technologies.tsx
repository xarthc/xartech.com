"use client";

import React from "react";
import FallingText from "@/components/FallingText"; // ✅ FIXED PATH

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="w-full bg-surface py-20 px-6 scroll-mt-24"
      style={{ fontFamily: "Be Vietnam Pro" }}
    >
      {/* Section Label */}
      <div data-aos="fade-right" className="max-w-7xl mx-auto mb-8">
        <p className="text-lg font-medium flex items-center gap-2">
          <span className="text-xl">✦</span> Technologies
        </p>
      </div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2
          data-aos="fade-right"
          data-aos-delay="50"
          className="text-[48px] md:text-[56px] font-semibold leading-[1.15] tracking-tight max-w-3xl"
        >
          Where creativity meets strategy to build meaningful experiences.
        </h2>
      </div>

      {/* Falling Text Section */}
      <div className="max-w-7xl mx-auto">
        <div className="min-h-[400px] w-full bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 overflow-hidden">
      <FallingText
  text="At Xartech, we leverage cutting-edge tools like Next.js, React, Node.js, and Matter-js to build powerful experiences."
  highlightWords={[
    "Xartech",
    "Next.js",
    "React",
    "Node.js",
    "Matter-js",
  ]}
  fontSize="2.5rem"
/>
        </div>
      </div>
    </section>
  );
}