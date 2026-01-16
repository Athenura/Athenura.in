import React from "react";

const AthenuraCulture = () => {
  const theme = {
    primary: "#1E90A8",
    primaryDark: "#156A7A",
    primaryLight: "#E8F8FA",
    textDark: "#111827",
    textGray: "#4B5563",
    bg: "#FFFFFF",
  };

  const values = [
    {
      number: "01",
      title: "Learn in the Open",
      desc: "We believe learning accelerates when knowledge is shared. Discussions, resources, and decisions are transparent within the team so everyone grows together."
    },
    {
      number: "02",
      title: "Build to Improve",
      desc: "Progress matters more than perfection. We encourage experimenting, building real projects, and improving through feedback and iteration."
    },
    {
      number: "03",
      title: "Respect Over Ego",
      desc: "Titles don’t define ideas. We listen first, collaborate openly, and focus on solving problems not proving points."
    }
  ];


  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: theme.bg }}>
      <div className="container mx-auto px-6 lg:px-12">

        {/* --- PART 1: OUR VALUES (The Manifesto) --- */}
        <div className="mb-32">
          <div className="max-w-3xl mb-16">
            <h2
              className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
              style={{ color: theme.textDark }}
            >
              We don’t follow rigid rules. <br />
              We grow with{" "}
              <span
                className="underline decoration-4 underline-offset-4"
                style={{ color: theme.primary, decorationColor: theme.primary }}
              >
                shared values.
              </span>
            </h2>
          </div>


          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="group p-8 border-t-2 transition-all duration-300 hover:bg-gray-50"
                style={{ borderColor: idx === 0 ? theme.primary : '#E5E7EB' }}
              >
                <span className="text-5xl font-mono font-bold block mb-6 opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: theme.primary }}>
                  {val.number}
                </span>
                <h3 className="text-2xl font-bold mb-4" style={{ color: theme.textDark }}>
                  {val.title}
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: theme.textGray }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- PART 2: CULTURE MOSAIC (Life at Athenura) --- */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Text Content */}
          <div className="lg:w-1/3">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: theme.textDark }}
            >
              More than just building.
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Athenura, work is centered around learning by doing.
              Through mentorship-driven projects, weekly demos, and peer collaboration,
              we focus on building real skills, confidence, and hands-on experience.
            </p>

            {/* Stats List */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-50"
                  style={{ color: theme.primary }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Learning Meetups</h4>
                  <p className="text-sm text-gray-500">
                    Regular sessions focused on collaboration and feedback.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-50"
                  style={{ color: theme.primary }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Weekly Demo Days</h4>
                  <p className="text-sm text-gray-500">
                    Share what you’ve learned or built each week.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mosaic Grid */}
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:h-[500px]">

              {/* Block 1 – Tech Stack */}
              <div className="col-span-1 md:row-span-2 rounded-2xl p-6 border border-gray-100 bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-4" style={{ color: theme.textDark }}>
                    What We Build With
                  </h3>
                  <div className="flex flex-col gap-3">
                    {[
                      "TypeScript",
                      "JavaScript",
                      "React",
                      "Next.js",
                      "Tailwind CSS",
                      "REST APIs",
                      "Node.js",
                      "Git & GitHub",
                      "Database Basics",
                      "Cloud Tools",
                    ]
                      .map(
                        (tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: theme.primary }}
                            ></div>
                            {tech}
                          </div>
                        )
                      )}
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4">Actively evolving stack</p>
              </div>

              {/* Block 2 – Impact */}
              <div
                className="col-span-1 sm:col-span-2 md:col-span-3 rounded-2xl p-6 md:p-8 flex flex-col justify-center"
                style={{ backgroundColor: theme.textDark }}
              >
                <p className="text-teal-400 font-mono text-sm mb-2">
                  ● Active Learning Platform
                </p>
                <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  Real Projects
                </h3>
                <p className="text-gray-400 text-base sm:text-lg">
                  Built, tested, and improved by our team and interns
                </p>
              </div>

              {/* Block 3 – Testimonial */}
              <div className="col-span-1 sm:col-span-2 md:col-span-3 rounded-2xl p-6 bg-gray-50 border border-gray-100 flex items-center">
                <p className="text-base sm:text-lg italic text-gray-600">
                  “Athenura gives you the freedom to learn, experiment, and improve.
                  You’re guided, not micromanaged — which makes growth feel natural.”
                </p>
              </div>

            </div>
          </div>


        </div>

      </div>
    </section>
  );
};

export default AthenuraCulture;