"use client";

import { motion } from "framer-motion";
import { BookOpen, MapPin, Scale, CheckCircle } from "lucide-react";
import { bhojpurRajyaContent } from "../data/content";

const iconMap = {
  language: BookOpen,
  statehood: MapPin,
  equality: Scale,
};

export default function Objectives() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            मुख्य उद्देश (Uddeshya)
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {bhojpurRajyaContent.objectives.map((objective, index) => {
            const Icon = iconMap[objective.id as keyof typeof iconMap];
            
            return (
              <motion.div
                key={objective.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-linear-to-br from-orange-500 to-amber-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                      {objective.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {objective.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                        <span className="text-gray-700 leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
