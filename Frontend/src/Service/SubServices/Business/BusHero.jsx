import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  ArrowRight, 
  Database, 
  Mail, 
  FileText, 
  CheckCircle, 
  Settings,
  Cpu,
  Activity
} from 'lucide-react';

const AutomationHero = () => {
  // Theme Colors
  const COLORS = {
    primaryLight: "#28A3B9",
    primaryDark: "#1E7A86",
    bg: "#FFFFFF",
    textDark: "#0f172a",
    textGray: "#64748b"
  };

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom bezier for smooth snapping
    }
  };

  // Floating animation for Orbiting Nodes
  const floatAnimation = (delay) => ({
    y: [0, -15, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }
  });

  // Pulse animation for the Core Engine
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    boxShadow: [
      `0 0 0 0px ${COLORS.primaryLight}40`,
      `0 0 0 20px ${COLORS.primaryLight}00`
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans selection:bg-[#28A3B9] selection:text-white">
      
      {/* --- Dynamic Background --- */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Animated Scanning Beam */}
        <motion.div 
          animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-[#28A3B9] to-transparent shadow-[0_0_20px_#28A3B9]"
        />

        {/* Floating Blobs */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#28A3B9]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1E7A86]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" 
        />
      </div>


      {/* --- Main Hero Content --- */}
      <main className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl relative"
        >
          {/* Headline with Gradient */}
          <motion.h1 variants={textVariants} className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Automate your <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primaryLight}, ${COLORS.primaryDark})` }}>
              Business Logic.
            </span>
          </motion.h1>

          <motion.p variants={textVariants} className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
            Connect your apps, sync your data, and trigger complex actions without writing a single line of code. The future is hands-free.
          </motion.p>


          {/* Metrics */}
          <motion.div variants={textVariants} className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-3 gap-8">
             <div>
               <h3 className="text-3xl font-bold text-[#1E7A86]">10x</h3>
               <p className="text-sm text-slate-400 font-medium">Faster Delivery</p>
             </div>
             <div>
               <h3 className="text-3xl font-bold text-[#1E7A86]">0%</h3>
               <p className="text-sm text-slate-400 font-medium">Error Rate</p>
             </div>
             <div>
               <h3 className="text-3xl font-bold text-[#1E7A86]">24/7</h3>
               <p className="text-sm text-slate-400 font-medium">Uptime</p>
             </div>
          </motion.div>
        </motion.div>


        {/* RIGHT COLUMN: Highly Animated Visualization */}
        <div className="relative h-[600px] w-full flex items-center justify-center perspective-[1000px]">
          
          {/* Background Ring pulsing */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-[#28A3B9]/5 rounded-full blur-2xl transform scale-75"
          />

          {/* --- CENTRAL ENGINE --- */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-20"
          >
             {/* Spinning Rings */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -inset-8 rounded-full border border-dashed border-[#28A3B9]/30"
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute -inset-4 rounded-full border border-dotted border-[#1E7A86]/40"
             />

             {/* Core Hub */}
             <motion.div 
               animate={pulseAnimation}
               className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 relative z-20"
               style={{ borderColor: COLORS.primaryLight }}
             >
               <div className="text-center">
                 <Cpu size={40} color={COLORS.primaryDark} className="mx-auto mb-1" />
                 <div className="w-16 h-1 bg-gray-100 rounded-full mx-auto overflow-hidden">
                   <motion.div 
                     animate={{ x: ["-100%", "100%"] }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                     className="w-full h-full bg-[#28A3B9]" 
                   />
                 </div>
               </div>
             </motion.div>
          </motion.div>


          {/* --- ORBITING NODES (Inputs/Outputs) --- */}
          
          {/* Node 1: Trigger (Top Left) */}
          <motion.div 
             animate={floatAnimation(0)}
             className="absolute top-16 left-0 md:-left-8 bg-white p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 z-30 max-w-[200px]"
          >
            <div className="p-3 rounded-xl bg-blue-50 text-blue-500"><Mail size={24}/></div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold tracking-wider">TRIGGER</p>
              <p className="text-sm font-bold text-slate-800">Email Received</p>
            </div>
            {/* Status Dot */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          </motion.div>

          {/* Node 2: Database (Bottom Right) */}
          <motion.div 
             animate={floatAnimation(2)}
             className="absolute bottom-24 right-0 md:-right-8 bg-white p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 z-30"
          >
            <div className="p-3 rounded-xl bg-purple-50 text-purple-500"><Database size={24}/></div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold tracking-wider">PROCESS</p>
              <p className="text-sm font-bold text-slate-800">Sync to SQL</p>
            </div>
          </motion.div>

           {/* Node 3: Output (Top Right) */}
           <motion.div 
             animate={floatAnimation(1)}
             className="absolute top-24 right-4 md:right-0 bg-white p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 z-30"
          >
            <div className="p-3 rounded-xl bg-orange-50 text-orange-500"><FileText size={24}/></div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold tracking-wider">OUTPUT</p>
              <p className="text-sm font-bold text-slate-800">Invoice.pdf</p>
            </div>
          </motion.div>

          {/* Node 4: Analytics (Bottom Left) */}
          <motion.div 
             animate={floatAnimation(3)}
             className="absolute bottom-32 left-4 md:-left-4 bg-white p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 z-30"
          >
            <div className="p-3 rounded-xl bg-green-50 text-green-500"><Activity size={24}/></div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold tracking-wider">LOGGING</p>
              <p className="text-sm font-bold text-slate-800">200 OK</p>
            </div>
          </motion.div>


          {/* --- SVG CONNECTIONS --- */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
             <defs>
               <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor={COLORS.primaryLight} stopOpacity="0" />
                 <stop offset="50%" stopColor={COLORS.primaryLight} stopOpacity="1" />
                 <stop offset="100%" stopColor={COLORS.primaryDark} stopOpacity="0" />
               </linearGradient>
             </defs>
             
             {/* Path 1: Top Left to Center */}
             <motion.path 
               d="M 80 100 C 150 100, 150 300, 300 300" 
               fill="none" 
               stroke="#e2e8f0" 
               strokeWidth="2"
               strokeDasharray="5 5"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, ease: "easeInOut" }}
             />
             <motion.circle r="6" fill={COLORS.primaryLight}>
                <animateMotion dur="4s" repeatCount="indefinite" path="M 80 100 C 150 100, 150 300, 300 300">
                  <mpath />
                </animateMotion>
             </motion.circle>

             {/* Path 2: Center to Bottom Right */}
             <motion.path 
               d="M 300 300 C 450 300, 450 500, 520 500" 
               fill="none" 
               stroke="#e2e8f0" 
               strokeWidth="2" 
               strokeDasharray="5 5"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
             />
             <motion.circle r="6" fill={COLORS.primaryDark}>
                <animateMotion dur="3s" begin="0.5s" repeatCount="indefinite" path="M 300 300 C 450 300, 450 500, 520 500" />
             </motion.circle>

             {/* Path 3: Center to Top Right */}
             <motion.path 
               d="M 300 300 C 400 300, 400 150, 500 120" 
               fill="none" 
               stroke="#e2e8f0" 
               strokeWidth="2" 
               strokeDasharray="5 5"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
             />
             <motion.circle r="6" fill="#F97316"> {/* Orange dot for file */}
                <animateMotion dur="5s" begin="1s" repeatCount="indefinite" path="M 300 300 C 400 300, 400 150, 500 120" />
             </motion.circle>
          </svg>

          {/* Success Notification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2.5 }}
            className="absolute -bottom-12 bg-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-green-100 z-40"
          >
            <div className="bg-green-100 p-1 rounded-full text-green-600">
              <CheckCircle size={16} /> 
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800">Workflow Complete</p>
              <p className="text-[10px] text-gray-400">0.45s execution time</p>
            </div>
          </motion.div>

        </div>

      </main>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default AutomationHero;