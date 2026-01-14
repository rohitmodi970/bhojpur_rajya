"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Factory, Sprout, TrendingUp, Info, ExternalLink, Maximize2 } from "lucide-react";
import Image from "next/image";

// --- 1. CONFIGURATION: Colors extracted from your SVG ---
const COLORS = {
  yellow: "#FAF176",  // UP East
  pink: "#FB8A87",    // UP Central
  purple: "#C2ACF4",  // UP/Bihar Border
  green: "#83F47C",   // Bihar North
  blue: "#97F5F4",    // Bihar South
  grey: "#E9E9E8",    // Jharkhand/Remote
  dark: "#1D1814"     // Text/Borders
};

// --- 2. MAP DATA: Stylized "Puzzle" Shapes ---
// These paths mimic the geography of the Bhojpur region (UP/Bihar/Jharkhand border)
const mapDistricts = [
  // --- UTTAR PRADESH (Left/West Side) ---
  {
    id: "siddharth",
    name: "Siddharth Nagar",
    state: "Uttar Pradesh",
    color: COLORS.yellow,
    d: "M 120,60 L 200,70 L 180,130 L 110,120 Z",
    stats: { industry: "Agriculture", resource: "Fertile Soil" }
  },
  {
    id: "gorakhpur",
    name: "Gorakhpur",
    state: "Uttar Pradesh",
    color: COLORS.pink,
    d: "M 200,70 L 280,80 L 270,160 L 180,130 Z",
    stats: { industry: "Fertilizer, AIIMS", resource: "Rapti River" }
  },
  {
    id: "kushi",
    name: "Kushinagar",
    state: "Uttar Pradesh",
    color: COLORS.purple,
    d: "M 280,80 L 360,60 L 370,140 L 270,160 Z",
    stats: { industry: "Tourism", resource: "Gandak River" }
  },
  {
    id: "deoria",
    name: "Deoria",
    state: "Uttar Pradesh",
    color: COLORS.yellow,
    d: "M 270,160 L 370,140 L 360,220 L 280,210 Z",
    stats: { industry: "Sugar Mills", resource: "Agri Land" }
  },
  {
    id: "azamgarh",
    name: "Azamgarh",
    state: "Uttar Pradesh",
    color: COLORS.pink,
    d: "M 160,180 L 280,210 L 260,280 L 150,260 Z",
    stats: { industry: "Handloom", resource: "Tons River" }
  },
  {
    id: "mau",
    name: "Mau",
    state: "Uttar Pradesh",
    color: COLORS.purple,
    d: "M 280,210 L 340,220 L 330,290 L 260,280 Z",
    stats: { industry: "Textile Weaving", resource: "Tamasa River" }
  },
  {
    id: "ballia",
    name: "Ballia",
    state: "Uttar Pradesh",
    color: COLORS.yellow,
    d: "M 340,220 L 420,240 L 380,310 L 330,290 Z",
    stats: { industry: "Bindi, Tickli", resource: "Ganga-Saryu" }
  },
  {
    id: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    color: COLORS.pink,
    d: "M 180,320 L 260,330 L 250,400 L 170,380 Z",
    stats: { industry: "Silk, Tourism", resource: "Ganges" }
  },
  {
    id: "sonbhadra",
    name: "Sonbhadra",
    state: "Uttar Pradesh",
    color: COLORS.grey,
    d: "M 150,420 L 280,410 L 260,550 L 130,520 Z",
    stats: { industry: "Power Capital", resource: "Coal, Gold" }
  },

  // --- BIHAR (Right/East Side) ---
  {
    id: "w-champ",
    name: "West Champaran",
    state: "Bihar",
    color: COLORS.green,
    d: "M 360,60 L 500,40 L 520,150 L 370,140 Z",
    stats: { industry: "Sugar, Rice", resource: "Forests" }
  },
  {
    id: "e-champ",
    name: "East Champaran",
    state: "Bihar",
    color: COLORS.blue,
    d: "M 370,140 L 520,150 L 500,220 L 360,220 Z",
    stats: { industry: "Agriculture", resource: "Fertile Plains" }
  },
  {
    id: "gopal",
    name: "Gopalganj",
    state: "Bihar",
    color: COLORS.green,
    d: "M 360,220 L 440,230 L 420,290 L 340,220 Z",
    stats: { industry: "Food Processing", resource: "Gandak" }
  },
  {
    id: "siwan",
    name: "Siwan",
    state: "Bihar",
    color: COLORS.blue,
    d: "M 420,290 L 500,300 L 480,360 L 380,310 Z",
    stats: { industry: "Dairy", resource: "Remittances" }
  },
  {
    id: "saran",
    name: "Saran (Chhapra)",
    state: "Bihar",
    color: COLORS.green,
    d: "M 480,360 L 560,370 L 540,430 L 450,420 Z",
    stats: { industry: "Sugar", resource: "Ganga-Ghaghara" }
  },
  {
    id: "bhojpur",
    name: "Bhojpur (Ara)",
    state: "Bihar",
    color: COLORS.yellow,
    d: "M 400,420 L 500,430 L 480,500 L 380,480 Z",
    stats: { industry: "Rice Mills", resource: "Son Sand" }
  },
  {
    id: "rohtas",
    name: "Rohtas",
    state: "Bihar",
    color: COLORS.purple,
    d: "M 380,480 L 480,500 L 440,600 L 340,580 Z",
    stats: { industry: "Cement", resource: "Limestone" }
  },
];

export default function InteractiveBhojpurMap() {
  const [hoveredDistrict, setHoveredDistrict] = useState<typeof mapDistricts[0] | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showFullMap, setShowFullMap] = useState(false);

  // Update tooltip position on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="map" className="min-h-screen bg-slate-50 py-16 px-4 font-sans">
      <div className="container mx-auto max-w-6xl">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-orange-800 tracking-wide uppercase">Proposed State</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-4 tracking-tight font-eczar">
            Hamar <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-600">Bhojpur</span> Rajya
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg mb-6">
            Interactive map of the 28 proposed districts across UP, Bihar, and Jharkhand.
          </p>
          
          {/* View Full Map Button */}
          <motion.button
            onClick={() => setShowFullMap(true)}
            className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Maximize2 size={20} />
            View Full Map (map1.png)
            <ExternalLink size={16} />
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* --- 1. THE INTERACTIVE MAP --- */}
          <div className="lg:col-span-8 relative">
            <motion.div 
              className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoveredDistrict(null)}
            >
              {/* Map Surface */}
              <div className="relative aspect-[4/3] w-full bg-slate-50">
                {/* SVG Container */}
                <svg 
                  viewBox="0 0 600 650" 
                  className="w-full h-full drop-shadow-xl"
                  style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))" }}
                >
                  {/* Grid Lines for Texture */}
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* District Paths */}
                  {mapDistricts.map((district) => (
                    <motion.path
                      key={district.id}
                      d={district.d}
                      fill={district.color}
                      stroke="white"
                      strokeWidth="2"
                      className="cursor-pointer outline-none"
                      
                      // Animations
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ opacity: 1, pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.1 }}
                      
                      // Hover State
                      whileHover={{ 
                        scale: 1.02, 
                        zIndex: 10,
                        stroke: "#333",
                        strokeWidth: 3,
                        filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.2))"
                      }}
                      onHoverStart={() => setHoveredDistrict(district)}
                    />
                  ))}
                </svg>

                {/* --- FLOATING TOOLTIP (Follows Mouse) --- */}
                <AnimatePresence>
                  {hoveredDistrict && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1, x: mousePos.x + 20, y: mousePos.y - 80 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute top-0 left-0 pointer-events-none z-50 hidden md:block"
                    >
                      <div className="bg-slate-900/90 text-white backdrop-blur-md p-4 rounded-xl shadow-2xl border border-slate-700 w-48">
                        <div className="flex items-center gap-2 mb-2 border-b border-slate-700 pb-2">
                          <div className={`w-3 h-3 rounded-full`} style={{ background: hoveredDistrict.color }} />
                          <span className="font-bold text-sm">{hoveredDistrict.name}</span>
                        </div>
                        <div className="space-y-1 text-xs text-slate-300">
                          <div className="flex justify-between">
                            <span>State:</span> <span className="text-white">{hoveredDistrict.state}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Industry:</span> <span className="text-white">{hoveredDistrict.stats.industry}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-slate-100 text-xs font-medium text-slate-600 flex gap-4">
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full" style={{background: COLORS.yellow}}></span> UP East</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full" style={{background: COLORS.green}}></span> Bihar North</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full" style={{background: COLORS.blue}}></span> Bihar South</div>
              </div>
            </motion.div>
          </div>

          {/* --- 2. SIDEBAR INFO PANEL --- */}
          <div className="lg:col-span-4 space-y-6">
            <AnimatePresence mode="wait">
              {hoveredDistrict ? (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 h-full min-h-[400px]"
                >
                  {/* Header with Dynamic Color */}
                  <div className={`h-32 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center`} style={{ backgroundColor: hoveredDistrict.color }}>
                    <MapPin className="text-white/20 w-32 h-32 absolute -bottom-8 -right-8 rotate-12" />
                    <h2 className="relative z-10 text-3xl font-black text-slate-900/80 drop-shadow-sm text-center px-4">
                      {hoveredDistrict.name}
                    </h2>
                  </div>

                  {/* Stats List */}
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors group">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:scale-110 transition-transform"><Factory size={18} /></div>
                        <h4 className="font-bold text-slate-700">Key Industry</h4>
                      </div>
                      <p className="text-slate-500 pl-11 text-sm">{hoveredDistrict.stats.industry}</p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors group">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg group-hover:scale-110 transition-transform"><Sprout size={18} /></div>
                        <h4 className="font-bold text-slate-700">Resources</h4>
                      </div>
                      <p className="text-slate-500 pl-11 text-sm">{hoveredDistrict.stats.resource}</p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors group">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="p-2 bg-orange-100 text-orange-600 rounded-lg group-hover:scale-110 transition-transform"><TrendingUp size={18} /></div>
                        <h4 className="font-bold text-slate-700">Potential</h4>
                      </div>
                      <p className="text-slate-500 pl-11 text-sm">High growth zone for {hoveredDistrict.stats.industry.split(',')[0]} sector.</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 h-full min-h-[400px] flex flex-col items-center justify-center text-center text-slate-400"
                >
                  <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <Info size={40} className="text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">Explore the State</h3>
                  <p>Hover over any district on the map to view detailed economic and industrial statistics.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Full Map Modal */}
      <AnimatePresence>
        {showFullMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowFullMap(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-linear-to-r from-orange-500 to-red-500 text-white p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-extrabold font-eczar mb-1">Complete Bhojpur Rajya Map</h2>
                  <p className="text-orange-100 text-sm">28 Districts across Bihar, UP & Jharkhand</p>
                </div>
                <button
                  onClick={() => setShowFullMap(false)}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Map Image */}
              <div className="relative w-full h-[calc(90vh-120px)] overflow-auto bg-slate-50">
                <div className="relative min-h-full">
                  <Image
                    src="/map1.png"
                    alt="Complete Bhojpur Rajya Map"
                    width={2000}
                    height={2000}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="bg-slate-50 p-4 flex items-center justify-between border-t border-slate-200">
                <div className="text-sm text-slate-600">
                  <span className="font-semibold">Total Area:</span> 85,390 sq km | <span className="font-semibold">Population:</span> ~8.5 Crore
                </div>
                <a
                  href="/map1.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                >
                  <ExternalLink size={16} />
                  Open in New Tab
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}