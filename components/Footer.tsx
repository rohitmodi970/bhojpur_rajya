"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Users, Heart, Share2 } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} className="w-full h-full" />
      </div>

      {/* Tricolor Top Border */}
      <div className="h-1 flex">
        <div className="flex-1 bg-orange-500" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-green-500" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="relative w-32 h-32 mx-auto md:mx-0 mb-4">
              <Image
                src="/logo1.png"
                alt="Bhojpur Rajya Logo"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-orange-400">भोजपुर राज्य</h3>
            <p className="text-gray-300 leading-relaxed">
              भोजपुरी भाषी क्षेत्र के विकास और सशक्तिकरण के लिए समर्पित आंदोलन
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-xl font-bold mb-6 text-orange-400 flex items-center gap-2 justify-center md:justify-start">
              <Mail className="w-5 h-5" />
              संपर्क करें
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:bhojpurrajya@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors group justify-center md:justify-start"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-lg">bhojpurrajya@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <span>28 जिले (बिहार, यूपी, झारखंड)</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-xl font-bold mb-6 text-orange-400 flex items-center gap-2 justify-center md:justify-start">
              <Users className="w-5 h-5" />
              आंदोलन की शक्ति
            </h4>
            <div className="space-y-3">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="text-3xl font-bold text-orange-400">28</div>
                <div className="text-gray-400 text-sm">कुल जिले</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="text-3xl font-bold text-green-400">25 करोड़+</div>
                <div className="text-gray-400 text-sm">भोजपुरी भाषी</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">
            © {currentYear} भोजपुर राज्य आंदोलन. सर्वाधिकार सुरक्षित.
          </p>
          <p className="text-sm text-gray-500">
            जय भोजपुर राज्य | जय भोजपुरी संस्कृति
          </p>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="h-1 bg-linear-to-r from-orange-500 via-green-500 to-orange-500"></div>
    </footer>
  );
}
