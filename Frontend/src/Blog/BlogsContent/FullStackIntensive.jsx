import React from 'react';
import { motion } from 'framer-motion';
import {
    FaLinkedin,
    FaTwitter,
    FaLink,
    FaWhatsapp,
    FaArrowRight,
    FaCalendarAlt,
    FaUserCircle,
    FaCode,
    FaServer,
    FaDatabase,
    FaCloud,
    FaUsers,
    FaRocket,
    FaCheckCircle,
    FaQuoteRight,
    FaLaptopCode,
    FaMobileAlt,
    FaGitAlt,
    FaDocker,
    FaNodeJs,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGithub,
    FaExternalLinkAlt,
    FaClock,
    FaMapMarkerAlt,
    FaGraduationCap,
    FaBriefcase,
    FaStar,
    FaChartLine,
    FaLayerGroup,
    FaShieldAlt,
    FaCogs,
    FaComments,
    FaVideo,
    FaFileAlt,
    FaAward
} from 'react-icons/fa';
import handbook from "../../../public/handbook.pdf"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BlogAd from '../BlogAd';

const FullStackIntensive = () => {
    const siteUrl = 'https://athenura.in';
    const programUrl = typeof window !== 'undefined' ? window.location.href : `${siteUrl}/internship/full-stack-intensive`;
    const canonicalUrl = `${siteUrl}/internship/full-stack-intensive`;

    const programTitle = "Full-Stack Development Intensive at Athenura | Applications Open 2026";
    const programDescription = "Join Athenura's Full-Stack Development Intensive — a hands-on, project-first program. Learn MERN stack, build real applications, and get mentorship from industry experts. Graduate with portfolio projects and interview readiness.";

    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/fullstack1.png";
    const publishedDate = "2026-03-01";
    const modifiedDate = "2026-03-01";

    const shareOnLinkedIn = () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(programUrl)}`, '_blank');
    const shareOnTwitter = () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(programTitle)}&url=${encodeURIComponent(programUrl)}&via=athenura_in`, '_blank');
    const shareOnWhatsApp = () => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(programTitle + " " + programUrl)}`, '_blank');
    const copyToClipboard = () => {
        navigator.clipboard.writeText(programUrl);
        alert("Link copied to clipboard!");
    };

    // EducationalOccupationalProgram Schema for Full-Stack Development
    const programStructuredData = {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        "name": "Full-Stack Development Intensive",
        "description": programDescription,
        "educationalProgramMode": "remote",
        "timeToComplete": "P3M",
        "occupationalCredentialAwarded": [
            "Full-Stack Development Certificate",
            "Letter of Recommendation",
            "Excellence Certificate",
            "Portfolio Projects"
        ],
        "programPrerequisites": "Basic HTML, CSS, and JavaScript knowledge",
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": "0",
            "priceCurrency": "USD"
        },
        "provider": {
            "@type": "Organization",
            "name": "Athenura",
            "sameAs": siteUrl,
            "logo": "https://athenura.in/AthenuraCircle.png",
            "email": "official@athenura.in",
            "foundingDate": "2026"
        },
        "timeOfPublication": publishedDate,
        "dateModified": modifiedDate,
        "mainEntityOfPage": canonicalUrl,
        "image": imageUrl,
        "keywords": "full stack development internship, MERN stack internship, web development intensive, full stack bootcamp, react node internship, javascript full stack, remote coding bootcamp, developer mentorship",
        "educationalCredentialAwarded": [
            "Internship Certificate",
            "Letter of Recommendation",
            "Excellence Certificate",
            "Portfolio Projects",
            "GitHub Repository"
        ],
        "hasCourse": [
            {
                "@type": "Course",
                "name": "Front-End Development",
                "description": "HTML5, CSS3, JavaScript ES6+, React with hooks, state management, and responsive UI design",
                "provider": { "@type": "Organization", "name": "Athenura" }
            },
            {
                "@type": "Course",
                "name": "Back-End Development",
                "description": "Node.js, Express.js, RESTful APIs, authentication (JWT), and server-side architecture",
                "provider": { "@type": "Organization", "name": "Athenura" }
            },
            {
                "@type": "Course",
                "name": "Database Management",
                "description": "SQL and NoSQL databases, data modeling, MongoDB, and database integration",
                "provider": { "@type": "Organization", "name": "Athenura" }
            },
            {
                "@type": "Course",
                "name": "DevOps & Deployment",
                "description": "Git/GitHub, deployment strategies, cloud platforms, and production-ready practices",
                "provider": { "@type": "Organization", "name": "Athenura" }
            },
            {
                "@type": "Course",
                "name": "Career Preparation",
                "description": "Technical communication, code reviews, mock interviews, and portfolio optimization",
                "provider": { "@type": "Organization", "name": "Athenura" }
            }
        ],
        "jobOutcomeInfo": [
            "Full-Stack Developer",
            "Front-End Developer",
            "Back-End Developer",
            "JavaScript Developer",
            "MERN Stack Developer",
            "Software Engineer Intern",
            "Junior Web Developer"
        ],
        "occupationalCategory": [
            "15-1252.00 - Software Developers",
            "15-1254.00 - Web Developers",
            "15-1255.00 - Web and Digital Interface Designers"
        ]
    };

    // Breadcrumb Schema
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
                "name": "Internships",
                "item": `${siteUrl}/internships`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Full-Stack Development Intensive",
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
        "email": "official@athenura.in",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "official@athenura.in",
            "availableLanguage": ["English", "Hindi"]
        }
    };

    // FAQ Schema based on content
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the duration of the Full-Stack Development Intensive?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The program runs for 12 weeks with a time commitment of 15-20 hours per week."
                }
            },
            {
                "@type": "Question",
                "name": "What are the prerequisites for this program?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You need basic HTML, CSS, and JavaScript knowledge. No prior degree is required — just curiosity, consistency, and willingness to build."
                }
            },
            {
                "@type": "Question",
                "name": "What technologies will I learn?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You'll learn HTML5, CSS3, JavaScript ES6+, React, Node.js, Express, MongoDB, Git/GitHub, and deployment strategies."
                }
            },
            {
                "@type": "Question",
                "name": "What projects will I build?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You'll build multiple projects including a movie search app, task manager with authentication, and a deployed e-commerce demo as your capstone project."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide placement support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer mock interviews, resume and portfolio polishing, code reviews, and job application guidance to prepare you for developer roles."
                }
            },
            {
                "@type": "Question",
                "name": "What is the batch size?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Batch sizes are kept intentionally small (15-20 students) to preserve quality mentorship and meaningful feedback."
                }
            },
            {
                "@type": "Question",
                "name": "What certification will I receive?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You'll receive an Internship Certificate, performance-based Letter of Recommendation, Excellence Certificate for top performers, and portfolio projects for your GitHub."
                }
            },
            {
                "@type": "Question",
                "name": "Is this program remote?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the program is 100% remote with live mentorship sessions and flexible self-paced work."
                }
            }
        ]
    };

    // Course Schema for better education SEO
    const courseData = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Full-Stack Development Intensive",
        "description": programDescription,
        "provider": {
            "@type": "Organization",
            "name": "Athenura",
            "sameAs": siteUrl,
            "logo": "https://athenura.in/AthenuraCircle.png"
        },
        "coursePrerequisites": "Basic HTML, CSS, and JavaScript",
        "educationalCredentialAwarded": "Full-Stack Development Certificate",
        "timeRequired": "P3M",
        "offers": {
            "@type": "Offer",
            "category": "Free",
            "price": "0",
            "priceCurrency": "USD"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "online",
            "courseWorkload": "PT15H",
            "startDate": "2026-03-15",
            "endDate": "2026-06-15",
            "location": {
                "@type": "Place",
                "name": "Remote",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Remote",
                    "addressCountry": "Global"
                }
            }
        },
        "teaches": [
            "Front-End Development with React",
            "Back-End Development with Node.js",
            "Database Design with MongoDB",
            "RESTful API Development",
            "Version Control with Git",
            "Deployment Strategies"
        ]
    };

    return (

        <>
            <Helmet>
                {/* ---------- BASIC META TAGS ---------- */}
                <html lang="en" />
                <title>{programTitle}</title>
                <meta name="description" content={programDescription} />
                <meta name="keywords" content="full stack development internship, MERN stack internship, web development intensive, full stack bootcamp, react node internship, javascript full stack, remote coding bootcamp, developer mentorship, athenura full stack, learn full stack development, full stack program, coding internship" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="index, follow" />                <meta name="googlebot" content="index, follow" />
                <meta name="google-site-verification" content="your-verification-code" />

                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />

                {/* ---------- OPEN GRAPH / FACEBOOK ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Full-Stack Development Intensive at Athenura | Build Real Applications" />
                <meta property="og:description" content={programDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Athenura Full-Stack Development Intensive Program" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />

                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Full-Stack Development Intensive - Applications Open" />
                <meta name="twitter:description" content={programDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Full-Stack Development Intensive at Athenura" />

                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Full-Stack" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />

                {/* ---------- STRUCTURED DATA ---------- */}
                <script type="application/ld+json">
                    {JSON.stringify(programStructuredData)}
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
                    {JSON.stringify(courseData)}
                </script>

                {/* ---------- PERFORMANCE OPTIMIZATION ---------- */}
                <link rel="preconnect" href="https://ik.imagekit.io" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://ik.imagekit.io" />
                <link rel="preconnect" href="https://images.unsplash.com" />

                {/* ---------- HREFLANG ---------- */}
                <link rel="alternate" href={canonicalUrl} hreflang="en" />
                <link rel="alternate" href={canonicalUrl} hreflang="x-default" />

                {/* ---------- FAVICON ---------- */}
                <link rel="icon" type="image/png" href="/AthenuraCircle.png" />
                <link rel="apple-touch-icon" href="/AthenuraCircle.png" />
            </Helmet>

            <div className="bg-white min-h-screen font-sans text-black">

                {/* HERO SECTION */}
                <section className="relative h-[95vh] w-full overflow-hidden flex items-center">
                    <div className="absolute inset-0 z-0 hidden lg:block">
                        <img
                            src="https://ik.imagekit.io/vtfcbjo5c/fullstack1.png"
                            alt="Full-Stack Development"
                            className="w-full h-full object-fit"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/80 to-transparent" />
                    </div>
                    <div className="absolute inset-0 z-0 block lg:hidden">
                        <img
                            src="https://ik.imagekit.io/vtfcbjo5c/fullstackmobile1.png"
                            alt="Full-Stack Development"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/80 to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <span className="h-[2px] w-12 bg-[#28A3B9]"></span>
                                <span className="text-[#28A3B9] font-bold uppercase tracking-[0.3em] text-xs">APPLICATIONS OPEN</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] uppercase tracking-tighter mb-8">
                                Full-Stack <br />
                                <span className="text-[#28A3B9]">Development</span> Intensive
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                                Transition from learner to full-stack contributor by building real-world applications under expert mentorship.
                            </p>


                            <div className="flex flex-wrap gap-4">
                                <button className="bg-[#28A3B9] hover:bg-white hover:text-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 transform hover:scale-105">
                                    Apply Now
                                </button>
                                <a href={handbook} download >
                                    <button className="border-2 border-white/30 hover:border-[#28A3B9] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300">
                                        Download Curriculum
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* STICKY SOCIAL SHARE */}
                    <aside className="lg:col-span-1 hidden lg:block">
                        <div className="sticky top-32 flex flex-col gap-6 items-center">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 [writing-mode:vertical-lr] mb-4 text-center">Share</p>
                            <button onClick={shareOnLinkedIn} className="p-4 rounded-full border border-gray-100 text-gray-400 hover:bg-[#28A3B9] hover:text-white transition-all shadow-sm hover:shadow-lg"><FaLinkedin /></button>
                            <button onClick={shareOnWhatsApp} className="p-4 rounded-full border border-gray-100 text-gray-400 hover:bg-[#25D366] hover:text-white transition-all shadow-sm hover:shadow-lg"><FaWhatsapp /></button>
                            <button onClick={shareOnTwitter} className="p-4 rounded-full border border-gray-100 text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-all shadow-sm hover:shadow-lg"><FaTwitter /></button>
                            <button onClick={copyToClipboard} className="p-4 rounded-full border border-gray-100 text-gray-400 hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-lg"><FaLink /></button>
                        </div>
                    </aside>

                    {/* MAIN CONTENT */}
                    <main className="lg:col-span-8 prose prose-lg max-w-none text-gray-800 leading-relaxed">

                        {/* Intro */}
                        <section className="mb-12">
                            <p className="text-2xl font-light text-gray-500 italic border-l-4 border-[#28A3B9] pl-8 py-4">
                                Great news: applications are now open for the Full-Stack Development Intensive at Athenura. If you're ready to move beyond tutorials and build real, production-grade web applications while getting mentorship from industry practitioners, this program is built to turn ambition into deployable skills and job-ready confidence.
                            </p>
                        </section>

                        <BlogAd />

                        {/* Short Version Card */}
                        <div className="bg-black text-white p-10 rounded-3xl my-12">
                            <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                                <FaRocket className="text-[#28A3B9]" /> What this Intensive is short version
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                This is a hands-on, project-first learning experience focused on modern web development. Over the course of the intensive you'll learn front-end and back-end fundamentals, build full applications from scratch, work with real codebases, and get interview preparation and portfolio support. The emphasis is practical: the goal is that by the end you have one or more polished, deployable projects and the interview readiness to back them up.
                            </p>
                        </div>

                        {/* Who This Is For */}
                        <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">01</span>
                            Who This Is For
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6 my-8">
                            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
                                <FaLaptopCode className="text-4xl text-blue-500 mb-4" />
                                <h4 className="font-black text-lg mb-2">Beginners</h4>
                                <p className="text-sm text-gray-600">With basic HTML, CSS, and JavaScript knowledge ready to become full-stack engineers</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
                                <FaServer className="text-4xl text-green-500 mb-4" />
                                <h4 className="font-black text-lg mb-2">Front-end Devs</h4>
                                <p className="text-sm text-gray-600">Wanting to learn back-end systems, databases, and deployment</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
                                <FaBriefcase className="text-4xl text-purple-500 mb-4" />
                                <h4 className="font-black text-lg mb-2">Career Switchers</h4>
                                <p className="text-sm text-gray-600">Students and early professionals aiming for internships or junior developer roles</p>
                            </div>
                        </div>

                        <p className="text-lg font-medium text-[#28A3B9] italic mb-12">
                            No prior degree is required curiosity, consistency, and a willingness to build are the most important prerequisites.
                        </p>

                        {/* Curriculum Highlights */}
                        <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">02</span>
                            Curriculum Highlights
                        </h2>

                        <p className="mb-8">We designed the curriculum to mirror what companies expect from entry-level full-stack hires. Topics include:</p>

                        {/* Front-end Section */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                    <FaReact className="text-2xl text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-black">Front-end</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { icon: FaHtml5, text: "Semantic HTML & modern CSS", color: "text-orange-500" },
                                    { icon: FaJs, text: "JavaScript fundamentals & ES6+", color: "text-yellow-500" },
                                    { icon: FaReact, text: "React (hooks, state, routing)", color: "text-blue-500" },
                                    { icon: FaMobileAlt, text: "Accessible & performant UI", color: "text-green-500" }
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                            <Icon className={`${item.color} text-xl mt-1`} />
                                            <span className="text-sm font-medium">{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Back-end Section */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                                    <FaNodeJs className="text-2xl text-green-600" />
                                </div>
                                <h3 className="text-2xl font-black">Back-end</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { icon: FaNodeJs, text: "Node.js & Express API design", color: "text-green-600" },
                                    { icon: FaShieldAlt, text: "Authentication (JWT, sessions)", color: "text-purple-500" },
                                    { icon: FaDatabase, text: "SQL & NoSQL databases", color: "text-blue-600" },
                                    { icon: FaServer, text: "Server-side rendering concepts", color: "text-gray-600" }
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                            <Icon className={`${item.color} text-xl mt-1`} />
                                            <span className="text-sm font-medium">{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>


                        {/* Soft Skills Section */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
                                    <FaUsers className="text-2xl text-yellow-600" />
                                </div>
                                <h3 className="text-2xl font-black">Soft Skills & Career Prep</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { icon: FaComments, text: "Technical communication & code reviews", color: "text-blue-500" },
                                    { icon: FaFileAlt, text: "Resume & portfolio polishing", color: "text-green-500" },
                                    { icon: FaVideo, text: "Mock interviews & whiteboard practice", color: "text-purple-500" },
                                    { icon: FaExternalLinkAlt, text: "Job application guidance", color: "text-red-500" }
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                            <Icon className={`${item.color} text-xl mt-1`} />
                                            <span className="text-sm font-medium">{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Learning Format */}
                        <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">03</span>
                            Learning Format
                        </h2>

                        <p className="mb-6 font-bold text-lg">This is not a lecture marathon. Expect:</p>

                        <div className="space-y-6 my-10">
                            {[
                                { icon: FaRocket, title: "Project-first learning", desc: "Each module anchored to a concrete project (movie search app, task manager with auth, deployed e-commerce demo)" },
                                { icon: FaUsers, title: "Mentor-guided sprints", desc: "Frequent code reviews and mentorship sessions to keep you unblocked" },
                                { icon: FaCode, title: "Pair programming & peer reviews", desc: "Collaborate like you would in an actual dev team" },
                                { icon: FaStar, title: "Capstone project", desc: "A polished, deployable full-stack application for your portfolio" }
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="flex gap-6 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all">
                                        <div className="w-12 h-12 bg-[#28A3B9] bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Icon className="text-2xl text-[#28A3B9]" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-lg mb-2">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-sm text-gray-500 italic mb-12">
                            Batch sizes are kept intentionally small to preserve quality mentorship and meaningful feedback. The program cadence balances self-paced work with scheduled mentor touchpoints.
                        </p>

                        <BlogAd />

                        {/* Projects You'll Graduate With */}
                        <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">04</span>
                            Projects You'll Graduate With
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 my-10">
                            {[
                                { title: "Full-Stack App", desc: "Frontend + backend + database + deployed", icon: FaLaptopCode },
                                { title: "Demo Video", desc: "Walkthrough explaining technical choices", icon: FaVideo },
                                { title: "Clean GitHub", desc: "Professional README with deployment link", icon: FaGithub },
                                { title: "Resume Entry", desc: "Tailored talking points for interviews", icon: FaFileAlt }
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="p-6 border border-gray-200 rounded-2xl hover:border-[#28A3B9] hover:shadow-xl transition-all group">
                                        <Icon className="text-3xl text-[#28A3B9] mb-4 group-hover:scale-110 transition-transform" />
                                        <h4 className="font-black mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-lg font-medium text-gray-700 mb-12">
                            These deliverables are what hiring managers actually look for real work you can discuss during interviews.
                        </p>

                        {/* Mentorship Section */}
                        <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">05</span>
                            Mentorship & Industry Exposure
                        </h2>

                        <div className="bg-gradient-to-r from-[#28A3B9] to-black text-white p-10 rounded-3xl my-10">
                            <h3 className="text-2xl font-black mb-6">You'll receive:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Regular sessions with mentors who have shipped products and hired developers",
                                    "Live code reviews focused on maintainability, testing, and scaling",
                                    "Mock interviews that simulate real company processes with actionable feedback",
                                    "Help with employer-facing materials (project showcase, GitHub hygiene, LinkedIn optimization)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-white text-opacity-70 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Why Choose Athenura */}
                        <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Why Choose This Program at Athenura</h2>

                        <div className="relative p-8 bg-gray-50 rounded-3xl overflow-hidden mb-12">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#28A3B9] opacity-5 rounded-full -mr-20 -mt-20"></div>
                            <p className="text-lg leading-relaxed relative z-10">
                                Athenura builds programs around real projects and mentorship because that's how early developers learn fastest. Rather than passive lectures, this intensive focuses on doing: shipping code, fixing bugs, reviewing pull requests, and learning the engineering habits that scale. If you want a training program that treats you like a developer from day one (not a student), this is designed for that.
                            </p>
                        </div>

                        {/* Graduate Profile */}
                        <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Who Our Graduates Are</h2>

                        <div className="grid md:grid-cols-3 gap-6 my-10">
                            {[
                                { icon: FaGraduationCap, text: "College students looking for internships and portfolio projects" },
                                { icon: FaLaptopCode, text: "Self-taught coders seeking structure and recruiter-ready artifacts" },
                                { icon: FaChartLine, text: "Early career developers wanting to move into full-stack roles" }
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="p-6 text-center bg-white border border-gray-100 rounded-2xl shadow-sm">
                                        <Icon className="text-4xl text-[#28A3B9] mx-auto mb-4" />
                                        <p className="text-sm">{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-center font-medium mb-12">
                            What they share is the desire to build iteratively, take feedback, and ship real projects.
                        </p>

                        {/* Application Process */}
                        <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">How to Apply</h2>

                        <div className="space-y-4 mb-12">
                            {[
                                "Fill out the application form (takes 10-15 minutes)",
                                "Complete a short technical assessment (basic coding concepts)",
                                "Interview with our program lead (30-minute conversation)",
                                "Receive decision within 5-7 business days"
                            ].map((step, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                    <span className="w-8 h-8 bg-[#28A3B9] text-white rounded-full flex items-center justify-center font-black">{i + 1}</span>
                                    <span>{step}</span>
                                </div>
                            ))}
                        </div>

                        <BlogAd />

                        {/* Final CTA */}
                        <div className="bg-black p-16 rounded-[2rem] text-center text-white mt-16 mb-8 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-10 left-10 w-40 h-40 border-2 border-[#28A3B9] rounded-full"></div>
                                <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter">Your Next Move</h3>
                                <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                                    If you're serious about becoming a full-stack developer, choose a program that emphasizes doing over watching. Our Full-Stack Development Intensive is about turning learners into builders with the artifacts employers hire for: clean repos, deployed projects, and polished interview skills.
                                </p>
                                <p className="text-xl font-bold text-[#28A3B9] mb-8">
                                    Apply today and start building the portfolio and confidence you need to launch your developer career.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link to="/apply-internship">
                                        <button className="bg-[#28A3B9] hover:bg-white hover:text-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 transform hover:scale-105">
                                            Apply Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* RIGHT SIDEBAR - WITHOUT RELATED PROGRAMS */}
                    <aside className="lg:col-span-3">
                        <div className="sticky top-32 space-y-6">
                            {/* Quick Info Card */}
                            <div className="bg-black text-white p-8 rounded-3xl">
                                <h3 className="text-xl font-black uppercase mb-6">Program at a Glance</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <FaClock className="text-[#28A3B9]" />
                                        <div>
                                            <p className="text-xs text-gray-400">Duration</p>
                                            <p className="font-bold">12 Weeks</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaMapMarkerAlt className="text-[#28A3B9]" />
                                        <div>
                                            <p className="text-xs text-gray-400">Format</p>
                                            <p className="font-bold">Remote Live</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaUsers className="text-[#28A3B9]" />
                                        <div>
                                            <p className="text-xs text-gray-400">Batch Size</p>
                                            <p className="font-bold">15-20 Students</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaClock className="text-[#28A3B9]" />
                                        <div>
                                            <p className="text-xs text-gray-400">Time Commitment</p>
                                            <p className="font-bold">15-20 hrs/week</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Card */}
                            <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-lg">
                                <div className="flex items-center gap-2 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar key={star} className="text-yellow-400 text-sm" />
                                    ))}
                                </div>
                                <p className="text-sm italic text-gray-700 mb-4">
                                    "The project-first approach and mentorship transformed how I code. I went from following tutorials to building production-ready apps. Landed my first dev role within 2 months of graduating."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <p className="font-black text-sm">Priya K.</p>
                                        <p className="text-xs text-gray-500">Full-Stack Developer, Class of '25</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Mobile Social Share */}
                <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-50">
                    <div className="flex justify-center gap-4">
                        <button onClick={shareOnLinkedIn} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-[#28A3B9] hover:text-white transition-colors"><FaLinkedin /></button>
                        <button onClick={shareOnWhatsApp} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-[#25D366] hover:text-white transition-colors"><FaWhatsapp /></button>
                        <button onClick={shareOnTwitter} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"><FaTwitter /></button>
                        <button onClick={copyToClipboard} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-black hover:text-white transition-colors"><FaLink /></button>
                    </div>
                </div>

                <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
            </div>
        </>
    );
};

export default FullStackIntensive;