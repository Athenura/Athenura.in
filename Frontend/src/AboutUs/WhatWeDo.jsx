import React from "react";
import { Link } from "react-router-dom";

// Enhanced SERVICES data with more informative content
const SERVICES = [
  {
    id: 2,
    title: "Web & App Dev",
    shortDescription: "Scalable, high-performance digital platforms built for the modern web.",
    longDescription: "Full-stack development with modern frameworks React, Node, Python delivering lightning-fast experiences that convert and retain users.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    link: "/services/web-apps",
    capabilities: ["Responsive Web", "Mobile Apps", "PWAs", "API Development"],
    stats: "2x faster load times",
    color: "from-[#1E7A86] to-[#136672]"
  },
  {
    id: 3,
    title: "Digital Products",
    shortDescription: "Ready-to-deploy SaaS tools designed to solve specific industry pain points.",
    longDescription: "Subscription-based platforms for CRM, analytics, and workflow automation built with scalability and user adoption in mind.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    link: "/services/testing",
    capabilities: ["SaaS Platforms", "Analytics Dashboards", "CRM Tools", "Automation"],
    stats: "99.9% uptime",
    color: "from-[#136672] to-[#0d4f58]"
  },
  {
    id: 4,
    title: "Consulting",
    shortDescription: "Strategic guidance to help you navigate digital transformation.",
    longDescription: "From roadmap planning to tech stack selection, our experts align technology with business goals ensuring every investment drives ROI.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    link: "/services/custom-software",
    capabilities: ["Digital Strategy", "Tech Audits", "Roadmapping", "Team Training"],
    stats: "10+ years experience",
    color: "from-[#0d4f58] to-[#08363d]"
  },
  {
    id: 5,
    title: "Internship Programs",
    shortDescription: "Bridging the gap between academic theory and real-world application.",
    longDescription: "Structured remote programs where students ship live projects under expert mentorship building portfolios and industry-ready skills.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    link: "/internship",
    capabilities: ["Remote Internships", "Live Projects", "Mentorship", "Placement Support"],
    stats: "500+ students placed",
    color: "from-[#1E7A86] to-[#136672]"
  },
  {
    id: 6,
    title: "Business Automation",
    shortDescription: "Streamline operations with custom workflows and intelligent automation.",
    longDescription: "We connect your tools, automate repetitive tasks, and build custom dashboards so your team can focus on high-impact work.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    link: "/services/automation",
    capabilities: ["Workflow Automation", "CRM Integration", "Custom Dashboards", "Process Mapping"],
    stats: "40% efficiency gain",
    color: "from-[#2093AB] to-[#136672]"
  }
];

const WhatWeDo = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-slate-50 overflow-hidden font-sans text-slate-900">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-slate-200 to-white rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="container relative mx-auto px-6 md:px-12 z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="block text-[#1E7A86] text-xs font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight animate-fade-in delay-100">
              Transforming ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2093AB] to-[#1E7A86]">
                tangible impact.
              </span>
            </h2>
          </div>
          
          <div className="animate-fade-in delay-200">
             <p className="text-slate-500 max-w-sm text-sm md:text-base leading-relaxed">
               A holistic suite of digital services designed to scale with your ambition from AI to internships.
             </p>
          </div>
        </div>

        {/* Services Grid - All cards are now clickable with unique links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <Link 
              key={service.id}
              to={service.link}
              className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}></div>

              {/* Icon + Stats Tag */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-gradient-to-br group-hover:from-[#e0f7fa] group-hover:to-white group-hover:text-[#1E7A86] transition-all duration-300">
                  {service.icon}
                </div>
                <span className="text-xs font-mono text-slate-400 group-hover:text-[#1E7A86] transition-colors">
                  {service.stats}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1E7A86] transition-colors">
                {service.title}
              </h3>
              
              {/* Short Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                {service.shortDescription}
              </p>

              {/* Long Description (hover reveal or always visible? We'll make it subtle) */}
              <p className="text-slate-400 text-xs leading-relaxed mb-4 border-l-2 border-slate-200 pl-3 italic">
                {service.longDescription}
              </p>

              {/* Capabilities Chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.capabilities.slice(0, 3).map((cap, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-100 rounded-md text-[10px] font-medium text-slate-600">
                    {cap}
                  </span>
                ))}
                {service.capabilities.length > 3 && (
                  <span className="px-2 py-1 bg-slate-100 rounded-md text-[10px] font-medium text-slate-400">
                    +{service.capabilities.length - 3}
                  </span>
                )}
              </div>

              {/* Permanent Arrow Indicator */}
              <div className="flex items-center text-xs font-bold text-slate-300 uppercase tracking-wider group-hover:text-[#2093AB] transition-colors">
                <span>Learn more</span>
                <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </Link>
          ))}

          {/* Custom Project Card - also a link */}
          <Link 
            to="/contact"
            className="flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-slate-300 bg-transparent hover:bg-slate-100/50 transition-all duration-300 cursor-pointer group animate-fade-in-up text-center"
            style={{ animationDelay: '600ms' }}
          >
            <span className="text-5xl mb-4 opacity-30 group-hover:opacity-60 transition-opacity">✨</span>
            <p className="text-slate-600 font-medium mb-3">Need something custom?</p>
            <p className="text-xs text-slate-400 mb-4 max-w-[200px]">
              Tailored solutions for unique challenges let's build it together.
            </p>
            <div className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-lg hover:bg-[#1E7A86] transition-colors flex items-center gap-2">
              Start a Conversation <span className="text-sm">→</span>
            </div>
          </Link>
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-16 flex justify-center">
          <Link to="/services" className="group flex items-center gap-3 text-slate-600 hover:text-[#1E7A86] transition-colors">
            <span className="text-sm font-medium">View all services and capabilities</span>
            <span className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-[#1E7A86] group-hover:translate-x-1 transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { 
          animation: fade-in 0.8s ease-out forwards; 
          opacity: 0; 
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { 
          animation: fade-in-up 0.6s ease-out forwards; 
          opacity: 0; 
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
};

export default WhatWeDo;