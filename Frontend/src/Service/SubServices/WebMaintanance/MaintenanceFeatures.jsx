import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Zap, 
  Database, 
  RefreshCw, 
  Clock, 
  CheckCircle2,
  Lock,
  Search,
  ArrowUpRight
} from "lucide-react";

const features = [
  {
    id: "security",
    title: "Security Shield",
    description: "Real-time malware scanning and firewall protection to keep threats out.",
    status: "Scanning",
    statusColor: "text-emerald-600",
    dotColor: "bg-emerald-500",
    icon: <ShieldAlert size={24} />,
    accent: "group-hover:text-emerald-600",
    bgAccent: "group-hover:bg-emerald-50",
    borderAccent: "group-hover:border-emerald-200",
    delay: 0.1
  },
  {
    id: "speed",
    title: "Speed Optimization",
    description: "Image compression, cache clearing, and code minification for sub-second loads.",
    status: "Optimized",
    statusColor: "text-amber-600",
    dotColor: "bg-amber-500",
    icon: <Zap size={24} />,
    accent: "group-hover:text-amber-600",
    bgAccent: "group-hover:bg-amber-50",
    borderAccent: "group-hover:border-amber-200",
    delay: 0.2
  },
  {
    id: "backups",
    title: "Daily Cloud Backups",
    description: "Off-site backups stored securely. Restore your entire site with one click.",
    status: "Backed Up",
    statusColor: "text-blue-600",
    dotColor: "bg-blue-500",
    icon: <Database size={24} />,
    accent: "group-hover:text-blue-600",
    bgAccent: "group-hover:bg-blue-50",
    borderAccent: "group-hover:border-blue-200",
    delay: 0.3
  },
  {
    id: "updates",
    title: "Core & Plugin Updates",
    description: "We test and apply updates safely to prevent conflicts and broken pages.",
    status: "Up to Date",
    statusColor: "text-teal-600",
    dotColor: "bg-teal-500",
    icon: <RefreshCw size={24} />,
    accent: "group-hover:text-teal-600",
    bgAccent: "group-hover:bg-teal-50",
    borderAccent: "group-hover:border-teal-200",
    delay: 0.4
  },
  {
    id: "uptime",
    title: "Uptime Monitoring",
    description: "Instant alerts if your site goes down. We fix issues before customers notice.",
    status: "Monitoring",
    statusColor: "text-indigo-600",
    dotColor: "bg-indigo-500",
    icon: <Clock size={24} />,
    accent: "group-hover:text-indigo-600",
    bgAccent: "group-hover:bg-indigo-50",
    borderAccent: "group-hover:border-indigo-200",
    delay: 0.5
  },
  {
    id: "seo",
    title: "SEO Health Checks",
    description: "Monthly audits to find broken links and crawl errors hurting your ranking.",
    status: "Healthy",
    statusColor: "text-rose-600",
    dotColor: "bg-rose-500",
    icon: <Search size={24} />,
    accent: "group-hover:text-rose-600",
    bgAccent: "group-hover:bg-rose-50",
    borderAccent: "group-hover:border-rose-200",
    delay: 0.6
  }
];

const MaintenanceFeatures = () => {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden font-sans">
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-teal-100/50 rounded-full blur-[100px]" />
        <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-left sm:text-center mb-20">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Everything you need to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">sleep soundly.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            We don't just fix things when they break. We proactively monitor, optimize, and secure your digital assets 24 hours a day.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} data={feature} />
          ))}
        </div>
        
        {/* Bottom Call to Action area */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
        >
            <p className="text-slate-500 text-sm mb-4">Compatible with</p>
            <div className="flex justify-center gap-8 opacity-50 grayscale">
                {/* Simple text placeholders for logos - replace with SVGs in production */}
                <span className="font-bold text-slate-900 text-sx sm:text-xl">WordPress</span>
                <span className="font-bold text-slate-900 text-sx sm:text-xl">Shopify</span>
                <span className="font-bold text-slate-900 text-sx sm:text-xl">Webflow</span>
                <span className="font-bold text-slate-900 text-sx sm:text-xl">React</span>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

const FeatureCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: data.delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-slate-200 ${data.borderAccent}`}
    >
        {/* Hover Gradient Background (Subtle) */}
        <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${data.bgAccent} opacity-[0.03]`} />

        {/* Top Row: Icon & Status */}
        <div className="flex justify-between items-start mb-6 relative z-10">
            <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 transition-colors duration-300 group-hover:scale-110 ${data.accent} ${data.bgAccent}`}>
                {/* Trigger specific animations on hover based on ID */}
                <motion.div
                    animate={data.id === "security" ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    {/* Cloning icon to add hover rotation/movement if needed */}
                    {React.cloneElement(data.icon, { 
                        className: `transition-transform duration-300 ${data.id === "updates" ? "group-hover:rotate-180" : ""}`
                    })}
                </motion.div>
            </div>
            
            {/* Live Status Pill */}
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100">
                <span className={`relative flex h-2 w-2`}>
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${data.dotColor}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${data.dotColor}`}></span>
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${data.statusColor}`}>
                    {data.status}
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                {data.title}
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm mb-6">
                {data.description}
            </p>
        
        </div>
        
        {/* Decorative corner shape */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-50 to-transparent rounded-bl-[100px] -z-0 opacity-50" />
    </motion.div>
  );
};

export default MaintenanceFeatures;