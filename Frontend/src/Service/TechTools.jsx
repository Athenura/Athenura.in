import React from 'react';
import { 
  Database, Server, Layout, Smartphone, Cloud, 
  Code2, Figma, Layers, Globe, Cpu, Box, Terminal 
} from 'lucide-react';

// Tech categories for display
const techStack = [
  { name: "React", icon: <Code2 /> },
  { name: "Node.js", icon: <Server /> },
  { name: "MongoDB", icon: <Database /> },
  { name: "Express", icon: <Terminal /> },
  { name: "Next.js", icon: <Globe /> },
  { name: "Tailwind", icon: <Layout /> },
  { name: "AWS", icon: <Cloud /> },
  { name: "Flutter", icon: <Smartphone /> },
  { name: "Figma", icon: <Figma /> },
  { name: "Docker", icon: <Box /> },
  { name: "Python", icon: <Code2 /> },
  { name: "GraphQL", icon: <Layers /> },
  { name: "Firebase", icon: <Database /> },
  { name: "Redux", icon: <Cpu /> },
];

const AthenuraTechStack = () => {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-[#1E7A86] font-bold text-xs md:text-sm tracking-widest uppercase mb-3">
            Powering Your Growth
        </h2>
        <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900">
            Our Technology <span className="text-[#35B4C7]">Arsenal</span>
        </h3>
      </div>

      {/* Marquee Container with Fade Edges */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Row 1: Moving Left */}
        <div className="flex gap-8 mb-8 animate-marquee">
          {[...techStack, ...techStack].map((tech, index) => (
            <div 
              key={`row1-${index}`} 
              className="flex items-center gap-3 px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl min-w-[160px] group hover:border-[#35B4C7] hover:bg-[#E8F8FA] transition-all duration-300 cursor-default"
            >
              <div className="text-gray-400 group-hover:text-[#1E7A86] transition-colors">
                {tech.icon}
              </div>
              <span className="font-bold text-gray-500 group-hover:text-[#1E7A86] transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: Moving Right */}
        <div className="flex gap-8 animate-marquee-reverse">
          {[...techStack, ...techStack].reverse().map((tech, index) => (
            <div 
              key={`row2-${index}`} 
              className="flex items-center gap-3 px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl min-w-[160px] group hover:border-[#35B4C7] hover:bg-[#E8F8FA] transition-all duration-300 cursor-default"
            >
              <div className="text-gray-400 group-hover:text-[#1E7A86] transition-colors">
                {tech.icon}
              </div>
              <span className="font-bold text-gray-500 group-hover:text-[#1E7A86] transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 10s linear infinite;
        }
        /* Pause on hover for better UX */
        .animate-marquee:hover, .animate-marquee-reverse:hover {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AthenuraTechStack;