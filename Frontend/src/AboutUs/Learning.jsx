import React from "react";

// ----------------------------------------------------------------------
// DATA: Learning Initiatives
// ----------------------------------------------------------------------
const INITIATIVES = [
  {
    id: 1,
    category: "Internship Program",
    title: "Build the Future",
    description: "Don't just watch build. Our internships immerse students in live projects, offering direct experience with production-level AI and cloud architecture.",
    tags: ["Golden Opportunities", "Real-world Projects", "Certificate"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: 2,
    category: "Workshops & Masterclasses",
    title: "Deep Dive Tech",
    description: "Intensive sessions led by our senior engineers. We break down complex topics like Large Language Models (LLMs) and Microservices into actionable skills.",
    tags: ["Weekend Bootcamps", "Hands-on Coding", "Expert Led"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 3,
    category: "Mentorship",
    title: "Guidance That Matters",
    description: "Technology is vast; navigation is hard. We pair emerging talent with industry veterans to provide career advice, code reviews, and strategic direction.",
    tags: ["1-on-1 Sessions", "Career Pathing", "Code Reviews"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    category: "Open Learning",
    title: "Knowledge for All",
    description: "We believe in the democratization of information. Access our open-source repositories, whitepapers, and technical blogs completely free.",
    tags: ["Open Source", "Whitepapers", "Community Hub"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const CommunityLearning = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-slate-50 overflow-hidden font-sans text-slate-900">
      
      {/* -----------------------------------------------------------------
          BACKGROUND ELEMENTS
      ------------------------------------------------------------------ */}
      {/* 1. Subtle Paper Texture Effect */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>

      {/* 2. Organic "Creativity" Blobs (Distinct from the sharp tech lines) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#2093AB]/20 to-purple-200/20 rounded-full blur-[80px] animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#1E7A86]/20 to-blue-200/20 rounded-full blur-[100px] animate-float-slower"></div>

      <div className="container relative mx-auto px-6 md:px-12 z-10">
        
        {/* -----------------------------------------------------------------
            HEADER
        ------------------------------------------------------------------ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#2093AB]/30 text-[#1E7A86] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              Community & Growth
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Knowledge Grows When <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2093AB] to-[#1E7A86]">
                It Is Shared.
              </span>
            </h2>
          </div>
          <div className="max-w-xs animate-fade-in-up delay-100">
            <p className="text-slate-500 font-medium leading-relaxed">
              We aren't just building software; we are building the next generation of technologists. Join our ecosystem.
            </p>
          </div>
        </div>

        {/* -----------------------------------------------------------------
            BENTO GRID LAYOUT
        ------------------------------------------------------------------ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {INITIATIVES.map((item, index) => (
            <div 
              key={item.id}
              className="group relative bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between min-h-[320px] animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              
              {/* Decorative Gradient Background (Reveals on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdff] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content Wrapper */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  {/* Icon Box */}
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#2093AB] group-hover:bg-[#2093AB] group-hover:text-white transition-all duration-300 shadow-inner group-hover:shadow-lg group-hover:rotate-3">
                    {item.icon}
                  </div>
                  
                  {/* Category Label */}
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wide group-hover:bg-white group-hover:text-[#1E7A86] transition-colors">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#1E7A86] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Bottom Section: Tags & Arrow */}
              <div className="relative z-10 border-t border-slate-100 pt-6 flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:border-[#2093AB] group-hover:bg-[#2093AB] group-hover:text-white transition-all duration-300">
                  <span className="text-xl leading-none mb-1">→</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* -----------------------------------------------------------------
            BOTTOM CTA
        ------------------------------------------------------------------ */}
        <div className="mt-20 text-center animate-fade-in-up delay-300">
            <h4 className="text-xl font-bold text-slate-900 mb-6">Ready to start your journey?</h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <button className="px-8 py-3 rounded-full bg-[#1E7A86] text-white font-semibold shadow-lg shadow-[#1E7A86]/30 hover:bg-[#165e67] hover:scale-105 transition-all duration-300">
                    Apply for Internship
                </button>
                <button className="px-8 py-3 rounded-full bg-white text-slate-600 font-semibold border border-slate-200 shadow-sm hover:bg-slate-50 hover:text-[#1E7A86] transition-all duration-300">
                    Browse Free Resources
                </button>
            </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(30px) scale(0.95); }
        }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 15s ease-in-out infinite reverse; }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
};

export default CommunityLearning;