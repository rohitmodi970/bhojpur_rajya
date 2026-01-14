"use client";

import { motion } from "framer-motion";
import { ChevronDown, Play, UserPlus } from "lucide-react";
import { bhojpurRajyaContent } from "../data/content";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background with mesh pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-600 via-amber-500 to-green-600" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      {/* Large Center Logo with 3D effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 0.12, scale: 1, rotateY: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Image
            src="/logo1.png"
            alt="Bhojpur Rajya Logo"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
          {/* Logo glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent blur-3xl" />
        </motion.div>
        
        {/* Animated Floating Logos with better positioning */}
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 8, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-72 h-72 opacity-8"
        >
          <Image src="/logo1.png" alt="" fill className="object-contain filter blur-[2px]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-80 h-80 opacity-8"
        >
          <Image src="/logo1.png" alt="" fill className="object-contain filter blur-[2px]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-16 w-48 h-48 opacity-6"
        >
          <Image src="/logo1.png" alt="" fill className="object-contain filter blur-sm" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -18, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-16 w-56 h-56 opacity-6"
        >
          <Image src="/logo1.png" alt="" fill className="object-contain filter blur-sm" />
        </motion.div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-green-400/20 rounded-full blur-3xl" 
        />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl" />
      </div>

      {/* Enhanced Tricolor Stripe with gradient */}
      <div className="absolute top-0 left-0 right-0 h-3 flex shadow-lg">
        <div className="flex-1 bg-linear-to-r from-orange-500 to-orange-600" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-linear-to-r from-green-600 to-green-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Main Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -50, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
          className="mb-8"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative inline-block">
            {/* Glassmorphic container */}
            <div className="absolute -inset-6 bg-white/20 backdrop-blur-md rounded-3xl" />
            <div className="absolute -inset-4 bg-gradient-radial from-white/40 to-transparent blur-2xl" />
            
            <div className="relative w-36 h-36 md:w-48 md:h-48 mx-auto">
              <Image
                src="/logo1.png"
                alt="Bhojpur Rajya Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
              />
              {/* Multi-layer glow */}
              <div className="absolute inset-0 bg-gradient-radial from-white/40 via-white/20 to-transparent rounded-full blur-2xl -z-10 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-radial from-orange-300/30 to-transparent rounded-full blur-3xl -z-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 drop-shadow-2xl tracking-tight font-eczar">
            {bhojpurRajyaContent.hero.title}
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-3xl text-white/90 font-semibold"
          >
            {bhojpurRajyaContent.hero.subtitle}
          </motion.p>
        </motion.div>

        {/* Poem Card - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 md:p-12 max-w-4xl mx-auto mb-10 border border-white/30 shadow-2xl overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-white/40 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-white/40 rounded-br-3xl" />
          
          {bhojpurRajyaContent.hero.poem.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
              className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-3 drop-shadow-lg leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* Slogan Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
          className="inline-block"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-orange-600 via-white to-green-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-linear-to-r from-orange-600 via-red-600 to-orange-600 text-white px-10 py-5 rounded-full text-xl md:text-3xl font-black shadow-2xl border-2 border-white/50">
              {bhojpurRajyaContent.hero.slogan}
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#vision"
            className="flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg hover:shadow-xl"
          >
            आंदोलन के बारे में
            <ChevronDown className="w-5 h-5" />
          </a>
          <a
            href="#registration"
            className="flex items-center gap-2 bg-linear-to-r from-orange-500 via-red-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-shadow border-2 border-white/30"
          >
            <UserPlus className="w-5 h-5" />
            आंदोलन में शामिल हों
          </a>
          <a
            href="#map"
            className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border border-white/40"
          >
            <Play className="w-5 h-5" />
            मानचित्र देखें
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-white/70 text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Tricolor Stripe Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex">
        <div className="flex-1 bg-orange-500" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-green-600" />
      </div>
    </section>
  );
}
