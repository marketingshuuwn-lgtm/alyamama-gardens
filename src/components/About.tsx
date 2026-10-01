import Image from "next/image";
import { Sprout, Eye, Target, CheckCircle2, Award } from "lucide-react";
import { siteContent } from "@/content/siteContent";

export default function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="py-24 bg-[#faf7ef] relative overflow-hidden">
      {/* Decorative leaf watermarks */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-[#026D03]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Visual Images Composition */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image */}
              <div className="relative h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={about.mainImage}
                  alt="من نحن - حدائق اليمامة"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Sub Image Overlay */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-52 sm:w-60 h-52 sm:h-60 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#faf7ef] hidden sm:block">
                <Image
                  src={about.subImage}
                  alt="فريق العمل الميداني"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-8 bg-gradient-to-tr from-[#E78F11] to-[#FFBD10] text-white p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center animate-float">
                <span className="text-4xl sm:text-5xl font-black leading-none">
                  {about.yearsOfExperience}
                </span>
                <span className="text-sm font-bold mt-1 text-white/95">
                  {about.experienceLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Text & Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#026D03]/10 text-[#026D03] text-sm font-bold mb-4">
              <Sprout className="w-4 h-4 text-[#E78F11]" />
              <span>{about.tag}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#142414] leading-tight mb-6">
              <span>{about.headingPrefix} </span>
              <span className="text-[#E78F11]">{about.headingHighlight1}</span>
              <span>{about.headingMiddle} </span>
              <span className="text-[#026D03]">{about.headingHighlight2}</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {about.description}
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#026D03]/10 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-[#026D03]/10 text-[#026D03] flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#142414] mb-2">
                  {about.vision.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {about.vision.description}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#026D03]/10 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-[#E78F11]/15 text-[#E78F11] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#142414] mb-2">
                  {about.mission.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {about.mission.description}
                </p>
              </div>
            </div>

            {/* Certifications Pills */}
            <div className="pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                الاعتمادات والتراخيص الرسمية
              </h5>
              <div className="flex flex-wrap gap-2.5">
                {about.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-[#026D03] border border-[#026D03]/20 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E78F11]" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
