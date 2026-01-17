import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Code2 } from 'lucide-react';

const HeroSection = () => {
  // Theme Colors
  const theme = {
    primary: '#28A3B9',
    secondary: '#1E7A86',
    white: '#ffffff',
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const floatingVariant = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white flex items-center pt-20 pb-10 lg:py-0 font-sans">
      
      {/* --- Background Decorative Blobs (Adjusted size for mobile) --- */}
      <div 
        className="absolute top-[-5%] right-[-10%] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rounded-full blur-[80px] lg:blur-[100px] opacity-20 pointer-events-none"
        style={{ backgroundColor: theme.primary }}
      />
      <div 
        className="absolute bottom-[-5%] left-[-10%] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full blur-[80px] lg:blur-[120px] opacity-15 pointer-events-none"
        style={{ backgroundColor: theme.secondary }}
      />

      {/* Main Container: Flex on Mobile (No Gap), Grid on Desktop */}
      <div className="container mx-auto px-4 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
        
        {/* --- Left Side: Text Content --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left flex flex-col justify-center order-1"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3 lg:mb-4">
            <span className="px-3 py-1 text-[10px] lg:text-xs font-bold tracking-wider uppercase rounded-full bg-opacity-10" 
                  style={{ backgroundColor: `${theme.primary}20`, color: theme.secondary }}>
              Athenura Projects
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-4 lg:mb-6">
            Turning Ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r" 
                  style={{ backgroundImage: `linear-gradient(to right, ${theme.secondary}, ${theme.primary})` }}>
              Digital Reality
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base lg:text-lg text-slate-600 mb-6 lg:mb-8 max-w-lg leading-relaxed">
            I craft high-performance web applications with stunning visual design. 
            Specializing in modern tech stacks to build scalable solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 lg:gap-4 mb-8 lg:mb-0">
            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-lg text-white text-sm lg:text-base font-semibold shadow-lg shadow-[#28A3B9]/30 transition-all"
              style={{ background: `linear-gradient(to right, ${theme.secondary}, ${theme.primary})` }}
            >
              View Projects <ArrowRight size={18} />
            </motion.button>
            
          </motion.div>

          {/* Trusted By Section - Hidden on very small mobile to save space, or kept if needed */}
          <motion.div variants={itemVariants} className="mt-8 lg:mt-12 flex items-center gap-4 text-slate-400">
            <div className="flex -space-x-3">
               {[1,2,3].map((i) => (
                 <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold"
                      style={{ color: theme.secondary }}>
                    A
                 </div>
               ))}
            </div>
            <p className="text-xs lg:text-sm font-medium">Trusted by <span style={{ color: theme.secondary }}>10+ Clients</span></p>
          </motion.div>
        </motion.div>

        {/* --- Right Side: Visual Animation --- */}
        {/* Mobile: Order 2. Scaled down. No huge margins. */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative h-[350px] lg:h-[600px] w-full flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
        >
          {/* Main Floating Card - Scaled for Mobile */}
          <motion.div
            variants={floatingVariant}
            animate="animate"
            className="relative w-[280px] h-[350px] lg:w-[400px] lg:h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-20"
          >
            {/* Browser Header Mockup */}
            <div className="h-6 lg:h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
              <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-400"></div>
            </div>
            
            {/* Abstract UI Content */}
            <div className="p-4 lg:p-6 space-y-3 lg:space-y-4">
                <div className="h-24 lg:h-32 rounded-xl w-full opacity-20" style={{ backgroundColor: theme.primary }}></div>
                <div className="flex gap-3 lg:gap-4">
                    <div className="h-16 lg:h-20 w-1/2 rounded-lg bg-slate-100"></div>
                    <div className="h-16 lg:h-20 w-1/2 rounded-lg bg-slate-100"></div>
                </div>
                <div className="space-y-2 pt-2 lg:pt-4">
                    <div className="h-2 lg:h-3 w-3/4 bg-slate-100 rounded"></div>
                    <div className="h-2 lg:h-3 w-1/2 bg-slate-100 rounded"></div>
                    <div className="h-2 lg:h-3 w-full bg-slate-100 rounded"></div>
                </div>
                {/* Floating Action Button inside card */}
                <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 p-3 lg:p-4 rounded-full text-white shadow-lg"
                     style={{ backgroundColor: theme.primary }}>
                    <Code2 size={20} className="lg:w-6 lg:h-6" />
                </div>
            </div>
          </motion.div>

          {/* Background shapes - adjusted for mobile positioning */}
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 lg:top-20 lg:right-10 w-24 h-24 lg:w-40 lg:h-40 rounded-xl z-10 opacity-80 backdrop-blur-sm"
            style={{ background: `linear-gradient(135deg, ${theme.secondary}, transparent)` }}
          />
          
          <motion.div 
            animate={{ y: [0, -40, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-4 lg:bottom-20 lg:left-0 w-32 h-32 lg:w-48 lg:h-48 rounded-full z-10 opacity-60 backdrop-blur-md"
            style={{ border: `2px solid ${theme.primary}` }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;