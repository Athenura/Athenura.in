import React from "react";

const PolicyContent = () => {
  const theme = {
    primary: "#1E90A8",
    primaryLight: "#E8F8FA",
    textDark: "#111827",
    textGray: "#4B5563",
    bg: "#FFFFFF",
    bgAlt: "#F8FBFC",
  };

  const policySections = [
    {
      id: 1,
      title: "Scope of This Privacy Policy",
      content:
        "This Privacy Policy applies to all individuals who access the Athenura website or interact with Athenura in any manner, including visitors, clients, prospective clients, partners, vendors, applicants, interns, employees, and consultants. It applies to information collected through online platforms, direct communications, applications, and business operations."
    },
    {
      id: 2,
      title: "Personal Information We Collect",
      subsections: [
        "Athenura collects personal information only when it is voluntarily and knowingly provided by an individual through inquiries, applications, communications, or participation in programs or services.",
        "Collected personal information may include full legal name, email address, phone number, nationality or geographic location, and educational or organizational affiliation for identification, communication, eligibility verification, and service delivery.",
        "Professional and academic details such as resumes, CVs, portfolios, employment history, and educational background may be collected for evaluation, recruitment, placement, or program participation.",
        "Additional sensitive information such as medical conditions, dietary needs, religious considerations, or accessibility requirements may be requested strictly to provide appropriate accommodations and is handled with heightened confidentiality."
      ]
    },
    {
      id: 3,
      title: "Technical Information We Collect",
      content:
        "Athenura does not collect, store, or process technical information such as IP addresses, browser details, device information, operating systems, access timestamps, pages visited, or referral sources. The website operates without tracking, monitoring, logging, analytics, or behavioral profiling of users."
    },
    {
      id: 4,
      title: "No Cookies or Tracking Technologies",
      content:
        "Athenura does not use cookies, tracking pixels, behavioral tracking tools, or similar technologies. Visitors may browse the website freely without cookies being placed on their devices, and no cookie-based data collection or preference management is required."
    },
    {
      id: 5,
      title: "Purpose of Information Collection",
      content:
        "Personal information is collected and processed solely for legitimate business and operational purposes, including responding to inquiries, evaluating eligibility for internships, employment, programs, or services, managing applications, delivering services, ensuring effective communication, maintaining security, and complying with legal and regulatory obligations."
    },
    {
      id: 6,
      title: "Information Sharing and Disclosure",
      subsections: [
        "Personal information is used primarily to fulfill requests, manage applications, and deliver services. Aggregated and non-identifiable data may be used internally for improvement purposes.",
        "Information may be shared with partner organizations, host companies, or service providers only when necessary to confirm placements or fulfill contractual obligations.",
        "Athenura may contact educational institutions when required for academic coordination, reporting, compliance, or application of institutional benefits.",
        "Personal information is not shared with third parties unless required by law, legal process, or explicit user consent.",
        "Non-personally identifiable and aggregated data may be shared for research, analytics, or marketing insights without identifying individuals."
      ]
    },
    {
      id: 7,
      title: "Data Protection and Security Measures",
      content:
        "Athenura implements reasonable administrative, technical, and organizational safeguards to protect personal information from unauthorized access, misuse, loss, disclosure, or alteration. Sensitive information is encrypted at rest and in transit where applicable, and system access is restricted using strong authentication controls. While reasonable security measures are maintained, absolute security cannot be guaranteed."
    },
    {
      id: 8,
      title: "Data Retention",
      content:
        "Personal information is retained only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal requirements, maintain business records, or protect legitimate interests. Certain participant information may be retained for alumni access or ongoing engagement unless deletion is requested, subject to applicable obligations."
    },
    {
      id: 9,
      title: "Your Rights",
      subsections: [
        "Right to be informed about how personal information is collected and used",
        "Right to access personal data and request a copy in a reasonable format",
        "Right to request correction of inaccurate or incomplete information",
        "Right to request deletion or restriction of data processing, subject to legal requirements",
        "Right to opt out of marketing or informational communications at any time"
      ]
    },
    {
      id: 10,
      title: "Consent",
      content:
        "By accessing, browsing, or using Athenura’s website, services, or communications, you acknowledge that you have read, understood, and consent to the collection and use of information as described in this Privacy Policy."
    },
    {
      id: 11,
      title: "Policy Updates",
      content:
        "Athenura reserves the right to amend, update, or modify this Privacy Policy at any time without prior notice. Changes become effective immediately upon publication on this page. Continued use of the website or services constitutes acceptance of the revised policy."
    },
    {
      id: 12,
      title: "Contact Information",
      content:
        "For any questions, concerns, or requests regarding this Privacy Policy or data practices, please contact us at: Email: official@athenura.in"
    }
  ];

  return (
    <div className="w-full" style={{ backgroundColor: theme.bg }}>
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2" style={{ color: theme.primary }}>
              Privacy Policy – Athenura
            </h1>
            <div className="flex justify-between items-center border-b pb-4">
              <p className="text-sm font-semibold" style={{ color: theme.primary }}>
                Last Updated: 20 Jan 2026
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-16 p-6 rounded-xl" style={{ backgroundColor: theme.bgAlt }}>
            <h2 className="text-lg md:text-xl font-semibold mb-4" style={{ color: theme.textDark }}>
              Privacy Commitment
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Athenura values the privacy of individuals and is committed to protecting personal information
              shared with us. This Privacy Policy explains how information is collected, used, stored,
              disclosed, and protected across our website, programs, services, and communications.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {policySections.map((section) => (
              <div key={section.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: theme.primary }}
                  >
                    {section.id}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.textDark }}>
                      {section.id}. {section.title}
                    </h3>

                    {section.subsections ? (
                      <div className="bg-gray-50 p-5 rounded-lg space-y-2">
                        <ol className="space-y-2 pl-4">
                          {section.subsections.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 text-xs flex items-center justify-center mr-2 mt-0.5">
                                {index + 1}
                              </span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : (
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <p className="text-gray-700 leading-relaxed">{section.content}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 p-6 rounded-xl border border-gray-200 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: theme.primaryLight }}>
              <span className="text-lg">🔒</span>
              <span className="font-medium" style={{ color: theme.primary }}>
                This Privacy Policy is effective immediately
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PolicyContent;
