import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t("address"),
      content: t("addressText"),
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Phone,
      title: t("phone"),
      content: "+201091903645 / +201111412340 / +201023945939 / +201004894878",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Mail,
      title: t("email"),
      content: "info@deltafiber.org",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Clock,
      title: t("workingHours"),
      content: t("workingHoursText"),
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
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
              {t("contactTitle")}
            </h1>
            <p className="text-lg text-gray-600">
              {language === "ar"
                ? "تواصل معنا للحصول على أفضل حلول الفيبر جلاس لمشاريعك"
                : "Get in touch with us for the best fiberglass solutions for your projects"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div
                  className={`w-16 h-16 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {info.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {info.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                {language === "ar" ? "أرسل لنا رسالة" : "Send us a Message"}
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === "ar" ? "الاسم" : "Name"}
                    </label>
                    <Input
                      placeholder={
                        language === "ar" ? "اسمك الكامل" : "Your full name"
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("email")}
                    </label>
                    <Input
                      type="email"
                      placeholder={
                        language === "ar"
                          ? "بريدك الإلكتروني"
                          : "Your email address"
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("phone")}
                  </label>
                  <Input
                    placeholder={
                      language === "ar" ? "رقم هاتفك" : "Your phone number"
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === "ar" ? "الموضوع" : "Subject"}
                  </label>
                  <Input
                    placeholder={
                      language === "ar" ? "موضوع الرسالة" : "Message subject"
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === "ar" ? "الرسالة" : "Message"}
                  </label>
                  <Textarea
                    rows={5}
                    placeholder={
                      language === "ar"
                        ? "اكتب رسالتك هنا..."
                        : "Write your message here..."
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white py-3"
                >
                  {language === "ar" ? "إرسال الرسالة" : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d31.0123456!3d30.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s6th+of+October+City%2C+Egypt!5e0!3m2!1sen!2seg!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-6">
                  {t("followUs")}
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
                <p className="text-gray-600 mt-6 text-sm">
                  {language === "ar"
                    ? "تابعنا على وسائل التواصل الاجتماعي للحصول على آخر الأخبار والتحديثات"
                    : "Follow us on social media for the latest news and updates"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
