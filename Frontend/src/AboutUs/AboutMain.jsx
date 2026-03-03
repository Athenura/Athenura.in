import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutHero from './AboutHero'
import WhoWeAre from './WhoWeAre'
import OurMission from './OurMission'
import WhatWeDo from './WhatWeDo'
import OurRoadmap from './OurRoadmap'
import CommunityLearning from './Learning'

const AboutMain = () => {
    const siteUrl = 'https://athenura.in';
    const canonicalUrl = `${siteUrl}/about-us`;
    
    const pageTitle = "About Athenura - Our Story, Mission & Vision | Empowering Careers Through Skill Development";
    const pageDescription = "Learn about Athenura's journey, mission, and vision. We're a remote-first skill development platform dedicated to bridging the gap between education and employment through hands-on learning, mentorship, and real-world projects.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-about-og.jpg";

    // WebPage Schema for about page
    const webpageData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": canonicalUrl,
        "name": pageTitle,
        "description": pageDescription,
        "url": canonicalUrl,
        "isPartOf": {
            "@type": "WebSite",
            "name": "Athenura",
            "url": siteUrl
        },
        "about": {
            "@type": "Thing",
            "name": "About Athenura, Company Story, Mission, Vision, Values"
        },
        "inLanguage": "en-US",
        "publisher": {
            "@type": "Organization",
            "name": "Athenura",
            "logo": {
                "@type": "ImageObject",
                "url": "https://athenura.in/AthenuraCircle.png"
            }
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": siteUrl
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "About Us",
                    "item": canonicalUrl
                }
            ]
        },
        "mainEntity": {
            "@type": "Organization",
            "name": "Athenura",
            "description": "Remote-first skill development platform",
            "foundingDate": "2026",
            "email": "official@athenura.in",
            "url": siteUrl,
            "logo": "https://athenura.in/AthenuraCircle.png",
            "sameAs": [
                "https://twitter.com/athenura_in",
                "https://linkedin.com/company/athenura",
                "https://facebook.com/athenura",
                "https://instagram.com/athenura.in",
                "https://youtube.com/@athenura"
            ],
            "knowsAbout": [
                "Skill Development",
                "Internships",
                "Career Growth",
                "Technical Training",
                "Professional Development"
            ]
        }
    };

    // Breadcrumb Schema
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": canonicalUrl
            }
        ]
    };

    // Organization Schema (detailed)
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://athenura.in/#organization",
        "name": "Athenura",
        "url": siteUrl,
        "logo": {
            "@type": "ImageObject",
            "url": "https://athenura.in/AthenuraCircle.png",
            "width": 500,
            "height": 500
        },
        "sameAs": [
            "https://twitter.com/athenura_in",
            "https://linkedin.com/company/athenura",
            "https://facebook.com/athenura",
            "https://instagram.com/athenura.in",
            "https://youtube.com/@athenura"
        ],
        "description": "Remote-first skill development platform offering internships and career resources",
        "foundingDate": "2026",
        "email": "official@athenura.in",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "slogan": "From Classroom to Career-Ready",
        "founder": {
            "@type": "Person",
            "name": "Athenura Team"
        },
        "foundingLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
            }
        },
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": "10-20"
        },
        "knowsAbout": [
            {
                "@type": "Thing",
                "name": "Skill Development"
            },
            {
                "@type": "Thing",
                "name": "Internship Programs"
            },
            {
                "@type": "Thing",
                "name": "Career Mentorship"
            },
            {
                "@type": "Thing",
                "name": "Technical Training"
            },
            {
                "@type": "Thing",
                "name": "Professional Growth"
            }
        ]
    };

    // WebSite Schema
    const websiteData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Athenura",
        "url": siteUrl,
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    // FAQ Schema for about page questions
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Athenura?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Athenura is a remote-first skill development platform dedicated to bridging the gap between education and employment. We offer hands-on internships, mentorship programs, and career resources to help students and graduates build job-ready skills."
                }
            },
            {
                "@type": "Question",
                "name": "When was Athenura founded?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Athenura was founded in 2026 with a mission to transform learners into career-ready professionals through practical, project-based learning experiences."
                }
            },
            {
                "@type": "Question",
                "name": "What is Athenura's mission?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our mission is to bridge the gap between classroom learning and real-world execution by providing structured, mentorship-driven programs that focus on building practical skills, portfolio projects, and professional confidence."
                }
            },
            {
                "@type": "Question",
                "name": "Who can join Athenura programs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our programs are designed for students (UG & PG), fresh graduates, career switchers, and self-learners who are ready to take ownership of their learning and build real, measurable skills."
                }
            },
            {
                "@type": "Question",
                "name": "What makes Athenura different?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Athenura focuses on execution over certificates. We emphasize real projects, structured mentorship, continuous feedback, and measurable outcomes. Our programs are designed to produce portfolio-ready work that hiring managers value."
                }
            },
            {
                "@type": "Question",
                "name": "Is Athenura remote-first?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Athenura is a fully remote-first organization. All our programs, mentorship sessions, and collaborations are conducted virtually, allowing us to work with talent from anywhere."
                }
            },
            {
                "@type": "Question",
                "name": "What domains does Athenura cover?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer programs across multiple domains including Data Science, Full-Stack Development, UI/UX Design, Digital Marketing, and more. Each program is designed with industry-relevant curriculum and real-world projects."
                }
            },
            {
                "@type": "Question",
                "name": "How can I contact Athenura?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can reach us at official@athenura.in or through our contact page. We're always happy to answer questions about our programs or discuss how we can help with your career journey."
                }
            }
        ]
    };

    // Profile Page Schema for company
    const profilePageData = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "name": "About Athenura",
        "description": "Learn about our story, mission, and the team behind Athenura",
        "mainEntity": {
            "@type": "Organization",
            "name": "Athenura"
        }
    };

    return (
        <>
            <Helmet>
                {/* ---------- BASIC META TAGS ---------- */}
                <html lang="en" />
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content="about athenura, athenura story, our mission, our vision, skill development platform, athenura team, company background, athenura values, remote-first company, edtech company, career development platform, about us" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="About Athenura - Our Story, Mission & Vision" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="About Athenura - Our Story and Mission" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="About Athenura | Our Story & Mission" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="About Athenura" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="About Athenura" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                {/* ---------- ABOUT-SPECIFIC META ---------- */}
                <meta name="company:name" content="Athenura" />
                <meta name="company:founded" content="2026" />
                <meta name="company:mission" content="Bridge the gap between education and employment" />
                <meta name="company:type" content="Skill Development Platform" />
                <meta name="company:workstyle" content="Remote-first" />
                
                {/* ---------- STRUCTURED DATA ---------- */}
                <script type="application/ld+json">
                    {JSON.stringify(webpageData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(organizationData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(websiteData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(profilePageData)}
                </script>
                
                {/* ---------- PERFORMANCE OPTIMIZATION ---------- */}
                <link rel="preconnect" href="https://ik.imagekit.io" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://ik.imagekit.io" />
                <link rel="preconnect" href="https://images.unsplash.com" />
                
                {/* ---------- HREFLANG ---------- */}
                <link rel="alternate" href={canonicalUrl} hreflang="en" />
                <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
            </Helmet>

            {/* Your existing component JSX */}
            <div>
                <AboutHero />
                <OurRoadmap />
                <OurMission />
                <WhatWeDo />
                <WhoWeAre />
                <CommunityLearning />
            </div>
        </>
    )
}

export default AboutMain