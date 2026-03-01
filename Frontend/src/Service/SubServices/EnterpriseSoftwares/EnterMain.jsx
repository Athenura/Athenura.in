import React from 'react'
import { Helmet } from 'react-helmet-async'
import EnterpriseHero from './EnterHero'
import EnterpriseSolutions from './EnterSolutions'
import EnterpriseTrust from './Trust'

const EnterMain = () => {
    const siteUrl = 'https://athenura.in';
    const canonicalUrl = `${siteUrl}/services/enterprise`;
    
    const pageTitle = "Enterprise Software Solutions - Athenura | Scalable Business Software for Enterprises";
    const pageDescription = "Transform your enterprise with Athenura's scalable software solutions. Custom enterprise applications, ERP systems, CRM platforms, and digital transformation tools built for large-scale businesses. Secure, reliable, and future-ready.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-enterprise-og.jpg";


    // WebPage Schema for enterprise software page
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
            "name": "Enterprise Software, ERP Systems, CRM Solutions, Digital Transformation"
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
                    "name": "Enterprise Software",
                    "item": canonicalUrl
                }
            ]
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Athenura Enterprise Solutions",
            "description": "Comprehensive enterprise software offerings for large-scale businesses",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Service",
                        "name": "ERP Systems",
                        "description": "End-to-end Enterprise Resource Planning solutions to integrate and streamline all business processes",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Enterprise Software",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Large Enterprises, Corporations"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#erp-systems`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Service",
                        "name": "CRM Platforms",
                        "description": "Custom Customer Relationship Management solutions to manage sales, marketing, and customer support",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Enterprise Software",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Large Enterprises, Corporations"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#crm-platforms`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "Service",
                        "name": "Supply Chain Management",
                        "description": "Comprehensive SCM solutions for inventory, logistics, and supplier management",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Enterprise Software",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Large Enterprises, Corporations"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#supply-chain`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "Service",
                        "name": "Business Intelligence",
                        "description": "Advanced analytics and reporting solutions for data-driven decision making",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Enterprise Software",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Large Enterprises, Corporations"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#business-intelligence`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                        "@type": "Service",
                        "name": "Human Capital Management",
                        "description": "HRMS solutions for workforce management, payroll, and talent acquisition",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Enterprise Software",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Large Enterprises, Corporations"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#hcm`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 6,
                    "item": {
                        "@type": "Service",
                        "name": "Digital Transformation",
                        "description": "End-to-end digital transformation services for modernizing enterprise operations",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Consulting & Implementation",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Large Enterprises, Corporations"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#digital-transformation`
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
                "name": "Enterprise Software",
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
        "description": "Enterprise software solutions provider offering ERP, CRM, and digital transformation services",
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

    // Product/Service Schema for enterprise offerings
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Athenura Enterprise Software Solutions",
        "description": "Comprehensive enterprise software including ERP, CRM, SCM, BI, HCM, and digital transformation services",
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
            "audienceType": "Large Enterprises, Corporations"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Enterprise Software Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "ERP Systems"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "CRM Platforms"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Supply Chain Management"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Business Intelligence"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Human Capital Management"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Digital Transformation"
                    }
                }
            ]
        }
    };

    // FAQ Schema for enterprise software questions
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is enterprise software?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Enterprise software is large-scale software designed to meet the complex needs of organizations rather than individual users. It includes ERP, CRM, SCM, and other systems that integrate and manage business processes across an entire organization."
                }
            },
            {
                "@type": "Question",
                "name": "What ERP systems do you develop?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We develop custom ERP solutions tailored to your specific industry and business processes, integrating finance, HR, supply chain, manufacturing, and other core functions into a unified system."
                }
            },
            {
                "@type": "Question",
                "name": "How do you ensure enterprise software security?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We implement enterprise-grade security including role-based access control, encryption, audit trails, compliance with industry standards (ISO, GDPR), and regular security audits and penetration testing."
                }
            },
            {
                "@type": "Question",
                "name": "Can your solutions integrate with existing systems?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our enterprise solutions are designed with robust API layers and integration capabilities to seamlessly connect with your existing software ecosystem, including legacy systems."
                }
            },
            {
                "@type": "Question",
                "name": "What industries do you serve?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve various industries including manufacturing, healthcare, financial services, retail, logistics, education, and more, with solutions tailored to industry-specific requirements."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide ongoing support and maintenance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer comprehensive enterprise support packages including 24/7 monitoring, regular updates, security patches, performance optimization, and dedicated account management."
                }
            },
            {
                "@type": "Question",
                "name": "How scalable are your enterprise solutions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our solutions are built on scalable architectures that can handle millions of transactions, thousands of concurrent users, and can grow with your business from regional to global operations."
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
                <meta name="keywords" content="enterprise software, ERP systems, CRM platforms, supply chain management, business intelligence, digital transformation, enterprise solutions, large-scale software, corporate software, ERP development, CRM development, enterprise application development, business software India" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Enterprise Software Solutions - Athenura" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Athenura Enterprise Software Solutions" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Enterprise Software Solutions | Athenura" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Athenura Enterprise Software" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Enterprise" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                {/* ---------- SERVICE-SPECIFIC META ---------- */}
                <meta name="service:type" content="Enterprise Software" />
                <meta name="service:audience" content="Large Enterprises, Corporations" />
                <meta name="service:solutions" content="ERP, CRM, SCM, BI, HCM, Digital Transformation" />
                
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
                <EnterpriseHero />
                <EnterpriseSolutions />
                <EnterpriseTrust />
            </div>
        </>
    )
}

export default EnterMain