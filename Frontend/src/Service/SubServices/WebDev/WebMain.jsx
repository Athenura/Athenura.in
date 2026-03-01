import React from 'react'
import { Helmet } from 'react-helmet-async'
import WebAppHero from './WebHero'
import WhatWeOffer from './WebWeOffer'
import TargetIndustries from './WebIndustries'
import WebProcess from "./WebProccess" 

const WebMain = () => {
    const siteUrl = 'https://athenura.in';
    const canonicalUrl = `${siteUrl}/services/web-apps`;
    
    const pageTitle = "Web Application Development - Athenura | Custom Web Apps & Modern Solutions";
    const pageDescription = "Professional web application development services by Athenura. We build custom web apps, SaaS platforms, and enterprise solutions using modern technologies. Scalable, secure, and user-focused development for startups and businesses.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-webapps-og.jpg";

    // WebPage Schema for web application development page
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
            "name": "Web Application Development, Custom Web Apps, SaaS Development"
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
                    "name": "Web Application Development",
                    "item": canonicalUrl
                }
            ]
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Athenura Web Application Development Services",
            "description": "Comprehensive web application development offerings",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Service",
                        "name": "Custom Web Applications",
                        "description": "Tailored web applications built from scratch to meet your specific business requirements",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Web Development",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Startups, Businesses, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#custom-web-apps`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Service",
                        "name": "SaaS Platform Development",
                        "description": "Scalable Software-as-a-Service platforms with multi-tenancy and subscription management",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "SaaS Development",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Startups, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#saas-development`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "Service",
                        "name": "E-commerce Solutions",
                        "description": "Custom e-commerce platforms with inventory management, payment integration, and analytics",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "E-commerce Development",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Retail, D2C Brands, Businesses"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#ecommerce`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "Service",
                        "name": "Enterprise Web Portals",
                        "description": "Secure, scalable web portals for enterprise resource management and collaboration",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Enterprise Development",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Large Enterprises, Corporations"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#enterprise-portals`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                        "@type": "Service",
                        "name": "API Development & Integration",
                        "description": "RESTful and GraphQL APIs for seamless integration with third-party services",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "API Development",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Startups, Businesses, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#api-development`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 6,
                    "item": {
                        "@type": "Service",
                        "name": "Progressive Web Apps (PWA)",
                        "description": "Fast, reliable, and engaging PWAs that work offline and provide app-like experience",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "PWA Development",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Startups, Businesses"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#pwa`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 7,
                    "item": {
                        "@type": "Service",
                        "name": "Dashboard & Analytics Platforms",
                        "description": "Interactive dashboards with real-time data visualization and business intelligence",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Analytics Development",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#dashboard-platforms`
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
                "name": "Web Application Development",
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
        "description": "Web application development company building custom web apps and SaaS platforms",
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

    // Service Schema for web development offerings
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Athenura Web Application Development Services",
        "description": "End-to-end web development including custom apps, SaaS platforms, e-commerce, enterprise portals, and PWAs",
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
            "audienceType": "Startups, Businesses, Enterprises"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Web Applications"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SaaS Platform Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "E-commerce Solutions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Enterprise Web Portals"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "API Development & Integration"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Progressive Web Apps"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Dashboard & Analytics Platforms"
                    }
                }
            ]
        }
    };

    // FAQ Schema for web development questions
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What web development services do you offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer comprehensive web development services including custom web applications, SaaS platforms, e-commerce solutions, enterprise portals, API development, progressive web apps (PWA), and dashboard platforms."
                }
            },
            {
                "@type": "Question",
                "name": "What technologies do you use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use modern technologies including React, Next.js, Node.js, Python (Django/Flask), PHP (Laravel), .NET Core, and various databases like PostgreSQL, MongoDB, and MySQL."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to develop a web application?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Timelines vary based on complexity. A simple web app can take 2-3 months, while complex SaaS platforms may take 4-8 months. We provide detailed timelines during consultation."
                }
            },
            {
                "@type": "Question",
                "name": "Do you build e-commerce websites?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we build custom e-commerce platforms with features like product management, shopping cart, payment gateway integration, inventory management, and analytics."
                }
            },
            {
                "@type": "Question",
                "name": "What is a Progressive Web App (PWA)?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A PWA is a web application that provides an app-like experience with offline functionality, push notifications, and fast loading, while being accessible through a browser without app store installation."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide maintenance after launch?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer comprehensive maintenance packages including security updates, performance optimization, bug fixes, and feature enhancements to keep your application running smoothly."
                }
            },
            {
                "@type": "Question",
                "name": "Can you integrate with third-party services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we have extensive experience integrating with payment gateways, CRMs, ERPs, marketing tools, and various third-party APIs to create seamless workflows."
                }
            },
            {
                "@type": "Question",
                "name": "What industries do you serve?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve various industries including healthcare, fintech, e-commerce, education, logistics, real estate, and more, with solutions tailored to industry-specific needs."
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
                <meta name="keywords" content="web application development, custom web apps, SaaS development, e-commerce development, enterprise web portals, API development, progressive web apps, PWA development, dashboard development, web development company, React development, Node.js development, full stack web development" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Web Application Development - Athenura" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Athenura Web Application Development" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Web Application Development | Athenura" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Athenura Web Development" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Web Apps" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                {/* ---------- SERVICE-SPECIFIC META ---------- */}
                <meta name="service:type" content="Web Application Development" />
                <meta name="service:audience" content="Startups, Businesses, Enterprises" />
                <meta name="service:offerings" content="Custom Web Apps, SaaS, E-commerce, Enterprise Portals, APIs, PWA, Dashboards" />
                <meta name="service:technologies" content="React, Node.js, Python, PHP, .NET, MongoDB, PostgreSQL" />
                
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
                <WebAppHero />
                <WhatWeOffer />
                <TargetIndustries />
                <WebProcess />
            </div>
        </>
    )
}

export default WebMain