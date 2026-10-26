'use client';
import {useRef} from 'react';
import {Menu} from 'lucide-react';
export default function MobileMenu(){const menu=useRef<HTMLDetailsElement>(null);return <details ref={menu} className="mobile-menu"><summary aria-label="القائمة الرئيسية"><Menu size={23}/></summary><nav aria-label="قائمة الجوال" onClick={e=>{if(e.target instanceof Element&&e.target.closest('a'))menu.current?.removeAttribute('open');}}><a href="#services">خدماتنا</a><a href="#gallery">من مكتبتنا</a><a href="#about">عن اليمامة</a><a href="#clients">عملاؤنا</a><a href="#contact">الفروع والتواصل</a></nav></details>;}
