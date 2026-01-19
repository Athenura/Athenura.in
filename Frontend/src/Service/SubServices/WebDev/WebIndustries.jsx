import React from "react";
import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Landmark, 
  ShoppingCart, 
  GraduationCap, 
  Truck, 
  Building2, 
  Briefcase,
  Plane,
  Utensils,
  Leaf,
  Gavel,
  Gamepad2,
  Clapperboard,
  Factory,
  Wifi,
  Zap,
  CheckCircle2
} from "lucide-react";

/* ==========================================
   DATA: PRIMARY INDUSTRIES (Detailed Cards)
========================================== */
const PRIMARY_INDUSTRIES = [
  {
    id: "healthcare",
    title: "Healthcare & MedTech",
    desc: "HIPAA-compliant telemedicine platforms, EHR systems, and patient portals designed for security and accessibility.",
    icon: <HeartPulse size={28} />,
    tags: ["Data Privacy", "Telehealth", "IoMT"],
  },
  {
    id: "fintech",
    title: "FinTech & Banking",
    desc: "Secure trading platforms, digital wallets, and automated auditing tools built with bank-grade encryption.",
    icon: <Landmark size={28} />,
    tags: ["Encryption", "Real-Time Data", "Compliance"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Retail",
    desc: "Scalable storefronts handling high traffic, custom checkout flows, and seamless inventory management.",
    icon: <ShoppingCart size={28} />,
    tags: ["High Availability", "Payment Gateways", "UX"],
  },
  {
    id: "education",
    title: "EdTech & Learning",
    desc: "Interactive LMS platforms, virtual classrooms, and student engagement tools for modern education.",
    icon: <GraduationCap size={28} />,
    tags: ["Live Streaming", "Gamification", "LMS"],
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    desc: "Real-time fleet tracking dashboards, inventory optimization algorithms, and route planning software.",
    icon: <Truck size={28} />,
    tags: ["Geolocation", "IoT Integration", "Analytics"],
  },
  {
    id: "realestate",
    title: "Real Estate & PropTech",
    desc: "Property listing engines, virtual tour integrations, and CRM tools for agents and property managers.",
    icon: <Building2 size={28} />,
    tags: ["Virtual Tours", "Booking Systems", "Maps"],
  },
];

/* ==========================================
   DATA: SECONDARY INDUSTRIES (Marquee)
========================================== */
const MORE_INDUSTRIES = [
  { name: "Travel & Tourism", icon: <Plane size={16} /> },
  { name: "Automotive", icon: <Zap size={16} /> },
  { name: "Food & Beverage", icon: <Utensils size={16} /> },
  { name: "Legal Tech", icon: <Gavel size={16} /> },
  { name: "Agriculture", icon: <Leaf size={16} /> },
  { name: "Media & Streaming", icon: <Clapperboard size={16} /> },
  { name: "Manufacturing", icon: <Factory size={16} /> },
  { name: "Gaming & Esports", icon: <Gamepad2 size={16} /> },
  { name: "Telecommunications", icon: <Wifi size={16} /> },
  { name: "Corporate Services", icon: <Briefcase size={16} /> },
];

/* ==========================================
   MAIN COMPONENT
========================================== */
const TargetIndustries = () => {
  return (
    <section className="relative py-12 bg-slate-50 font-sans overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#0f172a_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Deep expertise across <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                diverse industries.
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We understand the specific regulatory, technical, and user experience challenges unique to your vertical.
            </p>
          </motion.div>
        </div>

        {/* --- Primary Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
          {PRIMARY_INDUSTRIES.map((industry, index) => (
            <IndustryCard key={industry.id} data={industry} index={index} />
          ))}
        </div>

        {/* --- "And Many More" Marquee Section --- */}
        <div className="relative border-t border-slate-200 pt-16">
           <div className="text-center mb-10">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                Also serving clients in
              </p>
           </div>
           
           {/* Gradient Masks for Marquee fade effect */}
           <div className="absolute left-0 top-[80px] bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
           <div className="absolute right-0 top-[80px] bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />

           {/* Infinite Marquee */}
           <div className="flex overflow-hidden">
             <motion.div 
               className="flex gap-4 pr-4"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               style={{ width: "fit-content" }}
             >
               {/* Render List Twice for seamless loop */}
               {[...MORE_INDUSTRIES, ...MORE_INDUSTRIES, ...MORE_INDUSTRIES].map((item, i) => (
                 <div 
                   key={i}
                   className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-600 font-semibold whitespace-nowrap min-w-max hover:border-teal-300 hover:text-teal-700 transition-colors"
                 >
                   <span className="text-teal-500">{item.icon}</span>
                   {item.name}
                 </div>
               ))}
             </motion.div>
           </div>
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-500 hover:border-teal-200 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.15)] hover:-translate-y-2 overflow-hidden"
    >
      {/* Decorative colored bar top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col h-full">
        
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 mb-6 transition-all duration-300 group-hover:bg-teal-50 group-hover:text-teal-600 group-hover:scale-110">
          {data.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
          {data.title}
        </h3>
        
        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
          {data.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {data.tags.map((tag) => (
            <span 
              key={tag}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-wide text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-700 group-hover:border-teal-100 transition-colors"
            >
              <CheckCircle2 size={12} className="opacity-50" />
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default TargetIndustries;