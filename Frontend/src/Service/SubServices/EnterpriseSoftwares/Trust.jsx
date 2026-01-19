import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Activity, 
  Globe, 
  Clock, 
  Server, 
  FileCheck,
  Lock
} from "lucide-react";

const EnterpriseTrust = () => {
  return (
    <section className="relative py-24 bg-slate-50 font-sans overflow-hidden">
      
      {/* --- Background Decor --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]" />
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
            <span className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              The Enterprise Standard
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                Mission-Critical Scale
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We adhere to the strictest standards of security, availability, and compliance to ensure your infrastructure never fails.
            </p>
          </motion.div>
        </div>

        {/* --- Bento Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          
          {/* Card 1: Security (Large) */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="md:col-span-1 lg:col-span-1 bg-white rounded-2xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 flex flex-col justify-between group overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-20 bg-teal-50 rounded-full blur-[60px] translate-x-10 -translate-y-10 opacity-50 group-hover:opacity-100 transition-opacity" />
             
             <div className="relative z-10">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                   <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Bank-Grade Security</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  End-to-end encryption (AES-256), Zero Trust architecture, and regular penetration testing.
                </p>
             </div>
             
             {/* Security Badge */}
             <div className="mt-auto flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100 w-fit">
                <Lock size={14} className="text-teal-500" />
                <span className="text-xs font-bold text-slate-600 uppercase">SOC2 Type II Ready</span>
             </div>
          </motion.div>

          {/* Card 2: Uptime (Middle Top) */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="md:col-span-1 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-transparent" />
             
             <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                   <Activity size={24} className="text-teal-400" />
                   <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-teal-400">
                     <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                     Live Status
                   </span>
                </div>
                
                <div className="mt-auto">
                   <div className="text-5xl font-mono font-bold tracking-tight mb-1 text-white">
                      <Counter from={90.00} to={99.99} />%
                   </div>
                   <p className="text-slate-400 text-sm">Guaranteed Uptime SLA</p>
                </div>
             </div>
          </motion.div>

          {/* Card 3: Global Scale (Right Top) */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="md:col-span-1 lg:col-span-1 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-teal-300 transition-colors group"
          >
             <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-500 mb-6 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                <Globe size={28} />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">Global Infrastructure</h3>
             <p className="text-slate-500 text-sm leading-relaxed">
               Low-latency edge computing deployed across AWS/Azure regions worldwide.
             </p>
          </motion.div>

          {/* Card 4: Support (Wide Bottom) */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row items-start md:items-center gap-8"
          >
             <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-teal-600/20">
                <Clock size={32} />
             </div>
             <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">24/7 Dedicated Engineering Support</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                  Direct access to senior engineers (no chat bots). We provide 15-minute response times for critical incidents and dedicated account managers.
                </p>
             </div>
          </motion.div>
           
          {/* Card 5: Compliance (Right Bottom) */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="md:col-span-1 bg-white rounded-2xl p-8 border border-slate-200 flex flex-col justify-center items-center text-center hover:shadow-lg transition-shadow"
          >
             <FileCheck size={32} className="text-teal-600 mb-4" />
             <h3 className="text-lg font-bold text-slate-900 mb-1">Audit Ready</h3>
             <p className="text-slate-500 text-xs">Full logs & reporting</p>
          </motion.div>

        </div>

        {/* --- Bottom Ticker: Compliance Badges --- */}
        <div className="border-t border-slate-200 pt-12">
            <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">
               Compliant with Global Standards
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               <Badge text="ISO 27001" />
               <Badge text="GDPR Compliant" />
               <Badge text="HIPAA Ready" />
               <Badge text="SOC 2 Type II" />
               <Badge text="PCI DSS" />
            </div>
        </div>

      </div>
    </section>
  );
};

/* ==========================================
   HELPER: Number Counter Animation
========================================== */
const Counter = ({ from, to }) => {
   const [count, setCount] = useState(from);
 
   useEffect(() => {
     const duration = 2000; // 2 seconds
     const steps = 60;
     const increment = (to - from) / steps;
     let current = from;
     let timer;
 
     const run = () => {
       timer = setInterval(() => {
         current += increment;
         if (current >= to) {
           setCount(to);
           clearInterval(timer);
         } else {
           setCount(current);
         }
       }, duration / steps);
     };
     
     // Simple way to trigger on mount, ideally use IntersectionObserver for "on view"
     run();
     return () => clearInterval(timer);
   }, [from, to]);
 
   return <>{count.toFixed(2)}</>;
};

/* ==========================================
   HELPER: Text Badge (Logo Placeholder)
========================================== */
const Badge = ({ text }) => (
   <div className="flex items-center gap-2 group cursor-default">
      <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-teal-500 transition-colors" />
      <span className="text-lg font-bold text-slate-600 group-hover:text-teal-700 transition-colors">{text}</span>
   </div>
);

export default EnterpriseTrust;