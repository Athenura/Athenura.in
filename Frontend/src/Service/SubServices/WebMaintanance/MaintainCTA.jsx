import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  ArrowRight, 
  Check, 
  Copy,
  MessageSquare
} from "lucide-react";

const MaintenanceRibbon = () => {
  return (
    <section className="bg-slate-50 py-20 relative overflow-hidden font-sans flex items-center justify-center">
      
      {/* --- Background Pattern --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- The Ribbon Container --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-slate-900 rounded-3xl md:rounded-full p-3 pl-6 shadow-2xl shadow-slate-200 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6"
        >
            
            {/* Left: Status & Copy */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left pt-4 md:pt-0 w-full md:w-auto">
                {/* Live Indicator */}
                <div className="flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Engineers Online</span>
                </div>
                
                {/* Headline */}
                <div>
                    <h3 className="text-white font-bold text-lg">System Emergency?</h3>
                    <p className="text-slate-400 text-sm hidden md:block">Direct line to our DevOps team.</p>
                </div>
            </div>

            {/* Right: Contact Actions (The Buttons) */}
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto pb-2 md:pb-0">
                
                {/* 1. Copyable Email Pill */}
                <ContactPill 
                    type="email"
                    value="info.athenura@gmail.com"
                    icon={<Mail size={18} />}
                    label="Email Support"
                />

                {/* 2. Copyable Phone Pill */}
                <ContactPill 
                    type="phone"
                    value="+919835051934"
                    icon={<Phone size={18} />}
                    label="Emergency Line"
                    highlight
                />
            </div>

        </motion.div>

        {/* Bottom Helper Text */}
        <p className="text-center text-slate-400 text-xs mt-6">
            Typical response time: <span className="text-teal-600 font-bold">Under 2 Hours</span> for critical alerts.
        </p>

      </div>
    </section>
  );
};

/* ========================================================================
   SUB-COMPONENT: Contact Pill (Handles Copy Logic)
======================================================================== */
const ContactPill = ({ type, value, icon, label, highlight }) => {
    const [copied, setCopied] = useState(false);

    const handleAction = () => {
        // Copy to clipboard
        navigator.clipboard.writeText(value);
        setCopied(true);
        
        // Reset icon after 2 seconds
        setTimeout(() => setCopied(false), 2000);

        // Optional: Actually open the link after a slight delay
        // setTimeout(() => {
        //     window.location.href = type === 'email' ? `mailto:${value}` : `tel:${value}`;
        // }, 500);
    };

    return (
        <button 
            onClick={handleAction}
            className={`
                group relative h-12 rounded-full px-1 pl-1 pr-6 flex items-center gap-3 transition-all duration-300 w-full sm:w-auto
                ${highlight 
                    ? "bg-teal-600 hover:bg-teal-500 text-white" 
                    : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                }
            `}
        >
            {/* Icon Circle */}
            <div className={`
                h-10 w-10 rounded-full flex items-center justify-center transition-colors
                ${highlight ? "bg-white/20" : "bg-black/20 group-hover:bg-black/30"}
            `}>
                <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                        <motion.div
                            key="check"
                            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                        >
                            <Check size={16} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="icon"
                            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                        >
                            {icon}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-start">
                <span className={`text-[10px] font-bold uppercase tracking-wider opacity-70 ${highlight ? "text-teal-100" : "text-slate-400"}`}>
                    {copied ? "Copied!" : label}
                </span>
                <span className="font-mono text-sm font-bold leading-none">
                    {value}
                </span>
            </div>

            {/* Hover visual cue */}
            {!copied && (
                <div className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                    <Copy size={14} className="opacity-50" />
                </div>
            )}
        </button>
    );
};

export default MaintenanceRibbon;