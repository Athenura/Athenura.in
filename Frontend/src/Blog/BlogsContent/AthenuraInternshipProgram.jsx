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
    FaBrain,
    FaRocket,
    FaUsers,
    FaChartLine,
    FaAward,
    FaCheckCircle,
    FaQuoteRight,
    FaLaptopCode,
    FaPalette,
    FaPenFancy,
    FaChartBar,
    FaVideo,
    FaDatabase,
    FaServer,
    FaMobileAlt,
    FaSearch,
    FaBullhorn,
    FaLanguage,
    FaRegClock,
    FaMapMarkerAlt,
    FaGraduationCap,
    FaBriefcase,
    FaStar
} from 'react-icons/fa';
import handbook from "../../../public/handbook.pdf";
import { Link } from 'react-router-dom';
const SIMILAR_PROGRAMS = [
    {
        id: 1,
        title: "Data Science & Analytics Internship",
        category: "Upcoming Cohort",
        image: "https://ik.imagekit.io/vtfcbjo5c/data%20science.png",
        slug: "data-science-internship"
    },
    {
        id: 2,
        title: "Full-Stack Development Intensive",
        category: "Applications Open",
        image: "https://ik.imagekit.io/vtfcbjo5c/fullstack1.png",
        slug: "fullstack-intensive"
    },
    {
        id: 3,
        title: "UI/UX Design Professional Internship",
        category: "Limited Seats",
        image: "https://ik.imagekit.io/vtfcbjo5c/uiux.png",
        slug: "ui-ux-design-internship"
    },
    {
        id: 4,
        title: "Digital Marketing Mastery",
        category: "New Program",
        image: "https://ik.imagekit.io/vtfcbjo5c/digital.png",
        slug: "digital-marketing-mastery"
    }
];

const LEARNING_DOMAINS = [
    { icon: FaDatabase, name: "Data Science & Analytics", color: "bg-blue-500" },
    { icon: FaUsers, name: "Human Resources", color: "bg-green-500" },
    { icon: FaBullhorn, name: "Social Media Management", color: "bg-purple-500" },
    { icon: FaPalette, name: "Graphic Design", color: "bg-pink-500" },
    { icon: FaChartBar, name: "Digital Marketing", color: "bg-orange-500" },
    { icon: FaVideo, name: "Video Editing", color: "bg-red-500" },
    { icon: FaLaptopCode, name: "Full-Stack Development", color: "bg-indigo-500" },
    { icon: FaServer, name: "MERN Stack", color: "bg-teal-500" },
    { icon: FaPenFancy, name: "Content Writing", color: "bg-yellow-500" },
    { icon: FaMobileAlt, name: "Content Creation", color: "bg-cyan-500" },
    { icon: FaPalette, name: "UI/UX Design", color: "bg-violet-500" },
    { icon: FaCode, name: "Front-end Development", color: "bg-emerald-500" },
    { icon: FaServer, name: "Back-end Development", color: "bg-gray-700" }
];

const AthenuraInternshipProgram = () => {

    const programUrl = typeof window !== 'undefined' ? window.location.href : '';
    const programTitle = "Athenura Internship Program — From Classroom Concepts to Career-Ready Contribution";

    const shareOnLinkedIn = () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(programUrl)}`, '_blank');
    const shareOnTwitter = () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(programTitle)}&url=${encodeURIComponent(programUrl)}`, '_blank');
    const shareOnWhatsApp = () => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(programTitle + " " + programUrl)}`, '_blank');
    const copyToClipboard = () => {
        navigator.clipboard.writeText(programUrl);
        alert("Link copied to clipboard!");
    };

    return (
        <div className="bg-white min-h-screen font-sans text-black">

            {/* HERO SECTION */}
            <section className="relative h-[85vh] w-full overflow-hidden flex items-center">
                <div className="absolute  hidden md:block inset-0 z-0">
                    <img
                        src="https://ik.imagekit.io/vtfcbjo5c/image.png"
                        alt="Athenura Internship Program"
                        className="w-full h-full object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/80 to-transparent" />
                </div>

                <div className="absolute block lg:hidden inset-0 z-0">
                    <img
                        src="https://ik.imagekit.io/vtfcbjo5c/classmobile.png"
                        alt="Athenura Internship Program"
                        className="w-full h-full"
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
                            <span className="text-[#28A3B9] font-bold uppercase tracking-[0.3em] text-xs">INTERNSHIP PROGRAM</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] uppercase tracking-tighter mb-8">
                            From Classroom <br />
                            <span className="text-[#28A3B9]">to Career-Ready</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                            Bridge the gap between theoretical concepts and real-world contribution through structured, execution-driven learning.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mb-12">
                            <div>
                                <div className="text-3xl font-black text-[#28A3B9]">3-8</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Months Duration</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-[#28A3B9]">13+</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Learning Domains</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-[#28A3B9]">100%</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Remote</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/apply-internship">
                                <button className="bg-[#28A3B9] hover:bg-white hover:text-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 transform hover:scale-105">
                                    Apply Now
                                </button>
                            </Link>
                            <a href={handbook} download className="text-white underline">
                                <button className="border-2 border-white/30 hover:border-[#28A3B9] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300">
                                    Download Brochure
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
                <main className="lg:col-span-7 prose prose-lg max-w-none text-gray-800 leading-relaxed">

                    {/* Vision Statement */}
                    <section className="mb-16">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="h-[2px] w-12 bg-[#28A3B9]"></span>
                            <span className="text-[#28A3B9] font-bold uppercase tracking-[0.3em] text-xs">Our Vision</span>
                        </div>
                        <div className="bg-black text-white p-10 rounded-3xl">
                            <FaQuoteRight className="text-5xl text-[#28A3B9] mb-6 opacity-50" />
                            <p className="text-3xl font-light italic leading-relaxed">
                                Code. Create. Innovate.
                            </p>
                            <p className="text-gray-400 mt-4">
                                Cultivating a workforce that is skilled, innovative, and execution-ready.
                            </p>
                        </div>
                    </section>

                    {/* Introduction */}
                    <div className="space-y-6 text-lg">
                        <p>
                            In an era where industries evolve faster than academic curricula, practical exposure is no longer optional — it's essential. Employers don't just want people who understand concepts; they want professionals who can apply them under pressure, within teams, and against real business constraints.
                        </p>
                        <p className="font-bold text-black bg-gray-50 p-6 rounded-2xl border-l-4 border-[#28A3B9]">
                            The Athenura Internship Program was designed to close this gap: to help students and early-career learners move from theory to industry competence through structured, experiential learning.
                        </p>
                    </div>

                    {/* Program Overview */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">01</span>
                        Program Overview
                    </h2>

                    <p>The Athenura Internship Program is a remote, execution-driven initiative that blends guided technical training with live project delivery. It's intentionally structured so participants graduate with verifiable project experience and portfolio artifacts that hiring managers can evaluate.</p>

                    <div className="grid md:grid-cols-2 gap-6 my-10">
                        {[
                            { title: "Guided Technical Training", desc: "Instructor-led modules on industry-relevant tools and frameworks" },
                            { title: "Live Project Development", desc: "Contribute to production-level work" },
                            { title: "Performance Evaluation", desc: "Continuous assessment through sprint reviews" },
                            { title: "Project-Assigned Mentorship", desc: "Dedicated mentor as project manager" },
                            { title: "Industry Workflow Exposure", desc: "Agile, version control, documentation" }
                        ].map((item, i) => (
                            <div key={i} className="p-6 border border-gray-100 rounded-2xl hover:border-[#28A3B9] hover:shadow-lg transition-all">
                                <h4 className="font-black text-black mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Learning Domains */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">02</span>
                        Key Learning Domains
                    </h2>

                    <p className="mb-8">To suit diverse career goals, Athenura offers multidisciplinary tracks across core domains. Each track focuses on practical, production-ready skills:</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
                        {LEARNING_DOMAINS.map((domain, i) => {
                            const Icon = domain.icon;
                            return (
                                <div key={i} className="group p-4 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all cursor-pointer">
                                    <Icon className={`text-2xl ${domain.color} text-white p-1.5 rounded-lg mb-2 group-hover:scale-110 transition-transform`} />
                                    <span className="text-xs font-bold uppercase tracking-tight">{domain.name}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Methodology */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">03</span>
                        Experiential Learning Methodology
                    </h2>

                    <div className="space-y-6">
                        {[
                            "Deadline-Based Deliverables: Tasks governed by project-specific deadlines",
                            "Real-World Problem Statements: Assignments from actual business scenarios",
                            "Collaborative Team Projects: Practice communication and shared accountability",
                            "Version Control & Documentation: Professional repository management protocols"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                <FaCheckCircle className="text-[#28A3B9] text-xl mt-1 flex-shrink-0" />
                                <p className="text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mentorship Structure */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Mentorship & Supervision</h2>

                    <div className="grid md:grid-cols-2 gap-6 my-10">
                        {[
                            { role: "Project Managers", desc: "Plan work, allocate tasks, ensure delivery" },
                            { role: "Technical Reviewers", desc: "Assess code quality and architecture" },
                            { role: "Project Coordinators", desc: "Manage communication and deadlines" },
                            { role: "Evaluation Panels", desc: "Handle onboarding and assessments" }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-[#E9F5F8] rounded-2xl border-l-4 border-[#28A3B9]">
                                <h4 className="font-black text-black mb-2">{item.role}</h4>
                                <p className="text-sm text-gray-700">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Program Details */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Program Structure</h2>

                    <div className="bg-gray-50 p-8 rounded-3xl mb-10">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex items-start gap-4">
                                <FaRegClock className="text-[#28A3B9] text-2xl" />
                                <div>
                                    <h4 className="font-black text-sm uppercase">Duration</h4>
                                    <p className="text-lg font-bold">3 to 8 months</p>
                                    <p className="text-sm text-gray-600">Domain dependent</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-[#28A3B9] text-2xl" />
                                <div>
                                    <h4 className="font-black text-sm uppercase">Mode</h4>
                                    <p className="text-lg font-bold">Remote / Virtual</p>
                                    <p className="text-sm text-gray-600">Flexible schedules</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaUsers className="text-[#28A3B9] text-2xl" />
                                <div>
                                    <h4 className="font-black text-sm uppercase">Commitment</h4>
                                    <p className="text-lg font-bold">Professional Standards</p>
                                    <p className="text-sm text-gray-600">Aligned with academics</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaChartLine className="text-[#28A3B9] text-2xl" />
                                <div>
                                    <h4 className="font-black text-sm uppercase">Evaluation</h4>
                                    <p className="text-lg font-bold">Milestone-based</p>
                                    <p className="text-sm text-gray-600">Deadline-driven</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certification & Outcomes */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Certification & Career Outcomes</h2>

                    <div className="grid md:grid-cols-2 gap-6 my-10">
                        <div className="p-6 border border-gray-200 rounded-2xl">
                            <FaAward className="text-3xl text-[#28A3B9] mb-4" />
                            <h4 className="font-black mb-2">Internship Certificate</h4>
                            <p className="text-sm text-gray-600">Formal recognition of domain specialization</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-2xl">
                            <FaStar className="text-3xl text-[#28A3B9] mb-4" />
                            <h4 className="font-black mb-2">Letter of Recommendation</h4>
                            <p className="text-sm text-gray-600">Performance-based for top contributors</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-2xl">
                            <FaAward className="text-3xl text-[#28A3B9] mb-4" />
                            <h4 className="font-black mb-2">Excellence Certificates</h4>
                            <p className="text-sm text-gray-600">For leadership and exceptional impact</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-2xl">
                            <FaBriefcase className="text-3xl text-[#28A3B9] mb-4" />
                            <h4 className="font-black mb-2">Portfolio Endorsement</h4>
                            <p className="text-sm text-gray-600">Verified recognition of live project work</p>
                        </div>
                    </div>

                    {/* Placement Support */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Placement & Interview Preparation</h2>

                    <div className="bg-gradient-to-r from-[#28A3B9] to-black text-white p-10 rounded-3xl my-10">
                        <h3 className="text-2xl font-black mb-6">Placement Opportunity</h3>
                        <ul className="space-y-4">
                            {[
                                "Fast-tracked to partner companies",
                                "Internal referrals for high performers",
                                "Showcase days with hiring managers"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-white text-opacity-70" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-8 border-t border-white/20">
                            <h3 className="text-2xl font-black mb-6">Mock Interview Preparation</h3>
                            <ul className="space-y-4">
                                {[
                                    "Technical & behavioral mock interviews",
                                    "Resume and portfolio optimization",
                                    "Detailed feedback reports"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-white text-opacity-70" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Skill Outcomes */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">What Graduates Walk Away With</h2>

                    <div className="grid grid-cols-2 gap-4 my-8">
                        {[
                            "Technical Implementation",
                            "Project Lifecycle Understanding",
                            "Team Collaboration",
                            "Professional Communication",
                            "Problem-Solving Frameworks",
                            "Tool Proficiency"
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-gray-50 rounded-xl text-center text-sm font-medium hover:bg-[#28A3B9] hover:text-white transition-all">
                                {item}
                            </div>
                        ))}
                    </div>

                    {/* Who Can Apply */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Who Can Apply</h2>

                    <div className="bg-gray-50 p-10 rounded-3xl mb-10">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Students (UG & PG)",
                                "Final-year candidates",
                                "Fresh graduates",
                                "Career switchers",
                                "Self-learners",
                                "High-agency individuals"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#28A3B9] text-sm" />
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-6 italic">
                            If you seek certificates without effort, this program is not a fit. But if you're ready to take ownership, accept feedback, and produce measurable work — Athenura is built for you.
                        </p>
                    </div>

                    {/* Final Word */}
                    <div className="border-t-2 border-gray-100 pt-12 mt-12">
                        <p className="text-xl font-light italic text-[#28A3B9] mb-6">
                            "The fastest way to become hireable is to demonstrate you can deliver value — not just recite theory."
                        </p>
                        <p className="text-lg">
                            The Athenura Internship Program is designed around that principle: immersive projects, structured mentorship, outcome-based evaluation, placement pathways, and interview readiness. If you're ready to move from learned concepts to meaningful contribution, this is the environment that will get you there.
                        </p>
                    </div>

                    <div className="lg:hidden fixed left-0 right-0 bg-white border-t border-gray-100 p-4 z-50">
                        <div className="flex justify-center gap-4">
                            <button onClick={shareOnLinkedIn} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-[#28A3B9] hover:text-white transition-colors"><FaLinkedin /></button>
                            <button onClick={shareOnWhatsApp} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-[#25D366] hover:text-white transition-colors"><FaWhatsapp /></button>
                            <button onClick={shareOnTwitter} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"><FaTwitter /></button>
                            <button onClick={copyToClipboard} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-black hover:text-white transition-colors"><FaLink /></button>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-black p-12 rounded-[2rem] text-center text-white mt-24">
                        <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">Ready to Start Your Journey?</h3>
                        <p className="text-gray-400 mb-8 max-w-md mx-auto">Join the next cohort and transform from classroom learner to career-ready professional.</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/apply-internship">
                                <button className="bg-[#28A3B9] hover:bg-white hover:text-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 transform hover:scale-105">
                                    Apply for Internship
                                </button>
                            </Link>
                        </div>
                    </div>
                </main>

                {/* SIDEBAR */}
                <aside className="lg:col-span-4">
                    <div className="sticky top-32 space-y-8">
                        {/* Quick Info Cards */}
                        <div className="bg-black text-white p-6 rounded-3xl">
                            <h3 className="text-lg font-black uppercase mb-4">Quick Info</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                                    <span className="text-gray-400">Duration</span>
                                    <span className="font-bold">3-8 Months</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                                    <span className="text-gray-400">Mode</span>
                                    <span className="font-bold">Remote</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                                    <span className="text-gray-400">Domains</span>
                                    <span className="font-bold">13+ Tracks</span>
                                </div>
                            </div>
                        </div>

                        {/* Similar Programs */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <h2 className="text-xl font-black uppercase tracking-widest text-black">Related <span className="text-[#28A3B9]">Programs</span></h2>
                                <div className="h-[2px] flex-grow bg-gray-100" />
                            </div>
                            <div className="space-y-4">
                                {SIMILAR_PROGRAMS.map((program) => (
                                    <a href={`/blogs/${program.slug}`} key={program.id} className="group block p-4 rounded-3xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all">
                                        <div className="flex gap-4 items-center">
                                            <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                                                <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-bold text-[#28A3B9] uppercase tracking-widest mb-1 block">{program.category}</span>
                                                <h4 className="font-bold text-sm leading-tight text-black group-hover:text-[#28A3B9] transition-colors">{program.title}</h4>
                                                <div className="mt-2 flex items-center gap-1 text-[#28A3B9] text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                                                    View Program <FaArrowRight />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Application Deadline */}

                        {/* Download Brochure */}
                        <a href={handbook} download className="block">
                            <button className="w-full p-6 border-2 border-dashed border-gray-200 rounded-3xl text-left hover:border-[#28A3B9] transition-all group">
                                <FaRocket className="text-3xl text-gray-400 group-hover:text-[#28A3B9] mb-4" />
                                <h4 className="font-black text-black mb-1">Download Brochure</h4>
                                <p className="text-xs text-gray-500">Get detailed program information</p>
                            </button>
                        </a>
                    </div>
                </aside>
            </div>

            {/* Mobile Social Share */}

        </div>
    );
};

export default AthenuraInternshipProgram;