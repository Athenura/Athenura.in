import React from "react";
import { Helmet } from "react-helmet-async";
const InternshipSEO = () => {
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Software Development Intern",
    "description":
      "Athenura is offering an industrial-grade internship program focused on full software development lifecycle. Interns will work on scalable solutions including System Design, Security, and Optimization. <br> <strong>Key Learnings:</strong> CI/CD Pipelines, Microservices Architecture, Agile Workflows. <br> <strong>Benefits:</strong> Performance LOR, Career Acceleration Module.",
    "identifier": {
      "@type": "PropertyValue",
      "name": "Athenura",
      "value": "INTERN-2026"
    },
    "datePosted": "2026-01-19",
    "validThrough": "2026-12-31",
    "employmentType": "INTERN",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Athenura",
      "sameAs": "https://www.athenura.in",
      "logo": "https://www.athenura.in/Athenura.png"
    },
    "jobLocationType": "TELECOMMUTE",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "IN"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "value": 0,
        "unitText": "MONTH"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.athenura.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Internship",
        "item": "https://www.athenura.in/internship"
      }
    ]
  };

  return (
    <Helmet>
      {/* PRIMARY PAGE SEO */}
      <title>Athenura Internship Program | Industrial Training & Live Projects</title>

      <meta
        name="description"
        content="Join the Athenura Internship Program (3-8 Months). Master System Design, Microservices, and CI/CD with industrial-grade project work. Remote/Hybrid options available."
      />

      <meta
        name="keywords"
        content="Athenura Internship, Software Development Internship, Industrial Training, Live Project Internship, Remote Coding Internship, Full Stack Internship, Computer Science Internship India, React Internship, Node.js Internship"
      />

      {/* OPEN GRAPH */}
      <meta property="og:title" content="Launch Your Career with Athenura Internship" />
      <meta
        property="og:description"
        content="Don't build toy apps. Architect scalable solutions. 3-8 months of industrial-grade experience with Performance LOR."
      />
      <meta property="og:url" content="https://www.athenura.in/internship" />
      <meta property="og:type" content="website" />

      {/* JOB POSTING SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema)
        }}
      />

      {/* BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </Helmet>
  );
};

export default InternshipSEO;
