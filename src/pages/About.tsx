import { motion } from "framer-motion";
import { Building2, Users, Award, Target, Eye, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    { key: "ethics", icon: Heart },
    { key: "trust", icon: Award },
    { key: "excellence", icon: Target },
    { key: "teamSpirit", icon: Users },
    { key: "development", icon: Building2 },
    { key: "socialResponsibility", icon: Eye },
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t("aboutTitle")}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("aboutDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Factory"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-800">
                {language === "ar" ? "قصة شركتنا" : "Our Story"}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  {language === "ar"
                    ? "تأسست دلتا فيبر مصر كشركة رائدة في تصنيع منتجات الفيبر جلاس عالية الجودة. نقع في مدينة السادس من أكتوبر، المنطقة الصناعية الثالثة، ونخدم السوق المصري والعربي."
                    : "Delta Fiber Egypt was established as a leading manufacturer of high-quality fiberglass products. Located in 6th of October City, 3rd Industrial Zone, we serve the Egyptian and Arab markets."}
                </p>
                <p>
                  {language === "ar"
                    ? "نحن ملتزمون بالمعايير المصرية والدولية، ونقدم منتجات مقاومة للتآكل وخفيفة الوزن تناسب التطبيقات الصناعية والبنية التحتية."
                    : "We are committed to Egyptian and international standards, providing corrosion-resistant and lightweight products suitable for industrial and infrastructure applications."}
                </p>
                <p>
                  {language === "ar"
                    ? "فريقنا التقني والهندسي القوي، مع خدمة ما بعد البيع الشاملة، يضمن حصولكم على أفضل المنتجات بأسعار تنافسية."
                    : "Our strong technical and engineering team, combined with comprehensive after-sales service, ensures you receive the best products at competitive prices."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t("valuesTitle")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {t(value.key)}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t("missionTitle")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("missionText")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t("visionTitle")}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t("visionText")}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
