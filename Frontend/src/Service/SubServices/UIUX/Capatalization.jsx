import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  PenTool, 
  Search, 
  Terminal, 
  ArrowUpRight,
  Move,
  Layers,
  Touchpad
} from "lucide-react";

const capabilities = [
  {
    id: "research",
    title: "UX Research",
    subtitle: "Data-driven empathy",
    icon: <Search />,
    color: "bg-rose-500",
    text: "text-rose-500",
    description: "We map user behaviors using heatmaps and cognitive walkthroughs to find the path of least resistance."
  },
  {
    id: "design",
    title: "Visual Design",
    subtitle: "Pixel-perfect aesthetics",
    icon: <PenTool />,
    color: "bg-teal-500",
    text: "text-teal-500",
    description: "Crafting interfaces that are beautiful, accessible, and aligned with your brand's deepest values."
  },
  {
    id: "dev",
    title: "Engineering",
    subtitle: "React & Native solutions",
    icon: <Terminal />,
    color: "bg-indigo-600",
    text: "text-indigo-600",
    description: "Production-grade code. We bridge the gap between Figma files and the final React commit."
  }
];

const Capabilities = () => {
  const [active, setActive] = useState("design");

  return (
    <section className="min-h-screen md:h-[90vh] md:min-h-[600px] mb-10 bg-slate-950 flex flex-col justify-center py-12 overflow-hidden relative">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-8 flex justify-between items-end relative z-10">
        <div>
           <h2 className="text-white/50 font-mono text-sm tracking-wider uppercase mb-2">Our Expertise</h2>
           <h3 className="text-3xl md:text-4xl font-bold text-white">Digital Capabilities</h3>
        </div>
        
        {/* Helper Text - Changes based on device */}
        <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
            <span className="md:hidden flex items-center gap-1"><Touchpad size={12}/> Tap to Expand</span>
            <span className="hidden md:flex items-center gap-1"><Move size={12}/> Hover to Expand</span>
        </div>
      </div>

      {/* The Accordion Deck */}
      {/* Mobile: Fixed height container to allow vertical accordion physics */}
      {/* Desktop: Flexible height */}
      <div className="container mx-auto px-4 md:px-6 flex-1 flex flex-col md:flex-row gap-4 h-[800px] md:h-full md:max-h-[600px]">
        {capabilities.map((capability) => (
          <CapabilityPanel 
            key={capability.id} 
            data={capability} 
            isActive={active === capability.id}
            onHover={() => setActive(capability.id)}
          />
        ))}
      </div>

    </section>
  );
};

/* ========================================================================
   COMPONENT: Individual Accordion Panel
======================================================================== */
const CapabilityPanel = ({ data, isActive, onHover }) => {
  return (
    <motion.div
      layout
      onMouseEnter={onHover} // Desktop Hover
      onClick={onHover}      // Mobile Tap
      className={`
        relative rounded-3xl overflow-hidden cursor-pointer transition-colors duration-500 ease-out border border-white/10
        ${isActive ? 'flex-[4] md:flex-[3]' : 'flex-[1] bg-slate-900/50 hover:bg-slate-800'}
      `}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
        {/* Background Gradient for Active State */}
        <AnimatePresence>
            {isActive && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute inset-0 bg-slate-900`}
                >
                    {/* Visuals scale down on mobile to fit tight spaces */}
                    <div className="w-full h-full md:scale-100 scale-90 origin-center">
                        {data.id === "research" && <ResearchVisual />}
                        {data.id === "design" && <DesignVisual color={data.color} />}
                        {data.id === "dev" && <EngineeringVisual />}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* Content Layer */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-20 pointer-events-none">
            
            {/* Top Icon Row */}
            <div className="flex justify-between items-center md:items-start">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/10 text-white transition-colors duration-300 ${isActive ? data.color : ''}`}>
                    {React.cloneElement(data.icon, { size: 20 })}
                </div>
                
                {/* Mobile: Show Title next to icon when collapsed */}
                {!isActive && (
                    <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="md:hidden text-white font-bold ml-4 flex-1"
                    >
                        {data.title}
                    </motion.span>
                )}

                {/* Arrow */}
                <motion.div 
                    animate={{ opacity: isActive ? 1 : 0.3, rotate: isActive ? 45 : 0 }}
                    className="text-white"
                >
                    <ArrowUpRight />
                </motion.div>
            </div>

            {/* Bottom Text Info */}
            <div>
                 {/* Desktop Only: Vertical Title (When Inactive) */}
                 {!isActive && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="hidden md:block absolute bottom-8 left-8 origin-bottom-left -rotate-90 translate-x-0 whitespace-nowrap"
                    >
                        <span className="text-2xl font-bold text-slate-500 tracking-wide">{data.title}</span>
                    </motion.div>
                 )}

                 {/* Horizontal Full Content (When Active) */}
                 <AnimatePresence>
                     {isActive && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-md"
                        >
                            {/* Title size responsive */}
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{data.title}</h2>
                            <p className={`text-xs md:text-sm font-bold uppercase tracking-wider mb-2 md:mb-4 ${data.text} opacity-80`}>{data.subtitle}</p>
                            <p className="text-sm md:text-base text-slate-300 leading-relaxed line-clamp-3 md:line-clamp-none">
                                {data.description}
                            </p>
                        </motion.div>
                     )}
                 </AnimatePresence>
            </div>
        </div>
    </motion.div>
  );
};

/* ========================================================================
   VISUAL 1: Engineering 
======================================================================== */
const EngineeringVisual = () => {
    return (
        <div className="w-full h-full relative bg-slate-950 font-mono text-xs p-4 md:p-6 overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
             
             {/* Text scales down on mobile */}
             <div className="text-indigo-400/80 leading-relaxed z-10 relative md:text-xs text-[10px]">
                 <Typewriter text={`const shipProduct = async () => {\n  await designSystem.load();\n  const experience = new UserExperience();\n\n  if (experience.isDelightful) {\n    return launch();\n  }\n  \n  // Optimizing performance...\n}`} />
             </div>

             <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute right-4 top-16 md:right-10 md:top-20 w-24 h-24 md:w-32 md:h-32 border border-indigo-500/30 rounded-full flex items-center justify-center"
             >
                <div className="w-16 h-16 md:w-20 md:h-20 border border-indigo-500/50 rounded-full flex items-center justify-center">
                    <Cpu size={24} className="text-indigo-400" />
                </div>
             </motion.div>
        </div>
    )
}

const Typewriter = ({ text }) => {
    return (
        <pre className="whitespace-pre-wrap break-words">
            <span className="text-pink-400">import</span> React <span className="text-pink-400">from</span> 'react';
            {"\n"}
            {text}
            <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-indigo-400 ml-1 align-middle"
            />
        </pre>
    )
}

/* ========================================================================
   VISUAL 2: Design
======================================================================== */
const DesignVisual = ({ color }) => {
    return (
        <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-slate-900">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-500/20 blur-[100px] rounded-full pointer-events-none" />

            {/* Container is slightly smaller on mobile via scale-75 in parent */}
            <div className="relative w-48 h-64 md:w-64 md:h-80 perspective-1000">
                <motion.div 
                    animate={{ rotateX: [10, 0, 10], rotateY: [-10, 0, -10], z: -20 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 opacity-60 transform scale-90"
                />
                <motion.div 
                    animate={{ rotateX: [15, 5, 15], rotateY: [-15, -5, -15], y: -20 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-slate-800 rounded-2xl border border-slate-600 shadow-2xl flex flex-col p-4"
                >
                     <div className="w-8 h-8 rounded-full bg-teal-500/20 mb-4" />
                     <div className="w-full h-2 bg-slate-700 rounded mb-2" />
                     <div className="w-2/3 h-2 bg-slate-700 rounded" />
                </motion.div>
                <motion.div 
                    animate={{ rotateX: [20, 10, 20], rotateY: [-20, -10, -20], y: -40, x: 20 }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent backdrop-blur-sm rounded-2xl border border-teal-500/30 flex items-center justify-center"
                >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-tr from-teal-400 to-cyan-400 shadow-[0_0_30px_rgba(45,212,191,0.5)] flex items-center justify-center">
                        <Layers className="text-white" size={32} />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

/* ========================================================================
   VISUAL 3: Research
======================================================================== */
const ResearchVisual = () => {
    const [mousePos, setMousePos] = useState({ x: 150, y: 150 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div 
            onMouseMove={handleMouseMove}
            className="w-full h-full relative bg-slate-900 overflow-hidden cursor-crosshair touch-none"
        >
             <div className="absolute inset-0 opacity-20" 
                style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '30px 30px' }}
             />

             {/* Heatmap Blob - added default fallback for mobile where mousemove isn't constant */}
             <motion.div 
                animate={{ 
                    x: mousePos.x - 150, 
                    y: mousePos.y - 150,
                }}
                transition={{ type: "tween", ease: "linear", duration: 0.1 }}
                className="absolute w-[300px] h-[300px] bg-rose-500/30 blur-[80px] rounded-full pointer-events-none mix-blend-screen"
             />
             
             <motion.div 
                animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-10 left-10 w-40 h-40 bg-purple-500/20 blur-[50px] rounded-full pointer-events-none"
             />

             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative w-48 h-32 md:w-64 md:h-40 border border-dashed border-rose-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-rose-500/50 text-xs font-mono">User Session Rec</span>
                    <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-4 left-4 w-4 h-4 rounded-full bg-rose-500" />
                    <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} className="absolute bottom-10 right-10 w-4 h-4 rounded-full bg-rose-500" />
                 </div>
             </div>
        </div>
    )
}

export default Capabilities;