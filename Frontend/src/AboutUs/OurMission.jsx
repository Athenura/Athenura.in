import React from "react";

const OurMissionLight = () => {
  return (
    <section className="relative w-full py-10 md:py-16 bg-slate-50 overflow-hidden font-sans text-slate-900">

      {/* --- BACKGROUND ELEMENTS (Light Mode) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Ambient blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2093AB] rounded-full mix-blend-multiply filter blur-[90px] opacity-10 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#1E7A86] rounded-full mix-blend-multiply filter blur-[90px] opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[90px] opacity-20 animate-blob animation-delay-4000"></div>

      {/* Main container: now flex row on large screens */}
      <div className="container relative mx-auto px-6 md:px-12 z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* --- LEFT CONTENT (text & pillars) --- */}
        <div className="flex-1 text-left">

          {/* Section Label */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight">
              <span className="text-slate-900">Our</span>{" "}
              <span className="text-[#2093AB]">Mission</span>
            </h1>
            <div className="mt-3">
              <svg width="100" height="6" viewBox="0 0 100 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                <line x1="2" y1="3" x2="98" y2="3" stroke="#2093AB" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* BIG HEADLINE (updated with the provided content) */}
          <h2 className="max-w-3xl text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-8 animate-fade-in-up delay-100 text-slate-900">
            To bridge the gap between{" "}
            <span className="relative inline-block mx-1">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">
                industry demands
              </span>
              <span className="absolute bottom-1.5 left-0 w-full h-3 bg-slate-200/50 -z-0 rounded-md"></span>
            </span>
            {" "}and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2093AB] to-[#1E7A86]">
              real-world skills
            </span>
            .
          </h2>

          {/* PARAGRAPH (updated with the provided text) */}
          <div className="max-w-xl mb-12 animate-fade-in-up delay-200 relative">
            <span className="absolute -top-6 -left-4 text-6xl text-[#2093AB]/10 font-serif">
              “
            </span>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium text-justify">
              At Athenura, our mission is to empower individuals and businesses with practical AI, digital transformation strategies, and industry-focused skill development.

              By combining mentorship, live projects, and scalable cloud-based architectures, we enable students to become career-ready professionals and help businesses implement intelligent, automated systems that accelerate growth.

              For us, innovation is not just technology it is clarity, execution, and measurable impact.
            </p>
          </div>

          {/* IMPACT PILLARS (Cards) - 3 cards as before, slightly adjusted copy for consistency */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full animate-fade-in-up delay-300">

            {/* Card 1: Empowerment */}
            <div className="group relative p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(32,147,171,0.15)] hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#2093AB]/10 to-transparent rounded-bl-[80px] -mr-6 -mt-6 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 mb-4 rounded-xl bg-[#eefcfd] flex items-center justify-center text-[#2093AB] group-hover:rotate-6 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Empowerment</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Removing complexity so anyone can leverage AI for real impact.
                </p>
              </div>
            </div>

            {/* Card 2: Clarity */}
            <div className="group relative p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(30,122,134,0.15)] hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1E7A86]/10 to-transparent rounded-bl-[80px] -mr-6 -mt-6 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 mb-4 rounded-xl bg-[#edf7f8] flex items-center justify-center text-[#1E7A86] group-hover:rotate-6 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Clarity</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Turning data into actionable insights for confident decisions.
                </p>
              </div>
            </div>

            {/* Card 3: Sustainability */}
            <div className="group relative p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-[80px] -mr-6 -mt-6 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 mb-4 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500 group-hover:rotate-6 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Sustainability</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Building resilient systems for long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: INFORMATIVE IMAGE --- */}
        <div className="flex-1 w-full flex justify-center items-center animate-fade-in-up delay-150">
          <div className="relative max-w-md lg:max-w-full">
            {/* Decorative gradient behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2093AB]/20 via-transparent to-[#1E7A86]/20 rounded-3xl filter blur-2xl opacity-60 transform rotate-3 scale-105"></div>

            {/* Main image card */}
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/40 overflow-hidden p-2">
              {/* Abstract representation: you can replace src with your actual image */}
              <img
                src="https://images.presentationgo.com/2025/04/team-collaboration-modern-office.jpg"
                alt="AI-powered solutions and practical learning visualization"
                className="w-full h-auto rounded-2xl object-cover"
              />

              {/* Floating mini-card overlay to add informational touch */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-3 border border-slate-200/60 flex items-center gap-3">
                <div className="bg-[#2093AB] rounded-lg p-2 text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">Live projects · AI-driven</p>
                  <p className="text-[10px] text-slate-500">Remote internships & digital innovation</p>
                </div>
              </div>
            </div>

            {/* Optional small stat badge to make it more informative */}
            <div className="absolute -top-4 -right-4 bg-purple-100 rounded-full shadow-md border border-purple-200 px-4 py-2 text-sm font-semibold text-purple-800 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>500+ learners</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- KEYFRAMES (same as original, with fade-in) --- */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0; 
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
};

export default OurMissionLight;