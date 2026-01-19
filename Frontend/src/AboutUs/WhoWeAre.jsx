import React, { useState } from "react";

// ----------------------------------------------------------------------
// DATA: Enhanced Pillars with Deep Detail
// ----------------------------------------------------------------------
const PILLARS = [
    {
        id: 1,
        title: "Artificial Intelligence",
        subtitle: "The Engine",
        shortDescription:
            "AI is the core force that transforms raw data into intelligent action.",
        challenge:
            "Businesses are flooded with unstructured data, manual processes, and slow decision-making.",
        solution:
            "We embed AI directly into your workflows—automating decisions, predicting outcomes, and unlocking insights that humans alone can't scale.",
        stat: "99.9% Model Accuracy",
        outcome:
            "Smarter systems that learn, adapt, and evolve with your business.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Digital Innovation",
        subtitle: "The Method",
        shortDescription:
            "Modern problems need modern architectures and forward-thinking solutions.",
        challenge:
            "Legacy systems, rigid infrastructures, and outdated processes slow growth and innovation.",
        solution:
            "We reimagine your digital foundation with scalable, cloud-native, and API-driven ecosystems built for speed and resilience.",
        stat: "2× Faster Scalability",
        outcome:
            "A flexible digital backbone that grows as fast as your ambitions.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
            </svg>
        ),
    },
    {
        id: 3,
        title: "Human-Centric Design",
        subtitle: "The Purpose",
        shortDescription:
            "Technology succeeds only when people love using it.",
        challenge:
            "Many digital products are powerful but confusing, leading to poor adoption and low engagement.",
        solution:
            "We design intuitive, accessible, and emotionally resonant experiences that align technology with human behavior.",
        stat: "User-First Approach",
        outcome:
            "Digital experiences that feel natural, intuitive, and genuinely helpful.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        ),
    },
];

// ----------------------------------------------------------------------
// COMPONENT: 3D Network Globe Animation
// ----------------------------------------------------------------------
const TechGlobe = () => {
    return (
        <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[450px] md:h-[450px] flex items-center justify-center perspective-[1000px] mx-auto">

            {/* Central Glowing Core */}
            <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#2093AB] to-[#1E7A86] rounded-full blur-md opacity-20 animate-pulse"></div>
            <div className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full shadow-[0_0_20px_#2093AB] md:shadow-[0_0_30px_#2093AB] flex items-center justify-center z-20">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-[#1E7A86] rounded-full animate-ping"></div>
            </div>

            {/* Rotating Rings (Orbits) */}
            <div className="absolute inset-0 border-[1px] border-slate-200 rounded-full animate-[spin_20s_linear_infinite] opacity-40"></div>
            <div className="absolute inset-[15%] border-[1px] border-dashed border-[#2093AB] rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-30"></div>
            <div className="absolute inset-[30%] border-[2px] border-transparent border-t-[#1E7A86] border-b-[#1E7A86] rounded-full animate-[spin_8s_linear_infinite] opacity-60"></div>

            {/* Floating "Satellites" */}
            <div className="absolute w-full h-full animate-[spin_25s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-5 h-5 sm:w-6 sm:h-6 bg-white border-2 border-[#2093AB] rounded-lg shadow-lg flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 md:w-1.5 md:h-1.5 bg-[#1E7A86] rounded-full"></div>
                </div>
            </div>

            <div className="absolute w-[80%] h-[80%] animate-[spin_18s_linear_infinite_reverse]">
                <div className="absolute bottom-0 right-1/4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-[7px] sm:text-[8px] font-bold text-[#1E7A86]">AI</span>
                </div>
            </div>

            {/* Code Snippet Floating Card - Hidden on small mobile, shown on sm and up */}
            <div className="hidden sm:block absolute -right-2 top-12 sm:-right-4 sm:top-20 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg border-l-4 shadow-xl animate-float-delayed z-30" style={{ borderLeftColor: '#2093AB' }}>
                <div className="flex flex-col gap-1">
                    <div className="h-1.5 w-12 sm:w-16 bg-slate-200 rounded-full"></div>
                    <div className="h-1.5 w-8 sm:w-10 bg-[#2093AB]/40 rounded-full"></div>
                    <div className="h-1.5 w-16 sm:w-24 bg-slate-100 rounded-full"></div>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-delayed { animation: float 5s ease-in-out infinite 1s; }
      `}</style>
        </div>
    );
};

// ----------------------------------------------------------------------
// MAIN SECTION
// ----------------------------------------------------------------------
const WhoWeAreDetailed = () => {
    const [hoveredPillar, setHoveredPillar] = useState(1);
    const [touchedPillar, setTouchedPillar] = useState(null);

    const handlePillarClick = (id) => {
        if (touchedPillar === id) {
            setTouchedPillar(null);
        } else {
            setTouchedPillar(id);
        }
        setHoveredPillar(id);
    };

    const isActiveOnMobile = (id) => {
        return hoveredPillar === id || touchedPillar === id;
    };

    return (
        <section className="relative w-full py-8 sm:py-12 md:py-24 bg-white overflow-hidden font-sans text-slate-900">

            {/* 1. Background: Technical Grid & Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[600px] bg-[#2093AB] rounded-full mix-blend-multiply filter blur-[60px] sm:blur-[80px] md:blur-[120px] opacity-[0.05]"></div>
                <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[600px] bg-[#1E7A86] rounded-full mix-blend-multiply filter blur-[60px] sm:blur-[80px] md:blur-[120px] opacity-[0.05]"></div>
                {/* Subtle Grid - Smaller pattern on mobile */}
                <div className="absolute inset-0 opacity-[0.2] sm:opacity-[0.4]" style={{
                    backgroundImage: 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            <div className="container relative mx-auto px-4 sm:px-6 md:px-12 z-10">

                {/* 2. Top Section: Narrative vs Visual */}
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 mb-8 sm:mb-12 md:mb-20">

                    {/* Left: The "Story" */}
                    <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-6 sm:w-8 bg-[#1E7A86]"></span>
                            <span className="text-[#1E7A86] font-bold tracking-widest uppercase text-lg">Who We Are</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-snug sm:leading-tight text-slate-900">
                            The Architects of{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2093AB] to-[#1E7A86] block">
                                Digital Evolution.
                            </span>
                        </h2>

                        <div className="p-4 sm:p-5 md:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#2093AB] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed relative z-10">
                                <span className="font-bold text-[#1E7A86]">Athenura</span> is a technology-driven organization focused on building intelligent, scalable, and future-ready digital solutions.
                            </p>
                        </div>

                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                            We exist to solve the disconnect between raw data potential and actual business value. In a world drowning in information, we provide the life-raft of clarity.
                        </p>

                        {/* Tag Cloud - Smaller on mobile */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {['Machine Learning', 'Cloud Architecture', 'UX Strategy', 'Big Data'].map((tag) => (
                                <span key={tag} className="px-2 sm:px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-500 shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Visual Core */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-4 sm:mt-0">
                        <TechGlobe />
                    </div>
                </div>

                {/* 3. Bottom Section: Responsive Expandable Pillars */}
                <div className="flex flex-col mb-5 lg:flex-row gap-3 sm:gap-4">
                    {PILLARS.map((pillar) => {
                        const isActive = isActiveOnMobile(pillar.id);

                        return (
                            <div
                                key={pillar.id}
                                onMouseEnter={() => setHoveredPillar(pillar.id)}
                                onClick={() => handlePillarClick(pillar.id)}
                                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer flex flex-col
                  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                  /* Mobile: Stack vertically, expand height */
                  ${isActive
                                        ? 'bg-[#1E7A86] shadow-lg sm:shadow-2xl'
                                        : 'bg-white border border-slate-200 hover:bg-slate-50'}
                  /* Desktop: Flex grow horizontally */
                  lg:${isActive ? 'flex-[3]' : 'flex-[1]'}
                `}
                            >
                                {/* Decorative Background (Active Only) */}
                                {isActive && (
                                    <>
                                        <div className="absolute -top-20 -right-20 w-48 sm:w-72 h-48 sm:h-72 bg-[#2093AB] rounded-full blur-[60px] sm:blur-[90px] opacity-50 pointer-events-none" />
                                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                                    </>
                                )}

                                <div className="p-4 sm:p-6 md:p-8 flex flex-col h-full relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                                        <div
                                            className={`p-2 sm:p-3 rounded-lg sm:rounded-xl transition-colors duration-300
                        ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#1E7A86]'}
                      `}
                                        >
                                            {pillar.icon}
                                        </div>

                                        {isActive && (
                                            <span className="text-white/60 font-mono text-xs tracking-wide hidden sm:inline-block">
                                                {pillar.stat}
                                            </span>
                                        )}
                                    </div>

                                    {/* Titles */}
                                    <h3
                                        className={`text-lg sm:text-xl md:text-2xl font-bold mb-1 transition-colors
                      ${isActive ? 'text-white' : 'text-slate-900'}
                    `}
                                    >
                                        {pillar.title}
                                    </h3>

                                    <p
                                        className={`text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4
                      ${isActive ? 'text-[#7fd6e4]' : 'text-slate-400'}
                    `}
                                    >
                                        {pillar.subtitle}
                                    </p>

                                    {/* Short Description */}
                                    <p
                                        className={`text-sm leading-relaxed transition-colors mb-3 sm:mb-4
                      ${isActive ? 'text-white/90' : 'text-slate-600'}
                    `}
                                    >
                                        {pillar.shortDescription || pillar.challenge}
                                    </p>

                                    {/* Expanded Content */}
                                    <div
                                        className={`space-y-3 sm:space-y-4 transition-all duration-500 overflow-hidden
                      ${isActive
                                                ? 'opacity-100 max-h-[500px] translate-y-0 mt-3 sm:mt-4'
                                                : 'opacity-0 max-h-0 lg:max-h-full lg:translate-y-3 lg:pointer-events-none'}
                    `}
                                    >
                                        {/* Challenge */}
                                        <div className="bg-black/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm border border-white/10">
                                            <span className="block text-[10px] uppercase text-white/50 mb-1">
                                                The Challenge
                                            </span>
                                            <p className="text-white/90 text-sm leading-snug">
                                                {pillar.challenge}
                                            </p>
                                        </div>

                                        {/* Solution */}
                                        <div className="pl-3 sm:pl-4 border-l-2 border-[#7fd6e4]">
                                            <span className="block text-[10px] uppercase text-[#7fd6e4] mb-1">
                                                Our Solution
                                            </span>
                                            <p className="text-white text-sm leading-snug">
                                                {pillar.solution}
                                            </p>
                                        </div>

                                        {pillar.outcome && (
                                            <p className="text-white/80 text-sm italic pt-2">
                                                {pillar.outcome}
                                            </p>
                                        )}
                                    </div>

                                    {/* Mobile Touch Hint - Only show on mobile when collapsed */}
                                    {!isActive && (
                                        <div className="mt-auto pt-3 sm:pt-4 text-slate-400 text-xs sm:text-sm flex items-center gap-2 lg:hidden">
                                            <span className="text-xs font-bold uppercase tracking-wider">Tap to View</span> <span className="text-lg">→</span>
                                        </div>
                                    )}

                                    {/* Mobile Stat (shown when active on mobile) */}
                                    {isActive && (
                                        <div className="mt-3 pt-3 border-t border-white/20 text-white/60 font-mono text-xs tracking-wide sm:hidden">
                                            {pillar.stat}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

            {/* 4. Bottom Scroller: Technical "busy-ness" - Optimized for mobile */}
            <div className="mt-10 sm:mt-0 absolute bottom-0 w-full border border-[#1E7A86] bg-slate-50/50 py-2 sm:py-3 overflow-hidden">
                <div className="flex gap-6 sm:gap-12 animate-scroll whitespace-nowrap">
                    {[...Array(3)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="text-[10px] sm:text-xs font-mono text-slate-800 flex items-center gap-1 sm:gap-2">
                                <span className="w-1.5 h-1.5 bg-[#2093AB] rounded-full"></span> SYSTEM ARCH
                            </span>
                            <span className="text-[10px] sm:text-xs font-mono text-slate-800 flex items-center gap-1 sm:gap-2">
                                <span className="w-1.5 h-1.5 bg-[#1E7A86] rounded-full"></span> AI MODELING
                            </span>
                            <span className="text-[10px] sm:text-xs font-mono text-slate-800 flex items-center gap-1 sm:gap-2">
                                <span className="w-1.5 h-1.5 bg-[#2093AB] rounded-full"></span> SYSTEM ARCH
                            </span>
                            <span className="text-[10px] sm:text-xs font-mono text-slate-800 flex items-center gap-1 sm:gap-2">
                                <span className="w-1.5 h-1.5 bg-[#1E7A86] rounded-full"></span> AI MODELING
                            </span>
                            <span className="text-[10px] sm:text-xs font-mono text-slate-800 flex items-center gap-1 sm:gap-2">
                                <span className="w-1.5 h-1.5 bg-[#1E7A86] rounded-full"></span> UX DESIGN
                            </span>
                            <span className="text-[10px] sm:text-xs font-mono text-slate-800 flex items-center gap-1 sm:gap-2">
                                <span className="w-1.5 h-1.5 bg-[#1E7A86] rounded-full"></span> CLOUD
                            </span>
                            <span className="text-[10px] sm:text-xs font-mono text-slate-800 flex items-center gap-1 sm:gap-2">
                                <span className="w-1.5 h-1.5 bg-[#1E7A86] rounded-full"></span> UX DESIGN
                            </span>
                            <span className="text-[10px] sm:text-xs font-mono text-slate-800 flex items-center gap-1 sm:gap-2">
                                <span className="w-1.5 h-1.5 bg-[#1E7A86] rounded-full"></span> CLOUD
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { 
          animation: scroll 30s linear infinite;
          will-change: transform;
        }
        
        /* Improve mobile touch experience */
        @media (max-width: 640px) {
          .animate-scroll { 
            animation: scroll 20s linear infinite;
          }
        }
      `}</style>
        </section>
    );
};

export default WhoWeAreDetailed;