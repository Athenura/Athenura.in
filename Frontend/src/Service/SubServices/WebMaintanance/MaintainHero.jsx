import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  CheckCircle2, 
  Server, 
  ArrowRight,
  Activity,
  Database,
  Code2
} from "lucide-react";

const MaintenanceHero = () => {
  return (
    <section className="relative min-h-[auto] bg-slate-50 flex items-center overflow-hidden font-sans py-8 sm:py-12 md:py-16 lg:py-0 pt-20 sm:pt-24 lg:pt-0">
      
      {/* --- Background: Clean Tech Grid --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] sm:opacity-[0.04] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] lg:bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
      </div>

      {/* --- Ambient Soft Glows --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-[15%] -left-[30%] sm:-left-[20%] lg:-left-[10%] w-[200px] sm:w-[300px] lg:w-[600px] h-[200px] sm:h-[300px] lg:h-[600px] bg-teal-200/30 sm:bg-teal-200/40 blur-[60px] sm:blur-[80px] lg:blur-[100px] rounded-full mix-blend-multiply"
        />
        <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute top-[15%] -right-[30%] sm:-right-[20%] lg:-right-[10%] w-[200px] sm:w-[300px] lg:w-[500px] h-[200px] sm:h-[300px] lg:h-[500px] bg-blue-200/30 sm:bg-blue-200/40 blur-[60px] sm:blur-[80px] lg:blur-[100px] rounded-full mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          
          {/* ================= LEFT: Copy ================= */}
          <motion.div 
            className="flex-1 lg:text-left max-w-2xl mx-auto lg:mx-0 w-full order-1"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >

            <motion.h1 variants={fadeInUp} className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-4 sm:mb-6">
              Your website, <br className="hidden xs:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">always optimized.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 px-2 xs:px-0">
              We monitor security, speed, and uptime 24/7 so you can focus on your business. It's like having a DevOps team in your pocket.
            </motion.p>

            {/* Trust Metrics */}
            <motion.div variants={fadeInUp} className="mt-8 sm:mt-10 lg:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-slate-500 text-xs sm:text-sm font-bold">
                <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full border border-slate-100 lg:border-none lg:bg-transparent lg:px-0">
                    <CheckCircle2 size={14} sm:size={16} className="text-teal-500"/>
                    <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full border border-slate-100 lg:border-none lg:bg-transparent lg:px-0">
                    <CheckCircle2 size={14} sm:size={16} className="text-teal-500"/>
                    <span>Daily Backups</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-full border border-slate-100 lg:border-none lg:bg-transparent lg:px-0">
                    <CheckCircle2 size={14} sm:size={16} className="text-teal-500"/>
                    <span>1hr Response</span>
                </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT: The "Active Core" Visual ================= */}
          <div className="flex-1 w-full flex justify-center perspective-1000 order-2 lg:order-2 mt-6 sm:mt-8 lg:mt-0">
             <ScannerVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

/* --------------------------------------------------------------------------
   SUB-COMPONENT: The Complex Scanner Animation
--------------------------------------------------------------------------- */
const ScannerVisual = () => {
    return (
        // Responsive Scaling Wrapper:
        <div className="relative w-[320px] h-[320px] xs:w-[350px] xs:h-[350px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[500px] xl:w-[500px] xl:h-[500px]">
            
            {/* 1. Radar Pulse Background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <PulseRing delay={0} size="100%" className="max-w-[320px] max-h-[320px] xs:max-w-[350px] xs:max-h-[350px] sm:max-w-[400px] sm:max-h-[400px] md:max-w-[450px] md:max-h-[450px] lg:max-w-[450px] lg:max-h-[500px] xl:max-w-[500px] xl:max-h-[500px]" />
                <PulseRing delay={1} size="75%" className="max-w-[240px] max-h-[240px] xs:max-w-[260px] xs:max-h-[260px] sm:max-w-[300px] sm:max-h-[300px] md:max-w-[340px] md:max-h-[340px]" />
                <PulseRing delay={2} size="50%" className="max-w-[160px] max-h-[160px] xs:max-w-[175px] xs:max-h-[175px] sm:max-w-[200px] sm:max-h-[200px] md:max-w-[225px] md:max-h-[225px]" />
            </div>

            {/* 2. The Floating Tech Stack (3 Layers) */}
            <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center perspective-1000"
            >
                {/* Layer 1: Database/Backend (Furthest Back) */}
                <motion.div 
                    animate={{ rotateX: 10, rotateY: -10, z: -50, scale: 0.9 }}
                    className="absolute w-48 h-60 sm:w-52 sm:h-64 md:w-56 md:h-68 lg:w-60 lg:h-72 bg-slate-300 rounded-2xl border border-slate-200 shadow-xl flex flex-col items-center justify-center opacity-80"
                >
                    <div className="w-full h-full p-3 sm:p-4 space-y-2 opacity-30">
                         <div className="font-mono text-[8px] xs:text-[9px] sm:text-[10px] text-slate-500">
                             {`{ "status": "ok", \n "db_latency": "12ms", \n "backup": true }`}
                         </div>
                         <Database size={24} sm:size={28} md:size={32} className="text-slate-400 mx-auto mt-3 sm:mt-4" />
                    </div>
                </motion.div>

                {/* Layer 2: Code/Structure (Middle) */}
                <motion.div 
                    animate={{ rotateX: 10, rotateY: -10, z: 0 }}
                    className="absolute w-48 h-60 sm:w-52 sm:h-64 md:w-56 md:h-68 lg:w-60 lg:h-72 bg-white/20 backdrop-blur-sm rounded-2xl border border-teal-100 shadow-xl flex flex-col p-3 sm:p-4 z-10"
                >
                    <div className="flex items-center gap-2 mb-3 sm:mb-4 border-b border-slate-100 pb-2">
                        <Code2 size={14} sm:size={16} className="text-teal-500" />
                        <div className="h-1.5 w-12 sm:w-16 bg-slate-200 rounded-full" />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                        <div className="h-1.5 w-full bg-slate-200 rounded-full" />
                        <div className="h-1.5 w-3/4 bg-slate-200 rounded-full" />
                        <div className="h-1.5 w-1/2 bg-teal-100 rounded-full" />
                        <div className="h-1.5 w-full bg-slate-200 rounded-full" />
                    </div>
                </motion.div>

                {/* Layer 3: UI/Frontend (Front) - The Main Card */}
                <motion.div 
                    animate={{ rotateX: 10, rotateY: -10, z: 50 }}
                    className="absolute w-56 h-80 sm:w-52 sm:h-64 md:w-64 md:h-68 lg:w-72 lg:h-84 bg-white rounded-2xl border border-slate-100 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.1)] sm:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden z-20"
                >
                    {/* Header */}
                    <div className="h-7 sm:h-8 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-300"/>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-300"/>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="p-3 sm:p-4 flex flex-col items-center gap-2 sm:gap-3">
                         <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-50 flex items-center justify-center">
                             <CheckCircle2 size={16} sm:size={20} className="text-teal-500" />
                         </div>
                         <div className="h-1.5 w-16 sm:w-20 bg-slate-100 rounded-full" />
                         <div className="h-16 sm:h-20 w-full bg-slate-50 rounded-lg border border-dashed border-slate-200 flex items-center justify-center">
                             <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono">100% Score</span>
                         </div>
                         <button className="w-full py-1.5 bg-teal-500 text-white text-[10px] font-bold rounded hover:bg-teal-600 transition-colors">View Report</button>
                    </div>

                    {/* Scanning Laser Line */}
                    <motion.div 
                        animate={{ top: ["0%", "120%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent z-30 shadow-[0_0_10px_rgba(45,212,191,0.5)] sm:shadow-[0_0_15px_rgba(45,212,191,0.5)]"
                    />
                </motion.div>
            </motion.div>

            {/* 3. Floating Status Pills (Orbiting Elements) */}
            
            {/* Top Left: Security - Adjusted positions for mobile */}
            <FloatCard 
                delay={0.2} 
                x="-120" sm:x="-140" 
                y="-60" sm:y="-80"
                icon={<ShieldCheck size={14} sm:size={16}/>} 
                color="text-emerald-600" bg="bg-emerald-50" border="border-emerald-100" 
                title="Firewall" sub="Active" 
            />

            {/* Top Right: Speed */}
            <FloatCard 
                delay={1.2} 
                x="120" sm:x="140" 
                y="-50" sm:y="-60"
                icon={<Zap size={14} sm:size={16}/>} 
                color="text-amber-600" bg="bg-amber-50" border="border-amber-100" 
                title="Speed Index" sub="0.4s" 
            />

            {/* Bottom Right: Updates */}
            <FloatCard 
                delay={2.2} 
                x="100" sm:x="120" 
                y="80" sm:y="100"
                icon={<RefreshCw size={14} sm:size={16}/>} 
                color="text-cyan-600" bg="bg-cyan-50" border="border-cyan-100" 
                title="Plugins" sub="Up to Date" 
            />
            
            {/* Bottom Left: Server */}
            <FloatCard 
                delay={3.2} 
                x="-100" sm:x="-120" 
                y="70" sm:y="80"
                icon={<Server size={14} sm:size={16}/>} 
                color="text-indigo-600" bg="bg-indigo-50" border="border-indigo-100" 
                title="Database" sub="Optimized" 
            />

        </div>
    )
}

// Background Pulse Rings
const PulseRing = ({ delay, size, className }) => (
    <motion.div 
        animate={{ scale: [1, 1.2], opacity: [0, 0.2, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: delay, ease: "easeInOut" }}
        style={{ width: size, height: size }}
        className={`absolute rounded-full border border-teal-200 ${className}`}
    />
)

// Floating Card Component
const FloatCard = ({ delay, x, y, icon, color, bg, border, title, sub }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
        transition={{ 
            opacity: { delay: delay, duration: 0.5 },
            scale: { delay: delay, duration: 0.5 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay + 1 } 
        }}
        className={`absolute z-30 p-2 sm:p-2.5 pr-3 sm:pr-4 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-md border ${border} shadow-lg shadow-slate-200/50 flex items-center gap-2 sm:gap-3 min-w-[120px] sm:min-w-[140px]`}
        style={{ 
            top: "50%", 
            left: "50%", 
            marginLeft: `calc(${x}px * 0.7)`,
            marginTop: `calc(${y}px * 0.7)`,
            transform: "translate(-50%, -50%)"
        }}
    >
        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${bg} flex items-center justify-center ${color}`}>
            {icon}
        </div>
        <div className="leading-tight">
            <div className="text-slate-900 text-[11px] sm:text-xs font-bold">{title}</div>
            <div className="text-slate-500 text-[9px] sm:text-[10px] font-medium">{sub}</div>
        </div>
    </motion.div>
)

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default MaintenanceHero;