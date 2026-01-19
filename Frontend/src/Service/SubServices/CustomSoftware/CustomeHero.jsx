import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Terminal 
} from "lucide-react";
import {Link} from "react-router-dom"

/* ===============================
   CONFIGURATION
================================ */
const THEME = {
  textMain: "text-slate-900",
  textMuted: "text-slate-500",
  bg: "bg-slate-50",
  accent: "text-sky-600",
  accentBg: "bg-sky-600",
  accentBorder: "border-sky-200",
};

/* ===============================
   HERO COMPONENT
================================ */
const CustomSoftwareHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={`relative min-h-screen w-full overflow-hidden ${THEME.bg} flex flex-col`}>
      
      {/* --- Background Grid & Gradients --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-60" />
        
        {/* Soft Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-[100px]" />
        
        {/* Fade to bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      {/* --- Main Content Container --- */}
      <div className="relative z-10 container mx-auto px-6 pt-10 pb-12 flex-1 flex flex-col lg:flex-row items-center">
        
        {/* LEFT COLUMN: Copy & CTA */}
        <div className="w-full lg:w-1/2 mb-16 lg:mb-0 lg:pr-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >


            {/* Headline */}
            <motion.h1 variants={fadeInUp} className={`text-4xl md:text-6xl lg:text-7xl font-extrabold ${THEME.textMain} tracking-tight leading-[1.1] mb-6`}>
              Where Complex Logic Meets <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-sky-600 to-sky-400">
                Elegant Software Engineering
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p variants={fadeInUp} className={`text-lg md:text-xl ${THEME.textMuted} leading-relaxed max-w-xl mb-8`}>
              We architect scalable, secure, and high-performance custom software tailored to your specific operational infrastructure. From microservices to AI integration.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio">
              <button className="group relative px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-600 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Initialize Project <ArrowRight size={18} />
                </span>
              </button>
                </Link>
            
            </motion.div>

            {/* Trust Metrics */}
            <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-slate-200 flex gap-8 md:gap-12">
              <div>
                <p className="text-3xl font-bold text-slate-800">99.9%</p>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">Uptime SLA</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-800">50+</p>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">Enterprise Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-800">ISO</p>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">27001 Certified</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Abstract Visual Animation */}
        <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
           <FloatingArchitecture mousePosition={mousePosition} />
        </div>
      </div>
    </section>
  );
};

/* ===============================
   SUB-COMPONENT: FLOATING UI
================================ */
const FloatingArchitecture = ({ mousePosition }) => {
  return (
    <div className="relative w-full h-full max-w-[600px] perspective-1000">
      
      {/* Center Core (The "System") */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-900 rounded-3xl shadow-2xl flex items-center justify-center z-20 border border-slate-700"
        animate={{ 
           y: [0, -10, 0],
           rotateX: mousePosition.y * 10,
           rotateY: mousePosition.x * 10
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <div className="relative z-10 text-center">
            <Cpu size={48} className="text-sky-500 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl">Core System</h3>
        </div>
        
        {/* Animated Rings around Core */}
        <div className="absolute inset-0 border border-slate-700 rounded-3xl animate-pulse" />
        <div className="absolute -inset-4 border border-dashed border-slate-800 rounded-[2rem] opacity-50" />
      </motion.div>

      {/* Floating Card 1: Backend */}
      <FloatCard 
        icon={<Database size={24} className="text-sky-600" />}
        title="Scalable Backend"
        label="PostgreSQL / Redis"
        className="top-10 left-0 md:-left-12"
        delay={0}
      />

      {/* Floating Card 2: Security */}
      <FloatCard 
        icon={<ShieldCheck size={24} className="text-emerald-500" />}
        title="Data Security"
        label="End-to-End Encrypted"
        className="bottom-20 left-4 md:-left-8"
        delay={1.5}
      />

      {/* Floating Card 3: Frontend */}
      <FloatCard 
        icon={<Layers size={24} className="text-indigo-500" />}
        title="Modern Interface"
        label="React / Next.js"
        className="top-20 right-0 md:-right-8"
        delay={0.8}
      />

      {/* Floating Card 4: API */}
      <FloatCard 
        icon={<Terminal size={24} className="text-orange-500" />}
        title="API Gateway"
        label="GraphQL Federation"
        className="bottom-10 right-4 md:-right-4"
        delay={2.2}
      />
      
      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
         <motion.path 
            d="M 100 150 L 300 250" 
            stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,5" 
            animate={{ strokeDashoffset: [0, 20] }} transition={{ repeat: Infinity, duration: 1, ease: "linear"}}
         />
         <motion.path 
            d="M 500 150 L 300 250" 
            stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,5" 
            animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear"}}
         />
          <motion.path 
            d="M 120 400 L 300 250" 
            stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,5" 
            animate={{ strokeDashoffset: [0, 20] }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear"}}
         />
         <motion.path 
            d="M 480 400 L 300 250" 
            stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5,5" 
            animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1.8, ease: "linear"}}
         />
      </svg>

    </div>
  );
};

/* ===============================
   HELPER: Floating Card
================================ */
const FloatCard = ({ icon, title, label, className, delay }) => {
  return (
    <motion.div
      className={`absolute ${className} bg-white/90 backdrop-blur-md border border-slate-200 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-30 flex items-center gap-4 min-w-[200px]`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ 
        y: [0, -15, 0],
        opacity: 1
      }}
      transition={{ 
        y: {
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay: delay
        },
        opacity: { duration: 0.5, delay: 0.2 }
      }}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
    >
      <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-800">{title}</h4>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{label}</p>
      </div>
    </motion.div>
  );
};

/* Animation Variants */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default CustomSoftwareHero;