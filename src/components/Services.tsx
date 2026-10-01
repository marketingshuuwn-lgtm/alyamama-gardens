"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sprout,
  LayoutGrid,
  PenTool,
  Wrench,
  ArrowLeft,
  Check,
} from "lucide-react";
import { siteContent, ServiceItem } from "@/content/siteContent";

export default function Services() {
  const { services } = siteContent;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredItems =
    selectedCategory === "all"
      ? services.items
      : services.items.filter((item) => item.category === selectedCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "design":
        return <PenTool className="w-4 h-4" />;
      case "plants":
        return <Sprout className="w-4 h-4" />;
      case "tools":
        return <Wrench className="w-4 h-4" />;
      default:
        return <LayoutGrid className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#f8faf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#026D03]/10 text-[#026D03] text-sm font-bold mb-4">
            <Sprout className="w-4 h-4 text-[#E78F11]" />
            <span>{services.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#142414] leading-tight mb-4">
            <span>{services.title} </span>
            <span className="text-[#026D03] relative inline-block">
              {services.titleHighlight}
              <span className="absolute bottom-1 right-0 left-0 h-2 bg-[#E78F11]/30 -z-10 rounded-full" />
            </span>
          </h2>

          <p className="text-gray-600 text-lg">{services.description}</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {services.categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#026D03] text-white shadow-lg shadow-[#026D03]/25 scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item: ServiceItem) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image Preview with Number Badge */}
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md text-[#026D03] font-black text-sm flex items-center justify-center shadow-md">
                  {item.id}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#142414] group-hover:text-[#026D03] transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#026D03] group-hover:text-[#E78F11] transition-colors self-start mt-auto"
                >
                  <span>طلب استشارة للخدمة</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
