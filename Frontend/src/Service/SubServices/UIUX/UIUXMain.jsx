import React from 'react'
import { Helmet } from 'react-helmet-async'
import UiUxHero from './UIUXHero'
import DesignProcess from './DesignProccess'
import CaseStudies from './CaseStudy'
import Capabilities from './Capatalization'

const UIUXMain = () => {
    const siteUrl = 'https://athenura.in';
    const canonicalUrl = `${siteUrl}/services/ui-ux`;
    
    const pageTitle = "UI/UX Design Services - Athenura | User-Centered Design & Digital Experiences";
    const pageDescription = "Professional UI/UX design services by Athenura. We create intuitive, user-centered digital experiences through research, prototyping, and usability testing. Web, mobile, and product design for startups and enterprises.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-uiux-og.jpg";

    // WebPage Schema for UI/UX design page
    const webpageData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
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
            "name": "UI/UX Design, User Experience, Interface Design, Product Design"
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
                    "name": "Services",
                    "item": `${siteUrl}/services`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "UI/UX Design",
                    "item": canonicalUrl
                }
            ]
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Athenura UI/UX Design Services",
            "description": "Comprehensive UI/UX design offerings for digital products",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Service",
                        "name": "User Research & Strategy",
                        "description": "In-depth user research, persona development, and UX strategy to inform design decisions",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "UX Design",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Startups, Enterprises, Product Teams"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#user-research`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Service",
                        "name": "Wireframing & Prototyping",
                        "description": "Interactive wireframes and prototypes to visualize and test user flows",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "UI Design",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Startups, Enterprises, Product Teams"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#wireframing`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "Service",
                        "name": "Visual Design & Branding",
                        "description": "High-fidelity UI design with cohesive visual systems and brand integration",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "UI Design",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Startups, Enterprises, Product Teams"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#visual-design`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "Service",
                        "name": "Usability Testing",
                        "description": "Comprehensive usability testing to validate designs and improve user experience",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "UX Research",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Startups, Enterprises, Product Teams"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#usability-testing`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                        "@type": "Service",
                        "name": "Design Systems",
                        "description": "Scalable design systems with components, tokens, and documentation",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "UI Design",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Enterprises, Product Teams"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#design-systems`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 6,
                    "item": {
                        "@type": "Service",
                        "name": "Mobile App Design",
                        "description": "iOS and Android app design following platform-specific guidelines",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Mobile Design",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Startups, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#mobile-design`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 7,
                    "item": {
                        "@type": "Service",
                        "name": "Web & Dashboard Design",
                        "description": "Complex web applications and data dashboard design with intuitive interfaces",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Web Design",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Startups, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#web-design`
                    }
                }
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
                "name": "Services",
                "item": `${siteUrl}/services`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "UI/UX Design",
                "item": canonicalUrl
            }
        ]
    };

    // Organization Schema
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
        "description": "UI/UX design agency creating user-centered digital experiences for web and mobile",
        "foundingDate": "2026",
        "email": "official@athenura.in"
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

    // Service Schema for UI/UX offerings
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Athenura UI/UX Design Services",
        "description": "End-to-end UI/UX design including user research, wireframing, visual design, usability testing, and design systems",
        "provider": {
            "@type": "Organization",
            "name": "Athenura",
            "url": siteUrl
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "audience": {
            "@type": "Audience",
            "audienceType": "Startups, Enterprises, Product Teams"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "UI/UX Design Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "User Research & Strategy"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Wireframing & Prototyping"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Visual Design & Branding"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Usability Testing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Design Systems"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile App Design"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Web & Dashboard Design"
                    }
                }
            ]
        }
    };

    // FAQ Schema for UI/UX design questions
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is UI/UX design?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "UI (User Interface) design focuses on the visual elements users interact with, while UX (User Experience) design focuses on the overall feel and usability. Together, they create intuitive, enjoyable digital products."
                }
            },
            {
                "@type": "Question",
                "name": "Why is UI/UX design important?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Good UI/UX design improves user satisfaction, increases engagement, reduces development costs by catching issues early, and directly impacts business metrics like conversion rates and customer retention."
                }
            },
            {
                "@type": "Question",
                "name": "What is your design process?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our process includes: 1) Research & Discovery, 2) Strategy & Information Architecture, 3) Wireframing & Prototyping, 4) Visual Design, 5) Usability Testing, 6) Design Handoff, and 7) Iterative Improvements."
                }
            },
            {
                "@type": "Question",
                "name": "Do you design for both web and mobile?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we design for all platforms including web applications, mobile apps (iOS/Android), responsive websites, and complex dashboards, following platform-specific guidelines."
                }
            },
            {
                "@type": "Question",
                "name": "What tools do you use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use industry-standard tools including Figma, Sketch, Adobe XD, InVision, Miro for collaboration, and various usability testing and prototyping tools."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide design systems?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we create scalable design systems with component libraries, design tokens, and comprehensive documentation to ensure consistency across your products."
                }
            },
            {
                "@type": "Question",
                "name": "How do you measure design success?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We measure success through usability metrics, user satisfaction scores, task completion rates, conversion improvements, and qualitative user feedback."
                }
            }
        ]
    };

    return (
        <>
            <Helmet>
                {/* ---------- BASIC META TAGS ---------- */}
                <html lang="en" />
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content="UI UX design, user experience design, user interface design, product design, UX research, wireframing, prototyping, visual design, usability testing, design systems, mobile app design, web design, dashboard design, Figma design, UX strategy, interaction design" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="UI/UX Design Services - Athenura" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Athenura UI/UX Design Services" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="UI/UX Design Services | Athenura" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Athenura UI/UX Design" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura UI/UX" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                {/* ---------- SERVICE-SPECIFIC META ---------- */}
                <meta name="service:type" content="UI/UX Design" />
                <meta name="service:audience" content="Startups, Enterprises, Product Teams" />
                <meta name="service:offerings" content="Research, Wireframing, Visual Design, Testing, Design Systems, Mobile, Web" />
                <meta name="service:tools" content="Figma, Sketch, Adobe XD, InVision" />
                
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
                    {JSON.stringify(serviceSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqData)}
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
                <UiUxHero />
                <DesignProcess />
                <CaseStudies />
                <Capabilities />
            </div>
        </>
    )
}

export default UIUXMain