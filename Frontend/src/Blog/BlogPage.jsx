import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const BLOG_DATA = [
    {
        id: 1,
        slug: "why-athenura-exists",
        category: "Inside Athenura",
        date: "February 28, 2026",
        title: "Why Athenura Exists and How It Actually Prepares You for Work",
        description: "Discover the mission behind Athenura and how our internship ecosystem transforms learners into industry-ready professionals through real projects and mentorship.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        id: 2,
        slug: "athenura-internship-program",
        category: "Internship",
        date: "February 26 2026",
        title: "Athenura Internship Program: From Classroom Learning to Industry Execution",
        description: "Explore how the Athenura Internship Program bridges the gap between academic knowledge and real-world industry experience through structured mentorship, live projects, and placement opportunities.",
        image: "https://ik.imagekit.io/vtfcbjo5c/image.png",
        featured: true
    },
    {
        id: 3,
        slug: "data-science-internship",
        category: "Data Science",
        date: "February 28, 2026",
        title: "Data Science & Analytics Internship Applications Open",
        description: "Gain hands-on experience in data analysis, machine learning, and real-world analytics projects with structured mentorship and portfolio-building opportunities.",
        image: "https://ik.imagekit.io/vtfcbjo5c/data%20science.png",
        featured: false
    },
    {
        id: 4,
        slug: "fullstack-intensive",
        category: "Software",
        date: "February 28, 2026",
        title: "Full-Stack Development Intensive Applications Open",
        description: "Build production-grade web applications with hands-on mentorship, real-world projects, and full-stack deployment experience using modern development workflows.",
        image: "https://ik.imagekit.io/vtfcbjo5c/fullstack1.png",
        featured: false
    },
    {
        id: 5,
        slug: "ui-ux-design-internship",
        category: "Design",
        date: "February 28, 2026",
        title: "UI/UX Design Professional Internship Limited Seats Open",
        description: "Master user research, wireframing, prototyping, and design systems through real-world projects and structured mentorship in Athenura’s UI/UX internship program.",
        image: "https://ik.imagekit.io/vtfcbjo5c/uiux.png",
        featured: false
    },
    {
        id: 6,
        slug: "digital-marketing-mastery",
        category: "Marketing",
        date: "February 28, 2026",
        title: "Digital Marketing Mastery Internship Applications Open",
        description: "Learn SEO, paid advertising, social media strategy, and marketing analytics through real campaign execution and structured mentorship at Athenura.",
        image: "https://ik.imagekit.io/vtfcbjo5c/digital.png",
        featured: false
    },
    {
        id: 7,
        slug: "ace-remote-internship",
        category: "Career",
        date: "February 28, 2026",
        title: "How to Ace Your First Remote Internship",
        description: "A practical guide to excelling in your first remote internship — from communication and productivity to delivering measurable impact and building long-term career opportunities.",
        image: "https://ik.imagekit.io/vtfcbjo5c/howtoace.png",
        featured: false
    },
    {
        id: 8,
        slug: "importance-of-portfolio-grade-projects",
        category: "Education",
        date: "February 28, 2026",
        title: "The Importance of Portfolio-Grade Projects",
        description: "Why real-world, portfolio-grade projects matter more than certificates — and how building complete, measurable work can dramatically improve your career opportunities.",
        image: "https://ik.imagekit.io/vtfcbjo5c/portfolio.png",
        featured: false
    },
];

const BlogContent = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const [loading, setLoading] = useState(false);

    // Filter logic
    const featuredBlogs = BLOG_DATA.filter(post => post.featured);
    const allArticles = BLOG_DATA.filter(post => !post.featured);

    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleCount(prev => prev + 3);
            setLoading(false);
        }, 600);
    };

    return (
        <div className="bg-white min-h-screen font-sans text-black">
            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* --- SECTION: FEATURED BLOGS --- */}
                <div className="mb-24">
                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-3">
                            <h2 className="text-4xl font-black uppercase tracking-tight text-black">
                                Featured <span className="text-[#28A3B9]">Insights</span>
                            </h2>
                            <div className="h-[2px] flex-grow bg-[#E9F5F8]" />
                        </div>
                        <p className="text-gray-500 max-w-2xl text-lg font-medium leading-relaxed">
                            A curated selection of standout articles shaping conversations and ideas.
                            Thoughtfully chosen to keep you informed, inspired, and ahead.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {featuredBlogs.map((post) => (
                            <motion.div
                                key={post.id}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-3xl bg-[#E9F5F8] h-[500px]"
                            >
                                {/* Full Card Link */}
                                <Link to={`/blogs/${post.slug}`}>
                                    <img
                                        src={post.image}
                                        className="absolute inset-0 w-full h-full object-fit mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                                        alt={post.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 p-10 text-white">
                                        <span className="bg-[#28A3B9] px-3 py-1 text-xs font-bold rounded-full mb-4 inline-block tracking-widest uppercase">
                                            {post.category}
                                        </span>
                                        <h3 className="text-3xl font-bold leading-tight group-hover:text-[#E9F5F8] transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="mt-4 text-gray-200 line-clamp-2 max-w-lg">{post.description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- SECTION: ALL ARTICLES --- */}
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-3xl font-bold uppercase tracking-tight text-[#1E7A86]">
                            All <span className="text-black">Articles</span>
                        </h2>
                        <div className="h-[1px] flex-grow bg-gray-100" />
                    </div>
                    <p className="text-gray-500 max-w-2xl mb-5 text-lg font-medium leading-relaxed">
                        A collection of thoughtfully written articles covering insights, trends, and expertise.
                        Read, learn, and stay updated with content that truly makes an impact.
                    </p>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        <AnimatePresence>
                            {allArticles.slice(0, visibleCount).map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (index % 6) * 0.1 }}
                                    className="group"
                                >
                                    <Link to={`/blogs/${post.slug}`}>
                                        <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video bg-gray-100">
                                            <img
                                                src={post.image}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                alt={post.title}
                                            />
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm">
                                                <p className="text-[10px] font-black uppercase text-[#1E7A86] tracking-widest">{post.category}</p>
                                            </div>
                                        </div>
                                    </Link>

                                    <p className="text-xs font-medium text-gray-400 mb-2">{post.date}</p>

                                    <Link to={`/blogs/${post.slug}`}>
                                        <h4 className="text-xl font-bold text-black mb-3 group-hover:text-[#28A3B9] transition-colors leading-snug">
                                            {post.title}
                                        </h4>
                                    </Link>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.description}
                                    </p>

                                    <Link
                                        to={`/blogs/${post.slug}`}
                                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1E7A86] group-hover:gap-4 transition-all"
                                    >
                                        Read Story
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                    </Link>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* --- LOAD MORE ACTION --- */}
                {visibleCount < allArticles.length && (
                    <div className="mt-24 flex justify-center">
                        <button
                            onClick={handleLoadMore}
                            disabled={loading}
                            className="group relative px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] overflow-hidden border-2 border-[#1E7A86] text-black transition-all duration-300 hover:text-white cursor-pointer"
                        >
                            <span className="relative z-10">
                                {loading ? "FETCHING..." : "Load More Articles"}
                            </span>
                            <span className="absolute inset-0 bg-[#1E7A86] rounded-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogContent;