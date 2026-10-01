import Image from "next/image";
import { Award, Users, ArrowLeft, Play, ShieldCheck, Sparkles } from "lucide-react";
import { siteContent } from "@/content/siteContent";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center bg-gradient-to-br from-[#026D03] via-[#015802] to-[#013f01] text-white overflow-hidden"
    >
      {/* Decorative background orbs & grids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#FFBD10]/15 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#E78F11]/20 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-[#0a8f0c]/30 blur-2xl" />
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Classification Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFBD10] text-sm font-bold shadow-inner mb-6">
              <ShieldCheck className="w-4 h-4 text-[#FFBD10]" />
              <span>{hero.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.2] tracking-tight mb-6">
              <span>{hero.headline} </span>
              <span className="relative inline-block text-[#FFBD10]">
                {hero.highlightText}
                <span className="absolute bottom-1 right-0 left-0 h-2.5 bg-[#E78F11]/40 -z-10 rounded-full" />
              </span>
              <br />
              <span className="text-white/95">{hero.headlineEnd}</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl mb-8 font-normal">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href={hero.primaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-black text-base bg-gradient-to-r from-[#E78F11] to-[#FFBD10] text-white shadow-xl shadow-[#E78F11]/30 hover:shadow-2xl hover:shadow-[#E78F11]/50 hover:-translate-y-1 transition-all duration-300"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowLeft className="w-5 h-5" />
              </a>

              <a
                href={hero.secondaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-bold text-base bg-white/10 hover:bg-white hover:text-[#026D03] border border-white/30 backdrop-blur-sm transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
                <span>{hero.secondaryCta.label}</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/15 w-full max-w-lg">
              {hero.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-baseline text-3xl sm:text-4xl font-black text-[#FFBD10] tracking-tight">
                    <span>{stat.value}</span>
                    <span className="text-2xl">{stat.suffix}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-white/80 font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow border ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#FFBD10] to-[#026D03] rounded-[2.5rem] blur-lg opacity-40 animate-pulse" />

              {/* Main Image Card */}
              <div className="relative rounded-[2.2rem] overflow-hidden border-2 border-white/20 shadow-2xl bg-[#014d02] aspect-[4/5]">
                <Image
                  src={hero.image}
                  alt="حدائق اليمامة - تصميم وتنسيق الحدائق"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142414]/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1 - ISO Certificate */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-black/15 flex items-center gap-3.5 border border-white/80 animate-float text-gray-900">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#026D03] to-[#0a8f0c] flex items-center justify-center text-white shadow-md shadow-[#026D03]/30">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-500">
                    {hero.floatingCard1.title}
                  </h4>
                  <p className="text-sm font-black text-[#026D03]">
                    {hero.floatingCard1.subtitle}
                  </p>
                </div>
              </div>

              {/* Floating Badge 2 - Happy Clients */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-black/15 flex items-center gap-3.5 border border-white/80 text-gray-900">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E78F11] to-[#FFBD10] flex items-center justify-center text-white shadow-md shadow-[#E78F11]/30">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-500">
                    {hero.floatingCard2.title}
                  </h4>
                  <p className="text-sm font-black text-[#E78F11]">
                    {hero.floatingCard2.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
