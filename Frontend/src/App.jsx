import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import HomeMain from './Home/HomeMain';
import Footer from './Footer';
import ApplyInternship from './Home/InternShipApply';
import CareerMain from './Career/CareerMain';
import Preloader from './Preloader';
import ContactMain from './Contact/ContactMain';
import FaqPage from './FAQ';
import InternshipMain from './Legal/InternshipMain';
import ServiceMain from './Service/ServiceMain';
import PortfolioMain from './Portfolio/PortfolioMain';
import PrivacyMain from './Privacy/PrivacyMain';
import TermsMain from './TermsAndConditions/TermsMain';
import InternshipPageMain from './InternshipPages/InternshipPageMain';
import LeaveFrom from './InternshipPages/LeaveIframe';
import VerifyFrom from './InternshipPages/VerifyIframe';
import FeedbackFrom from './InternshipPages/FeedbackIframe';
import AboutMain from './AboutUs/AboutMain';
import CustomMain from './Service/SubServices/CustomSoftware/CustomMain';
import WebMain from './Service/SubServices/WebDev/WebMain';
import EnterMain from './Service/SubServices/EnterpriseSoftwares/EnterMain';
import UIUXMain from './Service/SubServices/UIUX/UIUXMain';
import MaintainMain from './Service/SubServices/WebMaintanance/MaintainMain';
import TestingMain from './Service/SubServices/SoftwareTesting/TestingMain';
import BusMain from './Service/SubServices/Business/BusMain';
import OneMonthFeedback from './InternshipPages/OneMonthFeedback';
import Planner from './Planner';
import BlogMain from './Blog/BlogMain';
import WhyAthenuraExists from './Blog/BlogsContent/WhyAthenuraExists';
import AthenuraInternshipProgram from './Blog/BlogsContent/AthenuraInternshipProgram';
import FullStackIntensive from './Blog/BlogsContent/FullStackIntensive';
import DataScienceInternship from './Blog/BlogsContent/DataScienceInternship';
import UIUXDesignInternship from './Blog/BlogsContent/UIUXDesignInternship';
import DigitalMarketingInternship from './Blog/BlogsContent/DigitalMarketingInternship';
import RemoteInternshipGuide from './Blog/BlogsContent/RemoteInternshipGuide';
import PortfolioProjectsArticle from './Blog/BlogsContent/PortfolioProjectsArticle';
import ErrorPage from './ErrorPage';
import AcademicVsIndustryArticle from './Blog/BlogsContent/AcademicVsIndustryArticle';
import MentorshipGrowthArticle from './Blog/BlogsContent/MentorshipGrowthArticle';

/* keep all your existing imports */

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const Layout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // detect blog pages
  const isBlogPage = location.pathname.startsWith("/blogs");

  return (
    <>
      {/* Preloader only for NON BLOG pages */}
      {!isBlogPage && loading && (
        <Preloader onFinish={() => setLoading(false)} />
      )}

      {(isBlogPage || !loading) && (
        <>
          <Navbar />

          <div className="animate-fade-in-up">
            <div className="min-h-screen">

              <Routes>

                {/* External Pages */}
                <Route path="/apply-internship" element={<ApplyInternship />} />
                <Route path="/internship/leave" element={<LeaveFrom />} />
                <Route path="/internship/performance" element={<VerifyFrom />} />
                <Route path="/internship/feedback" element={<FeedbackFrom />} />
                <Route path="/internship/one-month-feedback" element={<OneMonthFeedback />} />

                {/* Main Pages */}
                <Route path="/" element={<HomeMain />} />
                <Route path="/career" element={<CareerMain />} />
                <Route path="/contact" element={<ContactMain />} />
                <Route path="/planner" element={<Planner />} />

                <Route path="/services" element={<ServiceMain />} />

                {/* Services */}
                <Route path="/services/custom-software" element={<CustomMain />} />
                <Route path="/services/web-apps" element={<WebMain />} />
                <Route path="/services/enterprise" element={<EnterMain />} />
                <Route path="/services/ui-ux" element={<UIUXMain />} />
                <Route path="/services/maintenance" element={<MaintainMain />} />
                <Route path="/services/testing" element={<TestingMain />} />
                <Route path="/services/automation" element={<BusMain />} />

                <Route path="/portfolio" element={<PortfolioMain />} />
                <Route path="/internship" element={<InternshipPageMain />} />
                <Route path="/about-us" element={<AboutMain />} />
                <Route path="/faqs" element={<FaqPage />} />

                {/* Blog list */}
                <Route path="/blogs" element={<BlogMain />} />

                {/* Blog Articles */}
                <Route path="/blogs/why-athenura-exists" element={<WhyAthenuraExists />} />
                <Route path="/blogs/athenura-internship-program" element={<AthenuraInternshipProgram />} />
                <Route path="/blogs/fullstack-intensive" element={<FullStackIntensive />} />
                <Route path="/blogs/data-science-internship" element={<DataScienceInternship />} />
                <Route path="/blogs/ui-ux-design-internship" element={<UIUXDesignInternship />} />
                <Route path="/blogs/digital-marketing-mastery" element={<DigitalMarketingInternship />} />
                <Route path="/blogs/ace-remote-internship" element={<RemoteInternshipGuide />} />
                <Route path="/blogs/portfolio-grade-projects" element={<PortfolioProjectsArticle />} />
                <Route path="/blogs/bridging-the-gap" element={<AcademicVsIndustryArticle />} />
                <Route path="/blogs/mentorship-growth" element={<MentorshipGrowthArticle />} />

                {/* Legal */}
                <Route path="/internship-policy" element={<InternshipMain />} />
                <Route path="/privacy-policy" element={<PrivacyMain />} />
                <Route path="/Terms-of-service" element={<TermsMain />} />

                <Route path="*" element={<ErrorPage />} />

              </Routes>

            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;