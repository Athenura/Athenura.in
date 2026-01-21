import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ImprovedCareerHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Theme constants
  const theme = {
    primary: "#1E90A8",
    primaryDark: "#156A7A",
    textDark: "#111827",
    textGray: "#4B5563",
    bg: "#F8FBFC",
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: theme.bg }}
    >
      {/* --- Background Elements --- */}

      {/* 1. Isometric Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(${theme.textDark} 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* 2. Soft Orbs */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-10 animate-pulse"
        style={{ backgroundColor: theme.primary }}
      />

      {/* --- Main Content --- */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT COLUMN: Typography & CTA */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-gray-900">
            Build the Future <br />
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: theme.primary }}>Grow With Athenura</span>

              {/* Animated Draw Underline */}
              <svg className="absolute w-[90%] h-4 -bottom-2 -left-1 pointer-events-none" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  className={`path-draw ${isVisible ? 'active' : ''}`}
                  d="M2.00025 6.99997C25.7501 3.99991 132.5 -2.50001 198 3.99998"
                  stroke={theme.primary}
                  strokeOpacity="0.8"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg lg:text-xl mb-10 max-w-lg leading-relaxed text-gray-600">
            We design the infrastructure powering tomorrow’s digital economies working together to solve complex challenges with care and craftsmanship.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/internship">
            <button
              className="group relative px-8 py-4 rounded-xl font-bold text-white shadow-lg overflow-hidden transition-all hover:scale-[1.02]"
              style={{ backgroundColor: theme.primary }}
            >
              <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              <span className="relative flex items-center gap-2">
                Explore Roles
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </span>
            </button>
            </Link>

            {/* <button
              className="px-8 py-4 rounded-xl font-bold border-2 bg-transparent transition-all hover:bg-white hover:shadow-md"
              style={{ borderColor: `${theme.primary}20`, color: theme.textDark }}
            >
              Read Handbook
            </button> */}
          </div>

          {/* Social Proof / Stats */}
          <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
            <div>
              <p className="text-3xl font-bold" style={{ color: theme.textDark }}>4.9</p>
              <p className="text-sm font-medium text-gray-500">Glassdoor</p>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div>
              <p className="text-3xl font-bold" style={{ color: theme.textDark }}>$50M</p>
              <p className="text-sm font-medium text-gray-500">Series B</p>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div>
              <p className="text-3xl font-bold" style={{ color: theme.textDark }}>100%</p>
              <p className="text-sm font-medium text-gray-500">Remote</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The "Ecosystem" Visualization */}
        <div className={`relative h-[600px] w-full hidden lg:block perspective-1000 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>

          {/* Centerpiece: Stylized Code Editor Window */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-20 overflow-hidden animate-[float_6s_ease-in-out_infinite]"
          >
            {/* Header */}
            <div className="h-8 bg-gray-50 border-b flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            {/* "Code" Body */}
            <div className="p-6 space-y-3">
              <div className="h-2 w-1/3 rounded bg-gray-200"></div>
              <div className="h-2 w-2/3 rounded" style={{ backgroundColor: `${theme.primary}20` }}></div>
              <div className="h-2 w-3/4 rounded bg-gray-100"></div>
              <div className="h-2 w-1/2 rounded bg-gray-100"></div>

              <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-dashed border-gray-200 flex items-center justify-center">
                <span className="text-sm font-semibold" style={{ color: theme.primary }}>Join the team</span>
              </div>
            </div>
          </div>

          {/* Floating Orbit Cards */}

          {/* 1. Engineering (Top Right) */}
          <GlassCard
            theme={theme}
            title="Engineering"
            subtitle="Frontend, Backend, DevOps"
            className="absolute top-20 right-10 animate-[float_7s_ease-in-out_infinite_0.5s]"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          </GlassCard>

          {/* 2. Product (Bottom Left) */}
          <GlassCard
            theme={theme}
            title="Product"
            subtitle="PM, Product Design"
            className="absolute bottom-32 left-0 animate-[float_8s_ease-in-out_infinite_1.5s]"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </GlassCard>

          {/* 3. Data (Center Bottom) */}
          <GlassCard
            theme={theme}
            title="Data Science"
            subtitle="AI, ML, Analytics"
            className="absolute bottom-10 right-1/3 animate-[float_6s_ease-in-out_infinite_2.5s]"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </GlassCard>

          {/* Decorative Dashed Rings */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dashed border-gray-200 -z-10 animate-[spin_120s_linear_infinite]" />
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -15px); }
        }
        .path-draw {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          transition: stroke-dashoffset 2s ease-out;
        }
        .path-draw.active {
          stroke-dashoffset: 0;
        }
      `}</style>
    </section>
  );
};

// Reusable Glass Card Component
const GlassCard = ({ theme, title, subtitle, children, className }) => (
  <div
    className={`p-4 rounded-xl backdrop-blur-md border shadow-xl flex items-center gap-4 transition-transform hover:scale-105 cursor-default ${className}`}
    style={{
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      borderColor: 'white',
      minWidth: '220px'
    }}
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0"
      style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})` }}
    >
      {children}
    </div>
    <div>
      <h3 className="font-bold text-gray-900 leading-tight">{title}</h3>
      <p className="text-xs font-medium text-gray-500 mt-0.5">{subtitle}</p>
    </div>
  </div>
);

export default ImprovedCareerHero;