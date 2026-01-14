"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Factory, ChevronRight, X, MapPin, Maximize2, TrendingUp, Leaf } from "lucide-react";
import { bhojpurRajyaContent } from "../data/content";
import Image from "next/image";

interface District {
  name: string;
  area: string;
  resources: string;
  industries: string;
  economy: string;
}

export default function Districts() {
  const [activeTab, setActiveTab] = useState<"bihar" | "up" | "jharkhand">("bihar");
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);

  const tabs = [
    { id: "bihar" as const, label: "बिहार के जिले", count: 9, color: "orange" },
    { id: "up" as const, label: "उत्तर प्रदेश के जिले", count: 17, color: "blue" },
    { id: "jharkhand" as const, label: "झारखंड के जिले", count: 2, color: "green" },
  ];

  const openModal = (district: District) => {
    setSelectedDistrict(district);
  };

  const closeModal = () => {
    setSelectedDistrict(null);
  };

  useEffect(() => {
    if (selectedDistrict) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedDistrict]);

  return (
    <section className="py-20 bg-linear-to-b from-green-50 to-white relative overflow-hidden">
      {/* Map1.png as visible background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.12]">
          <Image
            src="/map1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-green-50/85 via-white/80 to-white/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 font-eczar">
            28 जिलों का विवरण
          </h2>
          <p className="text-xl text-gray-600">
            आर्थिक, औद्योगिक और प्राकृतिक संपदा
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-green-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? tab.id === "bihar"
                    ? "bg-orange-600 text-white shadow-lg scale-105"
                    : tab.id === "up"
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-green-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Districts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {bhojpurRajyaContent.districts[activeTab].map((district, index) => (
            <motion.div
              key={district.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-orange-300 group"
            >
              <div className="bg-linear-to-r from-orange-500 to-amber-500 p-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Factory className="w-5 h-5" />
                  {district.name}
                </h3>
              </div>
              
              <div className="p-6 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold shrink-0">📏</span>
                  <div>
                    <div className="text-sm text-gray-600">क्षेत्रफल</div>
                    <div className="font-semibold text-gray-800">{district.area} वर्ग कि.मी.</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold shrink-0">🌿</span>
                  <div>
                    <div className="text-sm text-gray-600">प्राकृतिक संसाधन</div>
                    <div className="font-semibold text-gray-800">{district.resources}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold shrink-0">🏭</span>
                  <div>
                    <div className="text-sm text-gray-600">प्रमुख उद्योग</div>
                    <div className="font-semibold text-gray-800">{district.industries}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold shrink-0">💼</span>
                  <div>
                    <div className="text-sm text-gray-600">आर्थिक गतिविधि</div>
                    <div className="font-semibold text-gray-800">{district.economy}</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openModal(district)}
                className="w-full bg-gray-50 px-6 py-3 flex items-center justify-between group-hover:bg-orange-50 transition-colors duration-300 cursor-pointer hover:bg-orange-100"
              >
                <span className="text-sm text-gray-600 font-semibold">विस्तार से जानें</span>
                <ChevronRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* District Detail Modal */}
      <AnimatePresence>
        {selectedDistrict && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 p-6 rounded-t-3xl relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/20 rounded-2xl">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      {selectedDistrict.name}
                    </h2>
                    <p className="text-orange-100 text-lg">भोजपुर राज्य का प्रस्तावित जिला</p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Area Card */}
                <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-2xl p-5 border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-500 rounded-xl">
                      <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">क्षेत्रफल (Area)</h3>
                  </div>
                  <p className="text-3xl font-bold text-orange-600">
                    {selectedDistrict.area} वर्ग कि.मी.
                  </p>
                  <p className="text-gray-600 mt-2">
                    ({selectedDistrict.area} Square Kilometers)
                  </p>
                </div>

                {/* Resources Card */}
                <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-500 rounded-xl">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">प्राकृतिक संसाधन (Natural Resources)</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {selectedDistrict.resources}
                  </p>
                </div>

                {/* Industries Card */}
                <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-5 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-500 rounded-xl">
                      <Factory className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">प्रमुख उद्योग (Major Industries)</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {selectedDistrict.industries}
                  </p>
                </div>

                {/* Economy Card */}
                <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-500 rounded-xl">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">आर्थिक गतिविधि (Economic Activity)</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {selectedDistrict.economy}
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-2xl p-5 text-center text-white">
                  <p className="text-lg font-semibold mb-2">
                    भोजपुर राज्य आंदोलन में शामिल हों!
                  </p>
                  <p className="text-orange-100">
                    #BhojpurRajya #भोजपुरीराज्य
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={closeModal}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 rounded-xl transition-colors duration-300"
                >
                  बंद करें (Close)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
