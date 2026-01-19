import React from "react";
import { motion } from "framer-motion";
import { 
  RefreshCw,  
  CloudCog, 
  LineChart, 
  Layers, 
  Lock,
  ArrowUpRight,
  Brain,
  Package,
  Workflow,
  ShieldCheck,
  Plug,
  Server
} from "lucide-react";

/* ==========================================
   DATA: ENTERPRISE MODULES
   (Reordered for perfect Grid Alignment)
========================================== */
const SOLUTIONS = [
  // ROW 1 (2 + 1)
  {
    id: "legacy",
    title: "Legacy Modernization",
    subtitle: "Transform & Migrate",
    desc: "We refactor monolithic legacy systems into scalable microservices architectures without disrupting business continuity.",
    icon: <RefreshCw size={28} />,
    tech: ["Mainframe to Cloud", "Microservices", "Java/.NET Migration"],
    colSpan: "md:col-span-2",
  },
  {
    id: "erp",
    title: "Custom ERP & CRM",
    subtitle: "Operational Efficiency",
    desc: "Bespoke resource planning tools tailored to your unique workflows.",
    icon: <Layers size={28} />,
    tech: ["Supply Chain", "HRM Modules", "Sales Automation"],
    colSpan: "md:col-span-1",
  },

  // ROW 2 (1 + 2)
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    subtitle: "DevOps & SRE",
    desc: "End-to-end cloud adoption with resilient, cost-optimized architectures.",
    icon: <CloudCog size={28} />,
    tech: ["AWS / Azure / GCP", "Kubernetes", "Terraform"],
    colSpan: "md:col-span-1",
  },
  {
    id: "data",
    title: "Data Intelligence (BI)",
    subtitle: "Actionable Insights",
    desc: "Centralize fragmented data into intelligent systems with real-time analytics, forecasting, and decision support dashboards.",
    icon: <LineChart size={28} />,
    tech: ["Data Lakes", "PowerBI / Tableau", "ETL Pipelines"],
    colSpan: "md:col-span-2",
  },

  // ROW 3 (2 + 1)
  {
    id: "automation",
    title: "Process Automation",
    subtitle: "Efficiency at Scale",
    desc: "Automate complex business workflows using intelligent systems (RPA) that reduce cost, human errors, and manual effort significantly.",
    icon: <Workflow size={28} />,
    tech: ["RPA", "Workflow Engines", "Rule-Based Logic"],
    colSpan: "md:col-span-2",
  },
  {
    id: "security",
    title: "Security & Compliance",
    subtitle: "Built-In Protection",
    desc: "Security-first engineering with compliance-ready systems (ISO/SOC2).",
    icon: <ShieldCheck size={28} />,
    tech: ["Zero Trust", "ISO / SOC2", "App Security"],
    colSpan: "md:col-span-1",
  },

  // ROW 4 (1 + 1 + 1)
  {
    id: "ai",
    title: "AI & Machine Learning",
    subtitle: "Intelligent Automation",
    desc: "Embed AI into your processes for predictive intelligence.",
    icon: <Brain size={28} />,
    tech: ["LLMs", "Predictive Models", "Computer Vision"],
    colSpan: "md:col-span-1",
  },
  {
    id: "product",
    title: "Product Engineering",
    subtitle: "From Idea to Scale",
    desc: "End-to-end engineering for SaaS and digital products.",
    icon: <Package size={28} />,
    tech: ["SaaS Platforms", "MVP Development", "Scalable APIs"],
    colSpan: "md:col-span-1",
  },
  {
    id: "integration",
    title: "System Integrations",
    subtitle: "Connected Ecosystems",
    desc: "Seamlessly integrate third-party tools into a unified ecosystem.",
    icon: <Plug size={28} />,
    tech: ["API Gateways", "Enterprise Integrations", "Webhooks"],
    colSpan: "md:col-span-1",
  },
];


/* ==========================================
   MAIN COMPONENT
========================================== */
const EnterpriseSolutions = () => {
  return (
    <section className="relative py-24 bg-white font-sans overflow-hidden">
      
      {/* --- Background Grid Lines --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-3 block">
              Our Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Engineering the backbone of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                modern business.
              </span>
            </h2>
          </motion.div>

          {/* Side Note */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block text-right"
          >
             <div className="flex items-center justify-end gap-2 text-slate-900 font-bold mb-1">
               <Server size={18} className="text-teal-500" />
               <span>Enterprise Grade</span>
             </div>
             <p className="text-sm text-slate-400">Scalable • Secure • Compliant</p>
          </motion.div>
        </div>

        {/* --- Bento Grid --- */}
        {/* auto-rows-fr ensures rows stretch to match the tallest item in that row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {SOLUTIONS.map((item, index) => (
            <SolutionCard key={item.id} data={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ==========================================
   CARD SUB-COMPONENT
========================================== */
const SolutionCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      // Use h-full and flex column to ensure content stretches evenly
      className={`${data.colSpan} group relative h-full bg-slate-50/50 rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:bg-white hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5 flex flex-col`}
    >
      {/* Hover Arrow */}
      <div className="absolute top-8 right-8 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-teal-500">
         <ArrowUpRight size={24} />
      </div>

      {/* Icon Area */}
      <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 mb-8 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 group-hover:scale-110 shadow-sm">
        {data.icon}
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <p className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-2 opacity-80">
           {data.subtitle}
        </p>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
           {data.title}
        </h3>
        <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-lg">
           {data.desc}
        </p>

        {/* Tech Stack Pills (Pinned to bottom) */}
        <div className="mt-auto flex flex-wrap gap-2">
          {data.tech.map((tech) => (
             <span 
               key={tech} 
               className="px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-600 group-hover:border-teal-100 group-hover:bg-teal-50/50 group-hover:text-teal-700 transition-colors"
             >
                {tech}
             </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EnterpriseSolutions;