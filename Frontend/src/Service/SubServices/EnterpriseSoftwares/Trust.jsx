import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
   ShieldCheck,
   Activity,
   Globe,
   Clock,
   Server,
   FileCheck,
   Lock,
   Database,
   RefreshCw,
   MapPin,
   FileText
} from "lucide-react";

const EnterpriseTrust = () => {
   return (
      <section className="relative py-12 bg-slate-50 font-sans overflow-hidden">

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
            {/* Changed grid to support dense packing and better responsive behavior */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 auto-rows-fr">

               {/* 1. Security (Standard) */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-teal-200 transition-colors"
               >
                  <div>
                     <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                        <ShieldCheck size={28} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">Bank-Grade Security</h3>
                     <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        AES-256 encryption at rest, TLS 1.3 in transit, and strictly enforced Zero Trust architecture.
                     </p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100 w-fit">
                     <Lock size={14} className="text-teal-500" />
                     <span className="text-xs font-bold text-slate-600 uppercase">SOC2 Type II Ready</span>
                  </div>
               </motion.div>

               {/* 2. Uptime (Dark Card) */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col relative overflow-hidden group"
               >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-transparent" />
                  <div className="relative z-10 flex flex-col h-full justify-between">
                     <div className="flex items-center justify-between ">
                        <Activity size={24} className="text-teal-400" />
                        <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-teal-400">
                           <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                           Live
                        </span>
                     </div>
                     <div>

                        <div className="text-5xl font-mono font-bold tracking-tight mb-2 text-white">
                           <Counter from={90.00} to={99.99} />%
                        </div>
                        <p className="text-slate-400 mb-5 text-sm">Guaranteed Uptime SLA</p>
                        <p className="text-slate-300 text-lg">
                           High-availability architecture with multi-region failover
                        </p>
                     </div>
                  </div>
               </motion.div>

               {/* 3. Global Scale (Standard) */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-teal-200 transition-colors"
               >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-500 mb-6 group-hover:text-teal-600 transition-colors">
                     <Globe size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Global Edge Network</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                     Deployed across 35+ AWS & Azure regions for <span className="font-semibold text-slate-700">sub-50ms latency</span> anywhere.
                  </p>
                  {/* Visual Map Dots */}
                  <div className="flex gap-1">
                     {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full bg-teal-500 w-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                        </div>
                     ))}
                  </div>
               </motion.div>

               {/* --- ROW 2 --- */}

               {/* 4. Support (Wide) */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="md:col-span-2 bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row items-center gap-8"
               >
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-teal-600/20">
                     <Clock size={32} />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">24/7 Dedicated Engineering Support</h3>
                     <p className="text-slate-500 text-sm leading-relaxed max-w-lg mb-4">
                        Direct access to senior engineers via Slack or Teams. We provide 15-minute response times for critical incidents and dedicated account managers for enterprise plans.
                     </p>
                     <div className="flex gap-4 text-xs font-semibold text-slate-600">
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Phone</span>
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Email</span>
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Slack Connect</span>
                     </div>
                  </div>
               </motion.div>

               {/* 5. NEW: Disaster Recovery */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-teal-200 transition-colors"
               >
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                     <RefreshCw size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Automated Backups</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                     Point-in-time recovery (PITR) with 30-day retention. Your data is replicated across 3 availability zones.
                  </p>
               </motion.div>

               {/* --- ROW 3 --- */}

               {/* 6. NEW: Data Sovereignty */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-teal-200 transition-colors"
               >
                  <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-6">
                     <MapPin size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Data Residency</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                     Choose exactly where your data lives. We offer specific regions for EU (GDPR) and US compliance requirements.
                  </p>
               </motion.div>

               {/* 7. Enhanced Compliance (Wide) */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="md:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8 group"
               >
                  <div className="flex-1">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                           <FileText size={24} className="text-slate-700" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Audit Logs & Governance</h3>
                     </div>
                     <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                        Complete visibility into your system. Every API call, login, and configuration change is logged, searchable, and exportable for your compliance audits.
                     </p>
                  </div>

                  {/* Mini Visual: Mock Log */}
                  <div className="hidden md:block w-64 bg-slate-900 rounded-lg p-4 font-mono text-[10px] text-slate-400 shadow-lg opacity-80 group-hover:opacity-100 transition-opacity">
                     <div className="flex gap-1.5 mb-3">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                     </div>
                     <div className="space-y-1">
                        <p><span className="text-teal-400">INFO</span> User_Login: success</p>
                        <p><span className="text-teal-400">INFO</span> API_Req: /v1/data 200</p>
                        <p><span className="text-yellow-400">WARN</span> Rate_Limit: 80%</p>
                     </div>
                  </div>
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