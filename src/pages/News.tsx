import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, ArrowRight, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const News = () => {
  const { t, language } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const newsArticles = [
    {
      id: 1,
      title:
        language === "ar"
          ? "دلتا فيبر تشارك في معرض صنع في مصر"
          : "Delta Fiber Participates in 'Made in Egypt' Expo",
      excerpt:
        language === "ar"
          ? "شرفت شركة دلتا فيبر بالمشاركه في معرض “صنع في مصر ” وهو أول معرض بصبغه مصرية خالصة لعرض منتجات مصريه بالكامل وقد لاقى المعرض اهتماما إعلاميا كبيرا واقبالا جماهيريا لافتا وقد شاركت شركة دلتا فيبر بجناح متميز في المعرض للتعريف بمنتجات الشركه المختلفه ولكي تضع امكاناتها الفنيه والتصنيعيه أمام شركات المقاولات الكبيره والمكاتب الاستشارية وتضطلع وتشارك في تنفيذ المشاريع الكبرى في البلاد وخاصة في مجال البنيه التحتيه وقد أدلي المهندس محمد بهاء المدير العام للشركة ببعض الأحاديث التليفزيونية للتليفزيون المصري وبعض القنوات الفضائية الأخرى"
          : "Delta Fiber Egypt announces new production line to increase capacity and meet growing demand",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2017/07/IMG-20170706-WA0000.jpg",
    },
    {
      id: 2,
      title:
        language === "ar"
          ? "شراكة جديدة مع مشروعات الإسكان القومية"
          : "New Partnership with National Housing Projects",
      excerpt:
        language === "ar"
          ? "توقيع عقد استراتيجي لتوريد منتجات الفيبر جلاس للمشروعات السكنية الجديدة"
          : "Strategic contract signed to supply fiberglass products for new residential projects",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2017/07/IMG-20170706-WA0000.jpg",
      author: language === "ar" ? "إدارة التسويق" : "Marketing Team",
    },
    {
      id: 3,
      title:
        language === "ar"
          ? "حصول الشركة على شهادة الجودة الدولية"
          : "Company Receives International Quality Certification",
      excerpt:
        language === "ar"
          ? "دلتا فيبر مصر تحصل على شهادة ISO 9001:2015 تأكيداً لالتزامها بمعايير الجودة العالمية"
          : "Delta Fiber Egypt receives ISO 9001:2015 certification confirming commitment to global quality standards",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2017/07/IMG-20170706-WA0000.jpg",
      author: language === "ar" ? "إدارة الجودة" : "Quality Management",
    },
    {
      id: 4,
      title:
        language === "ar"
          ? "توسعة المصنع لتلبية الطلب المحلي والتصدير"
          : "Factory Expansion to Meet Local Demand and Export",
      excerpt:
        language === "ar"
          ? "خطة طموحة لتوسعة المصنع وزيادة الطاقة الإنتاجية لخدمة السوق المحلي والتصدير للدول العربية"
          : "Ambitious plan to expand factory and increase production capacity to serve local market and export to Arab countries",
      image:
        "https://deltafiber.org/ar/wp-content/uploads/2017/07/IMG-20170706-WA0000.jpg",
      author: language === "ar" ? "الإدارة العليا" : "Senior Management",
    },
  ];

  return (
    <div className="min-h-screen pt-8 bg-gray-50">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t("newsTitle")}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("newsDescription")}
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <motion.article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* الصورة */}
              <div
                className="relative h-72 overflow-hidden"
                onClick={() => setSelectedArticle(article)} // هنا اضفنا الحدث
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* النصوص */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div
                  className="p-0 h-auto text-blue-600 hover:text-blue-700"
                  onClick={() => setSelectedArticle(article)}
                >
                  <span>{language === "ar" ? "اقرأ المزيد" : "Read More"}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-3xl w-full p-6 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={() => setSelectedArticle(null)}
              >
                <X className="w-6 h-6 text-gray-800" />
              </div>

              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-96 object-cover rounded mb-4"
              />
              <h4 className="text-xl mb-4">{selectedArticle.excerpt}</h4>
              <p className="text-gray-700">{selectedArticle.fullText}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default News;
