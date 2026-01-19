import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Zap, Menu, X, Terminal, Bug } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Theme Color Constant
  const THEME_COLOR = '#53B5C7';

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden relative">
      
      {/* --- Background Decorative Blobs --- */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#53B5C7]/5 -skew-x-12 transform origin-top-right -z-10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#53B5C7]/10 rounded-full blur-3xl -z-10" />

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 z-40 border-t border-gray-100"
        >
          <a href="#" className="text-gray-600 font-medium">Services</a>
          <a href="#" className="text-gray-600 font-medium">Process</a>
          <button className="px-6 py-3 rounded-lg text-white font-semibold w-full" style={{ backgroundColor: THEME_COLOR }}>
            Get a Quote
          </button>
        </motion.div>
      )}

      {/* --- Hero Content --- */}
      <main className="max-w-7xl mx-auto px-6  pb-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#53B5C7]/10 text-[#53B5C7] font-semibold text-sm">
            <Zap size={16} fill="#53B5C7" />
            <span>AI-Powered Automated Testing</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1]">
            Ship Code <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${THEME_COLOR}, #2c7a8a)` }}>
              Without Bugs.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed">
            We ensure your software is bulletproof. From manual testing to automated CI/CD pipelines, we catch the bugs before your users do.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-full text-gray-700 font-bold text-lg border-2 border-gray-100 hover:border-[#53B5C7] hover:text-[#53B5C7] transition-all bg-white">
              View Our Process
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} color={THEME_COLOR} /> 99.9% Bug Coverage
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} color={THEME_COLOR} /> 24/7 Monitoring
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Animated Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] flex items-center justify-center"
        >
          {/* Main Card */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-full max-w-md"
          >
            {/* Mock Header */}
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-auto text-xs text-gray-400 font-mono">test_runner.js</div>
            </div>

            {/* Mock Code Lines */}
            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-3 items-center text-gray-400">
                <span>1</span> <span className="text-purple-600">describe</span>('<span className="text-green-600">User Login</span>', () => {'{'}
              </div>
              <div className="flex gap-3 items-center text-gray-400 pl-4">
                <span>2</span> <span className="text-purple-600">it</span>('<span className="text-green-600">should authenticate valid user</span>', () => {'{'}
              </div>
              
              {/* Success Badge */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="pl-8 py-2 bg-green-50 rounded text-green-700 flex items-center gap-2 overflow-hidden whitespace-nowrap"
              >
                <CheckCircle size={14} /> Test Passed (124ms)
              </motion.div>

              {/* Error Badge (Scanning Animation) */}
              <div className="pl-8 py-2 bg-red-50 rounded text-red-600 flex items-center justify-between border-l-4 border-red-500">
                 <div className="flex items-center gap-2">
                   <Bug size={14} /> <span>Critical Bug Found</span>
                 </div>
                 <span className="text-xs bg-red-200 px-2 py-0.5 rounded text-red-800">Fixed</span>
              </div>

              <div className="flex gap-3 items-center text-gray-400">
                <span>5</span> {'});'}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-2 text-gray-800 font-bold">
                 <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{background: THEME_COLOR}}>
                    100
                 </div>
                 Quality Score
              </div>
            </motion.div>

             <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-gray-900 text-white p-4 rounded-xl shadow-2xl"
            >
              <div className="flex items-center gap-3">
                 <Terminal size={20} className="text-[#53B5C7]" />
                 <div className="text-xs font-mono">
                    <p>$ npm run test</p>
                    <p className="text-green-400">Done in 2.45s.</p>
                 </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Background shapes for the image area */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#53B5C7]/10 rounded-full blur-3xl -z-10 animate-pulse" />
        </motion.div>

      </main>
    </div>
  );
};

export default Hero;