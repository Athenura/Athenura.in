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
    FaBrain,
    FaHandshake,
    FaNetworkWired,
    FaUserTie,
    FaCertificate,
    FaMicrophone,
    FaPenFancy,
    FaBriefcase,
    FaGraduationCap,
    FaChartPie,
    FaGlobe,
    FaComments,
    FaClock as FaClockRegular,
    FaCalendarCheck
} from 'react-icons/fa';

import { Helmet } from 'react-helmet-async';
import BlogAd from '../BlogAd';

const IndustryReadyArticle = () => {
    const siteUrl = 'https://athenura.in';
    const blogUrl = typeof window !== 'undefined' ? window.location.href : `${siteUrl}/insights/industry-ready-guide`;
    const canonicalUrl = `${siteUrl}/insights/industry-ready-guide`;
    
    const blogTitle = "How to Become Industry Ready Before Graduation: Complete Guide 2026 | Athenura Insights";
    const blogDescription = "Learn essential steps for technical and non-technical students to become industry ready before graduation. Career goals, skill development, portfolio building, and interview preparation guide.";
    
    const imageUrl = "https://i.pinimg.com/736x/2f/2e/4e/2f2e4eca52d953565cb95cc49439dc4f.jpg";
    const publishedDate = "2026-03-19";
    const modifiedDate = "2026-03-19";
    const authorName = "Athenura Insights Team";
    const authorUrl = `${siteUrl}/author/insights-team`;

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
        "headline": "How to Become Industry Ready Before Graduation: Complete Guide 2026",
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
        "keywords": "industry ready, career preparation, skill development, technical skills, soft skills, portfolio building, internship, job interview preparation, career goals, professional networking",
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
                "name": "Industry Ready Guide",
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
                "name": "What does it mean to be industry ready?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Industry ready means being equipped with the right combination of skills, knowledge and expertise that are required to be successful in today's industry. It's about having both technical abilities and soft skills to work in professional real-world scenarios."
                }
            },
            {
                "@type": "Question",
                "name": "How can technical students become industry ready?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technical students should focus on programming skills (Python, Java, JavaScript), data analysis, web development, cloud computing, and AI/ML. Working on coding platforms, creating projects, and participating in hackathons helps enhance technical skills."
                }
            },
            {
                "@type": "Question",
                "name": "How can non-technical students become industry ready?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Non-technical students should focus on communication skills, digital marketing, business analytics, content writing, and financial analysis. Building portfolios with marketing campaigns, content samples, and business case studies is essential."
                }
            },
            {
                "@type": "Question",
                "name": "What soft skills are important for industry readiness?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Key soft skills include communication, teamwork, problem-solving, leadership, and time management. These can be developed through group projects, college events, presentations, and networking with professionals."
                }
            },
            {
                "@type": "Question",
                "name": "How important are internships for becoming industry ready?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Internships are crucial as they provide real-world experience, help build professional networks, and give insight into industry expectations. They bridge the gap between academic learning and professional work."
                }
            }
        ]
    };

    // How-To Schema
    const howToData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Become Industry Ready Before Graduation",
        "description": "A comprehensive guide for students to prepare for their professional careers",
        "totalTime": "P1Y",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
        },
        "step": [
            {
                "@type": "HowToStep",
                "name": "Understand your career goals early",
                "text": "Explore all possible career options in your field of study and identify your preferred path."
            },
            {
                "@type": "HowToStep",
                "name": "Research career requirements",
                "text": "Study job descriptions and required skills for your chosen career path."
            },
            {
                "@type": "HowToStep",
                "name": "Develop relevant skills",
                "text": "Focus on both technical and soft skills required in your industry."
            },
            {
                "@type": "HowToStep",
                "name": "Build a strong portfolio",
                "text": "Create projects that showcase your skills and capabilities to employers."
            },
            {
                "@type": "HowToStep",
                "name": "Improve communication skills",
                "text": "Practice presentations, group discussions, and professional networking."
            },
            {
                "@type": "HowToStep",
                "name": "Stay updated with industry trends",
                "text": "Follow industry blogs, attend webinars, and connect with professionals."
            },
            {
                "@type": "HowToStep",
                "name": "Build professional network",
                "text": "Connect with professionals, attend events, and maintain relationships with seniors."
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "LinkedIn"
            },
            {
                "@type": "HowToTool",
                "name": "GitHub"
            },
            {
                "@type": "HowToTool",
                "name": "Portfolio platforms"
            }
        ],
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "Learning resources"
            },
            {
                "@type": "HowToSupply",
                "name": "Project materials"
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
                <meta name="keywords" content="industry ready, career preparation, skill development, technical skills, soft skills, portfolio building, internship, job interview preparation, career goals, professional networking, students guide, graduation preparation, job market readiness" />
                <meta name="author" content="Athenura Insights Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH / FACEBOOK ---------- */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="How to Become Industry Ready Before Graduation: Complete Guide 2026" />
                <meta property="og:description" content={blogDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Industry readiness guide for students" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                <meta property="article:published_time" content={publishedDate} />
                <meta property="article:modified_time" content={modifiedDate} />
                <meta property="article:author" content={authorUrl} />
                <meta property="article:section" content="Career Development" />
                <meta property="article:tag" content="Career" />
                <meta property="article:tag" content="Students" />
                <meta property="article:tag" content="Skills" />
                <meta property="article:tag" content="Jobs" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Industry Ready Guide 2026: For Tech & Non-Tech Students" />
                <meta name="twitter:description" content={blogDescription} />
                <meta name="twitter:image" content={imageUrl} />
                
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
                <link rel="dns-prefetch" href="https://ik.imagekit.io" />
            </Helmet>

            <div className="bg-white min-h-screen font-sans text-gray-800">

                {/* HERO SECTION */}
                <section className="relative h-[70vh] w-full overflow-hidden flex items-center">
                    <div className="absolute inset-0 z-0 hidden lg:block">
                        <img
                            src="https://i.pinimg.com/736x/2f/2e/4e/2f2e4eca52d953565cb95cc49439dc4f.jpg"
                            alt="Industry readiness preparation"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-transparent" />
                    </div>

                    <div className="absolute inset-0 z-0 block lg:hidden">
                        <img
                            src="https://i.pinimg.com/736x/2f/2e/4e/2f2e4eca52d953565cb95cc49439dc4f.jpg"
                            alt="Industry readiness preparation"
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
                                <span className="text-[#28A3B9] font-bold uppercase tracking-[0.3em] text-xs">CAREER GUIDE</span>
                                <span className="text-gray-400 text-sm flex items-center gap-2">
                                    <FaClock /> 12 min read
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-6">
                                How to Become <br />
                                <span className="text-[#28A3B9]">Industry Ready</span> Before Graduation
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                                Complete guide for technical and non-technical students to bridge the gap between college and career with practical skills, portfolios, and professional readiness.
                            </p>
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <FaUserCircle className="text-xl" />
                                    <span>Athenura Insights Team</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt />
                                    <span>March 19, 2026</span>
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
                                    In today's competitive job market, it is not enough to have only a degree; one has to be industry ready to get a good job. The current job market is looking for individuals who are not only qualified with degrees but also possessing skills and confidence to work in professional real world scenarios.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl my-8 border-l-4 border-[#28A3B9]">
                                <p className="text-gray-700 font-medium">
                                    Industry ready means being equipped with the right combination of skills, knowledge and expertise that are required to be successful in today's industry. Whether you are studying computer science, business, engineering, arts or anything else it is extremely important to be industry ready before graduating.
                                </p>
                            </div>

                            <p className="text-gray-700">
                                Let's now discuss the various steps that can be taken by students from both technical and non-technical backgrounds to be industry ready before graduating.
                            </p>
                        </section>

                        {/* Final Note */}
                        
                        {/* Understand Your Career Goals Early */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">1</span>
                            Understand Your Career Goals Early
                        </h2>

                        <p className="mb-6">The first step to becoming industry ready is to understand your career goals as early as possible. Many students complete their graduation without knowing which industry they want to work in.</p>

                        <div className="grid md:grid-cols-2 gap-5 my-8">
                            <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                                <FaLaptop className="text-3xl text-blue-600 mb-3" />
                                <h4 className="font-black mb-2">For Technical Students</h4>
                                <p className="text-sm text-gray-600">Possible options could be software development, data analysis, cyber security, and cloud computing. Explore each path to find your interest.</p>
                            </div>

                            <div className="p-5 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                                <FaBriefcase className="text-3xl text-green-600 mb-3" />
                                <h4 className="font-black mb-2">For Non-Technical Students</h4>
                                <p className="text-sm text-gray-600">Possible options could be marketing, finance, human resources, content creation, and business management. Research each field thoroughly.</p>
                            </div>
                        </div>

                        {/* Research Your Career Options */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">2</span>
                            Research Your Career Options
                        </h2>

                        <div className="bg-gray-50 p-6 rounded-2xl my-6">
                            <p className="text-gray-700">
                                Once you have a list of possible options, you should look into the job descriptions and skills required for your chosen options. This will give you an idea of what is expected of you by potential employers and prepare you for your chosen career paths.
                            </p>
                        </div>

                        {/* Skill Development */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">3</span>
                            Skill Development
                        </h2>

                        <p className="mb-6">One of the most important things that employers look for in a potential employee is skills. While knowledge is very important, skills are far more critical in real world scenarios.</p>

                        <div className="space-y-8 my-8">
                            <div className="bg-blue-50 p-6 rounded-2xl">
                                <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                                    <FaCode className="text-blue-600" />
                                    For Technical Students
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Programming skills in Python, Java, JavaScript",
                                        "Data analysis and visualization",
                                        "Web development",
                                        "Cloud computing",
                                        "Artificial intelligence and machine learning"
                                    ].map((skill, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm text-gray-600 italic">Working on platforms such as coding practice websites, creating projects and participating in hackathons can help students enhance their technical skills.</p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-2xl">
                                <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                                    <FaPenFancy className="text-green-600" />
                                    For Non-Technical Students
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Communication and presentation skills",
                                        "Digital marketing and social media management",
                                        "Business analytics",
                                        "Content writing and copywriting",
                                        "Financial analysis"
                                    ].map((skill, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm text-gray-600 italic">Working on these skills can make a huge difference for non technical students.</p>
                            </div>
                        </div>

                        {/* Final Note */}

                        {/* Building a Strong Portfolio */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">4</span>
                            Building a Strong Portfolio
                        </h2>

                        <p className="mb-6">A portfolio is a collection of your work that shows your skills and talents. This is something that can make you stand out in job applications since you are showing potential employers exactly what you are capable of.</p>

                        <div className="grid md:grid-cols-2 gap-5 my-8">
                            <div className="p-5 bg-white border border-gray-200 rounded-xl">
                                <h4 className="font-black mb-3 flex items-center gap-2">
                                    <FaServer className="text-[#28A3B9]" />
                                    Technical Portfolio Projects
                                </h4>
                                <ul className="space-y-2">
                                    {[
                                        "Websites and applications created",
                                        "Software projects and coding assignments",
                                        "Data analysis reports"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <FaCheckCircle className="text-[#28A3B9] mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-5 bg-white border border-gray-200 rounded-xl">
                                <h4 className="font-black mb-3 flex items-center gap-2">
                                    <FaPalette className="text-[#28A3B9]" />
                                    Non-Technical Portfolio Projects
                                </h4>
                                <ul className="space-y-2">
                                    {[
                                        "Marketing campaigns",
                                        "Content writing samples",
                                        "Social media plans",
                                        "Business case studies"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <FaCheckCircle className="text-[#28A3B9] mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Improve Communication and Soft Skills */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">5</span>
                            Improve Your Communication and Soft Skills
                        </h2>

                        <p className="mb-6">Technical skills are not all that are needed in a potential employee. Soft skills are what make a person successful in working with others in a variety of working situations.</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                            {[
                                { icon: FaComments, label: "Communication", color: "blue" },
                                { icon: FaUsers, label: "Teamwork", color: "green" },
                                { icon: FaBrain, label: "Problem Solving", color: "purple" },
                                { icon: FaUserTie, label: "Leadership", color: "orange" },
                                { icon: FaClockRegular, label: "Time Management", color: "red" }
                            ].map((skill, i) => {
                                const colors = {
                                    blue: "bg-blue-50 text-blue-600 border-blue-100",
                                    green: "bg-green-50 text-green-600 border-green-100",
                                    purple: "bg-purple-50 text-purple-600 border-purple-100",
                                    orange: "bg-orange-50 text-orange-600 border-orange-100",
                                    red: "bg-red-50 text-red-600 border-red-100"
                                };
                                return (
                                    <div key={i} className={`p-4 rounded-xl border ${colors[skill.color]} text-center`}>
                                        <skill.icon className="text-2xl mx-auto mb-2" />
                                        <p className="font-medium text-sm">{skill.label}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Stay Updated With Industry Trends */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">6</span>
                            Stay Updated With Industry Trends
                        </h2>

                        <div className="bg-purple-50 p-6 rounded-2xl my-6">
                            <p className="text-gray-700 mb-4">
                                Industries are constantly changing due to technological advancements and changing market requirements. Students who are updated with the latest trends are more aware of which skills are in demand.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Read industry blogs", "Attend webinars", "Watch videos", "Follow experts", "Use LinkedIn"].map((tip, i) => (
                                    <span key={i} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-purple-600 border border-purple-200">
                                        {tip}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Final Note */}

                        {/* Build Professional Network */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">7</span>
                            Build a Professional Network
                        </h2>

                        <div className="space-y-4 my-6">
                            {[
                                "Connect with professionals and seniors in your field",
                                "Attend seminars, workshops and webinars",
                                "Take part in industry events and conferences",
                                "Keep in touch with your college seniors"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                    <FaNetworkWired className="text-[#28A3B9] mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Personal Branding */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">8</span>
                            Work on Personal Branding
                        </h2>

                        <div className="bg-indigo-50 p-6 rounded-2xl my-6">
                            <p className="text-gray-700">
                                Students must build their personal profile showcasing their skills, accomplishments and experiences. Keeping these profiles up to date can help them create a favourable impression. Sharing content, writing blogs about their learning experiences and sharing their new projects can help them build their personal brand.
                            </p>
                        </div>

                        {/* Certifications */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">9</span>
                            Participate in Workshops and Certifications
                        </h2>

                        <div className="grid md:grid-cols-2 gap-5 my-8">
                            <div className="p-5 border border-gray-200 rounded-xl">
                                <FaCertificate className="text-2xl text-[#28A3B9] mb-3" />
                                <h4 className="font-black mb-2">For Technical Students</h4>
                                <p className="text-sm text-gray-600">Cloud computing, programming certifications, data analytics</p>
                            </div>
                            <div className="p-5 border border-gray-200 rounded-xl">
                                <FaAward className="text-2xl text-[#28A3B9] mb-3" />
                                <h4 className="font-black mb-2">For Non-Technical Students</h4>
                                <p className="text-sm text-gray-600">Digital marketing, project management, business communication</p>
                            </div>
                        </div>

                        {/* Interview Preparation */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">10</span>
                            Preparation for Job Interviews
                        </h2>

                        <div className="bg-orange-50 p-6 rounded-2xl my-6">
                            <p className="text-gray-700">
                                Students should start practicing answering common interview questions, improve their communication skills, and learn to articulate their projects and accomplishments. Mock interviews, career counseling and interviews with friends can help improve their performance.
                            </p>
                        </div>

                        {/* Growth Mindset */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">11</span>
                            Having a Growth Mindset
                        </h2>

                        <div className="bg-teal-50 p-6 rounded-2xl my-6 border-l-4 border-teal-500">
                            <p className="text-gray-700 italic">
                                A growth mindset is defined as being open to learning and improving your skills. In the professional world, things are constantly changing, and those who are willing to learn and improve are at a definite advantage.
                            </p>
                        </div>

                        {/* Quick Checklist */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">12</span>
                            Industry Readiness Checklist
                        </h2>

                        <div className="bg-gray-900 text-white p-8 rounded-3xl my-8">
                            <div className="space-y-4">
                                {[
                                    "✓ Have you identified your career goals?",
                                    "✓ Have you researched required skills for your target role?",
                                    "✓ Are you actively developing technical/non-technical skills?",
                                    "✓ Do you have a portfolio showcasing your best work?",
                                    "✓ Have you improved your communication and soft skills?",
                                    "✓ Do you stay updated with industry trends?",
                                    "✓ Have you built a professional network?",
                                    "✓ Is your LinkedIn profile optimized?",
                                    "✓ Have you earned relevant certifications?",
                                    "✓ Are you practicing for interviews?"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-[#28A3B9] mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Conclusion */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Conclusion</h2>
                        
                        <div className="relative p-8 bg-gray-50 rounded-3xl overflow-hidden my-10 border border-gray-200">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#28A3B9] opacity-5 rounded-full -mr-20 -mt-20"></div>
                            <div className="relative z-10">
                                <FaQuoteRight className="text-4xl text-[#28A3B9] opacity-50 mb-4" />
                                <p className="text-lg leading-relaxed text-gray-700">
                                    It is essential for students to be industry ready before graduation. This requires planning and hard work. By acquiring practical knowledge and skills, gaining internship experience and improving communication skills, students can definitely help themselves get a better job in the future.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-700 mt-4">
                                    These steps can be followed by not only technical students but also non-technical students. The only thing required is to start working on it as early as possible and focus more on acquiring skills in areas where skills are most in demand.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-700 font-medium mt-4">
                                    It is not the end of life for students when they graduate it is actually the beginning of another life. Therefore it is essential for students to be prepared before graduation and try to adapt better to life after graduation.
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

export default IndustryReadyArticle;