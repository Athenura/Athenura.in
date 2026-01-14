// WhoWeAreSection.jsx
import React, { useState, useEffect, useRef } from 'react';

const WhoWeAreSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollRef = useRef(null);
    const loopRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        const scrollLeft = () => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += 1;
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
        };

        const scrollInterval = setInterval(scrollLeft, 20);


        return () => clearInterval(scrollInterval);
    }, []);

    const leadershipTeam = [
        {
            id: 1,
            name: "Alex Johnson",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
            bio: "15+ years in enterprise software development. Passionate about building technology that transforms businesses.",
            linkedin: "#",
            twitter: "#"
        },
        {
            id: 2,
            name: "Sarah Chen",
            role: "CTO",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
            bio: "Former tech lead at Google. Expert in cloud architecture and scalable systems design.",
            linkedin: "#",
            twitter: "#"
        },
        {
            id: 3,
            name: "Marcus Rodriguez",
            role: "Head of Engineering",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
            bio: "Led 50+ successful software projects. Specializes in agile methodologies and team leadership.",
            linkedin: "#",
            twitter: "#"
        },
        {
            id: 4,
            name: "Priya Sharma",
            role: "Design Director",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
            bio: "Award-winning designer with expertise in user-centered design and design systems.",
            linkedin: "#",
            twitter: "#"
        },
    ];

    const companyValues = [
        { id: 1, title: "Innovation", description: "Pushing boundaries with cutting-edge technology" },
        { id: 2, title: "Excellence", description: "Delivering exceptional quality in everything we do" },
        { id: 3, title: "Collaboration", description: "Working together to achieve remarkable results" },
        { id: 4, title: "Integrity", description: "Building trust through transparency and honesty" },
    ];

    const techStack = [
        "React", "Node.js", "Python", "AWS", "Azure", "Docker", "Kubernetes", "MongoDB",
        "PostgreSQL", "GraphQL", "TypeScript", "Next.js", "Tailwind CSS", "Git", "Jenkins",
        "Terraform", "Redis", "Elasticsearch", "Firebase", "Swift", "Kotlin"
    ];

    const achievements = [
        { value: "500+", label: "Projects Delivered" },
        { value: "150+", label: "Happy Clients" },
        { value: "50+", label: "Countries Served" },
        { value: "99.5%", label: "Client Satisfaction" },
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#A7DADC]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1E7A86]/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#A7DADC]/5 to-[#1E7A86]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2E2E2E] mb-6 leading-tight">
                        Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E7A86] to-[#A7DADC]">We Are</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-[#2E2E2E]/80 max-w-3xl mx-auto leading-relaxed">
                        We are a passionate team of innovators, developers, and strategists dedicated to building
                        digital solutions that transform businesses and create lasting impact.
                    </p>
                </div>

                {/* Our Story Section */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="space-y-6">
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#2E2E2E]">
                            Our <span className="text-[#1E7A86]">Story</span>
                        </h3>
                        <p className="text-[#2E2E2E]/70 text-lg leading-relaxed">
                            Founded with a vision to shape the future of digital innovation, Athenura began as a
                            focused team driven by creativity, technology, and purpose. Today, we are a growing
                            organization delivering impactful digital solutions to businesses across diverse
                            industries and regions.
                        </p>

                        <p className="text-[#2E2E2E]/70 text-lg leading-relaxed">
                            Our journey is guided by a clear philosophy: build solutions that create real value.
                            Every strategy we design, every product we develop, and every experience we craft
                            is centered on solving real-world problems and helping our clients grow with
                            confidence in a digital-first world.
                        </p>


                        {/* Values Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {companyValues.map((value) => (
                                <div
                                    key={value.id}
                                    className="bg-[#F3F4F6] rounded-xl p-4 border border-[#A7DADC]/20 hover:border-[#1E7A86]/30 transition-all duration-300 hover:scale-[1.02]"
                                >
                                    <div className="text-2xl mb-2">{value.icon}</div>
                                    <h4 className="font-bold text-[#2E2E2E] mb-1">{value.title}</h4>
                                    <p className="text-sm text-[#2E2E2E]/60">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#A7DADC]/20 to-[#1E7A86]/25 rounded-3xl"></div>
                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-[#F3F4F6]">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                                alt="Our Team"
                                className="w-full h-72 sm:h-80 object-cover"
                            />
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#65daea] to-[#A7DADC] flex items-center justify-center">
                                        <img src="/AthenuraCircle.png" alt="Athenura" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#2E2E2E]">Distributed Team</h4>
                                        <p className="text-sm text-[#2E2E2E]/60">
                                            Talented professionals collaborating across regions
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[#2E2E2E]/70">
                                    Athenura brings together a diverse blend of skills, cultures, and perspectives to
                                    design and deliver innovative digital solutions. This diversity fuels creative
                                    thinking, encourages fresh ideas, and strengthens our problem-solving approach.
                                    By combining technical expertise with strategic insight, we build solutions that
                                    are not only effective but also meaningful, scalable, and aligned with real
                                    business goals.
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

                {/* Leadership Team */}
                <div className={`mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#2E2E2E] mb-4">
                            Meet Our <span className="text-[#1E7A86]">Leadership</span>
                        </h3>
                        <p className="text-lg text-[#2E2E2E]/80 max-w-2xl mx-auto">
                            Guided by experienced leaders who are passionate about technology and innovation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {leadershipTeam.map((member) => (
                            <div
                                key={member.id}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-[#F3F4F6] hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#1E7A86]/0 to-[#A7DADC]/0 group-hover:from-[#1E7A86]/5 group-hover:to-[#A7DADC]/5 transition-all duration-500"></div>

                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                                    {/* Social Links */}
                                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <a href={member.linkedin} className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#1E7A86] hover:text-white transition-colors">
                                            <span className="text-xs font-bold">in</span>
                                        </a>
                                        <a href={member.twitter} className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#1E7A86] hover:text-white transition-colors">
                                            <span className="text-xs">𝕏</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h4 className="font-bold text-xl text-[#2E2E2E] mb-1">{member.name}</h4>
                                    <p className="text-[#1E7A86] font-medium mb-3">{member.role}</p>
                                    <p className="text-[#2E2E2E]/70 text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Infinite Loop - Tech Stack */}
                <div className={`mb-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="text-center mb-8">
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#2E2E2E] mb-4">
                            Our <span className="text-[#1E7A86]">Technology Stack</span>
                        </h3>
                        <p className="text-lg text-[#2E2E2E]/80 max-w-2xl mx-auto">
                            We work with cutting-edge technologies to deliver exceptional solutions
                        </p>
                    </div>

                    {/* Infinite Scroll Container */}
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10"></div>

                        <div
                            ref={scrollRef}
                            className="flex gap-4 py-4 overflow-x-hidden"
                        >
                            {techStack.map((tech, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-6 py-3 bg-white border border-[#F3F4F6] rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#A7DADC] group"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] group-hover:scale-125 transition-transform duration-300"></div>
                                        <span className="text-[#2E2E2E] font-medium">{tech}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Infinite Loop - Achievements */}
                <div className={`mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div
                        ref={loopRef}
                        className="relative overflow-hidden py-8"
                    >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#A7DADC]/5 to-[#1E7A86]/5 transform -skew-y-2"></div>

                        {/* Loop Content */}
                        <div className="flex animate-infinite-scroll">
                            <div className="flex gap-8 pr-8">
                                {achievements.concat(achievements).map((achievement) => (
                                    <div
                                        className="flex-shrink-0 flex items-center gap-4 px-6  bg-white/80 backdrop-blur-sm rounded-2xl border border-[#F3F4F6] shadow-sm"
                                    >
                                        <div className="text-3xl font-bold text-[#1E7A86]">
                                            {achievement.value}
                                        </div>
                                        <div className="text-[#2E2E2E] font-medium">
                                            {achievement.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Culture & Environment */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="space-y-6">
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#2E2E2E]">
                            Our <span className="text-[#1E7A86]">Culture</span>
                        </h3>
                        <p className="text-[#2E2E2E]/70 text-lg leading-relaxed">
                            At Athenura, we believe meaningful technology is created by empowered people.
                            Our culture encourages collaboration, curiosity, and continuous improvement,
                            enabling our teams to innovate with purpose and confidence.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Regular knowledge-sharing sessions to encourage innovation",
                                "Flexible and hybrid work culture focused on productivity and balance",
                                "Team-building initiatives that strengthen collaboration and trust",
                                "Ongoing learning, upskilling, and professional growth opportunities",
                                "Open communication supported by transparent and approachable leadership"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#1E7A86] to-[#A7DADC] flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-[#2E2E2E]/80">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                            alt="Team Collaboration"
                            className="rounded-2xl object-cover h-48 hover:scale-105 transition-transform duration-500"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w-400&h=300&fit=crop"
                            alt="Office Environment"
                            className="rounded-2xl object-cover h-48 mt-8 hover:scale-105 transition-transform duration-500"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop"
                            alt="Team Event"
                            className="rounded-2xl object-cover h-48 hover:scale-105 transition-transform duration-500"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop"
                            alt="Work Culture"
                            className="rounded-2xl object-cover h-48 mt-8 hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* Add animation keyframes to your Tailwind config */}
            <style jsx>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
          display: flex;
          width: max-content;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
        </section>
    );
};

export default WhoWeAreSection;