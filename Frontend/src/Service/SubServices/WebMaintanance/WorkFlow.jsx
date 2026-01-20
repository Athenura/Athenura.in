import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity,
    Radar,
    Network,
    ShieldCheck,
    GitMerge,
    Repeat,
    FileBarChart,
    ShieldAlert,
    Zap,
    Lock,
    GitPullRequest,
    Database,
    Plug,
    DollarSign,
    Terminal
} from "lucide-react";

// --- Data Constants ---
const scenarios = [
    {
        id: "ddos",
        alert: "DDoS Traffic Spike",
        action: "Auto Rate-Limiting & Geo-Fencing",
        fix: "Attack Neutralized",
        color: "rose",
        icon: <ShieldAlert size={20} />
    },
    {
        id: "latency",
        alert: "API Latency Degradation",
        action: "Intelligent Load Redistribution",
        fix: "Response Time Normalized",
        color: "amber",
        icon: <Zap size={20} />
    },
    {
        id: "memory",
        alert: "Memory Leak Detected",
        action: "Rolling Service Restart",
        fix: "Heap Usage Stabilized",
        color: "orange",
        icon: <Activity size={20} />
    },
    {
        id: "auth",
        alert: "Unauthorized Access Attempt",
        action: "Credential Rotation & Session Kill",
        fix: "Threat Contained",
        color: "red",
        icon: <Lock size={20} />
    },
    {
        id: "deploy",
        alert: "Deployment Regression",
        action: "Automated Canary Rollback",
        fix: "Stable Version Restored",
        color: "violet",
        icon: <GitPullRequest size={20} />
    },
    {
        id: "database",
        alert: "Database Query Bottleneck",
        action: "Index Optimization & Read Replica Scaling",
        fix: "Query Time Reduced",
        color: "blue",
        icon: <Database size={20} />
    },
    {
        id: "integration",
        alert: "Third-Party API Failure",
        action: "Failover to Backup Provider",
        fix: "Service Continuity Restored",
        color: "teal",
        icon: <Plug size={20} />
    },
    {
        id: "cost",
        alert: "Cloud Cost Anomaly",
        action: "Resource Auto-Shutdown",
        fix: "Budget Rebalanced",
        color: "emerald",
        icon: <DollarSign size={20} />
    }
];

const steps = [
    {
        id: 0,
        title: "Continuous Telemetry",
        description: "AI-driven observability collects metrics, logs, and traces across the entire system in real time.",
        icon: <Activity size={20} />
    },
    {
        id: 1,
        title: "Anomaly Detection",
        description: "Machine learning models detect abnormal traffic, latency spikes, or behavioral deviations.",
        icon: <Radar size={20} />
    },
    {
        id: 2,
        title: "Impact Analysis",
        description: "We assess blast radius, affected services, and business impact before applying any fix.",
        icon: <Network size={20} />
    },
    {
        id: 3,
        title: "Automated Safeguards",
        description: "Predefined policies trigger auto-scaling, rate-limiting, or threat isolation instantly.",
        icon: <ShieldCheck size={20} />
    },
    {
        id: 4,
        title: "Controlled Remediation",
        description: "Fixes are deployed via canary releases or blue-green strategies to avoid disruption.",
        icon: <GitMerge size={20} />
    },
    {
        id: 5,
        title: "Verification & Rollback",
        description: "Post-fix validation ensures stability, with instant rollback if anomalies persist.",
        icon: <Repeat size={20} />
    },
    {
        id: 6,
        title: "Post-Incident Intelligence",
        description: "We generate actionable reports and refine automation rules to prevent recurrence.",
        icon: <FileBarChart size={20} />
    }
];

const MaintenanceWorkflow = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [scenarioIndex, setScenarioIndex] = useState(0);

    // --- Dynamic Calculation Fix ---
    // Instead of hardcoding 25%, we calculate the exact % per step
    const totalSteps = steps.length;
    const stepHeightPct = 100 / totalSteps; 

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => {
                if (prev === totalSteps - 1) {
                    setScenarioIndex(i => (i + 1) % scenarios.length);
                    return 0;
                }
                return prev + 1;
            });
        }, 1200); // Adjusted timing slightly for better readability

        return () => clearInterval(interval);
    }, [totalSteps]);

    const currentScenario = scenarios[scenarioIndex];

    const getColor = () => {
        const colors = {
            rose: "text-rose-500 bg-rose-50 border-rose-200 ring-rose-500",
            amber: "text-amber-500 bg-amber-50 border-amber-200 ring-amber-500",
            teal: "text-teal-500 bg-teal-50 border-teal-200 ring-teal-500",
            orange: "text-orange-500 bg-orange-50 border-orange-200 ring-orange-500",
            red: "text-red-500 bg-red-50 border-red-200 ring-red-500",
            violet: "text-violet-500 bg-violet-50 border-violet-200 ring-violet-500",
            blue: "text-blue-500 bg-blue-50 border-blue-200 ring-blue-500",
            emerald: "text-emerald-500 bg-emerald-50 border-emerald-200 ring-emerald-500",
        };
        // Fallback to teal if color not found
        return colors[currentScenario.color] || colors.teal;
    };

    const getBeamGradient = () => {
        const gradients = {
            rose: "via-rose-500",
            amber: "via-amber-500",
            teal: "via-teal-500",
            orange: "via-orange-500",
            red: "via-red-500",
            violet: "via-violet-500",
            blue: "via-blue-500",
            emerald: "via-emerald-500",
        };
        return gradients[currentScenario.color] || "via-teal-500";
    }

    return (
        <section className="bg-white py-24 relative overflow-hidden font-sans">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* ================= LEFT: The Visual Workflow Engine ================= */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">

                            {/* The Vertical Connector Line */}
                            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-100 overflow-hidden rounded-full">
                                {/* FIXED BEAM: 
                                    - Height is exactly 1 step's worth (100 / totalSteps)
                                    - Top position matches the activeStep index
                                */}
                                <motion.div
                                    className={`absolute w-full bg-gradient-to-b from-transparent ${getBeamGradient()} to-transparent opacity-80`}
                                    animate={{
                                        top: `${activeStep * stepHeightPct}%`,
                                    }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 70, 
                                        damping: 20 
                                    }}
                                    style={{ 
                                        height: `${stepHeightPct}%` 
                                    }}
                                />
                            </div>

                            <div className="space-y-8 relative">
                                {steps.map((step, index) => {
                                    const isActive = index === activeStep;
                                    const isPast = index < activeStep;

                                    return (
                                        <div key={step.id} className="relative flex items-center gap-6 h-16">
                                            {/* Icon Node */}
                                            <motion.div
                                                animate={{ 
                                                    scale: isActive ? 1.1 : 1,
                                                }}
                                                className={`relative z-10 w-16 h-16 rounded-2xl border-2 flex items-center justify-center transition-colors duration-300
                                                    ${isActive
                                                        ? `${getColor()} shadow-lg`
                                                        : isPast
                                                            ? "bg-slate-50 border-slate-200 text-slate-300"
                                                            : "bg-white border-slate-100 text-slate-200"
                                                    }
                                                `}
                                            >
                                                {isActive ? currentScenario.icon : step.icon}

                                                {/* Pulse effect when active */}
                                                {isActive && (
                                                    <span className={`absolute inset-0 rounded-2xl animate-ping opacity-20 bg-current`} />
                                                )}
                                            </motion.div>

                                            {/* Live Terminal Card (Only visible for active step) */}
                                            <div className="flex-1 relative h-full flex items-center">
                                                <AnimatePresence mode="wait">
                                                    {isActive ? (
                                                        <motion.div
                                                            key="active"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: 10 }}
                                                            className={`w-full rounded-xl border flex flex-col justify-center px-5 py-3 shadow-sm bg-white ${getColor()}`}
                                                        >
                                                            <div className="flex items-center justify-between mb-1">
                                                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">{step.title}</span>
                                                                <Terminal size={12} className="opacity-50" />
                                                            </div>
                                                            <div className="font-mono text-xs font-medium truncate">
                                                                <span className="opacity-50 mr-2">{`>`}</span>
                                                                {index === 0 && `ALERT: ${currentScenario.alert}`}
                                                                {index === 1 && `DETECTED: ${currentScenario.id.toUpperCase()}_ANOMALY`}
                                                                {index === 2 && `CALC_IMPACT: HIGH`}
                                                                {index === 3 && `INIT_PROTOCOL: ${currentScenario.action.split(' ')[0]}`}
                                                                {index === 4 && `DEPLOYING_FIX...`}
                                                                {index === 5 && `VERIFY: ${currentScenario.fix}`}
                                                                {index === 6 && `LOG: INCIDENT_RESOLVED`}
                                                            </div>
                                                        </motion.div>
                                                    ) : (
                                                        /* Ghost Card for Layout Stability */
                                                        <motion.div
                                                            key="inactive"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            className="w-full flex flex-col justify-center px-5"
                                                        >
                                                            <div className="h-1.5 w-12 bg-slate-100 rounded mb-2" />
                                                            <div className="h-1.5 w-24 bg-slate-50 rounded" />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* ================= RIGHT: Static Content ================= */}
                    <div className="flex-1 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                                Our Workflow
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                                How we handle <br />
                                <span className="text-teal-600">the unexpected.</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Maintenance isn't just about updating plugins. It's a rigorous workflow of detection, isolation, and resolution. We don't guess; we diagnose.
                            </p>

                            <div className="space-y-6 border-l-2 border-slate-100 pl-6">
                                {steps.map((step, i) => (
                                    <div key={i} className={`transition-all duration-500 ${activeStep === i ? "opacity-100 translate-x-2" : "opacity-40"}`}>
                                        <h4 className={`text-lg font-bold mb-1 ${activeStep === i ? "text-teal-600" : "text-slate-900"}`}>
                                            {i + 1}. {step.title}
                                        </h4>
                                        <p className="text-sm text-slate-500">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MaintenanceWorkflow;