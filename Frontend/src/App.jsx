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
import AdvancePortfolio from "./Portfolio/AdvancedPortfolio"


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
          <div className="animate-fade-in-up "> 
            <Navbar />
            <div className="min-h-screen ">
              <Routes>

                {/* Extarnal Pages */}
                <Route path="/apply-internship" element={<ApplyInternship />} />



                {/* Web Pages */}

                <Route path="/" element={<HomeMain />} />
                <Route path="/home" element={<HomeMain />} />
                <Route path="/careers" element={<CareerMain />} />
                <Route path="/contact" element={<ContactMain />} />
                <Route path="/services" element={<ServiceMain />} />
                <Route path='/portfolio' element={<AdvancePortfolio />} />
                
                <Route path="/faqs" element={<FaqPage />} />

                
                {/* Legal Pages */}
                <Route path="/internship-policy" element={<InternshipMain />} />


                
              </Routes>
            </div>
            <Footer />
          </div>
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