import React from "react";
import { motion } from "framer-motion";
import {
    Calendar,
    MoveRight
} from "lucide-react";

const FinalCTA = () => {
    return (
        <section className="relative py-12 bg-slate-50 px-6 font-sans overflow-hidden">

            {/* Container - A floating "Card" design */}
            <div className="max-w-7xl mx-auto relative">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    // UPDATED THEME: Changed from teal gradient to white with border/shadow
                    className="relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50"
                >

                    {/* --- Animated Background Elements (NEW) --- */}
                    <div className="absolute inset-0 pointer-events-none">

                        {/* 1. Subtle Moving Sheen Animation */}
                        <motion.div
                            animate={{
                                backgroundPosition: ["0% 0%", "100% 100%"],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            }}
                            // This creates a very faint moving highlight
                            className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-teal-900 via-transparent to-transparent bg-[length:200%_200%]"
                        />

                        {/* 2. Subtle Grid Pattern Overlay (Darker for white bg) */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:60px_60px]" />
                    </div>

                    {/* --- Content Content --- */}
                    <div className="relative z-10 px-8 py-5 md:px-20 text-center">


                        {/* Headline (Updated Colors) */}
                        <h2 className="text-4xl md:text-6xl py-10 font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                            Ready to engineer <br className="hidden md:block" />
                            your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">digital future?</span>
                        </h2>

                        {/* Description (Updated Colors) */}
                        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            Skip the guesswork. Let's discuss your architecture, define your scope, and build a roadmap that aligns with your business goals.
                        </p>

                        {/* --- Buttons Row --- */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">

                            {/* Primary Button – Calendly */}
                            <motion.a
                                href="https://calendly.com/official-athenura/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                className="relative group w-full sm:w-auto overflow-hidden rounded-xl"
                            >
                                <motion.button
                                    className="relative w-full px-8 py-4 bg-teal-600 text-white font-semibold text-lg rounded-xl flex items-center justify-center gap-3"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative flex items-center justify-center gap-3">
                                        <Calendar size={20} className="text-teal-100" />
                                        Book Discovery Call
                                    </span>
                                </motion.button>
                            </motion.a>

                            {/* Secondary Button – Email */}
                            <motion.a
                                href="mailto:official@athenura.in"
                                whileHover={{ x: 5 }}
                                className="group w-full sm:w-auto"
                            >
                                <motion.button
                                    whileHover={{ backgroundColor: "#f1f5f9" }}
                                    className="w-full px-8 py-4 bg-transparent border-2 border-slate-200 text-slate-600 font-semibold text-lg rounded-xl transition-all flex items-center justify-center gap-3"
                                >
                                    <span>Email Us Directly</span>
                                    <MoveRight
                                        size={20}
                                        className="text-teal-600 group-hover:translate-x-1 transition-transform"
                                    />
                                </motion.button>
                            </motion.a>

                        </div>

                        {/* --- Trust Footer (Updated Colors) --- */}
                        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-500 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-teal-500" />
                                <span>Free 30-min Technical Consultation</span>
                            </div>
                            <div className="hidden md:block w-1 h-1 rounded-full bg-slate-300" />
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-teal-500" />
                                <span>NDA Protected Discussions</span>
                            </div>
                            <div className="hidden md:block w-1 h-1 rounded-full bg-slate-300" />
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-teal-500" />
                                <span>Response within 24 Hours</span>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Simple Icon Component for the bottom row
const CheckCircle = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
    </svg>
);

export default FinalCTA;