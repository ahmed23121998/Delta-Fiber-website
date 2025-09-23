import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { key: "all", label: language === "ar" ? "الكل" : "All" },
    { key: "pipes", label: language === "ar" ? "المواسير" : "Pipes" },
    { key: "tanks", label: language === "ar" ? "الخزانات" : "Tanks" },
    { key: "covers", label: language === "ar" ? "الأغطية" : "Covers" },
    { key: "poles", label: language === "ar" ? "الأعمدة" : "Poles" },
  ];

  const images = [
    {
      id: 1,
      src: "https://deltafiber.org/ar/wp-content/uploads/2016/09/20120427130021327-300x300.jpg",
      category: "pipes",
      title: language === "ar" ? "مواسير GRP" : "GRP Pipes",
      description:
        language === "ar" ? "مواسير عالية الجودة" : "High-quality pipes",
    },
    {
      id: 2,
      src: "https://deltafiber.org/ar/wp-content/uploads/2016/09/2015041018063131003.jpg",
      category: "tanks",
      title: language === "ar" ? "خزانات فيبر جلاس" : "Fiberglass Tanks",
      description:
        language === "ar" ? "خزانات تخزين متينة" : "Durable storage tanks",
    },
    {
      id: 3,
      src: "https://deltafiber.org/ar/wp-content/uploads/2016/09/Delta-inside_page1_image8.jpg",
      category: "covers",
      title: language === "ar" ? "أغطية الصرف" : "Manhole Covers",
      description:
        language === "ar"
          ? "أغطية مقاومة للتآكل"
          : "Corrosion-resistant covers",
    },
    {
      id: 4,
      src: "https://deltafiber.org/ar/wp-content/uploads/2016/09/Unted.jpg",
      category: "poles",
      title: language === "ar" ? "أعمدة الإنارة" : "Lighting Poles",
      description:
        language === "ar" ? "أعمدة إنارة حديثة" : "Modern lighting poles",
    },
    {
      id: 5,
      src: "https://deltafiber.org/ar/wp-content/uploads/2016/09/2015041111325943115-1-1-300x300.jpg",
      category: "pipes",
      title: language === "ar" ? " مواسير GRV " : "GRV Pipes",
      description:
        language === "ar"
          ? "حلول صناعية متطورة"
          : "Advanced industrial solutions",
    },
    {
      id: 6,
      src: "https://deltafiber.org/ar/wp-content/uploads/2016/09/2015041516034493548.jpg",
      category: "tanks",
      title: language === "ar" ? "خزانات كبيرة" : "Large Tanks",
      description:
        language === "ar" ? "خزانات سعات كبيرة" : "High-capacity tanks",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t("gallery")}
            </h1>
            <p className="text-lg text-gray-600">
              {language === "ar"
                ? "استعرض مجموعة شاملة من منتجاتنا وأعمالنا المنجزة"
                : "Browse our comprehensive collection of products and completed projects"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={
                  selectedCategory === category.key ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.key)}
                className={`${
                  selectedCategory === category.key
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                          <h3 className="text-xl font-bold mb-2">
                            {image.title}
                          </h3>
                          <p className="text-sm">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
