import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from "react-router-dom";

const AthenuraHero = () => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const [stage, setStage] = useState('brand-reveal');

  // --- 1. Video Ping-Pong Logic ---
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video starts playing
    video.play().catch(err => console.log("Autoplay blocked or failed", err));

    const handleTimeUpdate = () => {
      const buffer = 0.1; // Small buffer to prevent getting stuck
      
      // If we are playing forward and reach the end
      if (video.playbackRate > 0 && video.currentTime >= video.duration - buffer) {
        video.playbackRate = -1.0;
      } 
      // If we are playing backward and reach the start
      else if (video.playbackRate < 0 && video.currentTime <= buffer) {
        video.playbackRate = 1.0;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  // --- 2. Canvas Animation Logic ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let n = 0;
    const c = 12;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 3, 3, 0.15)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 15; i++) {
        let a = n * 137.5 * (Math.PI / 180);
        let r = c * Math.sqrt(n);
        let x = r * Math.cos(a) + width / 2;
        let y = r * Math.sin(a) + height / 2;

        let hue = (n * 0.1) % 40 + 175;
        ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${0.5 + Math.random() * 0.5})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
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

    const revealTimer = setTimeout(() => setStage('morphing'), 3000);
    const finalTimer = setTimeout(() => setStage('final'), 4000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(revealTimer);
      clearTimeout(finalTimer);
    };
  }, []);

  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="relative min-h-[92vh] w-full bg-[#030303] overflow-hidden text-white">

      {/* --- BACKGROUND VIDEO LAYER --- */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted
          playsInline
          /* Fixed Path: In React/Vite, use /filename for public folder files */
          src="/Animate.mp4" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* --- CANVAS LAYER --- */}
      <motion.canvas
        ref={canvasRef}
        style={{ y: yBg }}
        className="absolute inset-0 z-[1] opacity-80 pointer-events-none"
      />

      {/* --- VIGNETTE/GRADIENT LAYER --- */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent_0%,#030303_90%)]" />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {stage === 'brand-reveal' ? (
            <motion.div
              key="brand-reveal-stage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="flex mt-20">
                {"ATHENURA".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-8xl font-bold tracking-[0.2em]"
                    style={{ fontFamily: 'serif' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                className="h-[1px] w-full max-w-md bg-gradient-to-r from-transparent via-[#28A3B9] to-transparent"
              />
            </motion.div>
          ) : (
            <motion.div
              key="hero-active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            >
              <div className="lg:col-span-7 text-left">
                <motion.h1
                  className="text-[15vw] lg:text-[7vw] leading-[0.85] font-medium"
                  style={{ fontFamily: 'serif' }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.4, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="block italic mt-15"
                  >
                    Together
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="block text-[#28A3B9] font-sans font-black tracking-tighter uppercase"
                  >
                    We Create
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="block text-white font-sans font-black tracking-tighter uppercase"
                  >
                    Innovate
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={stage === 'final' ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mt-12 flex flex-wrap gap-6 items-center"
                >
                  <Link to="/contact">
                    <button className="px-10 py-4 bg-white text-black rounded-full font-semibold hover:bg-[#28A3B9] hover:text-white transition-all duration-500">
                      Innovate
                    </button>
                  </Link>

                  <Link to="/portfolio">
                    <button className="text-xs uppercase tracking-widest border-b border-white/20 pb-1 hover:border-[#28A3B9] transition-colors">
                      View Portfolio
                    </button>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={stage === 'final' ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="lg:col-span-5 border-l-2 border-[#118296] pl-8 py-4"
              >
                <p className="text-xl lg:text-2xl leading-relaxed text-gray-400 font-light italic serif">
                  <span className="text-[#28A3B9] text-4xl block mb-2 not-italic">“</span>
                  Athenura bridges the gap between academic theory and industry reality empowering and building the architects of tomorrow.
                  <span className="text-[#28A3B9] text-4xl block mt-1 text-right not-italic">”</span>
                </p>
                <div className="mt-1 flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-[#28A3B9]" />
                  <span className="text-[12px] uppercase tracking-[0.5em] text-white/50">The Mission</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 left-10 flex flex-col items-start gap-4 opacity-40"
      >
        <div className="w-16 h-[1px] bg-white" />
        <span className="text-[9px] uppercase tracking-[0.5em]">Explore</span>
      </motion.div>
    </div>
  );
};

export default AthenuraHero;