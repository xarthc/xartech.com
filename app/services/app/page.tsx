"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomCursor from "@/app/components/CustomCursor";
import Link from "next/link";
import { Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";

type Work = {
  title: string;
  image: string;
  previewLink: string;
  downloadLink: string;
};

type Category = {
  title: string;
  highlight?: string;
  works: Work[];
};

export default function AppDevPage() {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 600], [1, 0.85]);
  const y = useTransform(scrollY, [0, 600], [0, -80]);

  const galleryRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
    {
      title: "Enterprise Mobile Systems & Digital Products",
      highlight: "Enterprise ",
      works: [
        { 
          title: "Volume Booster", 
          image: "/Screenshot 2026-03-23 at 2.25.05 PM.png", 
          previewLink: "https://drive.google.com/drive/folders/1wfQVwnI3k5jKQKceINDaJS17DB-9rUZN", 
          downloadLink: "https://play.google.com/store/apps/details?id=com.increasehighvolumne.soundbooster" 
        },
        { 
          title: "Nova Prompt", 
          image: "/Screenshot 2026-03-23 at 2.33.00 PM.png", 
          previewLink: "https://drive.google.com/drive/folders/1JdrmCVYL8i7EFToPPKr2eWCAuQkMEDlk", 
          downloadLink: "https://play.google.com/store/apps/details?id=com.novaprompt.app" 
        },
        { 
          title: "Expenzify", 
          image: "/auth.png", 
          previewLink: "https://drive.google.com/drive/folders/1aadpcElsdD0id8jbbkZ39xyYQoZoz_pT", 
          downloadLink: "https://drive.google.com/file/d/1kDmoywPk_wyP5Vc_8Q9VB8GF7vKx7gXy/view?usp=sharing" 
        },
      ],
    },
  ];


  //Form elements and submission logic

 const services = [
    "Website",
    "App",
    "UI/UX",
    "Graphic Design",
    "Video Editing",
  ];

  const currencies = ["USD", "INR", "EUR", "GBP"];

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [currency, setCurrency] = useState("USD");
  const [budget, setBudget] = useState("");

  // ✅ NEW FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ HANDLE SUBMIT
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          budget,
          currency,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully 🚀");

        // reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
        setSelectedServices([]);
        setBudget("");

      } else {
        alert("Something went wrong ❌");
      }

    } catch (err) {
      alert("Server error ❌");
    }
  };




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
     "Technology & Innovation",
    "Finance & Business",
    "Industry & Services",
    "Digital Commerce & Platforms",
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
        <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-medium tracking-tight max-w-5xl">
          Xartech Apps
        </h1>

        <p data-aos="fade-up" data-aos-delay="100" className="mt-6 text-lg text-black tracking-wide max-w-2xl font-normal pb-12">
          We don't just build apps, we craft immersive digital experiences that inspire a global audience.
        </p>

        <a href="#gallery" className="mt-20 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center animate-bounce">
          ↓
        </a>

        {/* Marquee */}
        <div className="overflow-hidden w-full pt-38">
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

      {/* GALLERY SECTION */}
      <section id="gallery" ref={galleryRef} className="max-w-7xl mx-auto px-6 pb-32 space-y-32 bg-surface pt-20">
        {categories.map((category, i) => (
          <div key={i}>
            <h2 data-aos="fade-right" className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] max-w-4xl pb-10">
              {category.highlight && <span className="text-black">{category.highlight}</span>}
              {category.title.replace(category.highlight ?? "", "")}
            </h2>

            {/* APP GRID - Using Portrait Ratio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 bg-white rounded-[40px] py-20 px-12 mb-20 shadow-sm">
              {category.works.map((work, j) => (
                <div key={j} data-aos="zoom-in" className="flex flex-col items-center group">
                  
                  {/* Portrait Container - Height > Width */}
                  <div className="bg-black rounded-[32px] p-4 w-[230px] h-[450px] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-contain rounded-2xl group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <h4 className="mt-6 text-2xl font-semibold">{work.title}</h4>

                  {/* Links Row */}
                  <div className="flex gap-6 mt-4">
                    <a
                      href={work.previewLink}
                      target="_blank"
                      className="text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors"
                    >
                      Preview
                    </a>
                    <span className="text-gray-300">|</span>
                    <a
                      href={work.downloadLink}
                      target="_blank"
                      className="text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>





   {/* Form as a contact section */}




<section id="form" className="w-full bg-surface text-black py-11 px-6" style={{ fontFamily: "Be Vietnam Pro" }}>

      {/* TOP */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 mb-20">

        <p data-aos="fade-right" className="text-lg font-medium flex items-center gap-2">
          <span className="text-xl">•</span> We’re explorers
        </p>

        <h2 data-aos="fade-left" className="text-[42px] md:text-[52px] font-semibold leading-[1.15] tracking-tight ">
          Ready to take next step with us?
        </h2>

      </div>

      {/* CARD */}
      <div className="max-w-7xl mx-auto bg-white px-16 py-20 rounded-[36px]">

        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>
            <button data-aos="fade-right" className="border border-gray-300 px-5 py-2 rounded-full text-sm text-gray-500">
              Contact us
            </button>

            <h2 data-aos="fade-right"
            data-aos-delay ="50"
             className="text-5xl md:text-6xl font-semibold mt-8 leading-tight">
              Let’s make <br /> an impact
            </h2>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-8">

              <div data-aos="fade-up">
                <label className="text-sm text-gray-500">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
              </div>

              <div data-aos="fade-up">
                <label className="text-sm text-gray-500">Company</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
              </div>

            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-8">

              <div data-aos="fade-up" 
            data-aos-delay="100">
                <label className="text-sm text-gray-500">Your Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
              </div>

              <div data-aos="fade-up" 
            data-aos-delay="150">
                <label className="text-sm text-gray-500">Your Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
              </div>

            </div>

            {/* Services */}
            <div data-aos="fade-up" 
            data-aos-delay="200">
              <p className="text-sm text-gray-600 mb-4">
                I’m interested in...
              </p>

              <div className="flex flex-wrap gap-4">

                {services.map((service) => (
                  <button
                  data-aos="fade-up" 
            data-aos-delay="300"
                    type="button"
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`px-6 py-3 rounded-full border transition
                      ${
                        selectedServices.includes(service)
                          ? "bg-black text-white border-black"
                          : "border-gray-300 hover:bg-gray-100"
                      }
                    `}
                  >
                    {service}
                  </button>
                ))}

              </div>
            </div>

            {/* Budget */}
            <div data-aos="fade-up" 
            data-aos-delay="400">
              <label className="text-sm text-gray-600">
                Project Budget
              </label>

              <div className="flex gap-4 mt-4">

                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
                >
                  {currencies.map((cur) => (
                    <option key={cur}>{cur}</option>
                  ))}
                </select>

                <input
                  type="number"
                  placeholder="Enter Budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-full px-5 py-3 focus:outline-none"
                />

              </div>
            </div>

            {/* Message */}
            <div data-aos="fade-up" 
            data-aos-delay="500">
              <label className="text-sm text-gray-600">
                Tell us about your project.
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border-b border-gray-300 focus:outline-none mt-4 resize-none"
                placeholder="Write something concise..."
              />
            </div>

            {/* Submit */}
            <button
            data-aos="zoom-in" 
            data-aos-delay="400"
              type="submit"
              className="w-full bg-black text-white py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>




{/* FOOTER */}

<footer id="footer" className="bg-black text-white pt-15 pb-16 px-6 relative rounded-t-4xl" style={{ fontFamily: "Be Vietnam Pro" }}>
      
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
              <a href="tel:+91 9651388999" className="block hover:text-gray-400 transition">
                📞 +91 9651388999
              </a>

              <a href="mailto:sarthak.xartech@gmail.com" className="block hover:text-gray-400 transition">
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
