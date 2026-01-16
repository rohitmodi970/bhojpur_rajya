"use client";

import { motion } from "framer-motion";
import { Target, Sparkles } from "lucide-react";
import { bhojpurRajyaContent } from "./data/content";
import Image from "next/image";

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-linear-to-b from-white via-orange-50/50 to-white relative overflow-hidden">
      {/* Map1.png as visible background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.15]">
          <Image
            src="/map1.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-white/80 via-orange-50/70 to-white/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-amber-200 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-linear-to-r from-orange-500 via-amber-500 to-orange-500 text-white px-8 py-4 rounded-full mb-6 shadow-xl"
            >
              <Target className="w-7 h-7" />
              <h2 className="text-2xl md:text-3xl font-extrabold font-eczar">
                {bhojpurRajyaContent.vision.title}
              </h2>
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto rounded-full" />
          </div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Card Glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-orange-400 via-amber-400 to-orange-400 rounded-[2rem] blur-lg opacity-30" />
            
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-100 overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-orange-100 to-transparent rounded-bl-full" />
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 text-center relative z-10">
                {bhojpurRajyaContent.vision.description}
              </p>
              
              <div className="bg-linear-to-r from-orange-50 via-amber-50 to-orange-50 rounded-2xl p-6 border-l-4 border-r-4 border-orange-500">
                <p className="text-lg md:text-xl text-gray-800 font-bold text-center flex items-center justify-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  {bhojpurRajyaContent.vision.subtitle}
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
