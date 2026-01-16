import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ExternalLink, Github, Award, Sparkles, Zap } from 'lucide-react';

const AdvancedPortfolio = () => {
  const canvasRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const scrollRefs = useRef([]);

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Athenura.in",
      category: "Web Development",
      image: "/1.PNG",
      link: "#",
      github: "#"
    },
    
  ];

  // Three.js Background Animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 5;

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x30aec2,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create geometric shapes
    const geometries = [
      new THREE.TorusGeometry(0.7, 0.2, 16, 100),
      new THREE.OctahedronGeometry(0.6),
      new THREE.TetrahedronGeometry(0.8)
    ];

    const material = new THREE.MeshPhongMaterial({
      color: 0x30aec2,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });

    const meshes = geometries.map((geo, i) => {
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.x = (i - 1) * 3;
      mesh.position.y = Math.sin(i) * 2;
      return mesh;
    });

    meshes.forEach(mesh => scene.add(mesh));

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate meshes
      meshes.forEach((mesh, i) => {
        mesh.rotation.x += 0.002 * (i + 1);
        mesh.rotation.y += 0.003 * (i + 1);
      });

      // Particle movement
      particlesMesh.rotation.y += 0.001;

      // Camera follows mouse
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
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
      renderer.dispose();
    };
  }, []);

  // Scroll animation for project images
  const handleProjectHover = (index, isEnter) => {
    const imgElement = scrollRefs.current[index];
    if (!imgElement) return;

    if (isEnter) {
      const scrollHeight = imgElement.scrollHeight;
      const containerHeight = imgElement.parentElement.clientHeight;
      const scrollDistance = scrollHeight - containerHeight;
      
      imgElement.style.transition = `transform ${scrollDistance / 100}s linear`;
      imgElement.style.transform = `translateY(-${scrollDistance}px)`;
    } else {
      imgElement.style.transition = 'transform 0.5s ease-out';
      imgElement.style.transform = 'translateY(0)';
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a2540] via-[#0d3a5f] to-[#134e6f] overflow-hidden py-20 px-4">
      
      {/* Three.js Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a2540]/50 to-[#0a2540] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        {/* <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-[#30aec2]/30 rounded-full">
            <Sparkles className="w-5 h-5 text-[#30aec2]" />
            <span className="text-white font-semibold">Our Work</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Featured
            <span className="block bg-gradient-to-r from-white via-[#30aec2] to-[#5ecfdd] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Explore our latest digital masterpieces crafted with precision, creativity, and cutting-edge technology
          </p>

          {/* Stats */}
          {/* <div className="flex justify-center gap-8 pt-8">
            {[
              { icon: <Award className="w-6 h-6" />, label: "50+ Projects" },
              { icon: <Zap className="w-6 h-6" />, label: "98% Success" },
              { icon: <Sparkles className="w-6 h-6" />, label: "20+ Awards" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-[#30aec2]/30">
                <div className="text-[#30aec2]">{stat.icon}</div>
                <span className="text-sm font-semibold text-white">{stat.label}</span>
              </div>
            ))}
          </div>
        </div> */} 

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white  rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#30aec2]/50 transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setActiveProject(index)}
            >
              {/* Image Container with Scroll Effect */}
              <div 
                className="relative h-[32rem] overflow-hidden"
                onMouseEnter={() => handleProjectHover(index, true)}
                onMouseLeave={() => handleProjectHover(index, false)}
              >
                <img
                  ref={el => scrollRefs.current[index] = el}
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover  object-top"
                  style={{ transform: 'translateY(0)' }}
                />
                
                {/* Hover Overlay with Title and Links */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/95 via-[#0a2540]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6">
                  
                  {/* Category Badge - Top */}
                  <div className="flex justify-end">
                    <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                      <span className="text-xs font-bold text-[#0a2540]">{project.category}</span>
                    </div>
                  </div>

                  {/* Title and Links - Bottom */}
                  <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    
                    <div className="flex gap-3">
                      <a 
                        href={project.link}
                        className="flex items-center gap-2 px-5 py-3 bg-white hover:bg-[#30aec2] text-[#0a2540] hover:text-white rounded-xl font-semibold shadow-lg transition-all transform hover:scale-105"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Visit Site</span>
                      </a>
                      <a 
                        href={project.github}
                        className="p-3 bg-white hover:bg-[#30aec2] text-[#0a2540] hover:text-white rounded-xl shadow-lg transition-all transform hover:scale-105"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#30aec2]/50 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <p className="text-xl text-blue-100">
            Like what you see? Let's create something amazing together
          </p>
          <button className="px-8 py-4 bg-white hover:bg-[#30aec2] hover:text-white text-[#0a2540] rounded-xl font-bold text-lg shadow-2xl hover:shadow-[#30aec2]/50 transition-all transform hover:-translate-y-1 flex items-center gap-2 mx-auto">
            Start Your Project
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#30aec2]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#30aec2]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default AdvancedPortfolio;