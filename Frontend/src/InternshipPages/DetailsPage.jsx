import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Clock, Briefcase, Code, 
  Users, CheckCircle, Zap, GraduationCap, 
  Terminal, GitMerge, Cpu
} from 'lucide-react';

const InternshipDetails = () => {
  const theme = {
    primary: '#1E7A86',
    secondary: '#1E90A8',
    bg: '#F8FAFC',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-10 md:py-10 px-4 md:px-6 relative overflow-hidden font-sans" style={{ backgroundColor: theme.bg }}>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[800px] opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill={theme.secondary} d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,90.9,-6.2C91.7,8,90.6,22.1,84.3,34.9C78,47.7,66.6,59.3,53.4,68.6C40.2,77.9,25.3,85,10.2,85.6C-4.9,86.2,-20.3,80.3,-34.5,72.2C-48.7,64.1,-61.7,53.8,-71.6,41.1C-81.5,28.4,-88.3,13.3,-87.3,-1.4C-86.3,-16.1,-77.5,-30.4,-66.4,-41.8C-55.3,-53.2,-41.9,-61.7,-28.4,-69.3C-14.9,-76.9,-1.3,-83.6,13.2,-85.4C27.7,-87.2,42.2,-84.1,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
          >
            An Internship That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}>
              Builds Careers.
            </span>
          </motion.h2>
          <p className="text-sm md:text-lg text-gray-600 px-2">
            Master the software development lifecycle, from architecture to deployment, over a comprehensive 3-8 month journey.
          </p>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto"
        >
          
          {/* 1. Real World Projects (Large Card - Top Left) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl border border-gray-100 relative overflow-hidden group hover:border-[#1E7A86]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-900 flex items-center justify-center text-white shadow-lg">
                  <Terminal size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="px-2 py-1 md:px-3 md:py-1 rounded-full bg-green-100 text-green-700 text-[10px] md:text-xs font-bold uppercase tracking-wide">
                  Live Production
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Industrial-Grade Project Work</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 max-w-lg leading-relaxed">
                You won't build "Toy Apps". You will architect scalable solutions. <br /> Focus on <span className="font-bold text-[#1E7A86]">System Design</span>, <span className="font-bold text-[#1E7A86]">Security</span>, and <span className="font-bold text-[#1E7A86]">Optimization</span>.
              </p>
              
              <div className="grid grid-cols-1 gap-2">
                {['CI/CD Pipeline Implementation', 'Microservices Architecture', 'Agile & Jira Workflows'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-medium text-gray-700 bg-gray-50 p-2 rounded-lg border border-gray-100">
                    <CheckCircle size={14} className="md:w-4 md:h-4" style={{ color: theme.primary }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Visual: Code Pipeline Animation (Hidden on very small mobile to save space, visible on larger) */}
            <div className="hidden sm:block absolute top-20 -right-16 w-[300px] md:w-[400px] bg-[#1E293B] rounded-xl p-5  md:p-5 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500 border border-gray-700 opacity-90">
              <div className="flex items-center gap-4 mb-3 border-b border-gray-700 pb-2">
                 <span className="text-gray-400 text-[10px]">pipeline.yaml</span>
                 <span className="text-gray-500 text-[10px] flex items-center gap-1"><GitMerge size={10}/> master</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div></div>
                  <span className="text-green-400 text-[10px] font-mono">Build_Frontend... Success</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div></div>
                  <span className="text-green-400 text-[10px] font-mono">Tests... Passed (14/14)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Tenure (Right Top) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 bg-[#1E7A86] rounded-2xl md:rounded-3xl p-5 md:p-6 text-white shadow-lg relative overflow-hidden group"
          >
             <div className="absolute right-0 top-0 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl transform translate-x-5 -translate-y-5"></div>
             
             <div className="flex items-center gap-3 mb-2 md:mb-3">
               <div className="p-1.5 md:p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                 <Clock size={16} className="md:w-5 md:h-5 text-white" />
               </div>
               <span className="font-semibold text-white/80 uppercase text-[10px] md:text-xs tracking-wider">Duration</span>
             </div>
             
             <h3 className="text-2xl md:text-3xl font-extrabold mb-1">3 - 8 Months</h3>
             <p className="text-white/80 text-xs md:text-sm mt-1">
               Deep-dive mastery. Remote/Hybrid flexible options.
             </p>
          </motion.div>

          {/* 3. LOR (Right Bottom) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-lg border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-shadow"
          >
             <div className="flex justify-between items-start mb-2">
               <div>
                 <h3 className="font-bold text-gray-900 text-base md:text-lg">Performance LOR</h3>
                 <p className="text-[10px] md:text-xs text-gray-500 mt-1">Signed by CEO</p>
               </div>
               <div className="p-1.5 md:p-2 bg-yellow-50 rounded-lg text-yellow-600">
                 <FileText size={18} className="md:w-5 md:h-5" />
               </div>
             </div>
             <p className="text-xs text-gray-500 mt-2 leading-tight">
               A detailed letter validating your specific contributions, not a generic template.
             </p>
             <div className="mt-3 w-8 h-1 bg-green-500 rounded-full"></div>
          </motion.div>

          {/* 4. Career Acceleration (Bottom Full Width) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3 bg-gradient-to-r from-[#1E293B] to-[#0F172A] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden group"
          >
             <div className="absolute right-0 bottom-0 w-40 h-40 bg-[#1E7A86] opacity-10 rounded-full blur-3xl"></div>
             
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
               <div className="flex-1">
                 <div className="flex items-center gap-3 mb-2">
                    <Briefcase size={20} className="text-[#1E90A8]" />
                    <h3 className="font-bold text-lg md:text-xl">Career Acceleration Module</h3>
                 </div>
                 <p className="text-xs md:text-sm text-gray-400 max-w-xl">
                   We prepare you for the job market. While we don't guarantee a job, we guarantee you'll be ready for one.
                 </p>
               </div>
               
               <div className="flex flex-wrap gap-2 md:gap-4">
                 {['ATS Resume Building', 'Mock Tech Interviews', 'GitHub Portfolio Polish'].map((item, i) => (
                   <span key={i} className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-[10px] md:text-xs font-medium backdrop-blur-md">
                     {item}
                   </span>
                 ))}
               </div>
             </div>
          </motion.div>

        </motion.div>

        {/* --- BOTTOM: ADDITIONAL GAINS STRIP --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-16 bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4"
        >
          {[
            { icon: Cpu, title: "Modern Stack", desc: "Latest tech only" },
            { icon: Users, title: "Peer Coding", desc: "Collab with talent" },
            { icon: Zap, title: "Soft Skills", desc: "Leadership training" },
            { icon: GraduationCap, title: "Alumni Club", desc: "Lifetime access" },
          ].map((perk, idx) => (
             <div key={idx} className="flex flex-col items-center text-center gap-2 md:gap-3">
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1E7A86]/10 flex items-center justify-center text-[#1E7A86] shrink-0">
                 <perk.icon size={16} className="md:w-5 md:h-5" />
               </div>
               <div>
                 <h4 className="font-bold text-gray-900 text-xs md:text-sm">{perk.title}</h4>
                 <p className="text-[10px] md:text-xs text-gray-500">{perk.desc}</p>
               </div>
             </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default InternshipDetails;