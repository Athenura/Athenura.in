import React from 'react'
import { Helmet } from 'react-helmet-async'
import HomeHero from './HomeHero'
import HomeService from './HomeService'
import WhoWeAreSection from './WhoWeAre'
import HomeWhyUs from './HomeWhyUs'
import CareersSection from "./AnimImage"
// import AwardsSection from "./ScrollingCard" // Commented out as per your code

const HomeMain = () => {
    const siteUrl = 'https://athenura.in';
    const canonicalUrl = siteUrl;
    
    const pageTitle = "Athenura - Software Development & Digital Solutions for Modern Businesses";
    const pageDescription = "Athenura delivers custom software development, web applications, mobile apps, and digital solutions for businesses. Transform your ideas into powerful digital products with our expert team. Client-focused, results-driven.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-home-og.jpg";

    // WebPage Schema for home page (client-focused)
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
            "name": "Software Development, Digital Solutions, Business Technology"
        },
        "inLanguage": "en-US",
        "publisher": {
            "@type": "Organization",
            "name": "Athenura",
            "logo": {
                "@type": "ImageObject",
                "url": "https://athenura.in/AthenuraCircle.png"
            }
        }
    };

    // Organization Schema with service provider focus
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
        "description": "Software development company delivering custom solutions for businesses",
        "foundingDate": "2026",
        "email": "official@athenura.in",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "slogan": "Transform Your Ideas Into Digital Reality",
        "serviceType": [
            "Custom Software Development",
            "Web Application Development",
            "Mobile App Development",
            "Enterprise Solutions",
            "UI/UX Design Services"
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

    // Service List for Client Offerings
    const serviceListData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Athenura Client Solutions",
        "description": "Digital solutions we deliver for businesses",
        "numberOfItems": 7,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "Service",
                    "name": "Custom Software Development",
                    "description": "Tailored software solutions built to your specific business requirements",
                    "provider": { "@type": "Organization", "name": "Athenura" }
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "Service",
                    "name": "Web Application Development",
                    "description": "Modern, scalable web applications using cutting-edge technologies",
                    "provider": { "@type": "Organization", "name": "Athenura" }
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "Native and cross-platform mobile apps for iOS and Android",
                    "provider": { "@type": "Organization", "name": "Athenura" }
                }
            },
            {
                "@type": "ListItem",
                "position": 4,
                "item": {
                    "@type": "Service",
                    "name": "Enterprise Software Solutions",
                    "description": "Scalable enterprise applications for large-scale business operations",
                    "provider": { "@type": "Organization", "name": "Athenura" }
                }
            },
            {
                "@type": "ListItem",
                "position": 5,
                "item": {
                    "@type": "Service",
                    "name": "UI/UX Design Services",
                    "description": "User-centered design for intuitive digital experiences",
                    "provider": { "@type": "Organization", "name": "Athenura" }
                }
            },
            {
                "@type": "ListItem",
                "position": 6,
                "item": {
                    "@type": "Service",
                    "name": "Digital Transformation",
                    "description": "End-to-end digital transformation for modern businesses",
                    "provider": { "@type": "Organization", "name": "Athenura" }
                }
            },
            {
                "@type": "ListItem",
                "position": 7,
                "item": {
                    "@type": "Service",
                    "name": "Technology Consulting",
                    "description": "Expert guidance on technology strategy and implementation",
                    "provider": { "@type": "Organization", "name": "Athenura" }
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
                <meta name="keywords" content="software development company, custom software development, web development agency, mobile app development, enterprise software solutions, digital transformation, technology consulting, UI UX design agency, business software solutions, client-focused development" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH (Client-Focused) ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Athenura - Software Development & Digital Solutions for Modern Businesses" />
                <meta property="og:description" content="Custom software development, web applications, mobile apps, and digital solutions for businesses. Transform your ideas into powerful digital products." />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Athenura - Software Development Company" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Athenura - Software Development for Businesses" />
                <meta name="twitter:description" content="Custom software solutions, web apps, mobile apps, and digital transformation for modern businesses." />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Athenura Software Development" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                {/* ---------- BUSINESS-FOCUSED META ---------- */}
                <meta name="business:services" content="Custom Software, Web Apps, Mobile Apps, Enterprise Solutions, UI/UX Design" />
                <meta name="business:clients" content="Startups, SMBs, Enterprises" />
                <meta name="business:delivery" content="End-to-end development" />
                
                {/* ---------- STRUCTURED DATA ---------- */}
                <script type="application/ld+json">
                    {JSON.stringify(webpageData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(organizationData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(websiteData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(serviceListData)}
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
                <HomeHero />
                <WhoWeAreSection />
                <HomeService />
                {/* <AwardsSection /> */}
                <CareersSection />
                <HomeWhyUs />
            </div>
        </>
    )
}

export default HomeMain