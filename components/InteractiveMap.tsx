"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function InteractiveMap() {
  const [activeTab, setActiveTab] = useState<string>("bihar");
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  return (
    <section className="py-20 bg-linear-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🗺️ प्रस्तावित भोजपुरी राज्य का मानचित्र
          </h2>
          <p className="text-xl text-gray-600 hindi-text">
            28 जिलों वाला प्रस्तावित भोजपुर राज्य
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-orange-500 via-blue-500 to-green-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Map Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 border-4 border-orange-200 overflow-hidden">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                <Image
                  src="/map1.png"
                  alt="Bhojpur Rajya Map - प्रस्तावित भोजपुर राज्य का मानचित्र"
                  fill
                  className="object-contain"
                  priority
                />
                {/* Overlay with gradient border effect */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl ring-4 ring-inset ring-orange-300/50"></div>
              </div>
              
              {/* Map Caption */}
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold text-gray-700">
                  भोजपुरी भाषा-भाषी क्षेत्रों को मिलाकर प्रस्तावित भोजपुर राज्य
                </p>
                <p className="text-gray-500">
                  बिहार, उत्तर प्रदेश और झारखंड के कुल <span className="font-bold text-orange-600">28 जिले</span> | 
                  कुल क्षेत्रफल: <span className="font-bold text-green-600">85,390 वर्ग कि.मी.</span>
                </p>
              </div>
            </div>
          </motion.div>

          

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200 text-center">
              <div className="text-4xl font-bold text-orange-600">28</div>
              <div className="text-gray-600 font-semibold">कुल जिले</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200 text-center">
              <div className="text-4xl font-bold text-blue-600">85,390</div>
              <div className="text-gray-600 font-semibold">वर्ग कि.मी.</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200 text-center">
              <div className="text-4xl font-bold text-green-600">3</div>
              <div className="text-gray-600 font-semibold">राज्यों से</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200 text-center">
              <div className="text-4xl font-bold text-purple-600">25 करोड़+</div>
              <div className="text-gray-600 font-semibold">भोजपुरी भाषी</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
