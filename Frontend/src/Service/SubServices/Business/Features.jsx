import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Lock, 
  Zap, 
  Globe, 
  MousePointer, 
  Code 
} from 'lucide-react';

const AutomationFeatures = () => {
  // Theme
  const COLORS = {
    primaryLight: "#28A3B9",
    primaryDark: "#1E7A86",
    bg: "#FFFFFF",
    textDark: "#0f172a",
  };

  // Animation for the "Drag and Drop" simulation
  const dragAnimation = {
    rest: { x: 0, y: 0 },
    hover: { 
      x: 60, 
      y: 40,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  return (
    <section className="py-24 px-6 bg-white relative">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-1 rounded-full" style={{ backgroundColor: COLORS.primaryLight }}></span>
            <span className="text-sm font-bold uppercase tracking-wider text-slate-500">Platform Powers</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight"
          >
            Everything you need to <br/>
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primaryLight}, ${COLORS.primaryDark})` }}>
              scale without friction.
            </span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Visual Builder (Large, Spans 2 cols) */}
          <motion.div 
            whileHover="hover"
            initial="rest"
            className="md:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 overflow-hidden relative group"
          >
            <div className="relative z-10 max-w-sm">
              <div className="p-3 bg-white w-fit rounded-xl shadow-sm mb-4 text-[#28A3B9]">
                <MousePointer size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Visual Workflow Builder</h3>
              <p className="text-slate-500">Drag, drop, and connect. Build complex logic trees visually. No engineering degree required.</p>
            </div>

            {/* Visual Representation of Drag & Drop */}
            <div className="absolute top-10 right-0 w-1/2 h-full hidden md:block opacity-50 group-hover:opacity-100 transition-opacity">
               {/* Mock Sidebar */}
               <div className="absolute right-10 top-10 w-40 bg-white rounded-xl shadow-lg border border-slate-200 p-4 space-y-3">
                  <div className="h-2 w-10 bg-slate-200 rounded mb-4"></div>
                  {/* Draggable Item */}
                  <motion.div 
                    variants={dragAnimation}
                    className="flex items-center gap-2 p-2 bg-[#28A3B9]/10 rounded-lg border border-[#28A3B9] cursor-pointer z-20 relative shadow-sm"
                  >
                    <Zap size={14} className="text-[#1E7A86]" />
                    <span className="text-xs font-bold text-[#1E7A86]">Trigger</span>
                  </motion.div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100"><span className="text-xs text-slate-300">Action</span></div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100"><span className="text-xs text-slate-300">Delay</span></div>
               </div>

               {/* Mock Canvas Drop Zone */}
               <div className="absolute right-[-20px] bottom-10 w-64 h-48 bg-white rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">
                  <span className="text-xs text-slate-400 font-medium">Drop Logic Here</span>
               </div>
            </div>
          </motion.div>


          {/* Card 2: Security (Tall or Regular) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-900 rounded-3xl p-8 border border-slate-800 relative overflow-hidden text-white"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#28A3B9] opacity-10 blur-[80px] rounded-full"></div>
             
             <div className="relative z-10">
               <div className="p-3 bg-white/10 w-fit rounded-xl backdrop-blur-md mb-4 text-[#28A3B9]">
                 <Lock size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-2">Enterprise Grade</h3>
               <p className="text-slate-400 text-sm leading-relaxed">SOC2 Type II certified. End-to-end encryption for all data in transit and at rest.</p>
             </div>

             {/* Animated Shield/Scan Effect */}
             <div className="absolute bottom-4 right-4 opacity-30">
                <ShieldAnimation color={COLORS.primaryLight} />
             </div>
          </motion.div>


          {/* Card 3: Integration Speed (Tall, Row Span 2) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:row-span-2 bg-[#28A3B9] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between"
          >
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

             <div className="relative z-10 text-white">
               <div className="p-3 bg-white/20 w-fit rounded-xl backdrop-blur-md mb-6">
                 <Zap size={24} className="text-white" />
               </div>
               <h3 className="text-4xl font-bold mb-4">Real-time <br/>Latency.</h3>
               <p className="text-teal-100 text-lg">Executes in milliseconds. Don't keep your customers waiting for a slow backend.</p>
             </div>

             {/* Speed Meter Graphic */}
             <div className="relative h-32 w-full mt-8 bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 p-4 flex items-end">
                <motion.div 
                  initial={{ height: "10%" }}
                  whileInView={{ height: "80%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-1/4 bg-white/30 rounded-t-sm mx-1"
                />
                <motion.div 
                  initial={{ height: "10%" }}
                  whileInView={{ height: "60%" }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                  className="w-1/4 bg-white/50 rounded-t-sm mx-1"
                />
                <motion.div 
                  initial={{ height: "10%" }}
                  whileInView={{ height: "95%" }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                  className="w-1/4 bg-white rounded-t-sm mx-1"
                />
             </div>
          </motion.div>


          {/* Card 4: Global Scale */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50"
          >
             <div className="p-3 bg-orange-50 w-fit rounded-xl mb-4 text-orange-500">
               <Globe size={24} />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-2">Global Edge</h3>
             <p className="text-slate-500 text-sm">Deploy logic to 35+ regions instantly. Lower latency for users worldwide.</p>
          </motion.div>


          {/* Card 5: Developer API */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden group"
          >
             <div className="relative z-10">
               <div className="p-3 bg-purple-50 w-fit rounded-xl mb-4 text-purple-600">
                 <Code size={24} />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-2">API First</h3>
               <p className="text-slate-500 text-sm">Everything is accessible via API. Extend functionalities with custom code blocks.</p>
             </div>
             
             {/* Code Decoration */}
             <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-tl-2xl border border-slate-100 shadow-sm opacity-50 group-hover:opacity-100 transition-opacity">
                <code className="text-[10px] text-purple-600 font-mono">
                  POST /api/v1/trigger<br/>
                  {'{ "event": "user_signup" }'}
                </code>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Simple Shield Animation Helper
const ShieldAnimation = ({ color }) => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <motion.path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      initial={{ pathLength: 0, fill: "rgba(255,255,255,0)" }}
      animate={{ pathLength: 1, fill: "rgba(255,255,255,0.05)" }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
  </svg>
);

export default AutomationFeatures;