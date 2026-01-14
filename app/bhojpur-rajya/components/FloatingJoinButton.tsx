"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { UserPlus, ChevronUp } from "lucide-react";

export default function FloatingJoinButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById("registration");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToRegistration}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-linear-to-r from-orange-500 via-red-500 to-orange-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
            
            {/* Button */}
            <div className="relative bg-linear-to-r from-orange-500 via-red-500 to-orange-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold text-lg border-2 border-white/30">
              <UserPlus size={24} className="shrink-0" />
              <span className="hidden md:inline whitespace-nowrap">आंदोलन में शामिल हों</span>
              {/* Mobile icon only */}
              <span className="md:hidden">
                <ChevronUp size={20} />
              </span>
            </div>

            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-orange-500"
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.8, 0.4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
