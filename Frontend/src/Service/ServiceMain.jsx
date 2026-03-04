import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroService from "./HeroService"
import ServiceCard from "./ServiceCard"
import NonTechService from "./NonTechService"
import TechTools from "./TechTools"
import ServiceCTA from "./ServiceCTA"
import WhyUs from "./WhyUS"

const ServiceMain = () => {
    const siteUrl = 'https://athenura.in';
    const canonicalUrl = `${siteUrl}/services`;
    
    const pageTitle = "Our Services - Athenura | Skill Development, Internships & Career Growth Programs";
    const pageDescription = "Explore Athenura's comprehensive services — technical and non-technical skill development programs, internship opportunities, career mentoring, and professional growth resources for students and graduates.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-services-og.jpg";

    // WebPage Schema for services page
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
            "name": "Skill Development Services, Internships, Career Programs"
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
                    "item": canonicalUrl
                }
            ]
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Athenura Services",
            "description": "Complete range of skill development and internship services",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Service",
                        "name": "Full-Stack Development Program",
                        "description": "Comprehensive full-stack development training with real projects",
                        "provider": { "@type": "Organization", "name": "Athenura" },
                        "serviceType": "Technical Training",
                        "audience": "Students & Graduates"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Service",
                        "name": "Data Science & Analytics Program",
                        "description": "Hands-on data science training with industry projects",
                        "provider": { "@type": "Organization", "name": "Athenura" },
                        "serviceType": "Technical Training",
                        "audience": "Students & Graduates"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "Service",
                        "name": "UI/UX Design Program",
                        "description": "Professional UI/UX design training with portfolio projects",
                        "provider": { "@type": "Organization", "name": "Athenura" },
                        "serviceType": "Design Training",
                        "audience": "Students & Graduates"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "Service",
                        "name": "Digital Marketing Program",
                        "description": "Comprehensive digital marketing training with real campaigns",
                        "provider": { "@type": "Organization", "name": "Athenura" },
                        "serviceType": "Marketing Training",
                        "audience": "Students & Graduates"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                        "@type": "Service",
                        "name": "Non-Technical Skill Development",
                        "description": "Soft skills, communication, and professional development training",
                        "provider": { "@type": "Organization", "name": "Athenura" },
                        "serviceType": "Professional Development",
                        "audience": "Students & Graduates"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 6,
                    "item": {
                        "@type": "Service",
                        "name": "Career Mentoring & Placement Support",
                        "description": "Personalized career guidance and job placement assistance",
                        "provider": { "@type": "Organization", "name": "Athenura" },
                        "serviceType": "Career Services",
                        "audience": "Students & Graduates"
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
        "logo": "https://athenura.in/AthenuraCircle.png",
        "sameAs": [
            "https://twitter.com/athenura_in",
            "https://linkedin.com/company/athenura",
            "https://facebook.com/athenura",
            "https://instagram.com/athenura.in",
            "https://youtube.com/@athenura"
        ],
        "description": "Remote-first skill development platform offering technical and non-technical programs",
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

    // Service-specific schema for better visibility
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Athenura Skill Development Services",
        "description": "Comprehensive skill development programs including technical training, non-technical skills, and career mentoring",
        "provider": {
            "@type": "Organization",
            "name": "Athenura",
            "url": siteUrl
        },
        "areaServed": "IN",
        "audience": {
            "@type": "Audience",
            "audienceType": "Students and Graduates"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Athenura Programs",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Technical Training Programs"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Non-Technical Skill Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Career Mentoring"
                    }
                }
            ]
        }
    };

    return (
        <>
            <Helmet>
                {/* ---------- BASIC META TAGS ---------- */}
                <html lang="en" />
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content="athenura services, skill development programs, technical training, non-technical skills, internship programs, career mentoring, professional development, student services, graduate programs, skill building, career growth services, placement support" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="index, follow" />                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Our Services - Athenura | Skill Development & Career Programs" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Athenura Services - Skill Development Programs" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Athenura Services | Skill Development & Career Programs" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Athenura Services" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Services" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                {/* ---------- SERVICE-SPECIFIC META ---------- */}
                <meta name="service:type" content="Skill Development" />
                <meta name="service:audience" content="Students, Graduates" />
                <meta name="service:delivery" content="Remote" />
                
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
                <HeroService />
                <ServiceCard />
                <NonTechService />
                <TechTools />
                <WhyUs />
                <ServiceCTA />
            </div>
        </>
    )
}

export default ServiceMain