import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  ShoppingCart, 
  Smartphone, 
  Database, 
  Gauge, 
  Globe, 
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";

/* ==========================================
   DATA: SERVICES LIST
========================================== */
const SERVICES = [
  {
    id: 1,
    title: "Custom Web Development",
    desc: "Bespoke websites built from scratch using React & Next.js. We prioritize SEO, accessibility, and pixel-perfect design implementation.",
    icon: <Globe size={26} />,
    features: ["SPA & PWA Architecture", "SEO & Core Web Vitals", "Headless CMS Integration"],
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    desc: "High-conversion online stores. We build secure, scalable shopping experiences with custom checkout flows and inventory systems.",
    icon: <ShoppingCart size={26} />,
    features: ["Shopify & WooCommerce", "Stripe/PayPal Integration", "Cart Optimization"],
  },
  {
    id: 3,
    title: "Web Application Dev",
    desc: "Complex functionality made simple. We engineer SaaS platforms, internal tools, and dashboards that handle heavy data loads.",
    icon: <Code2 size={26} />,
    features: ["SaaS Architecture", "Real-time Data (Sockets)", "Role-Based Access"],
  },
  {
    id: 4,
    title: "API & Backend Systems",
    desc: "The invisible engine. We build robust REST and GraphQL APIs that connect your front-end to databases and third-party services.",
    icon: <Database size={26} />,
    features: ["Node.js & Python", "Microservices", "Secure Auth (OAuth/JWT)"],
  },
  {
    id: 5,
    title: "Mobile-First Design",
    desc: "Responsive isn't an option; it's the standard. We ensure your site looks and functions perfectly on every device, from iPhone to 4K.",
    icon: <Smartphone size={26} />,
    features: ["Adaptive Layouts", "Touch Optimization", "Cross-Browser Testing"],
  },
  {
    id: 6,
    title: "Performance & Caching",
    desc: "Speed wins. We optimize code, implement advanced caching strategies (Redis), and use CDNs to ensure near-instant load times.",
    icon: <Gauge size={26} />,
    features: ["90+ Lighthouse Scores", "Server-Side Rendering", "Image Optimization"],
  },
];

/* ==========================================
   MAIN COMPONENT
========================================== */
const WhatWeOffer = () => {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden font-sans">
      
      {/* --- Background Pattern (Subtle) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Section Header --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Comprehensive Web <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                Development Services
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We don't just write code; we engineer digital solutions. From simple landing pages to complex enterprise ecosystems.
            </p>
          </motion.div>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} data={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ==========================================
   SERVICE CARD SUB-COMPONENT
========================================== */
const ServiceCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-2"
    >
      {/* Hover Gradient Overlay (Subtle) */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Icon Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white group-hover:rotate-6 group-hover:scale-110 shadow-sm">
            {data.icon}
          </div>
          
          {/* Top Right Arrow */}
          <div className="text-slate-300 transition-all duration-300 group-hover:text-teal-500 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight size={24} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
          {data.title}
        </h3>
        
        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {data.desc}
        </p>

        {/* Feature List (Pushed to bottom) */}
        <div className="mt-auto pt-6 border-t border-slate-100 group-hover:border-teal-100 transition-colors">
          <ul className="space-y-3">
            {data.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-500 group-hover:text-slate-600 transition-colors">
                <CheckCircle2 size={14} className="text-teal-500 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.div>
  );
};

export default WhatWeOffer;