import React from "react";

const OurMissionLight = () => {
    return (
        <section className="relative w-full py-20 md:py-32 bg-slate-50 overflow-hidden font-sans text-slate-900">

            {/* -----------------------------------------------------------------
          BACKGROUND ELEMENTS
      ------------------------------------------------------------------ */}
            {/* 1. Technical Grid (Light Mode) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            {/* 2. Ambient "Watercolour" Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2093AB] rounded-full mix-blend-multiply filter blur-[90px] opacity-10 animate-blob"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#1E7A86] rounded-full mix-blend-multiply filter blur-[90px] opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[90px] opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container relative mx-auto px-6 md:px-12 z-10 flex flex-col items-center text-center">

                {/* -----------------------------------------------------------------
            LABEL
{/* ------------------------------------------------------------------
    SECTION LABEL
------------------------------------------------------------------ */}
<div className="mb-18 animate-fade-in-up text-center">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
    <span className="text-slate-900">Our</span>{" "}
    <span className="text-[#2093AB]">Mission</span>
  </h1>

  {/* Decorative SVG Line */}
  <div className="mt-4 flex justify-center">
    <svg
      width="120"
      height="6"
      viewBox="0 0 120 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-90"
    >
      <line
        x1="2"
        y1="3"
        x2="118"
        y2="3"
        stroke="#2093AB"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  </div>
</div>


                {/* ------------------------------------------------------------------
    CORE MISSION STATEMENT
------------------------------------------------------------------ */}
<h2 className="max-w-5xl mx-auto text-left md:text-center
  text-4xl sm:text-5xl md:text-6xl lg:text-7xl
  font-black leading-[1.08] tracking-tight
  mb-12 animate-fade-in-up delay-100 text-slate-900">

  To bridge the gap between{" "}
  <span className="relative inline-block mx-1">
    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">
      complex data
    </span>
    {/* Subtle underline decoration */}
    <span className="absolute bottom-1.5 left-0 w-full h-3 bg-slate-200/50 -z-0 rounded-md"></span>
  </span>
  {" "}and{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2093AB] to-[#1E7A86]">
    human intuition
  </span>.
</h2>



                {/* -----------------------------------------------------------------
            PARAGRAPH (Context)
        ------------------------------------------------------------------ */}
<div className="max-w-2xl mx-auto mb-16 animate-fade-in-up delay-200 relative text-left md:text-center">
  {/* Quote decoration */}
  <span className="absolute -top-6 -left-4 md:-left-6 text-6xl text-[#2093AB]/10 font-serif">
    “
  </span>

  <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
    We believe technology shouldn't just be smart, it should be useful.
    Our mission is to empower individuals and businesses through{" "}
    <span className="text-[#1E7A86] font-semibold">practical AI</span>,
    continuous innovation, and design that puts people first.
  </p>
</div>


                {/* -----------------------------------------------------------------
            IMPACT PILLARS (Cards)
        ------------------------------------------------------------------ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl animate-fade-in-up delay-300">

                    {/* Card 1: Empowerment */}
                    <div className="group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(32,147,171,0.15)] hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2093AB]/10 to-transparent rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded-2xl bg-[#eefcfd] flex items-center justify-center text-[#2093AB] group-hover:rotate-6 transition-transform">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Empowerment</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Removing the barriers of technical complexity so that anyone—regardless of expertise—can leverage the power of advanced intelligence.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Clarity */}
                    <div className="group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(30,122,134,0.15)] hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1E7A86]/10 to-transparent rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded-2xl bg-[#edf7f8] flex items-center justify-center text-[#1E7A86] group-hover:rotate-6 transition-transform">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Clarity</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Turning noise into signal. We don't just provide raw data; we provide the actionable insights needed to decide with confidence.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Sustainability */}
                    <div className="group relative p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-6 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 group-hover:rotate-6 transition-transform">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Sustainability</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Building resilient systems that stand the test of time. We prioritize long-term architectural health over short-term quick fixes.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

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