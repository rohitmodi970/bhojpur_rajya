"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, Scale, FileCheck } from "lucide-react";
import { bhojpurRajyaContent } from "./data/content";
import Image from "next/image";

export default function ConstitutionalBasis() {
  return (
    <section className="py-24 bg-linear-to-b from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Dual Background - Logo + Map */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Logo Watermark */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[80%]"
        >
          <Image
            src="/logo1.png"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
        {/* Map Overlay for geographic legitimacy */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.03, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[45%] h-[75%]"
        >
          <Image
            src="/map.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-30" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-linear-to-r from-orange-600 via-red-600 to-orange-600 text-white px-8 py-4 rounded-full mb-6 shadow-xl"
          >
            <BookOpen className="w-7 h-7" />
            <h2 className="text-2xl md:text-3xl font-black">
              संवैधानिक आधार
            </h2>
            <Scale className="w-6 h-6" />
          </motion.div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Constitutional Framework for New State Formation
          </p>
          <div className="w-32 h-1.5 bg-linear-to-r from-orange-500 via-white to-green-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-10">
          {/* Article 2 & 3 */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-linear-to-r from-orange-500 to-amber-500 text-white px-5 py-2 rounded-xl font-black text-xl shadow-lg">
                      अनुच्छेद 2
                    </div>
                    <FileCheck className="w-6 h-6 text-orange-500" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {bhojpurRajyaContent.constitutionalBasis.article2}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-100 hover:border-green-300 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-linear-to-r from-green-500 to-emerald-500 text-white px-5 py-2 rounded-xl font-black text-xl shadow-lg">
                      अनुच्छेद 3
                    </div>
                    <FileCheck className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {bhojpurRajyaContent.constitutionalBasis.article3}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Card Glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-orange-400 via-amber-400 to-green-400 rounded-[2rem] blur-xl opacity-20" />
            
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-100 overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-orange-200 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-green-200 rounded-br-3xl" />

              <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-8 text-center relative z-10">
                🏛️ राज्य निर्माण की प्रक्रिया
              </h3>
              
              <div className="space-y-4 relative z-10">
                {bhojpurRajyaContent.constitutionalBasis.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 bg-linear-to-r from-orange-50 to-amber-50 rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-100"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-amber-500 text-white font-black text-lg shrink-0 shadow-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-semibold leading-relaxed text-lg">
                        {step}
                      </p>
                    </div>
                    <CheckCircle2 className="w-7 h-7 text-green-500 shrink-0" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-2 bg-linear-to-r from-green-400 to-emerald-500 rounded-3xl blur-xl opacity-30" />
            
            <div className="relative bg-linear-to-br from-green-500 via-emerald-500 to-green-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black mb-4 relative z-10">
                ✨ भोजपुर राज्य संभव है!
              </h3>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed relative z-10 text-green-100">
                तेलंगाना, झारखंड, छत्तीसगढ़ आ उत्तराखंड जइसन राज्य बन सकेला,<br />
                त भोजपुर राज्य काहे नइखे बन सके?
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/30 transition-colors">
                  👥 25 करोड़+ भोजपुरी भाषी
                </div>
                <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/30 transition-colors">
                  📍 28 जिले
                </div>
                <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/30 transition-colors">
                  📐 85,390 वर्ग कि.मी.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
