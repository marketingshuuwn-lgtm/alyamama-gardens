import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Vision2030 from "@/components/Vision2030";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { siteContent } from "@/content/siteContent";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteContent.business.name,
    description: siteContent.business.description,
    telephone: siteContent.contact.mobile,
    email: siteContent.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "الدائري الغربي – مخرج 29",
      addressLocality: "الرياض",
      addressCountry: "SA",
    },
    areaServed: "المملكة العربية السعودية",
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Clients />
          <Vision2030 />
          <Faq />
          <CtaSection />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </>
  );
}
