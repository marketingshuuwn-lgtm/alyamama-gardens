"use client";

import { useState } from "react";
import Image from "next/image";
import { HelpCircle, ChevronDown, MessageSquare, Phone } from "lucide-react";
import { siteContent } from "@/content/siteContent";

export default function Faq() {
  const { faq, contact } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#faf7ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#026D03]/10 text-[#026D03] text-sm font-bold mb-4">
            <HelpCircle className="w-4 h-4 text-[#E78F11]" />
            <span>{faq.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#142414] leading-tight mb-4">
            <span>{faq.title} </span>
            <span className="text-[#026D03]">{faq.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Visual Side Banner */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={faq.image}
                alt="الأسئلة الشائعة حول تصميم الحدائق"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Quick Consultation Callout Box */}
            <div className="bg-gradient-to-br from-[#026D03] to-[#014d02] text-white p-7 rounded-3xl shadow-xl flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#E78F11] to-[#FFBD10] flex items-center justify-center shrink-0 shadow-lg shadow-[#E78F11]/30">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-1">{faq.ctaTitle}</h4>
                <p className="text-xs text-white/80 mb-3">{faq.ctaDesc}</p>
                <a
                  href={contact.whatsapp}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FFBD10] hover:underline"
                >
                  <span>تواصل عبر واتساب مباشرة</span>
                  <span dir="ltr">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-7 space-y-3.5">
            {faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 shadow-sm ${
                    isOpen
                      ? "border-[#026D03] shadow-md ring-1 ring-[#026D03]/20"
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    className="w-full text-right px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-gray-900 cursor-pointer"
                  >
                    <span className={isOpen ? "text-[#026D03]" : ""}>
                      {item.question}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#026D03] text-white rotate-180"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-50">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
