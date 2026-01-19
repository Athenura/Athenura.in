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
      title: "Purpose of the Internship Program",
      content:
        "The internship program at Athenura is designed to provide students and early-career professionals with hands-on experience, industry exposure, and skill development in a professional work environment. The program aims to bridge the gap between academic learning and practical application while contributing value to ongoing projects."
    },
    {
      id: 2,
      title: "Eligibility",
      content:
        "Internship opportunities at Athenura are open to students currently enrolled in a recognized educational institution, fresh graduates seeking practical industry experience, and individuals who meet the eligibility criteria outlined in the official internship offer or program description. Selection is based on academic or professional qualifications, relevant skills, demonstrated interest, availability, and organizational requirements. Athenura reserves the right to accept or reject applications at its sole discretion."
    },
    {
      id: 3,
      title: "Internship Duration",
      content:
        "The duration of the internship is defined in the official internship offer letter and may vary depending on the program, role, and academic requirements. Any extension or early termination of the internship is subject to Athenura's discretion."
    },
    {
      id: 4,
      title: "Nature of Internship",
      content:
        "Internships may be offered in remote formats depending on project needs and company policy. Interns are expected to actively participate in assigned tasks, learning activities, and evaluations. The internship is offered strictly for learning and professional development purposes and does not constitute permanent or contractual employment."
    },
    {
      id: 5,
      title: "Roles and Responsibilities of Interns",
      subsections: [
        "Carry out assigned tasks diligently, responsibly, and in accordance with ethical and professional standards",
        "Comply with all company policies, procedures, guidelines, and lawful instructions",
        "Maintain high level of professionalism, punctuality, discipline, and workplace decorum",
        "Safeguard confidentiality of company, client, and proprietary information",
        "Meet assigned deadlines and maintain acceptable performance standards",
        "Communicate respectfully, clearly, and professionally at all times"
      ]
    },
    {
      id: 6,
      title: "Supervision and Evaluation",
      content:
        "Each intern may be assigned a mentor or supervisor responsible for providing guidance, oversight, and regular feedback. Intern performance may be evaluated based on attendance, quality of work, learning progress, communication skills, teamwork, responsiveness to feedback, and adherence to company policies. These evaluations may determine internship completion status and certificate eligibility."
    },
    {
      id: 7,
      title: "Confidentiality and Intellectual Property",
      content:
        "All information, data, source code, designs, documents, and materials accessed or created during the internship are strictly confidential and remain the exclusive intellectual property of Athenura. Interns must not disclose, reproduce, distribute, or misuse any company or client information during or after the internship without prior written authorization. This obligation survives the termination or completion of the internship."
    },
    {
      id: 8,
      title: "Stipend and Benefits",
      content:
        "Internships at Athenura are unpaid and do not include salary, wages, or monetary stipends. However, interns receive non-monetary benefits including structured training, hands-on project experience, mentorship, skill development, and professional exposure. Participation in the internship does not create an employer–employee relationship or entitle interns to financial compensation or employment benefits."
    },
    {
      id: 9,
      title: "Certificate of Internship",
      content:
        "An Internship Completion Certificate is issued only upon successful completion of the full internship duration, satisfactory performance, compliance with all company policies, and submission of all required deliverables. Failure to meet these conditions may result in denial of the certificate at Athenura's discretion."
    },
    {
      id: 10,
      title: "Code of Conduct",
      content:
        "Interns must adhere to Athenura's Code of Conduct at all times. Any form of misconduct, negligence, dishonesty, harassment, unethical behavior, or policy violation may result in immediate termination of the internship without prior notice."
    },
    {
      id: 11,
      title: "Termination of Internship",
      content:
        "Athenura reserves the right to terminate an internship at any time in cases of policy violations, unsatisfactory performance, misconduct, or breach of confidentiality. Interns may request early termination by providing reasonable written notice, subject to management approval and completion of exit formalities."
    },
    {
      id: 12,
      title: "No Guarantee of Employment",
      content:
        "Successful completion of the internship does not guarantee permanent employment, job placement, or any future engagement with Athenura, unless such an offer is explicitly made in writing by the company."
    },
    {
      id: 13,
      title: "Acceptance",
      content:
        "By accepting the internship offer or participating in the internship program, interns acknowledge that they have read, understood, and agreed to comply with this Internship Policy."
    }
  ];

  return (
    <div className="w-full" style={{ backgroundColor: theme.bg }}>
      <section className="py-10 md:py-16 px-4 md:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: theme.primary }}>
              Internship Policy Athenura
            </h1>
            <div className="flex justify-between items-center border-b pb-4">
              <p className="text-xs md:text-sm font-semibold" style={{ color: theme.primary }}>
                Last Updated: 20 Jan 2026
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-10 md:mb-16 p-4 md:p-6 rounded-xl" style={{ backgroundColor: theme.bgAlt }}>
            <h2 className="text-base md:text-xl font-semibold mb-3" style={{ color: theme.textDark }}>
              Commitment Statement
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Athenura is committed to providing structured, ethical, and meaningful internship opportunities that support learning, professional development, and practical exposure. This Internship Policy outlines the terms, conditions, responsibilities, and expectations applicable to all interns associated with Athenura.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {policySections.map((section) => (
              <div key={section.id} className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
                <div className="flex flex-col md:flex-row items-start gap-4 mb-0 md:mb-4">
                  
                  {/* Section Number Badge */}
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-white font-bold text-base md:text-lg"
                    style={{ backgroundColor: theme.primary }}
                  >
                    {section.id}
                  </div>
                  
                  {/* Title and Content Container */}
                  <div className="flex-1 w-full">
                    <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: theme.textDark }}>
                      {section.id}. {section.title}
                    </h3>
                    
                    {/* For sections with subsections */}
                    {section.subsections ? (
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-4 md:p-5 rounded-lg">
                          <p className="text-sm md:text-base text-gray-700 mb-4 font-medium">Interns are expected to:</p>
                          <ol className="space-y-2 pl-0 md:pl-2">
                            {section.subsections.map((subsection, index) => (
                              <li key={index} className="flex items-start text-sm md:text-base">
                                <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-teal-100 text-teal-600 text-[10px] md:text-xs flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                  {index + 1}
                                </span>
                                <span className="text-gray-700">{subsection}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    ) : (
                      /* Regular content sections */
                      <div className="bg-gray-50 p-4 md:p-5 rounded-lg">
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">{section.content}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-10 md:mt-16 p-4 md:p-6 rounded-xl border border-gray-200 text-center">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full max-w-full" style={{ backgroundColor: theme.primaryLight }}>
              <span className="text-base md:text-lg flex-shrink-0">📋</span>
              <span className="text-xs md:text-sm font-medium break-words text-left md:text-center" style={{ color: theme.primary }}>
                This policy is effective immediately and applies to all interns
              </span>
            </div>
            <p className="mt-4 text-gray-600 text-xs md:text-sm">
              For questions or clarifications regarding this policy, please contact the HR department.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PolicyContent;