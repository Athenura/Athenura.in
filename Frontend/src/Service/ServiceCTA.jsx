import React from 'react';
import { ArrowRight, Mail, Phone, Calendar, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";

const AthenuraCTA = () => {
  return (
    <section className="w-full py-12 md:py-24 px-4 font-sans">
      <div className="container mx-auto">
        
        {/* Main Card Container */}
        {/* We use a deep dark teal base (#0F3D43) to make the bright gradients pop */}
<div className="relative w-full overflow-hidden bg-[#156975] shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(30,122,134,0.5)] transition-all duration-500 group transform hover:-translate-y-1">

  {/* --- CONTENT LAYER --- */}
  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 md:p-20 gap-10 md:gap-16">

    {/* Left Side: Text Content */}
    <div className="text-center lg:text-left max-w-3xl">

      <h2 className="text-3xl md:text-6xl font-black text-white leading-[1.1] mb-6 animate-fade-in-up animation-delay-200">
        Powerful digital services <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8F8FA] to-[#35B4C7] drop-shadow-sm">
          built to scale your business
        </span>
      </h2>

      <p className="text-base md:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-300">
        From strategy to execution, Athenura delivers high-impact solutions in
        web development, UI/UX design, automation, and custom software —
        engineered for growth, performance, and reliability.
      </p>

      {/* Service Highlights */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center lg:justify-start text-gray-400 font-medium text-sm md:text-base animate-fade-in-up animation-delay-400">
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-all">
          <span className="text-[#35B4C7] font-bold">•</span>
          Web & App Development
        </div>
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-all">
          <span className="text-[#35B4C7] font-bold">•</span>
          UI/UX & Brand Design
        </div>
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-all">
          <span className="text-[#35B4C7] font-bold">•</span>
          Business Automation
        </div>
      </div>
    </div>

    {/* Right Side: Action Buttons */}
    <div className="w-full lg:w-auto flex flex-col gap-4 min-w-[280px] md:min-w-[320px] animate-fade-in-up animation-delay-500">

      {/* Primary Button */}
      <Link
        to="/portfolio"
        className="relative overflow-hidden bg-white text-[#1E7A86] px-8 py-5 rounded-2xl font-bold text-lg shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-3 group/btn"
      >
        <span className="relative z-10 flex items-center gap-2">
          Explore Our Projects
          <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8F8FA] to-transparent opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300"></div>
      </Link>

      {/* Secondary Button */}
      <Link
        to="/contact"
        className="group/outline px-8 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-3"
      >
        <Calendar size={20} className="text-[#35B4C7] group-hover/outline:scale-110 transition-transform" />
        Get a Free Consultation
      </Link>
    </div>

  </div>
</div>

      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 { animation-delay: 2s; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default AthenuraCTA;