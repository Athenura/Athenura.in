import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Search,
  PenTool,
  Cpu,
  CheckCircle2,
  Rocket,
  Terminal,
  ArrowRight
} from "lucide-react";

/* ==========================================
   DATA: TECHNOLOGY STACK (Unified Theme)
========================================== */
const TECH_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    icon: <Code2 size={24} />,
    description: "Responsive, accessible, and highly interactive user interfaces.",
    stack: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "backend",
    title: "Backend & API",
    icon: <Server size={24} />,
    description: "Robust logic layers capable of handling high-concurrency requests.",
    stack: ["Node.js", "Express", "Django", "GraphQL"],
  },
  {
    id: "database",
    title: "Database Engineering",
    icon: <Database size={24} />,
    description: "Optimized schemas for data integrity and rapid retrieval.",
    stack: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    icon: <Cloud size={24} />,
    description: "Automated pipelines ensuring zero-downtime deployments.",
    stack: ["AWS", "Docker", "Vercel", "CI/CD Pipelines"],
  },
];

/* ==========================================
   DATA: OUR PROCESS
========================================== */
const PROCESS_STEPS = [
  {
    id: 1,
    title: "Discovery",
    desc: "We analyze requirements and define technical KPIs.",
    icon: <Search size={18} />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Wireframing and prototyping for intuitive user journeys.",
    icon: <PenTool size={18} />,
  },
  {
    id: 3,
    title: "Development",
    desc: "Agile sprints where architecture meets clean code.",
    icon: <Terminal size={18} />,
  },
  {
    id: 4,
    title: "QA & Testing",
    desc: "Rigorous unit testing and performance stress-tests.",
    icon: <CheckCircle2 size={18} />,
  },
  {
    id: 5,
    title: "Deployment",
    desc: "Live launch on secure servers with 24/7 monitoring.",
    icon: <Rocket size={18} />,
  },
];

/* ==========================================
   MAIN COMPONENT
========================================== */
const TechAndProcess = () => {
  return (
    <div className="w-full bg-white font-sans">
      <TechnologiesSection />
      <ProcessSection />
    </div>
  );
};

/* ==========================================
   SECTION 1: TECHNOLOGIES
========================================== */
const TechnologiesSection = () => {
  return (
    <section className="relative py-8 bg-white overflow-hidden">
      
      {/* Background Texture - Matches Hero */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sky-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              Our Tech Stack
            </span>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Built on a <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-sky-600">Proven Foundation</span>
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed">
              We rely on a stable, modern ecosystem to ensure your software is scalable, secure, and maintainable for years to come.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {TECH_CATEGORIES.map((cat, index) => (
            <TechCard key={cat.id} data={cat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-sky-100/50 hover:border-sky-200 transition-all duration-300 cursor-default"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
        
        {/* Icon */}
        <div className="shrink-0">
          <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 shadow-sm group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
            {data.icon}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
            {data.title}
          </h4>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            {data.description}
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2">
            {data.stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-600 shadow-sm group-hover:border-sky-200 group-hover:text-sky-700 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-2" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ==========================================
   SECTION 2: PROCESS
========================================== */
const ProcessSection = () => {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-slate-500 font-bold tracking-widest uppercase text-xs mb-3 block">
              Workflow
            </span>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              From Concept to <span className="text-sky-600">Deployment</span>
            </h3>
            <p className="text-slate-500 text-lg">
              A transparent, agile methodology designed to mitigate risk and deliver value at every stage.
            </p>
          </motion.div>
        </div>

        {/* --- Process Timeline Container --- */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-0 w-full h-0.5 bg-slate-200 rounded-full" />
          
          {/* Connecting Line (Mobile) */}
          <div className="absolute lg:hidden top-0 bottom-0 left-[27px] w-0.5 bg-slate-200 rounded-full" />

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStep key={step.id} step={step} index={index} total={PROCESS_STEPS.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ step, index, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex lg:flex-col items-start lg:items-center gap-6 lg:gap-0 lg:text-center group"
    >
      {/* Node / Circle */}
      <div className="relative z-10 shrink-0">
        <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400 shadow-sm transition-all duration-500 group-hover:border-sky-500 group-hover:text-sky-600 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] group-hover:scale-110">
          {step.icon}
        </div>
        
        {/* Step Badge */}
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-md">
          {index + 1}
        </div>
      </div>

      {/* Text Content */}
      <div className="pt-2 lg:pt-8 flex-1">
        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
          {step.title}
        </h4>
        <p className="text-sm text-slate-500 leading-relaxed max-w-[250px] lg:mx-auto">
          {step.desc}
        </p>
      </div>

      {/* Arrow (Desktop only, not on last item) */}
      {index !== total - 1 && (
        <div className="hidden lg:block absolute top-[22px] -right-[50%] left-[50%] z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="w-full flex justify-center">
             <ArrowRight size={16} className="text-sky-300 animate-pulse" />
           </div>
        </div>
      )}
    </motion.div>
  );
};

export default TechAndProcess;