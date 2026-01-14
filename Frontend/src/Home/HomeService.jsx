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
                                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                                        <div className="text-4xl sm:text-5xl font-bold text-[#F3F4F6] leading-none">
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
                    <div className="max-w-8xl mx-auto px-4">
                        <div className="rounded-2xl bg-gradient-to-r from-[#2e5f8a] via-[#399ab7] to-[#2e5f8a] px-6 py-8 sm:px-10 sm:py-10">
                            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                                {/* Left: Heading */}
                                <div className="flex-1 text-center lg:text-left">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                                        Transform <br className="hidden sm:block" />
                                        Your Manual Work To Automated Solutions
                                    </h3>
                                </div>

                                {/* Middle: Description */}
                                <div className="flex-1 text-center">
                                    <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
                                        Helping 296+ businesses drive measurable growth with high-performance
                                        marketing and web solutions.
                                    </p>
                                </div>

                                {/* Right: CTAs */}
                                <div className="flex flex-col sm:flex-row items-center gap-4">

                                    <Link to="/services">
                                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1075ac] text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-[#43a1e3]">
                                        VIEW More SERVICES
                                    </button>
                                    </Link>

                                    <a href="https://l.instagram.com/?u=https%3A%2F%2Fcalendly.com%2Fofficial-athenura%2F30min%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnDoze3uuliE--HsOCPRJhxYgcI73IoKROa0vob8G1WU1P2YJEi-fEzcEcsCA%26brid%3DoK6O_dZY676W3T881gzh5w&e=AT3Z6OxRBEwuG-sAQ_BWEuC0g9aT7oDxzwZTBlEfYktytQg4-cFUIW1fA8EBrCUh8i6zQAt5LZ3MY4L-xTgDiI9IvhgU1irG-_8yaXb33k_i9BT8s3iXKAzElg" target="_blank">
                                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10">
                                        Book Your FREE Consultation
                                    </button>
                                    </a>
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