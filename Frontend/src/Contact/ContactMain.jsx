import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactHero from './HeroContact'
import ContactSection from './ContactSections'

const ContactMain = () => {
    const siteUrl = 'https://athenura.in';
    const pageUrl = typeof window !== 'undefined' ? window.location.href : `${siteUrl}/contact`;
    const canonicalUrl = `${siteUrl}/contact`;
    
    const pageTitle = "Contact Athenura | Get in Touch with Our Team | Support & Inquiries";
    const pageDescription = "Contact Athenura for inquiries about our internship programs, partnerships, or support. Reach out to our team for career guidance, program information, or any questions. We're here to help you start your journey.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-contact-og.jpg";

    // WebPage Schema for contact page
    const webpageData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
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
            "name": "Contact Information, Support, Inquiries"
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
                    "name": "Contact",
                    "item": canonicalUrl
                }
            ]
        },
        "mainEntity": {
            "@type": "Organization",
            "name": "Athenura",
            "email": "official@athenura.in",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "official@athenura.in",
                "availableLanguage": ["English", "Hindi"]
            }
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
                "name": "Contact",
                "item": canonicalUrl
            }
        ]
    };

    // Organization Schema with contact details
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
        "description": "Remote-first skill development platform offering internships and career resources",
        "foundingDate": "2026",
        "email": "official@athenura.in",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "official@athenura.in",
                "availableLanguage": ["English", "Hindi"]
            },
            {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "official@athenura.in",
                "availableLanguage": ["English", "Hindi"]
            },
            {
                "@type": "ContactPoint",
                "contactType": "partnerships",
                "email": "official@athenura.in",
                "availableLanguage": ["English", "Hindi"]
            }
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

    return (
        <>
            <Helmet>
                {/* ---------- BASIC META TAGS ---------- */}
                <html lang="en" />
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content="contact athenura, athenura support, athenura help, contact for internships, athenura inquiries, athenura email, reach athenura, athenura team contact, internship support, career guidance contact" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="index, follow" />                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Contact Athenura | Get in Touch" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Contact Athenura - Get in touch with our team" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Contact Athenura | Get in Touch" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Contact Athenura" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Contact Athenura" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                {/* ---------- CONTACT-SPECIFIC META ---------- */}
                <meta name="contact" content="official@athenura.in" />
                <meta name="contact:email" content="official@athenura.in" />
                <meta name="contact:country" content="India" />
                
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
                <ContactHero />
                <ContactSection />
            </div>
        </>
    )
}

export default ContactMain