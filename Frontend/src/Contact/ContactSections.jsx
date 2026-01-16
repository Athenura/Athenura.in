import React from "react";
import { Link } from "react-router-dom";

const ContactContent = () => {
  const theme = {
    primary: "#1E90A8",
    primaryLight: "#E8F8FA",
    textDark: "#111827",
    textGray: "#4B5563",
    bg: "#FFFFFF",
    bgAlt: "#F8FBFC",
  };

  const faqs = [
    {
      q: "How long does Athenura take to respond?",
      a: "Our team usually responds within 24–48 business hours. Internship-related queries are prioritized."
    },
    {
      q: "Is the Athenura internship remote?",
      a: "Yes, Athenura internships are completely remote, allowing students to learn and work from anywhere."
    },
    {
      q: "Who can apply for the internship?",
      a: "Students, freshers, and career beginners from any background with a passion to learn are welcome."
    },
    {
      q: "Will I receive a certificate?",
      a: "Yes, all interns who successfully complete the program receive a verified internship certificate."
    }
  ];

  return (
    <div className="w-full">

      {/* --- SECTION 1: INTERNSHIP REACH & TRUST --- */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden" style={{ backgroundColor: theme.primary }}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Supporting <br />Future Professionals
            </h2>
            <p className="text-teal-100 text-lg mb-8 max-w-md leading-relaxed">
              Athenura is built to help students and freshers gain real-world experience through structured internships and mentorship.
            </p>
            <div className="flex gap-12">
               <div>
                 <p className="text-4xl font-bold mb-1">100%</p>
                 <p className="text-teal-200 text-sm">Remote Internships</p>
               </div>
               <div>
                 <p className="text-4xl font-bold mb-1">500+</p>
                 <p className="text-teal-200 text-sm">Learners Trained</p>
               </div>
            </div>
          </div>

          <div className="relative h-64 lg:h-80 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 flex items-center justify-center">
             <div className="text-center">
                <div className="inline-block p-4 rounded-full bg-white/20 mb-4 animate-pulse">
                   <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">India Based</h3>
                <p className="text-teal-100">Serving Students Nationwide</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: MAP SECTION --- */}
      <section className="py-24 px-6 lg:px-12" style={{ backgroundColor: theme.bg }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold" style={{ color: theme.textDark }}>
              Our <span style={{ color: theme.primary }}>Presence</span>
            </h2>
            <p style={{ color: theme.textGray }}>
              We operate remotely, making internships accessible to students across India.
            </p>
          </div>

          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
             {/* Google Maps Embed */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28005.67980362378!2d77.3414909!3d28.6715694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy"
               title="Company Location"
               className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>

             {/* Floating Address Card */}
             <div className="absolute bottom-6 left-6 bg-white p-6 rounded-2xl shadow-lg max-w-xs hidden md:block">
                <h4 className="font-bold text-lg mb-2" style={{ color: theme.textDark }}>Athenura HQ</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Uttar Pradesh, India<br />
                  <span className="text-xs text-teal-600">(Remote-First Operations)</span>
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold flex items-center gap-2 hover:underline"
                  style={{ color: theme.primary }}
                >
                  View on Map
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: FAQ --- */}
      <section className="py-24 px-6 lg:px-12" style={{ backgroundColor: theme.bgAlt }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: theme.textDark }}>
              Internship FAQs
            </h2>
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

      {/* --- SECTION 4: SOCIAL CONNECT --- */}
      <section className="py-20 px-6 border-t" style={{ backgroundColor: theme.bg, borderColor: theme.primaryLight }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
           <div>
             <h3 className="text-2xl font-bold mb-2" style={{ color: theme.textDark }}>
               Stay Connected with Athenura
             </h3>
             <p style={{ color: theme.textGray }}>
               Follow us for internship updates, learning resources, and announcements.
             </p>
           </div>

           <div className="flex flex-wrap  gap-2 justify-center">
              
              {/* LinkedIn - Original Blue */}
              <a href="https://www.linkedin.com/company/athenura/" className="flex items-center gap-2 px-4 py-4 rounded-xl border border-gray-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-6 h-6 text-[#0077b5]">
                   <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <span className="font-bold text-gray-700 group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
              </a>

              {/* Instagram - Colorful Gradient */}
              <a href="https://www.instagram.com/athenura.in/" className="flex items-center gap-3 px-4 py-4 rounded-xl border border-gray-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-6 h-6 text-gray-800 group-hover:text-[#E1306C]">
                   <svg width="0" height="0">
                      <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                        <stop stopColor="#fdf497" offset="0" />
                        <stop stopColor="#fdf497" offset="0.05" />
                        <stop stopColor="#fd5949" offset="0.45" />
                        <stop stopColor="#d6249f" offset="0.6" />
                        <stop stopColor="#285AEB" offset="0.9" />
                      </radialGradient>
                    </svg>
                   <svg fill="url(#rg)" className="group-hover:fill-[url(#rg)] fill-gray-400 group-hover:fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <span className="font-bold text-gray-700 group-hover:text-[#E1306C] transition-colors">Instagram</span>
              </a>
           </div>
        </div>
      </section>

    </div>
  );
};

export default ContactContent;