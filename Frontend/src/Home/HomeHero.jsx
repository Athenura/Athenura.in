import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from "react-router-dom";

const AthenuraHero = () => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const [stage, setStage] = useState('brand-reveal');
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Scroll-based transformations
  const { scrollY } = useScroll();
  const yVideo = useTransform(scrollY, [0, 500], [0, -50]);
  const scaleVideo = useTransform(scrollY, [0, 500], [1, 1.1]);
  const yCanvas = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityCanvas = useTransform(scrollY, [0, 300], [0.8, 0.3]);
  const yContent = useTransform(scrollY, [0, 300], [0, 30]);
  const opacityContent = useTransform(scrollY, [0, 200], [1, 0.9]);

  // Interest options
const interestOptions = [
  { value: 'website-development', label: 'Website Development' },
  { value: 'software-development', label: 'Software Development' },
  { value: 'ui-ux-design', label: 'UI/UX Design' },
  { value: 'mobile-app-development', label: 'Mobile App Development' },
  { value: 'digital-marketing', label: 'Digital Marketing' },
  { value: 'video-editing', label: 'Video Editing' },
  { value: 'graphic-design', label: 'Graphic Design' },
  { value: 'ecommerce-development', label: 'E-Commerce Development' },
  { value: 'seo-services', label: 'SEO Services' },
  { value: 'social-media-management', label: 'Social Media Management' },
  { value: 'content-creation', label: 'Content Creation' },
  { value: 'landing-page-design', label: 'Landing Page Design' },
  { value: 'website-maintenance', label: 'Website Maintenance' },
  { value: 'tech-consultation', label: 'Tech Consultation' }
];

  // --- 1. Video Ping-Pong Logic ---
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video starts playing
    video.play().catch(err => console.log("Autoplay blocked or failed", err));

    const handleTimeUpdate = () => {
      const buffer = 0.1; // Small buffer to prevent getting stuck

      // If we are playing forward and reach the end
      if (video.playbackRate > 0 && video.currentTime >= video.duration - buffer) {
        video.playbackRate = -1.0;
      }
      // If we are playing backward and reach the start
      else if (video.playbackRate < 0 && video.currentTime <= buffer) {
        video.playbackRate = 1.0;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  // --- 2. Canvas Animation Logic ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let n = 0;
    const c = 12;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 3, 3, 0.15)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 15; i++) {
        let a = n * 137.5 * (Math.PI / 180);
        let r = c * Math.sqrt(n);
        let x = r * Math.cos(a) + width / 2;
        let y = r * Math.sin(a) + height / 2;

        let hue = (n * 0.1) % 40 + 175;
        ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${0.5 + Math.random() * 0.5})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fill();
        n++;

        if (r > Math.max(width, height)) {
          n = 0;
          ctx.clearRect(0, 0, width, height);
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      n = 0;
    };

    window.addEventListener('resize', handleResize);
    draw();

    const revealTimer = setTimeout(() => setStage('morphing'), 3000);
    const finalTimer = setTimeout(() => {
      setStage('final');
      // Show popup after final stage with a slight delay
      setTimeout(() => {
        console.log('Showing popup now'); // Debug log
        setShowPopup(true);
      }, 1000);
    }, 4000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(revealTimer);
      clearTimeout(finalTimer);
    };
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate form
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.interest) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' });
      setIsSubmitting(false);
      return;
    }

    // Validate WhatsApp number (basic validation)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.whatsapp.replace(/\s/g, ''))) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid WhatsApp number' });
      setIsSubmitting(false);
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
      setIsSubmitting(false);
      return;
    }

    // Prepare WhatsApp message
    const interestLabel = interestOptions.find(opt => opt.value === formData.interest)?.label || formData.interest;

    const message = `*New Client Enquiry - Athenura*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*WhatsApp:* ${formData.whatsapp}%0A` +
      `*Interest:* ${interestLabel}%0A%0A` +
      `_Enquiry received from website hero section_`;

    // WhatsApp business number (replace with your actual WhatsApp business number)
    const whatsappNumber = "919835051934"; // Replace with your WhatsApp Business number

    // Create WhatsApp URL without redirecting
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

    try {
      // Open WhatsApp in a new tab/window
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      setSubmitStatus({
        type: 'success',
        message: 'Enquiry sent successfully! Check WhatsApp to complete the conversation.'
      });

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          interest: ''
        });
        setSubmitStatus(null);
      }, 3000);

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send enquiry. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close popup
  const handleClosePopup = () => {
    setShowPopup(false);
    setSubmitStatus(null);
  };

  // Debug effect to monitor popup state
  useEffect(() => {
    console.log('Popup state changed:', showPopup);
  }, [showPopup]);

  return (
    <div className="relative min-h-[92vh] w-full bg-[#030303] overflow-hidden text-white">

      {/* --- BACKGROUND VIDEO LAYER WITH SCROLL EFFECT --- */}
      <motion.div 
        style={{ y: yVideo, scale: scaleVideo }}
        className="absolute inset-0 z-0"
      >
        <video
          ref={videoRef}
          muted
          playsInline
          src="/Animate.mp4"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* --- CANVAS LAYER WITH SCROLL EFFECT --- */}
      <motion.canvas
        ref={canvasRef}
        style={{ y: yCanvas, opacity: opacityCanvas }}
        className="absolute inset-0 z-[1] pointer-events-none"
      />

      {/* --- VIGNETTE/GRADIENT LAYER --- */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent_0%,#030303_90%)]" />

      {/* --- CONTENT LAYER WITH SCROLL EFFECT --- */}
      <motion.div 
        style={{ y: yContent, opacity: opacityContent }}
        className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-8 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="wait">
          {stage === 'brand-reveal' ? (
            <motion.div
              key="brand-reveal-stage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="flex mt-20">
                {"ATHENURA".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-8xl font-bold tracking-[0.2em]"
                    style={{ fontFamily: 'serif' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                className="h-[1px] w-full max-w-md bg-gradient-to-r from-transparent via-[#28A3B9] to-transparent"
              />
            </motion.div>
          ) : (
            <motion.div
              key="hero-active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            >
              <div className="lg:col-span-7 text-left">
                <motion.h1
                  className="text-[15vw] lg:text-[7vw] leading-[0.85] font-medium"
                  style={{ fontFamily: 'serif' }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.4, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="block italic mt-15"
                  >
                    Together
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="block text-[#28A3B9] font-sans font-black tracking-tighter uppercase"
                  >
                    We Create
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="block text-white font-sans font-black tracking-tighter uppercase"
                  >
                    Innovate
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={stage === 'final' ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mt-12 flex flex-wrap gap-6 items-center"
                >
                  <button
                    onClick={() => setShowPopup(true)}
                    className="px-10 py-4 bg-white text-black rounded-full font-semibold hover:bg-[#28A3B9] hover:text-white transition-all duration-500"
                  >
                    Innovate
                  </button>

                  <Link to="/portfolio">
                    <button className="text-xs uppercase tracking-widest border-b border-white/20 pb-1 hover:border-[#28A3B9] transition-colors">
                      View Portfolio
                    </button>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={stage === 'final' ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="lg:col-span-5 border-l-2 border-[#118296] pl-8 py-4"
              >
                <p className="text-xl lg:text-2xl leading-relaxed text-gray-400 font-light italic serif">
                  <span className="text-[#28A3B9] text-4xl block mb-2 not-italic">“</span>
                  Athenura bridges the gap between academic theory and industry reality empowering and building the architects of tomorrow.
                  <span className="text-[#28A3B9] text-4xl block mt-1 text-right not-italic">”</span>
                </p>
                <div className="mt-1 flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-[#28A3B9]" />
                  <span className="text-[12px] uppercase tracking-[0.5em] text-white/50">The Mission</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* --- PORTAL-BASED POPUP MODAL --- */}
      {showPopup && createPortal(
     <AnimatePresence>
          <motion.div
            key="popup-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 95, left: 0, right: 0, bottom: 0, zIndex: 100 }}
            className="flex items-start justify-center p-4 md:p-6 overflow-y-auto"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClosePopup}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Main Container */}
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-50 bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row"
            >

              {/* Left Side: Image/Visual (Hidden on small mobile if needed, but here responsive) */}
              <div className="relative w-full md:w-5/12 hidden lg:block h-48 md:h-auto bg-[#1A1A1A]">
                <img
                  src="/Contact.png"
                  alt="Collaboration"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-bold text-white mb-1">Our Creative Lab</h4>
                  <p className="text-xs text-[#28A3B9] font-medium uppercase tracking-wider">Trusted by Growing Businesses</p>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="w-full md:w-7/12 p-6 md:p-10 relative">
                {/* Close Button */}
                <button
                  onClick={handleClosePopup}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="mb-8 mt-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Partner with Athenura</h3>
                  <p className="text-gray-400 text-sm">We'll reach out via WhatsApp to discuss your vision.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email Group for Desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-tight mb-1.5">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#28A3B9] outline-none text-white text-sm transition-all"
                        placeholder="Your Full Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-tight mb-1.5">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#28A3B9] outline-none text-white text-sm transition-all"
                        placeholder="gmail@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-tight mb-1.5">WhatsApp Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#28A3B9] outline-none text-white text-sm transition-all"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  {/* Interest Selection - NOW A DROPDOWN */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-tight mb-1.5">I'm interested in</label>
                    <div className="relative">
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-[#28A3B9] outline-none text-white text-sm appearance-none cursor-pointer transition-all"
                        required
                      >
                        <option value="" className="bg-[#1A1A1A]">Select a service...</option>
                        {interestOptions.map((option) => (
                          <option key={option.value} value={option.value} className="bg-[#1A1A1A]">
                          {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-4 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 bg-[#156977] hover:bg-[#1c7c8d] text-white rounded-xl font-bold shadow-lg shadow-[#28A3B9]/20 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Processing..." : "Send WhatsApp Enquiry"}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
      </AnimatePresence>,
        document.body
      )}

      {/* Explore Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 left-10 flex flex-col items-start gap-4 opacity-40"
      >
        <div className="w-16 h-[1px] bg-white" />
        <span className="text-[9px] uppercase tracking-[0.5em]">Explore</span>
      </motion.div>
    </div>
  );
};

export default AthenuraHero;