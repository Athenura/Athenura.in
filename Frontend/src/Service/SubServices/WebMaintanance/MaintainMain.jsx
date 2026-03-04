import React from 'react'
import { Helmet } from 'react-helmet-async'
import MaintenanceHero from './MaintainHero'
import MaintenanceFeatures from './MaintenanceFeatures'
import MaintenanceWorkflow from './WorkFlow'
import MaintenanceCTA from './MaintainCTA'

const MaintainMain = () => {
    const siteUrl = 'https://athenura.in';
    const canonicalUrl = `${siteUrl}/services/maintenance`;
    
    const pageTitle = "Web Maintenance Services - Athenura | Website Care & Support Packages";
    const pageDescription = "Professional web maintenance services by Athenura. Keep your website secure, updated, and performing at its best with our comprehensive maintenance packages. Security updates, backups, monitoring, and 24/7 support.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-maintenance-og.jpg";

    // WebPage Schema for web maintenance page
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
            "name": "Web Maintenance, Website Care, Security Updates, Performance Optimization"
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
                    "name": "Web Maintenance",
                    "item": canonicalUrl
                }
            ]
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Athenura Web Maintenance Services",
            "description": "Comprehensive website maintenance and support packages",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Service",
                        "name": "Security Updates & Patches",
                        "description": "Regular security updates for CMS, plugins, and frameworks to protect your site from vulnerabilities",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Website Maintenance",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises, Individuals"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#security-updates`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Service",
                        "name": "Regular Backups",
                        "description": "Automated daily/weekly backups with secure storage and easy restoration options",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Website Maintenance",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises, Individuals"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#backups`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "Service",
                        "name": "Performance Monitoring",
                        "description": "24/7 monitoring of website speed, uptime, and performance with proactive optimization",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Website Maintenance",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#performance-monitoring`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "Service",
                        "name": "Bug Fixes & Error Resolution",
                        "description": "Quick identification and resolution of website bugs, broken links, and functional issues",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Website Maintenance",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises, Individuals"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#bug-fixes`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                        "@type": "Service",
                        "name": "Content Updates",
                        "description": "Regular content updates including text changes, image updates, and new page additions",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Content Management",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises, Individuals"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#content-updates`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 6,
                    "item": {
                        "@type": "Service",
                        "name": "SEO Maintenance",
                        "description": "Ongoing SEO optimization including meta updates, sitemap submission, and ranking monitoring",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "SEO Services",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#seo-maintenance`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 7,
                    "item": {
                        "@type": "Service",
                        "name": "Emergency Support",
                        "description": "24/7 emergency support for critical issues like site crashes or security breaches",
                        "provider": { 
                            "@type": "Organization", 
                            "name": "Athenura",
                            "url": siteUrl
                        },
                        "serviceType": "Technical Support",
                        "audience": {
                            "@type": "Audience",
                            "audienceType": "Businesses, Enterprises"
                        },
                        "areaServed": "IN",
                        "url": `${canonicalUrl}#emergency-support`
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
                "name": "Web Maintenance",
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
        "description": "Web maintenance and support services provider offering comprehensive website care packages",
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

    // Service Schema for maintenance offerings
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Athenura Web Maintenance Services",
        "description": "Complete website care including security updates, backups, performance monitoring, bug fixes, content updates, and emergency support",
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
            "audienceType": "Businesses, Enterprises, Individuals"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Website Maintenance Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Security Updates & Patches"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Regular Backups"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Performance Monitoring"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Bug Fixes & Error Resolution"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Content Updates"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SEO Maintenance"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Emergency Support"
                    }
                }
            ]
        }
    };

    // FAQ Schema for maintenance questions
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is website maintenance important?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Regular maintenance keeps your website secure, fast, and reliable. It prevents security breaches, ensures compatibility with new technologies, improves user experience, and protects your SEO rankings."
                }
            },
            {
                "@type": "Question",
                "name": "What does your maintenance package include?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our packages include security updates, regular backups, performance monitoring, bug fixes, content updates, SEO maintenance, and emergency support. Packages can be customized based on your needs."
                }
            },
            {
                "@type": "Question",
                "name": "How often do you perform backups?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer daily or weekly backups depending on your package. All backups are stored securely and can be restored quickly in case of any issues."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide emergency support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer 24/7 emergency support for critical issues like site crashes, security breaches, or urgent updates. Our team responds immediately to minimize downtime."
                }
            },
            {
                "@type": "Question",
                "name": "Can you update website content?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we handle all types of content updates including text changes, image updates, blog posts, product additions, and new page creation as per your requirements."
                }
            },
            {
                "@type": "Question",
                "name": "How do you monitor website performance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use advanced monitoring tools to track uptime, page speed, core web vitals, and server performance. We proactively optimize based on the data we collect."
                }
            },
            {
                "@type": "Question",
                "name": "What platforms do you support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We support all major platforms including WordPress, Shopify, custom-built websites, React/Node.js applications, PHP frameworks, and more."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer SEO maintenance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our SEO maintenance includes meta tag updates, sitemap submission, broken link fixing, and regular monitoring of search rankings to maintain your visibility."
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
                <meta name="keywords" content="website maintenance, web maintenance services, website care, website support, security updates, website backups, performance monitoring, bug fixes, content updates, SEO maintenance, emergency website support, website management, wordpress maintenance, website upkeep" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="index, follow" />                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Web Maintenance Services - Athenura" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Athenura Web Maintenance Services" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Web Maintenance Services | Athenura" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Athenura Web Maintenance" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Maintenance" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                {/* ---------- SERVICE-SPECIFIC META ---------- */}
                <meta name="service:type" content="Web Maintenance" />
                <meta name="service:audience" content="Businesses, Enterprises, Individuals" />
                <meta name="service:offerings" content="Security, Backups, Monitoring, Bug Fixes, Content Updates, SEO, Emergency Support" />
                
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
                <MaintenanceHero />
                <MaintenanceWorkflow />
                <MaintenanceFeatures />
                <MaintenanceCTA />
            </div>
        </>
    )
}

export default MaintainMain