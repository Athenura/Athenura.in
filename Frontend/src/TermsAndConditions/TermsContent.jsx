import React from "react";

const TermsContent = () => {
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
    title: "Acceptance of Terms",
    content:
      "By accessing, browsing, registering, or using Athenura’s website, services, programs, platforms, or communications, you acknowledge that you have read, understood, and agree to be legally bound by these Terms & Conditions. If you do not agree to any part of these Terms, you must immediately discontinue use of Athenura’s services."
  },
  {
    id: 2,
    title: "Eligibility",
    content:
      "You must be legally capable of entering into a binding agreement to use Athenura’s services. Internship opportunities are open to students, graduates, or individuals who meet the eligibility criteria defined by Athenura. Submission of an application does not guarantee selection or participation."
  },
  {
    id: 3,
    title: "Use of Website and Services",
    subsections: [
      "Use the website, platforms, and services only for lawful and legitimate purposes",
      "Do not interfere with, disrupt, damage, or attempt unauthorized access to systems, servers, or data",
      "Do not submit false, misleading, inaccurate, or fraudulent information",
      "Do not misuse content, communication channels, or company resources"
    ]
  },
  {
    id: 4,
    title: "User Responsibilities",
    content:
      "You are responsible for maintaining the accuracy of information provided to Athenura and for safeguarding any login credentials or communication details. Athenura shall not be responsible for losses resulting from inaccurate information, misuse, or unauthorized access caused by user negligence."
  },
  {
    id: 5,
    title: "Internship Programs and Services",
    content:
      "Athenura offers internship programs for educational and skill-development purposes only. Participation is subject to selection criteria, availability, and compliance with company policies. Internship programs do not constitute employment and do not guarantee future job placement or compensation unless explicitly stated in writing."
  },
  {
    id: 6,
    title: "Internship Offer Letter",
    content:
      "An official Internship Offer Letter will be issued only to selected candidates after successful application review and confirmation. The offer letter outlines internship duration, role, responsibilities, and applicable terms. Athenura reserves the right to withdraw or modify an internship offer at any stage in case of misinformation, policy violation, or operational requirements."
  },
  {
    id: 7,
    title: "Roles, Conduct, and Performance",
    content:
      "Interns are expected to perform assigned tasks responsibly, meet deadlines, follow instructions, and maintain professional conduct. Any form of misconduct, non-compliance, absenteeism, unethical behavior, or misuse of company resources may result in termination of the internship without prior notice."
  },
  {
    id: 8,
    title: "Intellectual Property Rights",
    content:
      "All content, software, documentation, designs, source code, training materials, and work products created or accessed during internships or services remain the exclusive intellectual property of Athenura. Users and interns may not copy, distribute, publish, or reuse such materials without prior written authorization."
  },
  {
    id: 9,
    title: "Confidentiality",
    content:
      "All non-public, proprietary, or sensitive information disclosed during programs, internships, or communications must be kept strictly confidential. This obligation continues even after completion or termination of services or internships."
  },
  {
    id: 10,
    title: "Internship Certificate",
    content:
      "An Internship Completion Certificate is issued only upon successful completion of the internship duration, satisfactory performance, compliance with all policies, and submission of required work or evaluations. Athenura reserves the right to withhold or revoke certificates in cases of misconduct, incomplete participation, or policy violations."
  },
  {
    id: 11,
    title: "No Guarantee of Outcomes",
    content:
      "Athenura does not guarantee employment, job placement, stipend, salary, or financial benefits as a result of participation in any internship or service unless explicitly confirmed in writing."
  },
  {
    id: 12,
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Athenura shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use or inability to use its website, services, programs, or internship offerings."
  },
  {
    id: 13,
    title: "Indemnification",
    content:
      "You agree to indemnify and hold harmless Athenura, its directors, employees, mentors, and affiliates from any claims, damages, losses, or expenses arising from your violation of these Terms or misuse of services."
  },
  {
    id: 14,
    title: "Termination of Access or Internship",
    content:
      "Athenura reserves the right to suspend or terminate access to services or terminate an internship at any time without prior notice in cases of policy violation, misconduct, false information, or security risks."
  },
  {
    id: 15,
    title: "Third-Party Links",
    content:
      "The website may contain links to third-party platforms or resources. Athenura does not control and is not responsible for the content, availability, or practices of such external sites."
  },
  {
    id: 16,
    title: "Governing Law and Jurisdiction",
    content:
      "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall fall under the exclusive jurisdiction of the courts of India."
  },
  {
    id: 17,
    title: "Changes to Terms",
    content:
      "Athenura reserves the right to update, amend, or modify these Terms & Conditions at any time. Continued use of the website or participation in services or internships constitutes acceptance of the revised Terms."
  },
  {
    id: 18,
    title: "Contact Information",
    content:
      "For any questions, clarifications, or concerns regarding these Terms & Conditions, please contact us at  info.athenura@gmail.com"
  }
];


  return (
    <div className="w-full" style={{ backgroundColor: theme.bg }}>
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-2" style={{ color: theme.primary }}>
              Terms & Conditions – Athenura
            </h1>
            <div className="border-b pb-4">
              <p className="text-sm font-semibold" style={{ color: theme.primary }}>
                Last Updated: 20 Jan 2026
              </p>
            </div>
          </div>

          {/* Intro */}
          <div className="mb-16 p-6 rounded-xl" style={{ backgroundColor: theme.bgAlt }}>
            <h2 className="text-lg md:text-xl font-semibold mb-4" style={{ color: theme.textDark }}>
              Terms Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms & Conditions govern your access to and use of Athenura’s
              website, programs, and services. Please read them carefully.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {policySections.map((section) => (
              <div key={section.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: theme.primary }}
                  >
                    {section.id}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.textDark }}>
                      {section.id}. {section.title}
                    </h3>

                    {section.subsections ? (
                      <div className="bg-gray-50 p-5 rounded-lg">
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
              <span className="text-lg">📜</span>
              <span className="font-medium" style={{ color: theme.primary }}>
                These Terms & Conditions are effective immediately
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsContent;
