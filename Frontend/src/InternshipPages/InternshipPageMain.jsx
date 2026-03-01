import React from 'react'
import { Helmet } from 'react-helmet-async'
import InternshipPageHero from './InternshipPageHero'
import InternshipDetails from "./DetailsPage"
import IntershipLink from "./InternshipLink"
import InternshipDomains from './InternshipDomain'

const InternshipPageMain = () => {
    const siteUrl = 'https://athenura.in';
    const canonicalUrl = `${siteUrl}/internship`;
    
    const pageTitle = "Internships at Athenura | Launch Your Career with Real-World Experience";
    const pageDescription = "Explore internship opportunities at Athenura. Hands-on programs in Data Science, Full-Stack Development, UI/UX Design, Digital Marketing, and more. Build real projects, get mentorship, and launch your career.";
    
    const imageUrl = "https://ik.imagekit.io/vtfcbjo5c/athenura-internship-og.jpg";

    // WebPage Schema for internship hub page
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
            "name": "Internships, Career Development, Professional Training"
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
                    "name": "Internships",
                    "item": canonicalUrl
                }
            ]
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Athenura Internship Programs",
            "description": "All internship opportunities at Athenura",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "EducationalOccupationalProgram",
                        "name": "Full-Stack Development Intensive",
                        "description": "Comprehensive full-stack development program with real projects",
                        "url": `${siteUrl}/internship/full-stack-intensive`,
                        "provider": {
                            "@type": "Organization",
                            "name": "Athenura"
                        },
                        "educationalProgramMode": "remote",
                        "timeToComplete": "P3M"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "EducationalOccupationalProgram",
                        "name": "Data Science & Analytics Internship",
                        "description": "Hands-on data science training with industry projects",
                        "url": `${siteUrl}/internship/data-science-analytics`,
                        "provider": {
                            "@type": "Organization",
                            "name": "Athenura"
                        },
                        "educationalProgramMode": "remote",
                        "timeToComplete": "P3M"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "EducationalOccupationalProgram",
                        "name": "UI/UX Design Professional Internship",
                        "description": "Professional UI/UX design training with portfolio projects",
                        "url": `${siteUrl}/internship/ui-ux-design`,
                        "provider": {
                            "@type": "Organization",
                            "name": "Athenura"
                        },
                        "educationalProgramMode": "remote",
                        "timeToComplete": "P3M"
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "EducationalOccupationalProgram",
                        "name": "Digital Marketing Mastery Internship",
                        "description": "Comprehensive digital marketing training with real campaigns",
                        "url": `${siteUrl}/internship/digital-marketing-mastery`,
                        "provider": {
                            "@type": "Organization",
                            "name": "Athenura"
                        },
                        "educationalProgramMode": "remote",
                        "timeToComplete": "P3M"
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
                "name": "Internships",
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

    // FAQ Schema for internship questions
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What internships does Athenura offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Athenura offers internships in Full-Stack Development, Data Science & Analytics, UI/UX Design, and Digital Marketing. Each program is hands-on, project-based, and includes mentorship from industry professionals."
                }
            },
            {
                "@type": "Question",
                "name": "Are Athenura internships remote?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all Athenura internships are 100% remote. You can participate from anywhere with flexible schedules designed to accommodate your existing commitments."
                }
            },
            {
                "@type": "Question",
                "name": "Who can apply for internships?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our internships are open to students (UG & PG), fresh graduates, career switchers, and self-learners who are ready to build real skills and take ownership of their learning journey."
                }
            },
            {
                "@type": "Question",
                "name": "What is the duration of internships?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Internship durations range from 3 to 8 months depending on the program and project complexity. Each program is structured to ensure you complete portfolio-ready work."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide certificates?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, interns receive an Internship Certificate, performance-based Letter of Recommendation, and Excellence Certificates for top performers. You'll also have portfolio projects to showcase."
                }
            },
            {
                "@type": "Question",
                "name": "Is there placement support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer placement support including resume optimization, mock interviews, and referrals to partner companies for high-performing interns."
                }
            },
            {
                "@type": "Question",
                "name": "What projects will I work on?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You'll work on real-world projects relevant to your domain. For example, data science interns build prediction models, development interns create full-stack applications, and marketing interns run actual campaigns."
                }
            },
            {
                "@type": "Question",
                "name": "How do I apply for an internship?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Visit our application page, fill out the form, complete a short assessment, and interview with our program lead. Applications are reviewed on a rolling basis."
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
                <meta name="keywords" content="internships, remote internships, data science internship, full stack development internship, UI UX design internship, digital marketing internship, student internships, graduate internships, career development, skill building, professional training, athenura internships" />
                <meta name="author" content="Athenura" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />
                
                {/* ---------- CANONICAL URL ---------- */}
                <link rel="canonical" href={canonicalUrl} />
                
                {/* ---------- OPEN GRAPH ---------- */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Internships at Athenura | Launch Your Career" />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Athenura Internship Programs" />
                <meta property="og:site_name" content="Athenura" />
                <meta property="og:locale" content="en_US" />
                
                {/* ---------- TWITTER CARD ---------- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@athenura_in" />
                <meta name="twitter:creator" content="@athenura_in" />
                <meta name="twitter:title" content="Internships at Athenura | Launch Your Career" />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} />
                <meta name="twitter:image:alt" content="Athenura Internships" />
                
                {/* ---------- ADDITIONAL META ---------- */}
                <meta name="application-name" content="Athenura" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Athenura Internships" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#28A3B9" />
                
                {/* ---------- INTERNSHIP-SPECIFIC META ---------- */}
                <meta name="internships:domains" content="Full-Stack Development, Data Science, UI/UX Design, Digital Marketing" />
                <meta name="internships:duration" content="3-8 months" />
                <meta name="internships:format" content="Remote" />
                
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
                <InternshipPageHero />
                <InternshipDetails />
                <InternshipDomains />
                <IntershipLink />
            </div>
        </>
    )
}

export default InternshipPageMain