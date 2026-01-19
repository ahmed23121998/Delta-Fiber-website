import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const productDetails: {
    [key: string]: {
      key: string;
      title: string;
      image: string;
      description: string;
      specifications: string[];
      benefits: string[];
      applications: string[];
      arTitle?: string;
      arDescription?: string;
      arSpecifications?: string[];
      arBenefits?: string[];
      arApplications?: string[];
    };
  } = {
    "grp-pipes": {
      key: "grpPipes",
      title: "GRP Pipes",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/20120427130021327-300x300.jpg",
      description:
        "High-quality fiberglass pipes resistant to corrosion and chemicals, suitable for water and sewage networks",
      arTitle: "مواسير الفيبر جلاس",
      arDescription:
        "مواسير فيبر جلاس عالية الجودة مقاومة للتآكل والمواد الكيميائية، مناسبة لشبكات المياه والصرف الصحي",
      specifications: [
        "High tensile strength",
        "Corrosion resistant",
        "Lightweight (1/4 of steel)",
        "Long lifespan (50+ years)",
        "Easy installation",
        "Various sizes available",
      ],
      arSpecifications: [
        "قوة شد عالية",
        "مقاومة للتآكل",
        "خفيفة الوزن (1/4 من الفولاذ)",
        "عمر افتراضي طويل (50+ سنة)",
        "سهلة التركيب",
        "أحجام مختلفة متاحة",
      ],
      benefits: [
        "Cost-effective solution",
        "Requires minimal maintenance",
        "Environmentally friendly",
        "Better flow characteristics",
        "No internal corrosion",
        "Reduces installation time",
      ],
      arBenefits: [
        "حل فعال من حيث التكلفة",
        "تتطلب صيانة قليلة",
        "صديقة للبيئة",
        "خصائص تدفق أفضل",
        "لا تتآكل من الداخل",
        "تقلل وقت التركيب",
      ],
      applications: [
        "Water distribution systems",
        "Sewage treatment",
        "Industrial pipes",
        "Agricultural irrigation",
        "Chemical transportation",
        "Marine applications",
      ],
      arApplications: [
        "أنظمة توزيع المياه",
        "معالجة الصرف الصحي",
        "المواسير الصناعية",
        "الري الزراعي",
        "نقل المواد الكيميائية",
        "التطبيقات البحرية",
      ],
    },
    "special-parts": {
      key: "specialParts",
      title: "Special Parts",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/frp-product-04-big-1.jpg",
      description:
        "Custom-manufactured special parts according to required specifications for special projects and specialized industrial applications",
      arTitle: "القطع الخاصة",
      arDescription:
        "قطع خاصة مصنعة حسب المواصفات المطلوبة للمشاريع الخاصة والتطبيقات الصناعية المتخصصة",
      specifications: [
        "Custom design available",
        "Precision manufacturing",
        "Quality control certified",
        "Fast turnaround time",
        "Flexible sizing",
        "Material options",
      ],
      arSpecifications: [
        "تصميم مخصص متاح",
        "تصنيع دقيق",
        "معتمد من قبل مراقبة الجودة",
        "وقت تسليم سريع",
        "أحجام مرنة",
        "خيارات مادية",
      ],
      benefits: [
        "Tailored solutions",
        "Reduced project delays",
        "Higher reliability",
        "Custom specifications",
        "Professional support",
        "Competitive pricing",
      ],
      arBenefits: [
        "حلول مخصصة",
        "تقليل تأخير المشاريع",
        "موثوقية أعلى",
        "مواصفات مخصصة",
        "دعم احترافي",
        "أسعار تنافسية",
      ],
      applications: [
        "Industrial equipment",
        "Special machinery",
        "Prototype development",
        "Custom fittings",
        "Specialized connectors",
        "Bespoke components",
      ],
      arApplications: [
        "المعدات الصناعية",
        "الآلات الخاصة",
        "تطوير النماذج الأولية",
        "التركيبات المخصصة",
        "الموصلات المتخصصة",
        "المكونات المخصصة",
      ],
    },
    tanks: {
      key: "tanks",
      title: "Tanks",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/2015041018063131003.jpg",
      description:
        "Durable fiberglass tanks for storing water and chemicals in various sizes and shapes",
      arTitle: "الخزانات",
      arDescription:
        "خزانات فيبر جلاس متينة لتخزين المياه والمواد الكيميائية بأحجام وأشكال مختلفة",
      specifications: [
        "Various capacity options",
        "Chemical resistant",
        "UV protected",
        "Double wall option",
        "Leak-proof design",
        "Easy maintenance",
      ],
      arSpecifications: [
        "خيارات سعة مختلفة",
        "مقاومة للمواد الكيميائية",
        "محمي من الأشعة فوق البنفسجية",
        "خيار الجدار المزدوج",
        "تصميم لا يتسرب",
        "سهل الصيانة",
      ],
      benefits: [
        "Long service life",
        "No rust or corrosion",
        "Cost effective",
        "Quick installation",
        "Minimal maintenance",
        "Safe storage",
      ],
      arBenefits: [
        "عمر خدمة طويل",
        "لا صدأ ولا تآكل",
        "فعال من حيث التكلفة",
        "تركيب سريع",
        "صيانة قليلة",
        "تخزين آمن",
      ],
      applications: [
        "Water storage",
        "Chemical storage",
        "Industrial applications",
        "Agricultural use",
        "Wastewater treatment",
        "Fire protection systems",
      ],
      arApplications: [
        "تخزين المياه",
        "تخزين المواد الكيميائية",
        "التطبيقات الصناعية",
        "الاستخدام الزراعي",
        "معالجة المياه العادمة",
        "أنظمة حماية من الحرائق",
      ],
    },
    "manhole-covers": {
      key: "manholeCovers",
      title: "Manhole Covers",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/Delta-inside_page1_image8.jpg",
      description:
        "Strong manhole covers resistant to heavy loads and weather conditions",
      arTitle: "أغطية الصرف الصحي",
      arDescription:
        "أغطية صرف صحي قوية ومقاومة للأحمال الثقيلة والعوامل الجوية",
      specifications: [
        "Heavy-duty construction",
        "Weather resistant",
        "Non-conductive",
        "Custom sizes",
        "Anti-slip surface",
        "Easy access design",
      ],
      arSpecifications: [
        "بناء قوي الاحتمال",
        "مقاومة للعوامل الجوية",
        "غير موصلة",
        "أحجام مخصصة",
        "سطح مضاد للانزلاق",
        "تصميم سهل الوصول",
      ],
      benefits: [
        "Durability",
        "Safety assurance",
        "Low maintenance",
        "Cost efficient",
        "Lightweight",
        "Long-lasting",
      ],
      arBenefits: [
        "المتانة",
        "ضمان السلامة",
        "صيانة منخفضة",
        "فعالة من حيث التكلفة",
        "خفيفة الوزن",
        "طويلة الأمد",
      ],
      applications: [
        "Sewage systems",
        "Drainage networks",
        "Underground utilities",
        "Street access points",
        "Industrial facilities",
        "Municipal infrastructure",
      ],
      arApplications: [
        "أنظمة الصرف الصحي",
        "شبكات الصرف",
        "المرافق تحت الأرض",
        "نقاط الوصول في الشارع",
        "المنشآت الصناعية",
        "البنية التحتية البلدية",
      ],
    },
    "lighting-poles": {
      key: "lightingPoles",
      title: "Lighting Poles",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/2da52a0a-8e1f-4d4a-884f-a9e15627f423w.jpg",
      description:
        "Modern and lightweight lighting poles resistant to corrosion with various aesthetic designs",
      arTitle: "أعمدة الإنارة",
      arDescription:
        "أعمدة إنارة حديثة وخفيفة الوزن مقاومة للتآكل مع تصاميم جمالية متنوعة",
      specifications: [
        "Lightweight design",
        "Corrosion resistant",
        "Various heights",
        "Aesthetic options",
        "Easy installation",
        "Maintenance free",
      ],
      arSpecifications: [
        "تصميم خفيف الوزن",
        "مقاومة للتآكل",
        "ارتفاعات مختلفة",
        "خيارات جمالية",
        "سهل التركيب",
        "خالي من الصيانة",
      ],
      benefits: [
        "Reduced installation cost",
        "No painting needed",
        "Long lifespan",
        "Energy efficient",
        "Modern appearance",
        "Eco-friendly",
      ],
      arBenefits: [
        "تكلفة تركيب منخفضة",
        "لا حاجة للطلاء",
        "عمر افتراضي طويل",
        "موفرة للطاقة",
        "مظهر حديث",
        "صديقة للبيئة",
      ],
      applications: [
        "Street lighting",
        "Highway illumination",
        "Park lighting",
        "Parking areas",
        "Industrial sites",
        "Public spaces",
      ],
      arApplications: [
        "إنارة الشوارع",
        "إضاءة الطرق السريعة",
        "إضاءة الحدائق",
        "مناطق الانتظار",
        "المواقع الصناعية",
        "الأماكن العامة",
      ],
    },
    "cable-trays": {
      key: "cableTrays",
      title: "Cable Trays",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/90INTERNALRISER.jpg",
      description:
        "Fire and corrosion resistant cable trays and ladders for protecting and organizing electrical cables",
      arTitle: "مجاري الكابلات",
      arDescription:
        "مجاري وحوامل كابلات مقاومة للحريق والتآكل لحماية وتنظيم الكابلات الكهربائية",
      specifications: [
        "Fire resistant",
        "Corrosion proof",
        "High strength",
        "Easy assembly",
        "Modular design",
        "Various widths",
      ],
      arSpecifications: [
        "مقاومة للحريق",
        "مثبتة ضد التآكل",
        "قوة عالية",
        "سهل التجميع",
        "تصميم معياري",
        "عروض مختلفة",
      ],
      benefits: [
        "Safety enhancement",
        "Cable protection",
        "Easy maintenance access",
        "Long service life",
        "Cost savings",
        "Aesthetic appeal",
      ],
      arBenefits: [
        "تحسين السلامة",
        "حماية الكابلات",
        "سهولة الوصول للصيانة",
        "عمر خدمة طويل",
        "توفير التكاليف",
        "الجاذبية الجمالية",
      ],
      applications: [
        "Power plants",
        "Substations",
        "Buildings",
        "Data centers",
        "Industrial facilities",
        "Telecommunication networks",
      ],
      arApplications: [
        "محطات الكهرباء",
        "محطات التحويل",
        "المباني",
        "مراكز البيانات",
        "المنشآت الصناعية",
        "شبكات الاتصالات",
      ],
    },
    gratings: {
      key: "gratings",
      title: "Gratings",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/Deck-Plan-1.jpg",
      description:
        "Safe anti-slip gratings and walkways for use in industrial and commercial environments",
      arTitle: "الجريليات",
      arDescription:
        "جريليات ومشايات آمنة مضادة للانزلاق للاستخدام في البيئات الصناعية والتجارية",
      specifications: [
        "Anti-slip surface",
        "Load bearing",
        "Various sizes",
        "Lightweight",
        "Easy installation",
        "Customizable",
      ],
      arSpecifications: [
        "سطح مضاد للانزلاق",
        "تحمل الأحمال",
        "أحجام مختلفة",
        "خفيفة الوزن",
        "سهل التركيب",
        "قابلة للتخصيص",
      ],
      benefits: [
        "Enhanced safety",
        "Durable construction",
        "Low maintenance",
        "Cost effective",
        "Quick installation",
        "Professional look",
      ],
      arBenefits: [
        "تحسين السلامة",
        "بناء متين",
        "صيانة منخفضة",
        "فعالة من حيث التكلفة",
        "تركيب سريع",
        "مظهر احترافي",
      ],
      applications: [
        "Industrial platforms",
        "Walkways",
        "Stairways",
        "Chemical plants",
        "Food processing",
        "Offshore structures",
      ],
      arApplications: [
        "المنصات الصناعية",
        "المشايات",
        "السلالم",
        "مصانع المواد الكيميائية",
        "معالجة الأغذية",
        "الهياكل البحرية",
      ],
    },
    stairs: {
      key: "stairs",
      title: "Stairs & Handrails",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/FRP-Handrail-1.jpg",
      description:
        "Strong and weather-resistant stairs and handrails for indoor and outdoor use",
      arTitle: "السلالم والدرابزينات",
      arDescription:
        "سلالم وهاندريل قوية ومقاومة للعوامل الجوية للاستخدام الداخلي والخارجي",
      specifications: [
        "Weather resistant",
        "High strength",
        "Anti-slip treads",
        "Modular design",
        "Easy assembly",
        "Safety certified",
      ],
      arSpecifications: [
        "مقاومة للعوامل الجوية",
        "قوة عالية",
        "درجات مضادة للانزلاق",
        "تصميم معياري",
        "سهل التجميع",
        "معتمد للسلامة",
      ],
      benefits: [
        "Long lasting",
        "Minimal maintenance",
        "Safe design",
        "Aesthetic appeal",
        "Cost effective",
        "Durable material",
      ],
      arBenefits: [
        "طويل الأمد",
        "صيانة قليلة",
        "تصميم آمن",
        "الجاذبية الجمالية",
        "فعالة من حيث التكلفة",
        "مادة متينة",
      ],
      applications: [
        "Industrial buildings",
        "Commercial properties",
        "Public facilities",
        "Marine vessels",
        "Offshore platforms",
        "Residential buildings",
      ],
      arApplications: [
        "المباني الصناعية",
        "العقارات التجارية",
        "المنشآت العامة",
        "السفن البحرية",
        "المنصات البحرية",
        "المباني السكنية",
      ],
    },
  };

  const product = productDetails[productId || ""];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {language === "ar" ? "المنتج غير موجود" : "Product Not Found"}
          </h1>
          <Button asChild>
            <Link to="/products">
              {language === "ar" ? "العودة للمنتجات" : "Back to Products"}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const displayTitle =
    language === "ar" && product.arTitle ? product.arTitle : product.title;
  const displayDescription =
    language === "ar" && product.arDescription
      ? product.arDescription
      : product.description;
  const displaySpecifications =
    language === "ar" && product.arSpecifications
      ? product.arSpecifications
      : product.specifications;
  const displayBenefits =
    language === "ar" && product.arBenefits
      ? product.arBenefits
      : product.benefits;
  const displayApplications =
    language === "ar" && product.arApplications
      ? product.arApplications
      : product.applications;

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      {/* Back Button */}
      <div className="container mx-auto px-4 mb-8">
        <button
          onClick={() => navigate("/products")}
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          {language === "ar" ? "العودة للمنتجات" : "Back to Products"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={product.image}
                alt={displayTitle}
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {displayTitle}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {displayDescription}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link to="/contact">{t("contactUs")}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {language === "ar" ? "المواصفات" : "Specifications"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {displaySpecifications.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow flex items-start gap-4"
                >
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{spec}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {language === "ar" ? "الفوائد" : "Benefits"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {displayBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 font-semibold">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {language === "ar" ? "التطبيقات" : "Applications"}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {displayApplications.map((app, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg"
                >
                  <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0" />
                  <p className="text-gray-700">{app}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "ar"
                ? "هل تريد مزيد من المعلومات؟"
                : "Want More Information?"}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {language === "ar"
                ? "تواصل معنا لمعرفة المزيد عن هذا المنتج"
                : "Contact us to learn more about this product"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link to="/contact" className="flex items-center">
                  {t("contactUs")}
                  <ArrowRight
                    className={`w-5 h-5 ${
                      language === "ar" ? "mr-2 rotate-180" : "ml-2"
                    }`}
                  />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link to="/products">
                  {language === "ar" ? "المزيد من المنتجات" : "More Products"}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
