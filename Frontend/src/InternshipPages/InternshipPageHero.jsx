import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, BookOpen, Users, Code, 
  PenTool, Database, CheckCircle, XCircle, Trophy, Sparkles,
  Smartphone, Cloud, Shield, Cpu, Terminal, BarChart, 
  Gamepad, Globe, Layers, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- EXPANDED QUIZ DATASET (SAME DATA) ---
const quizData = {
  frontend: {
    label: "Frontend Dev",
    icon: Code,
    questions: [
      { q: "Which hook handles side effects in React?", options: ["useState", "useEffect", "useContext", "useReducer"], correct: 1 },
      { q: "What does CSS 'Flexbox' help with?", options: ["Database", "1D Layouts", "3D Rendering", "Server Logic"], correct: 1 },
      { q: "Largest HTML heading tag?", options: ["<h6>", "<heading>", "<h1>", "<head>"], correct: 2 },
      { q: "What is the Virtual DOM?", options: ["A VR game", "Direct HTML copy", "In-memory DOM representation", "Browser plugin"], correct: 2 },
      { q: "Pass data parent to child in React?", options: ["Props", "State", "Listeners", "Emitters"], correct: 0 }
    ]
  },
  backend: {
    label: "Backend Dev",
    icon: Database,
    questions: [
      { q: "HTTP method to retrieve data?", options: ["POST", "GET", "PUT", "DELETE"], correct: 1 },
      { q: "What does SQL stand for?", options: ["Structured Query Language", "Simple Question List", "Strong Query Logic", "Server Queue"], correct: 0 },
      { q: "Which is a NoSQL database?", options: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"], correct: 2 },
      { q: "What is a REST API?", options: ["A sleeping app", "Representational State Transfer", "Real State Transaction", "React Tool"], correct: 1 },
      { q: "Function of 'middleware'?", options: ["Hardware", "Request processing bridge", "Backup", "Styling"], correct: 1 }
    ]
  },
  design: {
    label: "UI/UX Design",
    icon: PenTool,
    questions: [
      { q: "What does 'UI' stand for?", options: ["User Interface", "User Interaction", "Unified Image", "Unique Idea"], correct: 0 },
      { q: "Standard tool for interface design?", options: ["Photoshop", "Figma", "Blender", "Paint"], correct: 1 },
      { q: "What is 'White Space'?", options: ["Breathing room around elements", "The color white", "Coding error", "Loading screen"], correct: 0 },
      { q: "Color evoking 'trust'?", options: ["Red", "Blue", "Yellow", "Orange"], correct: 1 },
      { q: "What is a 'Wireframe'?", options: ["Wire sculpture", "Low-fidelity blueprint", "High-def design", "Code framework"], correct: 1 }
    ]
  },
  mobile: {
    label: "Mobile Dev",
    icon: Smartphone,
    questions: [
      { q: "Language used for iOS dev?", options: ["Java", "Swift", "Kotlin", "Python"], correct: 1 },
      { q: "What is React Native?", options: ["A database", "Web framework", "Cross-platform mobile framework", "Design tool"], correct: 2 },
      { q: "Android uses which OS kernel?", options: ["Windows", "Linux", "Unix", "Mac"], correct: 1 },
      { q: "What is an APK?", options: ["Apple Package", "Android Package Kit", "App Primary Key", "Active Page Kernel"], correct: 1 },
      { q: "Tool to debug iOS apps?", options: ["Xcode", "Android Studio", "VS Code", "Notepad"], correct: 0 }
    ]
  },
  datascience: {
    label: "Data Science",
    icon: BarChart,
    questions: [
      { q: "Popular language for Data Science?", options: ["C++", "Python", "Java", "PHP"], correct: 1 },
      { q: "Library for data manipulation?", options: ["Pandas", "React", "Express", "Unity"], correct: 0 },
      { q: "What is 'Data Cleaning'?", options: ["Deleting files", "Fixing corrupt/inaccurate records", "Formatting hard drive", "Buying data"], correct: 1 },
      { q: "What is a 'CSV'?", options: ["Computer System Video", "Comma Separated Values", "Core Server Variable", "Code Syntax Value"], correct: 1 },
      { q: "Visualizing data is called?", options: ["Data Plotting", "Data Visualization", "Data Seeing", "Data View"], correct: 1 }
    ]
  },
  ai: {
    label: "AI & ML",
    icon: Cpu,
    questions: [
      { q: "What is 'NLP'?", options: ["New Learning Protocol", "Natural Language Processing", "Neural Link Path", "No Logic Programming"], correct: 1 },
      { q: "Type of learning with labeled data?", options: ["Unsupervised", "Supervised", "Reinforcement", "Deep"], correct: 1 },
      { q: "Basic unit of a Neural Network?", options: ["Neuron/Node", "Atom", "Pixel", "Bit"], correct: 0 },
      { q: "Test to check machine intelligence?", options: ["Speed Test", "Turing Test", "IQ Test", "Stress Test"], correct: 1 },
      { q: "Framework for Deep Learning?", options: ["jQuery", "TensorFlow", "Bootstrap", "Laravel"], correct: 1 }
    ]
  },
  devops: {
    label: "DevOps",
    icon: Layers,
    questions: [
      { q: "Tool for containerization?", options: ["Docker", "Word", "Excel", "Chrome"], correct: 0 },
      { q: "What is CI/CD?", options: ["Code In/Code Done", "Continuous Integration/Deployment", "Computer Interlace", "Cloud Interface"], correct: 1 },
      { q: "Tool for Infrastructure as Code?", options: ["Terraform", "Photoshop", "Slack", "Zoom"], correct: 0 },
      { q: "Popular container orchestrator?", options: ["Kubernetes", "Jupyter", "Apache", "Nginx"], correct: 0 },
      { q: "What is 'Git'?", options: ["A server", "Version Control System", "Programming Language", "Text Editor"], correct: 1 }
    ]
  },
  cyber: {
    label: "Cyber Security",
    icon: Shield,
    questions: [
      { q: "What is 'Phishing'?", options: ["Fishing game", "Fraudulent attempt to get info", "Network scanning", "Password hashing"], correct: 1 },
      { q: "Protocol for secure web browsing?", options: ["HTTP", "FTP", "HTTPS", "SMTP"], correct: 2 },
      { q: "What is a Firewall?", options: ["Physical wall", "Network security device", "Antivirus software", "Burner phone"], correct: 1 },
      { q: "Attack that floods a server?", options: ["DDoS", "SQL Injection", "XSS", "Brute Force"], correct: 0 },
      { q: "What is 'Encryption'?", options: ["Deleting data", "Encoding data to hide meaning", "Compressing files", "Backing up data"], correct: 1 }
    ]
  },
  cloud: {
    label: "Cloud Computing",
    icon: Cloud,
    questions: [
      { q: "Who provides 'AWS'?", options: ["Apple", "Amazon", "Adobe", "Azure"], correct: 1 },
      { q: "What is 'SaaS'?", options: ["Software as a Service", "System as a Server", "Storage as a System", "Socket as a Service"], correct: 0 },
      { q: "Google's Cloud Platform is?", options: ["GCP", "Azure", "AWS", "DigitalOcean"], correct: 0 },
      { q: "Benefit of Cloud?", options: ["Works offline", "Scalability", "Uses more power", "Slower speed"], correct: 1 },
      { q: "What is a 'Region'?", options: ["Timezone", "Geographical server location", "Language setting", "Coding style"], correct: 1 }
    ]
  },
  blockchain: {
    label: "Blockchain",
    icon: Globe,
    questions: [
      { q: "Primary currency of Ethereum?", options: ["Bitcoin", "Ether", "Doge", "Litecoin"], correct: 1 },
      { q: "What is a 'Smart Contract'?", options: ["Legal paper", "Self-executing code on chain", "Digital signature", "Payment receipt"], correct: 1 },
      { q: "Blocks are linked via?", options: ["Hyperlinks", "Hashes", "Cables", "Wi-Fi"], correct: 1 },
      { q: "Key feature of Blockchain?", options: ["Centralized", "Decentralized", "Editable", "Private only"], correct: 1 },
      { q: "Who created Bitcoin?", options: ["Elon Musk", "Satoshi Nakamoto", "Bill Gates", "Vitalik Buterin"], correct: 1 }
    ]
  },
  gamedev: {
    label: "Game Dev",
    icon: Gamepad,
    questions: [
      { q: "Popular engine for 3D games?", options: ["Unity", "Excel", "PowerPoint", "Paint"], correct: 0 },
      { q: "Language used in Unreal Engine?", options: ["C++", "Python", "Java", "HTML"], correct: 0 },
      { q: "What is a 'Sprite'?", options: ["A drink", "2D bitmap image", "3D model", "Sound effect"], correct: 1 },
      { q: "Physics engine handles?", options: ["Graphics", "Collisions & Gravity", "Sound", "Network"], correct: 1 },
      { q: "What is 'FPS'?", options: ["First Person Shooter", "Frames Per Second", "Both", "None"], correct: 2 }
    ]
  },
  qa: {
    label: "QA & Testing",
    icon: CheckCircle,
    questions: [
      { q: "Tool for browser automation?", options: ["Selenium", "Word", "Outlook", "Skype"], correct: 0 },
      { q: "What is 'Unit Testing'?", options: ["Testing whole app", "Testing individual components", "Testing UI", "Testing database"], correct: 1 },
      { q: "What is a 'Bug'?", options: ["Insect", "Feature", "Error/Flaw in software", "Virus"], correct: 2 },
      { q: "Testing done by users?", options: ["Alpha", "Beta", "Unit", "Integration"], correct: 1 },
      { q: "CI tool usually used?", options: ["Jenkins", "Paint", "Spotify", "VLC"], correct: 0 }
    ]
  },
  product: {
    label: "Product Mgmt",
    icon: Users,
    questions: [
      { q: "What is 'Agile'?", options: ["Yoga pose", "Iterative dev methodology", "Coding language", "Database type"], correct: 1 },
      { q: "What is an 'MVP'?", options: ["Most Valuable Player", "Minimum Viable Product", "Maximum Variable Price", "Main View Page"], correct: 1 },
      { q: "Visual guide of the product?", options: ["Roadmap", "Codebase", "Server log", "Invoice"], correct: 0 },
      { q: "User Story format?", options: ["As a user, I want...", "if(user){...}", "SELECT * FROM users", "None"], correct: 0 },
      { q: "What is a 'KPI'?", options: ["Key Performance Indicator", "Key Product Idea", "Keep People Interested", "Kernel Process ID"], correct: 0 }
    ]
  },
  marketing: {
    label: "Digital Marketing",
    icon: Sparkles,
    questions: [
      { q: "What is 'SEO'?", options: ["Search Engine Optimization", "Site Error Output", "System Entry Order", "Server External Output"], correct: 0 },
      { q: "PPC stands for?", options: ["Pay Per Click", "Personal PC", "Public Post Card", "Page Per Content"], correct: 0 },
      { q: "Platform for B2B marketing?", options: ["TikTok", "LinkedIn", "Snapchat", "Twitch"], correct: 1 },
      { q: "What is 'Content Marketing'?", options: ["Selling content", "Creating value to attract audience", "Buying ads", "Spamming emails"], correct: 1 },
      { q: "Metric for email open rate?", options: ["CTR", "Open Rate", "Bounce Rate", "ROI"], correct: 1 }
    ]
  },
  general: {
    label: "General Tech",
    icon: Terminal,
    questions: [
      { q: "Binary consists of?", options: ["0s and 1s", "1s and 2s", "A-Z", "0-9"], correct: 0 },
      { q: "CPU stands for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Core Process Utility"], correct: 0 },
      { q: "RAM is?", options: ["Permanent storage", "Volatile memory", "A CPU brand", "Internet speed"], correct: 1 },
      { q: "Standard port for HTTP?", options: ["80", "443", "21", "22"], correct: 0 },
      { q: "OS used by Macs?", options: ["Windows", "Linux", "macOS", "Android"], correct: 2 }
    ]
  }
};

const InternshipHeroQuiz = () => {
  const theme = { primary: '#1E7A86', secondary: '#1E90A8' };

  // --- State ---
  const [gameState, setGameState] = useState('category'); // 'category', 'quiz', 'result'
  const [category, setCategory] = useState(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Search/Filter State
  const [searchTerm, setSearchTerm] = useState("");

  const startQuiz = (catKey) => {
    setCategory(catKey);
    setGameState('quiz');
    setCurrentQIndex(0);
    setScore(0);
  };

  const handleAnswer = (optionIndex) => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedOption(optionIndex);

    const currentQuestions = quizData[category].questions;
    const isCorrect = optionIndex === currentQuestions[currentQIndex].correct;

    if (isCorrect) setScore(prev => prev + 1);

    setTimeout(() => {
      if (currentQIndex < 4) {
        setCurrentQIndex(prev => prev + 1);
        setIsAnswered(false);
        setSelectedOption(null);
      } else {
        setGameState('result');
      }
    }, 1000);
  };

  const resetGame = () => {
    setGameState('category');
    setCategory(null);
    setCurrentQIndex(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedOption(null);
    setSearchTerm("");
  };

  // Filter domains based on search
  const filteredDomains = Object.keys(quizData).filter(key => 
    quizData[key].label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const passed = score >= 3;

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans selection:bg-[#1E7A86] selection:text-white">
      
      {/* Background Blobs (No changes needed, auto-scales) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: theme.primary }}
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[30%] -right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: theme.secondary }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between mt-6 md:mt-12 gap-8 lg:gap-16 pb-12">
        
        {/* Left Side: Static Text */}
        <div className="flex-1  lg:text-left z-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 mb-4 md:mb-6">
              Prove Your Skills. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E7A86] to-[#1E90A8]">
                Get The Internship.
              </span>
            </h1>
            <p className="text-sm md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 md:px-0">
              Select your specific tech stack from the list. Pass the 5-question challenge to instantly unlock your application form.
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm">
                <Users className="w-4 h-4" /> <span>500+ Applicants today</span>
             </div>
          </div>
        </div>

        {/* Right Side: QUIZ ENGINE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full max-w-md relative perspective-1000"
        >
          <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden min-h-[500px] md:min-h-[500px] flex flex-col">
            
            {/* Window Header */}
            <div className="bg-gray-50 px-4 md:px-6 py-3 md:py-4 border-b border-gray-100 flex justify-between items-center">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400" />
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-5 md:p-8 flex flex-col justify-center">
              <AnimatePresence mode='wait'>
                
                {/* 1. Category Selection (SCROLLABLE) */}
                {gameState === 'category' && (
                  <motion.div 
                    key="category"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col h-full"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-teal-600 text-center mb-4">Quiz Game</h3>
                    
                    {/* Search Bar */}
                    <div className="relative mb-3 md:mb-4">
                      <Search className="absolute left-3 top-2.5 text-gray-400 w-3.5 h-3.5 md:w-4 md:h-4" />
                      <input 
                        type="text" 
                        placeholder="Search domain..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1E7A86] text-xs md:text-sm"
                      />
                    </div>

                    {/* Scrollable List */}
                    <div className="flex-1 overflow-y-auto pr-2 max-h-[250px] md:max-h-[320px] space-y-2 md:space-y-3 custom-scrollbar">
                      {filteredDomains.map((key) => {
                        const ItemIcon = quizData[key].icon;
                        return (
                          <motion.button
                            key={key}
                            onClick={() => startQuiz(key)}
                            whileHover={{ scale: 1.02, backgroundColor: '#F3F4F6' }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center p-2.5 md:p-3 border border-gray-100 rounded-xl gap-3 hover:border-[#1E7A86] transition-colors group bg-white shadow-sm"
                          >
                            <div className="p-1.5 md:p-2 rounded-lg bg-[#1E7A86]/10 text-[#1E7A86] group-hover:bg-[#1E7A86] group-hover:text-white transition-colors">
                              <ItemIcon size={18} className="md:w-5 md:h-5" />
                            </div>
                            <span className="font-semibold text-gray-700 text-xs md:text-sm text-left flex-1">{quizData[key].label}</span>
                            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-300 group-hover:text-[#1E7A86]" />
                          </motion.button>
                        );
                      })}
                      {filteredDomains.length === 0 && (
                        <p className="text-center text-gray-400 text-xs md:text-sm py-4">No domains found.</p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* 2. The Quiz */}
                {gameState === 'quiz' && (
                  <motion.div 
                    key="quiz"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full"
                  >
                    <div className="flex justify-between items-center mb-4 md:mb-6 text-xs md:text-sm font-medium text-gray-400">
                      <button onClick={() => setGameState('category')} className="hover:text-gray-600">
                        &larr; Back
                      </button>
                      <span className="text-[#1E7A86]">Score: {score}</span>
                    </div>

                    <div className="mb-2">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#1E7A86] bg-[#1E7A86]/10 px-2 py-1 rounded">
                          {quizData[category].label}
                        </span>
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 md:mb-6 leading-snug min-h-[50px] md:min-h-[60px]">
                      {quizData[category].questions[currentQIndex].q}
                    </h3>

                    <div className="space-y-2.5 md:space-y-3">
                      {quizData[category].questions[currentQIndex].options.map((option, idx) => {
                        const isCorrect = idx === quizData[category].questions[currentQIndex].correct;
                        const isSelected = selectedOption === idx;
                        
                        let btnClass = "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
                        if (isAnswered) {
                          if (isSelected && isCorrect) btnClass = "bg-green-100 border-green-500 text-green-800";
                          else if (isSelected && !isCorrect) btnClass = "bg-red-100 border-red-500 text-red-800";
                          else if (!isSelected && isCorrect) btnClass = "bg-green-50 border-green-200 text-green-700 opacity-60"; 
                          else btnClass = "opacity-50 border-gray-100";
                        }

                        return (
                          <motion.button
                            key={idx}
                            onClick={() => handleAnswer(idx)}
                            disabled={isAnswered}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full text-left p-3 md:p-3.5 border-2 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 flex justify-between items-center ${btnClass}`}
                          >
                            <span>{option}</span>
                            {isAnswered && isSelected && (
                              isCorrect ? <CheckCircle size={16} className="text-green-600"/> : <XCircle size={16} className="text-red-600"/>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6 md:mt-8 w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#1E7A86]"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQIndex + 1) / 5) * 100}%` }}
                      />
                    </div>
                  </motion.div>
                )}

                {/* 3. Results Screen */}
                {gameState === 'result' && (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="mb-4 md:mb-6 inline-flex p-3 md:p-4 rounded-full bg-gradient-to-tr from-[#1E7A86] to-[#1E90A8] shadow-lg text-white">
                      {passed ? <Trophy size={32} className="md:w-12 md:h-12" /> : <BookOpen size={32} className="md:w-12 md:h-12" />}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {passed ? "Assessment Passed!" : "Keep Learning!"}
                    </h3>
                    
                    <p className="text-xs md:text-base text-gray-500 mb-6 md:mb-8 px-2">
                      You scored <span className="font-bold text-[#1E7A86]">{score}/5</span> in {quizData[category].label}.
                      {passed 
                        ? " You've unlocked priority access to the application." 
                        : " Don't worry, you can try another domain or retake this one."}
                    </p>

                    {passed ? (
                    <Link to="/apply-internship">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 md:py-4 rounded-xl text-white font-bold text-base md:text-lg shadow-xl mb-4"
                        style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
                        >
                        Apply for {quizData[category].label}
                      </motion.button>
                    </Link>
                    ) : (
                      <motion.button
                        onClick={resetGame}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 md:py-4 rounded-xl text-white font-bold text-base md:text-lg shadow-xl mb-4 bg-gray-800"
                      >
                        Try Again
                      </motion.button>
                    )}

                    {passed && (
                      <button onClick={resetGame} className="text-xs md:text-sm text-gray-400 hover:text-[#1E7A86] flex items-center justify-center gap-1 mx-auto">
                        <Sparkles size={14} /> Try another domain
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default InternshipHeroQuiz;