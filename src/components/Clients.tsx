"use client";

import { useState } from "react";
import Image from "next/image";
import { Handshake, Building2, Landmark, LayoutGrid } from "lucide-react";
import { siteContent, ClientPartner } from "@/content/siteContent";

export default function Clients() {
  const { clients } = siteContent;
  const [filter, setFilter] = useState<"all" | "government" | "corporate">("all");

  const filteredLogos =
    filter === "all"
      ? clients.logos
      : clients.logos.filter((item) => item.category === filter);

  return (
    <section
      id="clients"
      className="py-24 bg-gradient-to-br from-[#026D03] via-[#015802] to-[#013f01] text-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 3px 3px, white 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#FFBD10] text-sm font-bold mb-4 border border-white/15">
            <Handshake className="w-4 h-4 text-[#FFBD10]" />
            <span>{clients.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            <span>{clients.title} </span>
            <span className="text-[#FFBD10]">{clients.titleHighlight}</span>
          </h2>

          <p className="text-white/85 text-lg leading-relaxed">{clients.description}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
              filter === "all"
                ? "bg-[#FFBD10] text-gray-950 shadow-lg scale-105"
                : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>جميع الشركاء ({clients.logos.length})</span>
          </button>

          <button
            onClick={() => setFilter("government")}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
              filter === "government"
                ? "bg-[#FFBD10] text-gray-950 shadow-lg scale-105"
                : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
            }`}
          >
            <Landmark className="w-4 h-4" />
            <span>الوزارات والأمانات</span>
          </button>

          <button
            onClick={() => setFilter("corporate")}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
              filter === "corporate"
                ? "bg-[#FFBD10] text-gray-950 shadow-lg scale-105"
                : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>الهيئات والشركات الكبرى</span>
          </button>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 mb-16">
          {filteredLogos.map((partner: ClientPartner, index: number) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-5 flex flex-col items-center justify-between shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-[140px] border border-white/40 group text-center"
            >
              <div className="relative w-full h-16 flex items-center justify-center p-1">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={60}
                  className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  unoptimized={partner.logo.endsWith(".svg")}
                />
              </div>

              <span className="text-xs font-bold text-gray-800 line-clamp-1 mt-2 group-hover:text-[#026D03] transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Key Metrics Stats Banner */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-white/10">
            {clients.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`text-center flex flex-col items-center justify-center ${
                  idx > 0 ? "pt-6 lg:pt-0" : ""
                }`}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FFBD10] tracking-tight mb-2">
                  <span>{stat.value}</span>
                  <span className="text-3xl sm:text-4xl">{stat.suffix}</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-white/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
