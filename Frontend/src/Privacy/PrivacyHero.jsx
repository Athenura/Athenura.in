import React, { useState, useEffect } from "react";

const PrivacyHero = () => {
    const [isVisible, setIsVisible] = useState(false);

    const theme = {
        primary: "#1E90A8",
        primaryLight: "#E8F8FA",
        primaryDark: "#156A7A",
        textDark: "#111827",
        textGray: "#4B5563",
        bg: "#F8FBFC",
        white: "#FFFFFF",
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: theme.bg }}
        >
            {/* --- Background Decor --- */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div
                    className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full opacity-10 blur-[100px] animate-pulse"
                    style={{ backgroundColor: theme.primary }}
                ></div>

                <div
                    className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-5 blur-[80px]"
                    style={{ backgroundColor: theme.textDark }}
                ></div>

                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(${theme.textDark} 1px, transparent 1px), linear-gradient(90deg, ${theme.textDark} 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                ></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
                {/* Headline */}
                <h1
                    className={`text-2xl md:text-6xl mt-5 font-extrabold mb-8 tracking-tight leading-tight max-w-4xl transition-all duration-1000 delay-100 transform ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                    }`}
                    style={{ color: theme.textDark }}
                >
                    Your Privacy,
                    <br />
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
                        }}
                    >
                        Our Responsibility
                    </span>
                </h1>

                {/* Subheadline */}
                <p
                    className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-12 transition-all duration-1000 delay-200 transform ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                    }`}
                    style={{ color: theme.textGray }}
                >
                    At Athenura, we respect your trust. This Privacy Policy explains
                    how we collect, use, protect, and manage your personal information
                    with transparency and integrity.
                </p>
            </div>
        </section>
    );
};

export default PrivacyHero;
