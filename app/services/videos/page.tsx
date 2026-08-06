"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomCursor from "@/app/components/CustomCursor";
import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

type Work = {
  title: string;
  video: string;
  link: string;
};

type Category = {
  title: string;
  highlight?: string;
  works: Work[];
};

export default function VideoEdit() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 0.85]);
  const y = useTransform(scrollY, [0, 600], [0, -80]);

  const galleryRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
    {
      title: "Enterprise & Commercial Platforms",
      works: [
        { title: "Amros", video: "/video-sample_1.mp4", link: "#" },
        { title: "Khaabarwala", video: "/videoedit-video1.mp4", link: "#" },
        { title: "InspireVastu", video: "/app-video2.mp4", link: "#" },
        { title: "Amros", video: "/web-video3.mp4", link: "#" },
        { title: "Khaabarwala", video: "/videoedit-video1.mp4", link: "#" },
        { title: "InspireVastu", video: "/app-video2.mp4", link: "#" },
      ],
    },
    // {
    //   title: "Hackathons & Community Platforms",
    //   works: [
    //     { title: "Neura Twin 2.0", video: "/ui-video3.mp4", link: "#" },
    //     { title: "Hackground 2K25", video: "/graphic-video1.mp4", link: "#" },
    //   ],
    // },
  ];

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialIcons = [
    { icon: Youtube, link: "https://www.youtube.com/@Xartech_Dynamics" },
    { icon: Instagram, link: "https://www.instagram.com/xartech.official/" },
    { icon: Linkedin, link: "https://www.linkedin.com/" },
    { icon: FaXTwitter, link: "https://x.com/XartechDynamics" },
  ];

  return (
    <main className="bg-surface text-black" style={{ fontFamily: "Be Vietnam Pro" }}>
      <CustomCursor />

      {/* HERO */}
      <motion.section
        style={{ scale, y }}
        className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 mt-35 bg-white rounded-b-[30px]"
      >

        <h1
          data-aos="fade-up"
          className="text-5xl md:text-7xl font-medium tracking-tight max-w-5xl"
        >
          Xartech Edits
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-6 text-lg text-black tracking-wide max-w-2xl font-normal pb-12"
        >
          We don’t just edit, we bring stories to life. Xartech creates high-octane visual narratives crafted to captivate a global audience.
        </p>

        <a
          data-aos="fade-up"
          data-aos-delay="400"
          href="#gallery"
          className="mt-45 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center animate-bounce"
        >
          ↓
        </a>

        {/* Marquee */}
        <div className="overflow-hidden w-full pt-8">
          <div className="flex gap-12 animate-marquee whitespace-nowrap text-4xl font-medium">
            <span>/ PURPOSEFUL DESIGNS</span>
            <span>/ STRATEGIC EXPERIENCES</span>
            <span>/ RESULTS DRIVEN SOLUTIONS</span>
            <span>/ PURPOSEFUL DESIGNS</span>
            <span>/ STRATEGIC EXPERIENCES</span>
            <span>/ RESULTS DRIVEN SOLUTIONS</span>
          </div>
        </div>

      </motion.section>

      {/* GALLERY */}
      <section
        id="gallery"
        ref={galleryRef}
        className="max-w-7xl mx-auto px-6 pb-32 space-y-32 bg-surface"
      >
        {categories.map((category, i) => (
          <div key={i}>
            <h2 className="text-5xl md:text-6xl font-semibold pb-10 pt-10">
              {category.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-16 bg-white rounded-[40px] py-20 px-12 mb-20">
              {category.works.map((work, j) => (
                
                // ✅ CHANGED: removed <a> to prevent reload
                <div key={j} className="group cursor-pointer">
                  
                  <div className="bg-black rounded-2xl p-6">
                    
                    {/* 🎥 VIDEO CARD */}
                    <div className="relative">
                      <video
                        src={work.video}
                        className="rounded-xl w-full h-[220px] object-cover"
                        muted
                        loop
                        playsInline
                        controls
                        onClick={(e) => e.stopPropagation()} // ✅ prevents unwanted navigation
                      />

                      {/* ▶ Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
                        <div className="bg-white text-black px-4 py-2 rounded-full text-sm">
                          ▶ Play
                        </div>
                      </div>
                    </div>

                  </div>

                  <p className="text-center mt-4 font-medium">
                    <a href={work.link} target="_blank">
                      {work.title}
                    </a>
                  </p>

                </div>

              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-15 pb-16 px-6 relative rounded-t-4xl" style={{ fontFamily: "Be Vietnam Pro" }}>
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >

          <div className="grid md:grid-cols-3 gap-16">

            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-white text-lg">
                <li><Link href="#about">About</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#recent">Projects</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-white text-lg">
                <li><Link href="/services/web">Web Design</Link></li>
                <li><Link href="/services/videos">Video Editing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>

              <p className="mb-4">Follow us:</p>

              <div className="flex gap-4">
                {socialIcons.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a key={i} href={item.link} target="_blank">
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          <div className="mt-10 pt-8 border-t border-gray-700 text-sm text-white">
            © 2026 Xartech. All rights reserved
          </div>

        </motion.div>

        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center animate-bounce shadow-lg hover:scale-110 transition z-50"
          >
            ↑
          </button>
        )}
      </footer>

    </main>
  );
}