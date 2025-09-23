import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Stars as Stairs } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Products = () => {
  const { t, language } = useLanguage();

  const productCategories = [
    {
      key: "grpPipes",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/20120427130021327-300x300.jpg",
      href: "/products/grp-pipes",
      color: "blue",
      description:
        language === "ar"
          ? "مواسير فيبر جلاس عالية الجودة مقاومة للتآكل والمواد الكيميائية، مناسبة لشبكات المياه والصرف الصحي"
          : "High-quality fiberglass pipes resistant to corrosion and chemicals, suitable for water and sewage networks",
    },
    {
      key: "specialParts",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/frp-product-04-big-1.jpg",
      href: "/products/special-parts",
      color: "green",
      description:
        language === "ar"
          ? "قطع خاصة مصنعة حسب المواصفات المطلوبة للمشاريع الخاصة والتطبيقات الصناعية المتخصصة"
          : "Custom-manufactured special parts according to required specifications for special projects and specialized industrial applications",
    },
    {
      key: "tanks",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/2015041018063131003.jpg",
      href: "/products/tanks",
      color: "purple",
      description:
        language === "ar"
          ? "خزانات فيبر جلاس متينة لتخزين المياه والمواد الكيميائية بأحجام وأشكال مختلفة"
          : "Durable fiberglass tanks for storing water and chemicals in various sizes and shapes",
    },
    {
      key: "manholeCovers",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/Delta-inside_page1_image8.jpg",
      href: "/products/manhole-covers",
      color: "orange",
      description:
        language === "ar"
          ? "أغطية صرف صحي قوية ومقاومة للأحمال الثقيلة والعوامل الجوية"
          : "Strong manhole covers resistant to heavy loads and weather conditions",
    },
    {
      key: "lightingPoles",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/2da52a0a-8e1f-4d4a-884f-a9e15627f423w.jpg",
      href: "/products/lighting-poles",
      color: "yellow",
      description:
        language === "ar"
          ? "أعمدة إنارة حديثة وخفيفة الوزن مقاومة للتآكل مع تصاميم جمالية متنوعة"
          : "Modern and lightweight lighting poles resistant to corrosion with various aesthetic designs",
    },
    {
      key: "cableTrays",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/90INTERNALRISER.jpg",
      href: "/products/cable-trays",
      color: "indigo",
      description:
        language === "ar"
          ? "مجاري وحوامل كابلات مقاومة للحريق والتآكل لحماية وتنظيم الكابلات الكهربائية"
          : "Fire and corrosion resistant cable trays and ladders for protecting and organizing electrical cables",
    },
    {
      key: "gratings",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/Deck-Plan-1.jpg",
      href: "/products/gratings",
      color: "teal",
      description:
        language === "ar"
          ? "جريليات ومشايات آمنة مضادة للانزلاق للاستخدام في البيئات الصناعية والتجارية"
          : "Safe anti-slip gratings and walkways for use in industrial and commercial environments",
    },
    {
      key: "stairs",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/FRP-Handrail-1.jpg",
      href: "/products/stairs",
      color: "red",
      description:
        language === "ar"
          ? "سلالم وهاندريل قوية ومقاومة للعوامل الجوية للاستخدام الداخلي والخارجي"
          : "Strong and weather-resistant stairs and handrails for indoor and outdoor use",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-600 hover:bg-blue-700",
        text: "text-blue-600",
        light: "bg-blue-100",
      },
      green: {
        bg: "bg-green-600 hover:bg-green-700",
        text: "text-green-600",
        light: "bg-green-100",
      },
      purple: {
        bg: "bg-purple-600 hover:bg-purple-700",
        text: "text-purple-600",
        light: "bg-purple-100",
      },
      orange: {
        bg: "bg-orange-600 hover:bg-orange-700",
        text: "text-orange-600",
        light: "bg-orange-100",
      },
      yellow: {
        bg: "bg-yellow-600 hover:bg-yellow-700",
        text: "text-yellow-600",
        light: "bg-yellow-100",
      },
      indigo: {
        bg: "bg-indigo-600 hover:bg-indigo-700",
        text: "text-indigo-600",
        light: "bg-indigo-100",
      },
      teal: {
        bg: "bg-teal-600 hover:bg-teal-700",
        text: "text-teal-600",
        light: "bg-teal-100",
      },
      red: {
        bg: "bg-red-600 hover:bg-red-700",
        text: "text-red-600",
        light: "bg-red-100",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t("ourProducts")}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === "ar"
                ? "نقدم مجموعة شاملة من منتجات الفيبر جلاس عالية الجودة المصممة لتلبية احتياجات المشاريع الصناعية والبنية التحتية. منتجاتنا مقاومة للتآكل، خفيفة الوزن، وطويلة الأمد."
                : "We offer a comprehensive range of high-quality fiberglass products designed to meet the needs of industrial projects and infrastructure. Our products are corrosion-resistant, lightweight, and long-lasting."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => {
              const colorClasses = getColorClasses(product.color);
              return (
                <motion.div
                  key={product.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={product.href} className="block">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={product.image}
                          alt={t(product.key)}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                          {t(product.key)}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {product.description}
                        </p>

                        <div
                          className={`flex items-center ${
                            colorClasses.text
                          } group-hover:${colorClasses.text
                            .replace("text-", "text-")
                            .replace("-600", "-700")} transition-colors`}
                        >
                          <span className="text-sm font-medium">
                            {language === "ar" ? "اعرف المزيد" : "Learn More"}
                          </span>
                          <ArrowRight
                            className={`w-4 h-4 ${
                              language === "ar" ? "mr-2 rotate-180" : "ml-2"
                            } group-hover:translate-x-1 transition-transform`}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "ar"
                ? "هل تحتاج مساعدة في اختيار المنتج المناسب؟"
                : "Need Help Choosing the Right Product?"}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {language === "ar"
                ? "فريقنا الفني المتخصص جاهز لمساعدتك في اختيار أفضل الحلول لمشروعك"
                : "Our specialized technical team is ready to help you choose the best solutions for your project"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-100 text-white px-8 py-3"
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
                className="bg-blue-600 hover:bg-blue-100 text-white px-8 py-3"
              >
                <Link to="/gallery">{t("gallery")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
