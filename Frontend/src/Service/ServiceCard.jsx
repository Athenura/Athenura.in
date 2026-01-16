import React, { useRef, useState, useEffect } from 'react';
import {
    Code, Globe, Building2, Palette, Wrench, ShieldCheck, Zap,
    ChevronRight, ChevronLeft, ArrowRight, Cpu
} from 'lucide-react';
import { Link } from "react-router-dom";

const services = [
    {
        id: "01",
        title: "Custom Software Development",
        description: "Tailored solutions designed specifically to meet your unique business architecture and goals.",
        icon: <Code size={24} className="md:w-7 md:h-7" />, // Responsive Icon Size
        tags: ["Python", "Java", ".NET", "Microservices"],
        features: ["Scalable Architecture", "API Integration", "Legacy Modernization"],
        link: "/services/custom-software"
    },
    {
        id: "02",
        title: "Web Application Development",
        description: "Modern, scalable, and high-performance web applications built with the latest MERN stack technologies.",
        icon: <Globe size={24} className="md:w-7 md:h-7" />,
        tags: ["MongoDB", "Express", "React", "Node.js"],
        features: ["SPA & PWA", "Real-time Data", "Cloud Native"],
        link: "/services/web-apps"
    },
    {
        id: "03",
        title: "Enterprise Software Solutions",
        description: "Robust, secure systems engineered to handle complex workflows for large-scale organizations.",
        icon: <Building2 size={24} className="md:w-7 md:h-7" />,
        tags: ["ERP", "CRM", "SaaS", "Cloud"],
        features: ["Workflow Automation", "Role-Based Access", "Data Analytics"],
        link: "/services/enterprise"
    },
    {
        id: "04",
        title: "UI/UX Design",
        description: "Intuitive and aesthetically pleasing user interfaces that drive engagement and improve user experience.",
        icon: <Palette size={24} className="md:w-7 md:h-7" />,
        tags: ["Figma", "Wireframing", "Prototyping"],
        features: ["User Research", "Interaction Design", "Brand Identity"],
        link: "/services/ui-ux"
    },
    {
        id: "05",
        title: "Website Maintenance",
        description: "Keep your digital presence running smoothly with regular updates, security patches, and performance tuning.",
        icon: <Wrench size={24} className="md:w-7 md:h-7" />,
        tags: ["Security", "Optimization", "Backups"],
        features: ["24/7 Monitoring", "Bug Fixes", "Content Updates"],
        link: "/services/maintenance"
    },
    {
        id: "06",
        title: "Software Testing & QA",
        description: "Comprehensive testing strategies to ensure your software is bug-free, reliable, and market-ready.",
        icon: <ShieldCheck size={24} className="md:w-7 md:h-7" />,
        tags: ["Selenium", "Jest", "Cypress"],
        features: ["Automated Testing", "Performance Testing", "Security Audits"],
        link: "/services/testing"
    },
    {
        id: "07",
        title: "Business Automation Solutions",
        description: "Streamline your operations and reduce manual effort with intelligent workflow automation tools.",
        icon: <Zap size={24} className="md:w-7 md:h-7" />,
        tags: ["AI/ML", "RPA", "Bots"],
        features: ["Process Optimization", "Cost Reduction", "Error Elimination"],
        link: "/services/automation"
    }
];

const AthenuraServicesInfinite = () => {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isManualInteracting, setIsManualInteracting] = useState(false);

    // We double the data to create the infinite loop illusion
    const extendedServices = [...services, ...services];

    // Auto Scroll Logic
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let animationFrameId;

        const scroll = () => {
            if (!isPaused && !isManualInteracting && scrollContainer) {
                // Slower scroll on mobile for better readability if needed, standard speed otherwise
                scrollContainer.scrollLeft += 1.5;

                // Infinite Loop Reset Logic
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, isManualInteracting]);

    // Improved Manual Button Handler with Dynamic Width Calculation
    const scrollManual = (direction) => {
        const container = scrollRef.current;
        
        if (container) {
            // Check screen width to determine scroll distance
            // Mobile: 280px card + 16px gap = 296
            // Desktop: 400px card + 32px gap = 432
            const isMobile = window.innerWidth < 768;
            const scrollDistance = isMobile ? 296 : 432;

            // 1. Pause auto-scroll
            setIsManualInteracting(true);

            // 2. Perform smooth scroll
            const scrollAmount = direction === 'left' ? -scrollDistance : scrollDistance;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

            // 3. Resume auto-scroll
            setTimeout(() => {
                setIsManualInteracting(false);
            }, 1000);
        }
    };

    return (
        <section className="relative w-full py-12 md:py-24 bg-gray-50 overflow-hidden font-sans">

            {/* Background Elements - Adjusted opacity/blur for mobile performance */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#35B4C7] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-10 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1E7A86] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-10 animate-pulse delay-700"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* CENTERED HEADER SECTION */}
                <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-6">
                        Services That Scale <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E7A86] to-[#35B4C7]">
                            At Every Stage
                        </span>
                    </h2>

                    <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto mb-6 md:mb-10 px-2">
                        Transforming ideas into digital reality with our comprehensive suite of software services tailored for your growth.
                    </p>
                </div>

                {/* Infinite Scroll Container */}
                <div
                    className="relative w-full overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)} // Pause on touch for mobile
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {/* Side Fades - Hidden on very small screens to show more content */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>

                    <div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide py-6 md:py-10 pl-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {extendedServices.map((service, index) => (
                            <div
                                key={`${service.id}-${index}`}
                                className="flex-none w-[280px] md:w-[400px] group perspective"
                            >
                                <Link to={service.link}>
                                    <div className="h-full bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray-100 shadow-[0_5px_20px_-5px_rgba(0,0,0,0.05)] md:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(30,122,134,0.3)] hover:border-[#35B4C7]/50 transition-all duration-500 relative overflow-hidden flex flex-col justify-between cursor-pointer">

                                        {/* Hover Gradient Bar */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-gradient-to-r from-[#1E7A86] to-[#35B4C7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                                        <div className="relative z-10">
                                            {/* Header: Icon & Arrow */}
                                            <div className="flex items-start justify-between mb-4 md:mb-6">
                                                <div className="p-2.5 md:p-3.5 rounded-xl md:rounded-2xl bg-[#E8F8FA] text-[#1E7A86] group-hover:scale-110 group-hover:bg-[#1E7A86] group-hover:text-white transition-all duration-300 shadow-sm">
                                                    {service.icon}
                                                </div>
                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#2EA4B5]">
                                                    <ArrowRight size={20} className="md:w-6 md:h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                                </div>
                                            </div>

                                            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#1E7A86] transition-colors">
                                                {service.title}
                                            </h3>

                                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-3">
                                                {service.description}
                                            </p>

                                            {/* Features List */}
                                            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 bg-gray-50/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-100">
                                                {service.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center text-[10px] md:text-xs font-medium text-gray-600">
                                                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#35B4C7] mr-2"></div>
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tech Stack Tags */}
                                        <div className="relative z-10 pt-3 md:pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-2 mb-2 md:mb-3">
                                                <Cpu size={12} className="md:w-[14px] md:h-[14px] text-[#1E7A86]" />
                                                <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider">Powered By</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                                                {service.tags.map((tag, i) => (
                                                    <span key={i} className="px-2 py-0.5 md:py-1 text-[10px] md:text-[11px] font-semibold rounded-md bg-white text-gray-500 border border-gray-200 group-hover:border-[#35B4C7]/30 group-hover:bg-[#E8F8FA] group-hover:text-[#1E7A86] transition-colors duration-300">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Centered Controls */}
                <div className="flex justify-center gap-3 md:gap-4 mt-2">
                    <button
                        onClick={() => scrollManual('left')}
                        className="group p-3 md:p-4 rounded-full bg-white border border-gray-200 text-[#1E7A86] shadow-sm hover:shadow-md hover:bg-[#1E7A86] hover:text-white hover:border-[#1E7A86] transition-all duration-300 active:scale-95"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft size={20} className="md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={() => scrollManual('right')}
                        className="group p-3 md:p-4 rounded-full bg-white border border-gray-200 text-[#1E7A86] shadow-sm hover:shadow-md hover:bg-[#1E7A86] hover:text-white hover:border-[#1E7A86] transition-all duration-300 active:scale-95"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight size={20} className="md:w-6 md:h-6" />
                    </button>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
        </section>
    );
};

export default AthenuraServicesInfinite;