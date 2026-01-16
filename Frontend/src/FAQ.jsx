import React, { useState, useRef } from "react";
import { FaGraduationCap, FaCheckCircle, FaTasks, FaShieldAlt, FaChevronDown, FaChevronUp, FaEnvelope, FaRocket, FaSearch, FaExternalLinkAlt } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";

const FaqPage = () => {
    const theme = {
        primary: "#1E90A8",
        primaryLight: "#E8F8FA",
        textDark: "#111827",
        textGray: "#4B5563",
        bg: "#F8FBFC",
        white: "#FFFFFF",
        border: "#E5E7EB",
        gradient: "linear-gradient(135deg, #1E90A8 0%, #156A7A 100%)",
    };

    // Content derived from your Internship & Privacy Policy PDFs
    const faqData = [
        {
            category: "Internship Program Overview",
            icon: <FaGraduationCap />,
            questions: [
                {
                    q: "Is the internship paid?",
                    a: "Internships at Athenura are unpaid and do not include any salary, wages, or monetary stipend. However, we provide significant non-monetary benefits including structured training, mentorship, and real-world project exposure."
                },
                {
                    q: "Does the internship guarantee a job offer?",
                    a: "Successful completion of the internship does not guarantee permanent employment or a job placement. Any future employment offers are separate and are explicitly communicated in writing by the company."
                },
                {
                    q: "Will I receive a certificate?",
                    a: "Yes. An Internship Completion Certificate is issued upon successful completion of the full duration, satisfactory performance, and compliance with all company policies. Failure to meet these conditions may result in the certificate not being issued."
                },
                {
                    q: "Can the internship be done remotely?",
                    a: "Yes, internships may be offered in remote format depending on the project requirements and company policy."
                },
                {
                    q: "What is the duration of the internship?",
                    a: "The internship duration is defined in your official offer letter and depends on the specific role. Extensions or early terminations are at the sole discretion of Athenura."
                }
            ]
        },
        {
            category: "Eligibility & Selection",
            icon: <FaCheckCircle />,
            questions: [
                {
                    q: "Who is eligible to apply?",
                    a: "Internship opportunities are open to students enrolled in a recognized educational institution and fresh graduates seeking practical industry experience."
                },
                {
                    q: "How are interns selected?",
                    a: "Selection is based on academic or professional qualifications, relevant skills, demonstrated interest, and project requirements. Athenura reserves the right to accept or reject applications at its discretion."
                }
            ]
        },
        {
            category: "Roles & Responsibilities",
            icon: <FaTasks />,
            questions: [
                {
                    q: "Will I have a mentor?",
                    a: "Yes. Each intern may be assigned a mentor or supervisor who provides guidance, oversight, and regular feedback throughout the internship period."
                },
                {
                    q: "What are my responsibilities?",
                    a: "Interns are expected to complete assigned tasks responsibly, meet deadlines, maintain professionalism, and comply with all company policies and instructions."
                },
                {
                    q: "What happens if I need to leave early?",
                    a: "Interns may request early termination by providing reasonable written notice. Approval is subject to management discretion and completion of exit formalities."
                }
            ]
        },
        {
            category: "Data Privacy & Security",
            icon: <FaShieldAlt />,
            questions: [
                {
                    q: "Does your website use cookies?",
                    a: "No. Athenura does not use cookies, tracking pixels, or behavioral tracking tools. You can browse our website without cookies being placed on your device."
                },
                {
                    q: "What personal information do you collect?",
                    a: "We collect only the information you voluntarily provide, such as your name, email address, and resume, for application evaluation or responding to inquiries."
                },
                {
                    q: "Is my data shared with third parties?",
                    a: "We do not share personal information with third parties unless required by law or necessary for internship-related verification with your consent."
                },
                {
                    q: "How secure is my data?",
                    a: "We use encrypted systems and strict access controls to protect your data. However, no electronic transmission or storage system can be guaranteed to be 100% secure."
                }
            ]
        }
    ];

    const [openItems, setOpenItems] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const sectionRefs = useRef([]);

    const toggleItem = (categoryIndex, questionIndex) => {
        const key = `${categoryIndex}-${questionIndex}`;
        setOpenItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };



    const filteredFaqData = faqData.map(section => ({
        ...section,
        questions: searchTerm ? section.questions.filter(q => 
            q.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
            q.a.toLowerCase().includes(searchTerm.toLowerCase())
        ) : section.questions
    })).filter(section => section.questions.length > 0);

    return (
        <div className="min-h-screen font-sans relative overflow-hidden" style={{ backgroundColor: theme.bg }}>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full opacity-5 blur-[120px]" style={{ backgroundColor: theme.primary }}></div>
                <div className="absolute bottom-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-5 blur-[100px]" style={{ backgroundColor: theme.textDark }}></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-3 blur-[80px]" style={{ backgroundColor: theme.primary }}></div>
                
                {/* Animated floating elements */}
                <div className="absolute top-20 left-10 w-4 h-4 rounded-full animate-float hidden sm:block" style={{ backgroundColor: theme.primary, animationDelay: '0s' }}></div>
                <div className="absolute top-40 right-20 w-3 h-3 rounded-full animate-float hidden sm:block" style={{ backgroundColor: theme.primary, animationDelay: '1s' }}></div>
                <div className="absolute bottom-40 left-1/3 w-2 h-2 rounded-full animate-float hidden sm:block" style={{ backgroundColor: theme.primary, animationDelay: '2s' }}></div>
            </div>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight px-2" style={{ color: theme.textDark }}>
                            Answers to Your
                            <br className="hidden sm:block" />
                            <span className="relative inline-block mt-1 sm:mt-0">
                                <span className="relative z-10 text-transparent bg-clip-text" style={{ backgroundImage: theme.gradient }}>
                                    Questions
                                </span>
                                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 opacity-20" style={{ backgroundColor: theme.primary }}></span>
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto mb-6 md:mb-10 px-4" style={{ color: theme.textGray }}>
                            Everything you need to know about our internship program, policies, and privacy standards.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-3xl mx-auto px-4 sm:px-0">
                            <div className="relative">
                                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5" style={{ color: theme.textGray }} />
                                <input
                                    type="text"
                                    placeholder="Search for questions or keywords..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 md:pl-14 md:pr-5 py-3 md:py-4 rounded-xl md:rounded-2xl border shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 text-sm md:text-base"
                                    style={{ 
                                        backgroundColor: theme.white,
                                        borderColor: theme.border,  
                                        color: theme.textDark,
                                        focusRingColor: theme.primary
                                    }}
                                />
                                {searchTerm && (
                                    <button
                                        onClick={() => setSearchTerm("")}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs font-medium px-2 py-1 rounded-full"
                                        style={{ color: theme.textGray, backgroundColor: theme.primaryLight }}
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>
                            <p className="text-xs sm:text-sm mt-2 md:mt-3 text-center" style={{ color: theme.textGray }}>
                                {searchTerm ? `Found ${filteredFaqData.reduce((acc, section) => acc + section.questions.length, 0)} results` : 'Type to search across all FAQs'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FAQ CONTENT --- */}
            <section className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-12 relative">
                <div className="max-w-8xl mx-auto">

                    {/* FAQ Sections */}
                    <div className="space-y-6 md:space-y-12">
                        {filteredFaqData.map((section, idx) => (
                            <div 
                                key={idx} 
                                ref={el => sectionRefs.current[idx] = el}
                                className="animate-fade-in-up bg-white rounded-2xl md:rounded-3xl border shadow-lg overflow-hidden"
                                style={{ animationDelay: `${idx * 150}ms` }}
                            >
                                {/* Category Header */}
                                <div className="p-4 sm:p-6 md:p-8 border-b" style={{ backgroundColor: theme.primaryLight, borderColor: theme.border }}>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className="p-2 sm:p-3 md:p-4 rounded-xl md:rounded-2xl bg-white shadow-md">
                                                <span className="text-xl md:text-2xl" style={{ color: theme.primary }}>
                                                    {section.icon}
                                                </span>
                                            </div>
                                            <div>
                                                <h2 className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: theme.textDark }}>{section.category}</h2>
                                                <p className="text-xs sm:text-sm" style={{ color: theme.textGray }}>{section.questions.length} questions in this section</p>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => {
                                                const allKeys = section.questions.map((_, qIdx) => `${idx}-${qIdx}`);
                                                const allOpen = allKeys.every(key => openItems[key]);
                                                const newState = {};
                                                allKeys.forEach(key => newState[key] = !allOpen);
                                                setOpenItems(prev => ({ ...prev, ...newState }));
                                            }}
                                            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:shadow transition-all duration-300 self-start sm:self-auto"
                                            style={{ backgroundColor: theme.white, color: theme.primary, border: `1px solid ${theme.border}` }}
                                        >
                                            {section.questions.every((_, qIdx) => openItems[`${idx}-${qIdx}`]) ? 'Collapse All' : 'Expand All'}
                                        </button>
                                    </div>
                                </div>

                                {/* Questions */}
                                <div className="divide-y" style={{ borderColor: theme.border }}>
                                    {section.questions.map((item, qIdx) => {
                                        const isOpen = openItems[`${idx}-${qIdx}`];
                                        return (
                                            <div key={qIdx} className="transition-all duration-300 hover:bg-gray-50">
                                                <button
                                                    onClick={() => toggleItem(idx, qIdx)}
                                                    className="w-full flex items-center justify-between p-4 sm:p-6 md:p-8 text-left focus:outline-none group"
                                                >
                                                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                                                        <div className={`mt-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} style={{ backgroundColor: isOpen ? theme.primaryLight : 'transparent' }}>
                                                            {isOpen ? 
                                                                <FaChevronUp className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: theme.primary }} /> : 
                                                                <FaChevronDown className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: theme.textGray }} />
                                                            }
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 group-hover:translate-x-1 transition-transform duration-300" style={{ color: isOpen ? theme.primary : theme.textDark }}>
                                                                {item.q}
                                                            </h3>
                                                            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 mt-2 sm:mt-4' : 'max-h-0 opacity-0'}`}>
                                                                <p className="leading-relaxed pr-2 sm:pr-8 text-xs sm:text-sm md:text-base" style={{ color: theme.textGray }}>
                                                                    {item.a}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="shrink-0 ml-2 sm:ml-4">
                                                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-teal-50 scale-110' : 'bg-gray-50 group-hover:scale-110'}`}>
                                                            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-teal-500 scale-150' : 'bg-gray-400'}`}></div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Support CTA */}
                    <div className="mt-12 md:mt-20 relative overflow-hidden rounded-2xl md:rounded-3xl" style={{ backgroundColor: theme.white, border: `1px solid ${theme.border}` }}>
                        <div className="absolute top-0 left-0 w-full h-1" style={{ background: theme.gradient }}></div>
                        <div className="p-6 sm:p-8 md:p-12 text-center relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 border text-xs md:text-sm" style={{ backgroundColor: theme.primaryLight, borderColor: theme.primary }}>
                                <FaRocket className="w-3 h-3 md:w-4 md:h-4" style={{ color: theme.primary }} />
                                <span className="font-medium" style={{ color: theme.primary }}>Need More Help?</span>
                            </div>
                            
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4" style={{ color: theme.textDark }}>Can't find what you're looking for?</h3>
                            <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-2" style={{ color: theme.textGray }}>
                                Our dedicated support team is ready to help you with any specific questions about our internship program.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                                <a
                                    href="mailto:hr.athenura@gmail.com"
                                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group text-sm sm:text-base w-full sm:w-auto"
                                    style={{ background: theme.gradient }}
                                >
                                    <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                                    Contact Support Team
                                    <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                                <a
                                    href="/internship-policy"
                                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto"
                                    style={{ backgroundColor: theme.white, borderColor: theme.border, color: theme.textDark }}
                                >
                                    View Full Internship Policy
                                </a>
                            </div>
                            
                            <p className="text-xs sm:text-sm mt-6 md:mt-8 px-2" style={{ color: theme.textGray }}>
                                Typically responds within 24 hours • Available Monday-Friday, 9AM-6PM
                            </p>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 opacity-5" style={{ backgroundColor: theme.primary }}></div>
                        <div className="absolute top-0 left-0 w-16 h-16 sm:w-32 sm:h-32 opacity-5" style={{ backgroundColor: theme.primary }}></div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-fade-in-up {
                    opacity: 0;
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                /* Responsive font size adjustments */
                @media (max-width: 640px) {
                    .text-3xl {
                        font-size: 1.875rem;
                        line-height: 2.25rem;
                    }
                    .text-4xl {
                        font-size: 2.25rem;
                        line-height: 2.5rem;
                    }
                }
                
                @media (max-width: 480px) {
                    .text-3xl {
                        font-size: 1.75rem;
                        line-height: 2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default FaqPage;