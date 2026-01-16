"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { User, MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { bhojpurRajyaContent } from "./data/content";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    district: "",
    mobile: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // All 28 districts
  const allDistricts = [
    ...bhojpurRajyaContent.districts.bihar.map(d => d.name),
    ...bhojpurRajyaContent.districts.up.map(d => d.name),
    ...bhojpurRajyaContent.districts.jharkhand.map(d => d.name),
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "कृपया अपना नाम दर्ज करें";
    }

    if (!formData.district) {
      newErrors.district = "कृपया अपना जिला चुनें";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "कृपया मोबाइल नंबर दर्ज करें";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "कृपया सही ईमेल पता दर्ज करें";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      try {
        const response = await fetch("/api/registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
          setIsSubmitted(true);
          
          // Reset form after 3 seconds
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", district: "", mobile: "", email: "" });
          }, 3000);
        } else {
          setErrors({ submit: data.message || "पंजीकरण में त्रुटि हुई।" });
        }
      } catch (error) {
        console.error("Registration error:", error);
        setErrors({ submit: "पंजीकरण में त्रुटि हुई। कृपया पुनः प्रयास करें।" });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section id="registration" className="py-24 bg-linear-to-b from-orange-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Map Background */}
        <div className="absolute inset-0 opacity-[0.04]">
          <Image
            src="/map1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-orange-50/80 via-white/70 to-green-50/80" />
        
        {/* Decorative Blobs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.35, 0.25] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-green-200 rounded-full blur-3xl opacity-30" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-linear-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-wider"
          >
            Join the Movement
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 font-eczar">
            आंदोलन में <span className="text-orange-600">शामिल हों</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            भोजपुर राज्य आंदोलन के साथ जुड़ें - अपना विवरण दर्ज करें
          </p>
          <div className="w-32 h-1.5 bg-linear-to-r from-orange-500 via-white to-green-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-linear-to-r from-orange-400 via-red-400 to-green-400 rounded-3xl blur-xl opacity-30" />
            
            {/* Form Card */}
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white overflow-hidden">
              {/* Decorative Header Bar */}
              <div className="h-2 bg-linear-to-r from-orange-500 via-white to-green-500" />
              
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/98 backdrop-blur-sm flex flex-col items-center justify-center z-50 rounded-3xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 size={80} className="text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-2 font-eczar">धन्यवाद!</h3>
                  <p className="text-slate-600 text-lg">आपका पंजीकरण सफल रहा</p>
                  <p className="text-slate-500 text-sm mt-2">जय भोजपुर! जय भारत!</p>
                </motion.div>
              )}

              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-slate-700 font-bold mb-2 flex items-center gap-2">
                      <User size={18} className="text-orange-500" />
                      नाम (Name) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="अपना पूरा नाम दर्ज करें"
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.name ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'
                      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <span>⚠️</span> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* District Field */}
                  <div>
                    <label htmlFor="district" className="block text-slate-700 font-bold mb-2 flex items-center gap-2">
                      <MapPin size={18} className="text-orange-500" />
                      जिला (District) <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.district ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'
                      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 cursor-pointer`}
                    >
                      <option value="">अपना जिला चुनें</option>
                      <optgroup label="बिहार (Bihar) - 9 जिले">
                        {bhojpurRajyaContent.districts.bihar.map((d, i) => (
                          <option key={i} value={d.name}>{d.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="उत्तर प्रदेश (UP) - 17 जिले">
                        {bhojpurRajyaContent.districts.up.map((d, i) => (
                          <option key={i} value={d.name}>{d.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="झारखंड (Jharkhand) - 2 जिले">
                        {bhojpurRajyaContent.districts.jharkhand.map((d, i) => (
                          <option key={i} value={d.name}>{d.name}</option>
                        ))}
                      </optgroup>
                    </select>
                    {errors.district && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <span>⚠️</span> {errors.district}
                      </p>
                    )}
                  </div>

                  {/* Mobile Field */}
                  <div>
                    <label htmlFor="mobile" className="block text-slate-700 font-bold mb-2 flex items-center gap-2">
                      <Phone size={18} className="text-orange-500" />
                      मोबाइल नंबर (Mobile Number) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="10 अंकों का मोबाइल नंबर"
                      maxLength={10}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.mobile ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'
                      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300`}
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <span>⚠️</span> {errors.mobile}
                      </p>
                    )}
                  </div>

                  {/* Email Field (Optional) */}
                  <div>
                    <label htmlFor="email" className="block text-slate-700 font-bold mb-2 flex items-center gap-2">
                      <Mail size={18} className="text-orange-500" />
                      ईमेल (Email) <span className="text-slate-400 text-sm font-normal">(वैकल्पिक / Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'
                      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <span>⚠️</span> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className="w-full bg-linear-to-r from-orange-500 via-red-500 to-orange-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} className={`${!isLoading && "group-hover:translate-x-1"} transition-transform`} />
                    {isLoading ? "कृपया प्रतीक्षा करें..." : "पंजीकरण करें"}
                  </motion.button>

                  {/* Error Message */}
                  {errors.submit && (
                    <p className="text-red-500 text-center text-sm mt-2 flex items-center justify-center gap-1">
                      <span>⚠️</span> {errors.submit}
                    </p>
                  )}

                  {/* Privacy Note */}
                  <p className="text-center text-sm text-slate-500 mt-4">
                    🔒 आपकी जानकारी पूर्णतः सुरक्षित रहेगी
                  </p>
                </form>
              </div>

              {/* Footer Note */}
              <div className="bg-linear-to-r from-orange-50 to-green-50 px-8 py-4 border-t border-slate-200">
                <p className="text-center text-slate-600 text-sm font-semibold">
                  🚩 जय भोजपुर! जय भारत! 🚩
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 text-center"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <User className="text-orange-600" size={24} />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">सरल पंजीकरण</h3>
            <p className="text-slate-600 text-sm">आसान और त्वरित फॉर्म</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 text-center"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="text-green-600" size={24} />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">सुरक्षित</h3>
            <p className="text-slate-600 text-sm">आपका डेटा पूर्णतः सुरक्षित</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 text-center"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Send className="text-blue-600" size={24} />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">तुरंत जुड़ें</h3>
            <p className="text-slate-600 text-sm">आंदोलन का हिस्सा बनें</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
