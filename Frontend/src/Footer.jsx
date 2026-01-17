import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaArrowRight, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const companyLinks = [
        { label: 'About Us', link: 'about' },
        { label: 'Our Team', link: '#' },
        { label: 'Careers', link: '/careers' },
        { label: 'Internship Policy', link: '/internship-policy' },
        { label: "FAQs", link: "/faqs" }
    ];

    const serviceLinks = [
        { label: 'Custom Software Development', link: '#' },
        { label: 'Web Application Development', link: '#' },
        { label: 'Website Maintenance', link: '#' },
        { label: 'Software Testing & QA', link: '#' },
        { label: 'Business Automation Solutions', link: '#' }
    ];

    const legalLinks = [
        { label: 'Privacy Policy', link: '/privacy-policy' },
        { label: 'Terms of Service', link: '/Terms-of-service' },
    ];

    // Updated socialLinks to use specific colors by default (Text Color)
    const socialLinks = [
        {
            icon: <FaLinkedinIn />,
            link: 'https://www.linkedin.com/company/athenura/',
            label: 'LinkedIn',
            // LinkedIn Blue
            colorClass: 'text-[#0077b5]'
        },
        {
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/athenura.in/',
            label: 'Instagram',
            // Instagram Pink/Red
            colorClass: 'text-[#E1306C]'
        },
        {
            icon: <FaTwitter />,
            link: '',
            label: 'Twitter',
            // Twitter Blue (Standard for the Bird Icon)
            colorClass: 'text-[#1DA1F2]'
        },
        {
            icon: <FaGithub />,
            link: 'https://github.com/Athenura',
            label: 'GitHub',
            // GitHub Black
            colorClass: 'text-[#181717]'
        }
    ];

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'official@athenura.in',
            link: 'mailto:official@athenura.in'
        },
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '+91 98350 51934',
            link: 'tel:+919835051934'
        },
    ];

    return (
        <footer className="bg-[#1e7a86] text-white">
            <div className="max-w-8xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-10 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Logo and Company Info */}
                    <div className="lg:col-span-1">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="text-4xl font-bold tracking-tight">
                                    <img src="/White.png" alt="Athenura Solutions Logo" className="h-14 w-auto" />
                                </div>
                            </div>
                            <p className="text-white/90 text-base leading-relaxed max-w-md">
                                Next-gen software engineering for the modern enterprise. We build the systems that drive the world.
                            </p>

                            {/* Social Links Section */}
                            <div className="pt-4">
                                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.link}
                                            aria-label={social.label}
                                            // CHANGES HERE:
                                            // 1. bg-white (Always white background so colors pop)
                                            // 2. social.colorClass (Applies the specific brand color immediately)
                                            // 3. Removed hover:text-... logic since it's already colored
                                            className={`w-12 h-12 rounded-full bg-white flex items-center justify-center ${social.colorClass} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                                        >
                                            <span className="text-lg">{social.icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-8 pb-3 border-b border-white/30 inline-block">Company</h3>
                        <ul className="space-y-5">
                            {companyLinks.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        className="text-white hover:text-white transition-all duration-300 hover:pl-3 flex items-center group"
                                    >
                                        <FaArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="transition-all duration-300">{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-8 pb-3 border-b border-white/30 inline-block">Services</h3>
                        <ul className="space-y-5">
                            {serviceLinks.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.link}
                                        className="block group transition-all duration-300 hover:pl-3"
                                    >
                                        <div className="text-white flex flex-row font-semibold text-base mb-1 group-hover:text-white transition-colors duration-300">
                                            <FaArrowRight className="mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            {service.label}
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold mb-8 pb-3 border-b border-white/30 inline-block">Contact Us</h3>
                            <div className="space-y-3">
                                {contactInfo.map((contact, index) => (
                                    <a
                                        key={index}
                                        href={contact.link}
                                        className="flex items-start space-x-3 group hover:text-white transition-colors duration-300"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-[#3EC0D2] transition-all duration-300 mt-1">
                                            <span className="text-sm">{contact.icon}</span>
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">{contact.label}</div>
                                            <div className="text-white/85 text-sm group-hover:text-white transition-colors duration-300">
                                                {contact.value}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-white/30">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
                        <div className="text-white/80 text-sm">
                            © {currentYear} Athenura Solutions Inc. All rights reserved.
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            {legalLinks.map((legal, index) => (
                                <a
                                    key={index}
                                    href={legal.link}
                                    className="text-white/85 hover:text-white transition-colors duration-300 hover:underline"
                                >
                                    {legal.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;