"use client";

import { motion } from "framer-motion";
import { bhojpurRajyaContent } from "./data/content";

export default function WhyNeeded() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            भोजपुरी राज्य के जरूरत काहे बा?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why Bhojpur State is Essential?
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-amber-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {bhojpurRajyaContent.whyNeeded.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300 h-full">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
