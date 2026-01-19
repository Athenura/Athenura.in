// WhyUsSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const WhyUsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeBenefit, setActiveBenefit] = useState(0);
    const counterRefs = useRef([]);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBenefit((prev) => (prev + 1) % benefits.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // Counter Animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        const target = +counter.getAttribute('data-target');
                        const suffix = counter.getAttribute('data-suffix');
                        const increment = target / 100;
                        let current = 0;

                        const updateCounter = () => {
                            if (current < target) {
                                current += increment;
                                counter.textContent = Math.ceil(current) + suffix;
                                setTimeout(updateCounter, 20);
                            } else {
                                counter.textContent = target + suffix;
                            }
                        };

                        updateCounter();
                        observer.unobserve(counter);
                    }
                });
            },
            { threshold: 0.5 }
        );

        counterRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const benefits = [
        {
            id: 1,
            title: "Deep Technical Expertise",
            description: "Our team of senior engineers and architects bring 10+ years of experience solving complex technical challenges across industries.",
            features: [
                "Enterprise-grade architecture design",
                "Scalable cloud infrastructure",
                "Advanced AI/ML implementation",
                "Legacy system modernization"
            ],
            gradient: "from-[#1E7A86] to-[#A7DADC]"
        },
        {
            id: 2,
            title: "Strategic Problem-Solving",
            description: "We don't just write code—we architect solutions that drive business growth and competitive advantage.",
            features: [
                "Business-first technology approach",
                "ROI-focused solution design",
                "Future-proof architecture planning",
                "Performance optimization"
            ],
            gradient: "from-[#2E2E2E] to-[#1E7A86]"
        },
        {
            id: 3,
            title: "Client Partnership Model",
            description: "We become an extension of your team, ensuring seamless collaboration and alignment with your business goals.",
            features: [
                "Dedicated technical leadership",
                "Transparent communication",
                "Agile delivery methodology",
                "Ongoing support & maintenance"
            ],
            gradient: "from-[#A7DADC] to-[#1E7A86]"
        },
        {
            id: 4,
            title: "Innovation & Future-Readiness",
            description: "We build solutions that evolve with your business, leveraging cutting-edge technologies for sustainable growth.",
            features: [
                "Modern tech stack adoption",
                "Scalable architecture patterns",
                "Continuous innovation culture",
                "Proactive technology upgrades"
            ],
            gradient: "from-[#1E7A86] to-[#2E2E2E]"
        }
    ];

    const competitiveAdvantages = [
        {
            id: 1,
            title: "Senior Technical Leadership",
            description: "Every project is led by senior architects with 10+ years of enterprise experience",
            icon: (
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] rounded-xl"></div>
                    <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-1 h-3 bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] mx-0.5"></div>
                        <div className="w-1 h-4 bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] mx-0.5"></div>
                        <div className="w-1 h-5 bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] mx-0.5"></div>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "Proven Methodology",
            description: "Structured delivery approach ensuring quality, timeline, and budget adherence",
            icon: (
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2E2E2E] to-[#1E7A86] rounded-xl"></div>
                    <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-4 h-1 bg-gradient-to-r from-[#2E2E2E] to-[#1E7A86] my-0.5"></div>
                        <div className="w-5 h-1 bg-gradient-to-r from-[#2E2E2E] to-[#1E7A86] my-0.5"></div>
                        <div className="w-6 h-1 bg-gradient-to-r from-[#2E2E2E] to-[#1E7A86] my-0.5"></div>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: "End-to-End Ownership",
            description: "Full accountability from concept to deployment and ongoing optimization",
            icon: (
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#A7DADC] to-[#1E7A86] rounded-xl"></div>
                    <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full border-2 border-gradient-to-r from-[#A7DADC] to-[#1E7A86] relative">
                            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-r from-[#A7DADC] to-[#1E7A86] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: "Cutting-Edge Innovation",
            description: "Continuous research and adoption of emerging technologies for competitive advantage",
            icon: (
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E7A86] to-[#2E2E2E] rounded-xl"></div>
                    <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-gradient-to-r from-[#1E7A86] to-[#2E2E2E] rounded-full"></div>
                        <div className="absolute w-2 h-2 bg-gradient-to-r from-[#1E7A86] to-[#2E2E2E] rounded-full animate-ping"></div>
                    </div>
                </div>
            )
        }
    ];

    const successMetrics = [
        { id: 1, value: 99.7, label: "Client Satisfaction Rate", suffix: "%" },
        { id: 2, value: 85, label: "Projects Delivered On Time", suffix: "+" },
        { id: 3, value: 40, label: "Enterprise Clients", suffix: "+" },
        { id: 4, value: 2.3, label: "Average ROI Multiplier", suffix: "x" },
    ];

    const testimonials = [
    {
        id: 1,
        name: "Rahul Mehta",
        role: "CTO, Nexus Solutions",
        content: "Athenura helped us modernize our digital infrastructure seamlessly. Their technical clarity and execution speed truly set them apart.",
        company: "NexaTech Solutions",
        image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 2,
        name: "Suresh Sharma",
        role: "Head of Technology, BrightMind Systems",
        content: "The Athenura team understood our vision from day one. Their innovative mindset and problem-solving skills delivered exceptional results.",
        company: "BrightMind Systems",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 3,
        name: "Amit Verma",
        role: "Engineering Director, ScaleGrow India",
        content: "Athenura’s solutions were scalable, future-ready, and perfectly aligned with our business goals. A highly reliable technology partner.",
        company: "ScaleGrow India",
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face"
    }
    ];

    return (
        <section className="relative px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#A7DADC]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1E7A86]/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-[#A7DADC]/10 to-[#1E7A86]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-8xl mx-auto relative">
                {/* Header */}
                <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2E2E2E] mb-6 leading-tight">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E7A86] to-[#A7DADC]">Choose Us</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-[#2E2E2E]/80 max-w-3xl mx-auto leading-relaxed">
                        We combine deep technical expertise with strategic business insight to deliver solutions
                        that drive measurable results and sustainable competitive advantage.
                    </p>
                </div>

                {/* Rotating Benefits Showcase */}
                <div className={`mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="relative h-[600px] sm:h-[600px] rounded-3xl overflow-hidden border border-[#F3F4F6] shadow-xl bg-white">
                        {benefits.map((benefit, index) => (
                            <div
                                key={benefit.id}
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${activeBenefit === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                                    }`}
                            >
                                <div className="absolute inset-0">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-5`}></div>
                                    <div className="absolute top-0 right-0 w-1/2 h-full">
                                        <div className="absolute inset-0 bg-gradient-to-l from-white/60 to-transparent"></div>
                                    </div>
                                </div>

                                <div className="relative h-full flex flex-col lg:flex-row items-center">
                                    <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-[#F3F4F6]">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] animate-pulse"></div>
                                            <span className="text-sm font-medium text-[#139bad]">Key Advantage {index + 1}</span>
                                        </div>

                                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d687e] mb-6">
                                            {benefit.title}
                                        </h2>

                                        <p className="text-lg text-[#2E2E2E]/70 mb-8 leading-relaxed">
                                            {benefit.description}
                                        </p>

                                        <div className="space-y-4">
                                            {benefit.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                                    </div>
                                                    <span className="text-[#2E2E2E] font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="lg:w-1/2 h-full relative hidden lg:block">
                                        <div className="absolute inset-0 flex items-center justify-center p-8">
                                            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                                                {/* Tech Visualization Circles */}
                                                <div className="absolute inset-0 rounded-full border-4 border-[#A7DADC]/20 animate-ping"></div>
                                                <div className="absolute inset-8 rounded-full border-4 border-[#1E7A86]/20 animate-ping" style={{ animationDelay: '1s' }}></div>
                                                <div className="absolute inset-16 rounded-full border-4 border-[#A7DADC]/10 animate-ping" style={{ animationDelay: '2s' }}></div>

                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-40 h-40 rounded-full shadow-gray-900 shadow-lg flex items-center justify-center">
                                                        <div className="text-5xl font-bold  bg-clip-text text-transparent">
                                                            <img src="/AthenuraCircle.png" alt="Athenura" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Floating Tech Elements */}
                                                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] opacity-10 animate-float"></div>
                                                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-gradient-to-r from-[#A7DADC] to-[#1E7A86] opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
                                                <div className="absolute top-12 left-8 w-8 h-8 rounded-full bg-gradient-to-r from-[#1E7A86] to-[#2E2E2E] opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Navigation Dots */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                            {benefits.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveBenefit(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeBenefit === index
                                            ? 'bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] scale-125 shadow-lg'
                                            : 'bg-[#A7DADC]/30 hover:bg-[#A7DADC]/50'
                                        }`}
                                    aria-label={`View advantage ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Competitive Advantages */}
                {/* Competitive Advantages */}
                <div
                    className={`mb-24 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >
                    {/* Section Header */}
                    <div className="text-center mb-14">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2E2E2E] mb-4 leading-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E7A86] to-[#A7DADC]">
                                Competitive Edge
                            </span>
                        </h2>
                        <p className="text-lg text-[#2E2E2E]/70 max-w-2xl mx-auto">
                            What makes Athenura a trusted partner for building high-impact digital solutions
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {competitiveAdvantages.map((advantage) => (
                            <div
                                key={advantage.id}
                                className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl
                   border border-[#A7DADC]/30 shadow-lg transition-all duration-500
                   hover:-translate-y-3 hover:shadow-2xl"
                            >
                                {/* Gradient Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1E7A86]/10 to-[#A7DADC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Content */}
                                <div className="relative p-7 z-10">
                                    {/* Icon */}
                                    <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-2xl
                          bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] text-white
                          shadow-md group-hover:scale-110 transition-transform duration-500">
                                        {advantage.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">
                                        {advantage.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#2E2E2E]/65 text-sm leading-relaxed mb-6">
                                        {advantage.description}
                                    </p>

                                    {/* Progress Bar */}
                                    <div className="relative w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                                        <div
                                            className="absolute left-0 top-0 h-full w-[75%] rounded-full
                         bg-gradient-to-r from-[#1E7A86] to-[#A7DADC]
                         transition-all duration-700 group-hover:w-full"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Success Metrics */}
                <div className={`mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="relative bg-gradient-to-r from-[#1E7A86]/5 to-[#A7DADC]/5 rounded-3xl p-8 md:p-12 border border-[#A7DADC]/30 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="grid grid-cols-10 gap-4 h-full">
                                {[...Array(30)].map((_, i) => (
                                    <div key={i} className="border border-[#1E7A86]/10 rounded"></div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mb-12 relative z-10">
                            <h2 className="text-3xl sm:text-5xl font-bold text-[#2E2E2E] mb-4">
                                By The <span className="text-[#1E7A86]">Numbers</span>
                            </h2>
                            <p className="text-lg text-[#2E2E2E]/80 max-w-2xl mx-auto">
                                Quantifying our impact and commitment to excellence
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {successMetrics.map((metric) => (
                                <div
                                    key={metric.id}
                                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#F3F4F6] hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="text-center">
                                        <div
                                            ref={(el) => (counterRefs.current[metric.id] = el)}
                                            data-target={metric.value}
                                            data-suffix={metric.suffix}
                                            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] bg-clip-text text-transparent mb-2"
                                        >
                                            0
                                        </div>
                                        <div className="text-[#2E2E2E] font-medium">{metric.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Client Testimonials */}
                <div className={`mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-5xl font-bold text-[#2E2E2E] mb-4">
                            Client <span className="text-[#1E7A86]">Success Stories</span>
                        </h2>
                        <p className="text-lg text-[#2E2E2E]/80 max-w-2xl mx-auto">
                            Hear from enterprises that have transformed with Athenura
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="group relative bg-white rounded-2xl p-6 border border-[#F3F4F6] hover:border-[#A7DADC] transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
                            >
                                {/* Quote Mark */}
                                <div className="absolute top-6 right-6 text-4xl text-[#A7DADC]/30 font-serif">"</div>

                                <div className="mb-6">
                                    <p className="text-[#2E2E2E]/70 text-lg leading-relaxed">"{testimonial.content}"</p>
                                </div>

                                <div className="flex items-center gap-4 pt-6 border-t border-[#F3F4F6]">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#2E2E2E]">{testimonial.name}</h4>
                                        <p className="text-sm text-[#1E7A86]">{testimonial.role}</p>
                                        <p className="text-xs text-[#2E2E2E]/50">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Process */}
                <div className={`mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-5xl font-bold text-[#2E2E2E] mb-4">
                            The Athenura <span className="text-[#1E7A86]">Approach</span>
                        </h2>
                        <p className="text-lg text-[#2E2E2E]/80 max-w-2xl mx-auto">
                            Our systematic methodology ensures consistent, high-quality results
                        </p>
                    </div>

                    <div className="relative">
                        {/* Process Timeline */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#A7DADC] via-[#1E7A86] to-[#A7DADC] transform -translate-y-1/2"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Strategy",
                                    description: "Deep dive analysis to understand your business challenges and objectives"
                                },
                                {
                                    step: "02",
                                    title: "Architecture & Planning",
                                    description: "Designing robust technical solutions with scalability in mind"
                                },
                                {
                                    step: "03",
                                    title: "Development & Testing",
                                    description: "Agile development with continuous integration and quality assurance"
                                },
                                {
                                    step: "04",
                                    title: "Deployment & Support",
                                    description: "Seamless launch followed by ongoing maintenance and optimization"
                                }
                            ].map((phase, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-white rounded-2xl p-6 border border-[#F3F4F6] shadow-lg hover:shadow-xl transition-all duration-500 group">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] flex items-center justify-center mb-6 mx-auto">
                                            <span className="text-white font-bold text-xl">{phase.step}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-[#2E2E2E] mb-3 text-center">
                                            {phase.title}
                                        </h3>

                                        <p className="text-[#2E2E2E]/60 text-center text-sm mb-4">
                                            {phase.description}
                                        </p>

                                        {/* Process Indicator */}
                                        <div className="flex justify-center">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* Connector for mobile */}
                                        {index < 3 && (
                                            <div className="lg:hidden absolute -bottom-8 left-1/2 w-1 h-8 bg-gradient-to-b from-[#A7DADC] to-[#1E7A86] transform -translate-x-1/2"></div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Animation Styles */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};

export default WhyUsSection;