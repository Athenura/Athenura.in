import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  BarChart3, 
  Cloud, 
  Smartphone, 
  Building2,
  ChevronRight
} from "lucide-react";

const EnterpriseHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth > 1024) {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-slate-50 overflow-hidden font-sans pt-24 lg:pt-0">
      
      {/* --- Background World Map Texture --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
         {/* Simplified World Map Pattern or Dot Grid */}
         <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
      </div>

      {/* --- Ambient Glows --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-teal-100/60 rounded-full blur-[120px] mix-blend-multiply" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-100/60 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* ================= LEFT COLUMN: Corporate Copy ================= */}
          <motion.div 
            className="flex-1 text-center lg:text-left w-full max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            
            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Empowering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500">
                Connected Enterprise.
              </span>
            </motion.h1>
            
            {/* Subhead */}
            <motion.p variants={fadeInUp} className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
              Unify your operations with scalable, secure, and intelligent software solutions designed to drive digital transformation at a global scale.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="https://calendly.com/official-athenura/30min" target="_blank">
              <button className="w-full sm:w-auto px-8 py-4 bg-teal-700 text-white font-bold rounded-lg shadow-lg shadow-teal-900/10 hover:bg-teal-800 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Schedule Consultation <ArrowRight size={18} />
              </button>
            </a>
            </motion.div>

            {/* Enterprise Metrics */}
            <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12">
               <StatItem number="500+" label="Enterprise Clients" />
               <StatItem number="99.99%" label="System Uptime" />
               <StatItem number="24/7" label="Global Support" />
            </motion.div>
          </motion.div>

          {/* ================= RIGHT COLUMN: The Digital Ecosystem Animation ================= */}
          <div className="flex-1 w-full flex items-center justify-center mt-12 lg:mt-0 perspective-1000">
             <EnterpriseEcosystem mousePosition={mousePosition} />
          </div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================
   SUB-COMPONENT: Stats
========================================== */
const StatItem = ({ number, label }) => (
  <div className="text-left">
    <p className="text-2xl font-bold text-slate-900">{number}</p>
    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
  </div>
);

/* ==========================================
   SUB-COMPONENT: The Ecosystem Animation
========================================== */
const EnterpriseEcosystem = ({ mousePosition }) => {
  // Parallax Logic
  const rotateX = mousePosition.y * 5; 
  const rotateY = mousePosition.x * -5; 

  return (
    <motion.div 
      className="relative w-[350px] md:w-[500px] h-[350px] md:h-[500px] flex items-center justify-center"
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 40, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      
      {/* 1. Central Hub (The Core System) */}
      <div className="absolute z-20 w-32 h-32 bg-white rounded-full shadow-[0_0_60px_-15px_rgba(20,184,166,0.5)] border border-teal-100 flex items-center justify-center" style={{ transform: "translateZ(50px)" }}>
         <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white relative overflow-hidden">
            <Building2 size={40} className="relative z-10" />
            
            {/* Inner Shine */}
            <motion.div 
               animate={{ top: ["100%", "-100%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
               className="absolute left-0 w-full h-full bg-gradient-to-t from-transparent via-white/20 to-transparent"
            />
         </div>
         {/* Pulse Ring */}
         <div className="absolute inset-0 border-2 border-teal-500 rounded-full animate-ping opacity-20" />
      </div>

      {/* 2. Orbit Rings */}
      <OrbitRing size={280} duration={25} delay={0} dashed />
      <OrbitRing size={450} duration={40} delay={5} />

      {/* 3. Floating Satellites (Modules) */}
      
      {/* Top Left: Cloud */}
      <Satellite 
         icon={<Cloud size={20} />} 
         label="Cloud Sync" 
         x="-120px" y="-120px" 
         delay={0}
      />

      {/* Top Right: Security */}
      <Satellite 
         icon={<ShieldCheck size={20} />} 
         label="Enterprise Security" 
         x="140px" y="-80px" 
         delay={1}
      />

      {/* Bottom Right: Analytics */}
      <Satellite 
         icon={<BarChart3 size={20} />} 
         label="Real-time Data" 
         x="100px" y="130px" 
         delay={2}
      />

      {/* Bottom Left: Mobile */}
      <Satellite 
         icon={<Smartphone size={20} />} 
         label="Mobile Access" 
         x="-140px" y="80px" 
         delay={3}
      />

      {/* Global Connection Lines (Visuals connecting hub to nodes) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
         <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#0d9488" strokeWidth="2" strokeDasharray="5,5" />
         <line x1="50%" y1="50%" x2="78%" y2="34%" stroke="#0d9488" strokeWidth="2" strokeDasharray="5,5" />
         <line x1="50%" y1="50%" x2="70%" y2="76%" stroke="#0d9488" strokeWidth="2" strokeDasharray="5,5" />
         <line x1="50%" y1="50%" x2="22%" y2="66%" stroke="#0d9488" strokeWidth="2" strokeDasharray="5,5" />
      </svg>

    </motion.div>
  );
};

/* ==========================================
   Helper: Orbit Ring
========================================== */
const OrbitRing = ({ size, duration, dashed }) => (
  <motion.div
    style={{ width: size, height: size }}
    animate={{ rotate: 360 }}
    transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    className={`absolute rounded-full border border-slate-200 ${dashed ? "border-dashed" : "border-solid"} opacity-60`}
  />
);

/* ==========================================
   Helper: Satellite Node
========================================== */
const Satellite = ({ icon, label, x, y, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
    transition={{ 
      opacity: { delay: delay, duration: 0.5 },
      scale: { delay: delay, duration: 0.5 },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay } // Floating effect
    }}
    className="absolute z-10 flex flex-col items-center gap-2"
    style={{ left: `calc(50% + ${x})`, top: `calc(50% + ${y})` }}
  >
    <div className="w-14 h-14 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center text-teal-600 hover:scale-110 hover:text-teal-700 hover:border-teal-200 transition-all duration-300">
       {icon}
    </div>
    <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-slate-100">
       <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500 whitespace-nowrap">
         {label}
       </span>
    </div>
  </motion.div>
);

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default EnterpriseHero;