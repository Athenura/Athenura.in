import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  // UI / Actions
  ArrowRight,
  X,
  ChevronRight,

  // Status / Feedback
  CheckCircle2,
  Star,
  Sparkles,

  // Contact
  PhoneCall,
  MessageSquare,

  // Stats / Business
  Users,
  Briefcase,
  TrendingUp,
  Award,
  Crown,
  Target,

  // Services - Development
  Code,
  Globe,
  Layout,
  ShoppingCart,
  Monitor,

  // Services - Marketing
  Megaphone,
  Share2,
  Search,

  // Services - Content
  PenTool,
  FileText,

  // Roadmap / Product
  Layers,
  Zap,
  Smartphone,
  Rocket,

} from 'lucide-react';

const RoadmapSection = () => {
  const navigate = useNavigate();
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [mounted, setMounted] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState('all');

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const theme = {
    primary: '#1E7A86',
    secondary: '#1E7A86',
    accent: '#059669',
    warning: '#D97706',
    bg: '#F9FAFB',
    textMain: '#111827',
    textLight: '#6B7280',
  };

  // Services Data
  const services = {

    development: [
      {
        id: 'd1',
        title: 'Custom Software Development',
        icon: Code,
        description: 'Tailored software solutions built to solve complex business challenges.',
        features: [
          'Custom web applications',
          'Enterprise software solutions',
          'CRM & ERP systems',
          'API development & integration',
          'Scalable architecture'
        ],
        audience: 'Enterprises & growing startups',
        pricing: 'Contact for Pricing',
        color: 'from-blue-600 to-blue-800',
        bgLight: 'bg-blue-50'
      },
      {
        id: 'd2',
        title: 'Website Development',
        icon: Globe,
        description: 'Modern, responsive, and SEO-optimized websites for businesses.',
        features: [
          'Corporate websites',
          'Portfolio websites',
          'Business websites',
          'CMS integration',
          'Performance optimization'
        ],
        audience: 'Businesses & personal brands',
        pricing: 'Contact for Pricing',
        color: 'from-green-600 to-green-800',
        bgLight: 'bg-green-50'
      },
      {
        id: 'd3',
        title: 'Landing Page Development',
        icon: Layout,
        description: 'High-converting landing pages designed for ad campaigns and lead generation.',
        features: [
          'Conversion-focused design',
          'Fast loading speed',
          'Lead capture forms',
          'A/B testing ready',
          'Ad integration'
        ],
        audience: 'Marketing teams & startups',
        pricing: 'Contact for Pricing',
        color: 'from-purple-600 to-purple-800',
        bgLight: 'bg-purple-50'
      },
      {
        id: 'd4',
        title: 'E-Commerce Development',
        icon: ShoppingCart,
        description: 'Secure and scalable online stores with payment integration.',
        features: [
          'Custom online store',
          'Payment gateway setup',
          'Product management system',
          'Cart & checkout optimization',
          'SEO-ready structure'
        ],
        audience: 'Retail & D2C brands',
        pricing: 'Contact for Pricing',
        color: 'from-cyan-600 to-cyan-800',
        bgLight: 'bg-cyan-50'
      }
    ],

    marketing: [
      {
        id: 'm1',
        title: 'Digital Marketing Services',
        icon: Megaphone,
        description: 'Complete digital marketing strategies to grow your business online.',
        features: [
          'Google Ads',
          'Meta Ads campaigns',
          'Lead generation',
          'Email marketing',
          'Monthly performance reports'
        ],
        audience: 'Startups & service businesses',
        pricing: 'Contact for Pricing',
        color: 'from-rose-600 to-rose-800',
        bgLight: 'bg-rose-50'
      },
      {
        id: 'm2',
        title: 'Social Media Management',
        icon: Share2,
        description: 'Build and manage your brand presence across social platforms.',
        features: [
          'Content calendar planning',
          'Post design & scheduling',
          'Community management',
          'Growth strategy',
          'Analytics tracking'
        ],
        audience: 'Brands & influencers',
        pricing: 'Contact for Pricing',
        color: 'from-indigo-600 to-indigo-800',
        bgLight: 'bg-indigo-50'
      },
      {
        id: 'm3',
        title: 'Search Engine Optimization (SEO)',
        icon: Search,
        description: 'Increase organic traffic and improve search engine rankings.',
        features: [
          'Technical SEO audit',
          'On-page optimization',
          'Off-page backlink building',
          'Keyword research',
          'Search Console setup'
        ],
        audience: 'Businesses seeking organic growth',
        pricing: 'Contact for Pricing',
        color: 'from-teal-600 to-teal-800',
        bgLight: 'bg-teal-50'
      }
    ],

    content: [
      {
        id: 'c1',
        title: 'Content Writing Services',
        icon: PenTool,
        description: 'Professional content aligned with your brand and SEO strategy.',
        features: [
          'Website content',
          'Blog writing',
          'SEO articles',
          'Product descriptions',
          'LinkedIn & social content'
        ],
        audience: 'Businesses & personal brands',
        pricing: 'Contact for Pricing',
        color: 'from-yellow-600 to-yellow-800',
        bgLight: 'bg-yellow-50'
      },
      {
        id: 'c2',
        title: 'Copywriting & Sales Funnels',
        icon: FileText,
        description: 'High-converting copy that turns visitors into customers.',
        features: [
          'Landing page copy',
          'Email sequences',
          'Ad copy',
          'Sales pages',
          'Funnel strategy'
        ],
        audience: 'Online businesses & coaches',
        pricing: 'Contact for Pricing',
        color: 'from-orange-600 to-orange-800',
        bgLight: 'bg-orange-50'
      }
    ]

  };

  const milestones = [
    {
      id: 1,
      quarter: 'Q1 2026',
      title: 'Foundation & Core Systems',
      subtitle: 'Building the bedrock',
      description: 'Launching Athenura\'s core platform with secure authentication, intern & mentor onboarding, and robust backend APIs.',
      status: 'completed',
      progress: 100,
      icon: <Layers size={24} />,
      tech: ['Node.js', 'MongoDB', 'JWT', 'AWS S3'],
      businessValue: 'Enterprise-grade security & scalability',
      roi: '40% reduction in onboarding time',
      metrics: {
        users: '500+',
        tasks: '1.2k',
        uptime: '99.9%'
      },
      highlights: [
        'Zero-downtime deployment',
        'SOC2 compliance ready',
        'Automated backup system'
      ],
      team: ['Product', 'Engineering', 'Security'],
      color: theme.accent,
      clientBenefit: 'Ready for enterprise deployment now'
    },
    {
      id: 2,
      quarter: 'Q2 2026',
      title: 'Smart Learning Ecosystem',
      subtitle: 'AI Integration & Management',
      description: 'Introducing AI-assisted intern matching, progress tracking dashboards, and real-time notifications.',
      status: 'in-progress',
      progress: 65,
      icon: <Zap size={24} />,
      tech: ['OpenAI API', 'Socket.io', 'Redis', 'React Query'],
      businessValue: 'AI-powered talent matching',
      roi: '60% faster candidate placement',
      metrics: {
        activeUsers: '320',
        matches: '450+',
        responseTime: '<100ms'
      },
      highlights: [
        'AI-powered skill matching',
        'Real-time collaboration',
        'Smart notifications'
      ],
      team: ['AI/ML', 'Frontend', 'DevOps'],
      color: theme.warning,
      releaseDate: 'June 2026',
      clientBenefit: 'Early access available for partners'
    },
    {
      id: 3,
      quarter: 'Q3 2026',
      title: 'Mobile & Community',
      subtitle: 'Expansion to Handhelds',
      description: 'Launching the native mobile app for interns and mentors with chat, task updates, and learning resources.',
      status: 'planned',
      progress: 25,
      icon: <Smartphone size={24} />,
      tech: ['React Native', 'Firebase', 'Push Notifications'],
      businessValue: 'Anywhere, anytime access',
      roi: '35% increase in engagement',
      metrics: {
        betaUsers: '100',
        platforms: '2',
        features: '15+'
      },
      highlights: [
        'Cross-platform support',
        'Offline-first architecture',
        'Community engagement'
      ],
      team: ['Mobile', 'UX/UI', 'Backend'],
      color: theme.secondary,
      releaseDate: 'September 2026',
      clientBenefit: 'Shape the mobile experience'
    },
    {
      id: 4,
      quarter: 'Q4 2026',
      title: 'Global Scale & Enterprise',
      subtitle: 'Borderless Operations',
      description: 'Scaling globally with enterprise hiring partnerships, cloud-native infrastructure, and analytics.',
      status: 'planned',
      progress: 10,
      icon: <Rocket size={24} />,
      tech: ['Kubernetes', 'Docker', 'Terraform', 'Analytics'],
      businessValue: 'Global talent acquisition',
      roi: '3x market expansion potential',
      metrics: {
        regions: '3',
        capacity: '1M+',
        partners: '50+'
      },
      highlights: [
        'Multi-region deployment',
        'Enterprise security',
        'Advanced analytics'
      ],
      team: ['Infrastructure', 'Security', 'Data'],
      color: theme.secondary,
      releaseDate: 'December 2026',
      clientBenefit: 'Be a launch partner'
    },
  ];

  const filteredMilestones = activeFilter === 'all'
    ? milestones
    : milestones.filter(m => m.status === activeFilter);

  const filteredServices = activeServiceCategory === 'all'
    ? Object.values(services).flat()
    : services[activeServiceCategory] || [];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: '50+',
      label: 'Hiring Partners',
      description: 'Startups & businesses collaborating with Athenura'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      value: '200+',
      label: 'Projects Completed',
      description: 'Software & digital solutions delivered'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: '98%',
      label: 'Client Retention',
      description: 'Long-term partnerships maintained'
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '4.9/5',
      label: 'Client Satisfaction',
      description: 'Verified performance & quality rating'
    }
  ];

  const ContactModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        // Format the message for WhatsApp
        const message = `*New Consultation Request*%0A%0A` +
          `*Name:* ${formData.name}%0A` +
          `*Company:* ${formData.company || 'Not provided'}%0A` +
          `*Email:* ${formData.email}%0A` +
          `*Phone:* ${formData.phone || 'Not provided'}%0A` +
          `*Service Interest:* ${formData.service || 'Not specified'}%0A` +
          `*Message:* ${formData.message || 'No message provided'}`;

        // WhatsApp business phone number
        const whatsappNumber = '919835051934';

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        // Show success message
        setSubmitStatus('success');

        // Open WhatsApp after short delay to show success message
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');

          // Close modal after opening WhatsApp
          setTimeout(() => {
            onClose();
            // Reset form
            setFormData({
              name: '',
              company: '',
              email: '',
              phone: '',
              service: '',
              message: ''
            });
          }, 500);
        }, 1500);

      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
      }
    };

    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, []);

    return createPortal(
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Schedule a Consultation</h2>
                  <p className="text-gray-600">Fill in your details and we'll connect with you on WhatsApp</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-green-700 font-medium">Form submitted successfully!</p>
                    <p className="text-green-600 text-sm">Redirecting to WhatsApp...</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                >
                  <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-red-700 font-medium">Something went wrong</p>
                    <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                      disabled={isSubmitting || submitStatus === 'success'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Acme Inc."
                      disabled={isSubmitting || submitStatus === 'success'}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                      disabled={isSubmitting || submitStatus === 'success'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+91 98350 51934"
                      disabled={isSubmitting || submitStatus === 'success'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    disabled={isSubmitting || submitStatus === 'success'}
                  >
                    <option value="">Select a service (optional)</option>
                    <optgroup label="Website Development">
                      <option value="Business Website Development">Business Website Development</option>
                      <option value="E-commerce Website Development">E-commerce Website Development</option>
                      <option value="Custom Web Application">Custom Web Application</option>
                      <option value="Landing Page Design">Landing Page Design</option>
                      <option value="Website Maintenance & Support">Website Maintenance & Support</option>
                    </optgroup>

                    <optgroup label="Digital Marketing">
                      <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Google Ads & PPC Campaigns">Google Ads & PPC Campaigns</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Email Marketing">Email Marketing</option>
                    </optgroup>

                    <optgroup label="Design & Branding">
                      <option value="Logo Design">Logo Design</option>
                      <option value="Brand Identity Design">Brand Identity Design</option>
                      <option value="Social Media Post Design">Social Media Post Design</option>
                      <option value="Poster & Banner Design">Poster & Banner Design</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                    </optgroup>

                    <optgroup label="Video & Media">
                      <option value="Video Editing">Video Editing</option>
                      <option value="Promotional Video Production">Promotional Video Production</option>
                      <option value="YouTube Video Editing">YouTube Video Editing</option>
                      <option value="Reels & Short Video Editing">Reels & Short Video Editing</option>
                      <option value="Motion Graphics">Motion Graphics</option>
                    </optgroup>

                    <optgroup label="Technology Services">
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="API Development & Integration">API Development & Integration</option>
                      <option value="Cloud Hosting & Deployment">Cloud Hosting & Deployment</option>
                      <option value="AI Integration & Automation">AI Integration & Automation</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements, timeline, or any specific questions..."
                    disabled={isSubmitting || submitStatus === 'success'}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 border-2 border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-200 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle2 size={18} />
                        Sent!
                      </>
                    ) : (
                      <>
                        <MessageSquare size={18} />
                        Send via WhatsApp
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting, you agree to our privacy policy. Your information will be sent via WhatsApp for quick response.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>,
      document.body
    );
  };

  const ServiceModal = ({ service, onClose }) => {
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, []);

    const ServiceIcon = service.icon;

    return createPortal(
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className={`p-8 bg-gradient-to-br ${service.bgLight} to-white`}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                    <ServiceIcon size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                    <p className="text-sm text-gray-600 mt-1">{service.audience}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/60 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-gray-700 text-lg mb-6">{service.description}</p>

              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Pricing</p>
                  <p className="text-lg font-semibold text-gray-900">{service.pricing}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Ideal For</p>
                  <p className="text-sm font-medium text-gray-900">{service.audience}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  setShowContactForm(true);
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                Discuss This Service
              </button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>,
      document.body
    );
  };

  const MilestoneModal = ({ milestone, onClose }) => {
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, []);

    return createPortal(
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                    style={{ backgroundColor: milestone.color }}
                  >
                    {milestone.icon}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-500">
                      {milestone.quarter}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {milestone.title}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Business Value Banner */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6 border border-blue-100">
                <div className="flex items-start gap-3">
                  <Crown className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-600 mb-1">Your Business Value</p>
                    <p className="text-gray-900 font-semibold">{milestone.businessValue}</p>
                    <p className="text-blue-600 text-sm mt-1">ROI: {milestone.roi}</p>
                  </div>
                </div>
              </div>

              {/* Client Benefit */}
              <div className="bg-green-50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Exclusive Client Benefit</span>
                </div>
                <p className="text-gray-700">{milestone.clientBenefit}</p>
              </div>

              {/* Progress Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Milestone Progress</span>
                  <span className="text-sm font-bold" style={{ color: milestone.color }}>
                    {milestone.progress}%
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${milestone.progress}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: milestone.color }}
                  />
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                    Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {milestone.description}
                  </p>

                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mt-6 mb-3">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {milestone.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <Sparkles size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                    Team
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {milestone.team.map((member, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {member}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {milestone.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                    Key Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(milestone.metrics).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 rounded-xl p-3">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <button
                onClick={() => {
                  onClose();
                  setShowContactForm(true);
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <PhoneCall size={18} />
                Discuss this milestone
              </button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>,
      document.body
    );
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white font-sans">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, ${theme.primary}20 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>

      {/* Floating Elements for Visual Appeal */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Header Section with Strong Value Prop */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4"
          >
            Transform Your{' '}
            <span className="relative">
              <span className="relative z-10" style={{ color: theme.primary }}>Talent Pipeline</span>
              <motion.div
                className="absolute bottom-2 left-0 w-full h-3 bg-blue-100 -z-0"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Join industry leaders in revolutionizing internship management.
            See how our roadmap and services align with your business growth.
          </motion.p>

          {/* Primary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => setShowContactForm(true)}
              className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-400 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
            >
              Schedule a Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Stats Bar - Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-2xl text-blue-600 mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our <span style={{ color: theme.primary }}>Services</span>
            </motion.h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to transform your internship programs and talent management
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredServices.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedService(service)}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden group"
                  >
                    <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                    <div className="p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4`}>
                        <ServiceIcon size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-50 rounded-full text-gray-600">
                            {feature.length > 20 ? feature.substring(0, 20) + '...' : feature}
                          </span>
                        ))}
                        {service.features.length > 2 && (
                          <span className="text-xs px-2 py-1 bg-gray-50 rounded-full text-gray-400">
                            +{service.features.length - 2}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <span className="text-xs font-medium text-gray-500">{service.pricing}</span>
                        <button className="text-sm text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn More
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Product <span style={{ color: theme.primary }}>Roadmap</span>
            </motion.h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our strategic roadmap showing upcoming features and milestones
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveFilter('completed')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'completed'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveFilter('in-progress')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'in-progress'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setActiveFilter('planned')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === 'planned'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              Planned
            </button>
          </div>

          {/* Interactive Timeline Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {filteredMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedMilestone(milestone)}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden group relative"
                >
                  {/* "Hot" indicator for in-progress items */}
                  {milestone.status === 'in-progress' && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                      </span>
                    </div>
                  )}

                  {/* Progress Bar */}
                  <div className="h-2 bg-gray-100">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${milestone.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full"
                      style={{ backgroundColor: milestone.color }}
                    />
                  </div>

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {milestone.quarter}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-blue-600 transition-colors">
                          {milestone.title}
                        </h3>
                      </div>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                        style={{ backgroundColor: milestone.color }}
                      >
                        {milestone.icon}
                      </div>
                    </div>

                    {/* Business Value Badge */}
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">
                        <Target size={12} />
                        {milestone.businessValue}
                      </span>
                    </div>

                    {/* Status and ROI */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${milestone.status === 'completed' ? 'bg-green-100 text-green-700' :
                        milestone.status === 'in-progress' ? 'bg-orange-100 text-orange-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                        {milestone.status === 'completed' ? '✓ Live' :
                          milestone.status === 'in-progress' ? '🔥 Available' :
                            '📅 Coming Soon'}
                      </div>
                      <span className="text-xs text-green-600 font-medium">
                        {milestone.roi}
                      </span>
                    </div>

                    {/* Client Benefit Teaser */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {milestone.clientBenefit}
                    </p>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {milestone.tech.slice(0, 2).map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-50 rounded-md text-xs text-gray-600 border border-gray-100">
                          {tech}
                        </span>
                      ))}
                      {milestone.tech.length > 2 && (
                        <span className="px-2 py-1 bg-gray-50 rounded-md text-xs text-gray-400">
                          +{milestone.tech.length - 2}
                        </span>
                      )}
                    </div>

                    {/* CTA Button on Card */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="w-full text-sm text-blue-600 font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                        See Business Impact
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Quick Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => setShowContactForm(true)}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-200 transition-all duration-300 flex items-center gap-3 group"
          >
            <MessageSquare size={20} />
            Send Inquiry via WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Modals */}
      {mounted && selectedMilestone && (
        <MilestoneModal
          milestone={selectedMilestone}
          onClose={() => setSelectedMilestone(null)}
        />
      )}

      {mounted && selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}

      {mounted && showContactForm && (
        <ContactModal onClose={() => setShowContactForm(false)} />
      )}

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, ${theme.primary}20 1px, transparent 0);
          background-size: 40px 40px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default RoadmapSection;