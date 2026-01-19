import React, { useEffect, useRef, useState } from "react";

// ----------------------------------------------------------------------
// 1. UTILITY: Text Decryption Animation
// ----------------------------------------------------------------------
const DecryptingText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState("");
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return <span className={className}>{displayText}</span>;
};

// ----------------------------------------------------------------------
// 2. BACKGROUND: Magnetic Dot Field (Updated Colors)
// ----------------------------------------------------------------------
const MagneticField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let width, height;
        let mouse = { x: -1000, y: -1000 };
        let dots = [];

        const spacing = 35;
        const effectRadius = 250;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initDots();
        };

        const initDots = () => {
            dots = [];
            for (let x = 0; x < width; x += spacing) {
                for (let y = 0; y < height; y += spacing) {
                    dots.push({ x, y, originX: x, originY: y, vx: 0, vy: 0 });
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            // Theme Color #2093AB with opacity
            ctx.fillStyle = "rgba(32, 147, 171, 0.25)";

            dots.forEach((dot) => {
                const dx = mouse.x - dot.x;
                const dy = mouse.y - dot.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < effectRadius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (effectRadius - dist) / effectRadius;
                    const push = force * 25;

                    dot.vx -= Math.cos(angle) * push;
                    dot.vy -= Math.sin(angle) * push;
                }

                dot.vx += (dot.originX - dot.x) * 0.05;
                dot.vy += (dot.originY - dot.y) * 0.05;

                dot.vx *= 0.85;
                dot.vy *= 0.85;

                dot.x += dot.vx;
                dot.y += dot.vy;

                const size = Math.max(0.5, 2.5 - dist / 80);
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        resize();
        animate();

        return () => window.removeEventListener("resize", resize);
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

// ----------------------------------------------------------------------
// 3. COMPONENT: 3D Parallax Image Stack
// ----------------------------------------------------------------------
const ParallaxGallery = () => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const rotateY = ((clientX - centerX) / centerX) * 8;
        const rotateX = ((centerY - clientY) / centerY) * 8;

        setRotate({ x: rotateX, y: rotateY });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center perspective-1000 group"
        >
            <div
                className="relative w-[300px] h-[400px] transition-transform duration-100 ease-out preserve-3d"
                style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
            >
                {/* Back Layer - Theme Gradient #2093AB to #1E7A86 */}
                <div className="absolute top-[-40px] left-[-60px] w-full h-full rounded-2xl bg-gradient-to-br from-[#2093AB] to-[#1E7A86] opacity-20 translate-z-[-50px] transition-transform duration-500 group-hover:translate-z-[-80px]" />

                {/* Middle Layer */}
                <div className="absolute bottom-[-30px] right-[-50px] w-3/4 h-1/2 rounded-xl overflow-hidden shadow-2xl border-4 border-white translate-z-[20px] transition-transform duration-500 group-hover:translate-z-[40px] z-10">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                        alt="Team collaboration"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>

                {/* Front Layer */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(32,147,171,0.2)] border-4 border-white translate-z-[50px] transition-transform duration-500 group-hover:translate-z-[80px] z-20 bg-white">
                    <img
                        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
                        alt="Visionary Leader"
                        className="w-full h-full object-cover"
                    />

                    {/* Badge Overlay */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-lg border-l-4 shadow-lg" style={{ borderLeftColor: '#2093AB' }}>
                        <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Founded</p>
                        <p className="text-xl font-bold text-slate-900">2026</p>
                    </div>
                </div>

                {/* Floating Decorative Elements using Theme Colors */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#2093AB] rounded-full blur-[40px] opacity-30 animate-pulse translate-z-[-20px]" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#1E7A86] rounded-full blur-[50px] opacity-20 animate-pulse delay-700 translate-z-[-20px]" />
            </div>

            <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .translate-z-[-50px] { transform: translateZ(-50px); }
        .translate-z-[-20px] { transform: translateZ(-20px); }
        .translate-z-[20px] { transform: translateZ(20px); }
        .translate-z-[50px] { transform: translateZ(50px); }
        .group:hover .translate-z-[-80px] { transform: translateZ(-80px) translateX(-10px); }
        .group:hover .translate-z-[40px] { transform: translateZ(40px) translateX(10px); }
        .group:hover .translate-z-[80px] { transform: translateZ(80px); }
      `}</style>
        </div>
    );
};

// ----------------------------------------------------------------------
// 4. MAIN HERO SECTION
// ----------------------------------------------------------------------
const AboutHero = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = 12;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-white overflow-hidden text-slate-900 font-sans">

            {/* Background Interactive Layer */}
            <MagneticField />

            {/* Decorative Grid Lines - Very subtle on white */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

            <div className="container relative z-10 mx-auto px-6 md:px-12 h-full flex flex-col lg:flex-row items-center justify-center min-h-screen pt-20 lg:pt-0 gap-12 lg:gap-0">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                        We are <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2093AB] via-[#2093AB] to-[#1E7A86]">
                            <DecryptingText text="ATHENURA ...." />
                        </span> <br />
                        Building the Future.
                    </h1>

                    <p className="mt-6 text-lg text-slate-600 max-w-lg leading-relaxed">
                        At <span className="font-semibold text-slate-800">Athenura</span>, we design intelligent
                        digital solutions that blend technology, innovation, and purpose.
                        Driven by logic and guided by humanity, we build scalable systems that
                        empower businesses, creators, and the next generation of innovators.
                    </p>

                    <div className="pt-8 flex gap-4">
                        {/* Primary Button - Dark Teal Background */}
                        <button className="group relative px-8 py-4 text-white rounded-xl font-bold overflow-hidden transition-shadow shadow-lg hover:shadow-xl"
                            style={{ backgroundColor: '#1E7A86' }}>
                            <div className="absolute inset-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                                style={{ backgroundColor: '#2093AB' }} />
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Career
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </button>


                    </div>
                </div>

                {/* Right Visuals */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <ParallaxGallery />
                </div>

            </div>

            <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
        </section>
    );
};

export default AboutHero;