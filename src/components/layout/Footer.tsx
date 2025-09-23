import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { key: "home", href: "/" },
    { key: "aboutUs", href: "/about" },
    { key: "ourProducts", href: "/products" },
    { key: "gallery", href: "/gallery" },
    { key: "contactUs", href: "/contact" },
    { key: "news", href: "/news" },
    { key: "portfolio", href: "/portfolio" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100069219018925#",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: Twitter,
      href: "https://x.com/DeltaFiber",
      label: "Twitter",
      color: "hover:bg-sky-500",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/delta_fiber/",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div
            className="space-y-4 cursor-pointer"
            onClick={() => handleNavigate("/")}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DF</span>
              </div>
              <div className="flex flex-col space-y-1">
                {/* Company Name with Translation */}
                <h3 className="text-xl font-bold pr-2">
                  {language === "ar" ? "دلتا فيبر مصر" : "Delta Fiber"}
                </h3>
                <p className="text-gray-400 text-sm pr-2">
                  {language === "ar"
                    ? "حلول فيبر جلاس"
                    : "Fiberglass Solutions"}
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === "ar"
                ? "شركة مصرية رائدة في تصنيع منتجات الفيبر جلاس عالية الجودة للبنية التحتية والتطبيقات الصناعية."
                : "Leading Egyptian manufacturer of high-quality fiberglass products for infrastructure and industrial applications."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t("quickLinks")}</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <span
                    onClick={() => handleNavigate(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm cursor-pointer"
                  >
                    {t(link.key)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t("contactUs")}</h4>
            <div className="space-y-6">
              {/* Address */}
              <div
                className="flex items-start space-x-3 pr-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/6th+of+October+City,+Industrial+Zone+3,+Plot+52",
                    "_blank"
                  )
                }
              >
                <MapPin className="w-10 h-8 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">
                    {language === "ar"
                      ? "مدينة 6 أكتوبر المنطقه الصناعية الثالثه قطعه رقم 52 تقاطع ش البنزينه مع ش7 محور خدمى ثانى"
                      : "6th of October City, 3rd Industrial Zone, Plot No. 52, Intersection of Gas Station St. with St. 7, Second Service Axis."}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                className="flex items-center space-x-3 pr-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
                onClick={() => (window.location.href = "tel:+201091903645")}
              >
                <Phone className="w-10 h-8 text-green-400" />
                <span className="text-gray-400 text-sm">
                  +201091903645 / +201111412340 / +201023945939 / +201004894878
                </span>
              </div>

              {/* Email */}
              <div
                className="flex items-center space-x-3 pr-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
                onClick={() =>
                  (window.location.href = "mailto:info@deltafiber.org")
                }
              >
                <Mail className="w-10 h-8 text-blue-400" />
                <span className="text-gray-400 text-sm">
                  info@deltafiber.org
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t("followUs")}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                  aria-label={social.label}
                >
                  <div
                    className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center 
          transition-all duration-300 group-hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </div>
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              <p>{t("workingHours")}:</p>
              <p>{t("workingHoursText")}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Delta Fiber Egypt.{" "}
              {t("allRightsReserved")}.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                {language === "ar" ? "صُنع بحب في مصر" : "Made with ♥ in Egypt"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
