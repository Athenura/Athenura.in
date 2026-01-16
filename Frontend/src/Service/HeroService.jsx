import React, { useState, useEffect } from "react";

const ServicesHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const services = [
        {
            id: 0,
            title: "Web Development",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            )
        },
        {
            id: 1,
            title: "Mobile Apps",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "UI/UX Design",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Cloud Solutions",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                </svg>
            )
        },
        {
            id: 4,
            title: "AI Integration",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
    ];

    const theme = {
        primary: "#35B4C7", // Bright teal
        primaryLight: "#E6F7F9", // Light teal
        primaryDark: "#1E7A86", // Dark teal
        accent: "#35B4C7", // Same as primary
        white: "#FFFFFF",
        lightBg: "#F8FDFE", // Very light blue/teal
    };

    useEffect(() => {
        setIsVisible(true);

        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        // Initial check
        checkMobile();

        // Add event listener
        window.addEventListener('resize', checkMobile);

        // Rotate through services (only on desktop)
        let interval;
        if (!isMobile) {
            interval = setInterval(() => {
                setActiveService((prev) => (prev + 1) % services.length);
            }, 3000);
        }

        return () => {
            window.removeEventListener('resize', checkMobile);
            if (interval) clearInterval(interval);
        };
    }, [isMobile]);

    return (
        <section
            className="relative w-full min-h-screen lg:min-h-[90vh] flex items-center overflow-hidden"
            style={{ backgroundColor: theme.lightBg }}
        >
            {/* Background Elements - Hide some on mobile */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated Gradient Orbs - Reduced size on mobile */}
                <div
                    className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full opacity-10 lg:opacity-20"
                    style={{
                        background: `radial-gradient(circle, ${theme.primary} 0%, transparent 70%)`,
                        animation: isMobile ? 'none' : 'float 15s ease-in-out infinite'
                    }}
                />
                <div
                    className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full opacity-10 lg:opacity-20"
                    style={{
                        background: `radial-gradient(circle, ${theme.primaryDark} 0%, transparent 70%)`,
                        animation: isMobile ? 'none' : 'float 20s ease-in-out infinite reverse'
                    }}
                />

                {/* Geometric Grid - Hide on mobile */}
                <div className="absolute inset-0 opacity-5 hidden lg:block">
                    <div className="absolute top-0 left-0 w-full h-full">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    width: '2px',
                                    height: '60px',
                                    backgroundColor: theme.primaryDark,
                                    transform: 'rotate(45deg)',
                                    animation: isMobile ? 'none' : `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content - Stack on mobile */}
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left Column - Text Content - Full width on mobile */}
                <div className={`relative transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>

                    {/* Main Headline - Adjusted for mobile */}
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl mt-5 font-bold tracking-tight mb-4 lg:mb-6 leading-[1.2]">
                        <span style={{ color: theme.primaryDark }}>Athenura Where Innovation</span>
                        <br />
                        <div className="relative inline-block">
                            <span
                                className="relative z-10 bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
                                }}
                            >
                                Meets Execution
                            </span>
                            <div
                                className="absolute bottom-1 lg:bottom-2 left-0 w-full h-2 lg:h-3 opacity-20 -z-0"
                                style={{ backgroundColor: theme.primary }}
                            />
                        </div>
                    </h1>

                    {/* Animated Services Rotator - Static on mobile */}
                    <div className="mb-6 lg:mb-8 h-14 lg:h-16 overflow-hidden">
                        {isMobile ? (
                            // Static display on mobile
                            <div className="flex items-center gap-3" style={{ color: theme.primaryDark }}>
                                <div style={{ color: theme.primary }}>
                                    {services[activeService].icon}
                                </div>
                                <span className="text-lg lg:text-4xl font-semibold">
                                    {services[activeService].title}
                                </span>
                            </div>
                        ) : (
                            // Animated display on desktop
                            services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`flex items-center gap-3 transition-all duration-500 transform ${activeService === index
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-full opacity-0 absolute'
                                        }`}
                                    style={{ color: theme.primaryDark }}
                                >
                                    <div style={{ color: theme.primary }}>
                                        {service.icon}
                                    </div>
                                    <span className="text-lg lg:text-4xl font-semibold">
                                        {service.title}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Description - Adjusted for mobile */}
                    <p
                        className="text-base lg:text-xl mb-8 lg:mb-10 max-w-xl leading-relaxed"
                        style={{ color: theme.primaryDark }}
                    >
                        We design and engineer high-performance digital products using modern technology,
                        helping businesses scale with clarity, speed, and confidence.
                    </p>


                    {/* CTA Buttons - Stack on mobile */}
                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12">
                        <button
                            className="group relative px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl"
                            style={{
                                backgroundColor: theme.primary,
                                boxShadow: `0 10px 30px ${theme.primary}40`
                            }}
                            onMouseEnter={(e) => {
                                if (!isMobile) e.currentTarget.style.backgroundColor = theme.primaryDark;
                            }}
                            onMouseLeave={(e) => {
                                if (!isMobile) e.currentTarget.style.backgroundColor = theme.primary;
                            }}
                        >
                            <span className="relative z-10 text-sm lg:text-base">Dive into Projects</span>
                            {!isMobile && (
                                <div
                                    className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                                    style={{ backgroundColor: theme.primaryDark }}
                                />
                            )}
                        </button>
                    </div>

                    {/* Stats - Stack on small mobile, row on larger */}
                    <div className="flex flex-wrap mb-10 gap-4 lg:gap-8 pt-6 lg:pt-8 border-t" style={{ borderColor: `${theme.primary}20` }}>
                        <div className="flex-1 min-w-[100px]">
                            <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: theme.primary }}>
                                250+
                            </div>
                            <div className="text-xs lg:text-sm uppercase tracking-wider" style={{ color: theme.primaryDark }}>
                                Projects
                            </div>
                        </div>
                        <div className="flex-1 min-w-[100px]">
                            <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: theme.primary }}>
                                99%
                            </div>
                            <div className="text-xs lg:text-sm uppercase tracking-wider" style={{ color: theme.primaryDark }}>
                                Satisfaction
                            </div>
                        </div>
                        <div className="flex-1 min-w-[100px]">
                            <div className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: theme.primary }}>
                                5+
                            </div>
                            <div className="text-xs lg:text-sm uppercase tracking-wider" style={{ color: theme.primaryDark }}>
                                Years Experience
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Animated Visualization - Hidden on mobile, shown on desktop */}
                <div className={`hidden lg:block relative h-[500px] lg:h-[600px] w-full transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}>

                    {/* Main Orbital System */}
                    <div className="relative w-full h-full flex items-center justify-center">

                        {/* Central Orb */}
                        <div className="relative z-20">
                            <div
                                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full relative flex items-center justify-center shadow-2xl"
                                style={{
                                    background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
                                    boxShadow: `0 20px 60px ${theme.primary}40`
                                }}
                            >
                                {/* Inner rings */}
                                <div
                                    className="absolute inset-4 rounded-full border-2 animate-ping"
                                    style={{ borderColor: theme.white, opacity: 0.3 }}
                                />
                                <div
                                    className="absolute inset-8 rounded-full border-2"
                                    style={{ borderColor: theme.white, opacity: 0.2 }}
                                />

                                <div className="text-center flex flex-col items-center">
                                    <img
                                        src="/AthenuraCircle.png"
                                        alt="Athenura"
                                        className="h-20 w-20 lg:h-22 lg:w-22 shadow-2xl rounded-full"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%2335B4C7'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-family='Arial' font-size='24' fill='white'%3EA%3C/text%3E%3C/svg%3E";
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Orbiting Elements */}
                        {services.map((service, index) => {
                            const angle = (index * 2 * Math.PI) / services.length;
                            const radius = 200;
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                                <div
                                    key={service.id}
                                    className={`absolute z-10 transform transition-all duration-1000 ${activeService === index ? 'scale-110' : 'scale-100'
                                        }`}
                                    style={{
                                        left: `calc(50% + ${x}px)`,
                                        top: `calc(50% + ${y}px)`,
                                        transform: `translate(-50%, -50%)`,
                                        animation: `orbit ${20 + index * 2}s linear infinite`
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-125 cursor-pointer"
                                        style={{
                                            backgroundColor: activeService === index
                                                ? `${theme.white}E6`
                                                : `${theme.white}CC`,
                                            boxShadow: `0 10px 30px ${theme.primary}30`,
                                            border: `2px solid ${activeService === index ? theme.primary : `${theme.primary}40`}`
                                        }}
                                        onClick={() => setActiveService(index)}
                                    >
                                        <div className="w-6 h-6 mb-1" style={{ color: activeService === index ? theme.primary : theme.primaryDark }}>
                                            {service.icon}
                                        </div>
                                        <span
                                            className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                                            style={{
                                                backgroundColor: activeService === index
                                                    ? `${theme.primary}15`
                                                    : 'transparent',
                                                color: activeService === index
                                                    ? theme.primary
                                                    : theme.primaryDark
                                            }}
                                        >
                                            {service.title.split(' ')[0]}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {services.map((_, index) => {
                                const angle = (index * 2 * Math.PI) / services.length;
                                const radius = 200;
                                const x1 = Math.cos(angle) * radius + 200;
                                const y1 = Math.sin(angle) * radius + 200;

                                return (
                                    <line
                                        key={index}
                                        x1="200"
                                        y1="200"
                                        x2={x1}
                                        y2={y1}
                                        stroke={theme.primary}
                                        strokeWidth="1"
                                        strokeDasharray="5,5"
                                        opacity="0.3"
                                        className="animate-dash"
                                    />
                                );
                            })}
                        </svg>

                        {/* Floating Particles */}
                        {Array.from({ length: 15 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full animate-float"
                                style={{
                                    width: `${Math.random() * 8 + 2}px`,
                                    height: `${Math.random() * 8 + 2}px`,
                                    backgroundColor: Math.random() > 0.5 ? theme.primary : theme.primaryDark,
                                    opacity: Math.random() * 0.4 + 0.1,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${Math.random() * 10 + 10}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile Alternative - Simple Service Grid */}
                <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                    {services.slice(0, 4).map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-xl p-4 shadow-lg flex flex-col items-center justify-center"
                            style={{
                                border: `1px solid ${theme.primary}20`,
                                boxShadow: `0 4px 12px ${theme.primary}15`
                            }}
                        >
                            <div className="w-10 h-10 mb-2" style={{ color: theme.primary }}>
                                {service.icon}
                            </div>
                            <span className="text-xs font-semibold text-center" style={{ color: theme.primaryDark }}>
                                {service.title.split(' ')[0]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Animations - Only applied on desktop */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes orbit {
          from { transform: translate(-50%, -50%) rotate(0deg) translateX(200px) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg) translateX(200px) rotate(-360deg); }
        }
        
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-dash {
          animation: dash 20s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default ServicesHero;