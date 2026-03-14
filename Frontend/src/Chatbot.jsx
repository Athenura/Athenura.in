import React, { useState, useRef, useEffect } from 'react';

/**
 * Athenura Floating Chat – React + Tailwind version
 * Original design preserved, extra micro‑animations added.
 * Uses the same backend API: https://athenura-chatbot.onrender.com/chat/
 */
const AthenuraChat = () => {
    // ------------------ State ------------------
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: 'Hello 👋 Welcome to Athenura.', type: 'bot' },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [currentRole, setCurrentRole] = useState('visitor'); // 'visitor' | 'intern'
    const [showTyping, setShowTyping] = useState(false);

    // ------------------ Refs ------------------
    const chatBoxRef = useRef(null);
    const inputRef = useRef(null);
    const typingTimeoutRef = useRef(null);

    // ------------------ Auto-scroll ------------------
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages, showTyping]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Clean up typing timeout
    useEffect(() => {
        return () => {
            if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        };
    }, []);

    // ------------------ Handlers ------------------
    const toggleChat = () => setIsOpen(prev => !prev);
    const closeChat = () => setIsOpen(false);

    const addMessage = (text, type) => {
        setMessages(prev => [...prev, { text, type }]);
    };

    const showTypingIndicator = () => setShowTyping(true);
    const hideTypingIndicator = () => setShowTyping(false);

    const sendMessage = async () => {
        const trimmed = inputValue.trim();
        if (!trimmed) return;

        // Add user message
        addMessage(trimmed, 'user');
        setInputValue('');
        showTypingIndicator();

        try {
            const response = await fetch(
                "https://athenura-chatbot.onrender.com/chat/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message: trimmed,
                        role: currentRole,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("API Error: " + response.status);
            }

            const data = await response.json();

            hideTypingIndicator();
            addMessage(data.response, "bot");

        } catch (error) {
            console.error("Chatbot Error:", error);
            hideTypingIndicator();
            addMessage("Server connection error. Please try again.", "bot");
        }
    };

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    // ------------------ Render ------------------
    return (
        <>
            {/* Custom keyframe animations (added to Tailwind) */}
            <style>{`
        @keyframes gentle-pulse {
          0% { box-shadow: 0 8px 20px rgba(40, 127, 138, 0.4); }
          50% { box-shadow: 0 8px 30px rgba(32, 169, 187, 0.8); }
          100% { box-shadow: 0 8px 20px rgba(60, 179, 195, 0.4); }
        }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          40% { transform: rotate(14deg); }
          50% { transform: rotate(-4deg); }
          60% { transform: rotate(10deg); }
          70% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes message-pop {
          0% { opacity: 0; transform: translateY(15px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.6; }
          30% { transform: translateY(-10px); opacity: 1; }
        }
        .animate-gentle-pulse {
          animation: gentle-pulse 2s infinite ease-in-out;
        }
        .wave {
          display: inline-block;
          animation: wave-animation 1.8s infinite;
          transform-origin: 70% 70%;
        }
        .wave {
          animation: wave 1.8s infinite;
        }
        .animate-message-pop {
          animation: message-pop 0.3s cubic-bezier(0.2, 0.9, 0.3, 1.2);
        }
        .typing-dot {
          animation: typing 1.4s infinite ease-in-out both;
        }
      `}</style>

            {/* Floating toggle button */}
            <button
                onClick={toggleChat}
                className={`fixed bottom-6 right-6 w-[55px] h-[55px] bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg border-2 border-white/60 z-50 transition-transform duration-300 hover:scale-110 hover:rotate-3 hover:shadow-xl ${!isOpen ? 'animate-gentle-pulse' : ''
                    }`}
                aria-label="Toggle chat"
            >
                <img
                    src="/Chatlogo.png"
                    alt="Athenura"
                    className="w-22 h-22 object-contain"
                />
            </button>

            {/* Chat widget panel */}
            <div
                className={`fixed bottom-[100px] mb-[-20px] right-6 w-[400px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-140px)] bg-[#f5f7fb] rounded-[10px] shadow-2xl flex flex-col overflow-hidden z-50 border border-white/40 backdrop-blur-sm transition-all duration-500 origin-bottom-right ${isOpen
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                    : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
                    }`}
            >
                {/* Header with logo and status */}
                <div className="bg-gradient-to-r from-[#1f5f68] via-[#287F8A] to-[#32a0b0] text-white px-5 py-4 flex items-center gap-3 flex-shrink-0 border-b border-white/20">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtToRP4Ina7eL0EmsXagePDsoUZCkqrFbyQ&s"
                            alt="Athenura"
                            className="h-[38px] w-[38px] rounded-[60%]"
                        />
                        <span className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-white to-[#e0f0f0] bg-clip-text text-transparent">
                            Athenura
                        </span>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                        </span>
                        Start
                    </div>
                    <button
                        onClick={closeChat}
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl font-light hover:bg-white/40 hover:rotate-90 transition-all"
                    >
                        ✕
                    </button>
                </div>

                {/* Messages area */}
                <div
                    ref={chatBoxRef}
                    className="flex-1 overflow-y-auto p-6 pt-4 flex flex-col space-y-3 scrollbar-thin scrollbar-thumb-[#b0c7cc]"
                >
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm break-words animate-message-pop ${msg.type === 'bot'
                                ? 'self-start bg-white rounded-bl-none text-[#1e1e2f] border border-black/5'
                                : 'self-end bg-[#287F8A] text-white rounded-br-none'
                                }`}
                        >
                            {msg.type === 'bot' && msg.text.includes('👋') ? (
                                <span>
                                    Hello <span className="wave">👋</span> Welcome to Athenura Internship.
                                </span>
                            ) : (
                                msg.text
                            )}
                        </div>
                    ))}
                    {showTyping && (
                        <div className="self-start bg-white px-5 py-4 rounded-3xl rounded-bl-none shadow-sm flex gap-1.5">
                            <span className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full typing-dot" style={{ animationDelay: '0.2s' }}></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full typing-dot" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                    )}
                </div>

                {/* Footer with role selector and input */}
                <div className="bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-3 flex-shrink-0">
                    {/* Role segmented control */}
                    <div className="flex bg-[#f0f4f8] rounded-full p-1 border border-[#d0d9e2]">
                        <button
                            onClick={() => setCurrentRole('visitor')}
                            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-sm font-medium transition-all ${currentRole === 'visitor'
                                ? 'bg-white text-[#287F8A] shadow-sm'
                                : 'text-gray-600 hover:bg-white/50'
                                }`}
                        >
                            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 fill-none">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            Guest
                        </button>
                        <button
                            onClick={() => setCurrentRole('intern')}
                            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-sm font-medium transition-all ${currentRole === 'intern'
                                ? 'bg-white text-[#287F8A] shadow-sm'
                                : 'text-gray-600 hover:bg-white/50'
                                }`}
                        >
                            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" className="w-4 h-4">
                                <path d="M2 9l10-4 10 4-10 4-10-4z" />
                                <path d="M6 11v3c0 1.5 3 3 6 3s6-1.5 6-3v-3" />
                                <circle cx="12" cy="18.5" r="1.5" />
                            </svg>
                            Intern
                        </button>
                    </div>

                    {/* Input bar */}
                    <div className="flex items-center bg-[#f0f4f8] rounded-full border border-[#d0d9e2] focus-within:border-[#287F8A] focus-within:ring-2 focus-within:ring-[#287F8A]/20 focus-within:bg-white transition-all">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your message..."
                            className="flex-1 bg-transparent border-none px-5 py-3 text-sm outline-none min-w-0"
                        />
                        <button
                            onClick={sendMessage}
                            className="w-12 h-12 bg-[#287F8A] rounded-full flex items-center justify-center mr-1 shadow-md hover:bg-[#32a0b0] hover:scale-105 hover:shadow-lg active:scale-95 transition-all"
                            aria-label="Send message"
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white stroke-2 fill-none">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AthenuraChat;