import React, { useRef, useState, useEffect } from "react";
import { 
  motion, 
  useMotionTemplate, 
  useMotionValue, 
  useSpring, 
  useTransform,
  AnimatePresence
} from "framer-motion";
import { 
  Grid3X3, 
  CheckCircle2, 
  Moon, 
  Zap,
  MousePointer2,
  Lock,
  Search,
  Fingerprint
} from "lucide-react";

const DesignProcess = () => {
  return (
    <section className="bg-slate-50 py-24 px-6 relative overflow-hidden">
      
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Beyond Pixels</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight">
            Design that feels <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">alive.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We engineer interfaces that respond to human touch, adapt to context, and scale systematically.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px] relative z-10">

        {/* 1. Design Systems (Synced State) */}
        <TiltCard colSpan="md:col-span-2" title="Reactive Design Systems" subtitle="Change a token once, propagate everywhere.">
           <DesignSystemLive />
        </TiltCard>

        {/* 2. Accessibility (Scanner Effect) */}
        <TiltCard colSpan="md:col-span-1 md:row-span-2" title="Accessibility First" subtitle="Automated contrast & legibility checks.">
           <AccessibilityScanner />
        </TiltCard>

        {/* 3. Theming (Liquid Mask) */}
        <TiltCard colSpan="md:col-span-1" title="Fluid Theming" subtitle="Context-aware visual modes.">
            <LiquidTheme />
        </TiltCard>

        {/* 4. Micro-interactions (Magnetic Physics) */}
        <TiltCard colSpan="md:col-span-1" title="Haptic Feel" subtitle="Physics-based input response.">
            <MagneticInteraction />
        </TiltCard>

      </div>
    </section>
  );
};

/* ========================================================================
   COMPONENT: 3D Tilt Card with Glare
   (Calculates mouse position relative to card center for 3D rotation)
======================================================================== */
const TiltCard = ({ children, colSpan, title, subtitle }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
  const brightness = useTransform(mouseY, [-0.5, 0.5], [1.1, 0.9]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative h-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col ${colSpan}`}
    >
      {/* Glare Effect */}
      <motion.div 
        style={{ 
            background: useMotionTemplate`radial-gradient(400px circle at ${useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])}, rgba(255,255,255,0.8), transparent 80%)`,
            opacity: 0.6
        }}
        className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay"
      />

      {/* Content */}
      <div className="flex-1 relative flex items-center justify-center bg-slate-50/50 overflow-hidden" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>

      <div className="relative z-20 p-6 bg-white/80 backdrop-blur-sm border-t border-slate-100" style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="text-slate-500 text-sm mt-1">{subtitle}</p>
      </div>
    </motion.div>
  );
};


/* ========================================================================
   VISUAL 1: Design System Live Propagation
   (Cycles through "Variables" to show how UI updates instantly)
======================================================================== */
const DesignSystemLive = () => {
    const [styleIndex, setStyleIndex] = useState(0);
    const styles = [
        { color: "bg-teal-500", radius: "rounded-md", font: "font-sans", label: "Modern" },
        { color: "bg-indigo-600", radius: "rounded-full", font: "font-serif", label: "Elegant" },
        { color: "bg-orange-500", radius: "rounded-none", font: "font-mono", label: "Brutalist" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setStyleIndex((prev) => (prev + 1) % styles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const current = styles[styleIndex];

    return (
        <div className="w-full h-full flex items-center justify-center gap-8 relative">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="flex flex-col gap-6 w-full max-w-[300px]">
                {/* Simulated "Design Token" Editor */}
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                    <span>theme.config.js</span>
                    <motion.span 
                        key={current.label} 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }}
                        className="text-slate-800 font-bold"
                    >
                        "{current.label}"
                    </motion.span>
                </div>

                {/* UI Components that react to state */}
                <motion.div layout className={`w-full p-4 bg-white shadow-lg border border-slate-100 ${current.radius} flex items-center gap-4 transition-all duration-700`}>
                    <motion.div layout className={`w-10 h-10 ${current.color} ${current.radius} flex items-center justify-center text-white transition-all duration-700`}>
                         <Grid3X3 size={18} />
                    </motion.div>
                    <div className="space-y-2 flex-1">
                        <motion.div layout className={`h-2.5 w-1/3 bg-slate-200 ${current.radius}`} />
                        <motion.div layout className={`h-2 w-2/3 bg-slate-100 ${current.radius}`} />
                    </div>
                    <motion.button layout className={`px-4 py-2 ${current.color} text-white text-xs ${current.radius} ${current.font} transition-all duration-700`}>
                        Action
                    </motion.button>
                </motion.div>
                
                 <motion.div layout className={`w-full p-4 bg-white shadow-lg border border-slate-100 ${current.radius} flex items-center justify-between transition-all duration-700`}>
                     <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 bg-slate-100 ${current.radius}`} />
                        <div className={`h-2 w-24 bg-slate-200 ${current.radius}`} />
                     </div>
                     <div className={`w-4 h-4 border-2 border-slate-200 ${current.radius}`} />
                 </motion.div>
            </div>
        </div>
    );
};


/* ========================================================================
   VISUAL 2: Accessibility Scanner
   (Uses a moving mask to reveal "Good" UI over "Bad" UI)
======================================================================== */
const AccessibilityScanner = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-slate-100 flex items-center justify-center">
            
            {/* LAYER 1: The "Bad" UI (Low contrast, blurry, small text) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40 blur-[2px] grayscale">
                <div className="w-48 p-4 bg-white rounded-lg border border-slate-200 space-y-3">
                    <div className="h-2 w-1/3 bg-slate-200 rounded" />
                    <div className="h-1.5 w-full bg-slate-200 rounded" />
                    <div className="h-1.5 w-full bg-slate-200 rounded" />
                    <div className="h-8 w-full bg-yellow-100 text-yellow-300 text-[10px] flex items-center justify-center mt-2">Submit</div>
                </div>
                <div className="mt-4 text-[10px] text-slate-300">Accessibility: Failing</div>
            </div>

            {/* LAYER 2: The "Good" UI (High contrast, sharp) - Revealed by scanner */}
            <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center bg-white"
                initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                animate={{ clipPath: ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            >
                <div className="relative w-full h-full flex flex-col items-center justify-center bg-teal-50/30">
                     {/* The Scanner Bar Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal-500 shadow-[0_0_20px_2px_rgba(20,184,166,0.5)] z-20">
                         <div className="absolute right-4 -top-8 bg-teal-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg flex gap-1 items-center">
                            <CheckCircle2 size={10} /> AA Pass
                         </div>
                    </div>

                    <div className="w-48 p-4 bg-white rounded-lg shadow-xl border border-teal-100 space-y-3 relative z-10">
                        <div className="h-3 w-1/3 bg-slate-800 rounded" />
                        <div className="h-2 w-full bg-slate-500 rounded" />
                        <div className="h-2 w-full bg-slate-500 rounded" />
                        <div className="h-9 w-full bg-teal-600 text-white font-semibold text-xs rounded-md flex items-center justify-center mt-2 shadow-sm">Submit Request</div>
                    </div>
                     <div className="mt-4 text-xs font-bold text-teal-700">Accessibility: Passing</div>
                </div>
            </motion.div>
        </div>
    )
}


/* ========================================================================
   VISUAL 3: Liquid Theming
   (An abstract representation of fluid mode switching)
======================================================================== */
const LiquidTheme = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <div 
            className="w-full h-full flex items-center justify-center relative"
            onClick={() => setIsDark(!isDark)}
        >
            {/* Base Layer (Light) */}
            <div className="absolute inset-0 bg-white flex items-center justify-center text-slate-200">
                <SunIconPattern />
            </div>

            {/* Top Layer (Dark) - Masked */}
            <motion.div 
                className="absolute inset-0 bg-slate-900 flex items-center justify-center text-slate-700 overflow-hidden"
                initial={false}
                animate={{ 
                    clipPath: isDark ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)"
                }}
                transition={{ type: "spring", stiffness: 40, damping: 20 }}
            >
                 <MoonIconPattern />
            </motion.div>

            {/* Toggle Switch */}
            <div className="relative z-10 cursor-pointer">
                 <motion.div 
                    layout
                    className={`w-16 h-8 rounded-full flex items-center p-1 shadow-inner transition-colors duration-500 ${isDark ? "bg-slate-700" : "bg-slate-200"}`}
                 >
                    <motion.div 
                        layout
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className={`w-6 h-6 rounded-full shadow-md flex items-center justify-center ${isDark ? "bg-slate-900 translate-x-8" : "bg-white translate-x-0"}`}
                    >
                        {isDark ? <Moon size={12} className="text-white" /> : <Zap size={12} className="text-yellow-500" />}
                    </motion.div>
                 </motion.div>
            </div>
        </div>
    )
}
// Decorative patterns for theme background
const SunIconPattern = () => <div className="grid grid-cols-4 gap-8 opacity-20"><Zap/><Zap/><Zap/><Zap/><Zap/><Zap/><Zap/><Zap/></div>
const MoonIconPattern = () => <div className="grid grid-cols-4 gap-8 opacity-20"><Moon/><Moon/><Moon/><Moon/><Moon/><Moon/><Moon/><Moon/></div>


/* ========================================================================
   VISUAL 4: Magnetic Interaction
   (Button pulls towards mouse cursor within a specific range)
======================================================================== */
const MagneticInteraction = () => {
    const ref = useRef(null);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };
    
    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        
        position.x.set(middleX);
        position.y.set(middleY);
    }

    const reset = () => {
        position.x.set(0);
        position.y.set(0);
    }

    const { x, y } = position;
    
    // Spring physics for the "pull"
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    return (
        <div 
            className="w-full h-full flex items-center justify-center bg-slate-50"
            onMouseMove={handleMouse}
            onMouseLeave={reset}
        >
            {/* The Magnetic Area Trigger */}
            <motion.button
                ref={ref}
                style={{ x: springX, y: springY }}
                whileTap={{ scale: 0.9 }}
                className="relative group w-32 h-32 rounded-full bg-white border border-slate-200 shadow-xl flex flex-col items-center justify-center cursor-none transition-colors hover:border-teal-400"
            >
                <div className="absolute inset-0 rounded-full bg-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150 blur-xl" />
                
                <Fingerprint size={32} className="text-teal-600 mb-2 relative z-10" />
                <span className="text-xs font-bold text-slate-900 relative z-10 uppercase tracking-widest">Touch</span>

                {/* Custom Cursor Replacement inside the button */}
                <motion.div 
                    className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 -right-4 -bottom-4"
                >
                    <MousePointer2 size={24} className="fill-slate-900 text-slate-900" />
                </motion.div>
            </motion.button>
        </div>
    )
}

export default DesignProcess;