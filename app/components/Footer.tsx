"use client";

import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialIcons = [
    { icon: Youtube, link: "https://www.youtube.com/@Xartech_Dynamics" },
    { icon: Instagram, link: "https://www.instagram.com/xartech.official/" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/xartech-dynamics-822024391/" },
    { icon: FaXTwitter, link: "https://x.com/XartechDynamics" },
  ];

  return (
    <footer className="bg-black text-white pt-15 pb-16 px-6 relative rounded-t-4xl" style={{ fontFamily: "Be Vietnam Pro" }}>
      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-16">

          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>

            <ul className="space-y-3 text-white text-lg">
              {[
                { name: "About", path: "#about" },
                { name: "Services", path: "#services" },
                { name: "Projects", path: "#recent" },
                { name: "Contacts", path: "#contactUs" },
                { name: "Testimonials", path: "#testimonials" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.path} className="transition hover:text-gray-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-6 cursor-none">Services</h3>

            <ul className="space-y-3 text-white text-lg">
              {[
                { name: "Web Design", path: "./services/web" },
                { name: "UX/UI", path: "./services/ui" },
                { name: "Video Editing", path: "./services/videos" },
                { name: "Applications", path: "./services/app" },
                { name: "Graphic Designing", path: "./services/graphics" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.path} className="transition hover:text-gray-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT + SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>

            <div className="space-y-3 text-white text-lg mb-6">
              <a href="tel:+919876543210" className="block hover:text-gray-400 transition">
                📞 +91 9651388999 
              </a>

              <a href="mailto:contact@xartech.com" className="block hover:text-gray-400 transition">
                ✉️ sarthak.xartech@gmail.com
              </a>
            </div>

            {/* FOLLOW US (moved here) */}
            <p className="font-medium mb-4">Follow us:</p>

            <div className="flex gap-4">
              {socialIcons.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-black transition"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-8 border-t border-gray-700 text-sm text-white">
          <p>© 2026 Xartech. All rights reserved</p>

          <Link href="/privacypolicy" className="hover:text-gray-400 transition mt-3 md:mt-0">
            Privacy Policy
          </Link>
        </div>

      </motion.div>

      {/* SCROLL BUTTON */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center animate-bounce shadow-lg hover:scale-110 transition z-50"
        >
          ↑
        </button>
      )}
    </footer>
  );
}