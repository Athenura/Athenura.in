import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  FileSpreadsheet, 
  Terminal, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';

const Process = () => {
  const THEME_COLOR = '#53B5C7';

  const steps = [
    {
      id: 1,
      title: "Discovery & Audit",
      description: "We analyze your current stack, identify bottlenecks, and define critical KPIs for your testing strategy.",
      icon: <Search size={24} />,
    },
    {
      id: 2,
      title: "Strategy & Planning",
      description: "Our architects build a custom test plan, selecting the right automation frameworks and coverage targets.",
      icon: <FileSpreadsheet size={24} />,
    },
    {
      id: 3,
      title: "Execution & Automation",
      description: "We deploy scripts into your CI/CD pipeline. Bugs are caught, logged, and re-tested automatically.",
      icon: <Terminal size={24} />,
    },
    {
      id: 4,
      title: "Delivery & Maintenance",
      description: "You get a bug-free build. We continue monitoring production to ensure stability after launch.",
      icon: <Rocket size={24} />,
    },
  ];

  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* --- Process/Timeline Section --- */}
      <section id='process' className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            How We <span style={{ color: THEME_COLOR }}>Work</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From the first audit to final deployment, our transparent workflow keeps you in the loop.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Text Content */}
                  <div className={`flex-1 text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Number/Icon Bubble */}
                  <div className="relative z-10 flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-xl border-4 border-white"
                      style={{ backgroundColor: THEME_COLOR }}
                    >
                      {step.icon}
                    </div>
                    {/* Mobile Line Connector (Small screens only) */}
                    {index !== steps.length - 1 && (
                      <div className="md:hidden absolute top-16 left-1/2 w-1 h-12 bg-gray-200 -translate-x-1/2" />
                    )}
                  </div>

                  {/* Empty Spacer for Alignment */}
                  <div className="flex-1 hidden md:block" />
                  
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CTA Section (The "Proper Section" for the Button) --- */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 skew-y-3 transform origin-bottom-left -z-10" 
          style={{ backgroundColor: THEME_COLOR }}
        />
        <div 
           className="absolute inset-0 bg-gray-900/10 -z-10 skew-y-3 transform origin-bottom-left"
        />

        <div className="max-w-4xl mx-auto px-6 text-center text-black relative z-10">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Ready to ship flawless code?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 opacity-90"
          >
            Join 500+ companies who trust us with their QA. 
            <br className="hidden md:block" /> Get a free audit of your current testing suite today.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="tel:+919835051934">
            <button className="px-10 py-5 rounded-full bg-white text-[#53B5C7] font-bold text-lg shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 flex items-center gap-2">
              Start Your Service <ArrowRight size={20} />
            </button>
            </a>
            
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Process;