import React from 'react'
import { Helmet } from 'react-helmet-async'
import AdvancedPortfolio from './AdvancedPortfolio'
import PortfolioHero from './PortfolioHero'
import ArchitectureSection from './Architecture'
import Roadmap from "./Roadmap"

const PortfolioMain = () => {
    const siteUrl = 'https://athenura.in';
    const canonicalUrl = `${siteUrl}/portfolio`;
    
    const pageTitle = "Our Portfolio - Athenura | Showcasing Our Best Work & Client Success Stories";
    const pageDescription = "Explore Athenura's portfolio of successful projects. See our work in web development, mobile apps, UI/UX design, and enterprise solutions. Real projects, real results for clients across industries.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-portfolio-og.jpg";

    // WebPage Schema for portfolio page
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
            "name": "Portfolio, Case Studies, Client Work, Success Stories"
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
                    "name": "Portfolio",
                    "item": canonicalUrl
                }
            ]
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Athenura Portfolio Projects",
            "description": "Collection of our best work and client success stories",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "CreativeWork",
                        "name": "E-commerce Platform",
                        "description": "Custom e-commerce solution with advanced inventory management",
                        "creator": {
                            "@type": "Organization",
                            "name": "Athenura"
                        },
                        "url": `${canonicalUrl}#ecommerce-platform`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "CreativeWork",
                        "name": "Healthcare Mobile App",
                        "description": "Patient management and telemedicine application",
                        "creator": {
                            "@type": "Organization",
                            "name": "Athenura"
                        },
                        "url": `${canonicalUrl}#healthcare-app`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "CreativeWork",
                        "name": "FinTech Dashboard",
                        "description": "Real-time financial analytics and reporting platform",
                        "creator": {
                            "@type": "Organization",
                            "name": "Athenura"
                        },
                        "url": `${canonicalUrl}#fintech-dashboard`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "CreativeWork",
                        "name": "SaaS Platform",
                        "description": "Multi-tenant SaaS platform with subscription management",
                        "creator": {
                            "@type": "Organization",
                            "name": "Athenura"
                        },
                        "url": `${canonicalUrl}#saas-platform`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                        "@type": "CreativeWork",
                        "name": "UI/UX Design System",
                        "description": "Comprehensive design system for enterprise applications",
                        "creator": {
                            "@type": "Organization",
                            "name": "Athenura"
                        },
                        "url": `${canonicalUrl}#design-system`
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
                "name": "Portfolio",
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
        "description": "Digital agency showcasing successful projects in web development, mobile apps, and design",
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

    // CollectionPage Schema specifically for portfolio
    const collectionPageData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#collection`,
        "name": "Athenura Project Portfolio",
        "description": "A collection of our best work and client success stories",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Athenura",
            "url": siteUrl
        },
        "hasPart": [
            {
                "@type": "CreativeWork",
                "name": "E-commerce Platform",
                "description": "Custom e-commerce solution with advanced inventory management",
                "creator": { "@type": "Organization", "name": "Athenura" }
            },
            {
                "@type": "CreativeWork",
                "name": "Healthcare Mobile App",
                "description": "Patient management and telemedicine application",
                "creator": { "@type": "Organization", "name": "Athenura" }
            },
            {
                "@type": "CreativeWork",
                "name": "FinTech Dashboard",
                "description": "Real-time financial analytics and reporting platform",
                "creator": { "@type": "Organization", "name": "Athenura" }
            },
            {
                "@type": "CreativeWork",
                "name": "SaaS Platform",
                "description": "Multi-tenant SaaS platform with subscription management",
                "creator": { "@type": "Organization", "name": "Athenura" }
            },
            {
                "@type": "CreativeWork",
                "name": "UI/UX Design System",
                "description": "Comprehensive design system for enterprise applications",
                "creator": { "@type": "Organization", "name": "Athenura" }
            }
        ]
    };

    // FAQ Schema for portfolio questions
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What types of projects do you showcase in your portfolio?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our portfolio includes web applications, mobile apps, e-commerce platforms, SaaS solutions, enterprise software, and UI/UX design projects across various industries."
                }
            },
            {
                "@type": "Question",
                "name": "Can I see case studies with results?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, each project in our portfolio includes detailed case studies with problem statements, our approach, solutions implemented, and measurable results achieved for our clients."
                }
            },
            {
                "@type": "Question",
                "name": "Do you work with startups or enterprises?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We work with both startups and enterprises. Our portfolio showcases projects for early-stage startups as well as large-scale enterprise solutions."
                }
            },
            {
                "@type": "Question",
                "name": "Can I see live demos of your work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Where possible, we provide links to live projects or demo versions. For client work with confidentiality agreements, we share detailed case studies and screenshots instead."
                }
            },
            {
                "@type": "Question",
                "name": "What industries have you worked with?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We have experience across healthcare, fintech, e-commerce, education, logistics, real estate, and more. Our portfolio reflects this diversity."
                }
            },
            {
                "@type": "Question",
                "name": "How can I get a project similar to what I see?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Contact us through our website to discuss your project requirements. We'll schedule a consultation to understand your needs and provide a tailored solution."
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
                <meta name="keywords" content="portfolio, web development portfolio, mobile app portfolio, design portfolio, case studies, client work, success stories, project showcase, digital agency portfolio, software development examples, UI UX portfolio, enterprise solutions showcase" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="index, follow" />                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Our Portfolio - Athenura" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Athenura Portfolio - Our Best Work" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Our Portfolio | Athenura" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Athenura Portfolio" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Portfolio" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                {/* ---------- PORTFOLIO-SPECIFIC META ---------- */}
                <meta name="portfolio:categories" content="Web Development, Mobile Apps, UI/UX Design, Enterprise Solutions" />
                <meta name="portfolio:industries" content="Healthcare, FinTech, E-commerce, Education, Logistics" />
                
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
                    {JSON.stringify(collectionPageData)}
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
                <PortfolioHero />
                <AdvancedPortfolio />
                <ArchitectureSection />
                <Roadmap />
            </div>
        </>
    )
}

export default PortfolioMain