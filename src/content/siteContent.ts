export interface HeroStat {
  value: number;
  suffix?: string;
  label: string;
}

export interface FloatingBadge {
  title: string;
  subtitle: string;
  icon: string;
}

export interface HeroSection {
  eyebrow: string;
  headline: string;
  highlightText: string;
  headlineEnd: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: HeroStat[];
  floatingCard1: FloatingBadge;
  floatingCard2: FloatingBadge;
  image: string;
}

export interface AboutVisionMission {
  title: string;
  description: string;
  icon: string;
}

export interface AboutSection {
  tag: string;
  headingPrefix: string;
  headingHighlight1: string;
  headingMiddle: string;
  headingHighlight2: string;
  description: string;
  yearsOfExperience: string;
  experienceLabel: string;
  vision: AboutVisionMission;
  mission: AboutVisionMission;
  certifications: string[];
  mainImage: string;
  subImage: string;
}

export interface ServiceItem {
  id: string;
  category: "all" | "design" | "plants" | "tools";
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface ClientStat {
  value: number;
  suffix?: string;
  label: string;
}

export interface ClientPartner {
  name: string;
  category: "government" | "corporate";
  logo: string;
}

export interface ClientsSection {
  tag: string;
  title: string;
  titleHighlight: string;
  description: string;
  logos: ClientPartner[];
  stats: ClientStat[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface VisionPillar {
  number: string;
  title: string;
  description: string;
}

export interface Vision2030Section {
  tag: string;
  title: string;
  titleHighlight: string;
  description: string;
  image: string;
  logo: string;
  pillars: VisionPillar[];
}

export interface ContactInfo {
  address: string;
  mobile: string;
  phone: string;
  email: string;
  whatsapp: string;
}

export interface AgencyCredit {
  text: string;
  agency: string;
  whatsapp: string;
}

export interface SiteContent {
  business: {
    name: string;
    tagline: string;
    description: string;
    logo: string;
  };
  navigation: { label: string; href: string }[];
  hero: HeroSection;
  about: AboutSection;
  services: {
    tag: string;
    title: string;
    titleHighlight: string;
    description: string;
    categories: { id: string; label: string; icon: string }[];
    items: ServiceItem[];
  };
  clients: ClientsSection;
  faq: {
    tag: string;
    title: string;
    titleHighlight: string;
    ctaTitle: string;
    ctaDesc: string;
    items: FaqItem[];
    image: string;
  };
  vision2030: Vision2030Section;
  cta: {
    title: string;
    description: string;
    whatsappLabel: string;
    callLabel: string;
  };
  contact: ContactInfo;
  agencyCredit: AgencyCredit;
}

export const siteContent: SiteContent = {
  business: {
    name: "حدائق اليمامة",
    tagline: "للتجارة والمقاولات",
    description:
      "شركة حدائق اليمامة للتجارة والمقاولات — خبرة تمتد لأكثر من 15 عاماً في تصميم وتنفيذ الحدائق والمشاتل وشبكات الري بأعلى معايير الجودة العالمية.",
    logo: "/images/logo.png",
  },
  navigation: [
    { label: "الرئيسية", href: "#home" },
    { label: "من نحن", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "عملاؤنا", href: "#clients" },
    { label: "الأسئلة الشائعة", href: "#faq" },
    { label: "رؤية 2030", href: "#vision" },
  ],
  hero: {
    eyebrow: "شركة معتمدة - تصنيف الدرجة الثالثة",
    headline: "نمنحك",
    highlightText: "حديقة أحلامك",
    headlineEnd: "بلمسة طبيعية تبقى للأبد",
    description:
      "شركة حدائق اليمامة للتجارة والمقاولات — خبرة تمتد لسنوات في تصميم وتنفيذ الحدائق والمشاتل وشبكات الري بأعلى معايير الجودة العالمية.",
    primaryCta: {
      label: "احجز استشارتك المجانية",
      href: "#contact",
    },
    secondaryCta: {
      label: "استعرض خدماتنا",
      href: "#services",
    },
    stats: [
      { value: 500, suffix: "+", label: "مشروع منجز" },
      { value: 15, suffix: "+", label: "سنة خبرة" },
      { value: 98, suffix: "%", label: "رضا العملاء" },
    ],
    floatingCard1: {
      title: "شهادات جودة عالمية",
      subtitle: "ISO 9001:2015",
      icon: "Award",
    },
    floatingCard2: {
      title: "عملاء وشركاء نجاح",
      subtitle: "+500 جهة",
      icon: "Users",
    },
    image: "/images/project-1.jpg",
  },
  about: {
    tag: "تعرف علينا",
    headingPrefix: "نمتلك",
    headingHighlight1: "الخبرة",
    headingMiddle: "... ونهديكم",
    headingHighlight2: "التميز",
    description:
      "منذ أن أنشئت شركة حدائق اليمامة للتجارة والمقاولات وبدأت في ممارسة نشاطها وسيرتها تنمو لدى عملائها في المملكة. نقوم بأعمال تصميم وتنفيذ الحدائق والمتنزهات وشبكات الري وكذلك أعمال الصيانة تحت إشراف فريق من المهندسين والفنيين ذوي الكفاءة العالية.",
    yearsOfExperience: "+15",
    experienceLabel: "عاماً من التميز",
    vision: {
      title: "رؤيتنا",
      description: "نقدم أفضل الخدمات ونواكب التطور وفق رؤية المملكة 2030 ومبادرة السعودية الخضراء.",
      icon: "Eye",
    },
    mission: {
      title: "رسالتنا",
      description: "تقديم خدمات عالية الجودة بإتباع أحدث المعايير الهندسية والفنية المعتمدة عالمياً.",
      icon: "Target",
    },
    certifications: [
      "ISO 9001:2015",
      "ISO 14001:2015",
      "ISO 45001:2018",
      "تصنيف مقاولات درجة ثالثة",
      "لاندسكيب معتمد",
    ],
    mainImage: "/images/project-2.jpg",
    subImage: "/images/plants-nursery.jpg",
  },
  services: {
    tag: "خدماتنا المتميزة",
    title: "حلول",
    titleHighlight: "زراعية متكاملة",
    description:
      "نقدم باقة شاملة من الخدمات الزراعية وتنسيق الحدائق بأعلى معايير الجودة والاحترافية",
    categories: [
      { id: "all", label: "الكل", icon: "LayoutGrid" },
      { id: "design", label: "تصميم وتنفيذ", icon: "PenTool" },
      { id: "plants", label: "نباتات ومشاتل", icon: "Sprout" },
      { id: "tools", label: "معدات ومظلات", icon: "Wrench" },
    ],
    items: [
      {
        id: "01",
        category: "design",
        title: "تصميم وتنفيذ الحدائق",
        description:
          "تصاميم إبداعية ثلاثية الأبعاد تناسب ذوقك وبيئة منزلك، مع تنفيذ هندسي بأيدي فريق متخصص.",
        image: "/images/project-1.jpg",
        icon: "Compass",
      },
      {
        id: "02",
        category: "plants",
        title: "المشاتل الزراعية وتوريد الأشجار",
        description:
          "توفير جميع أنواع الأشجار، الشجيرات الصحراوية، وشتلات الزهور بمواصفات عالية الجودة.",
        image: "/images/plants-nursery.jpg",
        icon: "TreePine",
      },
      {
        id: "03",
        category: "plants",
        title: "النباتات الداخلية والخارجية",
        description:
          "معرض متكامل يضم أرقى أنواع النباتات الداخلية والخارجية المقاومة للحرارة مع المراكن الفاخرة.",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80",
        icon: "Leaf",
      },
      {
        id: "04",
        category: "tools",
        title: "المعدات والأدوات الزراعية",
        description:
          "توفير كافة الاحتياجات من الأدوات، الأسمدة العضوية، المبيدات الآمنة، وبذور الزهور المعتمدة.",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
        icon: "Wrench",
      },
      {
        id: "05",
        category: "design",
        title: "أنظمة وشبكات الري الذكية",
        description:
          "تصميم وتنفيذ شبكات ري أوتوماتيكية مبرمجة ومربوطة بحساسات الطقس لترشيد استهلاك المياه.",
        image: "/images/irrigation.jpg",
        icon: "Droplets",
      },
      {
        id: "06",
        category: "design",
        title: "الكهرباء والإنارة التجميلية",
        description:
          "حلول متكاملة للإنارة الخارجية والسبوت لايت المقاوم للماء لإبراز جمال الحديقة والنباتات ليلاً.",
        image: "/images/lighting.jpg",
        icon: "Lightbulb",
      },
      {
        id: "07",
        category: "tools",
        title: "الحدادة والمظلات والبرجولات",
        description:
          "تصميم وتصنيع المظلات والبرجولات وجلسات الحدائق العصرية من الحديد المعالج والأخشاب المعالجة.",
        image: "/images/canopy.jpg",
        icon: "Umbrella",
      },
      {
        id: "08",
        category: "design",
        title: "النجيلة الصناعية والطبيعية",
        description:
          "توريد وتركيب العشب الطبيعي المقاوم للملوحة والعشب الصناعي بكثافات عالية ومواصفات FIFA.",
        image: "/images/project-2.jpg",
        icon: "Sparkles",
      },
    ],
  },
  clients: {
    tag: "عملاؤنا وشركاؤنا",
    title: "نفخر بثقة",
    titleHighlight: "كبرى الوزارات والمؤسسات",
    description:
      "نفخر بتنفيذ مشاريع عملاقة بالتعاون مع كبرى القطاعات الحكومية وشبه الحكومية والشركات الرائدة بالمملكة",
    logos: [
      {
        name: "وزارة الداخلية",
        category: "government",
        logo: "/clients/interior-ministry.svg",
      },
      {
        name: "وزارة الدفاع",
        category: "government",
        logo: "/clients/defense-ministry.svg",
      },
      {
        name: "وزارة الحرس الوطني",
        category: "government",
        logo: "/clients/national-guard.svg",
      },
      {
        name: "القوات البحرية الملكية السعودية",
        category: "government",
        logo: "/clients/royal-navy.png",
      },
      {
        name: "أمانة منطقة الرياض",
        category: "government",
        logo: "/clients/riyadh-municipality.svg",
      },
      {
        name: "أمانة العاصمة المقدسة",
        category: "government",
        logo: "/clients/makkah-municipality.svg",
      },
      {
        name: "أمانة المدينة المنورة",
        category: "government",
        logo: "/clients/madinah-municipality.svg",
      },
      {
        name: "أمانة المنطقة الشرقية",
        category: "government",
        logo: "/clients/eastern-municipality.svg",
      },
      {
        name: "أمانة محافظة جدة",
        category: "government",
        logo: "/clients/jeddah-municipality.svg",
      },
      {
        name: "الشركة الوطنية للإسكان NHC",
        category: "corporate",
        logo: "/clients/nhc.svg",
      },
      {
        name: "مجموعة بن لادن السعودية",
        category: "corporate",
        logo: "/clients/binladen-group.png",
      },
      {
        name: "نسما للصناعات المتحدة",
        category: "corporate",
        logo: "/clients/nesma.jpg",
      },
      {
        name: "نباتات للمقاولات",
        category: "corporate",
        logo: "/clients/nabatat.png",
      },
      {
        name: "شركة سيتي سكيب",
        category: "corporate",
        logo: "/clients/citiscape.svg",
      },
      {
        name: "سالكو السعودية",
        category: "corporate",
        logo: "/clients/salco.jpeg",
      },
      {
        name: "شركة الأومير للمقاولات",
        category: "corporate",
        logo: "/clients/alomeir.jpg",
      },
    ],
    stats: [
      { value: 500, suffix: "+", label: "مشروع حكومي وتجاري" },
      { value: 150, suffix: "+", label: "عميل مؤسسي معتمد" },
      { value: 25, suffix: "+", label: "مدينة ومنطقة مغطاة" },
      { value: 15, suffix: " سنة", label: "خبرة متواصلة بالسوق" },
    ],
  },
  faq: {
    tag: "الأسئلة الشائعة",
    title: "أسئلتك",
    titleHighlight: "في بالنا... وأجبناها لك",
    ctaTitle: "لم تجد إجابة لسؤالك؟",
    ctaDesc: "تواصل معنا مباشرة وسيجيبك مستشارونا بكل وضوح وتفصيل",
    items: [
      {
        question: "كم يكلف تنسيق حديقة منزلية في الرياض؟",
        answer:
          "تختلف الأسعار حسب المساحة ونوع النباتات والخدمات المطلوبة. لكن نوفر باقات تبدأ من أسعار معقولة وتناسب مختلف الميزانيات، مع استشارة وزيارة ميدانية مجانية لتحديد التكلفة بدقة.",
      },
      {
        question: "هل تقدمون زيارة ميدانية قبل البدء في المشروع؟",
        answer:
          "بالتأكيد! نوفر زيارة مجانية داخل الرياض لفحص الأرض، فهم احتياجاتك بدقة، وتقديم تصور ومخطط مبدئي يناسب ذوقك وموقعك.",
      },
      {
        question: "النباتات التي تزرعونها... هل تتحمل حرارة جو الرياض؟",
        answer:
          "طبعاً. نختار لك نباتات وأشجار مخصصة للمناخ الصحراوي، تتحمل الجفاف والحرارة الشديدة، وتعطي منظراً طبيعياً أخضراً يدوم طويلاً.",
      },
      {
        question: "كم المدة التي يحتاجها تنفيذ الحديقة بالكامل؟",
        answer:
          "يعتمد على حجم المشروع وتفاصيله، لكن في أغلب الحالات ننجز الحدائق المنزلية خلال 3 إلى 7 أيام عمل، مع التزام صارم بأعلى معايير الجودة والمواعيد المحددة.",
      },
      {
        question: "هل تقدمون خدمة صيانة دورية بعد التنفيذ؟",
        answer:
          "نعم، نوفر عقود وخطط صيانة شهرية أو حسب الطلب. نتابع نمو النباتات، صيانة أنظمة الري والتسميد، لضمان بقاء حديقتك بأبهى حلة.",
      },
      {
        question: "هل تركبون نظام ري ذكي؟ وكيف يعمل؟",
        answer:
          "نعم، نوفر أحدث أنظمة الري الأوتوماتيكية الذكية القابلة للبرمجة والمربوطة بحساسات الطقس والتحكم بالهاتف الذكي، مما يوفر استهلاك المياه بنسبة تصل إلى 50%.",
      },
      {
        question: "ما الذي يميز حدائق اليمامة عن غيرها؟",
        answer:
          "خبرة تفوق 15 عاماً، تصنيف مقاولات درجة ثالثة، شهادات أيزو عالمية، طاقم هندسي متخصص، خامات فائقة الجودة، وأسعار عادلة ومدروسة مع ضمان شامل على الأعمال.",
      },
    ],
    image: "/images/project-1.jpg",
  },
  vision2030: {
    tag: "التزامنا الوطني",
    title: "التزامنا برؤية",
    titleHighlight: "المملكة 2030",
    description:
      "في حدائق اليمامة، يتجاوز التزامنا مجرد تنسيق المساحات الخضراء ليصبح جزءاً فاعلاً في مبادرة السعودية الخضراء وتحقيق أهداف رؤية المملكة 2030، إيماناً بأن كل مساحة خضراء هي استثمار في جودة حياة الأجيال القادمة.",
    image: "/images/project-2.jpg",
    logo: "/images/vision-2030.png",
    pillars: [
      {
        number: "01",
        title: "تعزيز جودة الحياة والمبادرة الخضراء",
        description:
          "تصميم حدائق ومساحات خارجية تلامس الإنسان وتوفر بيئات هادئة وجذابة تعزز الراحة النفسية والترابط المجتمعي.",
      },
      {
        number: "02",
        title: "الاستدامة البيئية وترشيد الموارد",
        description:
          "استخدام أحدث تقنيات الري الذكي والنباتات الملائمة للبيئة المحلية لترشيد استهلاك المياه والمحافظة على الموارد الطبيعية.",
      },
      {
        number: "03",
        title: "الابتكار والتطوير التقني المتقدم",
        description:
          "توظيف النمذجة ثلاثية الأبعاد، والحلول الإنشائية المستدامة، وأنظمة التحكم الذكية في جميع مشاريعنا.",
      },
    ],
  },
  cta: {
    title: "هل تتخيل حديقة أحلامك حول منزلك؟",
    description:
      "دعنا نحول فكرتك إلى واقع بديع. تواصل معنا اليوم واحصل على استشارة وزيارة ميدانية مجانية لفحص الموقع وتقديم أفضل الحلول.",
    whatsappLabel: "احجز استشارتك عبر واتساب",
    callLabel: "اتصل بنا هاتفياً",
  },
  contact: {
    address: "الرياض – الدائري الغربي – مخرج 29، المملكة العربية السعودية",
    mobile: "+966505505933",
    phone: "+966114399955",
    email: "info@alyamamagardens.com",
    whatsapp: "https://wa.me/966505505933",
  },
  agencyCredit: {
    text: "تنفيذ :",
    agency: "وكالة نقرة",
    whatsapp:
      "https://wa.me/966567595371?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%88%D9%83%D8%A7%D9%84%D8%A9%20%D9%86%D9%82%D8%B1%D8%A9%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D9%85%D9%88%D9%82%D8%B9%20%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A",
  },
};
