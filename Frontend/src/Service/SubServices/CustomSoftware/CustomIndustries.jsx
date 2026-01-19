import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  ShoppingCart, 
  GraduationCap, 
  HeartPulse, 
  Landmark, 
  Layers, 
  ArrowUpRight 
} from "lucide-react";

/* ==========================================
   DATA: INDUSTRIES
========================================== */
const INDUSTRIES = [
  {
    id: "startups",
    title: "Startups & VCs",
    desc: "We build scalable MVPs that help founders secure funding. Fast iteration cycles and modular architecture to support rapid growth.",
    icon: <Rocket size={26} />,
    tags: ["Rapid MVP", "Scalability", "Pitch-Ready"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    desc: "High-performance storefronts with custom checkout flows, inventory management, and seamless payment gateway integrations.",
    icon: <ShoppingCart size={26} />,
    tags: ["High Volume", "Payment APIs", "Conversion"],
  },
  {
    id: "education",
    title: "EdTech & Education",
    desc: "Interactive Learning Management Systems (LMS) and student portals designed for engagement, accessibility, and real-time collaboration.",
    icon: <GraduationCap size={26} />,
    tags: ["LMS", "Gamification", "Live Video"],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    desc: "Secure, HIPAA-compliant platforms for telemedicine, patient records, and appointment scheduling with strict data privacy protocols.",
    icon: <HeartPulse size={26} />,
    tags: ["HIPAA Compliant", "Telehealth", "Security"],
  },
  {
    id: "finance",
    title: "FinTech & Banking",
    desc: "Bank-grade security dashboards, real-time trading platforms, and automated auditing tools built for regulatory compliance.",
    icon: <Landmark size={26} />,
    tags: ["Data Encryption", "Real-Time", "Analytics"],
  },
  {
    id: "saas",
    title: "SaaS Platforms",
    desc: "Multi-tenant architectures with subscription billing, role-based access control, and centralized admin panels for super-users.",
    icon: <Layers size={26} />,
    tags: ["Multi-Tenancy", "Subscription", "RBAC"],
  },
];

/* ==========================================
   MAIN COMPONENT
========================================== */
const IndustriesServed = () => {
  return (
    <section className="relative py-12 bg-slate-50 overflow-hidden">
      
      {/* Background Pattern (Subtle Diagonal Lines) */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#e2e8f0_0px,#e2e8f0_1px,transparent_1px,transparent_10px)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Tailored Solutions for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-sky-600">
                Every Sector
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We understand that every industry has unique regulatory and technical challenges. 
              Our software is architected to meet your specific sector demands.
            </p>
          </motion.div>
        </div>

        {/* --- Grid Container --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {INDUSTRIES.map((item, index) => (
            <IndustryCard key={item.id} data={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ==========================================
   CARD SUB-COMPONENT
========================================== */
const IndustryCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl border border-slate-200 p-8 h-full flex flex-col transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] hover:border-sky-200 hover:-translate-y-1"
    >
      {/* Icon Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 transition-colors duration-300 group-hover:bg-sky-50 group-hover:text-sky-600 group-hover:border-sky-100">
          {data.icon}
        </div>
        
        {/* Hover Arrow */}
        <div className="opacity-0 -translate-x-2 text-sky-500 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <ArrowUpRight size={20} />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
        {data.title}
      </h3>
      
      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
        {data.desc}
      </p>

      {/* Tags / Keywords */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {data.tags.map((tag) => (
          <span 
            key={tag}
            className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-wide text-slate-500 group-hover:bg-sky-50 group-hover:text-sky-600 group-hover:border-sky-100 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default IndustriesServed;