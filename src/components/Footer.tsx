import Link from "next/link";
import Image from "next/image";
import {
  Sprout,
  MapPin,
  Smartphone,
  Phone,
  Mail,
  ChevronLeft,
} from "lucide-react";
import { siteContent } from "@/content/siteContent";

export default function Footer() {
  const { business, contact, agencyCredit } = siteContent;

  return (
    <footer className="bg-[#142414] text-white pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: About & Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="#home" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center shadow-md overflow-hidden">
                <Image
                  src={business.logo}
                  alt={business.name}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-white">
                  {business.name}
                </span>
                <span className="text-xs text-[#FFBD10] font-medium -mt-1">
                  {business.tagline}
                </span>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              {business.description}
            </p>

            <div className="pt-2 text-xs text-[#FFBD10] font-semibold">
              سجل تجاري وتصنيف مقاولات درجة ثالثة معتمد
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-8 after:h-0.5 after:bg-[#E78F11]">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link
                  href="#home"
                  className="hover:text-[#FFBD10] transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-[#E78F11]" />
                  <span>الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-[#FFBD10] transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-[#E78F11]" />
                  <span>من نحن</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-[#FFBD10] transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-[#E78F11]" />
                  <span>خدماتنا</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#clients"
                  className="hover:text-[#FFBD10] transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-[#E78F11]" />
                  <span>عملاؤنا</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-[#FFBD10] transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-[#E78F11]" />
                  <span>الأسئلة الشائعة</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-8 after:h-0.5 after:bg-[#E78F11]">
              أبرز الخدمات
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li className="flex items-center gap-1.5">
                <ChevronLeft className="w-3.5 h-3.5 text-[#E78F11]" />
                <span>تصميم وتنسيق الحدائق</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronLeft className="w-3.5 h-3.5 text-[#E78F11]" />
                <span>المشاتل وتوريد الأشجار</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronLeft className="w-3.5 h-3.5 text-[#E78F11]" />
                <span>شبكات الري الذكية والأوتوماتيكية</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronLeft className="w-3.5 h-3.5 text-[#E78F11]" />
                <span>النجيلة الصناعية والطبيعية FIFA</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronLeft className="w-3.5 h-3.5 text-[#E78F11]" />
                <span>مظلات الجلسات والحدادة والإنارة</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-8 after:h-0.5 after:bg-[#E78F11]">
              تواصل معنا
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFBD10] shrink-0 mt-1" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-[#FFBD10] shrink-0" />
                <a
                  href={`tel:${contact.mobile}`}
                  className="hover:text-[#FFBD10] transition"
                  dir="ltr"
                >
                  {contact.mobile}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FFBD10] shrink-0" />
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-[#FFBD10] transition"
                  dir="ltr"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FFBD10] shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-[#FFBD10] transition"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="text-center md:text-right">
            © {new Date().getFullYear()} {business.name}. جميع الحقوق محفوظة.
          </div>

          {/* Agency Attribution */}
          {agencyCredit && (
            <a
              href={agencyCredit.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${agencyCredit.text} ${agencyCredit.agency} - تواصل عبر واتساب لطلب تصميم موقع`}
              title="تواصل مع وكالة نقرة لتصميم وتطوير موقعك الإلكتروني عبر واتساب"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#026D03]/40 border border-white/10 hover:border-[#25D366]/60 text-white/80 hover:text-white transition-all duration-300 shadow-sm text-xs group"
            >
              <span className="text-white/60 group-hover:text-white/90 transition-colors">
                {agencyCredit.text}
              </span>
              <span className="font-bold text-[#FFBD10] group-hover:text-emerald-300 transition-colors">
                {agencyCredit.agency}
              </span>
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 fill-[#25D366] group-hover:scale-110 transition-transform shrink-0"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>
          )}

          <div className="text-white/40 text-center md:text-left">
            موقع معتمد وفق المعايير القياسية العالمية
          </div>
        </div>
      </div>
    </footer>
  );
}
