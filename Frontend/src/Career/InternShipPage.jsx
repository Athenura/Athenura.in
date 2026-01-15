import React from "react";
import { Link } from "react-router-dom";

const InternshipProgram = () => {
    const theme = {
        primary: "#1E90A8",
        primaryLight: "#E8F8FA",
        textDark: "#111827",
        textGray: "#4B5563",
        bg: "#F8FBFC",
        white: "#FFFFFF",
    };

    const timeline = [
        {
            period: "Weeks 1–2",
            title: "Onboarding & Skill Foundation",
            desc: "Get introduced to Athenura’s culture, tools, and workflow. Complete guided tasks and mini-assignments to build a strong technical foundation.",
        },
        {
            period: "Weeks 3–8",
            title: "Multiple Guided Projects",
            desc: "Work on multiple real-world projects across different problem statements. Each project focuses on specific skills, reviews, and learning outcomes.",
        },
        {
            period: "Weeks 9–12",
            title: "Advanced Tasks & Showcase",
            desc: "Take on advanced project tasks, refine earlier work, and showcase your best projects along with documented learnings to the team.",
        },
    ];


    const outcomes = [
        {
            icon: "Rocket",
            title: "Real Project Exposure",
            desc: "Work on guided, real-world projects that mirror how modern product teams build and collaborate.",
        },
        {
            icon: "User",
            title: "Mentorship & Reviews",
            desc: "Receive regular feedback through mentor guidance, code reviews, and improvement sessions.",
        },
        {
            icon: "Code",
            title: "Practical Skill Development",
            desc: "Strengthen your frontend, backend, and problem-solving skills using industry-relevant tools.",
        },
        {
            icon: "Briefcase",
            title: "Certificate of Completion",
            desc: "Earn an official Athenura Internship Certificate upon successful completion of the program.",
        },
    ];


    return (
        <section className="py-24 px-6 lg:px-12 relative overflow-hidden" style={{ backgroundColor: theme.bg }}>

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-5 blur-[100px]" style={{ backgroundColor: theme.primary }}></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-5 blur-[100px]" style={{ backgroundColor: theme.textDark }}></div>
            </div>

            <div className="max-w-8xl mx-auto relative z-10">

                {/* HEADER */}
                <div className="text-center mb-24">
                    <h2
                        className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
                        style={{ color: theme.textDark }}
                    >
                        The Athenura <span style={{ color: theme.primary }}>Internship Program</span>
                    </h2>
                    <p
                        className="text-xl max-w-2xl mx-auto leading-relaxed"
                        style={{ color: theme.textGray }}
                    >
                        A structured learning experience designed to help students and freshers
                        build practical skills, confidence, and real project exposure.
                    </p>
                </div>

                {/* TIMELINE SECTION */}
                <div className="mb-32 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] -z-10"
                        style={{
                            background: `linear-gradient(to right, transparent, ${theme.primary}40, transparent)`
                        }}>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex flex-col items-center md:items-start group">

                                {/* Number Badge */}
                                <div className="relative mb-8">
                                    <div
                                        className="w-24 h-24 rounded-2xl flex items-center justify-center text-2xl font-bold bg-white border shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:-translate-y-2"
                                        style={{ borderColor: `${theme.primary}40`, color: theme.primary }}
                                    >
                                        0{index + 1}
                                    </div>
                                    {/* Glow effect behind number */}
                                    <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full"></div>
                                </div>

                                {/* Content Card */}
                                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-full relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:h-full h-0" style={{ backgroundColor: theme.primary }}></div>

                                    <span className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4" style={{ backgroundColor: theme.primaryLight, color: theme.primaryDark }}>
                                        {item.period}
                                    </span>

                                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.textDark }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: theme.textGray }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SPLIT SECTION: ELIGIBILITY & TRACKS */}
                <div className="grid lg:grid-cols-2 gap-8 mb-24">

                    {/* Left: Eligibility (List Style) */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden">
                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>

                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: theme.textDark }}>
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-100 text-teal-700">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </span>
                            Eligibility Criteria
                        </h3>

                        <ul className="space-y-5">
                            {[
                                "Students or recent graduates from technical backgrounds.",
                                "Basic understanding of programming and web fundamentals.",
                                "Curiosity to learn, experiment, and improve.",
                                "Availability for a full-time internship duration.",
                            ].map((req, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <div
                                        className="mt-1.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-colors group-hover:bg-teal-500 group-hover:border-teal-500"
                                        style={{ borderColor: theme.primary }}
                                    >
                                        <svg
                                            className="w-3 h-3 transition-colors text-teal-600 group-hover:text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Tracks (Grid/Card Style) */}
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden text-white">
                        {/* Dark theme specific decor */}
                        <div className="absolute bottom-0 right-0 opacity-10">
                            <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                        </div>

                        <h3 className="text-2xl font-bold mb-8 relative z-10">
                            Internship Tracks
                        </h3>

                        <div className="space-y-4 relative z-10">
                            {[
                                { title: "Frontend Development", desc: "React, Next.js, UI basics", icon: "Layout" },
                                { title: "Backend Development", desc: "APIs, databases, logic", icon: "Server" },
                                { title: "UI / UX Design", desc: "Figma, layouts, usability", icon: "Pen" },
                            ].map((role, i) => (
                                <div
                                    key={i}
                                    className="p-4 rounded-xl border border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-teal-500/50 transition-all cursor-default flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center text-teal-400 group-hover:text-white transition-colors">
                                        <Icon name={role.icon} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-100">{role.title}</p>
                                        <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{role.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* OUTCOMES GRID */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3
                            className="text-3xl font-bold mb-4"
                            style={{ color: theme.textDark }}
                        >
                            What you gain
                        </h3>
                        <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {outcomes.map((item, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-500 group-hover:rotate-6"
                                    style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
                                >
                                    <Icon name={item.icon} />
                                </div>
                                <h4 className="font-bold text-lg mb-3" style={{ color: theme.textDark }}>
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA SECTION */}
                <div className="relative rounded-3xl p-12 overflow-hidden text-center group">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Start your learning journey
                        </h2>
                        <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
                            Applications are reviewed on a rolling basis. Limited slots available.
                        </p>
                        <Link to="/apply-internship">
                        <button
                            className="px-10 py-4 rounded-xl font-bold text-white shadow-lg shadow-teal-900/20 transform transition-all hover:scale-105 hover:shadow-teal-500/30 active:scale-95"
                            style={{ backgroundColor: theme.primary }}
                            >
                            Apply for Internship
                        </button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

// SVG Icon Component
const Icon = ({ name }) => {
    const iconProps = { className: "w-6 h-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

    if (name === "Rocket") {
        return (
            <svg {...iconProps}>
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        );
    }
    if (name === "User") {
        return (
            <svg {...iconProps}>
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        );
    }
    if (name === "Briefcase") {
        return (
            <svg {...iconProps}>
                <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        );
    }
    if (name === "Code") {
        return (
            <svg {...iconProps}>
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        );
    }
    // New icons for Tracks
    if (name === "Layout") { // Frontend
        return (
            <svg {...iconProps}>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
        );
    }
    if (name === "Server") { // Backend
        return (
            <svg {...iconProps}>
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        );
    }
    if (name === "Pen") { // Design
        return (
            <svg {...iconProps}>
                <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        );
    }
    return null;
};

export default InternshipProgram;