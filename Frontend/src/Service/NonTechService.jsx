import React from 'react';
import { 
  Video, 
  Share2, 
  PenTool, 
  Megaphone, 
  Type, 
  LayoutTemplate, 
  ArrowUpRight 
} from 'lucide-react';
import { Link } from "react-router-dom";

const creativeServices = [
  {
    id: "01",
    title: "Video Editing & Motion Graphics",
    description: "Transform raw footage into captivating visual stories with high-end editing, VFX, and motion graphics.",
    icon: <Video size={28} />,
    tags: ["Premiere Pro", "After Effects", "DaVinci"],
    deliverables: ["Reels & Shorts", "Corp. Videos", "Product Ads"]
  },
  {
    id: "02",
    title: "Social Media Management",
    description: "Strategic content planning and community engagement to grow your brand presence across all platforms.",
    icon: <Share2 size={28} />,
    tags: ["Strategy", "Analytics", "Engagement"],
    deliverables: ["Content Calendar", "Growth Hacking", "Community Mgmt"]
  },
  {
    id: "03",
    title: "Graphic Designing",
    description: "Eye-catching visuals that communicate your brand message effectively and leave a lasting impression.",
    icon: <PenTool size={28} />,
    tags: ["Photoshop", "Illustrator", "Canva Pro"],
    deliverables: ["Social Posts", "Marketing Kits", "Infographics"]
  },
  {
    id: "04",
    title: "Brand Identity & Logo",
    description: "Crafting unique visual identities, from memorable logos to comprehensive brand style guides.",
    icon: <LayoutTemplate size={28} />,
    tags: ["Typography", "Color Psychology", "Branding"],
    deliverables: ["Logo Design", "Brand Guidelines", "Stationery"]
  },
  {
    id: "05",
    title: "Content Writing & SEO",
    description: "Persuasive copywriting and SEO-optimized content that ranks high and converts visitors into customers.",
    icon: <Type size={28} />,
    tags: ["SEO", "Copywriting", "Storytelling"],
    deliverables: ["Blogs", "Website Copy", "Ad Scripts"]
  },
  {
    id: "06",
    title: "Digital Marketing Ads",
    description: "Data-driven ad campaigns on Google and Meta designed to maximize ROI and lead generation.",
    icon: <Megaphone size={28} />,
    tags: ["Google Ads", "Meta Ads", "Retargeting"],
    deliverables: ["PPC Campaigns", "Lead Gen", "Performance Tracking"]
  }
];

const AthenuraCreative = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-gray-50 overflow-hidden font-sans">
      
      {/* Background Decor: Subtle pattern to keep it from being 'boring white' */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#E8F8FA] rounded-full filter blur-[120px] opacity-60"></div>
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-gray-100 rounded-full filter blur-[120px] opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
               <span className="w-8 h-[2px] bg-[#1E7A86]"></span>
               <h2 className="text-[#1E7A86] font-bold text-xs md:text-sm tracking-widest uppercase">
                 Creative Studio
               </h2>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Designing Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E7A86] to-[#35B4C7]">
                Digital Identity
              </span>
            </h2>
          </div>
          <p className="text-gray-600 text-sm md:text-lg max-w-md text-left md:text-right leading-relaxed">
            We don't just build the technology; we tell the story, design the brand, and grow the audience.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {creativeServices.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-500 ease-out hover:-translate-y-2 border border-gray-100 shadow-sm hover:shadow-2xl overflow-hidden cursor-pointer"
            >
              
              {/* HOVER EFFECT: Gradient Overlay that fades in */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E7A86] to-[#155E66] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              {/* Decorative Circle appearing on hover */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#35B4C7] rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-0"></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                
                {/* Top Section */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    {/* Icon Box */}
                    <div className="p-3 md:p-4 rounded-xl bg-[#E8F8FA] text-[#1E7A86] group-hover:bg-white/10 group-hover:text-white transition-all duration-500 backdrop-blur-sm shadow-sm group-hover:shadow-none">
                      {service.icon}
                    </div>
                    {/* ID Number */}
                    <span className="text-4xl font-black text-gray-100 group-hover:text-white/10 transition-colors duration-500">
                      {service.id}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300 mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Section */}
                <div>
                  {/* Divider */}
                  <div className="w-full h-px bg-gray-100 group-hover:bg-white/20 mb-5 transition-colors duration-300"></div>

                  <div className="flex flex-col gap-4">
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                       {service.tags.map((tag, i) => (
                         <span key={i} className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wide rounded md:rounded-lg bg-gray-50 text-gray-500 border border-gray-100 group-hover:bg-black/20 group-hover:text-white group-hover:border-white/10 transition-all duration-300">
                           {tag}
                         </span>
                       ))}
                    </div>

                    {/* Deliverables (Bullet points) */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {service.deliverables.map((item, i) => (
                            <span key={i} className="flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#35B4C7] group-hover:bg-white mr-2 transition-colors duration-300"></span>
                                {item}
                            </span>
                        ))}
                    </div>
                  </div>
                  
                  {/* Floating Action Arrow */}
                  <div className="absolute bottom-6 right-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div className="p-2.5 rounded-full bg-white text-[#1E7A86] shadow-lg">
                        <ArrowUpRight size={20} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
            <Link to="/contact">
                <button className="relative overflow-hidden group px-8 py-4 rounded-full bg-white text-[#1E7A86] border border-[#1E7A86] font-bold text-sm md:text-base tracking-wide transition-all duration-300 shadow-sm hover:shadow-lg hover:border-[#35B4C7]">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#1E7A86] to-[#35B4C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                        START A CREATIVE PROJECT
                        <ArrowUpRight size={18} />
                    </span>
                </button>
            </Link>
        </div>

      </div>
    </section>
  );
};

export default AthenuraCreative;