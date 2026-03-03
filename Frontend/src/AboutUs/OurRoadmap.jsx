import React from "react";

// ----------------------------------------------------------------------
// COMPONENT: Our History (with image on right)
// ----------------------------------------------------------------------
const OurHistory = () => {
  return (
    <section className="relative max-w-8xl mx-auto bg-white overflow-hidden font-sans text-slate-900">

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1E7A86 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container relative mx-auto px-6 md:px-12 max-w-8xl z-10">

        {/* Main Content Grid: Text Left | Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16">

          {/* LEFT COLUMN - History Text */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Our <span className="text-[#1E7A86]">History.</span>
            </h1>

            <div className="space-y-5 text-slate-600 text-base md:text-lg leading-relaxed text-justify">
              <p>
                At Athenura, we believe innovation begins where curiosity meets execution. Founded as a remote-first skill development platform, Athenura was created to bridge the gap between academic knowledge and real-world industry demands.              </p>

              <p>
                What started as a structured internship initiative quickly evolved into a technology-driven organization delivering AI-powered solutions, custom software development, and business automation systems for startups and growing enterprises.              </p>

              <p>
                We don’t see technology as lines of code we see it as opportunity. Opportunity for students to gain real-world exposure. Opportunity for businesses to scale with intelligent systems. Opportunity for ideas to transform into impact.              </p>

              <p>
                Today, Athenura stands at the intersection of practical AI, cloud innovation, and human-centered design building future-ready professionals and future-proof digital solutions.              </p>
            </div>

            {/* Decorative element */}
            <div className="flex items-center gap-3 pt-4">
              <div className="h-px w-12 bg-[#1E7A86]"></div>
              <span className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">Since 2026</span>
            </div>
          </div>

          {/* RIGHT COLUMN - Image */}
          <div className="relative animate-fade-in delay-200">
            {/* Main Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
              <img
                src="ATHENURA-TEAM.png"
                alt="Athenura history and foundation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 flex justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#1E7A86] to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default OurHistory;