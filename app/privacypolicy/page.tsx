"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomCursor from "@/app/components/CustomCursor";
import Link from "next/link";
import { Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function PrivacyPolicy(){
    
            const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 600], [1, 0.85]);
  const y = useTransform(scrollY, [0, 600], [0, -80]);

  const galleryRef = useRef<HTMLDivElement>(null);

 

//Footer Component
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
    <main className="bg-surface text-black min-h-screen" style={{ fontFamily: "Be Vietnam Pro" }}>
      <CustomCursor />

      {/* HERO SECTION */}
      <motion.section
        style={{ scale, y }}
        className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 mt-35 bg-white rounded-b-[30px] z-10 relative"
      >
        <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-medium tracking-tight max-w-5xl pt-18">
          Privacy Policy
        </h1>

        <a href="#gallery" className="mt-55 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center animate-bounce">
          ↓
        </a>

        {/* Marquee */}
        <div className="overflow-hidden w-full pt-20">
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

     {/* PRIVACY CONTENT SECTION */}
<section className="w-300 bg-surface py-20 px-6 bg-white ml-35 rounded-4xl ">
  <div className="max-w-5xl mx-auto">

    {/* INTRO */}
    <div className="mb-16">
      <p className="text-lg text-gray-500 mb-4">Last updated: March 2026</p>

      <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
        Your privacy matters to us. This policy explains how we collect, use, and protect your information.
      </h2>
    </div>

    {/* CONTENT BLOCKS */}
    <div className="space-y-14">

      {/* SECTION 1 */}
      <div>
        <h3 className="text-2xl font-medium mb-4">1. Information We Collect</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          We may collect personal information such as your name, email address, and usage data when you interact with our website or services.
        </p>
      </div>

      {/* SECTION 2 */}
      <div>
        <h3 className="text-2xl font-medium mb-4">2. How We Use Your Information</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          Your information helps us improve our services, communicate with you, and deliver personalized experiences.
        </p>
      </div>

      {/* SECTION 3 */}
      <div>
        <h3 className="text-2xl font-medium mb-4">3. Data Protection</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          We implement strong security measures to protect your data from unauthorized access, alteration, or disclosure.
        </p>
      </div>

      {/* SECTION 4 */}
      <div>
        <h3 className="text-2xl font-medium mb-4">4. Cookies</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          We use cookies to enhance user experience and analyze website traffic. You can control cookies through your browser settings.
        </p>
      </div>

      {/* SECTION 5 */}
      <div>
        <h3 className="text-2xl font-medium mb-4">5. Third-Party Services</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          We may use trusted third-party services to operate our website and improve functionality, ensuring your data remains secure.
        </p>
      </div>

      {/* SECTION 6 */}
      <div>
        <h3 className="text-2xl font-medium mb-4">6. Your Rights</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          You have the right to access, update, or delete your personal information at any time by contacting us.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* FOOTER */}
      <section className="pt-15">
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
    </section>
    </main>
  )
}
