import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";

const PARTICLE_COUNT_DESKTOP = 15;
const PARTICLE_COUNT_TABLET = 10;
const PARTICLE_COUNT_MOBILE = 6;
const GRID_SIZE_MOBILE = 30;
const GRID_SIZE_TABLET = 35;
const GRID_SIZE_DESKTOP = 40;

const HomeHero = () => {
  const heroRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });
  const [animateText, setAnimateText] = useState(false);

  // Memoize splash colors with reduced intensity
  const splashColors = useMemo(() => [
    "rgba(40, 163, 185, 0.3)",
    "rgba(54, 182, 201, 0.25)",
    "rgba(69, 201, 217, 0.2)"
  ], []);

  // Responsive window size tracking
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Device type detection
  const isMobile = useMemo(() => windowSize.width < 640, [windowSize.width]);
  const isTablet = useMemo(() => windowSize.width >= 640 && windowSize.width < 1024, [windowSize.width]);
  const isDesktop = useMemo(() => windowSize.width >= 1024, [windowSize.width]);

  // Trigger text animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateText(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Initialize particles with responsive counts
  const initializeParticles = useCallback(() => {
    let particleCount;
    if (isMobile) {
      particleCount = PARTICLE_COUNT_MOBILE;
    } else if (isTablet) {
      particleCount = PARTICLE_COUNT_TABLET;
    } else {
      particleCount = PARTICLE_COUNT_DESKTOP;
    }

    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 0.9 + 0.05, // Keep particles away from edges
      y: Math.random() * 0.9 + 0.05,
      size: Math.random() * (isMobile ? 2 : 3) + 1,
      opacity: Math.random() * 0.15 + 0.05,
      speed: Math.random() * 0.3 + 0.1,
      phase: Math.random() * Math.PI * 2,
      offsetX: 0,
      offsetY: 0,
    }));
  }, [isMobile, isTablet]);

  // Animation loop with performance optimization
  const animateParticles = useCallback(() => {
    if (!animationRef.current) return;

    const time = Date.now() * 0.001;

    particlesRef.current = particlesRef.current.map((p) => ({
      ...p,
      offsetX: Math.sin(time * p.speed + p.phase) * (isMobile ? 10 : 15),
      offsetY: Math.cos(time * p.speed + p.phase) * (isMobile ? 10 : 15),
    }));

    animationRef.current = requestAnimationFrame(animateParticles);
  }, [isMobile]);

  // Initialize component
  useEffect(() => {
    setIsLoaded(true);
    particlesRef.current = initializeParticles();

    // Start animation
    animationRef.current = requestAnimationFrame(animateParticles);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initializeParticles, animateParticles]);

  // Responsive grid background style
  const gridBackgroundStyle = useMemo(() => {
    let gridSize;
    if (isMobile) {
      gridSize = GRID_SIZE_MOBILE;
    } else if (isTablet) {
      gridSize = GRID_SIZE_TABLET;
    } else {
      gridSize = GRID_SIZE_DESKTOP;
    }

    return {
      backgroundImage: `
        linear-gradient(#28A3B9 1px, transparent 1px),
        linear-gradient(90deg, #28A3B9 1px, transparent 1px)
      `,
      backgroundSize: `${gridSize}px ${gridSize}px`,
    };
  }, [isMobile, isTablet]);

  // Responsive font sizes
  const getFontSizes = () => {
    if (isMobile) {
      return {
        heading1: "text-4xl",
        heading2: "text-5xl",
        subtitle: "text-base",
        body: "text-sm",
        small: "text-xs",
      };
    } else if (isTablet) {
      return {
        heading1: "text-5xl",
        heading2: "text-6xl",
        subtitle: "text-lg",
        body: "text-base",
        small: "text-sm",
      };
    } else {
      return {
        heading1: "text-5xl sm:text-6xl",
        heading2: "text-6xl lg:text-7xl",
        subtitle: "text-lg",
        body: "text-base",
        small: "text-sm",
      };
    }
  };

  const fontSizes = getFontSizes();

  // Animated text words
  const textWords = ["code", "create", "innovate"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (!animateText) return;

    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % textWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [animateText, textWords.length]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen h-auto md:h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50/5 to-white"
      aria-label="Hero Section"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={gridBackgroundStyle}
        aria-hidden="true"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particlesRef.current.map((particle) => (
          <span
            key={particle.id}
            className="absolute rounded-full bg-[#28A3B9] transition-transform duration-500 ease-out"
            style={{
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              left: `${particle.x * 100}%`,
              top: `${particle.y * 100}%`,
              transform: `translate(${particle.offsetX || 0}px, ${particle.offsetY || 0}px)`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative h-full min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className={`grid grid-cols-1 ${isDesktop ? 'lg:grid-cols-2' : ''} gap-8 lg:gap-12 xl:gap-20 items-center`}>
            {/* Left Column - Main Content */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">
              {/* Main Heading with Animation */}
              <div className="space-y-4 sm:space-y-6">
                <h1
                  className={`font-bold leading-tight sm:leading-[1.1] text-gray-900 text-left ${fontSizes.heading1}`}
                >
                  <span
                    className={`block transition-all duration-1000 ${animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                  >
                    Code. Create.
                  </span>
                  <span
                    className={`block transition-all duration-1000 delay-300 ${animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                  >
                    IN
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28A3B9] via-[#36B6C9] to-[#45C9D9] ml-2">
                      NOVATE
                    </span>
                  </span>
                </h1>

                {/* Animated rotating text */}
                <div className="flex flex-col sm:flex-row items-start gap-2 mt-4 sm:mt-6 text-left">
                  <div className={`font-medium text-gray-700 ${fontSizes.subtitle}`}>
                    We're here to
                  </div>
                  <div className="relative h-6 sm:h-8 overflow-hidden text-left">
                    {textWords.map((word, index) => (
                      <div
                        key={word}
                        className={`absolute font-semibold text-[#28A3B9] transition-all duration-500 ${fontSizes.subtitle} ${index === currentWordIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-8"
                          }`}
                      >
                        {word}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subtitle */}
              <p className={`text-gray-600 leading-relaxed max-w-xl ${fontSizes.body}`}>
                Shaping tomorrow, today. At Athenura, we help businesses navigate change with
                clarity and confidence combining strategy, innovation, and technology to drive
                sustainable growth and long-term resilience in a digital-first world.
              </p>

              {/* CTA Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-[#28A3B9] to-[#36B6C9] text-white font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#28A3B9] focus:ring-opacity-50 flex items-center justify-center gap-2"
                  aria-label="See what we do"
                >
                  <span>See what we do</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Animated Content Box */}
            <div
              className={`relative bg-gradient-to-br from-white to-blue-50/20 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-1000 ${isDesktop ? 'delay-700' : 'delay-300'} ${animateText ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                } ${isDesktop ? '' : 'mt-8 lg:mt-12 order-2 lg:order-2'}`}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#28A3B9]/10 via-transparent to-[#45C9D9]/10 p-[1px]">
                <div className="absolute inset-0 rounded-2xl bg-white" />
              </div>

              <div className="relative z-10">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-3 h-3 rounded-full bg-[#28A3B9] animate-pulse opacity-80" />
                  <h3 className={`font-semibold text-gray-900 ${fontSizes.subtitle}`}>
                    Our Approach
                  </h3>
                </div>

                {/* Core Philosophy */}
                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      title: "Strategy-Driven Digital Excellence",
                      content: "At Athenura, we blend business strategy with cutting-edge technology to craft digital solutions that solve real-world problems and unlock new growth opportunities."
                    },
                    {
                      title: "Innovation with Purpose",
                      content: "We don't innovate for the sake of trends. Every product, platform, and experience we build is designed to deliver measurable impact, long-term value, and meaningful user engagement."
                    },
                    {
                      title: "Scalable & Future-Ready Solutions",
                      content: "Our solutions are engineered to scale with your business—secure, performance-driven, and adaptable to tomorrow's technologies and market demands."
                    },
                    {
                      title: "Client-Centric Collaboration",
                      content: "We work as an extension of your team, maintaining transparency, continuous communication, and agile execution to ensure your vision is brought to life exactly as intended."
                    }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2 sm:space-y-3">
                      <h4 className={`font-medium text-gray-900 ${fontSizes.small} sm:text-base`}>
                        {item.title}
                      </h4>
                      <p className={`text-gray-600 ${fontSizes.small}`}>
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HomeHero);