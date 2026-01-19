import React from "react";
import { Helmet } from "react-helmet-async";

const HomeSEO = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Athenura",
    "url": "https://www.athenura.in",
    "logo": "https://www.athenura.in/Athenura.png",
    "description":
      "Athenura delivers innovative digital solutions including custom software, web applications, and enterprise systems.",
    "email": "hr.athenura@gmail.com",
    "telephone": "+91-9835051934",
    "sameAs": [
      "https://www.linkedin.com/company/athenura",
      "https://www.instagram.com/athenura.in/"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9835051934",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "email": "hr.athenura@gmail.com",
        "contactType": "recruitment",
        "description": "HR and Inquiries"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Application Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise Software Solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software Testing & QA"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Automation Solutions"
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* PRIMARY BRAND SEO */}
      <title>Athenura | Custom Software, Web Apps & Business Automation</title>

      <meta
        name="description"
        content="Athenura turns ideas into digital reality. We specialize in Custom Software Development, Web Applications, Enterprise Solutions, UI/UX Design, and Business Automation."
      />

      <meta
        name="keywords"
        content="Athenura, Custom Software Development, Web Application Development, Enterprise Software Solutions, UI/UX Design, Website Maintenance, Software Testing & QA, Business Automation Solutions"
      />

      {/* BRAND AUTHORITY */}
      <link rel="canonical" href="https://www.athenura.in" />

      {/* OPEN GRAPH */}
      <meta property="og:title" content="Athenura | Expert Software & Web Solutions" />
      <meta
        property="og:description"
        content="We provide complete digital solutions: Custom Software, Web Apps, Enterprise Systems, and Automation to drive real growth."
      />
      <meta property="og:url" content="https://www.athenura.in" />
      <meta property="og:type" content="website" />

      {/* ORGANIZATION SCHEMA (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
    </Helmet>
  );
};

export default HomeSEO;
