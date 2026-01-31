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
import NotFound from './NotFound';
import Planner from './Planner';
// import NotFound from './ErrorPage/ErrorPage';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onFinish={() => setIsLoading(false)} />
      ) : (
        <Router>
          <ScrollToTop />
            <Navbar />
          <div className="animate-fade-in-up ">
            <div className="min-h-screen ">
              <Routes>
                {/* Extarnal Pages */}
                <Route path="/apply-internship" element={<ApplyInternship />} />
                <Route path="/internship/leave" element={<LeaveFrom />} />
                <Route path="/internship/performance" element={<VerifyFrom />} />
                <Route path="/internship/feedback" element={<FeedbackFrom />} />
                <Route path="/internship/one-month-feedback" element={<OneMonthFeedback />} />
                {/* Web Pages */}

                <Route path="/" element={<HomeMain />} />
                <Route path="/career" element={<CareerMain />} />
                <Route path="/contact" element={<ContactMain />} />
                <Route path="/planner" element={<Planner />} />



                <Route path="/services" element={<ServiceMain />} />
                
                {/* Sub Service Pages */}

                <Route path='/services/custom-software' element={<CustomMain />} />
                <Route path='/services/web-apps' element={<WebMain />} />
                <Route path='/services/enterprise' element={<EnterMain />} />
                <Route path='/services/ui-ux' element={<UIUXMain />} />
                <Route path='/services/maintenance' element={<MaintainMain />} />
                <Route path='/services/testing' element={<TestingMain />} />
                <Route path='/services/automation' element={<BusMain />} />


                <Route path='/portfolio' element={<PortfolioMain />} />
                <Route path='/internship' element={<InternshipPageMain />} />
                <Route path='/about-us' element={<AboutMain />} />
                <Route path="/faqs" element={<FaqPage />} />


                {/* Legal Pages */}
                <Route path="/internship-policy" element={<InternshipMain />} />
                <Route path="/privacy-policy" element={<PrivacyMain />} />
                <Route path="/Terms-of-service" element={<TermsMain />} />
                
                <Route path="*" element={<NotFound />} /> 
              </Routes>
            </div>
          </div>
          <Footer />
        </Router>
      )}

      <style jsx global>{`
        /* Optional: Makes in-page anchor links smooth */
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default App;