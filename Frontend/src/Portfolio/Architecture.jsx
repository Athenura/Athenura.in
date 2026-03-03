import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Image, Layers, Palette, Sparkles, Eye,
  Download, Share2, Heart, Star, Grid3X3,
  Maximize2, X, ChevronLeft, ChevronRight,
  Clock, Users, Award, ThumbsUp, FolderOpen,
  TrendingUp, Camera, PenTool, FileText,
  Facebook, Twitter, Instagram, Link2
} from 'lucide-react';

const CreativePortfolioSection = () => {
  // --- Configuration & Theme ---
  const theme = {
    primary: '#1E7A86', // Pink for creative vibe
    secondary: '#1E7A86',
    accent: '#F2B807', // Gold accent
    bg: '#fff',
    cardBg: '#ffffff',
    textMain: '#1a0f24',
    textMuted: '#6b5b7c',
  };

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dummy project data with multiple slides/pages
  const projects = [
    {
      id: 1,
      type: "Poster Series",
      title: "Summer Music Festival",
      client: "BeatWave Events",
      year: "2024",
      description:
        "Vibrant poster series for a 3-day music festival featuring electronic, rock, and indie artists.",
      slides: [
        {
          id: 1,
          type: "image",
          url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
          alt: "Main Festival Poster",
          caption: "Main Event Poster"
        },
      ],
      tags: ["Music", "Festival", "Vibrant", "Typography"]
    },

    {
      id: 2,
      type: "Flyer Collection",
      title: "Restaurant Grand Opening",
      client: "Spice Kitchen",
      year: "2024",
      description:
        "A collection of promotional flyers for a new restaurant opening, including menu teasers and special offers.",
      slides: [
        {
          id: 1,
          type: "image",
          url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
          alt: "Grand Opening Flyer",
          caption: "Opening Announcement"
        },
        {
          id: 2,
          type: "image",
          url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
          alt: "Menu Specials",
          caption: "Signature Dishes"
        },
      ],
      tags: ["Restaurant", "Food", "Promotional", "Elegant"]
    },

    {
      id: 3,
      type: "Carousel Design",
      title: "Product Launch Story",
      client: "TechGadget Pro",
      year: "2024",
      description:
        "Instagram carousel design telling the story of a new smartwatch launch with 5 engaging slides.",
      slides: [
        {
          id: 1,
          type: "image",
          url: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
          alt: "Teaser Slide",
          caption: "The Wait is Over"
        },
        {
          id: 2,
          type: "image",
          url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
          alt: "Features Slide",
          caption: "Key Features"
        },
      ],
      tags: ["Social Media", "Carousel", "Product", "Storytelling"]
    },
  ];


  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: "Check out this project!",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  // Open project popup
  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    document.body.style.overflow = 'hidden';
  };

  // Close project popup
  const closeProject = () => {
    setSelectedProject(null);
    setCurrentSlide(0);
    document.body.style.overflow = 'auto';
  };

  // Navigate slides
  const nextSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) =>
        prev === selectedProject.slides.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) =>
        prev === 0 ? selectedProject.slides.length - 1 : prev - 1
      );
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;

      if (e.key === 'Escape') {
        closeProject();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentSlide]);

  // Popup Portal Component
  const ProjectPopup = () => {
    if (!selectedProject) return null;

    return createPortal(
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
          onClick={closeProject}
        >
          {/* Popup Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm">
                  {selectedProject.type}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm">
                  {selectedProject.slides.length} Slides
                </span>
              </div>
              <button
                onClick={closeProject}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
              {/* Image Viewer */}
              <div className="lg:col-span-2 bg-slate-900 relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={selectedProject.slides[currentSlide].url}
                    alt={selectedProject.slides[currentSlide].alt}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full object-contain p-4"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {selectedProject.slides.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Slide Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                  {currentSlide + 1} / {selectedProject.slides.length}
                </div>

                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-center text-white text-sm bg-black/50 px-4 py-2 rounded-full max-w-md mx-auto backdrop-blur-sm">
                  {selectedProject.slides[currentSlide].caption}
                </div>
              </div>

              {/* Details Panel */}
              <div className="bg-white p-6 overflow-y-auto max-h-[600px]">
                <div className="hidden md:block">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm text-slate-500 mb-1">
                    Client: {selectedProject.client}
                  </p>
                  <p className="text-xs text-slate-400 mb-4">
                    {selectedProject.year}
                  </p>

                  <p className="text-slate-600 text-sm mb-6">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Thumbnail Strip */}
                <div className="mb-10">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">All Slides</h3>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedProject.slides.map((slide, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all
                          ${currentSlide === idx ? `border-[${theme.primary}]` : 'border-transparent opacity-60'}`}
                      >
                        <img src={slide.url} alt={slide.alt} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6 hidden md:block">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handleShare}
                    className="flex-1 py-2 px-4 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>,
      document.body
    );
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden font-sans" style={{ backgroundColor: theme.bg }}>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, ${theme.primary} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">

        {/* --- Header Section --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            Visual Stories That <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r"
              style={{ backgroundImage: `linear-gradient(to right, ${theme.secondary}, ${theme.primary})` }}>
              Captivate & Convert
            </span>
          </motion.h2>
          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
            From posters to social media carousels each design tells a unique story. Click any project to explore every slide in detail.
          </p>
        </div>


        {/* --- Creative Grid / Portfolio --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => openProject(project)}
            >
              {/* Preview Image Stack */}
              <div className="relative h-48 bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                {/* Show first slide as main image */}
                <img
                  src={project.slides[0].url}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Slide count badge */}
                <div className="absolute top-3 right-3 z-20 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                  <Layers size={12} />
                  {project.slides.length} {project.slides.length === 1 ? 'slide' : 'slides'}
                </div>

                {/* Type badge */}
                <div className="absolute bottom-3 left-3 z-20 bg-white/90 text-slate-800 text-xs px-2 py-1 rounded-full font-medium">
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                <p className="text-xs text-slate-400 mb-3">Client: {project.client} • {project.year}</p>

                <p className="text-sm text-slate-600 line-clamp-2 mb-4">{project.description}</p>

                {/* Mini slide previews */}
                <div className="flex items-center gap-1 mb-4">
                  {project.slides.slice(0, 3).map((slide, slideIdx) => (
                    <div key={slideIdx} className="w-8 h-8 rounded bg-slate-100 overflow-hidden border border-slate-200">
                      <img src={slide.url} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {project.slides.length > 3 && (
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-500 font-medium border border-slate-200">
                      +{project.slides.length - 3}
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Popup Portal */}
      <ProjectPopup />
    </section>
  );
};

export default CreativePortfolioSection;