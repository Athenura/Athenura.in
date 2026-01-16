import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
      // Close mobile menu
      const mobileMenu = document.getElementById("mobile-menu");
      const hamburgerBtn = document.getElementById("hamburger-btn");

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

      // Close services dropdown on desktop when clicking outside
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

  // Close services dropdown when clicking on a service
  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsServicesHovered(false);
  };

  // Navigation data
  const navigationItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
    },

    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Careers",
      path: "/careers",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // Services data
  const servicesData = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions for your unique business needs",
      link: "/services/custom-software",
    },
    {
      title: "Web Application Development",
      description: "Modern, scalable web applications",
      link: "/services/web-apps",
    },
    {
      title: "Enterprise Software Solutions",
      description: "Robust systems for large organizations",
      link: "/services/enterprise",
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and beautiful user experiences",
      link: "/services/ui-ux",
    },
    {
      title: "Website Maintenance",
      description: "Keep your digital presence running smoothly",
      link: "/services/maintenance",
    },
    {
      title: "Software Testing & QA",
      description: "Ensure quality and reliability",
      link: "/services/testing",
    },
    {
      title: "Business Automation Solutions",
      description: "Streamline your operations",
      link: "/services/automation",
    },
  ];

  // Desktop Services Dropdown Component
  const ServicesDropdown = () => (
    <div
      ref={servicesRef}
      onMouseEnter={() => setIsServicesHovered(true)}
      onMouseLeave={() => setIsServicesHovered(false)}
      className={`absolute left-0 top-full w-[600px] bg-white rounded-lg shadow-2xl border border-gray-200 transition-all duration-300 ${isServicesOpen || isServicesHovered
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-2"
        } z-50 overflow-hidden`}
    >
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#28A3B9] mb-1">Our Services</h3>
          <p className="text-sm text-gray-600">Comprehensive digital solutions for your business</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {servicesData.map((service, index) => (
            <NavLink
              key={index}
              to={service.link}
              className="group p-3 rounded-lg border border-gray-100 hover:border-[#28A3B9] hover:shadow-md transition-all duration-200"
              onClick={handleServiceClick}
            >
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-[#28A3B9] mb-1 text-sm">
                  {service.title}
                </h4>
                <p className="text-xs text-gray-500">{service.description}</p>
              </div>
            </NavLink>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-gray-100">
          <NavLink
            to="/services"
            onClick={handleServiceClick}
            className="block w-full py-2.5 bg-[#28A3B9] text-white text-sm font-medium rounded-md hover:bg-[#1E90A8] transition-colors text-center"
          >
            View All Services
          </NavLink>

        </div>
      </div>
    </div>
  );

  // Mobile Services Dropdown Component - Clean design without boxes
  const MobileServicesDropdown = () => (
    <div className="mt-1 ml-3 pl-3 border-l border-gray-200">
      <div className="space-y-1">
        {servicesData.map((service, index) => (
          <div key={index}>
            <NavLink
              to={service.link}
              className="block py-2 px-1 text-gray-700 hover:text-[#28A3B9] transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setOpenDropdown(null);
              }}
            >
              <div className="text-sm font-medium">{service.title}</div>
              <div className="text-xs text-gray-500 mt-0.5">{service.description}</div>
            </NavLink>
          </div>
        ))}

        <div className="pt-3 mt-3 border-t border-gray-200">
          <NavLink
            to="/services"
            className="block py-2.5 bg-[#28A3B9] text-white text-sm font-medium rounded-md hover:bg-[#1E90A8] transition-colors text-center"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenDropdown(null);
            }}
          >
            View All Services
          </NavLink>
        </div>
      </div>
    </div>
  );

  // Professional NavLink Component for desktop
  const ProfessionalNavLink = ({ to, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `relative px-3 py-2 transition-all duration-300 font-medium ${isActive
            ? "text-[#28A3B9]"
            : "text-gray-700 hover:text-[#28A3B9]"
          }`
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10">{children}</span>
        {/* Professional underline animation */}
        <div className="absolute bottom-0 left-0 w-full h-px overflow-hidden">
          <div
            className={`h-full bg-[#28A3B9] transition-all duration-300 ${isHovered ? "w-full" : "w-0"
              }`}
          />
        </div>
      </NavLink>
    );
  };

  // Professional Services button
  const ProfessionalServicesButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div className="relative">
        <button
          ref={servicesButtonRef}
          onMouseEnter={() => {
            setIsHovered(true);
            setIsServicesHovered(true);
          }}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsServicesOpen(!isServicesOpen)}
          className={`relative flex items-center px-3 py-2 transition-all duration-300 font-medium ${isServicesOpen || isServicesHovered
            ? "text-[#28A3B9]"
            : "text-gray-700 hover:text-[#28A3B9]"
            }`}
        >
          Services
          <ChevronDown
            className={`ml-1 w-3.5 h-3.5 transition-transform ${isServicesOpen || isServicesHovered ? "rotate-180" : ""
              }`}
          />
        </button>
        {/* Professional underline animation */}
        <div className="absolute bottom-0 left-0 w-full h-px overflow-hidden">
          <div
            className={`h-full bg-[#28A3B9] transition-all duration-300 ${(isHovered || isServicesOpen || isServicesHovered) ? "w-full" : "w-0"
              }`}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Professional Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all max-w-8xl duration-300 ${scrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-white border-b border-gray-100"
          }`}
      >
        <div className="max-w-8xl mx-auto">
          <div className="flex items-center justify-between h-14">
            {/* Logo - Professional design */}
            <NavLink to="/" className="flex items-center space-x-2.5 group">
              <div>
                <img src="/Athenura.png" alt="Athenura" className="h-12 sm:h-15" />
              </div>
            </NavLink>

            {/* Desktop Navigation - Professional spacing */}
            <div className="hidden lg:flex items-center space-x-0">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      <ProfessionalServicesButton />
                      <ServicesDropdown />
                    </div>
                  ) : (
                    <ProfessionalNavLink to={item.path}>
                      {item.name}
                    </ProfessionalNavLink>
                  )}
                </div>
              ))}

              {/* Professional CTA Button */}
              <div className="ml-3 pl-3 border-l border-gray-200">
                <Link to="/apply-internship">
                  <button className="px-4 py-2 bg-[#28A3B9] text-white text-sm font-medium rounded-md hover:bg-[#1E90A8] transition-colors">
                    Apply for Internship
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button - Clean design */}
            <div className="lg:hidden">
              <button
                id="hamburger-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-md flex items-center justify-center text-gray-700 hover:text-[#28A3B9] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4.5 h-4.5" />
                ) : (
                  <Menu className="w-4.5 h-4.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Professional Mobile Menu Sidebar */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-30" : "opacity-0"
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Professional Sidebar - Clean design */}
        <div
          className={`absolute left-0 top-10 h-full w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex mt-5 flex-col h-full">

            {/* Sidebar Content - Clean list without boxes */}
            <div className="flex-1 overflow-y-auto py-4 px-3">
              <nav className="space-y-0">
                {navigationItems.map((item) => (
                  <div key={item.name} className="mb-0.5">
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.name ? null : item.name
                            )
                          }
                          className="flex items-center justify-between w-full py-3 px-2 text-left text-gray-700 hover:text-[#28A3B9] transition-colors"
                        >
                          <span className="text-sm font-medium">{item.name}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${openDropdown === item.name ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                        {openDropdown === item.name && (
                          <MobileServicesDropdown />
                        )}
                      </div>
                    ) : (
                      <NavLink
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `block py-3 px-2 text-sm transition-colors border-l-2 ${isActive
                            ? "text-[#28A3B9] font-medium border-[#28A3B9] bg-blue-50"
                            : "text-gray-700 hover:text-[#28A3B9] hover:bg-blue-50 border-transparent"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA - Clean */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Ready to Transform?</h3>
                <p className="text-xs text-gray-600 mb-3">Let's build something amazing together</p>
                <a href="">
                  <button className="w-full py-2.5 bg-[#28A3B9] text-white text-sm font-medium rounded-md hover:bg-[#1E90A8] transition-colors">
                    Schedule a Call
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;