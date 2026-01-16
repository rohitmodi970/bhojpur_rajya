"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Flame, Heart, Share2, Users } from "lucide-react";
import { bhojpurRajyaContent } from "./data/content";
import Image from "next/image";
import { useState } from "react";

export default function SloganBanner() {
  const [supportLoading, setSupportLoading] = useState(false);
  const [shareLoading, setShareLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSupport = async () => {
    try {
      setSupportLoading(true);
      const response = await fetch("/api/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likeType: "support" }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("समर्थन के लिए धन्यवाद! 🙏");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (error) {
      console.error("Support error:", error);
      setMessage("त्रुटि हुई। कृपया पुनः प्रयास करें।");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setSupportLoading(false);
    }
  };

  const handleShare = async () => {
    try {
      setShareLoading(true);
      
      // Log share action
      await fetch("/api/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likeType: "share" }),
      });

      // Share functionality
      if (navigator.share) {
        await navigator.share({
          title: "भोजपुर राज्य आंदोलन",
          text: "भोजपुरी भाषा-भाषी क्षेत्रों के लिए अलग राज्य की मांग - भोजपुर राज्य आंदोलन में शामिल हों!",
          url: window.location.href,
        });
        setMessage("शेयर करने के लिए धन्यवाद! 🙏");
      } else {
        // Fallback - copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        setMessage("लिंक कॉपी हो गया! अब आप इसे शेयर कर सकते हैं। 📋");
      }
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Share error:", error);
      setMessage("शेयर करने के लिए धन्यवाद! 🙏");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setShareLoading(false);
    }
  };

  const scrollToRegistration = () => {
    const element = document.getElementById("registration");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative py-24 overflow-hidden"
    >
      {/* Animated Gradient Background with overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-600 via-red-600 to-orange-700" />
      
      {/* Map SVG for geographic context */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            <Image
              src="/map.svg"
              alt=""
              fill
              className="object-contain opacity-50"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Logo Pattern Background - Subtle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-4"
        >
          <Image
            src="/logo1.png"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 left-10"
        >
          <Flame className="w-16 h-16 text-yellow-300 opacity-50" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 right-10"
        >
          <Flame className="w-20 h-20 text-yellow-300 opacity-50" />
        </motion.div>
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/3 right-20"
        >
          <Flame className="w-12 h-12 text-yellow-400 opacity-40" />
        </motion.div>
        
        {/* Glowing orbs */}
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main Slogan Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-white/20 rounded-[2.5rem] blur-xl" />
            
            <div className="relative bg-white/10 backdrop-blur-xl rounded-[2rem] p-8 md:p-16 max-w-5xl mx-auto border-2 border-white/30 shadow-2xl overflow-hidden">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-white/30 rounded-tl-[2rem]" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-white/30 rounded-br-[2rem]" />
              
              {/* Main Slogan */}
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-10 leading-tight drop-shadow-2xl font-eczar"
              >
                &ldquo;{bhojpurRajyaContent.hero.slogan}&rdquo;
              </motion.h2>

              {/* Poem Lines */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4 mb-8"
              >
                {bhojpurRajyaContent.hero.poem.map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl lg:text-3xl text-white/95 font-bold leading-relaxed"
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>

              {/* Tricolor Divider */}
              <div className="w-48 h-1.5 mx-auto rounded-full overflow-hidden flex mb-8">
                <div className="flex-1 bg-orange-400" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-green-500" />
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <div className="bg-white/15 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
                  <span className="text-2xl md:text-3xl font-black text-white">28</span>
                  <span className="text-white/80 ml-2">जिले</span>
                </div>
                <div className="bg-white/15 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
                  <span className="text-2xl md:text-3xl font-black text-white">3</span>
                  <span className="text-white/80 ml-2">राज्य</span>
                </div>
                <div className="bg-white/15 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
                  <span className="text-2xl md:text-3xl font-black text-white">8.5 Cr</span>
                  <span className="text-white/80 ml-2">जनसंख्या</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 space-y-8"
          >
            {/* Success Message */}
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-full inline-block font-bold shadow-2xl text-lg"
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={scrollToRegistration}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full text-xl font-black shadow-2xl hover:shadow-white/30 transition-all duration-300"
              >
                <Users className="w-6 h-6" />
                आंदोलन में शामिल हों
              </motion.button>
              <motion.button
                onClick={handleSupport}
                disabled={supportLoading}
                whileHover={{ scale: supportLoading ? 1 : 1.05, y: supportLoading ? 0 : -2 }}
                whileTap={{ scale: supportLoading ? 1 : 0.95 }}
                className="flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full text-xl font-black shadow-2xl hover:bg-green-400 transition-all duration-300 border-2 border-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Heart className="w-6 h-6" />
                {supportLoading ? "प्रतीक्षा करें..." : "समर्थन करें"}
              </motion.button>
              <motion.button
                onClick={handleShare}
                disabled={shareLoading}
                whileHover={{ scale: shareLoading ? 1 : 1.05, y: shareLoading ? 0 : -2 }}
                whileTap={{ scale: shareLoading ? 1 : 0.95 }}
                className="flex items-center gap-3 bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:bg-white/30 transition-all duration-300 border border-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Share2 className="w-6 h-6" />
                {shareLoading ? "प्रतीक्षा करें..." : "शेयर करें"}
              </motion.button>
            </div>

            {/* Hashtags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {["#BhojpurRajya", "#भोजपुरीराज्य", "#BhojpuriState", "#NewStateMovement"].map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,80 350,80 500,60 C650,40 850,40 1000,60 C1150,80 1300,80 1200,0 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </motion.section>
  );
}
