import React from "react";
import {Link} from "react-router-dom"

const SERVICES = [
  {
    id: 1,
    title: "AI Solutions",
    description: "Custom algorithms that automate workflows and predict future trends.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Web & App Dev",
    description: "Scalable, high-performance digital platforms built for the modern web.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Digital Products",
    description: "Ready-to-deploy SaaS tools designed to solve specific industry pain points.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Consulting",
    description: "Strategic guidance to help you navigate digital transformation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Internship Programs",
    description: "Bridging the gap between academic theory and real-world application.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const WhatWeDo = () => {
  return (
    <section className="relative w-full py-10 md:py-12 bg-slate-50 overflow-hidden font-sans text-slate-900">
      
      {/* 1. Background Elements (Consistent with Theme) */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Subtle floating glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-slate-200 to-white rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="container relative mx-auto px-6 md:px-12 z-10">
        
        {/* 2. Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="block text-[#1E7A86] text-xs font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight animate-fade-in delay-100">
              Transforming ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2093AB] to-[#1E7A86]">
                tangible impact.
              </span>
            </h2>
          </div>
          
          <div className="animate-fade-in delay-200">
             <p className="text-slate-500 max-w-sm text-sm md:text-base leading-relaxed">
               We offer a holistic suite of digital services designed to scale with your ambition.
             </p>
          </div>
        </div>

        {/* 3. Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#2093AB]/10 transition-colors pointer-events-none"></div>

              {/* Icon */}
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-[#e0f7fa] group-hover:text-[#1E7A86] transition-colors duration-300 mb-6">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1E7A86] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Arrow Hint */}
              <Link to ="/services">
              <div className="flex items-center text-xs font-bold text-slate-300 uppercase tracking-wider group-hover:text-[#2093AB] transition-colors">
                <span>Explore</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
              </Link>
            </div>
          ))}

          {/* 4. "See All" Link Card (Optional, or just a button below) */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-dashed border-slate-300 bg-transparent hover:bg-slate-50/50 transition-colors cursor-pointer group animate-fade-in-up" style={{ animationDelay: '600ms' }}>
             <p className="text-slate-500 font-medium mb-2">Need something custom?</p>
             <Link to="/services">
             <button className="px-6 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-lg hover:bg-[#1E7A86] transition-colors flex items-center gap-2">
                View All Services <span className="text-xs">→</span>
             </button>
             </Link>
          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; opacity: 0; }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
};

export default WhatWeDo;