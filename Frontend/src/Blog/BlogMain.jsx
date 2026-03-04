import React from 'react'
import { Helmet } from 'react-helmet-async'
import BlogHero from './BlogHero'
import BlogContent from './BlogPage'

const BlogMain = () => {
    const siteUrl = 'https://athenura.in';
    const canonicalUrl = `${siteUrl}/insights`;

    const pageTitle = "Insights & Resources - Athenura Blog | Career Development, Internships & Professional Growth";
    const pageDescription = "Explore Athenura Insights — expert articles, guides, and resources on career development, remote internships, portfolio building, and professional growth. Stay updated with the latest trends and practical advice for students and professionals.";

    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-blog-og-image.jpg";

    // WebPage Schema for the blog listing page
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
            "name": "Career Development, Internships, Professional Growth"
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
                    "name": "Insights",
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
                    "url": `${siteUrl}/insights/ace-first-remote-internship`
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "url": `${siteUrl}/insights/portfolio-grade-projects-guide`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "url": `${siteUrl}/insights/why-athenura-exists`
                }
                // Add more as you publish
            ]
        }
    };

    // Breadcrumb Schema (explicit for better SEO)
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
                "name": "Insights",
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

    // WebSite Schema with search functionality
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
                <meta name="keywords" content="athenura insights, career blog, internship blog, professional development blog, career tips, remote work guide, portfolio tips, student resources, career advice, learning resources, job search blog, career growth articles" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />                
                <meta name="googlebot" content="index, follow" />

                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />

                {/* ---------- OPEN GRAPH / FACEBOOK (PAGE LEVEL) ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Insights & Resources - Athenura Blog" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Athenura Insights Blog - Career Resources" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />

                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Athenura Insights | Career Growth Resources" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Athenura Insights Blog" />

                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Insights" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />

                {/* ---------- STRUCTURED DATA (PAGE LEVEL) ---------- */}
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


                {/* ---------- RSS FEED (if you have one) ---------- */}
                <link rel="alternate" type="application/rss+xml" title="Athenura Insights RSS Feed" href={`${siteUrl}/rss.xml`} />
            </Helmet>

            {/* Your existing component JSX */}
            <div>
                <BlogHero />
                <BlogContent />
            </div>
        </>
    )
}

export default BlogMain