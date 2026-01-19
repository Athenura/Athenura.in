import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, LayoutTemplate, Terminal, Settings, Zap } from "lucide-react";

const WebAppHero = () => {
  // Mouse Parallax State
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };
    
    // Only add listener on larger screens to save mobile performance
    if (window.innerWidth > 1024) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen lg:min-h-[90vh] flex items-center bg-slate-50 overflow-hidden font-sans py-20 lg:py-0">
      
      {/* --- 1. Animated Background Grid --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]" 
        />
      </div>
      
      {/* --- 2. Ambient Gradient Blobs (Responsive Sizing) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
             animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
             transition={{ duration: 20, repeat: Infinity }}
             className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] lg:w-[800px] h-[300px] md:h-[600px] lg:h-[800px] bg-teal-100/50 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply" 
          />
          <motion.div 
             animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
             transition={{ duration: 15, repeat: Infinity }}
             className="absolute bottom-[-10%] left-[-20%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-100/50 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply" 
          />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10">
          
          {/* ================= LEFT COLUMN: Copy & CTA ================= */}
          <motion.div 
            className="flex-1 lg:text-left w-full max-w-2xl lg:max-w-none mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            
            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Building intelligent <br />
              <span className="inline-block relative">
                 <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                    web applications
                 </span>
                 {/* Underline decoration */}
                 <motion.svg 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-teal-200 z-0" 
                    viewBox="0 0 100 10" 
                    preserveAspectRatio="none"
                 >
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                 </motion.svg>
              </span>
              <br />
              that scale.
            </motion.h1>
            
            {/* Subhead */}
            <motion.p variants={fadeInUp} className="text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10">
              We engineer complex SaaS platforms, internal tools, and data-driven dashboards using modern architecture. Fast, secure, and built for growth.
            </motion.p>


            {/* Tech Stack Mini Bar */}
            <motion.div variants={fadeInUp} className="mt-10 md:mt-12 pt-8 border-t border-slate-200/60 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start opacity-80">
               <TechBadge icon={<Code2 size={16}/>} text="React & Next.js" />
               <TechBadge icon={<Database size={16}/>} text="Cloud Native" />
               <TechBadge icon={<Zap size={16}/>} text="High Performance" />
            </motion.div>
          </motion.div>


          {/* ================= RIGHT COLUMN: Interactive 3D Animation ================= */}
          <div className="flex-1 w-full flex items-center justify-center mt-12 lg:mt-0">
             <div className="relative w-full max-w-[500px] h-[400px] md:h-[500px] lg:h-[600px] perspective-1000">
                <AnimatedTechStack mousePosition={mousePosition} />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================
   SUB-COMPONENT: Tech Badge
========================================== */
const TechBadge = ({ icon, text }) => (
  <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
    <span className="text-teal-500">{icon}</span>
    <span>{text}</span>
  </div>
);

/* ==========================================
   SUB-COMPONENT: The Animated Visual
========================================== */
const AnimatedTechStack = ({ mousePosition }) => {
  // Parallax Logic: Convert mouse position to rotation values
  // Reduced sensitivity on desktop for smoother feel
  const rotateX = mousePosition.y * 8; 
  const rotateY = mousePosition.x * -8; 
  
  return (
    <motion.div 
      // Responsive Scaling: scale-75 on mobile prevents overflow, scale-110 on desktop for impact
      className="relative w-full h-full flex items-center justify-center transform scale-[1.1] sm:scale-100 md:scale-100 lg:scale-120"
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 40, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      
      {/* Base Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px] bg-teal-400/30 blur-[80px] rounded-full" />

      {/* --- Layer 3: Database (Bottom) --- */}
      <StackLayer 
         position="bottom"
         delay={0.4}
         color="border-slate-300"
         shadow="shadow-slate-300/40"
         zIndex={10}
         bg="bg-white/80"
      >
          <div className="flex items-center gap-4 text-slate-600">
            <div className="p-2.5 bg-slate-100 rounded-lg shrink-0">
               <Database size={24} className="text-slate-500" />
            </div>
            <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Infrastructure</p>
                <p className="text-sm font-bold text-slate-700">PostgreSQL / AWS</p>
            </div>
          </div>
          {/* Animated Connecting Lines */}
          <DataStreamLine direction="left" delay={0} />
          <DataStreamLine direction="right" delay={1} />
      </StackLayer>

      {/* --- Layer 2: Backend (Middle) --- */}
      <StackLayer 
         position="middle"
         delay={0.2}
         color="border-teal-200"
         shadow="shadow-teal-200/40"
         zIndex={20}
         bg="bg-white/90"
      >
          <div className="flex items-center gap-4 text-slate-700">
            <div className="p-2.5 bg-teal-50 rounded-lg shrink-0">
               <Terminal size={28} className="text-teal-600" />
            </div>
            <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-500">Logic Layer</p>
                <p className="text-base font-bold text-slate-800">Node.js API</p>
            </div>
          </div>
      </StackLayer>

      {/* --- Layer 1: Frontend (Top) --- */}
      <StackLayer 
         position="top"
         delay={0}
         color="border-transparent"
         shadow="shadow-teal-500/30"
         zIndex={30}
         bg="bg-gradient-to-br from-teal-500 to-cyan-600"
         textColor="text-white"
      >
          <div className="text-center w-full">
            <LayoutTemplate size={32} className="mx-auto mb-2 text-teal-50" />
            <p className="text-lg font-extrabold text-white">Application UI</p>
            <p className="text-xs text-teal-100 opacity-80">Interactive & Responsive</p>
            
            {/* Fake UI Elements */}
            <div className="mt-3 flex gap-2 justify-center">
                <motion.div animate={{ width: ["10%", "30%", "10%"] }} transition={{ duration: 3, repeat: Infinity }} className="h-1.5 rounded-full bg-white/40" />
                <motion.div animate={{ width: ["30%", "10%", "30%"] }} transition={{ duration: 3, repeat: Infinity }} className="h-1.5 rounded-full bg-white/40" />
            </div>
          </div>
      </StackLayer>

      {/* Floating Orbit Rings */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ transform: "rotateX(60deg) scale(1.2)" }}>
         <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border border-teal-200/30 rounded-full border-dashed"
         />
      </div>

    </motion.div>
  );
};

/* ==========================================
   Helper: Stack Layer Container
========================================== */
const StackLayer = ({ children, position, delay, color, shadow, zIndex, bg, textColor }) => {
  // Calculations for stacking positions
  const yOffset = position === 'top' ? -80 : position === 'middle' ? 0 : 80;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset + 50 }}
      animate={{ opacity: 1, y: yOffset }}
      transition={{ duration: 0.8, delay: delay, type: "spring" }}
      className={`absolute w-64 sm:w-72 h-32 sm:h-36 ${bg} backdrop-blur-md border ${color} rounded-2xl shadow-xl ${shadow} flex items-center justify-center ${textColor || ''}`}
      style={{ 
         transformStyle: "preserve-3d",
         transform: `translateZ(${position === 'top' ? 60 : position === 'middle' ? 30 : 0}px)`,
         zIndex: zIndex // Inline style for reliability
      }}
    >
      {children}
    </motion.div>
  );
};

/* ==========================================
   Helper: Animated Data Line
========================================== */
const DataStreamLine = ({ direction, delay }) => {
   return (
      <div className={`absolute top-0 ${direction === 'left' ? 'left-[20%] sm:left-[25%]' : 'right-[20%] sm:right-[25%]'} h-24 w-[1px] -translate-y-full overflow-hidden`}>
          <div className="h-full w-full bg-slate-200" />
          <motion.div 
             animate={{ y: ["100%", "-100%"] }}
             transition={{ duration: 2, repeat: Infinity, delay: delay, ease: "linear" }}
             className="absolute top-0 left-0 w-full h-[30%] bg-teal-500"
          />
      </div>
   );
};

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default WebAppHero;