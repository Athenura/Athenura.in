import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Check, Zap, Smartphone, Layout, ShoppingBag } from "lucide-react";

// Updated Data with RICHER Background Colors (Level 100/200 tints)
const projects = [
  {
    id: 1,
    title: "FinanceFlow",
    category: "Fintech Mobile App",
    description: "A behavioral banking interface that helps users save by gamifying their spending habits. We reduced friction in transaction categorization by 40%.",
    stats: ["+45% Retention", "2.1M Downloads"],
    tags: ["React Native", "Node.js", "Animation"],
    // Colors
    accent: "text-teal-700",
    bgAccent: "bg-teal-600",
    gradient: "from-teal-500 to-cyan-500",
    // Enhanced Background: Mint/Teal (Visible)
    bgColor: "#ccfbf1", 
    mockupType: "mobile"
  },
  {
    id: 2,
    title: "Lumina Health",
    category: "Telemedicine Dashboard",
    description: "Reimagining the doctor-patient relationship. A clean, high-contrast interface designed for accessibility and rapid data visualization.",
    stats: ["WCAG AAA", "15% Faster Diagnosis"],
    tags: ["Next.js", "Tailwind", "D3.js"],
    // Colors
    accent: "text-blue-700",
    bgAccent: "bg-blue-600",
    gradient: "from-blue-500 to-indigo-500",
    // Enhanced Background: Sky Blue (Visible)
    bgColor: "#87CEE4",
    mockupType: "dashboard"
  },
  {
    id: 3,
    title: "Velvet Space",
    category: "Luxury E-Commerce",
    description: "An immersive shopping experience for high-end furniture. We utilized WebGL for 3D product previews and fluid transitions between collections.",
    stats: ["3x Conversion", "Award Winning UI"],
    tags: ["Three.js", "Shopify", "WebGL"],
    // Colors
    accent: "text-slate-900",
    bgAccent: "bg-slate-900",
    gradient: "from-slate-700 to-slate-900",
    // Enhanced Background: Cool Grey (Visible)
    bgColor: "#FEFCE8",
    mockupType: "ecom"
  }
];

const CaseStudies = () => {
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);

  // Track scroll to switch active project index
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * projects.length),
      projects.length - 1
    );
    setActiveProject(index);
  });

  return (
    <motion.section 
      ref={containerRef} 
      className="relative transition-colors duration-1000 ease-in-out"
      // Dynamically set background color based on active project
      style={{ backgroundColor: projects[activeProject].bgColor }}
    >
      
      {/* Subtle Grid Background - Increased opacity slightly for the darker bg */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
        >
            <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-8 bg-slate-900" />
                <span className="text-slate-900 font-bold tracking-widest uppercase text-xs">Selected Works</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Case Studies
            </h3>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* LEFT COLUMN: Sticky Details (Text) */}
          <div className="hidden lg:flex flex-col justify-center h-screen sticky top-0 flex-1">
             <ProjectDetails project={projects[activeProject]} />
          </div>

          {/* RIGHT COLUMN: Scrolling Visuals (Cards) */}
          <div className="flex-1 flex flex-col gap-24 lg:gap-40 pb-24">
             {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} />
             ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
};

/* ========================================================================
   SUB-COMPONENT: Sticky Text Details
======================================================================== */
const ProjectDetails = ({ project }) => {
    return (
        <div className="space-y-8 max-w-lg relative">
             {/* Animated Key for smooth transitions */}
            <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Category Label */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-slate-200/50 mb-6 backdrop-blur-sm shadow-sm">
                    <span className={`w-2 h-2 rounded-full ${project.bgAccent}`} />
                    <span className={`text-xs font-bold uppercase tracking-wider ${project.accent}`}>
                        {project.category}
                    </span>
                </div>

                <h2 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    {project.title}
                </h2>

                <p className="text-lg text-slate-700 leading-relaxed mb-8 font-medium">
                    {project.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8 border-t border-slate-900/10 pt-8">
                    {project.stats.map((stat, i) => (
                        <div key={i}>
                            <h4 className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">{stat.split(" ")[0]}</h4>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.split(" ").slice(1).join(" ")}</p>
                        </div>
                    ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-bold text-slate-600 bg-white/80 border border-slate-200/50 px-3 py-1.5 rounded-lg shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

/* ========================================================================
   SUB-COMPONENT: Visual Card
======================================================================== */
const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Parallax Effect
    const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <motion.div 
            ref={cardRef}
            style={{ scale }}
            className="w-full h-[60vh] min-h-[500px] sticky top-32 lg:static rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 border-[8px] border-white/80 group cursor-pointer bg-slate-100"
        >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-100`} />
            
            {/* Pattern Overlay */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* The Floating Mockup */}
            <motion.div 
                style={{ y }}
                className="absolute inset-0 flex items-center justify-center p-8"
            >
                {project.mockupType === "mobile" && <MockupMobile />}
                {project.mockupType === "dashboard" && <MockupDashboard />}
                {project.mockupType === "ecom" && <MockupEcom />}
            </motion.div>
            
            {/* Hover Reveal Button */}
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500 flex items-center justify-center">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl"
                >
                    <ArrowUpRight size={32} />
                </motion.div>
            </div>
            
            {/* Mobile Text Overlay */}
            <div className="lg:hidden absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/90 to-transparent pt-32">
                <div className="text-white/80 text-xs font-bold uppercase tracking-wider mb-2">{project.category}</div>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-200 line-clamp-2">{project.description}</p>
            </div>
        </motion.div>
    );
};


/* ========================================================================
   HELPER: CSS-Only Mockups (Styled for Teal/White Theme)
======================================================================== */

// 1. Mobile App Mockup (Teal/White)
const MockupMobile = () => (
    <div className="w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden relative rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20" />
        <div className="w-full h-full bg-slate-50 flex flex-col">
            {/* Header */}
            <div className="h-40 bg-teal-600 rounded-b-[2.5rem] p-6 pt-12 flex flex-col justify-between text-white shadow-lg relative z-10">
                <div className="flex justify-between items-center">
                     <div className="w-8 h-8 rounded-full bg-teal-500/50 flex items-center justify-center"><ArrowUpRight size={14}/></div>
                     <div className="w-8 h-8 rounded-full bg-white/20" />
                </div>
                <div>
                    <div className="text-teal-100 text-xs font-medium">Available Balance</div>
                    <div className="text-3xl font-bold">$24,500</div>
                </div>
            </div>
            {/* List */}
            <div className="p-6 space-y-4 flex-1">
                 {[1,2,3].map(i => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-white shadow-sm border border-slate-100">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i===1 ? 'bg-teal-100 text-teal-600' : 'bg-slate-100 text-slate-400'}`}>
                            {i===1 ? <Zap size={18}/> : <div className="w-4 h-4 rounded-full bg-current opacity-50"/>}
                        </div>
                        <div className="flex-1">
                            <div className="h-2.5 w-20 bg-slate-800 rounded mb-1.5" />
                            <div className="h-2 w-10 bg-slate-300 rounded" />
                        </div>
                        <div className="h-2.5 w-12 bg-slate-200 rounded" />
                    </div>
                 ))}
                 <div className="absolute bottom-6 right-6 w-14 h-14 bg-slate-900 rounded-full shadow-xl shadow-slate-900/30 flex items-center justify-center text-white">
                    <ArrowUpRight />
                 </div>
            </div>
        </div>
    </div>
);

// 2. Dashboard Mockup (Blue/White)
const MockupDashboard = () => (
    <div className="w-[95%] max-w-[550px] aspect-[16/10] bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col rotate-[2deg] group-hover:rotate-0 transition-transform duration-700 border border-slate-200">
        <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="ml-4 h-1.5 w-20 bg-slate-200 rounded-full" />
        </div>
        <div className="flex-1 flex bg-slate-50">
            <div className="w-16 border-r border-slate-200 bg-white flex flex-col items-center py-6 gap-6">
                <div className="w-8 h-8 rounded-lg bg-blue-600 shadow-lg shadow-blue-500/30" />
                <div className="w-6 h-6 rounded bg-slate-100" />
                <div className="w-6 h-6 rounded bg-slate-100" />
            </div>
            <div className="flex-1 p-6">
                <div className="flex gap-6 mb-6">
                    <div className="flex-1 h-24 rounded-2xl bg-white border border-slate-200 shadow-sm p-4">
                        <div className="w-8 h-8 rounded-full bg-blue-50 mb-2 text-blue-500 flex items-center justify-center"><Layout size={14}/></div>
                        <div className="h-2 w-12 bg-slate-200 rounded" />
                    </div>
                    <div className="flex-1 h-24 rounded-2xl bg-blue-600 shadow-lg shadow-blue-500/20 p-4">
                        <div className="w-8 h-8 rounded-full bg-white/20 mb-2" />
                        <div className="h-2 w-12 bg-white/40 rounded" />
                    </div>
                </div>
                <div className="h-32 rounded-2xl bg-white border border-slate-200 shadow-sm p-4 flex items-end gap-3 pb-0 overflow-hidden">
                     {[40, 70, 45, 90, 65, 85, 55].map((h, i) => (
                        <div key={i} className="flex-1 bg-slate-100 rounded-t-md relative group/bar">
                            <div className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-md transition-all duration-500" style={{ height: `${h}%` }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// 3. E-Commerce Mockup (Black/White - Monochrome Luxury)
const MockupEcom = () => (
    <div className="w-[85%] max-w-[420px] aspect-[4/5] bg-white rounded-sm shadow-2xl p-8 flex flex-col items-center text-center relative overflow-hidden rotate-[-3deg] group-hover:rotate-0 transition-transform duration-700">
        <div className="text-[10px] tracking-[0.4em] font-bold text-slate-400 uppercase mb-8">Velvet</div>
        <div className="w-48 h-48 rounded-full bg-slate-100 mb-8 relative z-10 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
             <ShoppingBag size={48} className="text-slate-300" />
        </div>
        <div className="text-3xl font-serif text-slate-900 z-10 font-medium">Lounge Chair</div>
        <div className="text-slate-500 mt-2 text-sm z-10 font-mono">$850.00</div>
        <button className="mt-8 px-8 py-3 bg-slate-900 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-slate-700 transition-colors z-10">
            Add to Cart
        </button>
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-0" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-slate-50 rounded-tr-[80px] -z-0" />
    </div>
);

export default CaseStudies;