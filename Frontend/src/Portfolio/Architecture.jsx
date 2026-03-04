import React, { useState, useEffect, useCallback, memo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Layers, Share2, Check } from 'lucide-react';

// --- Memoized Project Card to prevent unnecessary re-renders ---
const ProjectCard = memo(({ project, onOpen }) => (
  <motion.div
    layoutId={`card-container-${project.id}`}
    onClick={() => onOpen(project)}
    className="relative h-[450px] w-full group cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
  >
    <div className="relative w-full h-full bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 flex flex-col">
      <motion.img 
        layoutId={`card-image-${project.id}`}
        src={project.slides[0].url} 
        alt={project.title} 
        className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="p-6 flex-1 flex flex-col justify-center">
        <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-600 uppercase mb-2 block">
          {project.type}
        </span>
        <h3 className="text-xl font-bold text-slate-900 leading-tight">
          {project.title}
        </h3>
        <div className="flex gap-2 mt-4 items-center">
          <div className="flex -space-x-2">
            {project.slides.slice(0, 3).map((s, i) => (
              <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-slate-100 shadow-sm">
                <img src={s.url} className="w-full h-full object-cover" alt="" />
              </div>
            ))}
          </div>
          <span className="text-[11px] text-slate-400 font-bold ml-1 uppercase">
            {project.slides.length} Slides
          </span>
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-sm">
        <Layers size={16} className="text-slate-700" />
      </div>
    </div>
  </motion.div>
));

const CreativePortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isShared, setIsShared] = useState(false);

  const projects = [
    {
      id: 2,
      type: "Branding",
      title: "Burger Campaign Design",
      client: "Food & Restaurant Promotion",
      year: "2025",
      description: "A bold and modern promotional branding design for a premium burger campaign. The project includes multiple poster styles featuring vibrant food visuals, strong typography, and a consistent red-themed branding layout for digital marketing and restaurant promotions.",
      slides: [
        { id: 1, type: "image", url: "https://ik.imagekit.io/cn4giet1a/Athenura%201%20Carousel/1.png?updatedAt=1772541061256", caption: "Stacked With Flavour" },
        { id: 2, type: "image", url: "https://ik.imagekit.io/cn4giet1a/Athenura%201%20Carousel/2.png?updatedAt=1772541061273", caption: "Special Sunday Burger" },
        { id: 3, type: "image", url: "https://ik.imagekit.io/cn4giet1a/Athenura%201%20Carousel/3.png?updatedAt=1772541060971", caption: "Love At First Bite" },
        { id: 4, type: "image", url: "https://ik.imagekit.io/cn4giet1a/Athenura%201%20Carousel/4.png?updatedAt=1772541061303", caption: "Combo Meal Promotion" }
      ]
    }
  ];

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    setCurrentSlide(0);
    setIsShared(false);
    document.body.style.overflow = 'auto';
  }, []);

  const openProject = useCallback((project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  }, []);

  // --- SHARE FUNCTIONALITY ---
  const handleShare = async (project) => {
    const shareText = `${project.title}\n\n${project.description}`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(`${shareText}\n\nView here: ${shareUrl}`);
      setIsShared(true);
      setTimeout(() => setIsShared(false), 2000);
    }
  };

  const ProjectPopup = () => {
    if (!selectedProject) return null;

    return createPortal(
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProject}
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-2xl"
        />

        <motion.div
          layoutId={`card-container-${selectedProject.id}`}
          className="relative w-full max-w-7xl h-full max-h-[850px] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left: Interactive Carousel */}
          <div className="relative flex-[2] bg-slate-50 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-slate-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                layoutId={currentSlide === 0 ? `card-image-${selectedProject.id}` : undefined}
                src={selectedProject.slides[currentSlide].url}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="max-h-full max-w-full object-contain p-8 md:p-12 select-none"
                draggable="false"
              />
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
              <button 
                onClick={() => setCurrentSlide(prev => (prev > 0 ? prev - 1 : selectedProject.slides.length - 1))}
                className="p-4 rounded-full bg-white/90 shadow-xl pointer-events-auto hover:scale-110 active:scale-95 transition-all text-slate-900"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setCurrentSlide(prev => (prev < selectedProject.slides.length - 1 ? prev + 1 : 0))}
                className="p-4 rounded-full bg-white/90 shadow-xl pointer-events-auto hover:scale-110 active:scale-95 transition-all text-slate-900"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-black shadow-lg">
              {currentSlide + 1} / {selectedProject.slides.length}
            </div>
          </div>

          {/* Right: Info Sidebar */}
          <div className="flex-1 p-8 md:p-14 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-8">
              <div className="flex justify-between items-start">
                <span className="px-4 py-1.5 bg-cyan-50 text-cyan-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Project Gallery
                </span>
                <button onClick={closeProject} className="p-3 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                  <X size={24} />
                </button>
              </div>

              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Quick Navigation</h4>
                <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                  {selectedProject.slides.map((slide, i) => (
                    <button 
                      key={i} 
                      onClick={() => setCurrentSlide(i)}
                      className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        currentSlide === i ? 'border-cyan-500 scale-105' : 'border-transparent opacity-50'
                      }`}
                    >
                      <img src={slide.url} className="w-full h-full object-cover" alt="" />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                  {selectedProject.title}
                </h2>
                <p className="text-slate-500 leading-relaxed text-lg">
                  {selectedProject.description}
                </p>
              </div>
            </div>

            <button 
              onClick={() => handleShare(selectedProject)}
              className={`w-full py-5 rounded-[20px] font-bold flex items-center justify-center gap-3 transition-all shadow-xl mt-8 ${
                isShared ? 'bg-green-500 text-white shadow-green-100' : 'bg-slate-900 text-white shadow-slate-200 hover:bg-cyan-700'
              }`}
            >
              {isShared ? <Check size={20} /> : <Share2 size={20} />}
              {isShared ? "Copied to Clipboard!" : "Share This Portfolio"}
            </button>
          </div>
        </motion.div>
      </div>,
      document.body
    );
  };

  return (
    <section className="py-24 bg-slate-50 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
            LATEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">WORKS.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Explore our creative branding campaigns and visual stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpen={openProject} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectPopup />}
      </AnimatePresence>
    </section>
  );
};

export default CreativePortfolioSection;