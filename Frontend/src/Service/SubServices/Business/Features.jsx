import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Lock, 
  Globe, 
  Code, 
  Cpu, 
  BarChart3, 
  Users, 
  Workflow,
  ArrowRight
} from 'lucide-react';

const AutomationFeatures = () => {
  // Theme Constants
  const THEME = {
    primary: "#28A3B9",
    secondary: "#1E7A86",
    accent: "#06b6d4",
    dark: "#0f172a",
  };

  return (
    <section className="py-5 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-2 h-8 rounded-full bg-gradient-to-b from-teal-400 to-teal-600"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Platform Capabilities</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]"
          >
            Built to scale <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
              without the friction.
            </span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          
          {/* 1. VISUAL WORKFLOW BUILDER (Wide) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden group"
          >
            <div className="relative z-20 max-w-md">
              <div className="p-3 bg-teal-50 w-fit rounded-xl mb-4 text-teal-600">
                <Workflow size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Visual Workflow Builder</h3>
              <p className="text-slate-500 leading-relaxed">
                Drag, drop, and connect logic nodes. Create complex automation trees with conditions, loops, and delays—no engineering degree required.
              </p>
            </div>

            {/* Animation: Connected Nodes */}
            <div className="absolute top-0 right-0 w-[45%] h-full hidden md:flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500">
               <div className="relative w-full h-48">
                  {/* Nodes */}
                  <Node icon={<Zap size={14}/>} x="10%" y="50%" color="bg-teal-100 text-teal-600" label="Trigger" />
                  <Node icon={<Cpu size={14}/>} x="50%" y="20%" color="bg-blue-100 text-blue-600" label="Process" delay={0.2} />
                  <Node icon={<Code size={14}/>} x="50%" y="80%" color="bg-purple-100 text-purple-600" label="Function" delay={0.4} />
                  <Node icon={<ArrowRight size={14}/>} x="90%" y="50%" color="bg-green-100 text-green-600" label="End" delay={0.6} />

                  {/* Connecting Lines (SVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <motion.path 
                      d="M 40 70 Q 100 70 140 40" 
                      fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
                    />
                    <motion.path 
                      d="M 40 70 Q 100 70 140 110" 
                      fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }}
                    />
                     <motion.path 
                      d="M 180 40 Q 220 70 260 70" 
                      fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }}
                    />
                     <motion.path 
                      d="M 180 110 Q 220 70 260 70" 
                      fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }}
                    />
                  </svg>
               </div>
            </div>
          </motion.div>

          {/* 2. REAL-TIME ANALYTICS (Tall / Dark Theme) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-slate-900 rounded-3xl p-8 border border-slate-800 text-white relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="p-3 bg-white/10 w-fit rounded-xl backdrop-blur-md mb-4 text-teal-400">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Analytics</h3>
              <p className="text-slate-400 text-sm">Monitor execution times, error rates, and throughput in real-time.</p>
            </div>

            {/* Animation: Rising Bars */}
            <div className="h-32 flex items-end justify-between gap-2 mt-6">
               {[40, 70, 50, 90, 65, 85].map((h, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: "10%" }}
                   whileInView={{ height: `${h}%` }}
                   transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                   className="w-full bg-gradient-to-t from-teal-900 to-teal-400 rounded-t-sm opacity-80 hover:opacity-100"
                 />
               ))}
            </div>
          </motion.div>

          {/* 3. ENTERPRISE SECURITY */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group"
          >
            <div className="p-3 bg-slate-50 w-fit rounded-xl mb-4 text-slate-700 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Bank-Grade Security</h3>
            <p className="text-slate-500 text-sm mb-6">SOC2 Type II, GDPR, and ISO27001 ready. Zero-trust architecture.</p>
            
            <div className="absolute -bottom-6 -right-6 opacity-10 group-hover:opacity-20 transition-opacity">
               <Lock size={140} />
            </div>
            <div className="flex gap-2">
               <Badge text="Encrypted" />
               <Badge text="SSO" />
            </div>
          </motion.div>

          {/* 4. AI INTELLIGENCE (New) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100 relative overflow-hidden group"
          >
             {/* Pulsing Gradient */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-400 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="p-3 bg-white w-fit rounded-xl mb-4 text-indigo-600 shadow-sm">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">AI-Powered Logic</h3>
              <p className="text-slate-600 text-sm">
                Embed LLMs directly into your workflows to parse text, generate content, or make decisions.
              </p>
            </div>
          </motion.div>

          {/* 5. GLOBAL EDGE */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group"
          >
            <div className="p-3 bg-orange-50 w-fit rounded-xl mb-4 text-orange-500">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Global Edge</h3>
            <p className="text-slate-500 text-sm">Deploy to 35+ regions. Sub-50ms latency worldwide.</p>
            
            {/* Radar Animation */}
            <div className="absolute bottom-4 right-4 w-20 h-20">
                <span className="absolute inline-flex h-full w-full rounded-full bg-orange-100 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-20 w-20 border-2 border-orange-200 items-center justify-center">
                   <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </span>
            </div>
          </motion.div>

          {/* 6. DEVELOPER API */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden group"
          >
             <div className="p-3 bg-white w-fit rounded-xl mb-4 text-slate-700 shadow-sm">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">API First</h3>
              <p className="text-slate-500 text-sm mb-4">Extend anything with code.</p>
              
              <div className="bg-slate-900 rounded-lg p-3 shadow-inner transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"/>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"/>
                  <div className="w-2 h-2 rounded-full bg-green-500"/>
                </div>
                <code className="text-[10px] text-teal-400 font-mono">
                  POST /api/v1/hooks <br/>
                  <span className="text-white">{"{ 'event': 'trigger' }"}</span>
                </code>
              </div>
          </motion.div>

          {/* 7. TEAM COLLABORATION (Wide) */}
{/* 7. TEAM COLLABORATION (Wide) */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-8 group"
          >
             <div className="max-w-md">
                <div className="p-3 bg-pink-50 w-fit rounded-xl mb-4 text-pink-500">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Built for Teams</h3>
                <p className="text-slate-500">
                  Real-time multiplayer editing, granular permissions, and audit logs. Work together on workflows without stepping on toes.
                </p>
             </div>

             {/* Right Side: Multiplayer Cursor Simulation */}
             <div className="relative w-full md:w-64 h-32 bg-slate-50 rounded-xl border border-slate-100 overflow-hidden flex items-center justify-center">
                
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:8px_8px]"></div>

                {/* Mock UI Element being edited */}
                <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-xs font-mono text-slate-400">
                   {"<Workflow_Config />"}
                </div>

                {/* Cursor 1 (Sarah) */}
                <motion.div 
                   animate={{ x: [0, 40, 10, 0], y: [0, -20, 10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-1/3 left-1/3 z-20"
                >
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-pink-500 drop-shadow-md">
                      <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="currentColor" stroke="white" strokeWidth="2"/>
                   </svg>
                   <div className="absolute left-4 top-4 bg-pink-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-br-lg rounded-bl-lg rounded-tr-lg">
                      Sarah
                   </div>
                </motion.div>

                {/* Cursor 2 (Mike) */}
                <motion.div 
                   animate={{ x: [0, -30, -10, 0], y: [0, 30, -10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-1/3 right-1/3 z-10"
                >
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-500 drop-shadow-md">
                      <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="currentColor" stroke="white" strokeWidth="2"/>
                   </svg>
                   <div className="absolute left-4 top-4 bg-blue-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-br-lg rounded-bl-lg rounded-tr-lg">
                      Mike
                   </div>
                </motion.div>

             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- Sub-components ---

const Node = ({ icon, x, y, color, label, delay = 0 }) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ delay, type: "spring" }}
    className="absolute flex flex-col items-center gap-2 z-10"
    style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
  >
    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shadow-lg border-2 border-white`}>
      {icon}
    </div>
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-white px-2 py-0.5 rounded-full shadow-sm border border-slate-100">{label}</span>
  </motion.div>
);

const Badge = ({ text }) => (
  <span className="px-2 py-1 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-600 uppercase">
    {text}
  </span>
);

export default AutomationFeatures;