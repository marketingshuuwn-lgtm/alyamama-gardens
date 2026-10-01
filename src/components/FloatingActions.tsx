"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { siteContent } from "@/content/siteContent";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
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

  return (
    <>
      {/* Floating WhatsApp Action Button */}
      <a
        href={siteContent.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 animate-pulse-wa"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="الرجوع للأعلى"
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#026D03] text-white flex items-center justify-center shadow-lg hover:bg-[#014d02] hover:-translate-y-1 transition-all duration-300 ${
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
