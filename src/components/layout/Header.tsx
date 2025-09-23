import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  // دالة للتنقل + scroll لأعلى
  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false); // أغلق قائمة الموبايل إذا مفتوحة
  };

  const products = [
    { key: "grpPipes", href: "/products/grp-pipes" },
    { key: "specialParts", href: "/products/special-parts" },
    { key: "tanks", href: "/products/tanks" },
    { key: "manholeCovers", href: "/products/manhole-covers" },
    { key: "lightingPoles", href: "/products/lighting-poles" },
    { key: "cableTrays", href: "/products/cable-trays" },
    { key: "gratings", href: "/products/gratings" },
    { key: "stairs", href: "/products/stairs" },
  ];

  const navigation = [
    { key: "home", href: "/" },
    { key: "aboutUs", href: "/about" },
    { key: "gallery", href: "/gallery" },
    { key: "portfolio", href: "/portfolio" },
    { key: "news", href: "/news" },
    { key: "contactUs", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="w-full px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="space-y-4 cursor-pointer"
            onClick={() => handleNavigate("/")}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DF</span>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-xl font-bold pr-2">
                  {language === "ar" ? "دلتا فيبر " : "Delta Fiber"}
                </h3>
                <p className="text-gray-400 text-sm pr-2">
                  {language === "ar"
                    ? "حلول فيبر جلاس"
                    : "Fiberglass Solutions"}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item, index) => (
              <div
                key={item.key}
                onClick={() => handleNavigate(item.href)}
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer
      ${location.pathname === item.href ? "text-blue-600" : ""}
      ${language === "ar" && index !== navigation.length - 1 ? "ml-6" : ""}`}
              >
                {t(item.key)}
              </div>
            ))}

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
                <span>{t("ourProducts")}</span>
                <ChevronDown className="w-4 h-4" />
              </div>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  >
                    {products.map((product) => (
                      <button
                        key={product.key}
                        onClick={() => handleNavigate(product.href)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        {t(product.key)}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Language Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center space-x-2"
          >
            <Globe className="w-4 h-4" />
            <span>{language === "en" ? "عربي" : "English"}</span>
          </Button>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 py-4 overflow-hidden"
            >
              <div className="space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavigate(item.href)}
                    className={`block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors ${
                      location.pathname === item.href
                        ? "text-blue-600 font-medium"
                        : ""
                    }`}
                  >
                    {t(item.key)}
                  </button>
                ))}

                {/* Mobile Products */}
                <div className="space-y-2">
                  <div className="py-2 text-gray-800 font-medium">
                    {t("ourProducts")}
                  </div>
                  <div className="pl-4 space-y-2">
                    {products.map((product) => (
                      <button
                        key={product.key}
                        onClick={() => handleNavigate(product.href)}
                        className="block w-full text-left py-1 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      >
                        {t(product.key)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
