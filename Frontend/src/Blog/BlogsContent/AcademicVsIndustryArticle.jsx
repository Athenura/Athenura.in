import React from 'react';
import { motion } from 'framer-motion';
import {
    FaVideo,
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
    FaNetworkWired
} from 'react-icons/fa';

import { Helmet } from 'react-helmet-async';
import BlogAd from '../BlogAd';

const AcademicVsIndustryArticle = () => {
    const siteUrl = 'https://athenura.in';
    const blogUrl = typeof window !== 'undefined' ? window.location.href : `${siteUrl}/bridging-the-gap`;
    const canonicalUrl = `${siteUrl}/bridging-the-gap`;

    const blogTitle = "Bridging the Academic vs Industry Skills Gap: Complete Guide 2026 | Athenura Insights";
    const blogDescription = "Discover why the academic vs industry skills gap exists, what employers actually look for, and a practical 90-day action plan to bridge the gap with portfolio-ready projects.";

    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/academic-vs-industry.jpg";

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
        "headline": "Bridging the Academic vs Industry Skills Gap: Complete Guide 2026",
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
        "keywords": "academic vs industry skills, skills gap, university to career transition, employability skills, industry ready graduates, professional skills development, tech skills gap, workplace skills, graduate employability, career readiness",
        "articleSection": "Career Development",
        "wordCount": 2800,
        "timeRequired": "PT12M",
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
                "name": "Academic vs Industry Skills Gap Guide",
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
        "description": "Remote-first skill development platform bridging the academic-industry gap through practical internships",
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
                "name": "Why does the academic vs industry skills gap exist?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The gap exists because academia prioritizes conceptual clarity and formal reasoning, while industry focuses on outcomes like shipping features, running campaigns, and serving customers. Curricula change slowly while industry tools evolve quickly, and assessments reward individual correctness while employers reward teamwork and impact."
                }
            },
            {
                "@type": "Question",
                "name": "What skills do employers actually look for?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Employers consistently seek problem framing, delivery discipline, communication, collaboration, measurement orientation, and learning agility. These professional habits matter more than specific course grades."
                }
            },
            {
                "@type": "Question",
                "name": "How does the skills gap show up in tech roles?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tech graduates can write algorithms but often lack production practices like Git workflows, CI/CD, deployment, logging, and collaborative code review. Without these, a 'working' prototype rarely survives real users."
                }
            },
            {
                "@type": "Question",
                "name": "How can students bridge the academic-industry gap?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Students can bridge the gap through live role-based projects, learning industry tooling from day one, seeking mentorship and iterative feedback, and building portfolio evidence with measurable outcomes. A 90-day action plan with clear deliverables helps structure this transition."
                }
            },
            {
                "@type": "Question",
                "name": "What deliverables impress hiring managers most?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hiring teams look for concise, verifiable signals: a single polished project with clear instructions, a 1-2 page case study documenting problem and results, a 2-4 minute demo video, and at least one external reference from a mentor or collaborator."
                }
            }
        ]
    };

    // How-To Schema for bridging the skills gap
    const howToData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Bridge the Academic vs Industry Skills Gap",
        "description": "A practical 90-day action plan to transition from academic learning to industry-ready professional",
        "totalTime": "P90D",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
        },
        "step": [
            {
                "@type": "HowToStep",
                "name": "Learn through live role-based projects",
                "text": "Replace isolated assignments with team projects that mimic company briefs. Rotate roles across sprints with defined timelines and success metrics."
            },
            {
                "@type": "HowToStep",
                "name": "Master industry tooling",
                "text": "Learn Git, issue tracking, CI/CD pipelines for tech roles, or CRM/analytics dashboards for non-tech roles from day one."
            },
            {
                "@type": "HowToStep",
                "name": "Seek mentorship and iterative feedback",
                "text": "Regular mentor check-ins and peer reviews recreate company appraisal cycles focusing on process, collaboration, and outcomes."
            },
            {
                "@type": "HowToStep",
                "name": "Build evidence-based portfolio",
                "text": "Create deployable projects, case studies, performance dashboards, and demo recordings that prove your capabilities."
            },
            {
                "@type": "HowToStep",
                "name": "Follow a structured action plan",
                "text": "Use a 90-day plan with clear milestones: define specs, implement with tests, deploy, add telemetry, and prepare documentation."
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "Git/GitHub"
            },
            {
                "@type": "HowToTool",
                "name": "CI/CD Tools"
            },
            {
                "@type": "HowToTool",
                "name": "Project Management Software"
            },
            {
                "@type": "HowToTool",
                "name": "Analytics Platforms"
            }
        ],
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "Domain knowledge from academia"
            },
            {
                "@type": "HowToSupply",
                "name": "Mentor guidance"
            },
            {
                "@type": "HowToSupply",
                "name": "Peer collaboration"
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
                <meta name="keywords" content="academic vs industry skills, skills gap, university to career, industry ready graduates, employability skills, professional skills development, tech skills gap, workplace skills, graduate employability, career readiness, academic industry divide, practical skills, industry tools, mentorship programs, portfolio projects, hiring managers expectations, remote work skills, digital transformation skills, future of work skills, continuous learning" />
                <meta name="author" content="Athenura Insights Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />                <meta name="googlebot" content="index, follow" />
                <meta name="google-site-verification" content="your-verification-code" />

                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />

                {/* ---------- OPEN GRAPH / FACEBOOK ---------- */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Bridging the Academic vs Industry Skills Gap: Complete Guide 2026" />
                <meta property="og:description" content={blogDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Academic vs Industry Skills Gap Bridge Guide" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                <meta property="article:section" content="Career Development" />
                <meta property="article:tag" content="Skills Gap" />
                <meta property="article:tag" content="Career Transition" />
                <meta property="article:tag" content="Higher Education" />
                <meta property="article:tag" content="Industry 4.0" />
                <meta property="article:tag" content="Professional Development" />
                <meta property="article:tag" content="Graduate Employability" />
                <meta property="article:tag" content="Workplace Skills" />

                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Academic vs Industry Skills Gap: Complete Guide 2026" />
                <meta name="twitter:description" content={blogDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Guide to bridging academic and industry skills gap" />

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
                            src="https://ik.imagekit.io/cn4giet1a/Gemini_Generated_Image_xwpzj2xwpzj2xwpz.png"
                            alt="Academic vs Industry Skills Gap Bridge Concept"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-transparent" />
                    </div>

                    <div className="absolute inset-0 z-0 block lg:hidden">
                        <img
                            src="https://ik.imagekit.io/cn4giet1a/Gemini_Generated_Image_bmpdwfbmpdwfbmpd.png"
                            alt="Bridging Academic and Industry Skills"
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
                                <span className="text-[#28A3B9] font-bold uppercase tracking-[0.3em] text-xs">CAREER TRANSITION</span>
                                <span className="text-gray-400 text-sm flex items-center gap-2">
                                    <FaClock /> 5 min read
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-6">
                                Bridging the <br />
                                <span className="text-[#28A3B9]">Academic vs Industry</span> Skills Gap
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                                How Athenura is closing the gap between university frameworks and real-world delivery through practical, performance-focused learning.
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
                                    The move from campus to career is one of the most abrupt transitions a graduate faces. Universities give you frameworks and theory. Employers expect measurable results, collaboration under pressure, and tools that rarely show up in lecture halls.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl my-8 border-l-4 border-[#28A3B9]">
                                <p className="text-gray-700">
                                    That mismatch the academic vs industry skills gap affects tech and non-tech careers alike. This article explains the gap clearly and shows how a practical, performance-focused model is preparing students to thrive from day one.
                                </p>
                            </div>
                        </section>

                        <BlogAd />

                        {/* Why the gap exists */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">1</span>
                            Why the Academic-Industry Gap Exists
                        </h2>

                        <p className="mb-4">Two systems, two priorities. Academia centers on conceptual clarity, formal reasoning, and standardized assessment. The workplace centers on outcomes: shipping features, running campaigns, improving operations, and serving customers.</p>

                        <div className="space-y-6 my-8">
                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-[#28A3B9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaUniversity className="text-2xl text-[#28A3B9]" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg mb-2">Curricula change slowly vs. tools evolve quickly</h3>
                                    <p className="text-gray-600">University programs update every few years, while industry tools and practices evolve quarterly. Graduates learn stable fundamentals but miss current workflows.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-[#28A3B9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaUserTie className="text-2xl text-[#28A3B9]" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg mb-2">Individual correctness vs. team impact</h3>
                                    <p className="text-gray-600">Assessments reward individual performance on well-defined problems. Employers reward teamwork, reproducibility, and ability to navigate ambiguity.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-[#28A3B9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaBusinessTime className="text-2xl text-[#28A3B9]" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg mb-2">Limited exposure to real constraints</h3>
                                    <p className="text-gray-600">Students get depth in specific subjects but rarely face real stakeholders, deadlines, and messy trade-offs that define workplace challenges.</p>
                                </div>
                            </div>
                        </div>

                        <p className="bg-[#28A3B9]/5 p-4 rounded-lg italic">
                            These structural differences create a skills deficit that's not about intelligence or motivation it's about experience and context.
                        </p>

                        {/* What employers look for */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">2</span>
                            What Employers Actually Look For (Tech & Non-Tech)
                        </h2>

                        <p className="mb-6">Across roles, hiring managers consistently seek these professional habits:</p>

                        <div className="grid md:grid-cols-2 gap-5 my-8">
                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaBullseye className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Problem framing</h4>
                                <p className="text-sm text-gray-600">Can you define success, constraints, and minimal viable outcomes?</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaTasks className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Delivery discipline</h4>
                                <p className="text-sm text-gray-600">Do you ship increments, use versioning/QA, and meet commitments?</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaRocketchat className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Communication</h4>
                                <p className="text-sm text-gray-600">Can you make concise reports, handoffs, and presentations for varied audiences?</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaUsers className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Collaboration</h4>
                                <p className="text-sm text-gray-600">Do you participate in peer review, accept feedback, and manage stakeholders?</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaChartLine className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Measurement orientation</h4>
                                <p className="text-sm text-gray-600">Do you set and track KPIs (engagement, conversion, error rate, time saved)?</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaBrain className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Learning agility</h4>
                                <p className="text-sm text-gray-600">Can you adopt new tools or processes quickly when requirements change?</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 text-white p-6 rounded-2xl my-6">
                            <p className="text-lg font-light">
                                These behaviours matter more than specific course grades; they're the difference between a candidate who learns and a candidate who contributes immediately.
                            </p>
                        </div>

                        {/* How the gap shows up */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">3</span>
                            How the Gap Shows Up in Practice
                        </h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <FaLaptop className="text-2xl text-blue-600" />
                                    <h3 className="font-black text-xl">Tech Roles</h3>
                                </div>
                                <p className="text-gray-700">Developers, data analysts, and designers can write algorithms, but often lack production practices Git workflows, CI/CD, deployment, logging, and collaborative code review. Without these, a "working" prototype rarely survives real users.</p>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <FaBriefcase className="text-2xl text-green-600" />
                                    <h3 className="font-black text-xl">Non-Tech Roles</h3>
                                </div>
                                <p className="text-gray-700">Marketing, HR, operations, and finance graduates know frameworks but lack real campaign execution, stakeholder negotiation, SOP creation, or measurable reporting. Theories become case studies, not outcomes.</p>
                            </div>
                        </div>

                        {/* Practical model */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">4</span>
                            A Practical Model for Closing the Gap
                        </h2>

                        <p className="mb-6">A more effective pathway pairs academic depth with structured, performance-oriented experience. The model follows four steps: <span className="font-black">Learn → Apply → Measure → Improve</span>.</p>

                        <div className="space-y-5 my-8">
                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">1</span>
                                <div>
                                    <h4 className="font-black">Live, role-based projects</h4>
                                    <p className="text-gray-600 text-sm mt-1">Replace isolated assignments with team projects that mimic company briefs. Each student has a role lead, QA/documenter, stakeholder liaison and rotates roles across sprints. Projects are bound by timelines, resource constraints, and defined success metrics.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">2</span>
                                <div>
                                    <h4 className="font-black">Industry tooling & workflows from day one</h4>
                                    <p className="text-gray-600 text-sm mt-1">Learning Git, issue tracking, CI/CD pipelines (for tech) or CRM/analytics dashboards (for non-tech) isn't optional it's core curriculum. Practicing with these tools normalizes professional workflows.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">3</span>
                                <div>
                                    <h4 className="font-black">Mentorship and iterative feedback</h4>
                                    <p className="text-gray-600 text-sm mt-1">Regular mentor check-ins and peer reviews recreate company appraisal cycles. Feedback focuses on process, collaboration, and outcomes.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">4</span>
                                <div>
                                    <h4 className="font-black">Portfolio & evidence-based assessment</h4>
                                    <p className="text-gray-600 text-sm mt-1">Every participant graduates with evidence: a deployable project or campaign, a two-page case study, performance dashboards, and a short demo. Hiring decisions become data-driven.</p>
                                </div>
                            </div>
                        </div>

                        <BlogAd />

                        {/* 90-day action plan */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">5</span>
                            90-Day Action Plan (Templates You Can Use)
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-6 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaCode className="text-2xl text-blue-300" />
                                    <h3 className="font-black text-xl">Tech Plan (90 days)</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-blue-300 mt-1 flex-shrink-0" />
                                        <span className="text-sm">Days 0–30: Define a product, set up repository, write one-page spec with KPIs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-blue-300 mt-1 flex-shrink-0" />
                                        <span className="text-sm">Days 31–60: Implement features with tests, enable CI/CD, deploy staging release</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-blue-300 mt-1 flex-shrink-0" />
                                        <span className="text-sm">Days 61–90: Add telemetry, finalize docs, record 3-min demo, prepare case study</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-green-900 to-green-800 text-white p-6 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaBriefcase className="text-2xl text-green-300" />
                                    <h3 className="font-black text-xl">Non-Tech Plan (90 days)</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-green-300 mt-1 flex-shrink-0" />
                                        <span className="text-sm">Days 0–30: Create campaign/process brief with target metrics and stakeholders</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-green-300 mt-1 flex-shrink-0" />
                                        <span className="text-sm">Days 31–60: Run pilot/simulation, ensure versioned artifacts, collect data</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheckCircle className="text-green-300 mt-1 flex-shrink-0" />
                                        <span className="text-sm">Days 61–90: Produce SOPs, impact report, short presentation for stakeholders</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Deliverables */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">6</span>
                            Deliverables That Convert into Opportunities
                        </h2>

                        <p className="mb-6">Hiring teams look for concise, verifiable signals. Top-performing candidates present:</p>

                        <div className="space-y-5 my-8">
                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                                <FaProjectDiagram className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black">A single polished project</h4>
                                    <p className="text-gray-600">Repo or campaign with clear "how to run" instructions.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                                <FaRegFileAlt className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black">1-2 page case study</h4>
                                    <p className="text-gray-600">Problem, constraints, solution, trade-offs, measurable results.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                                <FaVideo className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black">2-4 minute demo video</h4>
                                    <p className="text-gray-600">Walkthrough of the work and key decisions.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                                <FaUsers className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black">External reference</h4>
                                    <p className="text-gray-600">From a mentor or collaborator who can vouch for your work.</p>
                                </div>
                            </div>
                        </div>

                        {/* Why this matters */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Why This Matters Now</h2>

                        <div className="bg-[#28A3B9]/5 p-6 rounded-2xl my-6">
                            <p className="text-gray-700">
                                Employers increasingly hire for evidence of capability rather than credentials alone. Remote work, rapid technology shifts, and leaner teams demand newcomers who can integrate quickly and contribute measurable value. Bridging the gap improves employability, reduces ramp-up time for companies, and creates stronger, more resilient careers.
                            </p>
                        </div>


                        <BlogAd />

                        {/* Final Thoughts */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Final Thoughts</h2>

                        <div className="relative p-8 bg-gray-50 rounded-3xl overflow-hidden my-10 border border-gray-200">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#28A3B9] opacity-5 rounded-full -mr-20 -mt-20"></div>
                            <div className="relative z-10">
                                <FaQuoteRight className="text-4xl text-[#28A3B9] opacity-50 mb-4" />
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Educational foundations remain indispensable. But theory plus practice in a loop of feedback and measurable delivery is what enables sustainable careers. Programs that embed live projects, tool fluency, mentorship, and evidence-based portfolios produce graduates who don't just understand their field; they improve it from day one.
                                </p>
                                <p className="text-lg font-black mt-4 text-[#28A3B9]">
                                    Athenura
                                </p>
                            </div>
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

export default AcademicVsIndustryArticle;