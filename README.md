# موقع شركة حدائق اليمامة للتجارة والمقاولات 🌿

موقع حديث وفاخر متكامل مبني باستخدام **Next.js (App Router)**، **TypeScript**، **Tailwind CSS**، و **Lucide React**.

---

## 🚀 التشغيل السريع

### 1. المتطلبات الأساسية
- Node.js (v18.18 أو أحدث)
- npm

### 2. تثبيت الحزم
```bash
npm install
```

### 3. تشغيل خادم التطوير المحلي
```bash
npm run dev
```
افتح المتصفح على: [http://localhost:3000](http://localhost:3000)

### 4. بناء المشروع للإنتاج
```bash
npm run build
npm run start
```

---

## 📂 هيكلية المشروع والمحتوى

```text
garden-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # إعداد الخطوط العربية، الاتجاه RTL، ووسوم الـ SEO
│   │   ├── page.tsx           # تجميع الأقسام وبيانات Schema.org المنظمة
│   │   └── globals.css        # المتغيرات اللونية وأنماط الرسوم المتحركة
│   ├── components/
│   │   ├── Navbar.tsx         # شريط التنقل المتجاوب
│   │   ├── Hero.tsx           # القسم الرئيسي مع العدادات والإحصائيات
│   │   ├── About.tsx          # نبذة عن الشركة، الرؤية، والرسالة والشهادات
│   │   ├── Services.tsx       # بطاقات الخدمات مع فلترة تفاعلية
│   │   ├── Clients.tsx        # شركاء النجاح والجهات الحكومية المعتمدة
│   │   ├── Vision2030.tsx     # الالتزام الوطني برؤية المملكة 2030
│   │   ├── Faq.tsx            # الأسئلة الشائعة بنظام الأكورديون التفاعلي
│   │   ├── CtaSection.tsx     # قسم الحجز والتواصل السريع
│   │   ├── Footer.tsx         # تذييل الصفحة وبيانات الاتصال التفصيلية
│   │   └── FloatingActions.tsx# زر واتساب العائم وزر الصعود للأعلى
│   └── content/
│       └── siteContent.ts     # ملف المحتوى المركزي المفصول بالكامل
├── next.config.ts             # إعدادات النطاقات المسموحة للصور (Unsplash, Wikimedia)
└── package.json
```

---

## 🛠️ دليل التخصيص وإدارة المحتوى

### 1. تعديل بيانات الشركة والنصوص
جميع النصوص والبيانات محفوظة في ملف مركزي واحد:
👉 [`src/content/siteContent.ts`](file:///C:/Users/lenovo/.gemini/antigravity-ide/scratch/garden-website/src/content/siteContent.ts)
- اسم الشركة ورقم الهاتف والعنوان
- أسئلة وأجوبة الـ FAQ
- إحصائيات وأرقام الخبرة والمشاريع

### 2. تغيير الصور
يمكنك استبدال روابط الصور في `siteContent.ts` أو حفظ الصور محلياً داخل مجلد:
`public/images/` واستدعائها بالمسار: `/images/your-image.jpg`.

### 3. تعديل الألوان
تم تعريف لوحة الألوان الخاصة بالهوية داخل:
👉 [`src/app/globals.css`](file:///C:/Users/lenovo/.gemini/antigravity-ide/scratch/garden-website/src/app/globals.css)
- اللون الأساسي الأخضر: `--primary: #026D03`
- اللون الثانوي البرتقالي / الذهبي: `--accent: #E78F11`
- الخلفيات الفاتحة: `--light: #f8faf5`

### 4. ربط نظام إدارة محتوى (CMS) مستقبلاً
بفضل فصل المحتوى في `src/content/siteContent.ts`، يمكنك استبدال هذا الملف بدوال جلب بيانات غير متزامنة (Async Server Components) من أي CMS مثل:
- Strapi
- Sanity
- WordPress REST API
- Supabase
دون الحاجة لتعديل المكونات الرسومية إطلاقاً.
