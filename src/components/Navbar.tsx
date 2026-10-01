"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sprout, Menu, X, ArrowLeft, PhoneCall } from "lucide-react";
import { siteContent } from "@/content/siteContent";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "clients", "faq", "vision", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveHash(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-3"
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center shadow-md shadow-black/10 transition-transform duration-300 group-hover:scale-105 border border-white/30 overflow-hidden">
              <Image
                src={siteContent.business.logo}
                alt={siteContent.business.name}
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-black text-xl tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-[#142414]" : "text-white"
                }`}
              >
                {siteContent.business.name}
              </span>
              <span
                className={`text-xs -mt-1 font-medium transition-colors duration-300 ${
                  isScrolled ? "text-[#026D03]" : "text-[#FFBD10]"
                }`}
              >
                {siteContent.business.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/15">
            {siteContent.navigation.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#026D03] text-white shadow-sm"
                      : isScrolled
                      ? "text-gray-700 hover:text-[#026D03] hover:bg-black/5"
                      : "text-white hover:text-white hover:bg-white/20"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteContent.contact.mobile}`}
              className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FFBD10]" />
              <span dir="ltr">{siteContent.contact.mobile}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#E78F11] to-[#FFBD10] text-white shadow-lg shadow-[#E78F11]/30 hover:shadow-xl hover:shadow-[#E78F11]/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>احجز استشارة</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl md:hidden transition-colors ${
              isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-2">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl font-bold text-gray-800 hover:bg-[#026D03]/10 hover:text-[#026D03] transition flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowLeft className="w-4 h-4 opacity-50" />
              </Link>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#026D03] to-[#0a8f0c] shadow-lg shadow-[#026D03]/25"
            >
              احجز استشارتك المجانية
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
