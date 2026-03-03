import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactTrust = () => {
  const theme = {
    primary: "#1E7A86",       // Deep Teal - reliable, professional
    primaryLight: "#E6F3F5",  // Light Teal Background
    primaryDark: "#0F4A52",   // Darker Teal for depth
    textDark: "#1E293B",      // Slate - professional
    textGray: "#475569",      // Muted Slate
    bg: "#FFFFFF",            // Clean White
    bgAlt: "#F8FAFC",         // Light background
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Please fill in your name and message.");
      return;
    }

    const supportNumber = "919835051934";
    const text = `*New Inquiry via Website - Client Connect*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${supportNumber}?text=${text}`, '_blank');
  };

  const faqs = [
    {
      q: "How quickly does Athenura respond to inquiries?",
      a: "We prioritize client communication and typically respond within 24 hours during business days."
    },
    {
      q: "Do you offer NDA protection before discussing project details?",
      a: "Absolutely. Client confidentiality is paramount. We're happy to sign an NDA before any detailed discussions."
    },
    {
      q: "What industries do you specialize in?",
      a: "We work with startups, e-commerce, healthcare, education, and enterprise clients across various sectors."
    },
    {
      q: "Can I see case studies or past work?",
      a: "Yes, we'd be happy to share relevant case studies and portfolio examples during our initial consultation."
    }
  ];

  return (
    <div className="w-full">

      {/* --- SECTION 1: HEADER (Client-Focused) --- */}
      <section
        className="relative overflow-hidden py-16 px-6 lg:px-12"
        style={{ background: `linear-gradient(135deg, ${theme.primary}, #0F4A52)` }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-white/10 blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-300/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT - Trust Focused */}
          <div className="text-white space-y-8">

            <h1 className="text-4xl md:text-5xl xl:text-5xl font-extrabold leading-tight">
              Let's Build Something{' '}
              <span className="text-teal-200">Together.</span>
            </h1>

            <p className="text-teal-100 text-lg max-w-lg leading-relaxed">
              Whether you're a startup ready to scale or an enterprise seeking digital transformation, 
              we're here to listen and deliver solutions that drive real growth.
            </p>

            {/* Trust Stats */}
            <div className="flex gap-12 pt-4">
              <div className="group">
                <p className="text-4xl font-bold group-hover:scale-110 transition-transform">
                  50+
                </p>
                <p className="text-teal-200 text-sm tracking-wide">
                  Projects Delivered
                </p>
              </div>
              <div className="group">
                <p className="text-4xl font-bold group-hover:scale-110 transition-transform">
                  4.9
                </p>
                <p className="text-teal-200 text-sm tracking-wide">
                  Client Rating
                </p>
              </div>
              <div className="group">
                <p className="text-4xl font-bold group-hover:scale-110 transition-transform">
                  24h
                </p>
                <p className="text-teal-200 text-sm tracking-wide">
                  Response Time
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL CARD - Trust Messaging */}
          <div className="hidden lg:block">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:scale-[1.02] transition-transform">
              <h3 className="text-white text-2xl font-bold mb-4">
                Your Trust, Our Commitment
              </h3>

              <ul className="space-y-4 text-teal-100">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free initial consultation
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  NDA protected discussions
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Transparent timelines
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Dedicated account manager
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Unchanged but with trust overlay */}
      <section className="py-16 px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: theme.textDark }}>
              Global Reach, <span style={{ color: theme.primary }}>Local Commitment</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Based in India, serving clients worldwide with the same dedication and transparency.
            </p>
          </div>

          {/* Map Container with Trust Badges */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-fadeIn">
            <style>
              {`
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                  100% { transform: translateY(0px); }
                }
                .animate-map-float {
                  animation: float 6s ease-in-out infinite;
                }
              `}
            </style>

            <div className="relative w-full h-[450px] md:h-[550px] animate-map-float">
              <iframe
                title="Athenura Location - Serving Clients Globally"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.378777777823!2d77.3614601942478!3d28.618407722875563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cb70326146a27db%3A0x39227c4340f97501!2sAthenura!5e0!3m2!1sen!2sin!4v1770454010754!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Trust Badges */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-teal-100">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm block" style={{ color: theme.textDark }}>Trusted Partner</p>
                  <p className="text-xs text-gray-500">Serving clients across 12+ countries</p>
                </div>
              </div>

              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg z-20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-xs font-semibold">GDPR & Data Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: INFO & FORM (Client-Focused) --- */}
      <section className="py-24 px-6 lg:px-12" style={{ backgroundColor: theme.bg }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* LEFT: Enhanced Contact Info with Trust Elements */}
          <div>
            <div className="mb-10">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: theme.primary }}>Get In Touch</h3>
              <h2 className="text-3xl font-bold mb-6" style={{ color: theme.textDark }}>Let's discuss your vision</h2>
              <p style={{ color: theme.textGray }} className="leading-relaxed">
                Every project starts with a conversation. Share your goals, and we'll explore how our expertise can bring them to life with transparency and trust at every step.
              </p>
            </div>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold border border-teal-100">4.9/5 Client Satisfaction</span>
              <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold border border-teal-100">NDA Ready</span>
              <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold border border-teal-100">Free Consultation</span>
            </div>

            <div className="space-y-8">
              {/* Email Card - Enhanced */}
              <div className="flex items-start gap-4 group hover:bg-slate-50 p-4 rounded-xl transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: theme.primaryLight }}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={theme.primary}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg" style={{ color: theme.textDark }}>Email Us</h4>
                  <p className="text-sm text-gray-500 mb-1">For partnerships, inquiries, or project discussions.</p>
                  <a href="mailto:info.athenura@gmail.com" className="font-semibold hover:underline" style={{ color: theme.primary }}>info.athenura@gmail.com</a>
                  <p className="text-xs text-gray-400 mt-1">Typically replies within 4 hours</p>
                </div>
              </div>

              {/* Phone Card - Enhanced */}
              <div className="flex items-start gap-4 group hover:bg-slate-50 p-4 rounded-xl transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: theme.primaryLight }}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={theme.primary}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg" style={{ color: theme.textDark }}>Call or WhatsApp</h4>
                  <p className="text-sm text-gray-500 mb-1">Prefer a direct conversation? We're here.</p>
                  <a href="tel:+919835051934" className="font-semibold hover:underline" style={{ color: theme.primary }}>+91 98350 51934</a>
                  <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am-6pm IST</p>
                </div>
              </div>

              {/* Location Card - Enhanced */}
              <div className="flex items-start gap-4 group hover:bg-slate-50 p-4 rounded-xl transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: theme.primaryLight }}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={theme.primary}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg" style={{ color: theme.textDark }}>Remote HQ</h4>
                  <p className="text-sm text-gray-500 mb-1">Serving clients across India and globally.</p>
                  <p className="font-semibold" style={{ color: theme.textDark }}>Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form with Trust Messaging */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold mb-2" style={{ color: theme.textDark }}>Start the conversation</h3>
            <p className="text-sm text-gray-500 mb-6">We'll get back to you within 24 hours.</p>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E7A86]/50 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E7A86]/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600">Work Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E7A86]/50 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600">How can we help?</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, or questions..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E7A86]/50 transition-all resize-none"
                ></textarea>
              </div>

              {/* Trust Indicators under form */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Your information is secure and never shared</span>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                  style={{ backgroundColor: "#25D366", color: "white" }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: CLIENT FAQS (Updated for trust) --- */}
      <section className="py-20 px-6 lg:px-12" style={{ backgroundColor: theme.bgAlt }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: theme.textDark }}>
              Questions? We've got <span style={{ color: theme.primary }}>answers.</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Transparency builds trust. Here are answers to common questions from potential clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-3" style={{ color: theme.textDark }}>{item.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: theme.textGray }}>{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/faqs">
              <button
                className="group inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:bg-teal-50"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                View all FAQs
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: SOCIAL CONNECT (Client-focused) --- */}
      <section className="py-20 px-6 border-t" style={{ backgroundColor: theme.bg, borderColor: theme.primaryLight }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: theme.textDark }}>
              Follow our journey
            </h3>
            <p style={{ color: theme.textGray }}>
              See client success stories, case studies, and company updates.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://www.linkedin.com/company/athenura/" className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-5 h-5 text-[#0077b5]">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
            </a>

            <a href="https://www.instagram.com/athenura.in/" className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-5 h-5 text-[#E1306C]">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-[#E1306C] transition-colors">Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactTrust;