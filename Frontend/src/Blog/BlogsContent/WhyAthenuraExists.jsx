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
    FaGraduationCap,
    FaBriefcase,
    FaChartLine,
    FaRocket,
    FaCheckCircle,
    FaQuoteRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SIMILAR_POSTS = [
    {
        id: 1,
        title: "How to Ace Your First Remote Internship",
        category: "Career",
        image: "https://ik.imagekit.io/vtfcbjo5c/howtoace.png",
        slug: "ace-remote-internship"
    },
    {
        id: 2,
        title: "The Importance of Portfolio-Grade Projects",
        category: "Education",
        image: "https://ik.imagekit.io/vtfcbjo5c/portfolio.png",
        slug: "portfolio-grade-projects"
    },
    {
        id: 3,
        title: "Bridging the Gap: Academic vs Industry Skills",
        category: "Engineering",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
        slug: "bridging-the-gap"
    },
    {
        id: 4,
        title: "Why Mentorship is the Secret to Faster Growth",
        category: "Mentorship",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
        slug: "mentorship-growth"
    }
];

const WhyAthenuraExists = () => {

    const blogUrl = typeof window !== 'undefined' ? window.location.href : '';
    const blogTitle = "Why Athenura Exists and How It Actually Prepares You for Work";

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
            <section className="relative h-[80vh] w-full overflow-hidden flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src= "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                        alt="Athenura Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
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
                            <span className="text-[#28A3B9] font-bold uppercase tracking-[0.3em] text-xs">Mission & Vision</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] uppercase tracking-tighter mb-8">
                            Why Athenura <br />
                            <span className="text-[#28A3B9]">Exists</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                            And How It Actually Prepares You for Real Work Not Just Certificates
                        </p>
                        <div className="flex items-center gap-8 text-gray-400 text-sm font-medium">
                            <div className="flex items-center gap-2 border-r border-white/20 pr-8">
                                <FaCalendarAlt className="text-[#28A3B9]" />
                                <span>February 28, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaUserCircle className="text-[#28A3B9] text-lg" />
                                <span className="uppercase tracking-widest text-xs">Athenura Editorial Team</span>
                            </div>
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

                {/* BLOG CONTENT */}
                <main className="lg:col-span-7 prose prose-lg max-w-none text-gray-800 leading-relaxed">

                    {/* Opening Quote */}
                    <section className="mb-16">
                        <p className="text-2xl font-light text-gray-500 italic border-l-4 border-[#28A3B9] pl-8 py-2">
                            "Have you ever finished a course, earned a certificate, or completed a degree… and still felt unprepared for real work?"
                        </p>
                        <p className="text-2xl font-light text-gray-500 italic pl-8 mt-4">
                            If your answer is yes, you're not alone.
                        </p>
                    </section>

                    {/* Introduction */}
                    <div className="space-y-6 text-lg">
                        <p>
                            Across industries, thousands of students graduate every year with impressive academic records yet when faced with real professional environments, they struggle with execution, communication, ownership, and decision-making.
                        </p>
                        <p className="font-bold text-black bg-gray-50 p-6 rounded-2xl border-l-4 border-[#28A3B9]">
                            This silent gap between education and employment is exactly why Athenura was created.
                        </p>
                        <p>
                            Athenura exists to bridge the disconnect between theoretical learning and real-world execution not by adding more certificates, but by building real capability.
                        </p>
                    </div>

                    {/* The Problem Section */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">01</span>
                        The Problem Nobody Talks About
                    </h2>

                    <p>Education systems are designed to build foundational knowledge. They are structured around lectures, textbooks, assignments, and examinations. While these are essential for conceptual understanding, they rarely simulate the pressure, ambiguity, and responsibility of actual work environments.</p>

                    <div className="my-10 space-y-6">
                        <div className="p-8 bg-gray-50 rounded-2xl border-l-4 border-gray-300 hover:border-[#28A3B9] transition-all">
                            <div className="flex items-start gap-4">
                                <FaGraduationCap className="text-3xl text-gray-400 mt-1" />
                                <div>
                                    <strong className="text-black text-lg">Colleges teach theory.</strong>
                                    <p className="text-gray-600 mt-2">Exams measure recall, memory, and structured answers not adaptability or execution under constraints.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 bg-[#E9F5F8] rounded-2xl border-l-4 border-[#28A3B9] hover:shadow-xl transition-all">
                            <div className="flex items-start gap-4">
                                <FaBriefcase className="text-3xl text-[#28A3B9] mt-1" />
                                <div>
                                    <strong className="text-black text-lg">Companies expect execution.</strong>
                                    <p className="text-gray-700 mt-2">Employers expect you to manage deadlines, collaborate across teams, communicate clearly, and solve problems independently.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="italic text-gray-600">Knowledge without execution rarely translates into professional confidence.</p>

                    {/* What Is Athenura */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">02</span>
                        What Is Athenura?
                    </h2>

                    <p>Athenura is a remote-first, skill-focused internship and learning ecosystem designed to prepare students for real-world professional environments.</p>

                    <div className="grid md:grid-cols-3 gap-4 my-10">
                        {['Hands-on exposure', 'Job-ready skills', 'Portfolio projects'].map((item, i) => (
                            <div key={i} className="bg-black text-white p-4 rounded-xl text-center text-sm font-bold uppercase tracking-wider">
                                {item}
                            </div>
                        ))}
                    </div>

                    <blockquote className="text-2xl font-light text-[#28A3B9] italic my-10 text-center border-y-2 border-gray-100 py-8">
                        "We believe in: Build → Fail → Learn → Repeat"
                    </blockquote>

                    {/* Core Philosophy */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-[#28A3B9] mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm">03</span>
                        Skills Over Everything
                    </h2>

                    <div className="bg-black text-white p-10 rounded-3xl my-10">
                        <FaQuoteRight className="text-5xl text-[#28A3B9] mb-6 opacity-50" />
                        <p className="text-2xl font-light italic">Degrees may open doors. Skills decide how far you go once inside.</p>
                    </div>

                    <h3 className="text-xl font-bold uppercase mt-8 flex items-center gap-2">
                        <FaCheckCircle className="text-[#28A3B9]" /> Real Tasks, Not Dummy Assignments
                    </h3>
                    <p>Interns do not work on artificial case studies or meaningless exercises. They contribute to real workflows, live projects, internal tools, and production-level systems.</p>

                    <h3 className="text-xl font-bold uppercase mt-8 flex items-center gap-2">
                        <FaCheckCircle className="text-[#28A3B9]" /> Responsibility, Not Spoon-Feeding
                    </h3>
                    <p>Athenura treats every intern as a professional in training. Participants are expected to take initiative, make decisions, and own outcomes.</p>

                    <h3 className="text-xl font-bold uppercase mt-8 flex items-center gap-2">
                        <FaCheckCircle className="text-[#28A3B9]" /> Feedback, Not Silence
                    </h3>
                    <p>At Athenura, feedback loops are intentional and continuous. Mentors provide performance reviews, constructive criticism, and improvement roadmaps.</p>

                    {/* What Makes Athenura Different */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">What Makes Athenura Different?</h2>

                    <div className="space-y-6 my-10">
                        {[
                            { title: "Skill-Based Selection", desc: "We evaluate practical skills, not college names or CGPA." },
                            { title: "Real-World Projects", desc: "Contribute to live platforms and active project pipelines." },
                            { title: "Structured Mentorship", desc: "Clear frameworks, defined metrics, and periodic reviews." },
                            { title: "Remote-First Culture", desc: "Prepare for distributed team collaboration." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-6 border border-gray-100 rounded-2xl hover:border-[#28A3B9] transition-all">
                                <FaRocket className="text-[#28A3B9] text-xl mt-1" />
                                <div>
                                    <h4 className="font-black text-black">{item.title}</h4>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Placement Support */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">How Athenura Prepares You Beyond Skills</h2>

                    <div className="grid md:grid-cols-2 gap-6 my-10">
                        <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-3xl hover:shadow-2xl transition-all">
                            <FaChartLine className="text-3xl text-[#28A3B9] mb-4" />
                            <h4 className="text-[#28A3B9] font-black uppercase tracking-widest text-sm mb-4">Placement Opportunity</h4>
                            <p className="text-sm text-gray-600">Access to hiring networks, internal referrals, and recommendation letters for high-performing contributors.</p>
                        </div>
                        <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-3xl hover:shadow-2xl transition-all">
                            <FaUserCircle className="text-3xl text-[#28A3B9] mb-4" />
                            <h4 className="text-[#28A3B9] font-black uppercase tracking-widest text-sm mb-4">Mock Interview Prep</h4>
                            <p className="text-sm text-gray-600">Technical and behavioral mock interviews using the STAR method to ensure you're interview-ready.</p>
                        </div>
                    </div>

                    {/* Who It's For */}
                    <div className="bg-gray-50 p-10 rounded-3xl my-16">
                        <h3 className="text-2xl font-black uppercase mb-8">Who Is Athenura For?</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Students seeking practical exposure",
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
                    </div>

                    {/* Expectations */}
                    <h3 className="text-xl font-black uppercase mt-12">What We Expect From You</h3>
                    <ul className="list-none space-y-3 my-6">
                        {[
                            "Maintain attendance and punctuality",
                            "Meet deadlines consistently",
                            "Communicate professionally",
                            "Accept feedback constructively",
                            "Take initiative in learning"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-[#28A3B9] rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Benefits Snapshot */}
                    <div className="bg-gradient-to-r from-[#28A3B9] to-black text-white p-10 rounded-3xl my-16">
                        <h3 className="text-2xl font-black uppercase mb-6">Quick Benefits Snapshot</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Project-based learning",
                                "Real-world execution",
                                "Structured mentorship",
                                "Portfolio projects",
                                "Placement support",
                                "Mock interviews"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <FaCheckCircle className="text-white text-opacity-70" />
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final Note */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">From Certificate to Contribution</h2>
                    <p className="text-xl">Too many programs end at "completion." Athenura ends at "contribution."</p>

                    <p className="mt-6">The true measure of an internship is not the certificate you receive it is the value you can deliver on day one of your job.</p>

                    <p className="font-bold text-lg mt-6">Athenura exists to build professionals who:</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                        {[
                            "Think independently",
                            "Execute efficiently",
                            "Communicate clearly",
                            "Adapt quickly",
                            "Add value immediately"
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded-xl text-center text-sm font-medium">
                                {item}
                            </div>
                        ))}
                    </div>

                    <p className="text-2xl font-light italic text-[#28A3B9] mt-12 mb-8">
                        If you're tired of feeling underqualified and ready to replace theory-only learning with real, high-impact execution Athenura was built for you.
                    </p>

                    {/* Mobile Social Share - Fixed at bottom for mobile */}
                    <div className="lg:hidden fixed left-0 right-0 bg-white border-t border-gray-100 p-4 z-50">
                        <div className="flex justify-center gap-4">
                            <button onClick={shareOnLinkedIn} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-[#28A3B9] hover:text-white transition-colors"><FaLinkedin /></button>
                            <button onClick={shareOnWhatsApp} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-[#25D366] hover:text-white transition-colors"><FaWhatsapp /></button>
                            <button onClick={shareOnTwitter} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"><FaTwitter /></button>
                            <button onClick={copyToClipboard} className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-black hover:text-white transition-colors"><FaLink /></button>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-black p-12 rounded-[2rem] text-center text-white mt-32">
                        <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">Ready to Build Real Competence?</h3>
                        <p className="text-gray-400 mb-8 max-w-md mx-auto">Join the next cohort and transform from a certificate-holder into a capable professional.</p>
                        <Link to="/apply-internship" >
                        <button className="bg-[#28A3B9] hover:bg-white hover:text-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 transform hover:scale-105">
                            Apply for Internship
                        </button>
                        </Link>
                    </div>
                </main>

                {/* SIMILAR POSTS ASIDE */}
                <aside className="lg:col-span-4">
                    <div className="sticky top-32">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-xl font-black uppercase tracking-widest text-black">Similar <span className="text-[#28A3B9]">Insights</span></h2>
                            <div className="h-[2px] flex-grow bg-gray-100" />
                        </div>
                        <div className="space-y-6">
                            {SIMILAR_POSTS.map((post) => (
                                <a href={`/blogs/${post.slug}`} key={post.id} className="group block p-4 rounded-3xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                                            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-[#28A3B9] uppercase tracking-widest mb-1 block">{post.category}</span>
                                            <h4 className="font-bold text-sm leading-tight text-black group-hover:text-[#28A3B9] transition-colors">{post.title}</h4>
                                            <div className="mt-2 flex items-center gap-1 text-[#28A3B9] text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                                                Read Story <FaArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>


        </div>
    );
};

export default WhyAthenuraExists;