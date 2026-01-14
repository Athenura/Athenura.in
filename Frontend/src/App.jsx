import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomeMain from './Home/HomeMain';
import Footer from './Footer';

function App() {
  return (
    <Router>
        <Navbar />
      <div className="min-h-screen">
        <Routes>  
          <Route path="/" element={<HomeMain />} />
          <Route path="/services" element={<HomeMain />} />

        </Routes>
      </div>
        <Footer />
    </Router>
  );
}

export default App;