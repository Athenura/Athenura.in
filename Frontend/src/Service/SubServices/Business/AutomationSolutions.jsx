import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Users, 
  MessageSquare, 
  BarChart3, 
  ShoppingCart, 
  ShieldCheck, 
  ArrowRight,
  Check
} from 'lucide-react';

const AutomationSolutions = () => {
  // Theme Constants
  const COLORS = {
    primaryLight: "#28A3B9",
    primaryDark: "#1E7A86",
    bg: "#FFFFFF",
    bgAlt: "#F8FAFC", // Slate-50
  };

  const solutions = [
    {
      title: "Finance & Invoicing",
      description: "Auto-extract data from PDFs, match POs, and push payments to your ERP without human error.",
      icon: <CreditCard size={24} />,
      steps: ["Scan PDF", "Match PO", "Pay Vendor"]
    },
    {
      title: "HR Onboarding",
      description: "Provision accounts, send contracts, and schedule training sessions the moment a candidate signs.",
      icon: <Users size={24} />,
      steps: ["Sign Doc", "Create ID", "Welcome Email"]
    },
    {
      title: "Customer Support",
      description: "Route tickets based on sentiment analysis and auto-resolve common queries instantly.",
      icon: <MessageSquare size={24} />,
      steps: ["Analyze", "Route Ticket", "Auto-Reply"]
    },
    {
      title: "Marketing Ops",
      description: "Sync leads from webinars directly to CRM and trigger personalized nurture sequences.",
      icon: <BarChart3 size={24} />,
      steps: ["Capture Lead", "Update CRM", "Send Drip"]
    },
    {
      title: "E-Commerce",
      description: "Update inventory across channels and process returns automatically upon receipt.",
      icon: <ShoppingCart size={24} />,
      steps: ["Order Placed", "Sync Stock", "Ship Item"]
    },
    {
      title: "Security Compliance",
      description: "Monitor logs for anomalies and auto-revoke access for suspicious activities.",
      icon: <ShieldCheck size={24} />,
      steps: ["Scan Log", "Flag Alert", "Lock User"]
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-10 px-6 relative overflow-hidden" style={{ backgroundColor: COLORS.bgAlt }}>
      
      {/* Background Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Orchestrate your <br/>
            <span style={{ color: COLORS.primaryLight }}>entire enterprise.</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-500 text-lg"
          >
            Connect disparate systems into a unified flow. Our platform handles the logic so your team can handle the strategy.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((item, idx) => (
            <SolutionCard key={idx} item={item} colors={COLORS} />
          ))}
        </motion.div>

        {/* Bottom CTA Area */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          {/* <button className="group inline-flex items-center gap-2 font-semibold text-lg hover:underline transition-all" style={{ color: COLORS.primaryDark }}>
             Explore all 50+ integrations 
             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button> */}
        </motion.div>

      </div>
    </section>
  );
};

// --- Sub-Component: The Interactive Card ---
const SolutionCard = ({ item, colors }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover="hover"
      className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Hover Gradient Border Effect */}
      <div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-[#28A3B9] group-hover:to-[#1E7A86] transition-all duration-500" 
      />

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
          style={{ backgroundColor: `${colors.primaryLight}15`, color: colors.primaryDark }}
        >
          {item.icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
      </div>

      <p className="text-slate-500 text-sm leading-relaxed mb-8 h-12">
        {item.description}
      </p>

      {/* The Mini Workflow Simulation (Visual Magic) */}
      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 relative">
        <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
          <span>Workflow</span>
          <span className="group-hover:text-[#28A3B9] transition-colors">Running...</span>
        </div>
        
        <div className="flex items-center justify-between relative z-10">
          {item.steps.map((step, i) => (
            <React.Fragment key={i}>
              {/* Step Node */}
              <div className="flex flex-col items-center gap-2">
                <motion.div 
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white z-10"
                  variants={{
                    hover: { 
                      borderColor: colors.primaryLight,
                      scale: 1.1,
                      transition: { delay: i * 0.4, duration: 0.2 } // Sequential light up
                    }
                  }}
                  style={{ borderColor: '#e2e8f0' }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: { opacity: 1, transition: { delay: i * 0.4 } }
                    }}
                  >
                    <Check size={14} color={colors.primaryLight} strokeWidth={3} />
                  </motion.div>
                </motion.div>
                <span className="text-[10px] font-medium text-slate-500">{step}</span>
              </div>

              {/* Connecting Line (except after last item) */}
              {i !== item.steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-slate-200 relative mx-2 -mt-6">
                  {/* The moving dot/beam */}
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-[#28A3B9]"
                    initial={{ width: "0%" }}
                    variants={{
                      hover: { 
                        width: "100%",
                        transition: { delay: i * 0.4, duration: 0.4, ease: "linear" }
                      }
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default AutomationSolutions;