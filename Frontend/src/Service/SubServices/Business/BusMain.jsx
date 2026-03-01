import React from 'react'
import { Helmet } from 'react-helmet-async'
import BusHero from "./BusHero"
import AutomationSolutions from './AutomationSolutions'
import AutomationFeatures from './Features'

const BusMain = () => {
    const siteUrl = 'https://athenura.in';
    const canonicalUrl = `${siteUrl}/services/automation`;
    
    const pageTitle = "Business Automation Solutions - Athenura | Streamline Operations with Smart Automation";
    const pageDescription = "Transform your business with Athenura's automation solutions. Streamline operations, reduce manual work, and boost productivity with intelligent automation tools and custom solutions for modern businesses. Perfect for enterprises seeking efficiency.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-automation-og.jpg";


    // WebPage Schema for business automation page
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
            "name": "Business Automation, Workflow Optimization, Smart Solutions"
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
                    "name": "Business Automation",
                    "item": canonicalUrl
                }
            ]
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Athenura Automation Solutions",
            "description": "Comprehensive business automation services",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Service",
                        "name": "Workflow Automation",
                        "description": "Streamline and automate repetitive business workflows to increase efficiency and reduce errors",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Business Automation",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#workflow-automation`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Service",
                        "name": "Process Optimization",
                        "description": "Optimize business processes for maximum efficiency and cost reduction",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Business Consulting",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#process-optimization`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "Service",
                        "name": "Smart Automation Tools",
                        "description": "Intelligent tools to automate complex business tasks and decision-making processes",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Software Solutions",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#smart-tools`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "Service",
                        "name": "Custom Automation Solutions",
                        "description": "Tailored automation solutions designed specifically for your unique business needs",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Custom Development",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#custom-solutions`
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
                "name": "Business Automation",
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
        "description": "Remote-first skill development platform offering business automation solutions and services",
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

    // Product/Service Schema for automation offerings
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Athenura Business Automation Solutions",
        "description": "Comprehensive business automation services including workflow automation, process optimization, and custom automation tools",
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
            "audienceType": "Businesses and Enterprises"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Automation Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Workflow Automation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Process Optimization"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Smart Automation Tools"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Automation Solutions"
                    }
                }
            ]
        }
    };

    // FAQ Schema for automation questions
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is business automation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Business automation is the use of technology to automate repetitive tasks and processes, reducing manual effort, minimizing errors, and increasing operational efficiency."
                }
            },
            {
                "@type": "Question",
                "name": "How can automation benefit my business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Automation can reduce operational costs, improve accuracy, speed up processes, free up employee time for strategic work, and provide better data for decision-making."
                }
            },
            {
                "@type": "Question",
                "name": "What types of processes can be automated?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Common automation areas include data entry, customer communications, invoice processing, report generation, workflow approvals, and repetitive administrative tasks."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide custom automation solutions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in creating custom automation solutions tailored to your specific business needs and workflows."
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
                <meta name="keywords" content="business automation, workflow automation, process optimization, automation solutions, smart automation tools, business process automation, enterprise automation, custom automation, automation services India, business efficiency, operational automation, digital transformation" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Business Automation Solutions - Athenura" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Athenura Business Automation Solutions" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Business Automation Solutions | Athenura" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Athenura Business Automation" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Automation" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                {/* ---------- SERVICE-SPECIFIC META ---------- */}
                <meta name="service:type" content="Business Automation" />
                <meta name="service:audience" content="Businesses, Enterprises" />
                <meta name="service:delivery" content="Custom Solutions" />
                
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
                <BusHero />
                <AutomationSolutions />
                <AutomationFeatures />
            </div>
        </>
    )
}

export default BusMain