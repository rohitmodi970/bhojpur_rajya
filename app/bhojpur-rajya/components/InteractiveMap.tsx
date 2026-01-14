"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { MapPin, Maximize2, Factory, TrendingUp, Info } from "lucide-react";
import { bhojpurRajyaContent } from "../data/content";

// All 28 districts with data
const allDistricts = [
  // Bihar - 9 districts
  ...bhojpurRajyaContent.districts.bihar.map((d) => ({
    ...d,
    state: "bihar" as const,
    color: "bg-orange-500",
  })),
  // UP - 17 districts
  ...bhojpurRajyaContent.districts.up.map((d) => ({
    ...d,
    state: "up" as const,
    color: "bg-blue-500",
  })),
  // Jharkhand - 2 districts
  ...bhojpurRajyaContent.districts.jharkhand.map((d) => ({
    ...d,
    state: "jharkhand" as const,
    color: "bg-green-500",
  })),
];

export default function InteractiveMap() {
  const [selectedDistrict, setSelectedDistrict] = useState<typeof allDistricts[0] | null>(null);
  const [activeTab, setActiveTab] = useState<"bihar" | "up" | "jharkhand">("bihar");

  const filteredDistricts = allDistricts.filter(d => d.state === activeTab);

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
          <p className="text-xl text-gray-600">
            Proposed Bhojpur State Map - 28 Districts
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
              <div className="relative w-full aspect-4/3 md:aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/map.png"
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
                  भोजपुरी भाषा-भाषी क्षेत्रों को मिलाकर प्रस्तावित भोजपुरी राज्य
                </p>
                <p className="text-gray-500">
                  बिहार, उत्तर प्रदेश और झारखंड के कुल <span className="font-bold text-orange-600">28 जिले</span> | 
                  कुल क्षेत्रफल: <span className="font-bold text-green-600">85,390 वर्ग कि.मी.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* State Tabs and District Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* State Selection Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => { setActiveTab("bihar"); setSelectedDistrict(null); }}
                className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "bihar"
                    ? "bg-orange-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-orange-50 shadow border-2 border-orange-200"
                }`}
              >
                <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                बिहार (9 जिले)
              </button>
              <button
                onClick={() => { setActiveTab("up"); setSelectedDistrict(null); }}
                className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "up"
                    ? "bg-blue-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 shadow border-2 border-blue-200"
                }`}
              >
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                उत्तर प्रदेश (17 जिले)
              </button>
              <button
                onClick={() => { setActiveTab("jharkhand"); setSelectedDistrict(null); }}
                className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "jharkhand"
                    ? "bg-green-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-green-50 shadow border-2 border-green-200"
                }`}
              >
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                झारखंड (2 जिले)
              </button>
            </div>

            {/* District Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDistricts.map((district, index) => (
                <motion.div
                  key={district.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedDistrict(selectedDistrict?.name === district.name ? null : district)}
                  className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border-2 ${
                    selectedDistrict?.name === district.name
                      ? `${district.state === "bihar" ? "border-orange-500 bg-orange-50" : district.state === "up" ? "border-blue-500 bg-blue-50" : "border-green-500 bg-green-50"} shadow-xl scale-[1.02]`
                      : "border-gray-200 bg-white hover:shadow-lg hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${district.color} text-white`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800">{district.name}</h4>
                      <p className="text-sm text-gray-500">{district.area} वर्ग कि.मी.</p>
                    </div>
                    <Info className={`w-5 h-5 ${selectedDistrict?.name === district.name ? "text-orange-500" : "text-gray-400"}`} />
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {selectedDistrict?.name === district.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                          <div className="flex items-start gap-2">
                            <Maximize2 className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                            <div>
                              <span className="text-xs text-gray-500 block">क्षेत्रफल</span>
                              <span className="font-semibold text-gray-800">{district.area} वर्ग कि.मी.</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-lg shrink-0">🌿</span>
                            <div>
                              <span className="text-xs text-gray-500 block">प्राकृतिक संसाधन</span>
                              <span className="text-gray-800">{district.resources}</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Factory className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                            <div>
                              <span className="text-xs text-gray-500 block">प्रमुख उद्योग</span>
                              <span className="text-gray-800">{district.industries}</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <TrendingUp className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                            <div>
                              <span className="text-xs text-gray-500 block">आर्थिक गतिविधि</span>
                              <span className="text-gray-800">{district.economy}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
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
