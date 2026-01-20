import React from "react";

// ----------------------------------------------------------------------
// DATA: Launch Roadmap (2026 Focus)
// ----------------------------------------------------------------------
const ROADMAP = [
  {
    year: "2026 Q1",
    title: "The Inception",
    description:
      "Athenura is born. We assemble a core team of elite engineers, researchers, and designers to build the foundation of our AI-driven ecosystem.",
    status: "completed",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },

  {
    year: "2026 Q2",
    title: "MVP & Beta Launch",
    description:
      "Launching our MVP to early partners. Focused on real-world use cases, fast iteration, user feedback, and fine-tuning our AI models.",
    status: "current",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },

  {
    year: "2026 Q3",
    title: "Internship & Talent Program",
    description:
      "Launching the Athenura Internship Program to mentor students and early professionals in AI, full-stack development, design systems, and real-world problem solving.",
    status: "upcoming",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zM12 14v7M4 9v6a2 2 0 002 2h12a2 2 0 002-2V9" />
      </svg>
    ),
  },

  {
    year: "2026 Q4",
    title: "Market Expansion",
    description:
      "Full commercial rollout. Scaling operations, onboarding enterprise clients, and delivering production-ready AI and software solutions.",
    status: "upcoming",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },

  {
    year: "2027",
    title: "Platform & AI Ecosystem",
    description:
      "Introducing reusable AI components, internal APIs, analytics dashboards, and automation tools designed to power startups and enterprises alike.",
    status: "future",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },

  {
    year: "2028+",
    title: "The Next Horizon",
    description:
      "Establishing Athenura as a global leader in ethical AI, sustainable software architecture, autonomous agents, and cross-border consulting.",
    status: "vision",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];


const OurRoadmap = () => {
  return (
    <section className="relative w-full py-10 md:py-15 bg-slate-50 overflow-hidden font-sans text-slate-900">
      
      {/* 1. Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#2093AB]/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container relative mx-auto px-6 md:px-12 z-10">
        
        {/* 2. Header */}
        <div className="text-center mb-16 md:mb-24 animate-fade-in-up">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
             The Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2093AB] to-[#1E7A86]">Begins Now.</span>
           </h2>
           <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
             We are a new force in digital innovation. Here is our roadmap for the immediate future and beyond.
           </p>
        </div>

        {/* 3. Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Vertical Line */}
          {/* Desktop: Center. Mobile: Left aligned */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-slate-200 md:-translate-x-1/2"></div>
          
          {/* Progress Line (Visual effect indicating start) */}
          <div className="absolute top-0 h-32 left-8 md:left-1/2 w-px bg-gradient-to-b from-[#2093AB] to-transparent md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-20">
            {ROADMAP.map((item, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = item.status === "current";
              const isFuture = item.status === "future";

              return (
                <div 
                  key={index} 
                  className="relative flex items-center md:justify-between group animate-on-scroll"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  
                  {/* LEFT SIDE (Desktop: Text for Evens, Empty for Odds) */}
                  <div className={`hidden md:block md:w-5/12 ${isEven ? 'text-right pr-12' : 'invisible'}`}>
                     <div className={`p-6 rounded-2xl border transition-all duration-300 relative
                        ${isCurrent 
                            ? 'bg-white shadow-xl border-[#2093AB]/40 scale-105' 
                            : 'bg-white/50 border-slate-100 hover:shadow-lg'
                        }
                     `}>
                        <span className={`block text-xs font-bold uppercase tracking-wider mb-1 ${isCurrent ? 'text-[#2093AB]' : 'text-slate-400'}`}>
                           {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-500 text-sm">{item.description}</p>
                        
                        {/* Connecting Line to Center */}
                        <div className="absolute top-1/2 -right-12 w-12 h-px bg-slate-200"></div>
                     </div>
                  </div>

                  {/* CENTER NODE / ICON */}
                  <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 z-20 shadow-md transition-transform duration-500
                      ${isCurrent 
                        ? 'bg-[#2093AB] border-white scale-125 shadow-[#2093AB]/30' 
                        : isFuture ? 'bg-slate-800 border-slate-100' : 'bg-[#1E7A86] border-slate-50'
                      }
                  `}>
                     {/* Pulse Effect for Current Status */}
                     {isCurrent && (
                        <span className="absolute w-full h-full rounded-full bg-[#2093AB] animate-ping opacity-75"></span>
                     )}
                     <div className="relative z-10 w-5 h-5 text-white">
                        {item.icon}
                     </div>
                  </div>

                  {/* RIGHT SIDE (Desktop: Text for Odds, Empty for Evens) */}
                  <div className={`hidden md:block md:w-5/12 ${!isEven ? 'text-left pl-12' : 'invisible'}`}>
                      <div className={`p-6 rounded-2xl border transition-all duration-300 relative
                        ${isCurrent 
                            ? 'bg-white shadow-xl border-[#2093AB]/40 scale-105' 
                            : 'bg-white/50 border-slate-100 hover:shadow-lg'
                        }
                     `}>
                        <span className={`block text-xs font-bold uppercase tracking-wider mb-1 ${isCurrent ? 'text-[#2093AB]' : 'text-slate-400'}`}>
                           {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-500 text-sm">{item.description}</p>
                        
                        {/* Connecting Line to Center */}
                        <div className="absolute top-1/2 -left-12 w-12 h-px bg-slate-200"></div>
                     </div>
                  </div>

                  {/* MOBILE CONTENT (Always Visible on Mobile) */}
                  <div className="md:hidden w-full pl-20 pr-4">
                     <div className={`p-6 rounded-2xl border transition-all duration-300 relative
                        ${isCurrent ? 'bg-white shadow-lg border-[#2093AB]/30' : 'bg-white border-slate-100'}
                     `}>
                        <span className="text-xs font-bold text-[#2093AB] mb-1 block">{item.year}</span>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                     </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Fade to Future */}
          <div className="absolute -bottom-10 left-8 md:left-1/2 w-px h-24 border-l-2 border-dashed border-slate-300 transform md:-translate-x-1/2 opacity-50"></div>
          
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-on-scroll {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default OurRoadmap;