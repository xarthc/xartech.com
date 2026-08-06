    "use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomCursor from "@/app/components/CustomCursor";

import Link from "next/link";
import { Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

type Work = {
  title: string;
  image: string;
  link: string;
};

type Category = {
  title: string;
  highlight?: string;
  works: Work[];
};

export default function GraphicDesign() {

//    useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 600], [1, 0.85]);
  const y = useTransform(scrollY, [0, 600], [0, -80]);

  const galleryRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
    {
      title: "Enterprise & Commercial Platforms",
      highlight: "",
      works: [
        { title: "Amros", image: "/Screenshot 2025-10-26 at 4.47.59 PM.png", link: "https://share.google/ljBjNBD9OkB5fhHoV" },
        { title: "Khaabarwala", image: "/Screenshot 2025-10-23 at 6.38.41 PM.png", link: "https://share.google/V8nemYZMQLI5D23gR" },
        { title: "InspireVastu", image: "/Screenshot 2025-10-23 at 6.41.54 PM.png", link: "https://share.google/Pr7VgOwJz2Eg0gCdX" },
        { title: "ZenithDanceDubai", image: "/Screenshot 2025-10-23 at 7.05.13 PM.png", link: "https://share.google/nJrBCB9cDhQFQwN38" },
        { title: "Amros Consulting", image: "/Screenshot 2025-10-23 at 7.05.29 PM.png", link: "https://share.google/UKur4B2iXawAX4mdT" },
        { title: "MSW", image: "/Screenshot 2025-10-23 at 7.06.03 PM.png", link: "https://share.google/ETZZag4d9Qpki0CyG" },
        { title: "E-Physiocare", image: "/Screenshot 2025-10-23 at 7.06.33 PM.png", link: "https://share.google/9z2wXdk8OOlCG5nq9" },
        
      ],
    },
    {
      title: "Hackathons & Community Platforms",
      highlight: "Hackathons &",
      works: [
        { title: "Neura Twin 2.0", image: "/Screenshot 2025-10-23 at 7.11.54 PM.png", link: "https://neura-twin-2-0.vercel.app/" },
        { title: "Hackground 2K25", image: "/Screenshot 2025-10-23 at 7.12.28 PM.png", link: "https://hackground2k25.vercel.app/" },
        { title: "Code for Bharat", image: "/Screenshot 2025-10-23 at 7.12.47 PM.png", link: "https://www.codeforbharat.xyz/" },
        { title: "Bio Pay Connect", image: "/Screenshot 2025-10-23 at 7.13.18 PM.png", link: "https://bio-pay-connect.vercel.app/" },
        { title: "Synergix Hack", image: "/Screenshot 2025-10-23 at 7.13.37 PM.png", link: "https://synergix-hack.vercel.app/" },
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



  //footer Component

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
    <main className="bg-surface text-black" style={{fontFamily:"Be Vietnam Pro"}}>

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
          Xartech Graphics
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-6 text-lg text-black tracking-wide max-w-2xl font-normal pb-12"
        >
          Beyond design: we engineer digital experiences. Precision-crafted at Xartech to engage a worldwide audience.
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
     
      className="max-w-7xl mx-auto px-6 pb-32 space-y-32 bg-surface">

        {categories.map((category, i) => (

          <div key={i}>

            {/* WHITE CURVED HEADING CARD */}
            <div >

              <h2
               data-aos="fade-right"
              className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] max-w-4xl pb-10 pt-10">

                {category.highlight && (
                  <span className="text-black">
                    {category.highlight}
                  </span>
                )}

                {category.title.replace(category.highlight ?? "", "")}

              </h2>

            </div>

            {/* WORK GRID */}
            <div className="grid md:grid-cols-3 gap-16 bg-white rounded-[40px] py-20 px-12 mb-20">

              {category.works.map((work, j) => (

                <a
                  key={j}
                  href={work.link}
                  target="_blank"
                  className="group"
                >

                  <div 
                  data-aos="zoom-in"
                  className="bg-black rounded-2xl p-6">

                    <img
                      src={work.image}
                      alt={work.title}
                      className="rounded-xl w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>

                  <p className="text-center mt-4 font-medium">
                    {work.title}
                  </p>

                </a>

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
