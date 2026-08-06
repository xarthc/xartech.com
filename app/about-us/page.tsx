"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomCursor from "../components/CustomCursor";
import Link from "next/link";
import { Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function InterAboutUS() {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 600], [1, 0.85]);
  const y = useTransform(scrollY, [0, 600], [0, -80]);

  const galleryRef = useRef<HTMLDivElement>(null);

  const team = [
    {
      name: "Sarthak Sharma",
      role: "CEO, Founder",
      image: "/CEO.jpeg",
      linkedin: "https://www.linkedin.com/in/sarthak-sharma-/",
    },
    // {
    //   name: "Harsh Shrivastava",
    //   role: "Co-Founder",
    //   image: "/harsh_profile4.jpg",
    //   linkedin: "https://www.linkedin.com/in/harsh-shrivastava-59162a291/",
    // },
  ];


  // FOOTER DATA

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
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

  const companyLinks = [
    "About",
    "Services",
    "Projects",
    "Contacts",
    "Testimonials",
  ];

  const servicesLinks = [
    "Web Design",
    "Branding",
    "UX/UI",
    "Motion",
    "SEO",
    "Content Creation",
    "Landing Page",
  ];

  const industriesLinks = [
    "Healthcare",
    "Fintech",
    "Web3",
    "Technology",
    "Corporate",
    "AI",
    "Real Estate",
    "E-commerce",
    "Hospitality",
  ];

  const socialIcons = [
    { icon: Youtube, link: "https://www.youtube.com/@Xartech_Dynamics" },
    { icon: Instagram, link: "https://www.instagram.com/xartech.official/" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/xartech-dynamics-822024391/" },
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
          className="text-5xl md:text-6xl font-medium tracking-tight max-w-5xl pt-25"
        >
          We are design-first creative studio
        </h1>

        <a
          data-aos="fade-up"
          data-aos-delay="400"
          href="#team"
          className="mt-65 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center animate-bounce"
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

      {/* TEAM SECTION */}
  <div className="max-w-7xl mx-auto flex justify-center">
  <div className="grid md:grid-cols-1 gap-10">
    {team.map((member, i) => (
      <div
        key={i}
        data-aos="zoom-in"
        className="bg-white rounded-[32px] p-6 hover:shadow-lg transition w-full max-w-[600px] shadow-2xl"
      >
        <div className="flex justify-center">
          <img
            src={member.image}
            alt={member.name}
            className="
              w-92 h-92
              rounded-full
              object-cover
              border-4 border-gray-100
              shadow-md
              transition duration-300 hover:scale-105
            "
          />
        </div>

        <div className="flex items-center justify-between mt-5">
          <div>
            <h3 className="text-lg font-semibold">
              {member.name}
            </h3>
            <p className="text-gray-500 text-sm">
              ({member.role})
            </p>
          </div>

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black hover:text-white transition"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
    <section className="w-full bg-surface pt-30 px-6 mb-24">

  <section className="w-full bg-surface pt-20 md:pt-[120px] px-4 sm:px-6 mb-16 md:mb-24">

{/* MISSION */}

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
    <p
      data-aos="fade-right"
      className="text-base md:text-lg font-medium flex items-center gap-2"
    >
      <span className="text-lg md:text-xl">•</span>
      Our Mission
    </p>


<h2
  data-aos="fade-left"
  className="text-3xl sm:text-4xl md:text-[44px] font-semibold leading-[1.2] md:leading-[1.25] tracking-tight"
>
  To create a world made of thoughtful designs and experiences.
</h2>


  </div>

{/* VALUES CARD */}

  <div className="max-w-7xl mx-auto bg-[#f3f3f3] rounded-[24px] md:rounded-[40px] px-6 md:px-16 py-10 md:py-20">

```
{/* TITLE */}
<div className="mb-10 md:mb-16">
  <h2
    data-aos="fade-right"
    data-aos-delay="50"
    className="text-3xl sm:text-4xl md:text-[52px] font-semibold leading-[1.1] tracking-tight max-w-md"
  >
    Our values and commitments
  </h2>
</div>

{/* ROWS */}
<div className="space-y-10 md:space-y-16">

  {/* ROW 1 */}
  <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-24">

    <div
      data-aos="fade-right"
      data-aos-delay="100"
      className="flex items-start gap-4 md:gap-5"
    >
      <span className="text-black text-xl md:text-2xl">01</span>
      <h3 className="text-xl md:text-2xl font-medium">Trust</h3>
    </div>

    <p
      data-aos="fade-left"
      data-aos-delay="100"
      className="text-black leading-relaxed text-base md:text-xl font-light"
    >
      Trust forms the bedrock of our relationships. We prioritize
      transparency, reliability, and integrity in all our interactions,
      fostering trust with our clients and partners alike.
    </p>

  </div>

  {/* ROW 2 */}
  <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-24">

    <div
      data-aos="fade-right"
      data-aos-delay="150"
      className="flex items-start gap-4 md:gap-5"
    >
      <span className="text-black text-xl md:text-2xl">02</span>
      <h3 className="text-xl md:text-2xl font-medium">Communication</h3>
    </div>

    <p
      data-aos="fade-left"
      data-aos-delay="150"
      className="text-black leading-relaxed text-base md:text-xl font-light"
    >
      Effective communication is key to our process. We believe in open
      dialogue, active listening, and clear, concise messaging to ensure
      that everyone is on the same page and ideas are understood and valued.
    </p>

  </div>

  {/* ROW 3 */}
  <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-24">

    <div
      data-aos="fade-right"
      data-aos-delay="200"
      className="flex items-start gap-4 md:gap-5"
    >
      <span className="text-black text-xl md:text-2xl">03</span>
      <h3 className="text-xl md:text-2xl font-medium">Integrity</h3>
    </div>

    <p
      data-aos="fade-left"
      data-aos-delay="200"
      className="text-black leading-relaxed text-base md:text-xl font-light"
    >
      We hold authenticity in high regard and appreciate honesty. Our
      commitment to transparency stems from our deep respect for stakeholders
      and maintaining the highest working standards.
    </p>

  </div>

  {/* ROW 4 */}
  <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-24">

    <div
      data-aos="fade-right"
      data-aos-delay="250"
      className="flex items-start gap-4 md:gap-5"
    >
      <span className="text-black text-xl md:text-2xl">04</span>
      <h3 className="text-xl md:text-2xl font-medium">
        Building lasting relationships
      </h3>
    </div>

    <p
      data-aos="fade-left"
      data-aos-delay="250"
      className="text-black leading-relaxed text-base md:text-xl font-light"
    >
      Through trust, communication, and integrity, we ensure that every
      project becomes a successful and rewarding experience for all involved.
    </p>

  </div>

</div>
```

  </div>

</section>

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
            <h3 className="text-lg font-semibold mb-6">Services</h3>

            <ul className="space-y-3 text-white text-lg">
              {[
                { name: "Web Design", path: "/services/web" },
                { name: "UX/UI", path: "/services/ui" },
                { name: "Video Editing", path: "/services/videos" },
                { name: "Applications", path: "/services/app" },
                { name: "Graphic Designing", path: "/services/graphics" },
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
    </main>
  );
}