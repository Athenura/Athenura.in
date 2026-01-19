import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef, useCallback } from "react"

// ----------------------------------------------------------------------
// DATA: Tech Puzzle Options
// ----------------------------------------------------------------------
const PUZZLE_IMAGES = [
  { id: 1, name: "AI Neural Path", url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop", color: "#ec4899" },
  { id: 2, name: "Microchip Processor", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop", color: "#0ea5e9" },
  { id: 3, name: "Global Network", url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop", color: "#8b5cf6" },
  { id: 4, name: "Code Structure", url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop", color: "#f59e0b" },
  { id: 5, name: "Cloud Data", url: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?q=80&w=1000&auto=format&fit=crop", color: "#10b981" }
];

// ----------------------------------------------------------------------
// 1. Dynamic Tech Grid Background (Parallax Effect)
// ----------------------------------------------------------------------
const TechGridBackground = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setOffset({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base Grid */}
      <div 
        className="absolute inset-[-50%] w-[200%] h-[200%] opacity-[0.4]"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      {/* Secondary Dashed Grid */}
      <div 
        className="absolute inset-[-50%] w-[200%] h-[200%] opacity-[0.2]"
        style={{
          transform: `translate(${offset.x * -1.5}px, ${offset.y * -1.5}px)`,
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />
      {/* Radial Vignette to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(255,255,255,0.8)_100%)]" />
    </div>
  );
};

// ----------------------------------------------------------------------
// 2. Enhanced 3D Cube Puzzle with Improved Win Animation
// ----------------------------------------------------------------------
const CubePuzzle3D = () => {
  const GRID_SIZE = 3;
  const CUBE_SIZE_DESKTOP = 420;
  const CUBE_SIZE_MOBILE = 300;
  
  const [selectedImageIdx, setSelectedImageIdx] = useState(1);
  const [tiles, setTiles] = useState([]);
  const [isSolved, setIsSolved] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [rotation, setRotation] = useState({ x: -10, y: 15 });
  const [isHovering, setIsHovering] = useState(false);
  const [winAnimation, setWinAnimation] = useState(false);

  const activeImage = PUZZLE_IMAGES[selectedImageIdx];
  const containerRef = useRef(null);

  const getSolvedState = useCallback(() => Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => i), []);

  const shuffleTiles = useCallback(() => {
    let current = getSolvedState();
    let emptyIdx = GRID_SIZE * GRID_SIZE - 1;
    let previousIdx = -1;

    for (let i = 0; i < 40; i++) { 
      const neighbors = [];
      const row = Math.floor(emptyIdx / GRID_SIZE);
      const col = emptyIdx % GRID_SIZE;
      if (row > 0) neighbors.push(emptyIdx - GRID_SIZE);
      if (row < GRID_SIZE - 1) neighbors.push(emptyIdx + GRID_SIZE);
      if (col > 0) neighbors.push(emptyIdx - 1);
      if (col < GRID_SIZE - 1) neighbors.push(emptyIdx + 1);
      const validNeighbors = neighbors.filter(n => n !== previousIdx);
      const randomNeighbor = validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
      [current[emptyIdx], current[randomNeighbor]] = [current[randomNeighbor], current[emptyIdx]];
      previousIdx = emptyIdx;
      emptyIdx = randomNeighbor;
    }
    setTiles(current);
    setIsSolved(false);
    setWinAnimation(false);
  }, [getSolvedState]);

  useEffect(() => { shuffleTiles(); }, [selectedImageIdx, shuffleTiles]);

  const handleTileClick = (index) => {
    if (isSolved) return;
    const emptyIndex = tiles.indexOf(GRID_SIZE * GRID_SIZE - 1);
    const row = Math.floor(index / GRID_SIZE);
    const col = index % GRID_SIZE;
    const emptyRow = Math.floor(emptyIndex / GRID_SIZE);
    const emptyCol = emptyIndex % GRID_SIZE;

    if (Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1) {
      const newTiles = [...tiles];
      [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];
      setTiles(newTiles);
      const solved = getSolvedState();
      if (newTiles.every((val, i) => val === solved[i])) {
        setIsSolved(true);
        setWinAnimation(true);
        setTimeout(() => setWinAnimation(false), 2500);
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current || isSolved) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const yPct = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setRotation({ x: -yPct * 15, y: xPct * 15 });
  };

  const getBgPos = (val) => {
    const row = Math.floor(val / GRID_SIZE);
    const col = val % GRID_SIZE;
    return `${col * 50}% ${row * 50}%`;
  };

  return (
    <div className="flex flex-col items-center gap-8 relative z-20">
      
      {/* CONTROLS HEADER */}
      <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-sm">
         <button onClick={shuffleTiles} className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2">
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
           New Puzzle
         </button>
         <div className="w-px h-4 bg-slate-300"></div>
         <button 
            onMouseEnter={() => setShowHint(true)} 
            onMouseLeave={() => setShowHint(false)}
            onClick={() => setShowHint(!showHint)}
            className={`text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${showHint ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}
         >
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
           {showHint ? 'Hide Ref' : 'Show Ref'}
         </button>
      </div>

      <div className="relative flex items-center justify-center">
        
        {/* REFERENCE SOLUTION CARD */}
        <div className={`absolute -left-32 md:-left-48 top-10 w-24 md:w-32 aspect-square bg-white rounded-lg shadow-xl border-2 transition-all duration-500 transform origin-right z-10 ${showHint ? 'opacity-100 translate-x-0 rotate-y-0' : 'opacity-0 translate-x-10 rotate-y-90 pointer-events-none'}`}
             style={{ borderColor: activeImage.color }}>
           <img src={activeImage.url} alt="Reference" className="w-full h-full object-cover rounded-md" />
           <div className="absolute -bottom-6 w-full text-center text-[10px] font-bold text-slate-400">TARGET</div>
        </div>

        {/* 3D CUBE CONTAINER */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => { setRotation({ x: -10, y: 15 }); setIsHovering(false); }}
          className="relative perspective-container cursor-pointer group"
          style={{ width: 'var(--cube-size)', height: 'var(--cube-size)' }}
        >
          {/* WIN CONFETTI EFFECT */}
          {winAnimation && (
            <div className="absolute inset-0 z-50 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: activeImage.color,
                    top: '50%',
                    left: '50%',
                    animation: `confetti-${i % 4} 1.5s ease-out forwards`,
                    opacity: 0.8,
                  }}
                />
              ))}
            </div>
          )}

          <div className="cube-scene w-full h-full transition-transform duration-200 ease-out" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
            <div className="cube relative w-full h-full preserve-3d">
              
              {/* FRONT FACE (Puzzle) */}
              <div 
                className={`absolute inset-0 bg-white/90 backdrop-blur-xl border-[4px] rounded-2xl shadow-2xl flex items-center justify-center p-3 transition-all duration-500 ${isSolved ? 'scale-105' : ''}`}
                style={{ 
                  borderColor: activeImage.color, 
                  boxShadow: `0 30px 60px -15px ${activeImage.color}40`,
                  transform: 'translateZ(calc(var(--cube-size) / 2))',
                  transition: isSolved ? 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : ''
                }}
              >
                 <div className="grid grid-cols-3 gap-1.5 w-full h-full preserve-3d bg-slate-100 rounded-xl p-1.5 ring-1 ring-slate-200">
                    {tiles.map((tileVal, index) => {
                      const isEmpty = tileVal === (GRID_SIZE * GRID_SIZE - 1);
                      const showTile = !isEmpty || isSolved;
                      return (
                        <div
                          key={index}
                          onClick={(e) => { e.stopPropagation(); !isEmpty && handleTileClick(index); }}
                          className={`relative w-full h-full rounded-lg transition-all duration-300 preserve-3d overflow-hidden ${isEmpty && !isSolved ? 'opacity-0 pointer-events-none' : 'hover:scale-[1.02] hover:brightness-110'}`}
                          style={{ 
                            transform: showTile ? 'translateZ(20px)' : 'translateZ(0px)', 
                            boxShadow: showTile ? '2px 2px 8px rgba(0,0,0,0.1)' : 'none' 
                          }}
                        >
                          <div 
                            className="absolute inset-0 rounded-lg"
                            style={{ 
                              backgroundColor: '#e2e8f0', 
                              backgroundImage: showTile ? `url(${activeImage.url})` : 'none', 
                              backgroundSize: '300% 300%', 
                              backgroundPosition: showTile ? getBgPos(tileVal) : '0 0',
                            }}
                          />
                          {showTile && !isSolved && (
                             <div className="absolute top-1 left-1 text-[8px] md:text-[10px] font-mono text-white/50 bg-black/20 px-1 rounded">
                                {tileVal + 1}
                             </div>
                          )}
                        </div>
                      );
                    })}
                 </div>
              </div>

              {/* BACK FACE */}
              <div 
                className="absolute inset-0 rounded-2xl shadow-lg flex flex-col items-center justify-center bg-slate-900 border border-slate-700 backface-hidden"
                style={{ transform: 'rotateY(180deg) translateZ(calc(var(--cube-size) / 2))' }}
              >
                  <div className="w-16 h-16 border-4 border-dashed border-slate-600 rounded-full animate-spin-slow mb-4"></div>
                  <div className="text-slate-500 font-mono text-sm">SYSTEM BACKEND</div>
                  <div className="text-slate-700 text-xs mt-2">v2.0.4.1</div>
              </div>

              {/* SIDE FACES */}
              <div className="cube-side right" style={{ backgroundColor: activeImage.color, opacity: 0.1 }}></div>
              <div className="cube-side left" style={{ backgroundColor: activeImage.color, opacity: 0.1 }}></div>
              <div className="cube-side top" style={{ backgroundColor: activeImage.color, opacity: 0.05 }}></div>
              <div className="cube-side bottom" style={{ backgroundColor: activeImage.color, opacity: 0.2 }}></div>

              {/* WIN OVERLAY - Improved with animation */}
              {isSolved && (
                <div 
                  className="absolute inset-0 z-50 flex items-center justify-center preserve-3d"
                  style={{ transform: 'translateZ(calc(var(--cube-size) / 2 + 50px))' }}
                >
                   <div className={`win-message bg-white px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] font-black text-xl md:text-2xl flex flex-col items-center gap-2 border-2 text-center animate-win-pulse`} 
                        style={{ borderColor: activeImage.color, color: activeImage.color }}>
                      
                      {/* Animated Checkmark */}
                      <div className="w-12 h-12 mb-2 relative">
                        <div className="absolute inset-0 bg-current rounded-full opacity-10 animate-ping"></div>
                        <svg className="w-12 h-12 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <span className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-black">
                          Puzzle Solved!
                        </span>
                      </div>
                      
                      <button 
                        onClick={shuffleTiles}
                        className="mt-4 text-sm px-4 py-2 rounded-lg font-medium hover:shadow-md transition-all duration-300"
                        style={{ backgroundColor: activeImage.color, color: 'white' }}
                      >
                        New Challenge →
                      </button>
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Selector */}
      <div className="w-full max-w-[400px] bg-white/60 backdrop-blur-md rounded-2xl p-3 flex justify-between items-center shadow-lg border border-slate-200">
        {PUZZLE_IMAGES.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setSelectedImageIdx(idx)}
            className={`group relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden transition-all duration-300 border-[2px] ${selectedImageIdx === idx ? 'scale-110 shadow-md ring-2 ring-offset-2 ring-offset-white' : 'opacity-60 hover:opacity-100 hover:scale-105 border-slate-200 grayscale hover:grayscale-0'}`}
            style={{ borderColor: selectedImageIdx === idx ? img.color : '' }}
          >
            <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-[8px] text-white font-bold uppercase tracking-widest">{idx + 1}</span>
            </div>
          </button>
        ))}
      </div>

      <style jsx>{`
        .perspective-container { perspective: 1200px; }
        .preserve-3d { transform-style: preserve-3d; }
        
        /* Responsive Variables for Size */
        .perspective-container { --cube-size: ${CUBE_SIZE_MOBILE}px; }
        @media (min-width: 768px) {
           .perspective-container { --cube-size: ${CUBE_SIZE_DESKTOP}px; }
        }

        /* Cube sides */
        .cube-side {
           position: absolute;
           width: var(--cube-size);
           height: var(--cube-size);
           border-radius: 1rem;
        }
        .right { transform: rotateY(90deg) translateZ(calc(var(--cube-size) / 2)); }
        .left { transform: rotateY(-90deg) translateZ(calc(var(--cube-size) / 2)); }
        .top { transform: rotateX(90deg) translateZ(calc(var(--cube-size) / 2)); }
        .bottom { transform: rotateX(-90deg) translateZ(calc(var(--cube-size) / 2)); }
        
        /* Animations */
        @keyframes win-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 20px 50px rgba(0,0,0,0.2); }
          50% { transform: scale(1.05); box-shadow: 0 30px 70px rgba(0,0,0,0.3); }
        }
        
        @keyframes confetti-0 {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(0); opacity: 1; }
          100% { transform: translate(calc(-50% + 100px), calc(-50% - 150px)) rotate(180deg) scale(1); opacity: 0; }
        }
        
        @keyframes confetti-1 {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(0); opacity: 1; }
          100% { transform: translate(calc(-50% - 120px), calc(-50% - 120px)) rotate(240deg) scale(1); opacity: 0; }
        }
        
        @keyframes confetti-2 {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(0); opacity: 1; }
          100% { transform: translate(calc(-50% + 150px), calc(-50% + 100px)) rotate(300deg) scale(1); opacity: 0; }
        }
        
        @keyframes confetti-3 {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(0); opacity: 1; }
          100% { transform: translate(calc(-50% - 80px), calc(-50% + 180px)) rotate(120deg) scale(1); opacity: 0; }
        }
        
        .animate-win-pulse { animation: win-pulse 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 10s linear infinite; }
        
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

// ----------------------------------------------------------------------
// 3. Enhanced Main Hero Component with Better Headlines
// ----------------------------------------------------------------------
const HomeHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // More effective headlines focusing on benefits and action
  const headlineOptions = [
    "Build Smarter",
    "Solve Faster", 
    "Think Deeper",
    "Create Better",
    "Innovate Now"
  ];
  
  const [currentHeadlineIdx, setCurrentHeadlineIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadlineIdx((prev) => (prev + 1) % headlineOptions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [headlineOptions.length]);

  useEffect(() => setIsLoaded(true), []);

  return (
    <section className="relative w-full min-h-[100dvh] bg-gray-200 overflow-hidden flex flex-col font-sans text-slate-900">
      
      {/* Backgrounds */}
      <TechGridBackground />
      
      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 h-full flex flex-col lg:flex-row  justify-between min-h-[100dvh] py-12 lg:py-0">
        
        {/* Left: Enhanced Typography */}
        <div className="w-full lg:w-[45%] flex flex-col space-y-8  lg:pt-10 z-20 lg:items-start lg:text-left pointer-events-none">
          
          
          {/* Main Headline with stronger impact */}
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight text-[#077c8c] leading-[1.05]">
            <span className={`block overflow-hidden transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
              <span className={`block transform transition-transform duration-700 ease-out ${isLoaded ? "translate-y-0" : "translate-y-full"}`}>
                Master Digital
              </span>
            </span>
            
            <span className="relative block h-[1.2em] overflow-hidden mt-5">
              <span className="absolute inset-0 text-[#000000] bg-clip-text bg-transparent font-black">
                {headlineOptions.map((headline, i) => (
                  <span
                    key={i}
                    className={`absolute left-0 top-0 transition-all duration-700 ease-in-out transform ${i === currentHeadlineIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
                  >
                    {headline}
                  </span>
                ))}
              </span>
            </span>
            
            <span className={`block overflow-hidden transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
              <span className={`block transform transition-transform duration-700 ease-out delay-300 ${isLoaded ? "translate-y-0" : "translate-y-full"}`}>
                Architectures
              </span>
            </span>
          </h1>

          {/* Improved benefit-focused description */}
          <p className={`text-lg text-slate-600 max-w-lg leading-relaxed transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Develop critical thinking and problem-solving skills through interactive challenges. 
            Each puzzle enhances your spatial reasoning and logical analysis abilities.
          </p>

          {/* Enhanced CTAs with clear hierarchy */}
          <div className={`flex flex-wrap gap-4 pt-6 transition-all duration-700 delay-700 pointer-events-auto ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
           <Link to="/portfolio">
            <button className="bg-gradient-to-r from-[#14636d] to-[#2f97a4] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
              <span>View Innovation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
           </Link>
          
          </div>

        </div>

        {/* Right: The Enhanced 3D Puzzle */}
        <div className={`w-full lg:w-[55%] flex items-center justify-center mt-12 lg:mt-0 transform transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-10'}`}>
             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-100 rounded-full animate-spin-[120s] pointer-events-none" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-dashed border-slate-200 rounded-full animate-spin-[60s] animation-direction-reverse pointer-events-none" />
             
             <CubePuzzle3D />
        </div>

      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default React.memo(HomeHero);