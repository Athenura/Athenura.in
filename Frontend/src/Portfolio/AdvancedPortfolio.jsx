import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ExternalLink, Loader, Sparkles, Plus, Eye, X } from 'lucide-react';

const AdvancedPortfolio = () => {
  const canvasRef = useRef(null);
  const scrollRefs = useRef([]);

  // State
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Data
  const projects = [
    {
      id: 1,
      title: "Athenura.in",
      category: "Web Development",
      image: "/1.png",
      link: "#",
    },
    {
      id: 2,
      title: "Chhatrakosh ERP",
      category: "Enterprise Software",
      image: "/1.png",
      link: "#",
    },
    {
      id: 3,
      title: "E-Wing AI Automation",
      category: "AI Automation",
      image: "/1.png",
      link: "#",
    },
    {
      id: 4,
      title: "Raadhyam Music",
      category: "Creative Platform",
      image: "/1.png",
      link: "#",
    },
    {
      id: 5,
      title: "FinTech Dashboard",
      category: "Web Development",
      image: "/1.png",
      link: "#",
    },
    {
      id: 6,
      title: "HealthCare App",
      category: "Mobile App",
      image: "/1.png",
      link: "#",
    },
    {
      id: 7,
      title: "Real Estate Portal",
      category: "Web Development",
      image: "/1.png",
      link: "#",
    },
    {
      id: 8,
      title: "Crypto Exchange",
      category: "Web3",
      image: "/1.png",
      link: "#",
    },
    {
      id: 9,
      title: "Travel Booking",
      category: "Consumer Tech",
      image: "/1.png",
      link: "#",
    }
  ];

  // --- FILTER LOGIC ---
  // 1. Get unique categories from data
  const categories = ["All", ...new Set(projects.map(item => item.category))];

  // 2. Filter projects based on selection
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // 3. Slice for "Load More" functionality
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Handle Category Click
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(6); // Reset visible count when switching categories
  };

  // Handle Load More
  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 3);
      setLoadingMore(false);
    }, 800);
  };

  // Close Modal on Escape Key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Three.js Background Animation
  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF9FAFB);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 5;

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 150;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x1E7A86,
      transparent: true,
      opacity: 0.6,
      blending: THREE.NormalBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Shapes
    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.TorusGeometry(0.6, 0.2, 16, 100),
      new THREE.OctahedronGeometry(0.7)
    ];
    const material = new THREE.MeshPhongMaterial({
      color: 0x35B4C7,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const meshes = geometries.map((geo, i) => {
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.x = (i - 1) * 3.5;
      mesh.position.y = Math.sin(i) * 2;
      return mesh;
    });
    meshes.forEach(mesh => scene.add(mesh));

    // Light
    const light = new THREE.PointLight(0x1E7A86, 2);
    light.position.set(5, 5, 5);
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Animation Loop
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      meshes.forEach((mesh, i) => {
        mesh.rotation.x += 0.001 * (i + 1);
        mesh.rotation.y += 0.002 * (i + 1);
      });
      particlesMesh.rotation.y -= 0.0005;
      camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  // Hover Scroll Logic
  const handleProjectHover = (index, isEnter) => {
    const imgElement = scrollRefs.current[index];
    if (!imgElement) return;

    if (isEnter) {
      const scrollHeight = imgElement.scrollHeight;
      const containerHeight = imgElement.parentElement.clientHeight;
      if (scrollHeight > containerHeight) {
        const scrollDistance = scrollHeight - containerHeight;
        const duration = scrollDistance / 50;
        imgElement.style.transition = `transform ${duration}s linear`;
        imgElement.style.transform = `translateY(-${scrollDistance}px)`;
      }
    } else {
      imgElement.style.transition = 'transform 0.5s ease-out';
      imgElement.style.transform = 'translateY(0)';
    }
  };

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden py-24 px-4 font-sans">

      {/* Backgrounds */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Athenura <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E7A86] to-[#35B4C7]">Projects</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Explore our latest digital solutions crafted with precision, creativity, and cutting-edge technology.
          </p>
        </div>

        {/* --- CATEGORY FILTER --- */}
        <div className="
  flex flex-nowrap sm:flex-wrap
  justify-start sm:justify-center
  gap-2 sm:gap-3 md:gap-4
  mb-10 sm:mb-14 md:mb-16
  overflow-x-auto sm:overflow-visible
  px-2 sm:px-0
  scrollbar-hide
  snap-x snap-mandatory
">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={`
        snap-start
        px-4 sm:px-6
        py-2 sm:py-2.5
        rounded-full
        text-xs sm:text-sm
        font-bold
        whitespace-nowrap
        transition-all duration-300
        border
        ${activeCategory === category
                  ? "bg-[#1E7A86] text-white border-[#1E7A86] shadow-md scale-105"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#1E7A86] hover:text-[#1E7A86] hover:shadow-sm"
                }
      `}
            >
              {category}
            </button>
          ))}
        </div>


        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white overflow-hidden shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(30,122,134,0.3)] transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${(index % 3) * 100}ms` }}
            >
              <div
                className="relative h-[32rem] overflow-hidden bg-gray-100"
                onMouseEnter={() => handleProjectHover(index, true)}
                onMouseLeave={() => handleProjectHover(index, false)}
              >
                <img
                  ref={el => scrollRefs.current[index] = el}
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover object-top"
                  style={{ transform: 'translateY(0)', width: '100%', display: 'block' }}
                />

                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E7A86]/70 via-[#1E7A86]/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">

                    {/* Button 1: Open Modal */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-4 bg-white text-[#1E7A86] rounded-full shadow-xl hover:scale-110 transition-transform"
                      title="View Full Design"
                    >
                      <Eye size={24} />
                    </button>

                    {/* Button 2: External Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-[#35B4C7] text-white rounded-full shadow-xl hover:scale-110 transition-transform"
                      title="Visit Live Site"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>

                  {/* Project Name Tooltip style */}
                  <div className="absolute bottom-6 left-0 w-full text-center">
                    <h3 className="text-white font-bold text-lg drop-shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {project.title}
                    </h3>
                    <span className="text-white/80 text-xs uppercase tracking-wider translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 block mt-1">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="group relative px-8 py-4 bg-white border border-[#1E7A86]/20 text-[#1E7A86] rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-[#1E7A86] hover:text-white transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                {loadingMore ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    View More Projects
                    <Plus className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                  </>
                )}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* --- IMAGE MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-scale-in">
            <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white z-10">
              <h3 className="text-xl font-bold text-gray-800">{selectedProject.title}</h3>
              <div className="flex gap-2">
                <a href={selectedProject.link} target="_blank" rel="noreferrer" className="p-2 text-[#1E7A86] hover:bg-[#E8F8FA] rounded-full transition-colors">
                  <ExternalLink size={20} />
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="overflow-y-auto flex-1 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
            animation: scaleIn 0.3s ease-out forwards;
        }
        .scrollbar-thin::-webkit-scrollbar { width: 8px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }
      `}</style>
    </section>
  );
};

export default AdvancedPortfolio;