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
    FaMicroscope,
    FaServer,
    FaDatabase,
    FaShoppingCart,
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
    FaAward,
    FaPaintBrush,
    FaMobile,
    FaDesktop,
    FaFigma,
    FaSketch,
    FaPenNib,
    FaPalette,
    FaVectorSquare,
    FaFont,
    FaUniversalAccess,
    FaRegObjectGroup,
    FaRegClone,
    FaSitemap,
    FaRegLightbulb,
    FaRegChartBar,
    FaRegUser
} from 'react-icons/fa';
import handbook from "../../../public/handbook.pdf"
import { Link } from "react-router-dom"

const UIUXDesignInternship = () => {

    const blogUrl = typeof window !== 'undefined' ? window.location.href : '';
    const blogTitle = "Applications Open UI/UX Design Professional Internship at Athenura";

    const shareOnLinkedIn = () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`, '_blank');
    const shareOnTwitter = () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blogTitle)}&url=${encodeURIComponent(blogUrl)}`, '_blank');
    const shareOnWhatsApp = () => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(blogTitle + " " + blogUrl)}`, '_blank');
    const copyToClipboard = () => {
        navigator.clipboard.writeText(blogUrl);
        alert("Link copied to clipboard!");
    };

    return (
        <div className="bg-white min-h-screen font-sans text-black">

            {/* HERO SECTION */}
            <section className="relative h-[95vh] w-full overflow-hidden flex items-center">
                <div className="absolute inset-0 z-0 hidden lg:block">
                    <img
                        src="https://ik.imagekit.io/vtfcbjo5c/uiux.png"
                        alt="UI/UX Design Professional Internship"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/80 to-transparent" />
                </div>
                <div className="absolute inset-0 z-0 block lg:hidden">
                    <img
                        src="https://ik.imagekit.io/vtfcbjo5c/uiuxmobile.png"
                        alt="UI/UX Design Professional Internship"
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
                            UI/UX Design <br />
                            <span className="text-[#28A3B9]">Professional</span> Internship
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                            Move from concept-driven exercises to product-led design work. Build a portfolio of real deliverables and develop the operational design mindset teams expect.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/apply-internship">
                            <button className="bg-[#28A3B9] hover:bg-white hover:text-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 transform hover:scale-105">
                                Apply Now
                            </button>
                            </Link>
                            <a href={handbook} download>
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
                            In a digital world where the product that delights users wins, designers who can combine user empathy with practical product thinking are in high demand. The UI/UX Design Professional Internship at Athenura is a focused, practice-first program that moves designers from concept-driven exercises to product-led design work — equipping you with a portfolio of real deliverables, an operational design mindset, and the communication skills teams expect.
                        </p>
                    </section>

                    {/* Why This Internship Matters */}
                    <div className="bg-black text-white p-10 rounded-3xl my-12">
                        <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                            <FaRocket className="text-[#28A3B9]" /> Why this internship matters
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Good design is no longer about pretty screens — it's about measurable user outcomes, clarity of decision-making, and collaboration within multidisciplinary teams. Many design learners can produce mockups, but fewer can run user research, convert insights into product requirements, and deliver design systems that scale. This internship emphasizes those production-ready competencies: research, prototyping, usability testing, handoff, and iteration in a product environment.
                        </p>
                    </div>

                    {/* Who Should Apply */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">01</span>
                        Who Should Apply
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 my-8">
                        <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
                            <FaGraduationCap className="text-4xl text-purple-500 mb-4" />
                            <h4 className="font-black text-lg mb-2">UI/UX Students & Graduates</h4>
                            <p className="text-sm text-gray-600">Seeking real project experience to bridge the gap between education and industry</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100">
                            <FaPaintBrush className="text-4xl text-pink-500 mb-4" />
                            <h4 className="font-black text-lg mb-2">Graphic Designers</h4>
                            <p className="text-sm text-gray-600">Visual creatives wanting to move into product design and digital experiences</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
                            <FaLaptopCode className="text-4xl text-blue-500 mb-4" />
                            <h4 className="font-black text-lg mb-2">Front-end Developers</h4>
                            <p className="text-sm text-gray-600">Looking to strengthen product and UX sensibilities</p>
                        </div>
                    </div>

                    <p className="text-lg font-medium text-[#28A3B9] italic mb-12">
                        You don't need a decade of experience — you need curiosity, an eye for detail, and a willingness to test assumptions with users.
                    </p>

                    {/* What You'll Learn */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">02</span>
                        What You'll Learn
                    </h2>

                    <p className="mb-8">The curriculum balances design craft with product thinking and execution:</p>

                    {/* Foundations & Research Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <FaMicroscope className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-black">Foundations & Research</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: FaRegUser, text: "User research methods: interviews, contextual inquiry, and remote studies", color: "text-blue-500" },
                                { icon: FaSitemap, text: "Persona synthesis, user journeys, and task analysis", color: "text-green-500" }
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

                    {/* Interaction & Visual Design Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center">
                                <FaPalette className="text-2xl text-pink-600" />
                            </div>
                            <h3 className="text-2xl font-black">Interaction & Visual Design</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: FaFigma, text: "Wireframing and prototyping workflows (Figma/Sketch)", color: "text-purple-500" },
                                { icon: FaUniversalAccess, text: "Accessibility (WCAG basics) and responsive design", color: "text-green-500" },
                                { icon: FaFont, text: "Visual systems: typography, color, spacing, and component libraries", color: "text-orange-500" },
                                { icon: FaRegObjectGroup, text: "Interaction patterns and information architecture", color: "text-indigo-500" }
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

                    {/* Product & Collaboration Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                                <FaUsers className="text-2xl text-green-600" />
                            </div>
                            <h3 className="text-2xl font-black">Product & Collaboration</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: FaRegLightbulb, text: "Design thinking applied to product metrics", color: "text-yellow-500" },
                                { icon: FaCode, text: "Design handoff best practices for engineering", color: "text-blue-500" },
                                { icon: FaRegChartBar, text: "Usability testing: test plans, recruiting, moderating", color: "text-green-500" },
                                { icon: FaRegClone, text: "Iterating based on user feedback and data", color: "text-purple-500" }
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

                    {/* Tools & Deliverables Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                                <FaVectorSquare className="text-2xl text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-black">Tools & Deliverables</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: FaFigma, text: "Industry tools (Figma, FigJam, InVision)", color: "text-purple-500" },
                                { icon: FaHtml5, text: "Basic HTML/CSS for interactive prototypes", color: "text-orange-500" },
                                { icon: FaFileAlt, text: "Creating polished case studies and developer-ready design files", color: "text-blue-500" },
                                { icon: FaVideo, text: "Short demo videos to explain your thinking", color: "text-red-500" }
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

                    {/* Project-First Format */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">03</span>
                        Project-First Format — What You'll Build
                    </h2>

                    <p className="mb-6">Instead of isolated exercises, you will deliver end-to-end products. Example capstones:</p>

                    <div className="space-y-6 my-10">
                        {[
                            { icon: FaDesktop, title: "Micro-SaaS Dashboard Redesign", desc: "Conduct research with stakeholders, prototype flows for data exploration, and deliver a component-based design system plus usability report." },
                            { icon: FaMobileAlt, title: "Mobile App Onboarding & Retention Flow", desc: "Define key metrics, design progressive onboarding experiments, and test variants with real users." },
                            { icon: FaShoppingCart, title: "E-commerce Checkout Optimization", desc: "Run funnel analysis, prototype a simplified checkout, and measure improvements via usability benchmarks and A/B test suggestions." },
                            { icon: FaLayerGroup, title: "Design System Starter Kit", desc: "Create tokens, components, and documentation that engineering teams can adopt quickly." }
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
                        Each project finishes with a public-facing case study (problem, hypothesis, process, solution, and measurable impact) and a production-ready Figma file or prototype link.
                    </p>

                    {/* Mentorship Section */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">04</span>
                        Mentorship & Feedback Loop
                    </h2>

                    <div className="bg-gradient-to-r from-[#28A3B9] to-black text-white p-10 rounded-3xl my-10">
                        <p className="mb-6">Mentors are experienced designers and product practitioners who provide pragmatic feedback:</p>
                        <ul className="space-y-4">
                            {[
                                "Weekly design reviews focused on decision-making, not just visuals",
                                "Critique sessions that train you to defend design choices with evidence and empathy",
                                "Handoff reviews ensuring designs are implementable, accessible, and testable",
                                "Sprint-style reviews replicate workplace cadence: plan, prototype, test, present, and iterate"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-white text-opacity-70 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Evaluation & Outcomes */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">05</span>
                        Evaluation & Outcomes
                    </h2>

                    <p className="mb-6">Assessment is milestone-based and outcome-focused:</p>

                    <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                        <li>Quality of research insights and clarity of design rationale</li>
                        <li>Implementation readiness: how well designs translate to working products</li>
                        <li>Collaboration and communication in cross-functional reviews</li>
                        <li>Timely delivery and professional repository hygiene</li>
                    </ul>

                    <div className="grid md:grid-cols-2 gap-6 my-10">
                        {[
                            { title: "2-3 High-Quality Case Studies", desc: "Interactive prototypes with clear problem-solution narratives", icon: FaFileAlt },
                            { title: "Design System Starter Kit", desc: "Production-ready components and documentation", icon: FaLayerGroup },
                            { title: "Mock Interview Practice", desc: "Design critique and portfolio walkthroughs", icon: FaComments },
                            { title: "Certificate & Recommendations", desc: "Program certificate and referrals for top performers", icon: FaAward }
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

                    {/* Career & Placement Support */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Career & Placement Support</h2>

                    <p className="mb-6">Athenura supports transition to product roles by:</p>

                    <ul className="list-disc pl-6 mb-12 space-y-2 text-gray-700">
                        <li>Portfolio refinement sessions emphasizing impact, process, and metrics</li>
                        <li>Mock interviews and critique tailored for product design interviews</li>
                        <li>Fast-track considerations for partner companies and curated referrals for exceptional contributors</li>
                    </ul>

                    {/* Commitment & Logistics */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Commitment & Logistics</h2>

                    <div className="grid md:grid-cols-3 gap-6 my-10">
                        {[
                            { icon: FaClock, label: "Duration", value: "3–8 months" },
                            { icon: FaMapMarkerAlt, label: "Mode", value: "Remote — flexible schedules" },
                            { icon: FaFigma, label: "Prerequisite", value: "Basic design tools familiarity" }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="p-6 text-center bg-white border border-gray-100 rounded-2xl shadow-sm">
                                    <Icon className="text-4xl text-[#28A3B9] mx-auto mb-4" />
                                    <p className="text-xs text-gray-500 uppercase">{item.label}</p>
                                    <p className="font-black">{item.value}</p>
                                </div>
                            );
                        })}
                    </div>

                    <p className="text-center font-medium mb-12 italic">
                        This program expects ownership, responsiveness to feedback, and a focus on measurable user outcomes — it's not for those seeking superficial certificates.
                    </p>

                    {/* Final Word */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Final Word</h2>

                    <div className="relative p-8 bg-gray-50 rounded-3xl overflow-hidden mb-12">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#28A3B9] opacity-5 rounded-full -mr-20 -mt-20"></div>
                        <p className="text-lg leading-relaxed relative z-10">
                            Design work that moves products forward requires more than craft: it requires research-backed decisions, repeatable workflows, and the ability to collaborate with product and engineering. The UI/UX Design Professional Internship at Athenura trains designers to do exactly that — producing portfolio-ready work, learning to measure impact, and practicing the communication skills hiring teams reward.
                        </p>
                    </div>

                    {/* Final CTA */}
                    <div className="bg-black p-16 rounded-[2rem] text-center text-white mt-16 mb-8 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 left-10 w-40 h-40 border-2 border-[#28A3B9] rounded-full"></div>
                            <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter">Design Products That Delight</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                                Join the UI/UX Design Professional Internship at Athenura and learn to create user-centered products with measurable impact. With mentorship, real projects, and career support, you'll graduate with the portfolio and skills to launch your product design career.
                            </p>
                            <p className="text-xl font-bold text-[#28A3B9] mb-8">
                                Applications are now open. Secure your spot today.
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

                {/* RIGHT SIDEBAR - PROGRAM INFO */}
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
                                        <p className="font-bold">3–8 Months</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-[#28A3B9]" />
                                    <div>
                                        <p className="text-xs text-gray-400">Format</p>
                                        <p className="font-bold">Remote with Mentorship</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaUsers className="text-[#28A3B9]" />
                                    <div>
                                        <p className="text-xs text-gray-400">Mentorship</p>
                                        <p className="font-bold">Weekly Design Reviews</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaFigma className="text-[#28A3B9]" />
                                    <div>
                                        <p className="text-xs text-gray-400">Prerequisites</p>
                                        <p className="font-bold">Basic Figma/Sketch Knowledge</p>
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
                                "The mentorship and critique sessions transformed how I approach design problems. I went from creating pretty mockups to building research-backed, accessible products. My case studies from this program landed me my first product design role."
                            </p>
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className="font-black text-sm">Ananya S.</p>
                                    <p className="text-xs text-gray-500">Product Designer, Class of '25</p>
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
    );
};

export default UIUXDesignInternship;