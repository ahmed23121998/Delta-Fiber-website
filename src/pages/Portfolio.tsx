import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { X } from "lucide-react";

const Portfolio = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      titleEn: "Rehabilitation of Zaafarana Main Water Line 300/800 mm",
      titleAr: "اصلاح مشترك خط مياه الزعفرانة الرئيسى 300/800 مم",
      img: "https://deltafiber.org/ar/wp-content/uploads/2016/09/2.jpg",
    },
    {
      id: 2,
      titleEn: "Rehabilitation of New Cairo Drainage Line",
      titleAr: "اصلاح خط صرف صحي القاهرة الجديدة",
      img: "https://deltafiber.org/ar/wp-content/uploads/2016/09/4-2.jpg",
    },
    {
      id: 3,
      titleEn: "Engineer's Warehouse",
      titleAr: "خزان دار الهندسه",
      img: "https://deltafiber.org/ar/wp-content/uploads/2016/09/SAM_0574.jpg",
    },
  ];

  return (
    <div className="min-h-screen p-14">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t("portfolioTitle")}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("portfolioDescription")}
            </p>
          </motion.div>
        </div>
      </section>
      {/* Portfolio Grid */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((item) => (
              <motion.div
                key={item.id}
                className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer group"
                onClick={() => setSelectedProject(item)}
              >
                <img
                  src={item.img}
                  className="w-full object-cover" // تكبير الصورة
                  alt={language === "ar" ? item.titleAr : item.titleEn}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center px-2">
                  <h2 className="text-white text-lg md:text-xl font-bold text-center">
                    {language === "ar" ? item.titleAr : item.titleEn}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-lg max-w-3xl w-full p-6 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 hover:bg-black transition"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center">
                {language === "ar"
                  ? selectedProject.titleAr
                  : selectedProject.titleEn}
              </h2>
              <img
                src={selectedProject.img}
                className="w-full h-96 object-cover rounded mb-4" // تكبير الصورة داخل modal
                alt={
                  language === "ar"
                    ? selectedProject.titleAr
                    : selectedProject.titleEn
                }
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
