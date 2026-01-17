import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, Award } from "lucide-react";

/* ===============================
   MAIN SECTION
================================ */
const AwardsSection = () => {
    const targetRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    /* Theme Colors */
    const theme = {
        primary: "#28A3B9",
        secondary: "#1E7A86",
        accent1: "#378892",
        accent2: "#3AA5C3",
        lightBg: "#ffffff",
        darkText: "#0f172a",
        border: "#e2e8f0",
    };

    /* Awards Data */
const awards = [
  {
    title: "Platform Launch & Early Adoption",
    org: "Athenura Milestone",
    desc: "Launched the Athenura platform with core internship workflows, mentor onboarding, and student registration, marking the foundation of a structured early-career learning ecosystem.",
    year: "2026",
    color: theme.primary,
    position: "left",
  },
  {
    title: "Positive Intern Feedback",
    org: "Intern Community",
    desc: "Received consistent and constructive feedback from early interns highlighting clarity in task assignments, mentor availability, and meaningful hands-on project experience.",
    year: "2026",
    color: theme.secondary,
    position: "right",
  },
  {
    title: "Secure Platform Foundation",
    org: "Internal Review",
    desc: "Built the platform with a strong focus on security, including role-based access control, protected user data, and reliable system architecture from the initial release.",
    year: "2026",
    color: theme.accent1,
    position: "left",
  },
  {
    title: "Industry-Aligned Learning Approach",
    org: "Program Design",
    desc: "Designed internship programs around real-world workflows and practical deliverables to help learners develop job-ready skills relevant to modern technology roles.",
    year: "2026",
    color: theme.accent2,
    position: "right",
  },
  {
    title: "Mentor-Led Learning Model",
    org: "Learning Framework",
    desc: "Introduced a mentor-guided learning structure where industry professionals support interns through regular reviews, feedback cycles, and practical guidance.",
    year: "2026",
    color: theme.primary,
    position: "left",
  },
  {
    title: "Continuous Platform Improvements",
    org: "Product Development",
    desc: "Actively iterated on platform features based on user feedback, improving usability, performance, and overall learning experience during the early growth phase.",
    year: "2026",
    color: theme.secondary,
    position: "right",
  },
];




    return (
        <section
            ref={targetRef}
            className="relative bg-white font-sans"
            style={{ height: isMobile ? '400vh' : '500vh' }}
        >
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* ================= BACKGROUND LAYER ================= */}
                <div className="absolute inset-0 flex items-center justify-center z-0 bg-white overflow-hidden">
                    
                    {/* 1. Drifting Grid Animation */}
                    <motion.div 
                        className="absolute inset-0 opacity-[0.03]"
                        animate={{ 
                            backgroundPosition: ["0px 0px", "40px 40px"] 
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                        style={{
                            backgroundImage: `linear-gradient(${theme.secondary} 1px, transparent 1px), linear-gradient(90deg, ${theme.secondary} 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* 2. Breathing/Floating Blobs */}
                    <motion.div
                        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-10"
                        style={{ backgroundColor: theme.primary }}
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-10"
                        style={{ backgroundColor: theme.secondary }}
                        animate={{
                            scale: [1, 1.1, 1],
                            x: [0, -30, 0],
                            y: [0, -50, 0],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />

                    {/* 3. Sticky Title Content */}
                    <div className="relative z-10 text-center px-6 max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >

                            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight">
                                Recognized for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E7A86] via-[#28A3B9] to-[#5EEAD4]">
                                    Excellence & Impact
                                </span>
                            </h1>

                            <p className="text-slate-500 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
                                Building the future of internships with learners, mentors, and real-world outcomes at the core.
                            </p>
                        </motion.div>
                    </div>
                </div>


                {/* ================= CARDS CONTAINER ================= */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="relative w-full max-w-md md:max-w-2xl lg:max-w-4xl px-4"
                        style={{ height: isMobile ? '400px' : '350px' }}>
                        {awards.map((award, index) => {
                            const step = 1 / awards.length;
                            const start = index * step;
                            const end = start + step * 0.8;

                            return (
                                <AwardCard
                                    key={index}
                                    data={award}
                                    index={index}
                                    progress={scrollYProgress}
                                    range={[start, end]}
                                    isMobile={isMobile}
                                    theme={theme}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ===============================
   AWARD CARD SUB-COMPONENT
================================ */
const AwardCard = ({ data, index, progress, range, isMobile, theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [start, end] = range;

    const enterEnd = start + (end - start) * 0.2;
    const exitStart = start + (end - start) * 0.8;

    // Mobile: More vertical movement, Desktop: Less movement
    const yEnter = isMobile ? "120vh" : "90vh";
    const yExit = isMobile ? "-120vh" : "-90vh";

    const y = useTransform(
        progress,
        [start, enterEnd, exitStart, end],
        [yEnter, "0vh", "0vh", yExit]
    );

    const xOffset = data.position === "left" ? (isMobile ? "-3%" : "-5%") : (isMobile ? "3%" : "5%");

    const x = useTransform(
        progress,
        [start, enterEnd, exitStart, end],
        [xOffset, "0%", "0%", xOffset]
    );

    const opacity = useTransform(
        progress,
        [start, enterEnd, exitStart, end],
        isOpen ? [1, 1, 1, 1] : [0, 1, 1, 0]
    );

    const scale = useTransform(
        progress,
        [start, enterEnd, exitStart, end],
        [0.9, 1, 1, 0.9]
    );

    return (
        <motion.div
            style={{
                y,
                x,
                opacity,
                scale,
                zIndex: index + 10,
                position: 'absolute',
                width: '100%',
                height: '100%'
            }}
            className="pointer-events-auto flex items-center justify-center"
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <motion.div
                initial={{ maxHeight: isMobile ? 200 : 180 }}
                animate={{ maxHeight: isOpen ? (isMobile ? 400 : 350) : (isMobile ? 200 : 180) }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative overflow-hidden cursor-pointer w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white border border-slate-200 shadow-xl rounded-2xl md:rounded-3xl"
                style={{
                    boxShadow: `0 20px 40px -10px ${data.color}20`, // Colored shadow based on award color
                }}
            >
                {/* Left accent border */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-1.5"
                    style={{ backgroundColor: data.color }}
                />

                {/* Card content */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                    {/* Header with year and organization */}
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <div className="inline-flex items-center px-3 py-1 rounded-full mb-2"
                                style={{ backgroundColor: `${data.color}15` }}>
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider"
                                    style={{ color: data.color }}>
                                    {data.org}
                                </span>
                            </div>
                            <div className="text-sm text-slate-400 font-medium ml-1">
                                {data.year}
                            </div>
                        </div>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className="text-slate-300 bg-slate-50 p-2 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-[#28A3B9] transition-colors">
                        {data.title}
                    </h3>

                    {/* Expandable Content */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                                className="mt-auto pt-6 border-t border-slate-100"
                            >
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                                    {data.desc}
                                </p>

                                {/* Progress indicator */}
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1 flex-1">
                                        {Array.from({ length: 4 }).map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-1 rounded-full transition-all ${i === index ? 'bg-[#28A3B9]' : 'bg-slate-100'
                                                    }`}
                                                style={{
                                                    width: i === index ? '32px' : '8px',
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <div className="text-xs text-slate-400 font-medium">
                                        Award {index + 1}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Click hint (when collapsed) */}
                    {!isOpen && (
                        <div className="mt-auto pt-4">
                            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                <span>Tap to expand</span>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AwardsSection;