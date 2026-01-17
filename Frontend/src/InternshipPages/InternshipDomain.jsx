import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Palette, MousePointer, Monitor, Server, Layers, 
  Code, Globe, TrendingUp, Share2, PenTool, BarChart, Video,
  CheckCircle2, Clock, X, ArrowRight, Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const InternshipDomains = () => {
  const theme = {
    primary: '#1E7A86',
    secondary: '#1E90A8',
    bg: '#F8FAFC',
  };

  const [selectedRole, setSelectedRole] = useState(null);
  const modalBodyRef = useRef(null);

  // --- Fixed Auto Scroll Logic ---
  useEffect(() => {
    if (!selectedRole) return;

    // Function to reset scroll position
    const resetScroll = () => {
      if (modalBodyRef.current) {
        // Multiple approaches for maximum compatibility
        modalBodyRef.current.scrollTop = 0;
        
        // Alternative method
        modalBodyRef.current.scrollTo({
          top: 0,
          behavior: 'instant'
        });
      }
    };

    // Use setTimeout to ensure DOM is updated
    const timer = setTimeout(() => {
      resetScroll();
      
      // One more attempt after a short delay
      setTimeout(resetScroll, 10);
    }, 100);

    // Also try on next animation frame
    requestAnimationFrame(() => {
      requestAnimationFrame(resetScroll);
    });

    return () => clearTimeout(timer);
  }, [selectedRole]);

  const internshipRoles = [
    {
      id: "hr",
      title: "Human Resources (HR)",
      icon: Users,
      desc: "Gain hands-on exposure to real-world HR practices including recruitment, onboarding, and employee engagement.",
      details: {
        responsibilities: [
          "Assist in creating and posting job openings",
          "Screen resumes and coordinate interviews",
          "Assist in onboarding new interns and maintaining records",
          "Plan engagement activities to promote positive culture"
        ],
        skills: ["Communication", "Organization", "Confidentiality", "Time Mgmt"],
        duration: "3 / 6 Months"
      },
      color: "bg-pink-50 text-pink-600"
    },
    {
      id: "graphic",
      title: "Graphic Design",
      icon: Palette,
      desc: "Shape the visual identity of the brand by creating compelling designs for social media and marketing campaigns.",
      details: {
        responsibilities: [
          "Design banners, posters, and brand creatives",
          "Maintain visual consistency following brand guidelines",
          "Collaborate with marketing teams on campaigns",
          "Prepare final designs for digital publishing"
        ],
        skills: ["Creativity", "Visual Design", "Layout", "Brand Consistency"],
        duration: "3 / 6 Months"
      },
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: "uiux",
      title: "UI / UX Design",
      icon: MousePointer,
      desc: "Design intuitive and user-centered digital experiences through wireframing, prototyping, and user research.",
      details: {
        responsibilities: [
          "Create user flows, personas, and journey maps",
          "Design clean, responsive interfaces and wireframes",
          "Build interactive prototypes using tools like Figma",
          "Conduct usability testing to improve designs"
        ],
        skills: ["Figma", "Prototyping", "User Research", "Wireframing"],
        duration: "3 / 6 Months"
      },
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Monitor,
      desc: "Build visually engaging and high-performance user interfaces using modern web technologies like React.",
      details: {
        responsibilities: [
          "Convert UI/UX designs into pixel-perfect code",
          "Ensure cross-browser and mobile compatibility",
          "Optimize performance and loading speeds",
          "Integrate with backend APIs for dynamic data"
        ],
        skills: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
        duration: "3 / 6 Months"
      },
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: Server,
      desc: "Power digital applications by building robust server-side logic, APIs, and managing secure databases.",
      details: {
        responsibilities: [
          "Develop RESTful APIs and data endpoints",
          "Design and manage secure databases (SQL/NoSQL)",
          "Implement user authentication and authorization",
          "Optimize server response time and handle errors"
        ],
        skills: ["Node.js", "Express.js", "MongoDB/SQL", "API Security"],
        duration: "3 / 6 Months"
      },
      color: "bg-green-50 text-green-600"
    },
    {
      id: "fullstack",
      title: "Full Stack Development",
      icon: Layers,
      desc: "Master the entire web development lifecycle by working on both client-side interfaces and server-side logic.",
      details: {
        responsibilities: [
          "Develop end-to-end web applications",
          "Connect frontend UIs with backend services",
          "Manage database storage and retrieval",
          "Debug and test full-stack features"
        ],
        skills: ["Frontend", "Backend", "Database Mgmt", "System Integration"],
        duration: "3 / 6 Months"
      },
      color: "bg-teal-50 text-teal-600"
    },
    {
      id: "mern",
      title: "MERN Stack Development",
      icon: Code,
      desc: "Specialize in full-stack JavaScript development using MongoDB, Express, React, and Node.js.",
      details: {
        responsibilities: [
          "Build responsive UI components with React",
          "Develop server-side logic with Node.js & Express",
          "Perform CRUD operations on MongoDB",
          "Handle full-stack integration and state management"
        ],
        skills: ["MongoDB", "Express", "React", "Node.js"],
        duration: "3 / 6 Months"
      },
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      id: "digital",
      title: "Digital Marketing",
      icon: TrendingUp,
      desc: "Drive brand growth through data-driven campaigns, SEO strategies, and performance analytics.",
      details: {
        responsibilities: [
          "Execute digital marketing campaigns across platforms",
          "Perform on-page and off-page SEO activities",
          "Track campaign performance and generate reports",
          "Optimize content for search engine visibility"
        ],
        skills: ["SEO", "Analytics", "Campaign Mgmt", "Content Strategy"],
        duration: "3 / 6 Months"
      },
      color: "bg-orange-50 text-orange-600"
    },
    {
      id: "social",
      title: "Social Media Mgmt",
      icon: Share2,
      desc: "Build online communities and manage brand presence through engaging content and strategic planning.",
      details: {
        responsibilities: [
          "Plan and publish content calendars",
          "Engage with followers and manage communities",
          "Track engagement metrics and growth trends",
          "Coordinate with design teams for visual assets"
        ],
        skills: ["Content Planning", "Community Mgmt", "Copywriting", "Trends"],
        duration: "3 / 6 Months"
      },
      color: "bg-red-50 text-red-600"
    },
    {
      id: "content",
      title: "Content Writing",
      icon: PenTool,
      desc: "Craft value-driven content including blogs, articles, and marketing copy that aligns with brand voice.",
      details: {
        responsibilities: [
          "Write SEO-optimized blogs and articles",
          "Create engaging social media captions and copy",
          "Research industry trends for content ideas",
          "Edit and proofread for clarity and quality"
        ],
        skills: ["Storytelling", "SEO Writing", "Research", "Editing"],
        duration: "3 / 6 Months"
      },
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      id: "data",
      title: "Data Science & Analytics",
      icon: BarChart,
      desc: "Transform raw data into actionable insights to support strategic business decision-making.",
      details: {
        responsibilities: [
          "Clean, organize, and validate large datasets",
          "Analyze data to identify trends and patterns",
          "Create dashboards and visual reports",
          "Support data-driven decision making"
        ],
        skills: ["Data Cleaning", "Visualization", "Analysis", "Reporting"],
        duration: "3 / 6 Months"
      },
      color: "bg-sky-50 text-sky-600"
    },
    {
      id: "video",
      title: "Video Editing",
      icon: Video,
      desc: "Produce high-quality video content for marketing and storytelling that captures audience attention.",
      details: {
        responsibilities: [
          "Edit raw footage into polished video content",
          "Add transitions, effects, and audio sync",
          "Optimize videos for different social platforms",
          "Collaborate on creative concepts and storyboards"
        ],
        skills: ["Editing Tools", "Storytelling", "Color Grading", "Audio Sync"],
        duration: "3 Months"
      },
      color: "bg-rose-50 text-rose-600"
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedRole(null);
  };



  return (
    <section className="py-12 md:py-24 px-4 md:px-6 font-sans relative" style={{ backgroundColor: theme.bg }}>
      
      {/* Custom Scrollbar Styles */}
      <style>{`
        .modal-scroll-container::-webkit-scrollbar {
          width: 6px;
        }
        .modal-scroll-container::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .modal-scroll-container::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .modal-scroll-container::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .modal-scroll-container {
          scroll-behavior: auto;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-10 md:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-[10px] md:text-xs font-bold tracking-wide mb-3 uppercase shadow-sm"
            style={{ color: theme.primary }}
          >
            Open Positions 2026
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4"
          >
            Explore Our <span style={{ color: theme.primary }}>Internship Domains</span>
          </motion.h2>
          <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Structured internships designed to bridge the gap between academic learning and industry requirements.
          </p>
        </div>

        {/* --- Domains Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {internshipRoles.map((role) => (
            <motion.div
              key={role.id}
              layoutId={`card-${role.id}`}
              onClick={() => setSelectedRole(role)}
              variants={itemVariants}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer relative overflow-hidden active:scale-95 md:active:scale-100"
            >
              <div>
                {/* Icon Header */}
                <div className="flex justify-between items-start mb-4 md:mb-5">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${role.color}`}>
                    <role.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div className="px-2 py-1 rounded-md bg-gray-50 border border-gray-100 flex items-center gap-1">
                    <Clock size={10} className="text-gray-400 md:w-3 md:h-3" />
                    <span className="text-[10px] font-semibold text-gray-500">{role.details.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {role.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mb-4 leading-relaxed line-clamp-3">
                  {role.desc}
                </p>

                {/* Skills Tags Preview */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2">
                  {role.details.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="text-[9px] md:text-[10px] font-medium px-2 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100">
                      {skill}
                    </span>
                  ))}
                  {role.details.skills.length > 3 && (
                    <span className="text-[9px] md:text-[10px] font-medium px-2 py-1 rounded-full bg-gray-50 text-gray-400 border border-gray-100">
                      +{role.details.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between group-hover:border-[#1E7A86]/20 transition-colors">
                <span className="text-[10px] md:text-xs font-medium text-gray-400 group-hover:text-[#1E7A86] transition-colors">Tap to view details</span>
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#1E7A86] group-hover:text-white transition-all">
                   <ArrowRight size={12} className="md:w-3.5 md:h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Modal / Expanded View --- */}
        <AnimatePresence>
          {selectedRole && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={handleCloseModal}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              />
              
              {/* Modal Card Structure */}
              <motion.div 
                layoutId={`card-${selectedRole.id}`}
                className="bg-white w-full max-w-2xl rounded-2xl md:rounded-3xl shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[85vh] md:max-h-[80vh]"
              >
                
                {/* 1. Modal Header (Fixed, No Scroll) */}
                <div className={`p-5 md:p-8 ${selectedRole.color.split(' ')[0]} bg-opacity-20 shrink-0 relative`}>
                  <button 
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 p-2 bg-white/60 hover:bg-white rounded-full transition-colors z-20"
                  >
                    <X size={18} className="text-gray-600 md:w-5 md:h-5" />
                  </button>
                  
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 pr-10">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm shrink-0 ${selectedRole.color.split(' ')[1]}`}>
                      <selectedRole.icon size={24} className="md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{selectedRole.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={12} className="text-gray-500" />
                        <p className="text-xs md:text-sm font-medium opacity-80">{selectedRole.details.duration} Internship</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs md:text-base text-gray-700 leading-relaxed max-w-xl">
                    {selectedRole.desc}
                  </p>
                </div>

                {/* 2. Modal Body (Scrollable Area) */}
                <div 
                  ref={modalBodyRef}
                  className="p-5 md:p-8 overflow-y-auto modal-scroll-container flex-1"
                >
                  {/* Responsibilities */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 md:mb-4">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {selectedRole.details.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                          <CheckCircle2 size={16} className="text-[#1E7A86] mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Grid */}
                  <div>
                    <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 md:mb-4">Skills You'll Master</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedRole.details.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-600">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Note:</span> This internship includes mentorship, real-world projects, and a certificate upon successful completion.
                    </p>
                    <p className="text-xs text-gray-500">
                      Applications are reviewed on a rolling basis. Early applicants have higher chances of selection.
                    </p>
                  </div>
                </div>

                {/* 3. Modal Footer (Fixed, No Scroll) */}
                <div className="p-4 md:p-6 border-t border-gray-100 bg-white shrink-0 z-20">
                    <Link to="/apply-internship">
                  <button 
                    className="w-full py-3 rounded-xl bg-[#1E7A86] text-white font-bold text-sm hover:bg-[#155d66] transition-colors shadow-lg shadow-[#1E7A86]/20 active:scale-95 transform"
                    >
                    Apply for {selectedRole.title}
                  </button>
                      </Link>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default InternshipDomains;