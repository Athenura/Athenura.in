import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";

const HomeHero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // State
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Configuration
  const theme = useMemo(() => ({
    primary: "#28A3B9",
    secondary: "#36B6C9",
    accent: "#45C9D9",
    text: "#1e293b", // Slate 800
    bg: "#f8fafc",   // Slate 50
  }), []);

  const textWords = ["Innovation", "Future", "Excellence", "Growth"];

  // Rotating Text Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % textWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [textWords.length]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ----------------------------------------------------------------------
  // Canvas Logic: Optimized for High DPI Screens
  // ----------------------------------------------------------------------
  const drawJelly = useCallback((ctx, width, height, time) => {
    if (!ctx || width === 0 || height === 0) return;

    ctx.clearRect(0, 0, width, height);

    // Scaling for Retina displays
    const centerX = width / 2;
    const centerY = height / 2;
    // Dynamic sizing based on container
    const baseRadius = Math.min(width, height) * 0.35;

    // Config
    const points = 20; // Smoother
    const amplitude = baseRadius * 0.15;
    const speed = 1.2;

    // --- Layer 1: Outer Glow (Soft) ---
    const glowGradient = ctx.createRadialGradient(centerX, centerY, baseRadius * 0.5, centerX, centerY, baseRadius * 1.5);
    glowGradient.addColorStop(0, "rgba(40, 163, 185, 0.2)");
    glowGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.beginPath();
    ctx.arc(centerX, centerY, baseRadius * 1.5, 0, Math.PI * 2);
    ctx.fillStyle = glowGradient;
    ctx.fill();

    // --- Layer 2: Main Jelly Blob ---
    ctx.beginPath();
    // Gradient for the blob
    const blobGradient = ctx.createLinearGradient(centerX - baseRadius, centerY - baseRadius, centerX + baseRadius, centerY + baseRadius);
    blobGradient.addColorStop(0, theme.primary);
    blobGradient.addColorStop(1, theme.accent);

    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2;
      // Combine multiple sine waves for organic movement
      const wave1 = Math.sin(time * speed + angle * 3);
      const wave2 = Math.cos(time * speed * 0.5 + angle * 5);
      const distortion = (wave1 + wave2) * amplitude * 0.5;

      const r = baseRadius + distortion;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;

      if (i === 0) ctx.moveTo(x, y);
      else {
        // Quadratic curve for smoother edges
        const prevAngle = ((i - 1) / points) * Math.PI * 2;
        const prevWave1 = Math.sin(time * speed + prevAngle * 3);
        const prevWave2 = Math.cos(time * speed * 0.5 + prevAngle * 5);
        const prevDist = (prevWave1 + prevWave2) * amplitude * 0.5;
        const prevR = baseRadius + prevDist;
        const prevX = centerX + Math.cos(prevAngle) * prevR;
        const prevY = centerY + Math.sin(prevAngle) * prevR;

        const cpX = (prevX + x) / 2;
        const cpY = (prevY + y) / 2;
        ctx.quadraticCurveTo(prevX, prevY, cpX, cpY);
      }
    }

    ctx.closePath();
    ctx.fillStyle = blobGradient;
    // Add glass-like shine
    ctx.shadowColor = theme.secondary;
    ctx.shadowBlur = 30;
    ctx.fill();
    ctx.shadowBlur = 0;

    // --- Layer 3: Inner Fluid Details (Particles) ---
    for (let i = 0; i < 8; i++) {
      const pAngle = (time * 0.2 + (i * Math.PI) / 4) % (Math.PI * 2);
      const pDist = baseRadius * 0.6 + Math.sin(time * 2 + i) * 10;
      const px = centerX + Math.cos(pAngle) * pDist;
      const py = centerY + Math.sin(pAngle) * pDist;

      ctx.beginPath();
      ctx.arc(px, py, 4 + Math.sin(time + i) * 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.fill();
    }

  }, [theme]);

  const animate = useCallback(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    // Handle High DPI (Retina) Rendering
    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();

    // Only resize if dimensions change or canvas is blank
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    }

    const time = Date.now() * 0.001;
    drawJelly(ctx, rect.width, rect.height, time);

    animationRef.current = requestAnimationFrame(animate);
  }, [drawJelly]);

  useEffect(() => {
    setIsLoaded(true);
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate]);

  // ----------------------------------------------------------------------
  // Render
  // ----------------------------------------------------------------------
  return (
    <section
      className="relative w-full min-h-[100dvh] bg-[#f8fafc] overflow-hidden flex flex-col font-sans"
      aria-label="Hero Section"
    >
      {/* 1. Dynamic Background Mesh */}
      <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#28A3B9]/20 blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#45C9D9]/20 blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#36B6C9]/20 blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* 2. Grid Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#28A3B9 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Section: Text Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 py-8 lg:py-0 flex-1 flex flex-col justify-center">
        <div className="flex flex-col space-y-8">

          {/* Main Heading */}
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {/* Line 1 */}
              <span className="block overflow-hidden mt-4">
                <span
                  className={`block transform text-[#116d7a] transition-transform duration-700 ease-out ${isLoaded ? "translate-y-0" : "translate-y-full"
                    }`}
                >
                  Designing
                </span>
              </span>

              {/* Line 2 */}
              <span className="block overflow-hidden">
                <span
                  className={`block transform transition-transform duration-700 ease-out delay-100 ${isLoaded ? "translate-y-0" : "translate-y-full"
                    }`}
                >
                  The Digital
                </span>
              </span>

              {/* Rotating Word */}
              <span className="relative block h-[1.2em] overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-[#087b90] to-[#45C9D9] bg-clip-text bg-transparent text-[#116d7a] font-extrabold px-1 rounded-md">
                  {textWords.map((word, i) => (
                    <span
                      key={i}
                      className={`absolute inset-0 flex items-center transition-all duration-500 ease-in-out ${i === currentWordIndex
                        ? "opacity-100 translate-y-0"
                        : i < currentWordIndex
                          ? "opacity-0 -translate-y-full"
                          : "opacity-0 translate-y-full"
                        }`}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className={`text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We transform complex challenges into elegant digital solutions.
            Top-tier tech meets strategic thinking to drive your business forward.
          </p>

          {/* Trust/Stats Bar - Desktop Only */}
          <div className="hidden lg:flex items-center gap-8 pt-8 border-t border-slate-200/60 mt-8">
            {[
              { number: "200+", label: "Projects" },
              { number: "98%", label: "Satisfaction" },
              { number: "15", label: "Awards" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mobile Stats - Hidden on desktop */}
          <div className="lg:hidden grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/60 mt-4">
            {[
              { number: "200+", label: "Projects" },
              { number: "98%", label: "Satisfaction" },
              { number: "15", label: "Awards" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-xl font-bold text-slate-900">{stat.number}</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Unified Jelly Effect Canvas 
         - Mobile: Relative flow, height 40vh, sits at bottom
         - Desktop: Absolute right, height 100%, width 50%
      */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-[40vh] min-h-[300px] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:h-full lg:w-1/2 lg:min-h-0 flex-shrink-0"
      >
        <canvas
          ref={canvasRef}
          className="block w-full h-full"
        />

        {/* Floating Glass Card - Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white backdrop-blur-md border border-white/20 p-1 rounded-full shadow-xl animate-float">
          <img src="/AthenuraCircle.png" alt="Athenura" className="h-15 sm:h-20" />
        </div>
      </div>

      {/* Global Animation Styles */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes float {
          0% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
          100% { transform: translate(-50%, -50%) translateY(0px); }
        }
        @keyframes float-simple {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
        .animate-float {
             animation: float-simple 6s ease-in-out infinite;
        }
        .animate-float-delayed {
             animation: float-simple 7s ease-in-out infinite;
             animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default React.memo(HomeHero);