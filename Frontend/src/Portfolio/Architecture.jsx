import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Server, Smartphone, Globe, ShieldCheck, 
  Zap, Lock, Cpu, HardDrive, Network, Wifi, Activity 
} from 'lucide-react';

const ArchitectureSection = () => {
  // --- Configuration & Theme ---
  const theme = {
    primary: '#28A3B9',
    secondary: '#1E7A86',
    bg: '#f8fafc',
    cardBg: '#ffffff',
    textMain: '#0f172a',
    textMuted: '#64748b',
  };

  const [activeNode, setActiveNode] = useState('server'); // Default active node

  // Detailed Technical Data for each node
  const nodeDetails = {
    client: {
      title: "Frontend Client",
      role: "User Interface & State",
      specs: [
        { label: "Framework", value: "React 18 + Vite" },
        { label: "State", value: "Redux Toolkit" },
        { label: "Caching", value: "TanStack Query" },
        { label: "Protocol", value: "HTTPS / WSS" }
      ],
      status: "Online • 24ms Latency"
    },
    gateway: {
      title: "API Gateway",
      role: "Security & Load Balancing",
      specs: [
        { label: "Rate Limit", value: "1000 req/min" },
        { label: "Auth", value: "JWT + OAuth2" },
        { label: "Encryption", value: "TLS 1.3" },
        { label: "CORS", value: "Strict Origin" }
      ],
      status: "Secure • 99.9% Uptime"
    },
    server: {
      title: "Backend Core",
      role: "Business Logic Execution",
      specs: [
        { label: "Runtime", value: "Node.js v20 (LTS)" },
        { label: "Architecture", value: "Microservices" },
        { label: "Scaling", value: "Docker + K8s" },
        { label: "Validation", value: "Zod Schema" }
      ],
      status: "Healthy • CPU 45%"
    },
    database: {
      title: "Data Layer",
      role: "Persistence & Storage",
      specs: [
        { label: "Type", value: "MongoDB Atlas" },
        { label: "Replication", value: "3-Node Cluster" },
        { label: "Backups", value: "Automated Hourly" },
        { label: "Indexing", value: "Compound B-Tree" }
      ],
      status: "Active • 12ms R/W"
    }
  };

  return (
    <section className="py-5 relative overflow-hidden font-sans" style={{ backgroundColor: theme.bg }}>
      
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(${theme.secondary} 1px, transparent 1px), linear-gradient(90deg, ${theme.secondary} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            Enterprise-Grade <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r" 
                  style={{ backgroundImage: `linear-gradient(to right, ${theme.secondary}, ${theme.primary})` }}>
              Architecture
            </span>
          </motion.h2>
          <p className="mt-6 text-slate-600 text-lg">
            A scalable, secure, and high-performance ecosystem designed to handle complex business logic and real-time data synchronization.
          </p>
        </div>

        {/* --- Main Dashboard / Diagram Area --- */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
          
          {/* LEFT: The Interactive Diagram */}
          <div className="xl:col-span-2 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden relative">
            <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex justify-between items-center">
                <span className="font-bold text-slate-700 flex items-center gap-2">
                    <Network size={18} className="text-slate-400" /> Infrastructure Map
                </span>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
            </div>

            <div className="p-8 md:p-12 min-h-[500px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
                {/* Connecting Lines (Absolute for Desktop, Hidden Mobile) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 transform -translate-y-1/2"></div>

                {/* Node 1: Client */}
                <DiagramNode 
                    id="client"
                    icon={<Globe size={28} />}
                    label="Client"
                    active={activeNode === 'client'}
                    onClick={() => setActiveNode('client')}
                    theme={theme}
                />
                
                <DataStream theme={theme} />

                {/* Node 2: Gateway */}
                <DiagramNode 
                    id="gateway"
                    icon={<ShieldCheck size={28} />}
                    label="Gateway"
                    active={activeNode === 'gateway'}
                    onClick={() => setActiveNode('gateway')}
                    theme={theme}
                />

                <DataStream theme={theme} />

                {/* Node 3: Server */}
                <DiagramNode 
                    id="server"
                    icon={<Server size={28} />}
                    label="Core API"
                    active={activeNode === 'server'}
                    onClick={() => setActiveNode('server')}
                    theme={theme}
                />

                <DataStream theme={theme} />

                {/* Node 4: Database */}
                <DiagramNode 
                    id="database"
                    icon={<Database size={28} />}
                    label="Cluster"
                    active={activeNode === 'database'}
                    onClick={() => setActiveNode('database')}
                    theme={theme}
                />
            </div>
            
            <div className="absolute bottom-4 left-0 w-full text-center text-xs text-slate-400">
                * Click nodes to view technical specifications
            </div>
          </div>

          {/* RIGHT: Live Info Panel */}
          <div className="xl:col-span-1 h-full">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={activeNode}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 h-full flex flex-col"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                           {activeNode === 'client' && <Smartphone size={24} style={{ color: theme.primary }} />}
                           {activeNode === 'gateway' && <Lock size={24} style={{ color: theme.primary }} />}
                           {activeNode === 'server' && <Cpu size={24} style={{ color: theme.primary }} />}
                           {activeNode === 'database' && <HardDrive size={24} style={{ color: theme.primary }} />}
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-600 border border-green-100 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            {nodeDetails[activeNode].status}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{nodeDetails[activeNode].title}</h3>
                    <p className="text-slate-500 text-sm mb-8">{nodeDetails[activeNode].role}</p>

                    <div className="space-y-4 mb-auto">
                        {nodeDetails[activeNode].specs.map((spec, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-[#28A3B9]/30 transition-colors">
                                <span className="text-sm font-semibold text-slate-500">{spec.label}</span>
                                <span className="text-sm font-bold text-slate-800">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
          </div>

        </div>
        
        {/* --- Bottom: Quick Stats --- */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard icon={<Zap size={20} />} label="Latency" value="< 50ms" theme={theme} />
            <StatCard icon={<ShieldCheck size={20} />} label="Security" value="AES-256" theme={theme} />
            <StatCard icon={<Wifi size={20} />} label="Availability" value="99.99%" theme={theme} />
            <StatCard icon={<CodeBracketIcon />} label="Code Base" value="Clean Arch" theme={theme} />
        </div>

      </div>
    </section>
  );
};

// --- Sub-Components ---

const DiagramNode = ({ icon, label, active, onClick, theme }) => {
    return (
        <motion.div 
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer relative z-10 flex flex-col items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 w-full md:w-auto
                ${active ? 'bg-white shadow-xl' : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'}`}
            style={{ borderColor: active ? theme.primary : undefined }}
        >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300
                 ${active ? 'text-white' : 'text-slate-400 bg-white border border-slate-200'}`}
                 style={{ backgroundColor: active ? theme.primary : undefined }}>
                {icon}
            </div>
            <span className={`font-bold text-sm ${active ? 'text-slate-800' : 'text-slate-500'}`}>{label}</span>
            
            {/* Active Indicator Ring */}
            {active && (
                <motion.div 
                    layoutId="activeRing"
                    className="absolute inset-0 -m-1 rounded-3xl border-2 opacity-30"
                    style={{ borderColor: theme.primary }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </motion.div>
    );
};

const DataStream = ({ theme }) => (
    <div className="hidden md:flex flex-col items-center justify-center h-full w-full max-w-[80px] relative">
        <div className="h-[2px] w-full bg-slate-100 relative overflow-hidden">
             <motion.div 
                animate={{ x: [-50, 100], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-12 h-full absolute top-0"
                style={{ background: `linear-gradient(90deg, transparent, ${theme.primary}, transparent)` }}
             />
        </div>
        <div className="mt-2 h-[2px] w-full bg-slate-100 relative overflow-hidden">
             <motion.div 
                animate={{ x: [100, -50], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                className="w-12 h-full absolute top-0"
                style={{ background: `linear-gradient(90deg, transparent, ${theme.secondary}, transparent)` }}
             />
        </div>
    </div>
);

const StatCard = ({ icon, label, value, theme }) => (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
        <div className="p-3 rounded-full bg-slate-50 text-slate-400">
            {icon}
        </div>
        <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</div>
            <div className="text-xl font-bold text-slate-800" style={{ color: theme.secondary }}>{value}</div>
        </div>
    </div>
);

// Helper for the missing icon in the import list
const CodeBracketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
)

export default ArchitectureSection;