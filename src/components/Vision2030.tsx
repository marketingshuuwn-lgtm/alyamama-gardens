import Image from "next/image";
import { Flag, Sparkles } from "lucide-react";
import { siteContent } from "@/content/siteContent";

export default function Vision2030() {
  const { vision2030 } = siteContent;

  return (
    <section id="vision" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E78F11]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Visual with Vision 2030 Emblem */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#faf7ef]">
                <Image
                  src={vision2030.image}
                  alt="رؤية المملكة 2030 - حدائق اليمامة"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Vision 2030 Logo Badge */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 animate-float">
                <div className="relative w-20 h-14 flex items-center justify-center">
                  <Image
                    src={vision2030.logo}
                    alt="شعار رؤية السعودية 2030"
                    width={80}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h5 className="text-xs text-gray-500 font-medium">شركاؤنا في</h5>
                  <p className="text-base font-black text-[#026D03]">رؤية السعودية 2030</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars & Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#026D03]/10 text-[#026D03] text-sm font-bold mb-4">
              <Flag className="w-4 h-4 text-[#E78F11]" />
              <span>{vision2030.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#142414] leading-tight mb-6">
              <span>{vision2030.title} </span>
              <span className="text-[#026D03]">{vision2030.titleHighlight}</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {vision2030.description}
            </p>

            {/* Pillars list */}
            <div className="space-y-4">
              {vision2030.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-[#faf7ef] p-6 rounded-2xl flex gap-5 items-start border-r-4 border-[#E78F11] hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#026D03] to-[#0a8f0c] text-white flex items-center justify-center font-black text-lg shrink-0 shadow-md shadow-[#026D03]/20">
                    {pillar.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#142414] mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
