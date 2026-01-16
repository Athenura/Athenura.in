import React from 'react';
import { 
  Users, 
  Cpu, 
  BadgeDollarSign, 
  Rocket, 
  Headphones, 
  Scaling 
} from 'lucide-react';

const differentiators = [
  {
    title: "Experienced Team",
    description: "A collective of seasoned developers and creative minds who have delivered over 50+ successful projects across various industries.",
    icon: <Users size={32} />
  },
  {
    title: "Modern Tech Stack",
    description: "We don't use outdated tech. We build on the latest MERN stack, Next.js, and Cloud architectures to ensure your product is future-proof.",
    icon: <Cpu size={32} />
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees, no surprise costs. We provide detailed breakdowns and fixed-cost models so you know exactly what you're paying for.",
    icon: <BadgeDollarSign size={32} />
  },
  {
    title: "On-Time Delivery",
    description: "We value your time. Our agile workflow and strict sprint planning ensure that we hit milestones and launch dates without delays.",
    icon: <Rocket size={32} />
  },
  {
    title: "Dedicated Support",
    description: "Our relationship doesn't end at deployment. We offer 24/7 post-launch support and maintenance to keep your business running.",
    icon: <Headphones size={32} />
  },
  {
    title: "Scalable Architecture",
    description: "We build systems designed to grow. From 100 to 1 million users, our software scales effortlessly with your business needs.",
    icon: <Scaling size={32} />
  }
];

const AthenuraWhyUs = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden font-sans">
      
      {/* Background: Technical Dot Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#1E7A86 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Why Leading Brands <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E7A86] to-[#35B4C7]">
              Choose Us
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            We bridge the gap between complex technology and simple, effective business solutions. Here is what sets us apart.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(30,122,134,0.15)] hover:border-[#35B4C7]/50 transition-all duration-300"
            >
              
              {/* Decorative Corner Gradient on Hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#E8F8FA] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon Container */}
              <div className="relative z-10 w-14 h-14 mb-6 rounded-xl bg-gray-50 text-[#1E7A86] flex items-center justify-center group-hover:bg-[#1E7A86] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1E7A86] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600">
                  {item.description}
                </p>
              </div>

              {/* Bottom Line Animation */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#1E7A86] to-[#35B4C7] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-2xl"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AthenuraWhyUs;