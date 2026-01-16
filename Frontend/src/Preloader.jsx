// src/components/Preloader.jsx
import React, { useState, useEffect } from "react";

const Preloader = ({ onFinish }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState("opacity-0 translate-y-4");
  
  const words = ["Code", "Create", "Innovate"];
  const themeColor = "#1E90A8"; // Your teal theme color

  useEffect(() => {
    // 1. Fade In
    const showTimeout = setTimeout(() => {
      setFadeProp("opacity-100 translate-y-0");
    }, 100);

    // 2. Fade Out & Change Word
    const changeTimeout = setTimeout(() => {
      // If we are on the last word, don't fade out, just finish
      if (textIndex >= words.length - 1) {
        // Wait a bit on the final word "Innovate", then finish
        setTimeout(onFinish, 1000); 
        return;
      }

      setFadeProp("opacity-0 -translate-y-4");
      
      // Wait for fade out animation to finish before switching word
      setTimeout(() => {
        setTextIndex((prev) => prev + 1);
        setFadeProp("opacity-0 translate-y-4"); // Reset position for next word
      }, 500); 

    }, 1200); // Each word stays for 1.2 seconds

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(changeTimeout);
    };
  }, [textIndex, onFinish, words.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[#F8FBFC] z-0" />
      
      {/* Text Container */}
      <div className="relative z-10 text-center">
        <h1 
          className={`text-5xl md:text-7xl font-bold tracking-tight transition-all duration-700 ease-in-out transform ${fadeProp}`}
          style={{ color: themeColor }}
        >
          {words[textIndex]}
          <span className="text-gray-800">.</span>
        </h1>
        
        {/* Optional: Simple loading bar at bottom */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gray-800 animate-[loading_4s_ease-in-out_forwards]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;