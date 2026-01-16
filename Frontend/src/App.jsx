import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomeMain from './Home/HomeMain';
import Footer from './Footer';
import ApplyInternship from './Home/InternShipApply';
import AdvancedPortfolio from './Portfolio/AdvancedPortfolio';

function App() {
  return (
    <Router>
        <Navbar />
      <div className="min-h-screen">
        <Routes>  
          <Route path="/apply-internship" element={<ApplyInternship />} />
          <Route path="/" element={<HomeMain />} />
          <Route path="/services" element={<HomeMain />} />
          <Route path="/portfolio" element={<AdvancedPortfolio />} />

        </Routes>
      </div>
        <Footer />
    </Router>
  );
}

export default App;