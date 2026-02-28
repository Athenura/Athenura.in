import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BlogHero = () => {
    const canvasRef = useRef(null);

    // --- Canvas Animation Logic (Adjusted for Light Theme Visibility) ---
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let n = 0;
        const c = 10;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const draw = () => {
            // Fills with white-ish trail instead of dark
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < 12; i++) {
                let a = n * 137.5 * (Math.PI / 180);
                let r = c * Math.sqrt(n);
                let x = r * Math.cos(a) + width / 2;
                let y = r * Math.sin(a) + height / 2;

                // Using darker teal for better visibility on light background
                ctx.fillStyle = n % 2 === 0 ? '#28A3B9' : '#1E7A86';
                ctx.globalAlpha = 0.2; // Lower alpha for subtle elegance
                ctx.beginPath();
                ctx.arc(x, y, 1.5, 0, Math.PI * 2);
                ctx.fill();
                n++;

                if (r > Math.max(width, height)) {
                    n = 0;
                    ctx.clearRect(0, 0, width, height);
                }
            }
            animationFrameId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            n = 0;
        };

        window.addEventListener('resize', handleResize);
        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <div className="relative min-h-[95vh] w-full bg-white overflow-hidden text-black">
            {/* --- CANVAS LAYER --- */}
            <motion.canvas
                ref={canvasRef}
                style={{ y: yBg }}
                className="absolute inset-0 z-[1] pointer-events-none"
            />

            {/* --- GRADIENT OVERLAY (Flipped to White) --- */}
            <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent_0%,#ffffff_100%)]" />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-12"
                >
                    {/* LEFT: TEXT CONTENT */}
                    <div className="lg:col-span-7">
                        <h1 className="text-[12vw] lg:text-[6.5vw] leading-[0.9] font-black uppercase tracking-tighter text-black">
                            The <span className="text-[#28A3B9]">Growth</span> <br />
                            <span className="italic font-light text-gray-400" style={{ fontFamily: 'serif' }}>Chronicles</span>
                        </h1>
                        <p className="mt-8 max-w-lg text-lg text-gray-600 leading-relaxed border-l-2 border-[#28A3B9] pl-6">
                            Deep dives into strategy, technology, marketing, and innovation shaping modern industries.
                            <span className="text-black font-semibold"> Curated by the Athenura team.</span>
                        </p>

                        <div className="mt-10 flex items-center gap-8">
                            <button className="group relative overflow-hidden px-8 py-4 bg-black text-white font-bold uppercase text-xs tracking-widest transition-all">
                                <span className="relative z-10">Start Reading</span>
                                <div className="absolute inset-0 translate-y-full bg-[#28A3B9] transition-transform group-hover:translate-y-0" />
                            </button>
                            <div className="h-[1px] w-24 bg-black/10" />
                        </div>
                    </div>

                    {/* RIGHT: FEATURED CARD (Light Mode Glassmorphism) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="lg:col-span-5"
                    >
                        <div className="relative group p-10 rounded-3xl border border-gray-100 bg-[#E9F5F8]/30 backdrop-blur-xl hover:border-[#28A3B9]/40 transition-all duration-500 shadow-sm">

                            {/* Title */}
                            <h3 className="text-3xl font-bold leading-snug text-black group-hover:text-[#28A3B9] transition-colors duration-300">
                                Ideas That Shape Tomorrow
                            </h3>

                            {/* Paragraph */}
                            <p className="mt-6 text-base text-gray-500 leading-relaxed max-w-xl">
                                A space where strategy meets creativity, and innovation fuels growth. 
                                We explore perspectives that challenge thinking and inspire progress.
                            </p>

                            {/* Decorative Accent Line */}
                            <div className="mt-8 h-[2px] w-16 bg-gradient-to-r from-[#28A3B9] to-transparent"></div>

                            {/* Subtle Hover Glow (Refined for Light theme) */}
                            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#28A3B9]/5 via-[#28A3B9]/10 to-[#28A3B9]/5 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            {/* FOOTER ACCENT */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#28A3B9]/30 to-transparent" />
        </div>
    );
};

export default BlogHero;