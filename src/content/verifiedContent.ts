// Sources reviewed on 2026-10-26: https://alyamamagardens.com/ and its gallery.
export const departments = {
 projects:{name:'الإدارة والمشاريع',phone:'966505505933',display:'050 550 5933',address:'الرياض · الدائري الغربي · مخرج 29',prompt:'مشروع تنسيق حدائق أو طلب توريد'},
 plants:{name:'معرض النباتات',phone:'966502399977',display:'050 239 9977',address:'الرياض · طريق الملك فهد · حي العارض',prompt:'نباتات داخلية أو خارجية'},
 tools:{name:'معرض المعدات والمستلزمات',phone:'966554952888',display:'055 495 2888',address:'الرياض · الدائري الجنوبي · مخرج 21',prompt:'معدات وأدوات ومستلزمات زراعية'},
 nursery:{name:'المشاتل الزراعية',phone:'966551133644',display:'055 113 3644',address:'الرياض · حفيرة نساح',prompt:'أشجار وشتلات ومشاتل'},
} as const;
export type DepartmentId=keyof typeof departments;
export const socials=[
 {name:'Instagram',label:'إنستغرام',href:'https://www.instagram.com/alyamamagardens/'},
 {name:'LinkedIn',label:'لينكدإن',href:'https://www.linkedin.com/company/alyamamagardens/'},
 {name:'Facebook',label:'فيسبوك',href:'https://www.facebook.com/yamamagardens'},
 {name:'Snapchat',label:'سناب شات',href:'https://www.snapchat.com/add/alyamamagardens'},
 {name:'YouTube',label:'يوتيوب',href:'https://www.youtube.com/@alyamamagardens1471'},
 {name:'X',label:'إكس',href:'https://x.com/alyamamagardens'},
];
export const services:{title:string;description:string;department:DepartmentId;image:string;tag:string}[]=[
 {title:'تصميم وتنفيذ الحدائق',description:'من تخطيط المساحة إلى الزراعة والتنسيق، للمنازل والمنشآت والمشاريع.',department:'projects',image:'/official/photo-04.webp',tag:'تصميم وتنفيذ'},
 {title:'النباتات والأحواض',description:'نباتات داخلية وخارجية، وأحواض وإكسسوارات تختار منها ما يناسب مكانك.',department:'plants',image:'/official/photo-07.webp',tag:'معرض النباتات'},
 {title:'المشاتل وتوريد الأشجار',description:'أشجار وشتلات واحتياجات زراعية للمساحات الصغيرة والمشاريع.',department:'nursery',image:'/official/photo-05.webp',tag:'مشاتل وزراعة'},
 {title:'أنظمة وشبكات الري',description:'تصميم وتنفيذ شبكات الري، ومتابعة احتياجات المساحة من المياه.',department:'projects',image:'/official/photo-13.webp',tag:'ري وصيانة'},
 {title:'المعدات والمستلزمات',description:'أدوات ومعدات زراعية، وأسمدة وبذور ومستلزمات للعناية بالنباتات.',department:'tools',image:'/official/photo-10.webp',tag:'معدات وأدوات'},
 {title:'صيانة وتشغيل الحدائق',description:'العناية بالنباتات والمساحات الخضراء، ومتابعة أعمال الصيانة والتشغيل.',department:'projects',image:'/official/photo-01.webp',tag:'عناية مستمرة'},
];
export const gallery=[
 {image:'/official/photo-04.webp',title:'الخضرة في المساحات الخارجية',category:'تنسيق حدائق'},
 {image:'/official/photo-03.webp',title:'تفاصيل الزراعة والتنسيق',category:'تنسيق حدائق'},
 {image:'/official/photo-01.webp',title:'من العمل الميداني',category:'زراعة وتنفيذ'},
 {image:'/official/photo-05.webp',title:'من المشاتل الزراعية',category:'المشاتل'},
 {image:'/official/photo-08.webp',title:'ألوان تضيف حياة للمكان',category:'النباتات'},
];
export const faqs=[
 {q:'كيف أبدأ طلب تنسيق حديقة؟',a:'اختر «مشروع حديقة أو توريد»، واكتب الحي ونوع المساحة. تفتح لك رسالة جاهزة إلى الإدارة لتوضيح الاحتياج والخطوة التالية.'},
 {q:'كيف أعرف تكلفة المشروع ومدة التنفيذ؟',a:'تختلف التكلفة والمدة حسب المساحة والتصميم والزراعة والأعمال المطلوبة. يحدد الفريق التفاصيل معك بعد معرفة احتياجك.'},
 {q:'أبحث عن نبتة أو حوض؛ من أتواصل معه؟',a:'اختر «نباتات وأحواض» للتواصل مع معرض النباتات في حي العارض. يمكنك السؤال عن النوع والحجم والسعر والتوفر قبل الزيارة.'},
 {q:'هل يمكن طلب أعمال صيانة أو شبكات ري؟',a:'نعم، تتضمن أنشطة الشركة الصيانة والتشغيل وشبكات الري. اذكر نوع العمل وموقعه عند التواصل مع الإدارة والمشاريع.'},
 {q:'هل تتوفر معدات ومستلزمات زراعية؟',a:'يمكنك التواصل مع معرض المعدات والمستلزمات في مخرج 21 للاستفسار عن الأدوات والمعدات والأسمدة والبذور والتوفر.'},
];
