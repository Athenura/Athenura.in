import React from 'react';
import { motion } from 'framer-motion';
import {
    FaLinkedin,
    FaTwitter,
    FaLink,
    FaWhatsapp,
    FaClock,
    FaUserCircle,
    FaCalendarAlt,
    FaCheckCircle,
    FaLaptop,
    FaHeadphones,
    FaVideo,
    FaSlack,
    FaGithub,
    FaGoogleDrive,
    FaTasks,
    FaComments,
    FaLightbulb,
    FaRocket,
    FaStar,
    FaRegLightbulb,
    FaRegClock,
    FaRegCalendarCheck,
    FaRegCommentDots,
    FaRegCheckCircle,
    FaRegFileAlt,
    FaNetworkWired,
    FaMicrophone,
    FaRegEnvelope,
    FaRegListAlt,
    FaRegClipboard,
    FaRegUser,
    FaUsers,
    FaBullhorn,
    FaChartLine,
    FaBookOpen,
    FaAward,
    FaExternalLinkAlt,
    FaQuoteRight,
    FaQuoteLeft
} from 'react-icons/fa';

import { Helmet } from "react-helmet-async"
import handbook from "../../../public/handbook.pdf"
import { Link } from "react-router-dom";

const RemoteInternshipGuide = () => {
    const siteUrl = 'https://athenura.in';
    const blogUrl = typeof window !== 'undefined' ? window.location.href : `${siteUrl}/insights/ace-first-remote-internship`;
    const canonicalUrl = `${siteUrl}/insights/ace-first-remote-internship`;
    
    const blogTitle = "How to Ace Your First Remote Internship: Complete Guide 2026 | Athenura";
    const blogDescription = "Master your first remote internship with our comprehensive guide. Learn communication strategies, time management tips, and how to turn your internship into a job offer. Includes printable checklist.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/howtoace.png";
    const publishedDate = "2026-02-28";
    const modifiedDate = "2026-03-01";
    const authorName = "Athenura Team";

    const shareOnLinkedIn = () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`, '_blank');
    const shareOnTwitter = () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blogTitle)}&url=${encodeURIComponent(blogUrl)}&via=athenura_in`, '_blank');
    const shareOnWhatsApp = () => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(blogTitle + " " + blogUrl)}`, '_blank');
    const copyToClipboard = () => {
        navigator.clipboard.writeText(blogUrl);
        alert("Link copied to clipboard!");
    };

    // Article Structured Data
    const articleStructuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Ace Your First Remote Internship: Complete Guide 2026",
        "description": blogDescription,
        "image": {
            "@type": "ImageObject",
            "url": imageUrl,
            "width": 1200,
            "height": 630
        },
        "author": {
            "@type": "Organization",
            "name": "Athenura",
            "url": siteUrl,
            "logo": {
                "@type": "ImageObject",
                "url": "https://athenura.in/AthenuraCircle.png"
            }
        },
        "publisher": {
            "@type": "Organization",
            "name": "Athenura",
            "logo": {
                "@type": "ImageObject",
                "url": "https://athenura.in/AthenuraCircle.png"
            }
        },
        "datePublished": publishedDate,
        "dateModified": modifiedDate,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        },
        "keywords": "remote internship, virtual internship, work from home internship, internship success, remote work tips, first internship, internship guide, career development, remote work best practices, internship advice",
        "articleSection": "Career Guide",
        "wordCount": 2800,
        "timeRequired": "PT8M",
        "inLanguage": "en-US",
        "isAccessibleForFree": true
    };

    // Breadcrumb Structured Data
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Insights",
                "item": `${siteUrl}/insights`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Remote Internship Guide",
                "item": canonicalUrl
            }
        ]
    };

    // Organization Schema
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://athenura.in/#organization",
        "name": "Athenura",
        "url": siteUrl,
        "logo": {
            "@type": "ImageObject",
            "url": "https://athenura.in/AthenuraCircle.png",
            "width": 500,
            "height": 500
        },
        "sameAs": [
            "https://twitter.com/athenura_in",
            "https://linkedin.com/company/athenura",
            "https://facebook.com/athenura",
            "https://instagram.com/athenura.in",
            "https://youtube.com/@athenura"
        ],
        "description": "Remote-first skill development platform offering digital marketing, data science, and development internships",
        "foundingDate": "2026",
        "email": "official@athenura.in"
    };

    // FAQ Schema based on article content
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I prepare for my first remote internship?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Test your tech (laptop, webcam, internet), install required tools (Slack, Zoom, GitHub), read any onboarding docs, and create a dedicated workspace. Send a proactive message asking about first-week priorities."
                }
            },
            {
                "@type": "Question",
                "name": "What should I do in my first week of a remote internship?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Introduce yourself clearly in team channels, clarify expectations with your mentor, confirm deliverables and meeting schedules, block focus time on your calendar, and aim to ship a small deliverable by day five."
                }
            },
            {
                "@type": "Question",
                "name": "How do I communicate effectively in a remote internship?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Over-communicate proactively about your tasks, write crisp updates with clear structure, turn on video for meetings to build rapport, and ask better questions by showing what you've tried."
                }
            },
            {
                "@type": "Question",
                "name": "How can I turn my internship into a job offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Own small experiments, ask for feedback regularly, document your learnings, network intentionally by helping others, and produce a case study of your impact. Request a recommendation and ask about next steps at the end."
                }
            },
            {
                "@type": "Question",
                "name": "What tools do I need for a remote internship?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Common tools include Slack or Teams for communication, Zoom or Google Meet for video calls, GitHub for code, Google Drive for documents, and project management tools like Trello or Asana."
                }
            },
            {
                "@type": "Question",
                "name": "How do I manage my time during a remote internship?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Adopt a rhythm of deep work with short check-ins, respect core hours when the team expects you online, and keep a visible task list to track progress and make handoffs easy."
                }
            }
        ]
    };

    // How-To Schema for remote internship success
    const howToData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Succeed in Your First Remote Internship",
        "description": "Step-by-step guide to excel in a remote internship and maximize your chances of conversion to full-time",
        "totalTime": "P3M",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
        },
        "step": [
            {
                "@type": "HowToStep",
                "name": "Prepare before day one",
                "text": "Test your tech, install required tools, read onboarding docs, and create a dedicated workspace."
            },
            {
                "@type": "HowToStep",
                "name": "Establish clarity in week one",
                "text": "Introduce yourself, clarify expectations with your mentor, and confirm deliverables and meeting schedules."
            },
            {
                "@type": "HowToStep",
                "name": "Master remote communication",
                "text": "Over-communicate proactively, write crisp updates, turn on video for meetings, and ask better questions."
            },
            {
                "@type": "HowToStep",
                "name": "Deliver professional work",
                "text": "Break tasks into small increments, use version control, document decisions, and ship early for review."
            },
            {
                "@type": "HowToStep",
                "name": "Manage your time effectively",
                "text": "Adopt a work rhythm, respect core hours, and keep a visible task list."
            },
            {
                "@type": "HowToStep",
                "name": "Learn intentionally",
                "text": "Own small experiments, ask for feedback weekly, and document learnings publicly."
            },
            {
                "@type": "HowToStep",
                "name": "Network strategically",
                "text": "Help others, build your 30-second story, and ask for introductions to team members."
            },
            {
                "@type": "HowToStep",
                "name": "Finish with evidence",
                "text": "Produce a case study, ask for a recommendation, and inquire about next steps."
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "Slack"
            },
            {
                "@type": "HowToTool",
                "name": "Zoom"
            },
            {
                "@type": "HowToTool",
                "name": "GitHub"
            },
            {
                "@type": "HowToTool",
                "name": "Google Drive"
            },
            {
                "@type": "HowToTool",
                "name": "Trello/Asana"
            }
        ],
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "Reliable internet connection"
            },
            {
                "@type": "HowToSupply",
                "name": "Noise-cancelling headphones"
            },
            {
                "@type": "HowToSupply",
                "name": "Clean background for video calls"
            }
        ]
    };

    // ListItem Schema for the checklist
    const checklistData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Remote Internship First-Week Checklist",
        "description": "Essential tasks for your first week of remote internship",
        "numberOfItems": 6,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Test microphone, webcam, and internet speed"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Install and log into required tools"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Send a team intro message with timezone and goals"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Confirm first-week deliverables and mentor contact"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Block focus time on your calendar"
            },
            {
                "@type": "ListItem",
                "position": 6,
                "name": "Ship a first small deliverable by day 5"
            }
        ]
    };

    return (
        <>
            <Helmet>
                {/* ---------- BASIC META TAGS ---------- */}
                <html lang="en" />
                <title>{blogTitle}</title>
                <meta name="description" content={blogDescription} />
                <meta name="keywords" content="remote internship, virtual internship, work from home internship, internship success, remote work tips, first internship, internship guide, career development, remote work best practices, internship advice, intern tips, remote working, virtual work, work from home guide" />
                <meta name="author" content="Athenura Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google-site-verification" content="your-verification-code" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH / FACEBOOK ---------- */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="How to Ace Your First Remote Internship: Complete Guide 2026" />
                <meta property="og:description" content={blogDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Remote internship success guide" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                <meta property="article:published_time" content={publishedDate} />
                <meta property="article:modified_time" content={modifiedDate} />
                <meta property="article:author" content={`${siteUrl}/about`} />
                <meta property="article:section" content="Career Guide" />
                <meta property="article:tag" content="Remote Work" />
                <meta property="article:tag" content="Internship" />
                <meta property="article:tag" content="Career Advice" />
                <meta property="article:tag" content="Professional Development" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="How to Ace Your First Remote Internship" />
                <meta name="twitter:description" content={blogDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Remote internship guide by Athenura" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Guides" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                    
                {/* ---------- STRUCTURED DATA ---------- */}
                <script type="application/ld+json">
                    {JSON.stringify(articleStructuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(organizationData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(howToData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(checklistData)}
                </script>
                
                {/* ---------- PERFORMANCE OPTIMIZATION ---------- */}
                <link rel="preconnect" href="https://ik.imagekit.io" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://ik.imagekit.io" />
                <link rel="preconnect" href="https://images.unsplash.com" />
                
                {/* ---------- HREFLANG ---------- */}
                <link rel="alternate" href={canonicalUrl} hreflang="en" />
                <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
                
            </Helmet>


            <div className="bg-white min-h-screen font-sans text-gray-800">

                {/* HERO SECTION */}
                <section className="relative h-[70vh] w-full overflow-hidden flex items-center">
                    <div className="absolute inset-0 z-0 hidden lg:block">
                        <img
                            src="https://ik.imagekit.io/vtfcbjo5c/howtoace.png"
                            alt="Remote internship success guide"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />
                    </div>
                    <div className="absolute block lg:hidden inset-0 z-0">
                        <img
                            src="https://ik.imagekit.io/vtfcbjo5c/howtoacemobile.png"
                            alt="Remote internship success guide"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-[2px] w-12 bg-[#28A3B9]"></span>
                                <span className="text-[#28A3B9] font-bold uppercase tracking-[0.3em] text-xs">CAREER GUIDE</span>
                                <span className="text-gray-400 text-sm flex items-center gap-2">
                                    <FaClock /> 8 min read
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-6">
                                How to Ace Your First <br />
                                <span className="text-[#28A3B9]">Remote Internship</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                                A practical playbook to turn your first remote internship into experience that hiring teams notice.
                            </p>
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <FaUserCircle className="text-xl" />
                                    <span>Athenura Team</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt />
                                    <span>February 28, 2026</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* STICKY SOCIAL SHARE */}
                    <aside className="lg:col-span-1 hidden lg:block">
                        <div className="sticky top-32 flex flex-col gap-6 items-center">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 [writing-mode:vertical-lr] mb-4 text-center">Share</p>
                            <button onClick={shareOnLinkedIn} className="p-4 rounded-full border border-gray-100 text-gray-400 hover:bg-[#0077B5] hover:text-white transition-all shadow-sm hover:shadow-lg"><FaLinkedin /></button>
                            <button onClick={shareOnWhatsApp} className="p-4 rounded-full border border-gray-100 text-gray-400 hover:bg-[#25D366] hover:text-white transition-all shadow-sm hover:shadow-lg"><FaWhatsapp /></button>
                            <button onClick={shareOnTwitter} className="p-4 rounded-full border border-gray-100 text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-all shadow-sm hover:shadow-lg"><FaTwitter /></button>
                            <button onClick={copyToClipboard} className="p-4 rounded-full border border-gray-100 text-gray-400 hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-lg"><FaLink /></button>
                        </div>
                    </aside>

                    {/* MAIN CONTENT */}
                    <main className="lg:col-span-8 prose prose-lg max-w-none text-gray-700 leading-relaxed">

                        {/* Introduction */}
                        <section className="mb-12">
                            <div className="relative">
                                <FaQuoteLeft className="absolute -top-4 -left-4 text-6xl text-[#28A3B9] opacity-20" />
                                <p className="text-2xl font-light text-gray-600 italic pl-8 relative z-10">
                                    Landing your first remote internship is exciting and a little intimidating. Remote work removes office cues and replaces them with messages, calendars, and deadlines. But it also gives you flexibility, autonomy, and the chance to demonstrate real impact from anywhere.
                                </p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-[#28A3B9]/10 to-transparent p-6 rounded-2xl my-8 border-l-4 border-[#28A3B9]">
                                <p className="text-gray-700 flex items-center gap-2">
                                    <FaRegLightbulb className="text-[#28A3B9] text-xl" />
                                    <span className="font-medium">This guide is brought to you by Athenura practical programs designed to move learners from theory to measurable output.</span>
                                </p>
                            </div>
                        </section>

                        {/* 1. Before Day One */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">1</span>
                            Before Day One Set Yourself Up to Win
                        </h2>

                        <div className="space-y-6 my-8">
                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaLaptop className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Get your tech sorted</h3>
                                    <p className="text-gray-600">Test your laptop, webcam, headphones, and a stable internet connection. Install the communication and collaboration tools the company uses (Slack, Teams, Zoom, Figma, GitHub, Google Drive, etc.) and sign in a day before you start.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaRegFileAlt className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Read the brief</h3>
                                    <p className="text-gray-600">Ask for any onboarding docs, handbooks, or a project brief ahead of time. If nothing arrives, send a short message: "Hi excited to start! Could you share the onboarding guide and first-week priorities?" That shows initiative.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaHeadphones className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Create a lightweight workspace</h3>
                                    <p className="text-gray-600">Designate a quiet corner for focused work. If you can't get a private area, use noise-cancelling headphones and a clean background for video calls.</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. The First Week */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">2</span>
                            The First Week Establish Clarity and Presence
                        </h2>

                        <div className="space-y-6 my-8">
                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaBullhorn className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Introduce yourself clearly</h3>
                                    <p className="text-gray-600">Share a concise intro in the team channel: name, role, time zone, a one-line skill highlight, and what you want to learn. Example: "Hi I'm Priya (IST). I'm excited to contribute to the SEO project and learn A/B testing. Ping me for pairing sessions!"</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaRegClipboard className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Clarify expectations</h3>
                                    <p className="text-gray-600 mb-2">In your first 48 hours, confirm:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                                        <li>What are your first-week deliverables?</li>
                                        <li>Who is your mentor/point of contact?</li>
                                        <li>Are there daily standups, demos, or sprint reviews?</li>
                                    </ul>
                                    <p className="text-gray-600 mt-2">Write the answers in a personal note so you can reference them.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaRegCalendarCheck className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Block time</h3>
                                    <p className="text-gray-600">Use your calendar to block focused work windows and share them with your mentor. Visible calendars reduce friction and make scheduling easy.</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Communication */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">3</span>
                            Communication is Your Most Valuable Skill
                        </h2>

                        <div className="space-y-6 my-8">
                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaRegCommentDots className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Over-communicate proactively</h3>
                                    <p className="text-gray-600">Remote teams can't "pop over" to your desk. When you start a task, post a short message: what you're doing, ETA, and blockers. Example: "Working on the landing-page analytics dashboard aim to finish a first draft by Thursday EOD. No blockers so far."</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaRegFileAlt className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Write crisp updates</h3>
                                    <p className="text-gray-600">Use subject lines and structure: problem, action, result. If a message needs attention, use @mentions sparingly and follow up if there's no reply in the expected window.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaVideo className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Be camera-ready for meetings</h3>
                                    <p className="text-gray-600">Turn on video for most calls (unless told otherwise). It builds rapport faster than text. Keep your environment tidy and your mic checked.</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Deliver Work Like a Professional */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">4</span>
                            Deliver Work Like a Professional
                        </h2>

                        <div className="space-y-6 my-8">
                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaTasks className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Break tasks into small increments</h3>
                                    <p className="text-gray-600">Instead of "build feature X," split it: design → prototype → first implementation → tests → review. Ship something that can be reviewed early.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaGithub className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Use version control and docs</h3>
                                    <p className="text-gray-600">Push incremental commits with meaningful messages. Document assumptions and decisions in a README or project doc. Future you (and your reviewers) will thank you.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaLightbulb className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Ask better questions</h3>
                                    <p className="text-gray-600">If unclear, show what you tried and where you're stuck. Replace "I don't know" with "I tried A and B; expected X but saw Y is C the right approach?"</p>
                                </div>
                            </div>
                        </div>

                        {/* 5. Time Management & Focus */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">5</span>
                            Time Management & Focus
                        </h2>

                        <div className="space-y-6 my-8">
                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaRegClock className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Adopt a rhythm</h3>
                                    <p className="text-gray-600">Pair your deep work with short check-ins: e.g., 90–120 minutes focus, 10–15 minute check-in. Use a simple timer if that helps.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaUsers className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Respect boundaries</h3>
                                    <p className="text-gray-600">Remote internships are flexible, but confirm core hours when the team expects you online. Be present during those hours.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaRegListAlt className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Keep a running task list</h3>
                                    <p className="text-gray-600">Use Trello, Notion, or a simple todo file; mark progress visibly. That makes handoffs and sprint reviews painless.</p>
                                </div>
                            </div>
                        </div>

                        {/* 6. Learn Intentionally */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">6</span>
                            Learn Intentionally Not Passively
                        </h2>

                        <div className="space-y-6 my-8">
                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaRocket className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Own small experiments</h3>
                                    <p className="text-gray-600">Ask to own a mini-experiment you can finish in a sprint (a small A/B test, a dashboard widget, a user-flow improvement). Measure impact and write brief conclusions.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaStar className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Ask for feedback often</h3>
                                    <p className="text-gray-600">Schedule short 1:1s with your mentor weekly. Ask: "What's one thing I should stop, one to start, and one to continue?" Concrete feedback accelerates growth.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaBookOpen className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Document learnings publicly</h3>
                                    <p className="text-gray-600">Maintain a short weekly note: what you built, what you learned, what you'd change. This becomes your case-study material later.</p>
                                </div>
                            </div>
                        </div>

                        {/* 7. Network — Intentionally */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">7</span>
                            Network Intentionally
                        </h2>

                        <div className="space-y-6 my-8">
                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaUsers className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Help others</h3>
                                    <p className="text-gray-600">Answer a Slack question, review a teammate's PR, or offer to pair on a bug. Help is remembered.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaBullhorn className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Build your 30-second story</h3>
                                    <p className="text-gray-600">Practice a concise summary of what you worked on and the result. Example: "I improved load times for the dashboard by 30% by optimizing queries and lazy-loading visuals."</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaRegEnvelope className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Ask for introductions</h3>
                                    <p className="text-gray-600">If you admire someone on another team, ask your mentor for a 10-minute intro. Short chats expand your visibility.</p>
                                </div>
                            </div>
                        </div>

                        {/* 8. Finish Strong */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">8</span>
                            Finish Strong Deliver Evidence of Impact
                        </h2>

                        <div className="space-y-6 my-8">
                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaRegFileAlt className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Produce a compact case study</h3>
                                    <p className="text-gray-600">1 page: problem, your approach, metrics, screenshots, and your learnings. Include links to code or demos.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaAward className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Ask for a recommendation</h3>
                                    <p className="text-gray-600">If your mentor supports you, request a short LinkedIn recommendation or a performance-based letter. Provide bullet points they can copy it makes writing easier.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaRocket className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-lg mb-2">Request next steps</h3>
                                    <p className="text-gray-600">Ask whether there's a path to extend the internship, join full-time, or receive referrals. Even if the answer is "not now," this signals ambition.</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Checklist */}
                        <div className="bg-black text-white p-8 rounded-3xl my-16">
                            <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                                <FaRegCheckCircle className="text-[#28A3B9]" /> Quick First-Week Checklist (Copyable)
                            </h3>
                            <div className="space-y-3">
                                {[
                                    "✓ Test microphone, webcam, and internet speed",
                                    "✓ Install and log into required tools (Slack, Zoom, GitHub)",
                                    "✓ Send a team intro message with timezone & goals",
                                    "✓ Confirm first-week deliverables and mentor contact",
                                    "✓ Block focus time on your calendar",
                                    "✓ Ship a first small deliverable by day 5"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-[#28A3B9] mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Final Thought */}
                        <div className="relative p-10 bg-gradient-to-br from-[#28A3B9]/5 to-transparent rounded-3xl my-12 border border-[#28A3B9]/20">
                            <FaQuoteRight className="absolute bottom-6 right-6 text-6xl text-[#28A3B9] opacity-20" />
                            <h3 className="text-2xl font-black mb-4 text-[#28A3B9]">Final Thought</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Remote internships are less about showing how quickly you learn a tool and more about demonstrating that you can communicate clearly, ship reliably, and improve things incrementally. Treat every small deliverable as a signal of your professionalism the habit of delivering value is what makes interns become hires.
                            </p>
                        </div>

                    </main>

                    {/* RIGHT SIDEBAR */}
                    <aside className="lg:col-span-3">
                        <div className="sticky top-32 space-y-6">
                        

                            {/* Related Programs */}
                            <div className="bg-gradient-to-br from-[#28A3B9] to-black text-white p-6 rounded-2xl">
                                <h4 className="font-black text-sm uppercase tracking-wider mb-4 opacity-90">RELATED PROGRAMS</h4>
                                <div className="space-y-4">
                                    <div>
                                        <h5 className="font-bold mb-1">UI/UX Design Internship</h5>
                                        <p className="text-xs opacity-75 mb-2">Build a portfolio of real deliverables</p>
                                        <Link to="/blogs/ui-ux-design-internship" className="text-xs flex items-center gap-1 hover:gap-2 transition-all">
                                            Learn more <FaExternalLinkAlt />
                                        </Link>
                                    </div>
                                    <div>
                                        <h5 className="font-bold mb-1">Digital Marketing Mastery</h5>
                                        <p className="text-xs opacity-75 mb-2">Launch real campaigns, analyze metrics</p>
                                        <Link to="/blogs/digital-marketing-mastery" className="text-xs flex items-center gap-1 hover:gap-2 transition-all">
                                            Learn more <FaExternalLinkAlt />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Download Checklist */}
                            <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
                                <h4 className="font-black text-sm uppercase tracking-wider mb-3">FREE RESOURCE</h4>
                                <p className="font-bold mb-2">Remote Internship Checklist</p>
                                <p className="text-xs text-gray-600 mb-4">Download our printable checklist to track your progress</p>
                                <a href={handbook} download>
                                <button className="w-full bg-black text-white py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#28A3B9] transition-colors">
                                    Download PDF
                                </button>
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Mobile Social Share */}
                <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-50">
                    <div className="flex justify-center gap-4">
                        <button onClick={shareOnLinkedIn} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-[#0077B5] hover:text-white transition-colors"><FaLinkedin /></button>
                        <button onClick={shareOnWhatsApp} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-[#25D366] hover:text-white transition-colors"><FaWhatsapp /></button>
                        <button onClick={shareOnTwitter} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"><FaTwitter /></button>
                        <button onClick={copyToClipboard} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-black hover:text-white transition-colors"><FaLink /></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RemoteInternshipGuide;