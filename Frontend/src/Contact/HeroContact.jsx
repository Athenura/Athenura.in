import React, { useState, useEffect } from "react";

const ContactHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Theme Constants (Same as your Career Page)
  const theme = {
    primary: "#1E90A8",       // Teal
    primaryLight: "#E8F8FA",  // Light Teal Background
    primaryDark: "#156A7A",   // Darker Teal for text
    textDark: "#111827",      // Near Black
    textGray: "#4B5563",      // Gray text
    bg: "#F8FBFC",            // Main Background
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundColor: theme.bg }}
    >
      {/* --- Background Decor --- */}
      {/* 1. Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${theme.textDark} 1px, transparent 1px), linear-gradient(90deg, ${theme.textDark} 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* 2. Gradient Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-200 rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[100px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>

      {/* --- Main Content --- */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: Text & Info */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight" style={{ color: theme.textDark }}>
            Let's start a <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${theme.textDark}, ${theme.primary})` }}>
              conversation.
            </span>
          </h1>

          <p className="text-lg lg:text-xl mb-12 max-w-lg leading-relaxed" style={{ color: theme.textGray }}>
            Have a project in mind or just want to say hi? We're all ears. 
            Our team is ready to turn your ideas into reality.
          </p>

          {/* Contact Details Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            {/* Email Card */}
            <ContactCard 
              theme={theme}
              icon="Mail"
              label="Email us at"
              value="hr.athenura@gmail.com"
              href="mailto:hr.athenura@gmail.com"
            />

            {/* Phone Card */}
            <ContactCard 
              theme={theme}
              icon="Phone"
              label="Call us at"
              value="+91 98350 51934"
              href="tel:+919835051934"
            />

          </div>
        </div>

        {/* RIGHT COLUMN: Visual Composition */}
        <div className={`relative h-[600px] hidden lg:block transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
           
           {/* Abstract Map Dots Background (Simplified) */}
           <div className="absolute inset-0 opacity-20" 
                style={{ backgroundImage: `radial-gradient(${theme.primary} 2px, transparent 2px)`, backgroundSize: '40px 40px' }}>
           </div>

           {/* Central "World" Sphere */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm flex items-center justify-center shadow-2xl">
              <div className="w-64 h-64 rounded-full border border-dashed border-teal-200 animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center shadow-inner">
                 <img src="https://cdn-icons-png.flaticon.com/512/2021/2021884.png" alt="Athenura" className="w-20 h-20 opacity-20" />
              </div>
           </div>

           {/* Floating Interaction Cards */}

           {/* Card 1: Sales Inquiry */}
           <div className="absolute top-20 left-10 animate-[float_6s_ease-in-out_infinite]">
             <GlassMessage 
                theme={theme}
                avatar="https://i.pravatar.cc/150?img=32"
                name="Sarah (Sales)"
                message="Hey! How can I help you?"
                time="Just now"
             />
           </div>

           {/* Card 2: Candidate Inquiry */}
           <div className="absolute bottom-32 right-10 animate-[float_8s_ease-in-out_infinite_1s]">
             <GlassMessage 
                theme={theme}
                avatar="https://i.pravatar.cc/150?img=11"
                name="Rahul (HR)"
                message="We received your application!"
                time="2m ago"
                alignRight
             />
           </div>

           {/* Connecting Lines (Decorative) */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <path d="M150 150 Q 300 300 450 450" fill="none" stroke={theme.primary} strokeWidth="2" strokeDasharray="5,5" />
           </svg>

        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

// Sub-component: Contact Info Card
const ContactCard = ({ theme, icon, label, value, href }) => (
  <a 
    href={href}
    className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group flex items-start gap-4"
  >
    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-teal-50" 
         style={{ backgroundColor: theme.primaryLight, color: theme.primary }}>
      {icon === "Mail" && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
      {icon === "Phone" && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="font-bold text-lg group-hover:text-teal-600 transition-colors" style={{ color: theme.textDark }}>{value}</p>
    </div>
  </a>
);

// Sub-component: Floating Glass Message
const GlassMessage = ({  avatar, name, message, time, alignRight }) => (
  <div className={`flex gap-3 items-end max-w-xs ${alignRight ? 'flex-row-reverse' : ''}`}>
    <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden shrink-0">
      <img src={avatar} alt={name} className="w-full h-full object-cover" />
    </div>
    <div 
      className={`p-4 rounded-2xl backdrop-blur-md shadow-lg border border-white/50 ${alignRight ? 'rounded-br-none bg-teal-500 text-white' : 'rounded-bl-none bg-white/80'}`}
    >
      <p className={`text-xs font-bold mb-1 ${alignRight ? 'text-teal-100' : 'text-gray-900'}`}>{name}</p>
      <p className={`text-sm leading-snug ${alignRight ? 'text-white' : 'text-gray-600'}`}>{message}</p>
      <p className={`text-[10px] mt-2 ${alignRight ? 'text-teal-100' : 'text-gray-400'}`}>{time}</p>
    </div>
  </div>
);

export default ContactHero;