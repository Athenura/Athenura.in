import React, { useState, useEffect } from "react";
import { motion, useSpring, useTransform, useMotionValue  } from "framer-motion";
import { 
  ArrowRight, 
  Palette, 
  Layers, 
  MousePointer2, 
  Layout, 
  Smartphone, 
  MoveUpRight,
  Eye,
  Type,
  Grid,
  Image as ImageIcon,
  CreditCard
} from "lucide-react";
import { Link } from "react-router-dom";

const UiUxHero = () => {
  // Mouse State for Parallax
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Only run on desktop to save resources
      if (window.innerWidth > 1024) {
        // Normalize coordinates between -1 and 1
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center bg-slate-50 overflow-hidden font-sans pt-24 lg:pt-0 pb-20 lg:pb-0">
      
      {/* --- Background: Design Grid Pattern --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* --- Ambient Gradients --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <motion.div 
            animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-teal-100/60 rounded-full blur-[120px] mix-blend-multiply" 
         />
         <motion.div 
            animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-cyan-100/60 rounded-full blur-[120px] mix-blend-multiply" 
         />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* ================= LEFT COLUMN: Copy ================= */}
          <motion.div 
            className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            
            {/* Label */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-semibold mb-6 mx-auto lg:mx-0">
                <Palette size={16} />
                <span>UI/UX Design Studio</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Designing digital <br />
              products that feel <br />
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">inevitable.</span>
                <motion.svg 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    className="absolute -bottom-2 left-0 w-full h-3 text-teal-200/50 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </motion.svg>
              </span>
            </motion.h1>
            
            {/* Subhead */}
            <motion.p variants={fadeInUp} className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
              We blend behavioral science, aesthetic precision, and technical feasibility to create interfaces users intuitively understand.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="https://calendly.com/official-athenura/30min">
              <button className="group relative w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl overflow-hidden shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 transition-all hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity animate-gradient-x" />
                <span className="relative flex items-center justify-center gap-2">
                  Make Your Design <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              </Link>
              <Link to="/portfolio">
              <button className="group w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50/50 transition-all flex items-center justify-center gap-2">
                  View Portfolio <MoveUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              </Link>

            </motion.div>

            {/* Metrics/Trust */}
            <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-center lg:justify-start gap-8 lg:gap-12">
               <div className="flex flex-col">
                 <span className="text-3xl font-extrabold text-slate-900">95+</span>
                 <span className="text-sm font-medium text-slate-500">Projects Launched</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-3xl font-extrabold text-slate-900">4.9/5</span>
                 <span className="text-sm font-medium text-slate-500">Client Satisfaction</span>
               </div>
            </motion.div>
          </motion.div>


          {/* ================= RIGHT COLUMN: The Collaborative Workspace Visual ================= */}
          <div className="flex-1 w-full h-[600px] relative flex items-center justify-center perspective-1200 lg:-mr-10">
             <CollaborativeDesignWorkspace mousePosition={mousePosition} />
          </div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================
   SUB-COMPONENT: The Collaborative Design Workspace Animation
========================================== */
const CollaborativeDesignWorkspace = ({ mousePosition }) => {
  // Smoother spring animation for mouse movement
const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

// Sync React state → MotionValues
useEffect(() => {
  mouseX.set(mousePosition.x);
  mouseY.set(mousePosition.y);
}, [mousePosition.x, mousePosition.y]);

const transformedX = useTransform(mouseX, [-1, 1], [-15, 15]);
const transformedY = useTransform(mouseY, [-1, 1], [-15, 15]);

const springX = useSpring(transformedX, { stiffness: 150, damping: 30 });
const springY = useSpring(transformedY, { stiffness: 150, damping: 30 });

const rotateX = useTransform(springY, (v) => -v);
const rotateY = useTransform(springX, (v) => v);

  
  return (
    <motion.div 
      className="relative w-full max-w-[650px] h-full flex items-center justify-center"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      
      {/* 1. Centerpiece: The Main Interface Screen */}
      <FloatingElement zIndex={30} depth={0} className="w-[90%] max-w-[500px] shadow-2xl shadow-slate-900/20 bg-white rounded-[2rem] overflow-hidden border-[6px] border-slate-100 relative">
         {/* Browser Chrome */}
         <div className="h-8 bg-slate-100 flex items-center px-4 gap-2 border-b border-slate-200">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 text-center text-[10px] font-medium text-slate-400">my-awesome-app.design</div>
         </div>
         {/* UI Body */}
         <div className="p-6 bg-slate-50 h-[320px] flex flex-col gap-4 relative">
            {/* Header Nav */}
            <div className="flex justify-between items-center mb-4">
                <div className="w-8 h-8 rounded-lg bg-teal-500" />
                <div className="flex gap-3">
                    <div className="w-16 h-4 rounded bg-slate-200" />
                    <div className="w-16 h-4 rounded bg-slate-200" />
                    <div className="w-8 h-8 rounded-full bg-slate-200" />
                </div>
            </div>
            {/* Hero Section mockup */}
            <div className="flex gap-4 flex-1">
                <div className="flex-1 flex flex-col justify-center gap-3">
                    <div className="w-3/4 h-6 rounded bg-slate-800 opacity-80" />
                    <div className="w-full h-4 rounded bg-slate-300" />
                    <div className="w-2/3 h-4 rounded bg-slate-300 mb-2" />
                    <div className="flex gap-2">
                        <div className="w-24 h-8 rounded-md bg-teal-500" />
                        <div className="w-24 h-8 rounded-md bg-white border border-slate-300" />
                    </div>
                </div>
                <div className="w-1/3 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 border border-teal-50 flex items-center justify-center">
                    <ImageIcon size={32} className="text-teal-300" />
                </div>
            </div>

            {/* Active Collaborator on Main Screen */}
            <FloatingCursor color="text-pink-500" bg="bg-pink-500" name="Sarah (Lead)" x={220} y={180} initialOffset={{x: 20, y: -20}} />
         </div>
         
      </FloatingElement>


      {/* --- SATELLITE ELEMENTS (Floating Assets) --- */}

      {/* 2. Color Palette (Top Left) */}
      <FloatingElement zIndex={20} depth={50} x={-180} y={-140} className="w-40 p-4 bg-white rounded-2xl shadow-lg shadow-teal-900/5 border border-slate-100">
        <div className="flex items-center gap-2 text-slate-500 mb-3">
            <Palette size={14} />
            <span className="text-xs font-bold">Colors</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
            <div className="w-8 h-8 rounded-full bg-teal-500 ring-2 ring-offset-2 ring-teal-500/30"></div>
            <div className="w-8 h-8 rounded-full bg-cyan-400"></div>
            <div className="w-8 h-8 rounded-full bg-slate-900"></div>
            <div className="w-8 h-8 rounded-full bg-teal-100"></div>
            <div className="w-8 h-8 rounded-full bg-cyan-100"></div>
            <div className="w-8 h-8 rounded-full bg-slate-200"></div>
        </div>
      </FloatingElement>

      {/* 3. Typography Scale (Bottom Right) */}
      <FloatingElement zIndex={25} depth={80} x={160} y={120} className="w-48 p-4 bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgb(0,0,0,0.1)] border border-slate-100">
         <div className="flex items-center gap-2 text-slate-500 mb-3">
            <Type size={14} />
            <span className="text-xs font-bold">Typography</span>
        </div>
        <div className="space-y-2 text-slate-800">
            <div className="text-2xl font-extrabold">H1. Headline</div>
            <div className="text-lg font-bold text-slate-600">H2. Subtitle Text</div>
            <div className="text-sm text-slate-500">Body regular text style...</div>
        </div>
        {/* Collaborator on Typography */}
        <FloatingCursor color="text-indigo-500" bg="bg-indigo-500" name="Alex (Dev)" x={50} y={40} initialOffset={{x: -10, y: 10}} />
      </FloatingElement>

       {/* 4. Icon Grid (Top Right) */}
       <FloatingElement zIndex={20} depth={40} x={200} y={-100} className="w-36 p-4 bg-white rounded-2xl shadow-lg border border-slate-100">
        <div className="flex items-center gap-2 text-slate-500 mb-3">
            <Grid size={14} />
            <span className="text-xs font-bold">Icons</span>
        </div>
        <div className="grid grid-cols-3 gap-3 text-slate-400">
            <Layout size={18} /> <Smartphone size={18} /> <Eye size={18} />
            <CreditCard size={18} /> <Layers size={18} className="text-teal-500" /> <ImageIcon size={18} />
        </div>
      </FloatingElement>

       {/* 5. Abstract Layers Panel (Bottom Left) */}
       <FloatingElement zIndex={15} depth={30} x={-200} y={100} className="w-44 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-slate-50 p-2 text-[10px] font-bold text-slate-400 border-b border-slate-100 flex justify-between">
             <span>LAYERS</span>
             <Layers size={12} />
          </div>
          <div className="p-2 space-y-1">
             <div className="flex items-center gap-2 p-1 bg-teal-50 rounded text-xs text-teal-700 font-medium">
                 <Layout size={12} /> Hero_Section
             </div>
             <div className="flex items-center gap-2 p-1 rounded text-xs text-slate-500">
                 <Type size={12} /> Headline
             </div>
             <div className="flex items-center gap-2 p-1 rounded text-xs text-slate-500">
                 <ImageIcon size={12} /> Hero_Image
             </div>
          </div>
       </FloatingElement>

    </motion.div>
  );
};

/* ==========================================
   HELPER: Generic Floating Element Container
========================================== */
const FloatingElement = ({ children, zIndex, depth, x = 0, y = 0, className }) => {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1, ease: "easeOut" }}
         className={`absolute ${className}`}
         style={{
            zIndex: zIndex,
            transformStyle: "preserve-3d",
            // We use translateZ for depth, and normal x/y for positioning around center
            transform: `translate3d(${x}px, ${y}px, ${depth}px)`
         }}
      >
         {children}
      </motion.div>
   );
};

/* ==========================================
   HELPER: Figma-style Floating Cursor
========================================== */
const FloatingCursor = ({ color, bg, name, x, y, initialOffset = {x:0, y:0} }) => {
    return (
        <motion.div 
            className="absolute z-50 top-0 left-0 pointer-events-none"
            // Animate the cursor moving slightly to simulate activity
            animate={{ 
                x: [x + initialOffset.x, x, x + initialOffset.x], 
                y: [y + initialOffset.y, y, y + initialOffset.y] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         >
            <MousePointer2 size={20} className={`${color} fill-current rotate-[-15deg]`} />
            <div className={`px-2 py-0.5 ${bg} text-white text-[10px] font-bold rounded-md rounded-tl-none ml-3 mt-1 whitespace-nowrap shadow-sm`}>
               {name}
            </div>
         </motion.div>
    )
}


// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default UiUxHero;