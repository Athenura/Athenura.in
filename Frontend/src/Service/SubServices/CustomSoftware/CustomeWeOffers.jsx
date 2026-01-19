import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Layout, 
  Monitor, 
  BarChart3, 
  Cable, 
  Zap, 
  ArrowUpRight 
} from "lucide-react";

/* ===============================
   DATA CONFIGURATION
================================ */
const SERVICES = [
  {
    id: 1,
    title: "Custom Website Development",
    desc: "Bespoke corporate websites built on modern frameworks (React, Next.js). We prioritize SEO architecture, semantic accessibility, and brand alignment.",
    icon: <Globe size={24} />,
  },
  {
    id: 2,
    title: "Web App Development",
    desc: "Complex SaaS platforms and internal tools. We engineer secure, scalable single-page applications (SPAs) that handle heavy data loads with ease.",
    icon: <Monitor size={24} />,
  },
  {
    id: 3,
    title: "High-Conversion Landing Pages",
    desc: "Marketing-focused pages designed for ROI. Optimized layouts, clear CTAs, and A/B test-ready structures to maximize your campaign performance.",
    icon: <Layout size={24} />,
  },
  {
    id: 4,
    title: "Admin Dashboards",
    desc: "Centralized control panels for your business data. We build intuitive data visualization interfaces with real-time analytics and user management.",
    icon: <BarChart3 size={24} />,
  },
  {
    id: 5,
    title: "API Integration & Middleware",
    desc: "Seamlessly connect your software with third-party tools (Stripe, CRM, ERP). We build robust middleware to ensure secure data synchronization.",
    icon: <Cable size={24} />,
  },
  {
    id: 6,
    title: "Performance Optimization",
    desc: "Speed is a feature. We audit and refactor existing codebases to achieve 90+ Lighthouse scores, reducing bounce rates and improving SERP rankings.",
    icon: <Zap size={24} />,
  },
];

/* ===============================
   MAIN COMPONENT
================================ */
const ServiceBreakdown = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Background Texture (Subtle Grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <span className="text-sky-600 font-bold tracking-widest uppercase text-xs mb-4 block">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Full-Cycle Web <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-sky-600">
                Development Suite
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              From initial architecture to final deployment, we provide end-to-end engineering services tailored for enterprise scalability.
            </p>
          </motion.div>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} data={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ===============================
   SERVICE CARD SUB-COMPONENT
================================ */
const ServiceCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="h-full p-8 bg-slate-50 border border-slate-200 rounded-2xl transition-all duration-300 group-hover:bg-white group-hover:border-sky-200 group-hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] flex flex-col">
        
        {/* Icon Container */}
        <div className="mb-6 inline-flex p-4 rounded-xl bg-white border border-slate-200 text-slate-500 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-600 group-hover:border-sky-600 group-hover:text-white">
          {data.icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
          {data.title}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
          {data.desc}
        </p>


        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-sky-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-tr-2xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default ServiceBreakdown;