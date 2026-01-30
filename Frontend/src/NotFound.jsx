import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  ContactShadows, 
  OrbitControls, 
  Stars, 
  Sparkles, 
  RoundedBox,
  Cylinder,
  Sphere,
  Float,
  Text3D,
  Text,
  Html
} from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, Noise, DepthOfField } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

// --- Responsive Camera with Touch Support ---
const ResponsiveCamera = () => {
  const { camera, size } = useThree();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(size.width < 768);
    };
    checkMobile();
    
    const handleResize = () => {
      checkMobile();
      if (isMobile) {
        camera.position.set(-1.5, 1, 4);
        camera.fov = 70;
      } else {
        camera.position.set(-2, 1.5, 5);
        camera.fov = 60;
      }
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, [size, camera, isMobile]);
  
  return null;
};

// --- Enhanced Cute Materials ---
const whitePlasticMaterial = new THREE.MeshPhysicalMaterial({
  color: "#ffffff",
  roughness: 0.05,
  metalness: 0.05,
  clearcoat: 1.0,
  clearcoatRoughness: 0.05,
  ior: 1.6,
  specularIntensity: 1,
  envMapIntensity: 1
});

const blackGlassMaterial = new THREE.MeshPhysicalMaterial({
  color: "#111111",
  roughness: 0.1,
  metalness: 0.9,
  clearcoat: 0.5,
  transparent: true,
  opacity: 0.9
});

const eyeMaterial = new THREE.MeshStandardMaterial({
  color: "#00ccff",
  emissive: "#00ccff",
  emissiveIntensity: 4,
  toneMapped: false
});

const blushMaterial = new THREE.MeshStandardMaterial({
  color: "#ff6699",
  emissive: "#ff6699",
  emissiveIntensity: 2,
  toneMapped: false
});

// Glowing heart material
const heartMaterial = new THREE.MeshStandardMaterial({
  color: "#ff3366",
  emissive: "#ff3366",
  emissiveIntensity: 3,
  toneMapped: false
});

// --- Interactive Floating Hearts ---
const FloatingHearts = ({ count = 15 }) => {
  const hearts = useRef([]);
  const group = useRef();
  
  useFrame((state) => {
    hearts.current.forEach((heart, i) => {
      if (heart) {
        const time = state.clock.getElapsedTime();
        heart.position.y = Math.sin(time * 0.5 + i) * 0.2;
        heart.rotation.z = time * 0.3;
        heart.scale.setScalar(0.5 + Math.sin(time + i) * 0.1);
      }
    });
  });
  
  return (
    <group ref={group}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const radius = 2 + Math.random() * 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.random() * 3 - 1;
        
        return (
          <mesh
            key={i}
            ref={el => hearts.current[i] = el}
            position={[x, y, z]}
            scale={0.3}
          >
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#ff3366" emissive="#ff3366" emissiveIntensity={0.5} />
          </mesh>
        );
      })}
    </group>
  );
};

// --- Enhanced Cute Robot Component ---
const Robot = (props) => {
  const group = useRef();
  const bodyRef = useRef();
  const headRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  const leftLegRef = useRef();
  const rightLegRef = useRef();
  const leftEarRef = useRef();
  const rightEarRef = useRef();
  const eyesRef = useRef([]);
  const heartRef = useRef();

  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [eyeScale, setEyeScale] = useState([1, 1]);
  const [touchActive, setTouchActive] = useState(false);

  // Mobile touch handlers
  useEffect(() => {
    const handleTouchStart = () => setTouchActive(true);
    const handleTouchEnd = () => {
      setTouchActive(false);
      setShowHearts(true);
      setTimeout(() => setShowHearts(false), 2000);
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const speed = hovered ? 2 : 10;
    
    // Mouse/Touch Tracking
    if (headRef.current && bodyRef.current) {
      const targetX = (state.pointer.x * Math.PI) / 3;
      const targetY = (state.pointer.y * Math.PI) / 3;
      
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.1);
      bodyRef.current.rotation.y = THREE.MathUtils.lerp(bodyRef.current.rotation.y, targetX * 0.3, 0.05);
    }

    // Cute animations
    group.current.position.y = Math.sin(t * speed) * 0.08 - 0.5;
    group.current.rotation.z = Math.sin(t * speed) * 0.03;

    // Ear wiggle
    if (leftEarRef.current && rightEarRef.current) {
      leftEarRef.current.rotation.z = Math.sin(t * 4) * 0.15;
      rightEarRef.current.rotation.z = -Math.sin(t * 4) * 0.15;
    }

    // Leg movement
    leftLegRef.current.rotation.x = Math.sin(t * speed) * 0.6;
    rightLegRef.current.rotation.x = Math.sin(t * speed + Math.PI) * 0.6;

    // Arm movement
    rightArmRef.current.rotation.x = -1.5 + Math.sin(t * speed) * 0.15;
    leftArmRef.current.rotation.x = Math.sin(t * speed + Math.PI) * 0.6;
    leftArmRef.current.rotation.z = 0.3;

    // Eye blinking effect
    if (eyesRef.current[0] && eyesRef.current[1]) {
      const blink = Math.sin(t * 2) > 0.9 ? 0.1 : 1;
      setEyeScale([1, blink]);
      eyesRef.current.forEach(eye => {
        if (eye) eye.scale.y = blink;
      });
    }

    // Heart animation when showing
    if (heartRef.current && showHearts) {
      heartRef.current.rotation.y += 0.05;
      heartRef.current.scale.setScalar(0.8 + Math.sin(t * 5) * 0.2);
    }

    // Click reaction (jump and spin)
    if (clicked) {
      group.current.position.y += 0.1;
      group.current.rotation.y += 0.2;
      if (group.current.rotation.y > Math.PI * 2) {
        setClicked(false);
        group.current.rotation.y = 0;
      }
    }
  });

  const handleClick = () => {
    setClicked(true);
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 2000);
  };

  return (
    <group 
      ref={group} 
      {...props} 
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={handleClick}
      onPointerDown={() => setTouchActive(true)}
      onPointerUp={() => setTouchActive(false)}
    >
      
      {/* Head */}
      <group position={[0, 1.2, 0]} ref={headRef}>
        {/* Main Head */}
        <RoundedBox args={[0.8, 0.7, 0.7]} radius={0.25} smoothness={10}>
          <primitive object={whitePlasticMaterial} attach="material" />
        </RoundedBox>
        
        {/* Face Screen */}
        <RoundedBox position={[0, 0, 0.32]} args={[0.6, 0.35, 0.08]} radius={0.08}>
          <primitive object={blackGlassMaterial} attach="material" />
        </RoundedBox>

        {/* Eyes with blinking */}
        <mesh 
          position={[-0.18, 0, 0.36]} 
          ref={el => eyesRef.current[0] = el}
          scale={[1, 1, 1]}
        >
          <capsuleGeometry args={[0.06, 0.12, 4, 8]} />
          <primitive object={eyeMaterial} attach="material" />
        </mesh>
        <mesh 
          position={[0.18, 0, 0.36]} 
          ref={el => eyesRef.current[1] = el}
          scale={[1, 1, 1]}
        >
          <capsuleGeometry args={[0.06, 0.12, 4, 8]} />
          <primitive object={eyeMaterial} attach="material" />
        </mesh>

        {/* Mouth Expression */}
        <mesh position={[0, -0.12, 0.38]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color="#111111" />
        </mesh>

        {/* Blushing Cheeks */}
        {(hovered || touchActive) && (
          <>
            <mesh position={[-0.25, -0.1, 0.38]} material={blushMaterial}>
              <circleGeometry args={[0.05, 16]} />
            </mesh>
            <mesh position={[0.25, -0.1, 0.38]} material={blushMaterial}>
              <circleGeometry args={[0.05, 16]} />
            </mesh>
          </>
        )}

        {/* Ears/Headphones */}
        <group position={[-0.45, 0, 0]} ref={leftEarRef}>
          <RoundedBox args={[0.1, 0.3, 0.25]} radius={0.05}>
            <primitive object={whitePlasticMaterial} attach="material" />
          </RoundedBox>
          <Cylinder args={[0.02, 0.02, 0.25]} position={[0, 0.18, 0]}>
            <primitive object={blackGlassMaterial} attach="material" />
          </Cylinder>
          <Sphere args={[0.04]} position={[0, 0.3, 0]}>
            <primitive object={eyeMaterial} attach="material" />
          </Sphere>
        </group>
        
        <group position={[0.45, 0, 0]} ref={rightEarRef}>
          <RoundedBox args={[0.1, 0.3, 0.25]} radius={0.05}>
            <primitive object={whitePlasticMaterial} attach="material" />
          </RoundedBox>
          <Cylinder args={[0.02, 0.02, 0.25]} position={[0, 0.18, 0]}>
            <primitive object={blackGlassMaterial} attach="material" />
          </Cylinder>
          <Sphere args={[0.04]} position={[0, 0.3, 0]}>
            <primitive object={eyeMaterial} attach="material" />
          </Sphere>
        </group>
      </group>

      {/* Body */}
      <group position={[0, 0.6, 0]} ref={bodyRef}>
        <RoundedBox args={[0.5, 0.55, 0.45]} radius={0.15}>
          <primitive object={whitePlasticMaterial} attach="material" />
        </RoundedBox>
        
        {/* Tummy Plate with Heart */}
        <RoundedBox position={[0, 0, 0.23]} args={[0.3, 0.3, 0.05]} radius={0.05}>
          <primitive object={blackGlassMaterial} attach="material" />
        </RoundedBox>
        
        {/* Glowing Heart (appears on click) */}
        {showHearts && (
          <mesh position={[0, 0, 0.28]} ref={heartRef}>
            <torusGeometry args={[0.08, 0.03, 8, 16, Math.PI]} />
            <primitive object={heartMaterial} attach="material" />
          </mesh>
        )}
      </group>

      {/* Arms */}
      <group position={[-0.35, 0.7, 0]} ref={leftArmRef}>
        <Sphere args={[0.09]}>
          <primitive object={blackGlassMaterial} attach="material" />
        </Sphere>
        <RoundedBox position={[0, -0.25, 0]} args={[0.14, 0.4, 0.14]} radius={0.06}>
          <primitive object={whitePlasticMaterial} attach="material" />
        </RoundedBox>
        <Sphere position={[0, -0.5, 0]} args={[0.11]}>
          <primitive object={whitePlasticMaterial} attach="material" />
        </Sphere>
      </group>

      <group position={[0.35, 0.7, 0]} ref={rightArmRef}>
        <Sphere args={[0.09]}>
          <primitive object={blackGlassMaterial} attach="material" />
        </Sphere>
        <RoundedBox position={[0, -0.25, 0]} args={[0.14, 0.4, 0.14]} radius={0.06}>
          <primitive object={whitePlasticMaterial} attach="material" />
        </RoundedBox>
        <RoundedBox position={[0, -0.55, 0]} args={[0.04, 0.18, 0.04]} radius={0.02}>
          <primitive object={whitePlasticMaterial} attach="material" />
        </RoundedBox>
      </group>

      {/* Legs */}
      <group position={[-0.15, 0.3, 0]} ref={leftLegRef}>
        <RoundedBox args={[0.17, 0.4, 0.17]} radius={0.08}>
          <primitive object={whitePlasticMaterial} attach="material" />
        </RoundedBox>
        <RoundedBox position={[0, -0.2, 0.09]} args={[0.19, 0.14, 0.28]} radius={0.05}>
          <primitive object={blackGlassMaterial} attach="material" />
        </RoundedBox>
      </group>

      <group position={[0.15, 0.3, 0]} ref={rightLegRef}>
        <RoundedBox args={[0.17, 0.4, 0.17]} radius={0.08}>
          <primitive object={whitePlasticMaterial} attach="material" />
        </RoundedBox>
        <RoundedBox position={[0, -0.2, 0.09]} args={[0.19, 0.14, 0.28]} radius={0.05}>
          <primitive object={blackGlassMaterial} attach="material" />
        </RoundedBox>
      </group>

      {/* Glowing particles around robot */}
      {hovered && (
        <Sparkles
          count={20}
          scale={2}
          size={4}
          speed={0.3}
          opacity={0.8}
          color="#00ccff"
          position={[0, 0, 0]}
        />
      )}
    </group>
  );
};

// --- Enhanced Main Page Component ---
const NotFound = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [robotMessage, setRobotMessage] = useState("Hi there! 👋");
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleHomeClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  };

  const messages = [
    "Lost your way? 🗺️",
    "Let's go home together! 🏡",
    "404? That's cute! 😊",
    "Follow me! 🚶‍♂️",
    "I'll guide you back! ⭐"
  ];

  const changeMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setRobotMessage(messages[randomIndex]);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden font-sans select-none">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Canvas Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas 
          shadows 
          gl={{ antialias: true, alpha: true }}
          camera={{ fov: 60, position: [-2, 1.5, 5] }}
        >
          <ResponsiveCamera />
          
          <color attach="background" args={['#f8fafc']} />
          <fog attach="fog" args={['#f8fafc', 5, 15]} />
          
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.6} color="#ffffff" />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={1.5} 
            castShadow 
            shadow-mapSize={2048}
            shadow-camera-far={50}
            shadow-normalBias={0.05}
          />
          <pointLight position={[-5, 5, -5]} intensity={1} color="#a5b4fc" />
          <pointLight position={[0, -5, 5]} intensity={0.5} color="#f0abfc" />
          <pointLight position={[0, 5, 0]} intensity={0.3} color="#ffffff" />

          {/* Scene Objects */}
          <Robot position={[0, -1, 0]} rotation={[0, 0.5, 0]} />
          
          {/* Floating UI Elements */}
          <FloatingHearts />
          
          {/* Sparkles */}
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sparkles 
              count={isMobile ? 30 : 60} 
              scale={8} 
              size={isMobile ? 3 : 6} 
              speed={0.3} 
              opacity={0.4} 
              color="#38bdf8" 
            />
          </Float>

          {/* Floating 404 Text */}
          {!isMobile && (
            <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
              <Text
                position={[4, 2, -5]}
                fontSize={1}
                color="#94a3b8"
                anchorX="center"
                anchorY="middle"
              >
                404
              </Text>
            </Float>
          )}

          {/* Floor */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial 
              color="#ffffff" 
              roughness={0.3} 
              metalness={0.1}
            />
          </mesh>

          {/* Shadows */}
          <ContactShadows 
            resolution={1024} 
            scale={20} 
            blur={3} 
            opacity={0.25} 
            far={10} 
            color="#475569"
          />

          {/* Post Processing */}
          <EffectComposer disableNormalPass>
            <Bloom 
              luminanceThreshold={0.9}
              luminanceSmoothing={0.9}
              intensity={0.5}
              radius={0.4}
            />
            <Vignette eskil={false} offset={0.1} darkness={0.3} />
            <Noise 
              premultiply 
              blendFunction={BlendFunction.OVERLAY} 
              opacity={0.05}
            />
          </EffectComposer>

          {/* Controls */}
          <OrbitControls 
            enableZoom={!isMobile}
            enablePan={!isMobile}
            enableRotate={!isMobile}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            autoRotate={!isMobile}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between items-center p-6 md:p-12 pointer-events-none">
        
        {/* Top Bar */}
        <div className="w-full flex justify-between items-start">
          <div className="pointer-events-auto">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              OOPS!
            </div>
            <div className="text-sm md:text-base text-slate-500 mt-2 font-medium">
              Page not found • Error 404
            </div>
          </div>
          
          {/* Robot Message Bubble */}
          <div className="pointer-events-auto relative">
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-blue-100 max-w-xs"
              onClick={changeMessage}
            >
              <div className="text-slate-700 font-medium text-sm md:text-base">
                {robotMessage}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Tap to change message
              </div>
            </div>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white/90 transform rotate-45 border-b border-r border-blue-100" />
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="text-center mb-12">
            <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 mb-4 tracking-tighter leading-none">
              404
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-600 mb-6">
              You've wandered into the void!
            </h2>
            <p className="text-slate-500 text-lg mb-8 max-w-lg leading-relaxed">
              Don't worry, our cute robot friend is here to help you find your way back home.
            </p>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="pointer-events-auto text-sm text-slate-400">
            <span className="hidden md:inline">✨ </span>
            Interact with the robot! Click/tap to see hearts 💕
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <button
              onClick={() => window.history.back()}
              className="group relative px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-blue-600 font-bold text-base rounded-xl shadow-lg transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Go Back
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </span>
            </button>
            
            <button
              onClick={handleHomeClick}
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-base rounded-xl shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                Take Me Home
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Instructions */}
      {isMobile && (
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 pointer-events-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-blue-100">
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <span className="animate-pulse">👆</span>
              Tap robot to interact!
            </div>
          </div>
        </div>
      )}

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                backgroundColor: ['#38bdf8', '#818cf8', '#f472b6', '#fbbf24'][Math.floor(Math.random() * 4)],
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti linear forwards;
        }
      `}</style>
    </div>
  );
};

export default NotFound;