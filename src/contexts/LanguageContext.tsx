import React, { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextType {
  language: "en" | "ar";
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    home: "Home",
    aboutUs: "About Us",
    ourProducts: "Our Products",
    gallery: "Gallery",
    portfolio: "Portfolio",
    news: "News",
    contactUs: "Contact Us",

    // Products
    grpPipes: "GRP / GRV / GRE Pipes",
    specialParts: "Special Parts",
    tanks: "Tanks",
    manholeCovers: "Manhole Covers",
    lightingPoles: "Lighting Poles",
    cableTrays: "Cable Trays & Ladders",
    gratings: "Gratings & Walkways",
    stairs: "Stairs & Handrails",

    // Hero Section
    heroTitle: "Leading Fiberglass Solutions in Egypt",
    heroSubtitle:
      "Egyptian manufacturer specialized in GRP/GRV/GRE products for infrastructure and industrial applications",
    learnMore: "Learn More",
    // ourProducts: "Our Products",

    // About Us
    aboutTitle: "About Delta Fiber Egypt",
    aboutDescription:
      "Egyptian company specialized in fiberglass manufacturing for Egypt and the Arab region. Located in 6th of October City, 3rd Industrial Zone, we are committed to quality and international standards.",

    //Portfolio
    portfolioTitle: "Portfolio",
    portfolioDescription:
      "Explore some of our previous projects that reflect the quality of our products and our commitment to excellence.",
    viewProject: "View Project",
    allProjects: "All Projects",
    infrastructure: "Infrastructure",
    industrial: "Industrial",
    utilities: "Utilities",
    other: "Other",

    // News
    newsTitle: "News",
    newsDescription:
      "Stay up-to-date with the latest news and updates from Delta Fiber Egypt.",
    // Company Values
    valuesTitle: "Our Values",
    ethics: "Ethics & Integrity",
    trust: "Trust & Responsibility",
    excellence: "Excellence in Performance",
    teamSpirit: "Team Spirit",
    development: "Continuous Development",
    socialResponsibility: "Social Responsibility",

    // Mission & Vision
    missionTitle: "Our Mission",
    missionText:
      "Maximize the benefits of fiberglass and composites to create high-value products resistant to rust and corrosion.",
    visionTitle: "Our Vision",
    visionText:
      "Provide high-quality products for infrastructure and utilities projects as alternatives to traditional materials.",

    // Contact
    contactTitle: "Contact Us",
    address: "Address",
    addressText:
      "6th of October City, 3rd Industrial Zone, Plot 52, Intersection of Benzina St. and St. 7, Service Axis 2",
    workingHours: "Working Hours",
    workingHoursText: "Saturday - Thursday: 8:00 AM - 4:00 PM",
    phone: "Phone",
    email: "Email",

    // Footer
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved",

    // Why Choose Us
    whyChooseTitle: "Why Choose Delta Fiber Egypt?",
    qualityTitle: "Quality Assurance",
    qualityDesc: "Egyptian & international standards compliance",
    teamTitle: "Expert Team",
    teamDesc: "Strong technical and engineering expertise",
    serviceTitle: "After-Sales Service",
    serviceDesc: "Comprehensive support and maintenance",
    pricingTitle: "Competitive Pricing",
    pricingDesc: "Best value for high-quality products",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    aboutUs: "من نحن",
    ourProducts: "منتجاتنا",
    gallery: "معرض الصور",
    portfolio: "سابقة الأعمال",
    news: "أخبارنا",
    contactUs: "اتصل بنا",

    // Products
    grpPipes: "مواسير GRP / GRV / GRE",
    specialParts: "القطع الخاصة",
    tanks: "خزانات",
    manholeCovers: "أغطية الصرف الصحي",
    lightingPoles: "أعمدة الإنارة",
    cableTrays: "مجاري وحوامل الكابلات",
    gratings: "الجريليات والمشايات",
    stairs: "السلالم والهاندريل",

    // Hero Section
    heroTitle: "حلول الفيبر جلاس الرائدة في مصر",
    heroSubtitle:
      "شركة مصرية متخصصة في منتجات GRP/GRV/GRE للبنية التحتية والتطبيقات الصناعية",
    learnMore: "اعرف المزيد",
    // ourProducts: "منتجاتنا",

    // About Us
    aboutTitle: "عن دلتا فيبر ",
    aboutDescription:
      "شركة مصرية متخصصة في تصنيع الفيبر جلاس لمصر والمنطقة العربية. تقع في مدينة السادس من أكتوبر، المنطقة الصناعية الثالثة، ونحن ملتزمون بالجودة والمعايير الدولية.",

    //Portfolio
    portfolioTitle: "سابقة الأعمال",
    portfolioDescription:
      "استعرض بعض من مشاريعنا السابقة التي تعكس جودة منتجاتنا والتزامنا بالتميز.",
    viewProject: "عرض المشروع",
    allProjects: "جميع المشاريع",
    infrastructure: "البنية التحتية",
    industrial: "الصناعية",
    utilities: "المرافق",
    other: "أخرى",

    // News
    newsTitle: "اخبارنا",
    newsDescription:
      "استعرض بعض من الاخبار التي تعكس جودة منتجاتنا والتزامنا بالتميز.",

    // Company Values
    valuesTitle: "قيمنا",
    ethics: "الأخلاق والنزاهة",
    trust: "الثقة والمسؤولية",
    excellence: "التميز في الأداء",
    teamSpirit: "روح الفريق",
    development: "التطوير المستمر",
    socialResponsibility: "المسؤولية الاجتماعية",

    // Mission & Vision
    missionTitle: "رسالتنا",
    missionText:
      "تعظيم فوائد الفيبر جلاس والمركبات لإنتاج منتجات عالية القيمة مقاومة للصدأ والتآكل.",
    visionTitle: "رؤيتنا",
    visionText:
      "توفير منتجات عالية الجودة لمشاريع البنية التحتية والمرافق كبدائل للمواد التقليدية.",

    // Contact
    contactTitle: "اتصل بنا",
    address: "العنوان",
    addressText:
      "مدينة السادس من أكتوبر، المنطقة الصناعية الثالثة، قطعة 52، تقاطع شارع بنزينة وشارع 7، المحور الخدمي 2",
    workingHours: "ساعات العمل",
    workingHoursText: "السبت - الخميس: 8:00 ص - 4:00 م",
    phone: "الهاتف",
    email: "البريد الإلكتروني",

    // Footer
    quickLinks: "روابط سريعة",
    followUs: "تابعنا",
    allRightsReserved: "جميع الحقوق محفوظة",

    // Why Choose Us
    whyChooseTitle: "لماذا دلتا فيبر ؟",
    qualityTitle: "ضمان الجودة",
    qualityDesc: "الالتزام بالمعايير المصرية والدولية",
    teamTitle: "فريق خبير",
    teamDesc: "خبرة فنية وهندسية قوية",
    serviceTitle: "خدمة ما بعد البيع",
    serviceDesc: "دعم وصيانة شاملة",
    pricingTitle: "أسعار تنافسية",
    pricingDesc: "أفضل قيمة للمنتجات عالية الجودة",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div
        dir={language === "ar" ? "rtl" : "ltr"}
        className={language === "ar" ? "font-arabic" : ""}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
