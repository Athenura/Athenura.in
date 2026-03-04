import React from 'react'
import { Helmet } from 'react-helmet-async'
import CareerHero from './CareerHero'
import WhyAthenura from './WhyAthenura'
import AthenuraCulture from './Culture'
import InternshipProgram from './InternShipPage'

const CareerMain = () => {
    const siteUrl = 'https://athenura.in';
    const pageUrl = typeof window !== 'undefined' ? window.location.href : `${siteUrl}/career`;
    const canonicalUrl = `${siteUrl}/career`;
    
    const pageTitle = "Career at Athenura | Join Our Mission | Internships & Opportunities 2026";
    const pageDescription = "Build your career at Athenura — a remote-first skill development platform. Explore internship opportunities, company culture, and why Athenura is the place to grow. Join us in bridging the gap between education and employment.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-career-og.jpg";

    // WebPage Schema for career page
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
            "name": "Career Opportunities, Internships, Company Culture"
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
                    "name": "Career",
                    "item": canonicalUrl
                }
            ]
        },
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "EducationalOccupationalProgram",
                        "name": "Full-Stack Development Intensive",
                        "url": `${siteUrl}/internship/full-stack-intensive`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "EducationalOccupationalProgram",
                        "name": "Data Science & Analytics Internship",
                        "url": `${siteUrl}/internship/data-science-analytics`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "EducationalOccupationalProgram",
                        "name": "UI/UX Design Professional Internship",
                        "url": `${siteUrl}/internship/ui-ux-design`
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "EducationalOccupationalProgram",
                        "name": "Digital Marketing Mastery Internship",
                        "url": `${siteUrl}/internship/digital-marketing-mastery`
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
                "name": "Career",
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
        "description": "Remote-first skill development platform offering internships and career resources",
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

    return (
        <>
            <Helmet>
                {/* ---------- BASIC META TAGS ---------- */}
                <html lang="en" />
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content="career at athenura, work at athenura, athenura jobs, athenura internships, athenura culture, join athenura, remote careers, startup careers, edtech careers, skill development careers" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="index, follow" />                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Career at Athenura | Join Our Mission" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Career opportunities at Athenura" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Career at Athenura | Join Our Mission" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Athenura Career Opportunities" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Career" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                
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
                <CareerHero />
                <WhyAthenura />
                <AthenuraCulture />
                <InternshipProgram />
            </div>
        </>
    )
}

export default CareerMain