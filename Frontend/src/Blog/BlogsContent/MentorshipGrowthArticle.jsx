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
    FaCode,
    FaTasks,
    FaLightbulb,
    FaRocket,
    FaStar,
    FaRegLightbulb,
    FaRegClock,
    FaRegCalendarCheck,
    FaRegCheckCircle,
    FaRegFileAlt,
    FaRegCommentDots,
    FaRegListAlt,
    FaRegClipboard,
    FaRegUser,
    FaChartLine,
    FaBookOpen,
    FaAward,
    FaQuoteRight,
    FaQuoteLeft,
    FaGithub,
    FaExternalLinkAlt,
    FaServer,
    FaDatabase,
    FaMobileAlt,
    FaDesktop,
    FaPalette,
    FaSearch,
    FaChartBar,
    FaLayerGroup,
    FaCogs,
    FaShieldAlt,
    FaTachometerAlt,
    FaPencilRuler,
    FaUsers,
    FaBullseye,
    FaRuler,
    FaFileCode,
    FaTerminal,
    FaBoxes,
    FaProjectDiagram,
    FaClipboardList,
    FaRocketchat,
    FaBriefcase,
    FaUniversity,
    FaIndustry,
    FaGraduationCap,
    FaHandshake,
    FaBrain,
    FaUsersCog,
    FaUserTie,
    FaBusinessTime,
    FaChartPie,
    FaNetworkWired,
    FaVideo,
    FaChalkboardTeacher,
    FaUserGraduate,
    FaComments,
    FaRegHandshake,
    FaUserPlus,
    FaUserCheck,
    FaCalendarWeek,
    FaRegCalendarAlt,
    FaRegChartBar
} from 'react-icons/fa';

import { Helmet } from 'react-helmet-async';
import BlogAd from '../BlogAd';

const MentorshipGrowthArticle = () => {
    const siteUrl = 'https://athenura.in';
    const blogUrl = typeof window !== 'undefined' ? window.location.href : `${siteUrl}/insights/mentorship-growth`;
    const canonicalUrl = `${siteUrl}/insights/mentorship-growth`;
    
    const blogTitle = "Why Mentorship Is the Secret to Faster Growth: Complete Guide 2026 | Athenura Insights";
    const blogDescription = "Discover why mentorship accelerates career growth, how to find the right mentor, and an 8-week mentorship sprint plan that delivers measurable results. Practical guide with templates.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/mentorship-growth.jpg";


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
        "headline": "Why Mentorship Is the Secret to Faster Growth: Complete Guide 2026",
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
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        },
        "keywords": "mentorship, career mentorship, professional growth, mentor mentee relationship, finding a mentor, career development, mentorship program, mentorship benefits, mentorship guide, career acceleration, mentorship tips, mentorship strategies, mentorship sprint, mentorship plan",
        "articleSection": "Career Development",
        "wordCount": 2600,
        "timeRequired": "PT10M",
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
                "name": "Mentorship Growth Guide",
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
        "description": "Remote-first skill development platform offering mentorship-driven learning and internships",
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
                "name": "Why is mentorship important for career growth?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mentorship accelerates learning by compressing years of trial-and-error into months of focused progress. Mentors provide guidance, help avoid common pitfalls, expand networks, boost confidence, and provide accountability that self-study cannot match."
                }
            },
            {
                "@type": "Question",
                "name": "How do I find the right mentor?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Start by being clear about your goals, then look in your immediate circle (teachers, alumni, colleagues). Use professional communities like LinkedIn, Slack groups, and industry meetups. Offer value in return and ask for a micro-commitment like three 30-minute calls over six weeks."
                }
            },
            {
                "@type": "Question",
                "name": "What are the different types of mentorship?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technical mentors help with hard skills like coding or design. Career mentors advise on role choices and career paths. Founder mentors guide on product-market-fit and fundraising. Peer mentors exchange feedback at similar levels. Group mentorship involves one mentor helping multiple mentees."
                }
            },
            {
                "@type": "Question",
                "name": "How can I be a good mentee?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Show up prepared with an agenda, do the work between meetings, be coachable and act on feedback, respect their time by keeping meetings focused, and follow up with outcomes to show your progress."
                }
            },
            {
                "@type": "Question",
                "name": "What is an 8-week mentorship sprint?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An 8-week mentorship sprint is a structured approach to mentorship with clear phases: alignment (week 0), learning and planning (weeks 1-2), execution (weeks 3-4), iteration (weeks 5-6), polishing (week 7), and review (week 8). It ensures measurable outcomes within a defined timeframe."
                }
            }
        ]
    };

    // How-To Schema for finding a mentor
    const howToData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Find and Work with a Mentor",
        "description": "A step-by-step guide to finding the right mentor and running an effective 8-week mentorship sprint",
        "totalTime": "P8W",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
        },
        "step": [
            {
                "@type": "HowToStep",
                "name": "Clarify your goal",
                "text": "Write a two-line statement: 'I want to go from X to Y in Z months.' This clarity helps mentors understand how they can help."
            },
            {
                "@type": "HowToStep",
                "name": "Search in your network",
                "text": "Look in your immediate circle: teachers, previous bosses, alumni, or colleagues who understand your context."
            },
            {
                "@type": "HowToStep",
                "name": "Engage in communities",
                "text": "Join Slack groups, LinkedIn discussions, Twitter threads, and local meetups where potential mentors participate."
            },
            {
                "@type": "HowToStep",
                "name": "Offer value first",
                "text": "Offer to help with research, run errands at events, or bring organization to their work. Mentorship is reciprocal."
            },
            {
                "@type": "HowToStep",
                "name": "Ask for micro-commitment",
                "text": "Request something specific: 'Could we try three 30-min calls over six weeks?' instead of open-ended commitments."
            },
            {
                "@type": "HowToStep",
                "name": "Run the 8-week sprint",
                "text": "Follow the structured plan: align, learn, execute, iterate, polish, and review with clear outcomes each phase."
            },
            {
                "@type": "HowToStep",
                "name": "Measure and follow up",
                "text": "Track metrics like deliverable speed, actionable outcomes, new connections, and confidence increases."
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "Calendar for scheduling"
            },
            {
                "@type": "HowToTool",
                "name": "Agenda template"
            },
            {
                "@type": "HowToTool",
                "name": "Project management tools"
            },
            {
                "@type": "HowToTool",
                "name": "LinkedIn for networking"
            }
        ],
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "Clear goals"
            },
            {
                "@type": "HowToSupply",
                "name": "Willingness to learn"
            },
            {
                "@type": "HowToSupply",
                "name": "Time commitment"
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
                <meta name="keywords" content="mentorship, career mentorship, professional growth, mentor, mentee, finding a mentor, mentorship program, mentorship benefits, mentorship guide, career acceleration, mentorship tips, mentorship strategies, mentorship sprint, mentorship plan, mentorship relationships, career mentor, technical mentor, peer mentorship, group mentorship, mentorship outcomes, mentorship success, mentorship accountability, career development, professional development, networking, mentorship advice, mentorship best practices, mentorship for students, mentorship for professionals" />
                <meta name="author" content="Athenura Insights Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="index, follow" />                <meta name="googlebot" content="index, follow" />
                <meta name="google-site-verification" content="your-verification-code" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH / FACEBOOK ---------- */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Why Mentorship Is the Secret to Faster Growth: Complete Guide 2026" />
                <meta property="og:description" content={blogDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Mentorship Guide for Career Growth" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                <meta property="article:section" content="Career Development" />
                <meta property="article:tag" content="Mentorship" />
                <meta property="article:tag" content="Career Growth" />
                <meta property="article:tag" content="Professional Development" />
                <meta property="article:tag" content="Networking" />
                <meta property="article:tag" content="Leadership" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Mentorship: The Secret to Faster Growth" />
                <meta name="twitter:description" content={blogDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Guide to mentorship and career acceleration" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Insights" />
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
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://ik.imagekit.io/cn4giet1a/Gemini_Generated_Image_gdsr9fgdsr9fgdsr.png"
                            alt="Mentorship guiding professional growth and career development"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-transparent" />
                    </div>

                    <div className="absolute inset-0 z-0 block lg:hidden">
                        <img
                            src="https://ik.imagekit.io/cn4giet1a/Gemini_Generated_Image_tefjeutefjeutefj.png"
                            alt="Mentorship relationship and career acceleration"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/80 to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-[2px] w-12 bg-[#28A3B9]"></span>
                                <span className="text-[#28A3B9] font-bold uppercase tracking-[0.3em] text-xs">CAREER ACCELERATION</span>
                                <span className="text-gray-400 text-sm flex items-center gap-2">
                                    <FaClock /> 10 min read
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-6">
                                Why Mentorship Is the <br />
                                <span className="text-[#28A3B9]">Secret to Faster Growth</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                                How the right mentor compresses years of trial-and-error into months of focused progress — and an 8-week plan to get visible results fast.
                            </p>
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <FaUserCircle className="text-xl" />
                                    <span>Athenura Insights Team</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt />
                                    <span>March 2, 2026</span>
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
                                    Mentorship isn't a buzzword — it's a multiplier. Whether you're a student, an early-career professional, or a founder steering a fledgling startup, the right mentor compresses years of trial-and-error into months of focused progress.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl my-8 border-l-4 border-[#28A3B9]">
                                <p className="text-gray-700">
                                    This article explains why mentorship accelerates growth, how to find and work with a mentor, and a simple 8-week plan you can use to get visible results fast.
                                </p>
                            </div>
                        </section>

                        {/* Final Note */}

                        {/* What mentorship actually does */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">1</span>
                            What Mentorship Actually Does (In Plain Terms)
                        </h2>

                        <div className="space-y-6 my-8">
                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-[#28A3B9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaRocket className="text-2xl text-[#28A3B9]" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg mb-2">Speeds learning</h3>
                                    <p className="text-gray-600">Mentors point you to the exact books, projects, and mistakes to avoid — saving you the "figure-it-out" stage.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-[#28A3B9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaBullseye className="text-2xl text-[#28A3B9]" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg mb-2">Sharpens focus</h3>
                                    <p className="text-gray-600">A mentor helps you prioritize what matters now vs. what can wait.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-[#28A3B9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaNetworkWired className="text-2xl text-[#28A3B9]" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg mb-2">Expands networks</h3>
                                    <p className="text-gray-600">A trusted mentor opens doors and introduces you to people who matter.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-[#28A3B9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaUserCheck className="text-2xl text-[#28A3B9]" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg mb-2">Boosts confidence</h3>
                                    <p className="text-gray-600">Feedback from someone experienced reduces doubt and helps you iterate faster.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-[#28A3B9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaRegClock className="text-2xl text-[#28A3B9]" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg mb-2">Holds you accountable</h3>
                                    <p className="text-gray-600">Deadlines from a mentor are more motivating than self-imposed goals.</p>
                                </div>
                            </div>
                        </div>

                        {/* Why mentorship beats going it alone */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">2</span>
                            Why Mentorship Beats Going It Alone
                        </h2>

                        <div className="bg-gradient-to-r from-purple-50 to-white p-8 rounded-2xl my-6 border border-purple-100">
                            <p className="text-lg text-gray-700">
                                Self-study builds knowledge; mentorship builds application. Two people can read the same book — the one with a mentor will try, fail, adapt, and ship faster. Mentorship reduces the "valleys" in learning curves: you get fewer blind alleys and more guided experiments.
                            </p>
                            <div className="mt-4 font-black text-[#28A3B9]">
                                Mentors turn knowledge into momentum.
                            </div>
                        </div>

                        {/* Types of mentorship */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">3</span>
                            Types of Mentorship (Pick What Fits)
                        </h2>

                        <div className="grid md:grid-cols-2 gap-5 my-8">
                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaCode className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Technical mentor</h4>
                                <p className="text-sm text-gray-600">Helps with hard skills: coding, design, analytics, engineering practices.</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaUserTie className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Career mentor</h4>
                                <p className="text-sm text-gray-600">Advises on role choices, interviews, and long-term career path.</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaBriefcase className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Founder/advisor mentor</h4>
                                <p className="text-sm text-gray-600">Guides on product-market-fit, fundraising, and go-to-market strategy.</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaUsers className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Peer mentor</h4>
                                <p className="text-sm text-gray-600">Same-level colleagues who exchange feedback and resources.</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all md:col-span-2">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaChalkboardTeacher className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Group mentorship</h4>
                                <p className="text-sm text-gray-600">Small cohorts or office-hours where one mentor helps several mentees.</p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 italic mb-8">Each type accelerates different outcomes. Choose based on the gap you need closed.</p>

                        {/* How to find a mentor */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">4</span>
                            How to Find a Mentor (Practical Steps)
                        </h2>

                        <div className="space-y-5 my-8">
                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">1</span>
                                <div>
                                    <h4 className="font-black">Be clear about what you need</h4>
                                    <p className="text-gray-600 text-sm mt-1">Write a two-line statement: "I want to go from X to Y in Z months."</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">2</span>
                                <div>
                                    <h4 className="font-black">Start in your immediate circle</h4>
                                    <p className="text-gray-600 text-sm mt-1">Teachers, previous bosses, alumni, or colleagues are often the most willing.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">3</span>
                                <div>
                                    <h4 className="font-black">Use communities</h4>
                                    <p className="text-gray-600 text-sm mt-1">Slack groups, LinkedIn messages, Twitter/X threads, university alumni networks, and local meetups.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">4</span>
                                <div>
                                    <h4 className="font-black">Offer value</h4>
                                    <p className="text-gray-600 text-sm mt-1">Offer to help with research, run errands at events, or bring notes and organization. Mentorship is a relationship, not a charity case.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">5</span>
                                <div>
                                    <h4 className="font-black">Ask for a micro-commitment</h4>
                                    <p className="text-gray-600 text-sm mt-1">"Could we try three 30-min calls over six weeks?" is easier to accept than "Will you be my mentor?"</p>
                                </div>
                            </div>
                        </div>

                        {/* Final Note */}

                        {/* How to be a great mentee */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">5</span>
                            How to Be a Great Mentee
                        </h2>

                        <div className="bg-[#28A3B9]/5 p-6 rounded-2xl my-6">
                            <p className="text-gray-700 mb-4 font-medium">Mentors love mentees who make them look effective.</p>
                            <ul className="space-y-3">
                                {[
                                    "Show up prepared — send a short agenda before every meeting",
                                    "Do the work — try, fail, iterate — bring results, not excuses",
                                    "Be coachable — ask for direct feedback and act on it",
                                    "Respect their time — keep meetings focused and short",
                                    "Follow up with outcomes — tell them what you implemented and what changed"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#28A3B9] mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Common pitfalls */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">6</span>
                            Common Mentorship Pitfalls (And How to Avoid Them)
                        </h2>

                        <div className="space-y-4 my-8">
                            <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                                <h4 className="font-black mb-1">Too vague goals</h4>
                                <p className="text-sm text-gray-700">Fix: set measurable targets (e.g., "Get 3 job interview callbacks in 8 weeks")</p>
                            </div>

                            <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                                <h4 className="font-black mb-1">Treating mentor as a shortcut</h4>
                                <p className="text-sm text-gray-700">Fix: use advice but still do the hard work</p>
                            </div>

                            <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                                <h4 className="font-black mb-1">One-way relationship</h4>
                                <p className="text-sm text-gray-700">Fix: reciprocate with help, introductions, or documentation of learnings</p>
                            </div>

                            <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                                <h4 className="font-black mb-1">Expecting too much availability</h4>
                                <p className="text-sm text-gray-700">Fix: agree on cadence and boundaries early</p>
                            </div>
                        </div>

                        {/* 8-week mentorship sprint */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">7</span>
                            A Practical 8-Week Mentorship Sprint
                        </h2>

                        <div className="bg-gray-900 text-white p-8 rounded-3xl my-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-[#28A3B9] rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-1">0</span>
                                    <div>
                                        <span className="font-black text-[#28A3B9]">Week 0 — Align:</span>
                                        <span className="text-gray-300 ml-2">30-min kickoff. Share goals, constraints, and a 2-month target.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-[#28A3B9] rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-1">1-2</span>
                                    <div>
                                        <span className="font-black text-[#28A3B9]">Weeks 1–2 — Learn & Plan:</span>
                                        <span className="text-gray-300 ml-2">Mentor recommends 2-3 learning resources and a small project. You deliver a 1-page plan.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-[#28A3B9] rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-1">3-4</span>
                                    <div>
                                        <span className="font-black text-[#28A3B9]">Weeks 3–4 — Execute:</span>
                                        <span className="text-gray-300 ml-2">Weekly 30-min check-ins. You ship the first iteration and list blockers.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-[#28A3B9] rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-1">5-6</span>
                                    <div>
                                        <span className="font-black text-[#28A3B9]">Weeks 5–6 — Iterate:</span>
                                        <span className="text-gray-300 ml-2">Incorporate feedback, add depth, and collect metrics.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-[#28A3B9] rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-1">7</span>
                                    <div>
                                        <span className="font-black text-[#28A3B9]">Week 7 — Polish:</span>
                                        <span className="text-gray-300 ml-2">Finalize deliverable (project, portfolio piece, interview prep).</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-[#28A3B9] rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-1">8</span>
                                    <div>
                                        <span className="font-black text-[#28A3B9]">Week 8 — Review & Expand:</span>
                                        <span className="text-gray-300 ml-2">60-min review; mentor gives next-step plan and referrals.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Real example */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Real (Short) Example</h2>

                        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm my-6">
                            <div className="flex gap-4">
                                <FaUserGraduate className="text-3xl text-[#28A3B9] flex-shrink-0" />
                                <div>
                                    <p className="text-gray-700 italic">
                                        "A junior product designer wanted a job in fintech. Mentor suggested: build a single case-study redesign for a payments flow (not a full app), focus on security UX, and prepare three talking points for interviews. Eight weeks later: polished case study, two recruiter interviews, and a referral to a hiring manager. Result: interview pipeline opened in weeks, not months."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Metrics that show mentorship is working */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">8</span>
                            Metrics That Show Mentorship Is Working
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4 my-8">
                            {[
                                { metric: "Faster speed of deliverables", desc: "Time from idea → prototype" },
                                { metric: "Number of actionable outcomes", desc: "Projects completed, interviews scheduled" },
                                { metric: "New high-quality connections", desc: "Introduced by mentor" },
                                { metric: "Confidence increase", desc: "Self-reported + fewer reworks after feedback" }
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-gray-50 rounded-xl">
                                    <div className="font-black text-[#28A3B9]">{item.metric}</div>
                                    <div className="text-sm text-gray-600">{item.desc}</div>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-600 text-sm mb-8">Track these monthly and adjust the mentorship scope if progress stalls.</p>

                        {/* Final checklist */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Final Checklist Before You Ask Someone</h2>

                        <div className="bg-gray-50 p-6 rounded-2xl my-6">
                            <ul className="space-y-3">
                                {[
                                    "I can state my goal in one sentence.",
                                    "I can explain why this person can help.",
                                    "I can offer one way to provide value.",
                                    "I'm asking for a specific, short commitment."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <FaCheckCircle className="text-[#28A3B9] mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Final Note */}

                        {/* Parting thought */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Parting Thought</h2>

                        <div className="relative p-8 bg-gray-50 rounded-3xl overflow-hidden my-10 border border-gray-200">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#28A3B9] opacity-5 rounded-full -mr-20 -mt-20"></div>
                            <div className="relative z-10">
                                <FaQuoteRight className="text-4xl text-[#28A3B9] opacity-50 mb-4" />
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Mentorship is not magic — it's focused leverage. The right mentor doesn't hand you answers; they teach you how to ask smarter questions and shorten the distance between where you are and where you want to be. If you're serious about growth, stop hoping for shortcuts and start building a mentorship strategy.
                                </p>
                                <p className="text-lg font-black mt-4 text-[#28A3B9]">
                                    Read Story — try this 8-week sprint with one mentor, and measure the difference.
                                </p>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-gradient-to-r from-[#28A3B9] to-[#1c7a8c] text-white p-8 rounded-3xl my-12 text-center">
                            <h3 className="text-2xl font-black mb-4">Ready to Accelerate Your Growth?</h3>
                            <p className="mb-6 opacity-90">Join Athenura's mentorship-driven programs and get paired with industry experts who guide your journey.</p>
                            <button className="bg-white text-[#28A3B9] px-8 py-3 rounded-full font-black hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                                Find Your Mentor →
                            </button>
                        </div>
                    </main>
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

export default MentorshipGrowthArticle;