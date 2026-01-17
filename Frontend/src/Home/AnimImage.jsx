import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
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
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // --- Desktop Animations (Scale & Move) ---
  const desktopScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.45]);
  const desktopX = useTransform(scrollYProgress, [0, 0.6], ["0%", "-25%"]);
  const desktopRadius = useTransform(scrollYProgress, [0, 0.6], ["0px", "32px"]);

  // --- Mobile Animations (Height Change Only, Keep Full Width) ---
  // Starts at 65% of screen height, shrinks to 40% of screen height
  const mobileHeight = useTransform(scrollYProgress, [0, 0.6], ["65vh", "40vh"]);
  
  // --- Common Animations ---
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const contentYOffset = useTransform(scrollYProgress, [0.4, 0.7], [50, 0]);

  // Mobile-specific content animation
  const mobileContentY = useTransform(scrollYProgress, [0.3, 0.6], ["100%", "0%"]);
  const mobileContentOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section 
      ref={targetRef} 
      className="relative bg-white mt-[-50px]" 
      style={{ 
        height: isMobile ? '250vh' : '350vh' 
      }}
    >
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen  w-full overflow-hidden flex flex-col md:flex-row items-center justify-center">
        
        {/* --- The Transforming Image --- */}
        <motion.div 
          style={{ 
            // Mobile: Animate Height, Keep Width 100%, No Radius
            // Desktop: Animate Scale/X, Full Height, Add Radius
            height: isMobile ? mobileHeight : "100%",
            width: isMobile ? "100%" : "100%", 
            scale: isMobile ? 1 : desktopScale, 
            x: isMobile ? 0 : desktopX,
            borderRadius: isMobile ? 0 : desktopRadius,
          }}
          className="relative z-10 overflow-hidden shadow-2xl origin-center md:h-full"
        >
           <img 
             src="https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             alt="Athenura Team" 
             className="w-full h-full object-cover brightness-[0.95]" 
           />

           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

           {/* Initial Overlay Text */}
           <motion.div 
             style={{ opacity: overlayOpacity }}
             className="absolute bottom-6 left-6 md:bottom-24 md:left-24 max-w-4xl z-20"
           >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3 md:mb-6">
                <Sparkles size={isMobile ? 10 : 12} className="text-[#28A3B9]" />
                <span className={`${isMobile ? 'text-[9px]' : 'text-xs'} font-bold uppercase tracking-widest text-white`}>
                  Join the Revolution
                </span>
              </div>
              <h2 className={`${isMobile ? 'text-2xl' : 'text-8xl'} font-bold leading-[1.1] text-white tracking-tight`}>
                Building the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28A3B9] to-white">
                  Future.
                </span>
              </h2>
           </motion.div>
        </motion.div>


        {/* --- Desktop Content (The Pitch) --- */}
        <motion.div 
          style={{ 
            opacity: isMobile ? 0 : contentOpacity, 
            y: isMobile ? 0 : contentYOffset 
          }}
          className="hidden md:flex absolute top-0 left-auto right-0 h-full w-1/2 flex-col justify-center px-24 z-0 bg-white"
        >
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

          <div className="flex flex-col gap-4">
             <div className="flex gap-4 mb-6">
                <StatBox number="100%" label="Remote Friendly" theme={theme} isMobile={false} />
                <StatBox number="4.9" label="Rating" theme={theme} isMobile={false} />
             </div>
            
             <Link to="/careers" className="w-fit">
               <button 
                  className="group w-fit flex items-center gap-4 px-8 py-4 rounded-xl text-white font-bold text-lg shadow-xl shadow-[#28A3B9]/20 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  style={{ background: `linear-gradient(to right, ${theme.secondary}, ${theme.primary})` }}
                  >
                  View Open Positions 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
             </Link>
          </div>
        </motion.div>

        {/* --- Mobile Content (Slides up from bottom) --- */}
        <motion.div 
          style={{ 
            opacity: isMobile ? mobileContentOpacity : 0,
            y: isMobile ? mobileContentY : 0,
            display: isMobile ? 'flex' : 'none'
          }}
          className="md:hidden absolute bottom-0 left-0 right-0 h-[55vh] flex flex-col justify-end px-6 pb-8 z-20 bg-white rounded-t-3xl shadow-2xl border-t border-slate-100"
        >
          <div className="flex-1 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: theme.secondary }}>
              Career Opportunities
            </span>
            
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
              Work where your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r" 
                    style={{ backgroundImage: `linear-gradient(to right, ${theme.secondary}, ${theme.primary})` }}>
                ideas matter.
              </span>
            </h3>
            
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Athenura isn't just a company; it's a launchpad. We are looking for 
              visionaries ready to tackle the world's toughest technical challenges.
            </p>

            <div className="flex gap-4 mb-6">
              <StatBox number="100%" label="Remote Friendly" theme={theme} isMobile={true} />
              <StatBox number="4.9" label="Rating" theme={theme} isMobile={true} />
            </div>
          </div>
          
          <Link to="/careers" className="w-full">
            <button 
              className="group w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-bold text-base shadow-lg shadow-[#28A3B9]/20 active:scale-[0.98] transition-all duration-200"
              style={{ background: `linear-gradient(to right, ${theme.secondary}, ${theme.primary})` }}
            >
              View Open Positions 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

const StatBox = ({ number, label, theme, isMobile }) => (
  <div 
    className={`border-l-4 ${isMobile ? 'pl-3' : 'pl-4'}`} 
    style={{ borderColor: theme.primary }}
  >
    <div className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-slate-900`}>
      {number}
    </div>
    <div className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-semibold uppercase text-slate-400`}>
      {label}
    </div>
  </div>
);

export default CareersSection;