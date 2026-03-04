import React from 'react'
import { Helmet } from 'react-helmet-async'
import CustomSoftwareHero from './CustomeHero'
import ServiceBreakdown from './CustomeWeOffers'
import TechAndProcess from './TechAndProcces'
import IndustriesServed from './CustomIndustries'
import FinalCTA from './FinalCustom'

const CustomMain = () => {
    const siteUrl = 'https://athenura.in';
    const canonicalUrl = `${siteUrl}/services/custom-software`;
    
    const pageTitle = "Custom Software Development - Athenura | Tailored Solutions for Your Business";
    const pageDescription = "Get custom software development solutions from Athenura. We build tailored applications, enterprise software, and digital solutions designed specifically for your business needs. Expert team, modern tech stack, and proven process.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-custom-software-og.jpg";


    // WebPage Schema for custom software page
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
            "name": "Custom Software Development, Enterprise Solutions, Tailored Applications"
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
                    "name": "Custom Software Development",
                    "item": canonicalUrl
                }
            ]
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Athenura Custom Software Services",
            "description": "Comprehensive custom software development offerings",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Service",
                        "name": "Enterprise Software Development",
                        "description": "Scalable, secure enterprise applications tailored to your business processes",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Software Development",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#enterprise-software`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Service",
                        "name": "Web Application Development",
                        "description": "Custom web applications built with modern frameworks and best practices",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Web Development",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Startups"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#web-apps`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "Service",
                        "name": "Mobile Application Development",
                        "description": "Native and cross-platform mobile apps for iOS and Android",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Mobile Development",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Startups"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#mobile-apps`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "Service",
                        "name": "API Development & Integration",
                        "description": "Custom API development and third-party integrations for seamless workflows",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "API Development",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#api-integration`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                        "@type": "Service",
                        "name": "Legacy System Modernization",
                        "description": "Upgrade and modernize legacy systems with current technologies",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Software Modernization",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#legacy-modernization`
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
                "name": "Custom Software Development",
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
        "description": "Custom software development company building tailored solutions for businesses",
        "foundingDate": "2026",
        "email": "official@athenura.in",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        }
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

    // Product/Service Schema for software development
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Athenura Custom Software Development",
        "description": "End-to-end custom software development services including enterprise software, web apps, mobile apps, and API integration",
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
            "audienceType": "Businesses, Enterprises, Startups"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Enterprise Software Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Web Application Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile Application Development"
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
                        "name": "Legacy System Modernization"
                    }
                }
            ]
        }
    };

    // FAQ Schema for custom software questions
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is custom software development?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Custom software development is the process of designing, creating, and maintaining software applications specifically tailored to meet the unique needs of a business, rather than using off-the-shelf solutions."
                }
            },
            {
                "@type": "Question",
                "name": "Why choose custom software over off-the-shelf solutions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Custom software offers exact fit to your business processes, scalability as you grow, competitive advantage, better integration with existing systems, and you own the intellectual property."
                }
            },
            {
                "@type": "Question",
                "name": "What technologies do you use for custom development?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use modern tech stacks including React, Node.js, Python, Java, .NET, Flutter, React Native, and various databases. We choose the best technology for your specific requirements."
                }
            },
            {
                "@type": "Question",
                "name": "How long does custom software development take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Timelines vary based on complexity. A simple web app might take 2-3 months, while complex enterprise systems can take 6-12 months. We provide detailed timelines during consultation."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide maintenance after development?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer comprehensive maintenance and support packages to ensure your software runs smoothly, stays secure, and evolves with your business needs."
                }
            },
            {
                "@type": "Question",
                "name": "What industries do you serve?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve various industries including healthcare, finance, education, retail, manufacturing, logistics, and more. Our solutions are tailored to industry-specific requirements."
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
                <meta name="keywords" content="custom software development, enterprise software development, web application development, mobile app development, API integration, legacy system modernization, software development company India, custom application development, tailored software solutions, business software development" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="index, follow" />                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Custom Software Development - Athenura" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Athenura Custom Software Development" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Custom Software Development | Athenura" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Athenura Custom Software" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Custom Software" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                {/* ---------- SERVICE-SPECIFIC META ---------- */}
                <meta name="service:type" content="Custom Software Development" />
                <meta name="service:audience" content="Businesses, Enterprises, Startups" />
                <meta name="service:technologies" content="React, Node.js, Python, Java, Flutter" />
                
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
                <CustomSoftwareHero />
                <ServiceBreakdown />
                <TechAndProcess />
                <IndustriesServed />
                <FinalCTA />
            </div>
        </>
    )
}

export default CustomMain