import { MessageCircle, Phone, ArrowLeft, Sparkles } from "lucide-react";
import { siteContent } from "@/content/siteContent";

export default function CtaSection() {
  const { cta, contact } = siteContent;

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#026D03] via-[#015802] to-[#013f01] text-white relative overflow-hidden"
    >
      {/* Background ambient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFBD10]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E78F11]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#FFBD10] text-sm font-bold mb-6 border border-white/15">
          <Sparkles className="w-4 h-4 text-[#FFBD10]" />
          <span>استشارة وزيارة ميدانية مجانية بالرياض</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight max-w-3xl mx-auto">
          {cta.title}
        </h2>

        <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto mb-10">
          {cta.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-black text-base bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{cta.whatsappLabel}</span>
          </a>

          <a
            href={`tel:${contact.mobile}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base bg-white text-[#026D03] hover:bg-gray-100 shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>{cta.callLabel}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
