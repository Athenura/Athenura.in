import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from './TestingHero'
import Services from './TestingServices'
import Process from './ProccesTesting'

const TestingMain = () => {
    const siteUrl = 'https://athenura.in';
    const canonicalUrl = `${siteUrl}/services/testing`;
    
    const pageTitle = "Software Testing Services - Athenura | QA, Automation & Performance Testing";
    const pageDescription = "Professional software testing services by Athenura. Comprehensive QA, automated testing, performance testing, and security testing solutions to ensure your software works flawlessly. Expert testers, proven methodologies.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-testing-og.jpg";

    // WebPage Schema for software testing page
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
            "name": "Software Testing, QA Services, Automation Testing, Performance Testing"
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
                    "name": "Software Testing",
                    "item": canonicalUrl
                }
            ]
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Athenura Software Testing Services",
            "description": "Comprehensive software testing and QA services",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Service",
                        "name": "Manual Testing",
                        "description": "Comprehensive manual testing to identify bugs and usability issues",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Software Testing",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises, Startups"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#manual-testing`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Service",
                        "name": "Automation Testing",
                        "description": "Automated test scripts for efficient and repeatable testing",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Software Testing",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises, Startups"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#automation-testing`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "Service",
                        "name": "Performance Testing",
                        "description": "Load, stress, and scalability testing to ensure optimal performance",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Software Testing",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises, Startups"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#performance-testing`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "Service",
                        "name": "Security Testing",
                        "description": "Vulnerability assessment and penetration testing to secure your applications",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Software Testing",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises, Startups"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#security-testing`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                        "@type": "Service",
                        "name": "API Testing",
                        "description": "Comprehensive testing of APIs for functionality, reliability, and security",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Software Testing",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises, Startups"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#api-testing`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 6,
                    "item": {
                        "@type": "Service",
                        "name": "Mobile App Testing",
                        "description": "Testing for iOS and Android apps across devices and platforms",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Software Testing",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises, Startups"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#mobile-testing`
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
                "name": "Software Testing",
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
        "description": "Software testing and QA services provider offering comprehensive testing solutions",
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

    // Product/Service Schema for testing offerings
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Athenura Software Testing Services",
        "description": "End-to-end software testing including manual, automation, performance, security, API, and mobile testing",
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
            "name": "Software Testing Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Manual Testing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Automation Testing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Performance Testing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Security Testing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "API Testing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile App Testing"
                    }
                }
            ]
        }
    };

    // FAQ Schema for testing questions
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What types of software testing do you offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer comprehensive testing services including manual testing, automation testing, performance testing, security testing, API testing, and mobile app testing."
                }
            },
            {
                "@type": "Question",
                "name": "Why is software testing important?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Software testing ensures your application works correctly, performs well under load, is secure from vulnerabilities, and provides a good user experience. It saves costs by catching issues early."
                }
            },
            {
                "@type": "Question",
                "name": "What is automation testing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Automation testing uses scripts and tools to execute tests automatically, making it efficient for repetitive tasks, regression testing, and large-scale test execution."
                }
            },
            {
                "@type": "Question",
                "name": "Do you test mobile applications?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we test mobile apps for both iOS and Android platforms across various devices, screen sizes, and OS versions to ensure consistent performance."
                }
            },
            {
                "@type": "Question",
                "name": "What tools do you use for testing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use industry-standard tools including Selenium, JUnit, TestNG, JMeter, LoadRunner, Postman, OWASP ZAP, and various mobile testing frameworks."
                }
            },
            {
                "@type": "Question",
                "name": "How do you ensure security in applications?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We perform comprehensive security testing including vulnerability assessment, penetration testing, and compliance checks to identify and fix security risks."
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
                <meta name="keywords" content="software testing, QA services, quality assurance, automation testing, performance testing, security testing, API testing, mobile app testing, manual testing, test automation, software QA, testing services India, regression testing, load testing, penetration testing" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="index, follow" />                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Software Testing Services - Athenura" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Athenura Software Testing Services" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Software Testing Services | Athenura" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Athenura Software Testing" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Testing" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                {/* ---------- SERVICE-SPECIFIC META ---------- */}
                <meta name="service:type" content="Software Testing" />
                <meta name="service:audience" content="Businesses, Enterprises, Startups" />
                <meta name="service:offerings" content="Manual, Automation, Performance, Security, API, Mobile Testing" />
                
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
                <Hero />
                <Services />
                <Process />
            </div>
        </>
    )
}

export default TestingMain