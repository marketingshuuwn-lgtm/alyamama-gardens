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
  const { business, contact } = siteContent;

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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {business.name}. جميع الحقوق محفوظة.
          </div>
          <div className="text-white/40">
            موقع معتمد وفق المعايير القياسية العالمية
          </div>
        </div>
      </div>
    </footer>
  );
}
