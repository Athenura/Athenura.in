import React, { useState, useEffect } from "react";

const ContactTrust = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Theme Constants - Professional & Trustworthy
  const theme = {
    primary: "#1E7A86",       // Deep Teal - stable, reliable
    primaryLight: "#E6F3F5",  // Light Teal Background
    primaryDark: "#0F4A52",   // Darker Teal for depth
    textDark: "#1E293B",      // Slate - professional
    textGray: "#475569",      // Muted Slate
    bg: "#FFFFFF",            // Clean White
    accent: "#2D6A4F",        // Green accent for growth
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundColor: theme.bg }}
    >
      {/* --- Background - Clean & Professional --- */}
      {/* 1. Subtle Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(${theme.textDark} 1px, transparent 1px), linear-gradient(90deg, ${theme.textDark} 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      {/* 2. Soft Gradient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100 rounded-full blur-[120px] opacity-30 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-[100px] opacity-30 -translate-x-1/3 translate-y-1/3"></div>

      {/* --- Main Content --- */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: Client-Focused Messaging */}
        <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>  

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight" style={{ color: theme.textDark }}>
            Let's build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#26a5b6] to-[#2b8387]">
              remarkable together.
            </span>
          </h1>

          <p className="text-lg lg:text-xl max-w-lg leading-relaxed" style={{ color: theme.textGray }}>
            Whether you're a startup ready to scale or an enterprise seeking digital transformation, 
            we're here to listen, strategize, and deliver solutions that drive real growth.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-slate-600">Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-slate-600">24h response time</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm text-slate-600">NDA protected</span>
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-5 pt-6">
            
            {/* Email Card */}
            <TrustCard 
              theme={theme}
              type="email"
              label="Email our team"
              value="hr.athenura@gmail.com"
              href="mailto:hr.athenura@gmail.com"
              subtext="Typically replies within 2 hours"
            />

            {/* Phone Card */}
            <TrustCard 
              theme={theme}
              type="phone"
              label="Call or WhatsApp"
              value="+91 98350 51934"
              href="tel:+919835051934"
              subtext="Mon-Fri, 9am-6pm IST"
            />

          </div>

          {/* Additional Trust Badge */}
          <div className="flex items-center mb-5 gap-4 pt-4 text-sm text-slate-400">
            <span>4.9/5 Client Satisfaction</span>
            <span>GDPR Compliant</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Client Testimonials & Trust Visuals */}
        <div className={`relative h-[600px] hidden lg:block transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
           
          {/* Abstract Pattern Background */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: `radial-gradient(${theme.primary} 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }}>
          </div>

          {/* Central "Trust" Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-teal-100 bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-2xl">
            <div className="w-56 h-56 rounded-full border border-dashed border-teal-300 animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-teal-50 to-white flex items-center justify-center shadow-inner">
              <svg className="w-16 h-16 text-teal-600 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          {/* Floating Testimonials / Client Cards */}

          {/* Testimonial 1: Client Success */}
          <div className="absolute top-12 left-0 animate-[float_7s_ease-in-out_infinite]">
            <ClientTestimonial 
              avatar="https://i.pravatar.cc/150?img=7"
              name="Anjali Sharma"
              company="CEO, TechFlow"
              quote="Athenura delivered our platform ahead of schedule. True partners."
              rating={5}
            />
          </div>

          {/* Testimonial 2: Long-term Partner */}
          <div className="absolute bottom-92 right-0 animate-[float_8s_ease-in-out_infinite_1s]">
            <ClientTestimonial 
              avatar="https://i.pravatar.cc/150?img=8"
              name="Vikram Mehta"
              company="Founder, EcoStart"
              quote="Their team understood our vision perfectly. Highly recommended."
              rating={5}
              alignRight
            />
          </div>

          {/* Testimonial 3: Enterprise Client */}
          <div className="absolute bottom-30 left-20 animate-[float_9s_ease-in-out_infinite_0.5s]">
            <ClientTestimonial 
              avatar="https://i.pravatar.cc/150?img=9"
              name="Priya Krishnan"
              company="Director, InnovateCorp"
              quote="Professional, responsive, and technically excellent."
              rating={5}
            />
          </div>

          {/* Trust Metrics */}
          <div className="absolute top-1/2 right-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-teal-100 animate-[float_6s_ease-in-out_infinite_1.2s]">
            <div className="text-2xl font-bold text-teal-700">50+</div>
            <div className="text-xs text-slate-500">Projects Delivered</div>
          </div>

          <div className="absolute bottom-1/4 left-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-teal-100 animate-[float_7s_ease-in-out_infinite_0.8s]">
            <div className="text-2xl font-bold text-teal-700">4.9</div>
            <div className="text-xs text-slate-500">Client Rating</div>
          </div>

          {/* Decorative Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ color: theme.primary }}>
            <path d="M200 200 Q 350 250 450 300" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" />
            <path d="M300 400 Q 400 350 500 300" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,6" />
          </svg>

        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
};

// Sub-component: Trust Contact Card
const TrustCard = ({ theme, type, label, value, href, subtext }) => (
  <a 
    href={href}
    className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all group flex items-start gap-4"
  >
    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-teal-50 text-teal-600 group-hover:bg-teal-100">
      {type === "email" && <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
      {type === "phone" && <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
    </div>
    <div>
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="font-semibold text-base group-hover:text-teal-700 transition-colors" style={{ color: theme.textDark }}>{value}</p>
      {subtext && <p className="text-xs text-slate-400 mt-1">{subtext}</p>}
    </div>
  </a>
);

// Sub-component: Client Testimonial Bubble
const ClientTestimonial = ({ avatar, name, company, quote, rating, alignRight }) => (
  <div className={`flex gap-3 max-w-xs ${alignRight ? 'flex-row-reverse' : ''}`}>
    <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden shrink-0">
      <img src={avatar} alt={name} className="w-full h-full object-cover" />
    </div>
    <div 
      className={`p-4 rounded-2xl backdrop-blur-md shadow-xl border border-white/70 ${
        alignRight ? 'rounded-br-none bg-teal-600 text-white' : 'rounded-bl-none bg-white'
      }`}
    >
      <div className="flex items-center gap-2 mb-1">
        <p className={`text-xs font-bold ${alignRight ? 'text-teal-100' : 'text-slate-900'}`}>{name}</p>
        <span className={`text-[10px] ${alignRight ? 'text-teal-200' : 'text-slate-400'}`}>• {company}</span>
      </div>
      <p className={`text-xs leading-snug ${alignRight ? 'text-white' : 'text-slate-600'}`}>"{quote}"</p>
      <div className="flex mt-2">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className={`w-3 h-3 ${alignRight ? 'text-teal-200' : 'text-teal-500'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  </div>
);

export default ContactTrust;