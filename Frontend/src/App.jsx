import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import HomeMain from './Home/HomeMain';
import Footer from './Footer';
import ApplyInternship from './Home/InternShipApply';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
        <Navbar />
      <div className="min-h-screen">
        <Routes>  
          <Route path="/apply-internship" element={<ApplyInternship />} />
          <Route path="/" element={<HomeMain />} />
          <Route path="/services" element={<HomeMain />} />

        </Routes>
      </div>
        <Footer />
    </Router>
  );
}

export default App;