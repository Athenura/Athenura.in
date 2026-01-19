import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Code2, 
  ShieldCheck, 
  Gauge, 
  Layers, 
  Cpu, 
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const THEME_COLOR = '#53B5C7';

  // Service Data
  const services = [
    {
      title: "Automated Testing",
      description: "Accelerate release cycles with AI-driven scripts that run 24/7 across all environments.",
      icon: <Cpu size={32} />,
    },
    {
      title: "Mobile App QA",
      description: "Ensure flawless performance on iOS and Android with real-device farm testing.",
      icon: <Smartphone size={32} />,
    },
    {
      title: "Security Audits",
      description: "Identify vulnerabilities before hackers do with our comprehensive penetration testing.",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "Performance & Load",
      description: "Simulate millions of users to ensure your infrastructure holds up under pressure.",
      icon: <Gauge size={32} />,
    },
    {
      title: "API Testing",
      description: "Validate the logic layer of your architecture independently from the UI.",
      icon: <Code2 size={32} />,
    },
    {
      title: "Manual & Exploratory",
      description: "Human intuition meets technical rigor to catch UX flaws automation misses.",
      icon: <Layers size={32} />,
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#53B5C7]/5 rounded-full blur-3xl -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive QA <span style={{ color: THEME_COLOR }}>Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            We don't just find bugs; we prevent them. Choose the testing strategy that fits your deployment pipeline.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Hover Top Border */}
              <div 
                className="absolute top-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full rounded-t-2xl"
                style={{ backgroundColor: THEME_COLOR }} 
              />

              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:text-white"
                style={{ 
                  backgroundColor: `${THEME_COLOR}15`, // 10% opacity hex
                  color: THEME_COLOR 
                }}
              >
                {/* We use a CSS trick to change icon color on hover via inline style override in JS or Class logic */}
                <div className="group-hover:text-white transition-colors text-[#53B5C7] group-hover:scale-110 duration-300">
                   {/* To make the icon turn white on hover, we need to style the wrapper wrapper above or the icon itself. 
                       Here I set the wrapper bg to solid theme color on hover. */}
                   <style jsx>{`
                     .group:hover .icon-bg {
                        background-color: ${THEME_COLOR};
                     }
                   `}</style>
                   {/* Let's do it with Tailwind classes for the background wrapper instead */}
                </div>
                {/* Actual Icon Wrapper Re-done for simpler Tailwind hover */}
                <div className={`absolute w-16 h-16 rounded-xl flex items-center justify-center top-8 left-8 transition-all duration-300 bg-[#53B5C7]/10 text-[#53B5C7] group-hover:bg-[#53B5C7] group-hover:text-white`}>
                    {service.icon}
                </div>
              </div>

              

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#53B5C7] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 mb-6 leading-relaxed">
                {service.description}
              </p>

            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
        </motion.div>

      </div>
    </section>
  );
};

export default Services;