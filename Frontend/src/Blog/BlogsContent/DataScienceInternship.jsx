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
    FaAward,
    FaPython,
    FaBrain,
    FaChartBar,
    FaProjectDiagram,
    FaRobot,
    FaMicroscope
} from 'react-icons/fa';
import handbook from "../../../public/handbook.pdf"
import { Link } from "react-router-dom"

const DataScienceInternship = () => {

    const blogUrl = typeof window !== 'undefined' ? window.location.href : '';
    const blogTitle = "Applications Open Data Science & Analytics Internship at Athenura";

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
                        src="https://ik.imagekit.io/vtfcbjo5c/data%20science.png"
                        alt="Data Science & Analytics"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/80 to-transparent" />
                </div>
                <div className="absolute inset-0 z-0 block lg:hidden">
                    <img
                        src="https://ik.imagekit.io/vtfcbjo5c/data%20sciencemobile.png"
                        alt="Data Science & Analytics"
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
                            Data Science & <br />
                            <span className="text-[#28A3B9]">Analytics</span> Internship
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                            Turn raw information into decisive action. Build portfolio-ready projects and learn to ship analytics products that drive real business impact.
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
                            In a world driven by data, the ability to turn raw information into decisive action is one of the most valuable skills you can build. The Data Science & Analytics Internship at Athenura is a hands-on, project-first program designed to move learners from textbook theory to measurable impact — equipping you with the technical skills, analytical thinking, and product-minded instincts companies look for.
                        </p>
                    </section>

                    {/* Why This Internship Matters */}
                    <div className="bg-black text-white p-10 rounded-3xl my-12">
                        <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                            <FaRocket className="text-[#28A3B9]" /> Why this internship matters
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Data is everywhere, but value sits only where data meets context and execution. Many learners know models and algorithms; few know how to choose the right question, collect and clean realistic datasets, validate a model's business value, and ship an analytics product that stakeholders can trust. This internship focuses on that gap: practical, repeatable workflows that produce portfolio-ready projects and tangible results.
                        </p>
                    </div>

                    {/* Who Should Apply */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">01</span>
                        Who Should Apply
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 my-8">
                        <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
                            <FaGraduationCap className="text-4xl text-blue-500 mb-4" />
                            <h4 className="font-black text-lg mb-2">Students (UG/PG)</h4>
                            <p className="text-sm text-gray-600">Aiming for analytics internships or entry-level data roles</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
                            <FaBriefcase className="text-4xl text-green-500 mb-4" />
                            <h4 className="font-black text-lg mb-2">Career Pivots</h4>
                            <p className="text-sm text-gray-600">Graduates and early-career professionals moving into data science</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
                            <FaLaptopCode className="text-4xl text-purple-500 mb-4" />
                            <h4 className="font-black text-lg mb-2">Self-taught Learners</h4>
                            <p className="text-sm text-gray-600">Wanting structure, mentorship, and real project experience</p>
                        </div>
                    </div>

                    <p className="text-lg font-medium text-[#28A3B9] italic mb-12">
                        You don't need a PhD. You need curiosity, the basics of statistics and Python (or willingness to learn quickly), and a commitment to shipping work under deadlines.
                    </p>

                    {/* What You'll Learn */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">02</span>
                        What You'll Learn
                    </h2>

                    <p className="mb-8">The curriculum blends fundamentals with industry workflows. Expect practical modules covering:</p>

                    {/* Data Foundations Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <FaDatabase className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-black">Data Foundations</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: FaDatabase, text: "Data wrangling and ETL: cleaning, merging, and shaping real-world datasets", color: "text-blue-500" },
                                { icon: FaChartBar, text: "Exploratory Data Analysis (EDA): visual and statistical techniques", color: "text-green-500" }
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

                    {/* Modeling & Evaluation Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                                <FaBrain className="text-2xl text-green-600" />
                            </div>
                            <h3 className="text-2xl font-black">Modeling & Evaluation</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: FaRobot, text: "Machine learning basics: regression, classification, clustering", color: "text-purple-500" },
                                { icon: FaMicroscope, text: "Model validation: cross-validation, precision/recall trade-offs", color: "text-orange-500" },
                                { icon: FaChartLine, text: "Dealing with imbalanced data and avoiding leakage", color: "text-red-500" },
                                { icon: FaProjectDiagram, text: "Feature engineering and interpreting results for stakeholders", color: "text-indigo-500" }
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

                    {/* Product & Deployment Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
                                <FaCloud className="text-2xl text-yellow-600" />
                            </div>
                            <h3 className="text-2xl font-black">Product & Deployment</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: FaCogs, text: "Building repeatable pipelines (Airflow-lite patterns)", color: "text-gray-600" },
                                { icon: FaServer, text: "Serving models as lightweight APIs", color: "text-blue-500" },
                                { icon: FaLayerGroup, text: "Embedding analytics into dashboards", color: "text-green-500" },
                                { icon: FaShieldAlt, text: "Monitoring and retraining strategies", color: "text-purple-500" }
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

                    {/* Tools & Languages Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                                <FaPython className="text-2xl text-red-600" />
                            </div>
                            <h3 className="text-2xl font-black">Tools & Languages</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: FaPython, text: "Python (pandas, NumPy, scikit-learn)", color: "text-red-500" },
                                { icon: FaDatabase, text: "SQL for data querying", color: "text-blue-500" },
                                { icon: FaChartBar, text: "Visualization stack (Matplotlib/Plotly)", color: "text-green-500" },
                                { icon: FaCloud, text: "Basic cloud/deployment concepts", color: "text-purple-500" }
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

                    <p className="mb-6">Rather than isolated exercises, this internship is anchored to end-to-end projects. Example capstones include:</p>

                    <div className="space-y-6 my-10">
                        {[
                            { icon: FaUsers, title: "Customer Churn Prediction", desc: "Ingest customer event logs, create features, train models, and deliver a dashboard with actionable churn-risk segments and recommended retention actions." },
                            { icon: FaChartLine, title: "Sales Forecasting Pipeline", desc: "Build a time-series forecasting pipeline, evaluate forecast accuracy, and produce a deployment plan for periodic re-training." },
                            { icon: FaRobot, title: "Recommendation Mini-Product", desc: "Design a simple recommendation engine and wrap it in an API with a demo front-end for user testing." },
                            { icon: FaMicroscope, title: "A/B Test Analysis Toolkit", desc: "Design hypothesis tests, compute power/sample size, and produce a reproducible report with business recommendations." }
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
                        Each project culminates in a polished GitHub repository, a short demo video, and a one-page case study that explains the problem, approach, metrics, and business impact.
                    </p>

                    {/* Mentorship Section */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">04</span>
                        Mentorship & Feedback Loop
                    </h2>

                    <div className="bg-gradient-to-r from-[#28A3B9] to-black text-white p-10 rounded-3xl my-10">
                        <p className="mb-6">Mentorship is structured, not optional. You'll be paired with a technical mentor who has product experience and has shipped data-driven features.</p>
                        <h3 className="text-2xl font-black mb-6">Mentors provide:</h3>
                        <ul className="space-y-4">
                            {[
                                "Weekly unblock technical and product questions",
                                "Code and model reviews focusing on reproducibility and ethical considerations",
                                "Interview prep and portfolio feedback tailored to data roles"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-white text-opacity-70 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-gray-300">In addition, regular sprint reviews simulate workplace cadence: planning, execution, demo, and retrospective. This keeps learning measurable and aligned to deliverables.</p>
                    </div>

                    {/* Evaluation & Outcomes */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">05</span>
                        Evaluation & Outcomes
                    </h2>

                    <p className="mb-6">Progress is evaluated through milestone deliverables rather than a final exam. Assessments include:</p>

                    <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                        <li>Implementation quality (code, tests, documentation)</li>
                        <li>Analytical rigour and clarity of insights</li>
                        <li>Ability to communicate technical trade-offs to non-technical stakeholders</li>
                        <li>Consistency in meeting sprint deadlines</li>
                    </ul>

                    <div className="grid md:grid-cols-2 gap-6 my-10">
                        {[
                            { title: "End-to-End Analytics Project", desc: "Clean data, reproducible code, deployed demo or dashboard", icon: FaProjectDiagram },
                            { title: "Case Study & Demo Video", desc: "Data-focused case study and demo video for interviews", icon: FaVideo },
                            { title: "Mock Interview Experience", desc: "Practical interview experience via mock technical rounds", icon: FaComments },
                            { title: "Certificate & Recommendations", desc: "Certificate and performance-based recommendation letters", icon: FaAward }
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

                    <p className="mb-6">High performers may be fast-tracked to partner companies and receive internal referrals. The program includes:</p>

                    <ul className="list-disc pl-6 mb-12 space-y-2 text-gray-700">
                        <li>Resume and LinkedIn refresh sessions with a hiring lens for data roles</li>
                        <li>Mock interviews (technical and behavioral) with detailed critique</li>
                        <li>Guidance on portfolio curation that highlights impact metrics rather than just model accuracy</li>
                    </ul>

                    {/* Commitment & Logistics */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Commitment & Logistics</h2>

                    <div className="grid md:grid-cols-3 gap-6 my-10">
                        {[
                            { icon: FaClock, label: "Duration", value: "3–6 months" },
                            { icon: FaMapMarkerAlt, label: "Mode", value: "Remote — flexible schedules" },
                            { icon: FaGraduationCap, label: "Prerequisite", value: "Basic Python & statistics familiarity" }
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
                        This is not a passive certificate program — it expects ownership, consistent delivery, and a willingness to accept iterative feedback.
                    </p>

                    {/* Why Choose Athenura */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Why Choose This Internship at Athenura</h2>

                    <div className="relative p-8 bg-gray-50 rounded-3xl overflow-hidden mb-12">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#28A3B9] opacity-5 rounded-full -mr-20 -mt-20"></div>
                        <p className="text-lg leading-relaxed relative z-10">
                            The difference is in outcomes: we emphasize shipping. Rather than isolated notebooks, you'll build reproducible pipelines, explain trade-offs to stakeholders, and produce deployable artifacts that hiring managers can evaluate. The program's design reflects real product timelines and the communication skills teams need.
                        </p>
                        <p className="text-lg font-bold text-[#28A3B9] mt-6 relative z-10">
                            We evaluate curiosity and growth potential over credentials. If you're hungry to learn by doing and want to turn data into decisions, this internship is built for you.
                        </p>
                    </div>

                    {/* Final CTA */}
                    <div className="bg-black p-16 rounded-[2rem] text-center text-white mt-16 mb-8 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 left-10 w-40 h-40 border-2 border-[#28A3B9] rounded-full"></div>
                            <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter">Turn Data into Decisions</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                                Join the Data Science & Analytics Internship at Athenura and learn to build analytics products that drive real business impact. With mentorship, real projects, and career support, you'll graduate with the skills and portfolio to launch your data career.
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
                                        <p className="font-bold">3–6 Months</p>
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
                                    <FaPython className="text-[#28A3B9]" />
                                    <div>
                                        <p className="text-xs text-gray-400">Prerequisites</p>
                                        <p className="font-bold">Python & Statistics Basics</p>
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
                                "The project-first approach and mentorship transformed how I approach data problems. I went from knowing Python basics to building a churn prediction dashboard that actually got used. Landed my first data analyst role within 3 months of graduating."
                            </p>
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className="font-black text-sm">Rahul M.</p>
                                    <p className="text-xs text-gray-500">Data Analyst, Class of '25</p>
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

export default DataScienceInternship;