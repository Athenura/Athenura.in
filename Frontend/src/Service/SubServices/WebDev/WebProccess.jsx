import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  PenTool, 
  Code, 
  ShieldCheck, 
  Rocket, 
  Check
} from "lucide-react";

/* ==========================================
   DATA: PROCESS STEPS
========================================== */
const PROCESS_STEPS = [
  {
    id: 1,
    title: "Discovery & Blueprint",
    desc: "We dive deep into your business goals. We define user personas, technical requirements, and create a comprehensive roadmap before writing a single line of code.",
    icon: <Search size={24} />,
    deliverables: ["Tech Spec Doc", "Competitor Analysis", "MVP Roadmap"],
  },
  {
    id: 2,
    title: "UX/UI Design",
    desc: "We visualize the solution. Our designers create wireframes and high-fidelity prototypes to ensure the user journey is intuitive and brand-aligned.",
    icon: <PenTool size={24} />,
    deliverables: ["Figma Prototypes", "Design System", "User Flows"],
  },
  {
    id: 3,
    title: "Agile Development",
    desc: "The build phase. We work in 2-week sprints, delivering testable features regularly. You get full transparency into the codebase and progress.",
    icon: <Code size={24} />,
    deliverables: ["Clean Code", "Bi-weekly Sprints", "Staging Environment"],
  },
  {
    id: 4,
    title: "QA & Testing",
    desc: "Zero tolerance for bugs. We perform rigorous unit, integration, and user acceptance testing (UAT) to ensure stability across all devices.",
    icon: <ShieldCheck size={24} />,
    deliverables: ["Bug Reports", "Stress Testing", "Security Audit"],
  },
  {
    id: 5,
    title: "Launch & Scale",
    desc: "We deploy to a secure cloud environment (AWS/Vercel). Post-launch, we monitor performance and optimize for user growth.",
    icon: <Rocket size={24} />,
    deliverables: ["CI/CD Setup", "Live Deployment", "Performance Monitoring"],
  },
];

/* ==========================================
   MAIN COMPONENT
========================================== */
const DevelopmentProcess = () => {
  return (
    // CHANGE 1: Reduced py-24 to py-16
    <section className="relative py-16 bg-slate-50 font-sans overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header --- */}
        {/* CHANGE 2: Reduced mb-20 to mb-12 */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              From Concept to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                Code & Launch
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Our proven agile methodology ensures transparency, flexibility, and high-quality delivery at every stage of the lifecycle.
            </p>
          </motion.div>
        </div>

        {/* --- Timeline Container --- */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 md:translate-x-0" />

          {/* Steps */}
          {/* CHANGE 3: Reduced space-y-12/24 to space-y-6/10 */}
          <div className="space-y-6 md:space-y-10">
            {PROCESS_STEPS.map((step, index) => (
              <TimelineItem key={step.id} data={step} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================
   TIMELINE ITEM SUB-COMPONENT
========================================== */
const TimelineItem = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-center md:justify-between gap-6 ${isEven ? "" : "md:flex-row-reverse"}`}
    >
      
      {/* 1. The Content Card */}
      <div className="w-full md:w-[45%] pl-16 md:pl-0">
        {/* CHANGE 4: Reduced padding from p-8 to p-6 for a tighter card feel */}
        <div className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 hover:border-teal-200 transition-all duration-300 relative">
          
          {/* Decorative Number Background */}
          <div className="absolute top-4 right-6 text-6xl font-extrabold text-slate-100 opacity-50 group-hover:text-teal-50 group-hover:opacity-100 transition-colors pointer-events-none select-none">
             0{data.id}
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors relative z-10">
            {data.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-4 relative z-10">
            {data.desc}
          </p>
          
          {/* Deliverables Pills */}
          <div className="flex flex-wrap gap-2 relative z-10">
            {data.deliverables.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-1 px-2 py-1 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold uppercase tracking-wide text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-600 group-hover:border-teal-100 transition-colors">
                <Check size={10} /> {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. The Center Node (Connector) */}
      <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-slate-50 border-4 border-white rounded-full shadow-lg z-20">
         <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white shadow-inner shadow-black/10">
            {/* Cloned the icon with a smaller size to fit the tighter node */}
            {React.cloneElement(data.icon, { size: 16 })}
         </div>
         {/* Pulse Effect */}
         <div className="absolute inset-0 rounded-full border border-teal-500 opacity-20 animate-ping" />
      </div>

      {/* 3. Empty Spacer for Layout Balance (Desktop only) */}
      <div className="hidden md:block w-[45%]" />

    </motion.div>
  );
};

export default DevelopmentProcess;