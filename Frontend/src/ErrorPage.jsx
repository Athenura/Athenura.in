import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 border-2 border-[#28A3B9] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-white rounded-full"></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl">

        <h1 className="text-[120px] md:text-[160px] font-black text-[#28A3B9] leading-none">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
          Let’s get you back on track.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/">
            <button className="bg-[#28A3B9] hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <FaHome /> Go Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="border-2 border-white/30 hover:border-[#28A3B9] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center gap-2"
          >
            <FaArrowLeft /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;