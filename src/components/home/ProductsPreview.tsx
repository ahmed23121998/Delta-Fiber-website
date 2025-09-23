import { motion } from "framer-motion";
import { ArrowRight} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const ProductsPreview = () => {
  const { t, language } = useLanguage();

  const productCategories = [
    {
      key: "grpPipes",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/Fiberglass_pipe-1-300x300.jpg",
      href: "/products/grp-pipes",
      color: "blue",
    },
    {
      key: "tanks",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/2015041516034493548.jpg",
      href: "/products/tanks",
      color: "green",
    },
    {
      key: "lightingPoles",
      image: "https://deltafiber.org/ar/wp-content/uploads/2016/09/Unted.jpg",
      href: "/products/lighting-poles",
      color: "purple",
    },
    {
      key: "gratings",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2016/09/Deck-Plan-1.jpg",
      href: "/products/special-parts",
      color: "orange",
    },
  ];

  // const getColorClasses = (color: string) => {
  //   const colors = {
  //     blue: "bg-blue-600 hover:bg-blue-700",
  //     green: "bg-green-600 hover:bg-green-700",
  //     purple: "bg-purple-600 hover:bg-purple-700",
  //     orange: "bg-orange-600 hover:bg-orange-700",
  //   };
  //   return colors[color as keyof typeof colors];
  // };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {t("ourProducts")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {language === "ar"
              ? "نقدم مجموعة شاملة من منتجات الفيبر جلاس عالية الجودة للتطبيقات الصناعية والبنية التحتية"
              : "We offer a comprehensive range of high-quality fiberglass products for industrial and infrastructure applications"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {productCategories.map((product, index) => (
            <motion.div
              key={product.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={product.href} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={t(product.key)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t(product.key)}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === "ar"
                        ? "منتجات عالية الجودة مقاومة للتآكل والعوامل الجوية"
                        : "High-quality products resistant to corrosion and weather"}
                    </p>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
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
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-3"
          >
            <Link to="/products" className="flex items-center">
              {language === "ar" ? "جميع المنتجات" : "View All Products"}
              <ArrowRight
                className={`w-5 h-5 ${
                  language === "ar" ? "mr-2 rotate-180" : "ml-2"
                }`}
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsPreview;
