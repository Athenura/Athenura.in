import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, Star } from 'lucide-react';
import { Link } from "react-router-dom";

const CareersSection = () => {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Theme Colors
  const theme = {
    primary: '#28A3B9',
    secondary: '#1E7A86',
    bg: '#ffffff',
    textMain: '#0f172a', 
    textMuted: '#64748b', 
  };

  // Detect Mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Soft spring physics for "heavy/smooth" scroll feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  // ============================================
  // DESKTOP ANIMATIONS (Side-by-side scale)
  // ============================================
  const desktopScale = useTransform(smoothProgress, [0, 0.8], [1, 0.45]);
  const desktopX = useTransform(smoothProgress, [0, 0.8], ["0%", "-25%"]);
  const desktopRadius = useTransform(smoothProgress, [0, 0.8], ["0px", "32px"]);
  const desktopContentOpacity = useTransform(smoothProgress, [0.4, 0.8], [0, 1]);
  const desktopContentY = useTransform(smoothProgress, [0.4, 0.8], [50, 0]);

  // ============================================
  // MOBILE ANIMATIONS (Sheet Modal Style)
  // ============================================
  // Instead of changing height (jittery), we scale the image slightly back
  const mobileImgScale = useTransform(smoothProgress, [0, 0.7], [1, 0.95]);
  const mobileImgRadius = useTransform(smoothProgress, [0, 0.7], ["0px", "24px"]);
  
  // The White Card slides UP from the bottom (TranslateY)
  // Starts '100%' down (offscreen), ends at '0%' (anchored to bottom)
  const mobileCardY = useTransform(smoothProgress, [0.1, 0.7], ["100%", "0%"]);
  
  // Fade out hero text quickly so it doesn't clash
  const mobileHeroTextOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  return (
    <section 
      ref={targetRef} 
      className="relative bg-white" 
      style={{ 
        height: isMobile ? '200vh' : '300vh', // Shorter scroll on mobile
      }}
    >
      
      {/* Sticky Container: 100dvh prevents jumps when address bar hides */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col md:flex-row items-center justify-center">
        
        {/* --- VISUAL LAYER (Image) --- */}
        <motion.div 
          style={{ 
            // Mobile: Full height always, scale down slightly
            // Desktop: Full height, scale down significantly to left
            height: "100%", 
            width: "100%", 
            scale: isMobile ? mobileImgScale : desktopScale, 
            x: isMobile ? 0 : desktopX,
            borderRadius: isMobile ? mobileImgRadius : desktopRadius,
          }}
          // 'will-change-transform' forces GPU usage, preventing mobile stutter
          className="relative z-10 overflow-hidden shadow-2xl origin-center md:h-full will-change-transform bg-black"
        >
           <img 
             src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg" 
             alt="Athenura Team" 
             className="w-full h-full object-cover brightness-[0.85] md:brightness-[0.95]" 
           />

           {/* Hero Text Overlay */}
           <motion.div 
             style={{ opacity: isMobile ? mobileHeroTextOpacity : 1 }}
             className="absolute bottom-10 left-6 md:bottom-24 md:left-24 max-w-4xl z-20 pointer-events-none"
           >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 md:mb-6">
                <Sparkles size={12} className="text-[#28A3B9]" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">
                  Join the Revolution
                </span>
              </div>
              <h2 className="text-4xl md:text-8xl font-bold leading-[1.1] text-white tracking-tight">
                Building the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28A3B9] to-cyan-100">
                  Future.
                </span>
              </h2>
           </motion.div>
        </motion.div>

        {/* --- DESKTOP CONTENT (Right Side) --- */}
        <motion.div 
          style={{ 
            opacity: isMobile ? 0 : desktopContentOpacity, 
            y: isMobile ? 0 : desktopContentY,
            display: isMobile ? 'none' : 'flex'
          }}
          className="hidden md:flex absolute top-0 left-auto right-0 h-full w-1/2 flex-col justify-center px-24 z-0 bg-white"
        >
          {/* ... (Desktop Content Remains Same) ... */}
          <span className="text-sm font-bold tracking-widest uppercase mb-6" style={{ color: theme.secondary }}>
            Career Opportunities
          </span>
          <h3 className="text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
            Work where your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r" 
                  style={{ backgroundImage: `linear-gradient(to right, ${theme.secondary}, ${theme.primary})` }}>
              ideas matter.
            </span>
          </h3>
          <p className="text-lg text-slate-600 mb-10 max-w-md leading-relaxed">
            Athenura isn't just a company; it's a launchpad. We are looking for 
            visionaries ready to tackle the world's toughest technical challenges.
          </p>
          <div className="flex flex-col gap-6">
             <div className="flex gap-6 mb-2">
                <StatBox number="100%" label="Remote First" icon={<Globe size={18}/>} theme={theme} />
                <StatBox number="4.9" label="Glassdoor" icon={<Star size={18}/>} theme={theme} />
             </div>
             <Link to="/career" className="w-fit">
               <button 
                  className="group w-fit flex items-center gap-4 px-8 py-4 rounded-xl text-white font-bold text-lg shadow-xl shadow-[#28A3B9]/20 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  style={{ background: `linear-gradient(to right, ${theme.secondary}, ${theme.primary})` }}
                  >
                  Career At Athenura 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
             </Link>
          </div>
        </motion.div>

        {/* --- MOBILE CONTENT (Bottom Sheet) --- */}
        {/* FIXED: Uses TranslateY instead of Height for smoothness */}
        <motion.div 
          style={{ 
            y: isMobile ? mobileCardY : '100%',
            display: isMobile ? 'flex' : 'none'
          }}
          className="md:hidden absolute bottom-0 left-0 right-0 h-[55dvh] flex-col justify-start pt-8 px-6 pb-8 z-30 bg-white rounded-t-[32px] shadow-[0_-10px_60px_-15px_rgba(0,0,0,0.3)] will-change-transform"
        >
          {/* Drag Handle (Visual only) */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-slate-200 rounded-full opacity-60" />

          <div className="flex-1 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: theme.secondary }}>
              Career Opportunities
            </span>
            
            <h3 className="text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
              Work where your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r" 
                    style={{ backgroundImage: `linear-gradient(to right, ${theme.secondary}, ${theme.primary})` }}>
                ideas matter.
              </span>
            </h3>
            
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              We are looking for visionaries ready to tackle the toughest challenges in EdTech.
            </p>

            <div className="flex gap-4">
              <StatBox number="100%" label="Remote" icon={<Globe size={16}/>} theme={theme} isMobile={true} />
              <StatBox number="4.9" label="Rating" icon={<Star size={16}/>} theme={theme} isMobile={true} />
            </div>
          </div>
          
          <Link to="/career" className="w-full mt-4">
            <button 
              className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-bold text-base shadow-lg shadow-[#28A3B9]/25 active:scale-[0.98] transition-all duration-200"
              style={{ background: `linear-gradient(to right, ${theme.secondary}, ${theme.primary})` }}
            >
              Career At Athenura 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

const StatBox = ({ number, label, icon, theme, isMobile = false }) => (
  <div className="flex items-start gap-3">
    <div className={`p-2 rounded-lg bg-slate-50 text-[${theme.primary}]`}>
        {React.cloneElement(icon, { color: theme.primary })}
    </div>
    <div>
        <div className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-slate-900 leading-none mb-1`}>
        {number}
        </div>
        <div className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-semibold uppercase text-slate-400 tracking-wide`}>
        {label}
        </div>
    </div>
  </div>
);

export default CareersSection;