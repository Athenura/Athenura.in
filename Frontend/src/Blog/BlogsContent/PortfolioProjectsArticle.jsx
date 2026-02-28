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
    FaRocketchat
} from 'react-icons/fa';

const PortfolioProjectsArticle = () => {
    const blogUrl = typeof window !== 'undefined' ? window.location.href : 'https://athenura.com/insights/portfolio-grade-projects-guide';
    const blogTitle = "The Importance of Portfolio-Grade Projects: Complete Guide 2026";

    const shareOnLinkedIn = () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`, '_blank');
    const shareOnTwitter = () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blogTitle)}&url=${encodeURIComponent(blogUrl)}`, '_blank');
    const shareOnWhatsApp = () => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(blogTitle + " " + blogUrl)}`, '_blank');
    const copyToClipboard = () => {
        navigator.clipboard.writeText(blogUrl);
        alert("Link copied to clipboard!");
    };


    return (
        <>
            <div className="bg-white min-h-screen font-sans text-gray-800">

                {/* HERO SECTION */}
                <section className="relative h-[70vh] w-full overflow-hidden flex items-center">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://ik.imagekit.io/vtfcbjo5c/portfolio.png"
                            alt="Portfolio-grade projects development"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-transparent" />
                    </div>

                    <div className="absolute inset-0 z-0 block lg:hidden">
                        <img
                            src="https://ik.imagekit.io/vtfcbjo5c/portfoliomobile.png"
                            alt="Portfolio-grade projects development"
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
                                <span className="text-[#28A3B9] font-bold uppercase tracking-[0.3em] text-xs">DEEP DIVE</span>
                                <span className="text-gray-400 text-sm flex items-center gap-2">
                                    <FaClock /> 10 min read
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-6">
                                The Importance of <br />
                                <span className="text-[#28A3B9]">Portfolio-Grade Projects</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                                Why real projects beat certificates, what makes work "portfolio-ready," and how to build evidence of your capabilities.
                            </p>
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <FaUserCircle className="text-xl" />
                                    <span>Athenura Insights Team</span>
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
                                    In today's competitive education and hiring landscape, knowing concepts isn't enough. Employers and increasingly the students themselves want evidence: real work you built, shipped, and can explain.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl my-8 border-l-4 border-[#28A3B9]">
                                <p className="text-gray-700">
                                    That's where portfolio-grade projects come in. They're the bridge between classroom learning and professional contribution: tangible artifacts that show you can solve problems, make trade-offs, and deliver impact.
                                </p>
                            </div>

                            <p className="text-gray-700">
                                Below I explain why portfolio projects matter, what makes a project "portfolio-grade," how to build them efficiently, and a practical checklist you can use for your next capstone.
                            </p>
                        </section>

                        {/* Why Portfolio Projects Beat Certificates */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">1</span>
                            Why Portfolio Projects Beat Certificates and Grades
                        </h2>

                        <div className="space-y-8 my-8">
                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-[#28A3B9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaSearch className="text-2xl text-[#28A3B9]" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg mb-2">Employers hire evidence, not promises.</h3>
                                    <p className="text-gray-600">A resume line that says "Learned React" is vague. A repo with a deployed app, documented architecture, and clear tests demonstrates capability. Recruiters and hiring managers scan for proof projects make your competence visible.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-[#28A3B9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaProjectDiagram className="text-2xl text-[#28A3B9]" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg mb-2">Projects teach integration, not just topics.</h3>
                                    <p className="text-gray-600">Courses are often siloed: one week on algorithms, another on databases. Real projects force you to combine skills front end, back end, data, UX, testing, deployment and to make engineering trade-offs under real constraints.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-[#28A3B9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaCogs className="text-2xl text-[#28A3B9]" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg mb-2">You learn the parts school rarely covers.</h3>
                                    <p className="text-gray-600">How do you scope a minimal viable feature? How do you prioritize bugs before a demo? How do you write a README that helps someone run your work in 5 minutes? Projects expose you to product thinking and team habits that matter in the workplace.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-[#28A3B9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <FaRocketchat className="text-2xl text-[#28A3B9]" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg mb-2">Projects become stories your interview ammunition.</h3>
                                    <p className="text-gray-600">During interviews, recruiters want narratives: the problem, your approach, the metric that improved. Portfolio projects provide those stories with numbers, screenshots, and links not vague recollections.</p>
                                </div>
                            </div>
                        </div>

                        {/* What Makes a Project Portfolio-Grade */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">2</span>
                            What Makes a Project "Portfolio-Grade"?
                        </h2>

                        <p className="mb-6">Not every small exercise belongs on your portfolio. Portfolio-grade projects share these traits:</p>

                        <div className="grid md:grid-cols-2 gap-5 my-8">
                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaCheckCircle className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">End-to-end completeness</h4>
                                <p className="text-sm text-gray-600">A working front end, a functioning back end (or a well-documented mock), tests, and a deployment link (or runnable instructions).</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaUsers className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Clear problem and audience</h4>
                                <p className="text-sm text-gray-600">Not "I built a todo app" it's "I built a lightweight task manager for students that supports deadlines, collaboration, and offline caching." Context matters.</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaChartLine className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Measurable outcomes</h4>
                                <p className="text-sm text-gray-600">Even simple metrics (load time improved by X%, conversion uplift, accuracy on validation set) show you care about results.</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaFileCode className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Readable code and documentation</h4>
                                <p className="text-sm text-gray-600">Clean commits, meaningful variable names, a helpful README, and a one-page case study make it easy for others to evaluate you.</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaBoxes className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Design for reuse</h4>
                                <p className="text-sm text-gray-600">Components, modules, or APIs that can be reused signal architecture thinking.</p>
                            </div>

                            <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#28A3B9] transition-all">
                                <div className="w-10 h-10 bg-[#28A3B9]/10 rounded-lg flex items-center justify-center mb-3">
                                    <FaDesktop className="text-xl text-[#28A3B9]" />
                                </div>
                                <h4 className="font-black mb-2">Polish in presentation</h4>
                                <p className="text-sm text-gray-600">A short demo video, screenshots, or a hosted demo increase perceived quality quickly.</p>
                            </div>
                        </div>

                        {/* How to Build Portfolio Projects */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">3</span>
                            How to Build Portfolio Projects Without Burning Out
                        </h2>

                        <p className="mb-6">You don't need to build Facebook to impress anyone. Follow this practical approach:</p>

                        <div className="space-y-5 my-8">
                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">1</span>
                                <div>
                                    <h4 className="font-black">Start with a one-sentence product brief</h4>
                                    <p className="text-gray-600 italic text-sm mt-1">"A lightweight budgeting app for first-year students to track weekly spending and forecast savings." That sentence guides scope and features.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">2</span>
                                <div>
                                    <h4 className="font-black">Define a single measurable objective</h4>
                                    <p className="text-gray-600 text-sm mt-1">Example: "Enable users to forecast next-month balance with 10% error" or "Reduce form abandonment rate by 20%." Metrics help you decide what to optimize.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">3</span>
                                <div>
                                    <h4 className="font-black">Ship a minimal MVP fast</h4>
                                    <p className="text-gray-600 text-sm mt-1">Build the smallest thing that demonstrates the core value. Prefer a single polished flow over multiple half-finished features.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">4</span>
                                <div>
                                    <h4 className="font-black">Iterate in small, testable increments</h4>
                                    <p className="text-gray-600 text-sm mt-1">Make incremental improvements. Add tests, refactor, and write one paragraph about each iteration in your case study.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">5</span>
                                <div>
                                    <h4 className="font-black">Document decisions and trade-offs</h4>
                                    <p className="text-gray-600 text-sm mt-1">Why did you choose SQLite over MongoDB? Why SSR vs CSR? These explanations show depth of thought.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">6</span>
                                <div>
                                    <h4 className="font-black">Deploy and record a short walkthrough</h4>
                                    <p className="text-gray-600 text-sm mt-1">A 60–90 second screencast explaining user flow and architecture is more persuasive than any resume line.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">7</span>
                                <div>
                                    <h4 className="font-black">Get feedback and iterate</h4>
                                    <p className="text-gray-600 text-sm mt-1">Share with mentors or peers, run a small usability test, and incorporate what you learn.</p>
                                </div>
                            </div>
                        </div>

                        {/* Project Ideas */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">4</span>
                            Project Ideas That Scale Well for Portfolios
                        </h2>

                        <div className="grid md:grid-cols-2 gap-5 my-8">
                            <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                                <FaUsers className="text-2xl text-blue-600 mb-3" />
                                <h4 className="font-black mb-2">Domain-focused tools</h4>
                                <p className="text-sm text-gray-600">A student budget planner, a classroom collaboration board, or a dataset explorer for a specific research domain.</p>
                            </div>

                            <div className="p-5 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                                <FaRocket className="text-2xl text-purple-600 mb-3" />
                                <h4 className="font-black mb-2">Mini SaaS</h4>
                                <p className="text-sm text-gray-600">A small service with user auth, billing mockups, and a dashboard (real payment not required).</p>
                            </div>

                            <div className="p-5 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                                <FaChartBar className="text-2xl text-green-600 mb-3" />
                                <h4 className="font-black mb-2">Data stories</h4>
                                <p className="text-sm text-gray-600">End-to-end analytics projects with data cleaning, modeling, and a dashboard explaining business impact.</p>
                            </div>

                            <div className="p-5 bg-gradient-to-br from-pink-50 to-white rounded-xl border border-pink-100">
                                <FaLayerGroup className="text-2xl text-pink-600 mb-3" />
                                <h4 className="font-black mb-2">Design systems</h4>
                                <p className="text-sm text-gray-600">A component library and documentation site that other developers can import.</p>
                            </div>

                            <div className="p-5 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-100 md:col-span-2">
                                <FaTachometerAlt className="text-2xl text-orange-600 mb-3" />
                                <h4 className="font-black mb-2">Optimization case studies</h4>
                                <p className="text-sm text-gray-600">Take an existing open-source app and improve performance / accessibility / SEO, documenting before/after metrics.</p>
                            </div>
                        </div>

                        {/* How to Present Projects */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">5</span>
                            How to Present Projects (The 3-Minute Pitch)
                        </h2>

                        <p className="mb-6">Prepare three artifacts for every item on your portfolio:</p>

                        <div className="space-y-5 my-8">
                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                                <FaExternalLinkAlt className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black">Live link or recorded demo</h4>
                                    <p className="text-gray-600">1–2 minutes showing the core flow.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                                <FaGithub className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black">Repository with README</h4>
                                    <p className="text-gray-600">Install steps, architecture notes, and quick-start command.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                                <FaRegFileAlt className="text-2xl text-[#28A3B9] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-black">One-page case study</h4>
                                    <p className="text-gray-600">Problem, hypothesis, approach, results, and learnings.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#28A3B9]/5 p-6 rounded-2xl my-6 border border-[#28A3B9]/20">
                            <p className="text-gray-700 italic">
                                <FaQuoteLeft className="inline text-[#28A3B9] mr-2 opacity-70" />
                                During interviews, lead with the result <span className="font-medium">("I reduced page load by 45%")</span> then explain how you achieved it.
                            </p>
                        </div>

                        {/* Quick Checklist */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-lg">6</span>
                            Quick Checklist Before You Publish
                        </h2>

                        <div className="bg-gray-900 text-white p-8 rounded-3xl my-8">
                            <div className="space-y-4">
                                {[
                                    "✓ Does the README run someone through setup in <5 minutes?",
                                    "✓ Is there a clear problem statement and target user?",
                                    "✓ Is at least one measurable result present?",
                                    "✓ Are commits clear and atomic?",
                                    "✓ Is the project deployed (or a demo recorded)?",
                                    "✓ Is the code linted, formatted, and tested where appropriate?",
                                    "✓ Is the one-page case study attached to the repo or hosted?"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-[#28A3B9] mt-1 flex-shrink-0" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Final Note */}
                        <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Final Note Make Projects Part of Your Learning Cycle</h2>

                        <div className="relative p-8 bg-gray-50 rounded-3xl overflow-hidden my-10 border border-gray-200">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#28A3B9] opacity-5 rounded-full -mr-20 -mt-20"></div>
                            <div className="relative z-10">
                                <FaQuoteRight className="text-4xl text-[#28A3B9] opacity-50 mb-4" />
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Portfolio projects are not just résumé fodder they're learning accelerators. They force you to finish, to communicate, and to defend choices. If you're in a program, treat each capstone as a public deliverable: someone may review it, reuse it, or best case hire you because of it.
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

export default PortfolioProjectsArticle;