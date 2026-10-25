import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const alyamama = localFont({
  src: "./fonts/Alyamama-Variable.ttf",
  variable: "--font-alyamama",
  display: "swap",
  weight: "300 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alyamama-gardens.vercel.app"),
  title: "حدائق اليمامة للتجارة والمقاولات | تصميم وتنفيذ الحدائق وشبكات الري بالرياض",
  description:
    "شركة حدائق اليمامة للتجارة والمقاولات – تصنيف درجة ثالثة. خبرة تفوق 15 عاماً في تصميم وتنفيذ الحدائق، المشاتل، النباتات الداخلية والخارجية، شبكات الري الذكية، والنجيلة الصناعية بالرياض والمملكة.",
  keywords: [
    "حدائق اليمامة",
    "تنسيق حدائق بالرياض",
    "تصميم حدائق",
    "مشاتل زراعية",
    "شبكات ري ذكية",
    "عشب صناعي الرياض",
    "مظلات حدائق",
  ],
  authors: [{ name: "حدائق اليمامة" }],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/images/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/images/logo.png" },
    ],
  },
  openGraph: {
    title: "حدائق اليمامة للتجارة والمقاولات | تصميم وتنفيذ الحدائق والمشاتل",
    description:
      "خبرة تمتد لسنوات في تصميم وتنفيذ الحدائق والمشاتل وشبكات الري بأعلى معايير الجودة العالمية.",
    type: "website",
    locale: "ar_SA",
    siteName: "حدائق اليمامة",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "شعار حدائق اليمامة",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#026D03",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${alyamama.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alyamama:wght@300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#f8faf5] text-gray-900 selection:bg-[#E78F11] selection:text-white">
        {children}
      </body>
    </html>
  );
}
