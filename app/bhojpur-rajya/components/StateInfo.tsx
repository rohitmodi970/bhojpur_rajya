"use client";

import { motion } from "framer-motion";
import { MapIcon, Maximize, Building2, Waves, Mountain, Wheat, Factory } from "lucide-react";
import { bhojpurRajyaContent } from "../data/content";
import Image from "next/image";

export default function StateInfo() {
  return (
    <section className="py-24 bg-linear-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
      {/* Enhanced Map Background with dual placement */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Map */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.05, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[55%] h-[90%]"
        >
          <Image
            src="/map.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
        {/* Right Map - mirrored */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.03, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[70%] scale-x-[-1]"
        >
          <Image
            src="/map.svg"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Enhanced Decorative Blobs with animation */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-emerald-200 rounded-full blur-3xl opacity-30" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-wider"
            >
              Proposed State
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 font-eczar">
              प्रस्तावित <span className="text-green-600">भोजपुरी राज्य</span>
            </h2>
            <div className="w-32 h-1.5 bg-linear-to-r from-orange-500 via-white to-green-500 mx-auto rounded-full"></div>
          </div>

          {/* Key Stats - Hero Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 text-center h-full hover:shadow-xl hover:border-green-300 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-50 rounded-bl-full" />
                <div className="w-14 h-14 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Maximize className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-black text-gray-800 mb-1">
                  {bhojpurRajyaContent.stateInfo.totalArea}
                </div>
                <div className="text-gray-600 font-semibold">कुल क्षेत्रफल</div>
                <div className="text-xs text-gray-400 mt-1">Total Area</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 text-center h-full hover:shadow-xl hover:border-blue-300 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full" />
                <div className="w-14 h-14 bg-linear-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <MapIcon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-black text-gray-800 mb-1">
                  {bhojpurRajyaContent.stateInfo.totalDistricts}
                </div>
                <div className="text-gray-600 font-semibold">कुल जिले</div>
                <div className="text-xs text-gray-400 mt-1">Total Districts</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 text-center h-full hover:shadow-xl hover:border-purple-300 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-bl-full" />
                <div className="w-14 h-14 bg-linear-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-black text-gray-800 mb-1">
                  {bhojpurRajyaContent.stateInfo.proposedCapital}
                </div>
                <div className="text-gray-600 font-semibold">प्रस्तावित राजधानी</div>
                <div className="text-xs text-gray-400 mt-1">Proposed Capital</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-linear-to-br from-orange-500 via-red-500 to-green-600 rounded-2xl p-6 shadow-xl text-center text-white h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-white rounded-full" />
                </div>
                <div className="text-lg font-black mb-3 relative z-10">3 राज्यों से</div>
                <div className="space-y-2 text-sm font-semibold relative z-10">
                  <div className="bg-white/20 rounded-lg py-2 px-3">🟠 बिहार: {bhojpurRajyaContent.stateInfo.districts.bihar}</div>
                  <div className="bg-white/20 rounded-lg py-2 px-3">🔵 यूपी: {bhojpurRajyaContent.stateInfo.districts.up}</div>
                  <div className="bg-white/20 rounded-lg py-2 px-3">🟢 झारखंड: {bhojpurRajyaContent.stateInfo.districts.jharkhand}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Rivers */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Waves className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-800">प्रमुख नदियाँ</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bhojpurRajyaContent.resources.rivers.map((river, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-linear-to-r from-blue-100 to-cyan-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold border border-blue-200 hover:shadow-md transition-shadow"
                      >
                        {river}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Minerals */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-amber-100 hover:border-amber-300 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Mountain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-800">खनिज संपदा</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bhojpurRajyaContent.resources.minerals.map((mineral, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-linear-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold border border-amber-200 hover:shadow-md transition-shadow"
                      >
                        {mineral}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Crops */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-100 hover:border-green-300 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Wheat className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-800">प्रमुख फसलें</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bhojpurRajyaContent.resources.crops.map((crop, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-linear-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold border border-green-200 hover:shadow-md transition-shadow"
                      >
                        {crop}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 h-full relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Factory className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-800">प्रमुख उद्योग</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bhojpurRajyaContent.resources.industries.map((industry, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-linear-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold border border-purple-200 hover:shadow-md transition-shadow"
                      >
                        {industry}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
 