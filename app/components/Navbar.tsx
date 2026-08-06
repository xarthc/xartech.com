"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ AOS + Scroll Effect
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isServicePage = pathname.startsWith("/services/");
  const isAboutPage = pathname === "/about-us";

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`w-full bg-white fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "shadow-2xl rounded-b-3xl py-2"
          : "shadow-none rounded-none py-4"
      }`}
    >
      <div
        data-aos="fade-down"
        className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link href="/">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-gray-300 flex items-center justify-center">
            <Image
              src="/xartechLogo.webp"
              alt="Xartech Logo"
              width={56}
              height={56}
              className="object-cover"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 lg:gap-20 text-gray-800 font-medium">
          {isAboutPage ? (
            <>
              <Link href="/" className="hover:text-black transition">
                Home
              </Link>
              <a href="#team" className="hover:text-gray-500 transition">
                Team ↓
              </a>
              <a href="#missions" className="hover:text-gray-500 transition">
                Missions ↓
              </a>
              <Link
                href="/#contactUs"
                className="hover:text-gray-500 transition"
              >
                Contact Us ↓
              </Link>
            </>
          ) : isServicePage ? (
            <>
              <Link href="/" className="hover:text-black transition">
                Home
              </Link>
              <a href="#gallery" className="hover:text-gray-500 transition">
                Samples ↓
              </a>
              <a href="#form" className="hover:text-gray-500 transition">
                Contact Us ↓
              </a>
              <Link href="#footer" className="hover:text-gray-500 transition">
                Services ↓
              </Link>
            </>
          ) : (
            <>
              <Link href="/" className="hover:text-black transition">
                Home
              </Link>
              <Link href="#about" className="hover:text-gray-500 transition">
                About ↓
              </Link>
              <a href="#services" className="hover:text-gray-500 transition">
                Services ↓
              </a>
              <a href="#contactUs" className="hover:text-gray-500 transition">
                Contact Us ↓
              </a>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 bg-white border-t">
          {isAboutPage ? (
            <>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <a href="#team" onClick={closeMenu}>
                Team
              </a>
              <a href="#missions" onClick={closeMenu}>
                Missions
              </a>
              <Link href="/#contactUs" onClick={closeMenu}>
                Contact Us
              </Link>
            </>
          ) : isServicePage ? (
            <>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <a href="#gallery" onClick={closeMenu}>
                Samples
              </a>
              <a href="#form" onClick={closeMenu}>
                Contact Us
              </a>
              <a href="#footer" onClick={closeMenu}>
                Services
              </a>
            </>
          ) : (
            <>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
              <a href="#contactUs" onClick={closeMenu}>
                Contact Us
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}