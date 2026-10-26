import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './landscape.css';
const alyamama=localFont({src:'./fonts/Alyamama-Variable.ttf',variable:'--font-alyamama',display:'swap',weight:'300 900'});
export const metadata: Metadata={metadataBase:new URL('https://alyamama-gardens.vercel.app'),title:'حدائق اليمامة | حدائق ونباتات ومشاتل في الرياض',description:'تصميم وتنفيذ الحدائق، النباتات الداخلية والخارجية، المشاتل والمستلزمات الزراعية، وشبكات الري والصيانة. اختر احتياجك وتواصل مع القسم المناسب في حدائق اليمامة.',robots:{index:false,follow:false},openGraph:{title:'حدائق اليمامة — نمتلك الخبرة ونهديكم التميز',description:'حديقة تتخيلها. نبتة تختارها. ومساحة خضراء تعيش تفاصيلها.',type:'website',locale:'ar_SA',images:[{url:'/official/photo-04.webp',alt:'من مكتبة حدائق اليمامة'}]}};
export const viewport: Viewport={themeColor:'#185c35',width:'device-width',initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl" className={alyamama.variable}><body>{children}</body></html>;}
