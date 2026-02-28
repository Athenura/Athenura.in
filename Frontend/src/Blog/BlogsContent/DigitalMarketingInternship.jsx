import React from 'react';
import { motion } from 'framer-motion';
import {
    FaLinkedin,
    FaTwitter,
    FaLink,
    FaStore,
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
    FaRegUser,
    FaSearch,
    FaChartBar,
    FaAd,
    FaBullhorn,
    FaEnvelope,
    FaGoogle,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaPencilAlt,
    FaChartPie,
    FaTachometerAlt,
    FaCube,
    FaShareAlt,
    FaHashtag,
    FaCamera,
    FaPlayCircle,
    FaNewspaper,
    FaRss,
    FaMousePointer,
    FaFilter,
    FaSlidersH,
    FaLightbulb,
    FaThumbsUp,
    FaShare
} from 'react-icons/fa';
import handbook from "../../../public/handbook.pdf"
import { Link } from "react-router-dom"

const DigitalMarketingInternship = () => {

    const blogUrl = typeof window !== 'undefined' ? window.location.href : '';
    const blogTitle = "Applications Open Digital Marketing Mastery Internship at Athenura";

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
                        src="https://ik.imagekit.io/vtfcbjo5c/digital.png"
                        alt="Digital Marketing Mastery Internship"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/80 to-transparent" />
                </div>
                <div className="absolute inset-0 z-0 block lg:hidden">
                    <img
                        src="https://ik.imagekit.io/vtfcbjo5c/digitalmobile.png"
                        alt="Digital Marketing Mastery Internship"
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
                            Digital Marketing <br />
                            <span className="text-[#28A3B9]">Mastery</span> Internship
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                            Transform from learner to execution-ready digital marketer. Plan, launch, optimize, and scale campaigns across platforms with real data and measurable results.
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
                            Marketing today is no longer guesswork — it is strategy powered by data, creativity guided by analytics, and execution measured in real numbers. The Digital Marketing Mastery Internship at Athenura is built to transform learners into execution-ready digital marketers who can plan, launch, optimize, and scale campaigns across platforms.
                        </p>
                        <p className="text-gray-600 mt-4">
                            This is not just about learning tools. It's about understanding funnels, audiences, positioning, performance metrics, and how real businesses grow online.
                        </p>
                    </section>

                    {/* Why This Internship Matters */}
                    <div className="bg-black text-white p-10 rounded-3xl my-12">
                        <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                            <FaRocket className="text-[#28A3B9]" /> Why this internship matters
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Businesses today compete digitally — whether through search engines, social media, content marketing, or paid ads. Yet many aspiring marketers only understand theory: they know terms like SEO, CPC, CTR, ROAS — but have never managed live campaigns or optimized performance under deadlines. This internship closes that gap. You won't just study digital marketing — you will execute it, analyze results, and iterate like real marketing teams do.
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
                            <h4 className="font-black text-lg mb-2">Students & Graduates</h4>
                            <p className="text-sm text-gray-600">Interested in building structured marketing careers with real campaign experience</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100">
                            <FaPaintBrush className="text-4xl text-pink-500 mb-4" />
                            <h4 className="font-black text-lg mb-2">Content Creators</h4>
                            <p className="text-sm text-gray-600">Wanting structured growth strategies and audience building frameworks</p>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
                            <FaStore className="text-4xl text-blue-500 mb-4" />
                            <h4 className="font-black text-lg mb-2">Entrepreneurs</h4>
                            <p className="text-sm text-gray-600">Who want to understand performance marketing and business growth online</p>
                        </div>
                    </div>

                    <p className="text-lg font-medium text-[#28A3B9] italic mb-12">
                        If you are curious about how brands grow online — and you're ready to measure everything — this program is for you.
                    </p>

                    {/* What You'll Learn */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">02</span>
                        What You'll Learn
                    </h2>

                    <p className="mb-8">The Digital Marketing Mastery Internship blends strategy, creativity, analytics, and platform execution.</p>

                    {/* SEO Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                                <FaSearch className="text-2xl text-green-600" />
                            </div>
                            <h3 className="text-2xl font-black">Search Engine Optimization (SEO)</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: FaSearch, text: "Keyword research & search intent mapping", color: "text-green-500" },
                                { icon: FaFileAlt, text: "On-page and technical SEO fundamentals", color: "text-blue-500" },
                                { icon: FaPencilAlt, text: "Content optimization strategies", color: "text-purple-500" },
                                { icon: FaLink, text: "Backlink building and authority growth", color: "text-orange-500" },
                                { icon: FaChartLine, text: "Analytics tracking and ranking performance evaluation", color: "text-red-500" }
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

                    {/* Performance Marketing Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <FaAd className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-black">Performance Marketing (Paid Ads)</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: FaFacebook, text: "Meta (Facebook & Instagram) Ads fundamentals", color: "text-blue-600" },
                                { icon: FaGoogle, text: "Google Ads campaign structure", color: "text-red-500" },
                                { icon: FaGoogle, text: "Audience targeting & retargeting", color: "text-purple-500" },
                                { icon: FaChartPie, text: "Budget allocation & ROI optimization", color: "text-green-500" },
                                { icon: FaPencilAlt, text: "Ad creatives & copy testing", color: "text-orange-500" }
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

                    {/* Social Media Strategy Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center">
                                <FaShareAlt className="text-2xl text-pink-600" />
                            </div>
                            <h3 className="text-2xl font-black">Social Media Strategy</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: FaHashtag, text: "Brand positioning on Instagram & LinkedIn", color: "text-purple-500" },
                                { icon: FaCalendarAlt, text: "Content calendars and scheduling systems", color: "text-green-500" },
                                { icon: FaChartLine, text: "Growth strategy & engagement loops", color: "text-blue-500" },
                                { icon: FaChartBar, text: "Analytics interpretation", color: "text-orange-500" }
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

                    {/* Content Marketing Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                                <FaNewspaper className="text-2xl text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-black">Content Marketing & Copywriting</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: FaPencilAlt, text: "Persuasive copywriting frameworks", color: "text-purple-500" },
                                { icon: FaFilter, text: "Funnel-based content planning", color: "text-green-500" },
                                { icon: FaRss, text: "Blog strategy & SEO content alignment", color: "text-blue-500" },
                                { icon: FaMousePointer, text: "Landing page optimization", color: "text-orange-500" }
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

                    {/* Marketing Analytics Section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                                <FaChartBar className="text-2xl text-red-600" />
                            </div>
                            <h3 className="text-2xl font-black">Marketing Analytics</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: FaChartLine, text: "Funnel tracking & conversion metrics", color: "text-purple-500" },
                                { icon: FaGoogle, text: "Google Analytics basics", color: "text-green-500" },
                                { icon: FaSlidersH, text: "KPI dashboards", color: "text-blue-500" },
                                { icon: FaFileAlt, text: "Campaign performance reporting", color: "text-orange-500" }
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

                    {/* Project-First Learning Approach */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">03</span>
                        Project-First Learning Approach
                    </h2>

                    <p className="mb-6">This internship is built around live implementation, not mock exercises.</p>

                    <div className="space-y-6 my-10">
                        {[
                            { icon: FaSearch, title: "SEO Blog Strategy", desc: "Build and optimize real SEO blog strategies with keyword research, content optimization, and ranking tracking." },
                            { icon: FaAd, title: "Paid Ad Campaigns", desc: "Create and run paid ad campaigns with monitored budgets, audience testing, and performance optimization." },
                            { icon: FaShareAlt, title: "Content Calendars", desc: "Design and execute content calendars with growth experiments and engagement analysis." },
                            { icon: FaChartBar, title: "Performance Reports", desc: "Produce marketing performance reports for leadership showing measurable impact and ROI." }
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
                        Every intern builds a marketing portfolio with case studies showing measurable impact.
                    </p>

                    {/* Mentorship Section */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">04</span>
                        Mentorship & Review Structure
                    </h2>

                    <p className="mb-6">Mentorship ensures quality and professional growth:</p>

                    <div className="bg-gradient-to-r from-[#28A3B9] to-black text-white p-10 rounded-3xl my-10">
                        <ul className="space-y-4">
                            {[
                                "Weekly campaign review sessions",
                                "Copy critique & performance audits",
                                "Ad creative feedback loops",
                                "Strategy improvement discussions",
                                "Practical feedback on what worked, what failed, and how to improve conversion metrics"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-white text-opacity-70 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Program Structure */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8 flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#28A3B9] rounded-full flex items-center justify-center text-white text-sm">05</span>
                        Program Structure
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 my-10">
                        {[
                            { icon: FaClock, label: "Duration", value: "3–6 Months" },
                            { icon: FaMapMarkerAlt, label: "Mode", value: "Remote" },
                            { icon: FaCalendarAlt, label: "Commitment", value: "Structured deadlines" }
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

                    <p className="text-center font-medium mb-8">
                        The internship mirrors real marketing departments — with timelines, KPIs, and measurable deliverables.
                    </p>

                    {/* Certification & Outcomes */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Certification & Outcomes</h2>

                    <div className="grid md:grid-cols-2 gap-6 my-10">
                        {[
                            { title: "Internship Certificate", desc: "Official program completion certificate", icon: FaFileAlt },
                            { title: "Letter of Recommendation", desc: "Performance-based for top contributors", icon: FaAward },
                            { title: "Marketing Portfolio", desc: "Case studies with measurable campaign results", icon: FaBriefcase },
                            { title: "Referral Opportunities", desc: "Internal referrals for high performers", icon: FaUsers }
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

                    <p className="mb-8">Graduates walk away with:</p>

                    <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                        <li>Campaign management experience</li>
                        <li>Performance analysis skills</li>
                        <li>Copywriting & content strategy frameworks</li>
                        <li>Platform confidence across SEO & paid ads</li>
                        <li>Interview readiness for marketing roles</li>
                    </ul>

                    {/* Placement & Interview Preparation */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Placement & Interview Preparation</h2>

                    <p className="mb-6">The program includes:</p>

                    <ul className="list-disc pl-6 mb-12 space-y-2 text-gray-700">
                        <li>Resume & portfolio optimization</li>
                        <li>Mock marketing interviews</li>
                        <li>Case-study presentation training</li>
                        <li>Referral pathways for top performers</li>
                    </ul>

                    <p className="text-gray-600 mb-12">
                        We focus on preparing interns to speak about impact metrics, not just responsibilities.
                    </p>

                    {/* What Makes This Program Different */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">What Makes This Program Different</h2>

                    <div className="bg-black text-white p-10 rounded-3xl my-10">
                        <p className="text-2xl font-light mb-8">The Digital Marketing Mastery Internship at Athenura is:</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                "Execution-driven",
                                "KPI-focused",
                                "Strategy-backed",
                                "Mentorship-supported",
                                "Portfolio-oriented"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <FaCheckCircle className="text-[#28A3B9]" />
                                    <span>✔ {item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-gray-300">
                            We train marketers who understand both creativity and numbers — because modern marketing requires both.
                        </p>
                    </div>

                    {/* Who This Program Is NOT For */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Who This Program Is NOT For</h2>

                    <div className="bg-red-50 border border-red-100 p-8 rounded-3xl my-8">
                        <p className="text-gray-800 mb-4">
                            This internship is not for those looking for a passive certificate.
                        </p>
                        <p className="text-gray-800">
                            It is for those ready to:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                            <li>Test ideas</li>
                            <li>Analyze failures</li>
                            <li>Optimize performance</li>
                            <li>Take ownership of results</li>
                        </ul>
                    </div>

                    {/* Final Word */}
                    <h2 className="text-3xl font-black uppercase tracking-tight text-black mt-16 mb-8">Final Word</h2>

                    <div className="relative p-8 bg-gray-50 rounded-3xl overflow-hidden mb-12">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#28A3B9] opacity-5 rounded-full -mr-20 -mt-20"></div>
                        <p className="text-lg leading-relaxed relative z-10">
                            Digital marketing is one of the fastest-growing career paths globally — but only those who can demonstrate measurable growth stand out. The Digital Marketing Mastery Internship at Athenura is designed to transform you from a learner into a performance-driven marketer who understands growth systems, analytics, and execution discipline. If you are ready to build campaigns, analyze metrics, and create real impact — this is where your journey begins.
                        </p>
                    </div>

                    {/* Final CTA */}
                    <div className="bg-black p-16 rounded-[2rem] text-center text-white mt-16 mb-8 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 left-10 w-40 h-40 border-2 border-[#28A3B9] rounded-full"></div>
                            <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter">Master Digital Marketing</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                                Join the Digital Marketing Mastery Internship at Athenura and learn to build campaigns, analyze metrics, and create real impact. With mentorship, real projects, and career support, you'll graduate with the portfolio and skills to launch your marketing career.
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
                                    <FaUsers className="text-[#28A3B9]" />
                                    <div>
                                        <p className="text-xs text-gray-400">Mentorship</p>
                                        <p className="font-bold">Weekly Campaign Reviews</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaGoogle className="text-[#28A3B9]" />
                                    <div>
                                        <p className="text-xs text-gray-400">Focus Areas</p>
                                        <p className="font-bold">SEO, Paid Ads, Analytics</p>
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
                                "The hands-on campaign experience was invaluable. I went from theory to running actual ad campaigns with real budgets. The mentorship helped me understand what metrics actually matter for business growth."
                            </p>
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className="font-black text-sm">Rahul M.</p>
                                    <p className="text-xs text-gray-500">Marketing Associate, Class of '25</p>
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

export default DigitalMarketingInternship;