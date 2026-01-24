import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart2, Calendar, MessageSquare, Rocket,
  ArrowRight, ExternalLink, HelpCircle, Mail,
  CheckCircle2, Clock, Shield, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

const InternshipResources = () => {
  const theme = {
    primary: '#1E7A86',
    secondary: '#1E90A8',
    bg: '#F8FAFC', // Very light cool gray
  };

  const cards = [
    {
      title: "1-Month Feedback Form",
      desc: "Help us improve your internship experience by sharing your feedback after one month.",
      icon: MessageSquare,
      link: "/internship/one-month-feedback",
      color: "bg-green-50 text-green-600",
      btnText: "Submit Feedback",
      badge: "Mandatory",
      features: [
        "Intern Performance Review",
        "Mentor & Task Feedback",
        "Suggestions & Concerns"
      ]
    },
    {
      title: "Performance Tracker",
      desc: "Real-time analytics of your growth, tasks, and code quality.",
      icon: BarChart2,
      link: "/internship/performance",
      color: "bg-purple-50 text-purple-600",
      btnText: "Check Yours",
      badge: "Live Updates",
      features: [
        "Code Review Scores",
        "Task Velocity Charts",
        "Mentor Feedback History"
      ]
    },
    {
      title: "Certificate Feedback Form",
      desc: "A safe space to share your thoughts, report issues, or suggest ideas.",
      icon: MessageSquare,
      link: "/internship/feedback",
      color: "bg-teal-50 text-teal-600",
      btnText: "Open Form",
      badge: "Confidential",
      features: [
        "Weekly Check-ins",
        "Anonymous Reporting",
        "Incident Logging"
      ]
    },
    {
      title: "Leave Application Form",
      desc: "Administrative tools to manage your schedule and official documents.",
      icon: Calendar,
      link: "/internship/leave",
      color: "bg-orange-50 text-orange-600",
      btnText: "Do You Need",
      badge: "Self-Service",
      features: [
        "Leave Application",
        "Holiday Calendar",
        "Download Offer/LOR"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 font-sans relative" style={{ backgroundColor: theme.bg }}>

      <div className="max-w-7xl mx-auto">

        {/* --- Info Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 md:mb-14 gap-6">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 rounded-md bg-[#1E7A86]/10 text-[#1E7A86] text-[10px] font-bold uppercase tracking-wider">
                Student Portal
              </span>
              <span className="h-1 w-1 rounded-full bg-gray-300"></span>
              <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                <Clock size={12} /> System Status: Operational
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Internship <span style={{ color: theme.primary }}>Toolkit</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-500 max-w-xl leading-relaxed">
              A centralized hub for applicants and active interns. Access your dashboard, track progress, and manage administrative tasks efficiently.
            </p>
          </div>
        </div>

        {/* --- Rich Cards Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-0 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#1E7A86]/30 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Card Top */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${card.color}`}>
                    <card.icon size={20} />
                  </div>
                  <span className="px-2 py-1 rounded bg-gray-50 border border-gray-100 text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-500 mb-5 leading-relaxed min-h-[40px]">
                  {card.desc}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  {card.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={12} className="text-[#1E7A86] mt-0.5 shrink-0" />
                      <span className="text-[11px] font-medium text-gray-600 leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom / Action */}
              <div className="p-4 border-t border-gray-50 bg-gray-50/50">
                <Link to={card.link}>
                  <button className="w-full py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-xs font-bold flex items-center justify-center gap-2 group-hover:bg-[#1E7A86] group-hover:text-white group-hover:border-[#1E7A86] transition-all shadow-sm hover:shadow-md">
                    {card.btnText}
                    <ArrowRight size={12} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom Support Strip --- */}
        <div className="mt-8 md:mt-12 bg-white rounded-xl p-4 md:p-5 border border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left shadow-sm">

          <div className="flex items-center gap-4">
            <div className="hidden md:flex w-10 h-10 rounded-full bg-[#1E7A86]/5 items-center justify-center text-[#1E7A86]">
              <HelpCircle size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">Technical Support</h4>
              <p className="text-xs text-gray-500">Having trouble accessing the tracker or submitting forms?</p>
            </div>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <a href="mailto:hr.athenura@gmail.com" className="flex-1 md:flex-none justify-center px-4 py-2 rounded-lg bg-gray-100 text-gray-600 text-xs font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Mail size={14} /> Email Support
            </a>
            <Link to="/faqs">
              <button className="flex-1 md:flex-none justify-center px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-xs font-bold hover:border-[#1E7A86] hover:text-[#1E7A86] transition-colors flex items-center gap-2">
                <ExternalLink size={14} /> FAQs
              </button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InternshipResources;