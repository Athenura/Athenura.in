import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const servicesRef = useRef(null);
  const servicesButtonRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const hamburgerBtn = document.getElementById("hamburger-btn");

      // Only close if clicking OUTSIDE both the menu AND the button
      if (
        isMobileMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target) &&
        hamburgerBtn &&
        !hamburgerBtn.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }

      if (
        (isServicesOpen || isServicesHovered) &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
        setIsServicesHovered(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen, isServicesOpen, isServicesHovered]);

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsServicesHovered(false);
  };

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Career", path: "/career" },
    { name: "Internship", path: "/internship" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
  ];

  const servicesData = [
    { title: "Custom Software Development", description: "Tailored solutions for your unique business needs", link: "/services/custom-software" },
    { title: "Web Application Development", description: "Modern, scalable web applications", link: "/services/web-apps" },
    { title: "Enterprise Software Solutions", description: "Robust systems for large organizations", link: "/services/enterprise" },
    { title: "UI/UX Design", description: "Intuitive and beautiful user experiences", link: "/services/ui-ux" },
    { title: "Website Maintenance", description: "Keep your digital presence running smoothly", link: "/services/maintenance" },
    { title: "Software Testing & QA", description: "Ensure quality and reliability", link: "/services/testing" },
    { title: "Business Automation Solutions", description: "Streamline your operations", link: "/services/automation" },
  ];

  // Enhanced Desktop Services Dropdown
  const ServicesDropdown = () => (
    <div
      ref={servicesRef}
      onMouseEnter={() => setIsServicesHovered(true)}
      onMouseLeave={() => setIsServicesHovered(false)}
      className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+10px)] w-[680px] bg-white/95 backdrop-blur-md rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 ease-out ${isServicesOpen || isServicesHovered
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-4"
        } z-50 overflow-hidden`}
    >
      {/* Decorative top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#28A3B9] to-[#1E90A8]" />

      <div className="p-8">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#28A3B9]" />
              Our Expertise
            </h3>
            <p className="text-sm text-gray-500 mt-1">Explore our comprehensive digital solutions</p>
          </div>
          <Link to="/services" onClick={handleServiceClick} className="text-xs font-semibold text-[#28A3B9] hover:text-[#1E90A8] flex items-center gap-1 group">
            View all services <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {servicesData.map((service, index) => (
            <NavLink
              key={index}
              to={service.link}
              className="group p-4 rounded-xl bg-gray-50 hover:bg-blue-50/50 border border-transparent hover:border-[#28A3B9]/20 transition-all duration-200"
              onClick={handleServiceClick}
            >
              <div className="flex items-start">
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-[#28A3B9] text-sm mb-1 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );

  // Enhanced Mobile Dropdown
  const MobileServicesDropdown = () => (
    <div className="overflow-hidden transition-all duration-300 ease-in-out bg-gray-50/50 rounded-lg my-2">
      <div className="space-y-1 p-2">
        {servicesData.map((service, index) => (
          <div key={index}>
            <NavLink
              to={service.link}
              className="block py-3 px-3 rounded-md text-gray-600 hover:text-[#28A3B9] hover:bg-white transition-all"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setOpenDropdown(null);
              }}
            >
              <div className="text-sm font-semibold">{service.title}</div>
              <div className="text-xs text-gray-400 mt-0.5 font-normal">{service.description}</div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
          : "bg-white border-b border-gray-100 py-4"
          }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">

            {/* Logo - Added pointer-events-auto just in case */}
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 group relative z-40 pointer-events-auto">
              <img
                src="/Athenura.png"
                alt="Athenura"
                className={`transition-all duration-300 ${scrolled ? 'h-13' : 'h-14 sm:h-16'}`}
              />
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group px-1">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      <button
                        ref={servicesButtonRef}
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isServicesOpen || isServicesHovered
                          ? "text-[#28A3B9] bg-[#28A3B9]/10"
                          : "text-gray-600 hover:text-[#28A3B9] hover:bg-gray-50"
                          }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`ml-1.5 w-4 h-4 transition-transform duration-300 ${isServicesOpen || isServicesHovered ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      <ServicesDropdown />
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                          ? "text-[#28A3B9] bg-[#28A3B9]/10"
                          : "text-gray-600 hover:text-[#28A3B9] hover:bg-gray-50"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}

              {/* Enhanced CTA Button */}
              <div className="pl-4 ml-2">
                <Link to="/apply-internship">
                  <button className="group relative flex items-center justify-center gap-2 px-8 py-3 bg-black text-white text-sm font-semibold rounded-full overflow-hidden transition-all">
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                      Apply Now
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>

                    {/* Main Color Fill */}
                    <div className="absolute inset-0 bg-[#28A3B9] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-200 ease-out"></div>

                    {/* Shimmer Effect */}
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile Hamburger - FIXED Z-INDEX AND CLICK AREA */}
            <div className="lg:hidden flex items-center relative z-50">
              <button
                id="hamburger-btn"
                onClick={(e) => {
                  e.stopPropagation(); // Stop click from bubbling up
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="p-2 -mr-2 text-gray-600 hover:text-[#28A3B9] focus:outline-none transition-colors pointer-events-auto"
                aria-label="Toggle menu"
              >
                <div className="relative w-8 h-8 flex justify-center items-center">
                  {/* Animate icon swap */}
                  {isMobileMenuOpen ? (
                    <X className="w-7 h-7" />
                  ) : (
                    <Menu className="w-7 h-7" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMobileMenuOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-full invisible"
          }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
          <nav className="space-y-2">
            {navigationItems.map((item, idx) => (
              <div key={item.name} className="border-b border-gray-100 last:border-0 pb-2">
                {item.hasDropdown ? (
                  <div className="overflow-hidden">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className={`flex items-center justify-between w-full py-4 text-lg font-medium transition-colors ${openDropdown === item.name ? "text-[#28A3B9]" : "text-gray-800"
                        }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${openDropdown === item.name ? "rotate-180 text-[#28A3B9]" : "text-gray-400"
                          }`}
                      />
                    </button>
                    <div className={`grid transition-all duration-300 ease-in-out ${openDropdown === item.name ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}>
                      <div className="overflow-hidden">
                        <MobileServicesDropdown />
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-4 text-lg font-medium transition-colors ${isActive ? "text-[#28A3B9]" : "text-gray-800 hover:text-[#28A3B9]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <Link to="/apply-internship" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="group w-full py-4 bg-[#28A3B9] text-white text-lg font-semibold rounded-xl shadow-lg shadow-[#28A3B9]/20 active:scale-[0.98] transition-all duration-300 hover:bg-black flex items-center justify-center gap-2">

                <span>Apply Now</span>

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>
            </Link>

            <div className="mt-8 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} Athenura. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;