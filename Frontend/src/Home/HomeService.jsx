// ServicesSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const services = [
        {
            id: 1,
            title: "Custom Software Development",
            description: "Tailor-made solutions designed to address your unique business challenges and drive digital transformation.",
            features: ["Enterprise Applications", "Mobile Solutions", "System Integration", "API Development"],
            details: "We build scalable, secure, and high-performance software solutions using modern technologies like React, Node.js, Python, and cloud-native architectures.",
            metrics: "+89% Client Satisfaction",
            stats: "150+ Projects",
            color: "from-[#A7DADC] to-[#1E7A86]"
        },
        {
            id: 2,
            title: "Website Development",
            description: "Modern, responsive websites that deliver exceptional user experiences and drive business growth.",
            features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "SEO Optimization"],
            details: "We create fast, responsive, and SEO-friendly websites that convert visitors into customers and grow your online presence.",
            metrics: "+200% Conversion",
            stats: "300+ Websites",
            color: "from-[#A7DADC] to-[#2E2E2E]"
        },
        {
            id: 3,
            title: "AI & Machine Learning",
            description: "Intelligent solutions powered by artificial intelligence to automate processes and gain data-driven insights.",
            features: ["Predictive Analytics", "Computer Vision", "NLP Solutions", "AI Integration"],
            details: "Transform your business with AI-powered solutions that learn, adapt, and provide actionable intelligence for competitive advantage.",
            metrics: "3x Decision Speed",
            stats: "50+ AI Models",
            color: "from-[#A7DADC] to-[#1E7A86]"
        },
        {
            id: 4,
            title: "Cloud Solutions & DevOps",
            description: "Seamless cloud migration, management, and DevOps implementation for optimal performance and scalability.",
            features: ["Cloud Architecture", "Container Orchestration", "CI/CD Pipelines", "Infrastructure as Code"],
            details: "Our cloud experts help you leverage AWS, Azure, and Google Cloud to optimize costs and ensure high availability with best-in-class security.",
            metrics: "40% Cost Reduction",
            stats: "100+ Deployments",
            color: "from-[#A7DADC] to-[#2E2E2E]"
        },
        {
            id: 5,
            title: "UI/UX Design",
            description: "User-centered design that combines aesthetics with functionality for exceptional digital experiences.",
            features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
            details: "We create intuitive interfaces that engage users, drive conversions, and deliver measurable results through evidence-based design principles.",
            metrics: "+150% Engagement",
            stats: "500+ Designs",
            color: "from-[#A7DADC] to-[#1E7A86]"
        },
        {
            id: 6,
            title: "IT Consulting",
            description: "Strategic guidance to align your technology investments with business objectives for maximum ROI.",
            features: ["Digital Strategy", "Technology Audit", "Vendor Selection", "Implementation"],
            details: "Our consultants provide actionable insights to optimize your IT infrastructure and accelerate your digital transformation journey.",
            metrics: "45% ROI Increase",
            stats: "200+ Clients",
            color: "from-[#A7DADC] to-[#2E2E2E]"
        },
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#F3F4F6] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#A7DADC]/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#1E7A86]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-8xl mx-auto relative">
                {/* Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2E2E2E] mb-4 leading-tight">
                        Digital Solutions That
                        <span className="block mt-2">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E7A86] via-[#1E7A86] to-[#A7DADC] animate-gradient-x">
                                Drive Innovation
                            </span>
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-[#2E2E2E]/80 max-w-3xl mx-auto leading-relaxed mb-8">
                        We deliver enterprise-grade technology services that transform businesses and accelerate growth in the digital age.
                    </p>

                    {/* Animated Dots */}
                    <div className="flex justify-center items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-2 bg-gradient-to-r from-[#A7DADC] to-[#1E7A86] rounded-full animate-bounce"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div
                                className={`relative group cursor-pointer transition-all duration-500 ${activeCard === service.id ? 'z-10' : 'z-0'}`}
                                onMouseEnter={() => setActiveCard(service.id)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Floating Effect Container */}
                                <div className={`absolute -inset-4 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-700 blur-xl ${activeCard === service.id ? 'opacity-20 animate-pulse-slow' : ''}`}></div>

                                {/* Animated Border */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${activeCard === service.id ? 'opacity-100' : ''}`}></div>

                                {/* Card Container */}
                                <div className={`
                  relative bg-white rounded-2xl p-6 sm:p-8 h-full border border-[#F3F4F6]
                  transition-all duration-500 transform
                  ${activeCard === service.id
                                        ? 'shadow-2xl scale-[1.02] translate-y-[-4px]'
                                        : 'shadow-lg hover:shadow-xl hover:scale-[1.01]'}
                  overflow-hidden
                `}>
                                    {/* Service Number */}
{/* Service Number */}
                                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                                        <div className={`
                                            text-4xl sm:text-5xl font-bold leading-none transition-all duration-500
                                            ${activeCard === service.id 
                                                ? `text-transparent bg-clip-text bg-gradient-to-r ${service.color}` 
                                                : 'text-[#F3F4F6]'}
                                        `}>
                                            0{service.id}
                                        </div>
                                    </div>

                                    {/* Icon Container */}
                                    <div className="relative mb-6 sm:mb-8">
                                        <div className={`absolute -top-2 -left-2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.color} rounded-2xl transform -rotate-12 opacity-20`}></div>
                                        <div className={`
                      w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center relative
                      transition-all duration-500 transform
                      ${activeCard === service.id
                                                ? 'scale-110 rotate-3 bg-gradient-to-br from-white to-[#F3F4F6] shadow-lg'
                                                : 'bg-gradient-to-br from-[#F3F4F6] to-white'}
                    `}>
                                            {/* Animated Icon */}
                                            <div className="relative w-8 h-8">
                                                <div className={`
                          absolute inset-0 rounded-full bg-gradient-to-r ${service.color}
                          transition-all duration-500
                          ${activeCard === service.id ? 'scale-110 rotate-45' : ''}
                        `}></div>
                                                <div className={`
                          absolute inset-1 rounded-full bg-white
                          transition-all duration-500
                          ${activeCard === service.id ? 'scale-90' : ''}
                        `}></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#2E2E2E] mb-3 sm:mb-4 leading-tight pr-12">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#2E2E2E]/70 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="mb-6 sm:mb-8">
                                        <div className="space-y-2 sm:space-y-3">
                                            {service.features.map((feature, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-3 group/feature"
                                                >
                                                    <div className={`
                            w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center flex-shrink-0
                            transition-all duration-300
                            ${activeCard === service.id
                                                            ? 'bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] text-white scale-110'
                                                            : 'bg-[#A7DADC] text-white group-hover/feature:bg-gradient-to-r group-hover/feature:from-[#1E7A86] group-hover/feature:to-[#A7DADC]'}
                          `}>
                                                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-[#2E2E2E] text-sm sm:text-base font-medium group-hover/feature:text-[#1E7A86] transition-colors duration-300">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats Badge */}
                                    <div className="mb-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#1E7A86]/10 to-[#A7DADC]/10 rounded-lg border border-[#A7DADC]/20">
                                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] rounded-full animate-pulse"></div>
                                            <span className="text-xs sm:text-sm font-semibold text-[#1E7A86]">
                                                {service.stats}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Expanded Details */}
                                    <div className={`
                    transition-all duration-500 overflow-hidden
                    ${activeCard === service.id ? 'max-h-48 sm:max-h-56 opacity-100 mt-4' : 'max-h-0 opacity-0'}
                  `}>
                                        <div className="pt-4 sm:pt-6 border-t border-[#F3F4F6]">
                                            <p className="text-[#2E2E2E]/70 text-sm sm:text-base mb-4 leading-relaxed">
                                                {service.details}
                                            </p>

                                            {/* Metrics Badge */}
                                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1E7A86]/10 to-[#A7DADC]/10 rounded-lg mb-6 border border-[#A7DADC]/20">
                                                <div className="w-2 h-2 bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] rounded-full animate-pulse"></div>
                                                <span className="text-sm font-semibold text-[#1E7A86]">
                                                    {service.metrics}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Indicator */}
                                    <div className={`
                    absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}
                    transform transition-transform duration-500
                    ${activeCard === service.id ? 'scale-x-100' : 'scale-x-0'}
                  `}></div>

                                    {/* Expand Indicator */}
                                    <div className="absolute bottom-4 right-4">
                                        <div className={`
                      w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                      transition-all duration-500
                      ${activeCard === service.id
                                                ? 'bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] text-white rotate-180 scale-110'
                                                : 'bg-[#F3F4F6] text-[#2E2E2E]/50 hover:bg-[#A7DADC]/10'}
                    `}>
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced CTA Section */}
                <div
                    className={`mt-16 transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
<div className="max-w-8xl mx-auto px-4 py-16">
    {/* Main Card with Animated Border Gradient */}
    <div className="relative group rounded-[2.5rem] p-[2px] overflow-hidden bg-slate-800">
        {/* Animated Gradient Border Layer */}
        <div className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00f2fe_0%,#4facfe_25%,#00f2fe_50%,#4facfe_75%,#00f2fe_100%)] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Inner Content Container */}
        <div className="relative rounded-[2.4rem] bg-[#0b1120] px-8 py-12 sm:px-14 sm:py-16 overflow-hidden">
            
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full" />

            <div className="relative flex flex-col lg:flex-row items-center gap-12">
                
                {/* Left: Dynamic Heading */}
                <div className="flex-[1.2] lg:text-left space-y-6">
                    
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
                        Turn Manual Work<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
                            Into Automate Solutions.
                        </span>
                    </h3>
                </div>

                {/* Right: Info & Actions */}
                <div className="flex-1 flex flex-col gap-8">
                    <p className="text-lg sm:text-xl text-slate-400 leading-relaxed  lg:text-left font-light">
                        We’ve helped <strong className="text-white font-semibold">296+ global brands</strong> eliminate bottlenecks and reclaim thousands of hours through intelligent web solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-5">
                        {/* Shimmer Primary Button */}
                        <Link to="/services" className="w-full sm:w-auto">
                            <button className="relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-teal-600 rounded-2xl hover:bg-teal-500 hover:scale-[1.03] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] active:scale-95 group/btn">
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore Solutions
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                                </span>
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            </button>
                        </Link>

                        {/* Ghost Button */}
                        <a href="https://calendly.com/official-athenura/30min" target="_blank" className="w-full sm:w-auto">
                            <button className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-slate-300 transition-all duration-300 border-2 border-slate-700 rounded-2xl hover:bg-slate-800 hover:text-white hover:border-slate-500">
                                Book Strategy Call
                            </button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
                </div>


            </div>
        </section>
    );
};

export default ServicesSection;