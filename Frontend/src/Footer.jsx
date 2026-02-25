import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const companyLinks = [
        { label: 'About Us', link: '/about-us', isAnchor: true },
        { label: 'Career', link: '/career', isAnchor: true },
        { label: 'Internship Program', link: '/internship', isAnchor: true },
        { label: 'Internship Policy', link: '/internship-policy' },
        { label: "FAQs", link: "/faqs" }
    ];

    // Services remain exactly as provided
    const serviceLinks = [
        { label: 'Custom Software Development', link: '/services/custom-software' },
        { label: 'Web Application Development', link: '/services/web-apps' },
        { label: 'Website Maintenance', link: '/services/maintenance' },
        { label: 'Software Testing & QA', link: '/services/testing' },
        { label: 'Business Automation Solutions', link: '/services/automation' }
    ];

    const legalLinks = [
        { label: 'Privacy Policy', link: '/privacy-policy' },
        { label: 'Terms of Service', link: '/Terms-of-service' },
    ];

    const socialLinks = [
        {
            icon: <FaLinkedinIn />,
            link: 'https://www.linkedin.com/company/athenura/',
            label: 'LinkedIn',
            colorClass: 'text-[#0077b5]'
        },
        {
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/athenura.in/',
            label: 'Instagram',
            colorClass: 'text-[#E1306C]'
        },
        {
            icon: <FaTwitter />,
            link: 'https://x.com/athenura_in',
            label: 'Twitter',
            colorClass: 'text-[#1DA1F2]'
        },
        {
            icon: <FaGithub />,
            link: 'https://github.com/Athenura',
            label: 'GitHub',
            colorClass: 'text-[#181717]'
        }
    ];

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'official@athenura.in',
            link: 'mailto:official@athenura.in',
            colorClass: 'text-[#EA4335]'
        },
        {
            icon: <FaPhone style={{ transform: 'scaleX(-1)' }} />,
            label: 'Phone',
            value: '+91 98350 51934',
            link: 'tel:+919835051934',
            colorClass: 'text-[#34A853]'
        },
    ];

    const linkClasses = "text-white hover:text-white transition-all duration-300 hover:pl-2 flex items-center group";

    return (
        <footer className="bg-[#1e7a86] text-white">
            <div className="max-w-8xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-10 md:py-16">
                {/* GRID UPDATED: Added 5th column for map on Large screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

                    {/* 1. Logo and Socials */}
                    <div className="lg:col-span-1">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="text-4xl font-bold tracking-tight">
                                    <img src="/White.png" alt="Athenura Solutions Logo" className="h-14 w-auto" />
                                </div>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed">
                                Next-gen software engineering for the modern enterprise. We build the systems that drive the world.
                            </p>

                            <div className="pt-4">
                                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.link}
                                            aria-label={social.label}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-10 h-10 rounded-full bg-white flex items-center justify-center ${social.colorClass} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                                        >
                                            <span className="text-lg">{social.icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Company Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/30 inline-block">Company</h3>
                        <ul className="space-y-4">
                            {companyLinks.map((item, index) => (
                                <li key={index}>
                                    {item.isAnchor ? (
                                        <a href={item.link} className={linkClasses}>
                                            <FaArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm" />
                                            <span className="transition-all duration-300">{item.label}</span>
                                        </a>
                                    ) : (
                                        <Link to={item.link} className={linkClasses}>
                                            <FaArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm" />
                                            <span className="transition-all duration-300 ">{item.label}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Services Links (STRICTLY UNCHANGED) */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/30 inline-block">Services</h3>
                        <ul className="space-y-4">
                            {serviceLinks.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        to={service.link}
                                        className="block group transition-all duration-300 hover:pl-2"
                                    >
                                        <div className="text-white flex flex-row mb-1 group-hover:text-white transition-colors duration-300">
                                            <FaArrowRight className="mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm" />
                                            {service.label}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Contact Information */}
                    <div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold pb-2 border-b border-white/30 inline-block">Contact Us</h3>
                            <div className="space-y-6">
                                {contactInfo.map((contact, index) => (
                                    <a
                                        key={index}
                                        href={contact.link}
                                        className="flex items-center space-x-4 group"
                                    >
                                        <div className={`w-9 h-9 flex-shrink-0 rounded-full bg-white flex items-center justify-center ${contact.colorClass} transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg`}>
                                            <span className="text-base">{contact.icon}</span>
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="font-bold text-[10px] uppercase tracking-wide opacity-80">{contact.label}</span>
                                            <span className="text-white font-medium text-sm group-hover:underline decoration-white/50 underline-offset-4 transition-all">
                                                {contact.value}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 5. Map Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/30 inline-block">Location</h3>
                        <div className="rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
                            <iframe
                                title="Athenura Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.378777777823!2d77.3614601942478!3d28.618407722875563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cb70326146a27db%3A0x39227c4340f97501!2sAthenura!5e0!3m2!1sen!2sin!4v1770454010754!5m2!1sen!2sin"
                                width="100%"
                                height="160"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="filter contrast-125 grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>
                        <div className="mt-4 flex items-start text-sm text-white/90">
                            <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0 text-white" />
                            <span>Sector 62, Noida, Uttar Pradesh</span>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-12 md:mt-16 pt-8 border-t border-white/30">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-white/80 text-sm text-center md:text-left">
                            © {currentYear} Athenura. All rights reserved.
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            {legalLinks.map((legal, index) => (
                                <Link
                                    key={index}
                                    to={legal.link}
                                    className="text-white/85 hover:text-white transition-colors duration-300 hover:underline"
                                >
                                    {legal.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;