"use client";

import { motion } from "framer-motion";
import { Scale, FileText, Users, Megaphone, ArrowRight } from "lucide-react";
import { bhojpurRajyaContent } from "./data/content";
import Image from "next/image";

export default function MovementStrategy() {
  const strategies = [
    {
      title: "जनजागरण अभियान",
      titleEn: "Public Awareness",
      icon: Users,
      items: bhojpurRajyaContent.movementStrategy.awareness,
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "राजनीतिक दबाव",
      titleEn: "Political Pressure",
      icon: Megaphone,
      items: bhojpurRajyaContent.movementStrategy.political,
      color: "from-orange-500 to-red-500",
      bgLight: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      title: "कानूनी लड़ाई",
      titleEn: "Legal Battle",
      icon: Scale,
      items: bhojpurRajyaContent.movementStrategy.legal,
      color: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "जन आंदोलन",
      titleEn: "Mass Movement",
      icon: FileText,
      items: bhojpurRajyaContent.movementStrategy.movement,
      color: "from-green-500 to-emerald-500",
      bgLight: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  return (
    <section className="py-24 bg-linear-to-b from-white via-slate-50 to-orange-50 relative overflow-hidden">
      {/* Map SVG Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-1/4 top-0 w-[80%] h-full opacity-[0.04]">
          <Image
            src="/map.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
            Strategy
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            आंदोलन की रणनीति
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            How to Strengthen the Bhojpur Rajya Movement
          </p>
          <div className="w-32 h-1.5 bg-linear-to-r from-orange-500 via-white to-green-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${strategy.borderColor} hover:border-transparent h-full relative`}>
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-linear-to-r ${strategy.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className={`bg-linear-to-r ${strategy.color} p-6 relative overflow-hidden`}>
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute -right-4 -top-4 w-24 h-24 border-4 border-white rounded-full" />
                      <div className="absolute -right-8 -bottom-8 w-32 h-32 border-4 border-white rounded-full" />
                    </div>
                    
                    <div className="flex items-center justify-between relative z-10">
                      <div>
                        <h3 className="text-2xl font-black text-white">{strategy.title}</h3>
                        <p className="text-white/80 text-sm font-semibold">{strategy.titleEn}</p>
                      </div>
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3">
                      {strategy.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 group/item"
                        >
                          <ArrowRight className={`w-5 h-5 mt-0.5 shrink-0 text-gray-400 group-hover/item:text-orange-500 transition-colors`} />
                          <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Success Examples */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-2 bg-linear-to-r from-green-400 to-emerald-500 rounded-3xl blur-xl opacity-30" />
            
            <div className="relative bg-linear-to-br from-green-500 via-emerald-500 to-green-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <h3 className="text-2xl md:text-4xl font-black mb-2 text-center relative z-10">
                सफल उदाहरण
              </h3>
              <p className="text-center text-green-100 mb-8 text-lg">भारत में नए राज्यों का निर्माण</p>
              
              <div className="grid md:grid-cols-3 gap-6 relative z-10">
                {bhojpurRajyaContent.successExamples.map((example, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/25 transition-colors"
                  >
                    <div className="text-5xl font-black mb-2 text-white">{example.year}</div>
                    <div className="text-xl font-bold mb-2 text-green-100">{example.state}</div>
                    <div className="text-sm text-green-200 leading-relaxed">{example.basis}</div>
                  </motion.div>
                ))}
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-8 text-lg md:text-xl font-bold bg-white/20 rounded-xl py-4 px-6 relative z-10"
              >
                ✨ तेलंगाना के मॉडल से सीख लेकर भोजपुर राज्य का सपना साकार किया जा सकता है!
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
