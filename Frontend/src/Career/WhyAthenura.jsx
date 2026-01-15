import React from "react";

const WhyAthenura = () => {
    const theme = {
        primary: "#1E90A8",
        primaryLight: "#E8F8FA",
        textDark: "#111827",
        textGray: "#4B5563",
        bg: "#FFFFFF",
    };

    const perks = [
        {
            icon: "Globe",
            title: "Flexible Work Culture",
            desc: "Work remotely or in a hybrid setup with flexible hours focused on productivity and growth."
        },
        {
            icon: "Zap",
            title: "Modern & Scalable Tech",
            desc: "Build real-world products using React, Next.js, AI tools, and modern cloud technologies."
        },
        {
            icon: "Heart",
            title: "Supportive Team Environment",
            desc: "Collaborate with mentors and peers who value learning, feedback, and personal growth."
        },
        {
            icon: "Book",
            title: "Continuous Learning",
            desc: "Access learning resources, mentorship, and hands-on projects to accelerate your career."
        }
    ];


    return (
        <section className="py-24 px-6 lg:px-12" style={{ backgroundColor: theme.bg }}>
            <div className="max-w-8xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: theme.textDark }}>
                        Why engineers choose <span style={{ color: theme.primary }}>Athenura</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: theme.textGray }}>
                        We are building a company where the best talent in the world can do their life's best work. No red tape, just impact.
                    </p>
                </div>

                {/* BENTO GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

                    {/* Card 1: The Big Feature (Spans 2 columns) */}
                    <div
                        className="md:col-span-2 rounded-3xl p-8 md:p-12 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden"
                        style={{ backgroundColor: "#F8FBFC", borderColor: "rgba(30, 144, 168, 0.1)" }}
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-white" style={{ backgroundColor: theme.primary }}>
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: theme.textDark }}>Ownership from Day One</h3>
                            <p className="text-lg leading-relaxed max-w-md" style={{ color: theme.textGray }}>
                                At Athenura, you don't just write code; you define products. Engineers here are involved in the roadmap, design, and deployment. You ship features that users touch within your first week.
                            </p>
                        </div>

                        {/* Decorative Background Graphic */}
                        <div className="absolute right-[-20px] bottom-[-20px] w-64 h-64 rounded-full opacity-10 transition-transform group-hover:scale-110 duration-700" style={{ backgroundColor: theme.primary }}></div>
                        <div className="absolute right-10 bottom-10 opacity-30 group-hover:opacity-100 transition-all duration-500 transform translate-x-10 group-hover:translate-x-0">
                            {/* Abstract UI representation */}
                            <div className="w-48 h-32 bg-white rounded-lg shadow-lg border border-gray-100 p-3 space-y-2">
                                <div className="w-1/3 h-2 rounded bg-gray-200"></div>
                                <div className="w-full h-16 rounded bg-blue-50"></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Vertical Card (Growth) */}
                    <div
                        className="md:col-span-1 rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
                        style={{ backgroundColor: theme.textDark }}
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-white/10 text-white backdrop-blur-md">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                        />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-white">
                                    Accelerated Growth
                                </h3>

                                <p className="text-gray-300 leading-relaxed">
                                    Athenura is growing as a learning-driven startup. This means early
                                    responsibility, faster skill development, and real opportunities to
                                    take ownership of meaningful work.
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-sm font-bold text-white uppercase tracking-wider">
                                    Growth Pathways
                                </p>
                                <p className="text-lg font-semibold text-white mt-2">
                                    Intern → Contributor → Team Lead
                                </p>
                            </div>
                        </div>

                        {/* Gradient Overlay */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                            style={{
                                background: `linear-gradient(to top right, ${theme.primary}, transparent)`,
                            }}
                        ></div>
                    </div>


                    {/* Card 3: Horizontal Card (Balance) - Spans full width on mobile, 3 on desktop */}
                    <div
                        className="md:col-span-3 rounded-3xl p-8 md:p-10 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col md:flex-row items-center gap-8 md:gap-16"
                        style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(0,0,0,0.05)" }}
                    >
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: theme.textDark }}>
                                Growth with Balance
                            </h3>
                            <p className="text-lg leading-relaxed mb-6" style={{ color: theme.textGray }}>
                                At Athenura, we believe sustainable growth comes from clarity and consistency.
                                We encourage structured work hours, focused learning time, and a culture that
                                respects personal boundaries while building impactful products.
                            </p>
                            <div className="flex gap-4 flex-wrap">
                                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-50 text-green-700">
                                    Flexible Work Hours
                                </span>
                                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-50 text-blue-700">
                                    Learning-First Culture
                                </span>
                            </div>
                        </div>

                        {/* Visual representation of focus & learning blocks */}
                        <div className="flex-1 w-full max-w-sm">
                            <div className="grid grid-cols-7 gap-2 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                {[...Array(14)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="h-8 rounded-md transition-all duration-500 hover:scale-110 bg-white shadow-sm"
                                        style={{
                                            backgroundColor:
                                                i === 3 || i === 10
                                                    ? theme.primary
                                                    : i === 6
                                                        ? "#E0F2FE"
                                                        : "#FFFFFF"
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* PERKS LIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {perks.map((perk, index) => (
                        <div key={index} className="flex flex-col items-start p-4">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors"
                                style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                            >
                                <Icon name={perk.icon} />
                            </div>
                            <h4 className="font-bold text-lg mb-2" style={{ color: theme.textDark }}>{perk.title}</h4>
                            <p className="text-sm leading-relaxed" style={{ color: theme.textGray }}>{perk.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

// Simple Icon Component to keep code clean
const Icon = ({ name }) => {
    if (name === "Globe") return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    if (name === "Zap") return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    if (name === "Heart") return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
    if (name === "Book") return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
    return null;
};

export default WhyAthenura;