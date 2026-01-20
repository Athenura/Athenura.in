import React from 'react';
import { motion } from 'framer-motion';
import { Flag, CheckCircle2, Zap, Rocket, Smartphone, Layers } from 'lucide-react';

const RoadmapSection = () => {
  const theme = {
    primary: '#28A3B9',
    secondary: '#1E7A86',
    bg: '#ffffff',
    textMain: '#0f172a',
    textLight: '#64748b',
  };

  const milestones = [
    {
      quarter: 'Q1 2026',
      title: 'Foundation & Core Systems',
      subtitle: 'Building the bedrock',
      description: 'Launching Athenura’s core platform with secure authentication, intern & mentor onboarding, and robust backend APIs.',
      status: 'completed',
      icon: <Layers size={22} />,
      tech: ['Node.js', 'MongoDB', 'JWT', 'AWS S3'],
      deliverables: [
        'Secure Auth (OAuth + JWT)',
        'Role-Based Access Control',
        'Database Schema Validation',
        'Basic Admin Dashboard'
      ]
    },
    {
      quarter: 'Q2 2026',
      title: 'Smart Learning Ecosystem',
      subtitle: 'AI Integration & Management',
      description: 'Introducing AI-assisted intern matching, progress tracking dashboards, and real-time notifications.',
      status: 'in-progress',
      icon: <Zap size={22} />,
      tech: ['OpenAI API', 'Socket.io', 'Redis', 'React Query'],
      deliverables: [
        'AI Resume Parsing & Matching',
        'Real-time Notification System',
        'Interactive Task Boards',
        'Automated Progress Reports'
      ]
    },
    {
      quarter: 'Q3 2026',
      title: 'Mobile & Community',
      subtitle: 'Expansion to Handhelds',
      description: 'Launching the native mobile app for interns and mentors with chat, task updates, and learning resources.',
      status: 'planned',
      icon: <Smartphone size={22} />,
      tech: ['React Native', 'Firebase', 'Push Notifications'],
      deliverables: [
        'iOS & Android Beta Launch',
        'In-App Chat System',
        'Offline Mode Support',
        'Community Forums'
      ]
    },
    {
      quarter: 'Q4 2026',
      title: 'Global Scale & Enterprise',
      subtitle: 'Borderless Operations',
      description: 'Scaling globally with enterprise hiring partnerships, cloud-native infrastructure, and analytics.',
      status: 'planned',
      icon: <Rocket size={22} />,
      tech: ['Kubernetes', 'Docker', 'Terraform', 'Analytics'],
      deliverables: [
        'Multi-Region Deployment',
        'Enterprise SSO Integration',
        'Advanced Analytics Suite',
        'White-label Solutions'
      ]
    },
  ];

  return (
    // CHANGE 1: Reduced py-16/32 to py-12/20
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden font-sans" style={{ backgroundColor: theme.bg }}>
      
      {/* ================= BACKGROUND ANIMATIONS ================= */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <motion.div
            animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            style={{
                backgroundImage: `linear-gradient(${theme.secondary} 1px, transparent 1px), linear-gradient(90deg, ${theme.secondary} 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }}
        />
      </div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[-100px] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
        style={{ backgroundColor: theme.primary }}
      />
      
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-[-200px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[80px] md:blur-[100px] pointer-events-none"
        style={{ backgroundColor: theme.secondary }}
      />

      {/* ================= CONTENT CONTAINER ================= */}
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        {/* CHANGE 2: Reduced mb-16/32 to mb-12/20 */}
        <div className="text-center mb-12 lg:mb-20">
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-3xl md:text-6xl font-extrabold text-slate-900 tracking-tight"
          >
            Strategic <span style={{ color: theme.primary }}>Roadmap</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="mt-3 md:mt-4 text-slate-500 max-w-2xl mx-auto text-sm md:text-lg"
          >
            A clear timeline of our technical evolution from foundation to global scale.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:w-[3px] transform md:-translate-x-1/2 bg-slate-100 rounded-full overflow-hidden">
             <motion.div 
               initial={{ height: 0 }}
               whileInView={{ height: '100%' }}
               transition={{ duration: 2, ease: "linear" }}
               viewport={{ once: false, amount: 0.1 }}
               className="w-full bg-gradient-to-b from-transparent via-[#28A3B9] to-[#1E7A86] opacity-80"
             />
          </div>

          {/* CHANGE 3: Reduced spacing from space-y-12/32 to space-y-8/16 */}
          <div className="space-y-8 md:space-y-16">
            {milestones.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                index={index} 
                theme={theme} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Complex Sub-Components ---

const TimelineItem = ({ item, index, theme }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* 1. The Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="pl-16 md:pl-0 w-full md:w-[45%] mb-0 relative z-10"
      >
        <div className="group relative bg-white p-1 rounded-2xl shadow-lg md:shadow-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2">
            {/* Gradient Border via Background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-100 to-white group-hover:from-[#28A3B9] group-hover:to-[#1E7A86] transition-all duration-500 opacity-100 -z-10" />
            
            <div className="bg-white rounded-xl p-5 md:p-8 h-full relative overflow-hidden">
                
                {/* Decoration: Background Number */}
                <div className="absolute -right-4 -top-4 text-[60px] md:text-[100px] font-black opacity-[0.03] text-slate-900 pointer-events-none select-none">
                    0{index + 1}
                </div>

                {/* Status & Quarter */}
                <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span className="text-[10px] md:text-xs font-extrabold tracking-widest uppercase px-2 py-1 rounded bg-slate-100 text-slate-500">
                        {item.quarter}
                    </span>
                    <StatusBadge status={item.status} theme={theme} />
                </div>

                {/* Titles */}
                <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-1 group-hover:text-[#28A3B9] transition-colors leading-tight">
                    {item.title}
                </h3>
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 md:mb-4">
                    {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                    {item.description}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-slate-100 mb-4 md:mb-2"></div>

                {/* Deliverables List */}
                <div className="mb-4 md:mb-6">
                    <h4 className="text-[10px] md:text-xs font-bold uppercase text-slate-400 mb-2 md:mb-3 flex items-center gap-2">
                        <CheckCircle2 size={10} className="md:w-3 md:h-3" /> Key Deliverables
                    </h4>
                    <ul className="space-y-1.5 md:space-y-2">
                        {item.deliverables.map((del, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                                <span style={{ color: theme.secondary }} className="mt-1 leading-none">•</span> 
                                <span className="leading-tight">{del}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {item.tech.map((t, i) => (
                        <span key={i} className="px-1.5 py-0.5 md:px-2 md:py-1 text-[9px] md:text-[10px] font-bold uppercase rounded bg-slate-50 text-slate-500 border border-slate-100 group-hover:border-[#28A3B9]/30 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </motion.div>

      {/* 2. The Animated Connector (Line between Center and Card) - Desktop Only */}
      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-y-1/2 w-[8%] h-[2px]"
           style={{ 
             left: isEven ? 'auto' : '50%', 
             right: isEven ? '50%' : 'auto',
             transformOrigin: isEven ? 'right' : 'left'
           }}>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
            className="w-full h-full bg-slate-200"
          />
           <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
            className="w-full h-full absolute top-0 left-0 origin-left"
            style={{ 
                background: `linear-gradient(to ${isEven ? 'left' : 'right'}, ${theme.primary}, transparent)`,
                opacity: 0.5
            }}
          />
      </div>

      {/* 3. The Center Dot/Icon */}
      <motion.div 
         initial={{ scale: 0, rotate: -180 }}
         whileInView={{ scale: 1, rotate: 0 }}
         transition={{ duration: 0.6, delay: 0.2 }}
         viewport={{ once: false }}
         className="absolute left-6 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-[3px] md:border-4 z-20 shadow-lg group"
         style={{ borderColor: item.status === 'completed' ? theme.secondary : theme.primary }}
      >
        <div style={{ color: item.status === 'completed' ? theme.secondary : theme.primary }} className="scale-75 md:scale-100">
           {item.icon}
        </div>
        {/* Pulse Effect Behind Dot */}
        {item.status === 'in-progress' && (
            <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: theme.primary }}></div>
        )}
      </motion.div>

      {/* 4. Empty Space for the other side (Desktop only) */}
      <div className="hidden md:block w-[42%]" />

    </div>
  );
};

const StatusBadge = ({ status, theme }) => {
  let styles = "";
  let text = "";
  let dotColor = "";

  if (status === 'completed') {
    styles = "bg-teal-50 text-teal-700 border-teal-100";
    text = "Completed";
    dotColor = theme.secondary;
  } else if (status === 'in-progress') {
    styles = "bg-blue-50 text-blue-700 border-blue-100 shadow-sm shadow-blue-100";
    text = "In Progress";
    dotColor = "#3b82f6";
  } else {
    styles = "bg-slate-50 text-slate-400 border-slate-100";
    text = "Planned";
    dotColor = "#94a3b8";
  }

  return (
    <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full border ${styles}`}>
       {status === 'in-progress' && (
           <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
             <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-blue-500"></span>
           </span>
       )}
       {status !== 'in-progress' && (
           <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dotColor }}></div>
       )}
       <span className="text-[9px] md:text-[10px] uppercase font-bold">{text}</span>
    </div>
  );
};

export default RoadmapSection;