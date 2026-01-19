import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    AlertCircle,
    Search,
    Wrench,
    CheckCircle2,
    Terminal,
    FileText,
    ShieldAlert,
    Zap,
    ArrowDown,
    Activity,
    Radar,
    Network,
    ShieldCheck,
    GitMerge,
    Repeat,
    FileBarChart,
    GitPullRequest,
    Database,
    Plug,
    DollarSign
} from "lucide-react";

// The scenarios that the animation will cycle through
const scenarios = [
    {
        id: "ddos",
        alert: "DDoS Traffic Spike",
        action: "Auto Rate-Limiting & Geo-Fencing",
        fix: "Attack Neutralized",
        impact: "Zero Downtime",
        color: "rose",
        icon: <ShieldAlert size={20} />
    },
    {
        id: "latency",
        alert: "API Latency Degradation",
        action: "Intelligent Load Redistribution",
        fix: "Response Time Normalized",
        impact: "SLA Maintained",
        color: "amber",
        icon: <Zap size={20} />
    },
    {
        id: "memory",
        alert: "Memory Leak Detected",
        action: "Rolling Service Restart",
        fix: "Heap Usage Stabilized",
        impact: "No User Impact",
        color: "orange",
        icon: <Activity size={20} />
    },
    {
        id: "auth",
        alert: "Unauthorized Access Attempt",
        action: "Credential Rotation & Session Kill",
        fix: "Threat Contained",
        impact: "Data Secured",
        color: "red",
        icon: <Lock size={20} />
    },
    {
        id: "deploy",
        alert: "Deployment Regression",
        action: "Automated Canary Rollback",
        fix: "Stable Version Restored",
        impact: "Users Unaffected",
        color: "violet",
        icon: <GitPullRequest size={20} />
    },
    {
        id: "database",
        alert: "Database Query Bottleneck",
        action: "Index Optimization & Read Replica Scaling",
        fix: "Query Time Reduced",
        impact: "Performance Boosted",
        color: "blue",
        icon: <Database size={20} />
    },
    {
        id: "integration",
        alert: "Third-Party API Failure",
        action: "Failover to Backup Provider",
        fix: "Service Continuity Restored",
        impact: "Graceful Degradation",
        color: "teal",
        icon: <Plug size={20} />
    },
    {
        id: "cost",
        alert: "Cloud Cost Anomaly",
        action: "Resource Auto-Shutdown",
        fix: "Budget Rebalanced",
        impact: "Cost Optimized",
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

    // Cycle through the 4 steps every 1.5 seconds, then switch scenario
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => {
                if (prev === 6) {
                    setScenarioIndex(i => (i + 1) % scenarios.length);
                    return 0;
                }
                return prev + 1;
            });
        }, 1000); // 2 seconds per step

        return () => clearInterval(interval);
    }, []);

    const currentScenario = scenarios[scenarioIndex];

    // Dynamic color mapping based on current scenario
    const getColor = () => {
        const colors = {
            rose: "text-rose-500 bg-rose-50 border-rose-200",
            amber: "text-amber-500 bg-amber-50 border-amber-200",
            teal: "text-teal-500 bg-teal-50 border-teal-200"
        };
        return colors[currentScenario.color];
    }

    return (
        <section className="bg-white py-24 relative overflow-hidden font-sans">
            <div className="container mx-auto px-6 relative z-10">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* ================= LEFT: The Visual Workflow Engine ================= */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">

                            {/* The Vertical Connector Line */}
                            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-100">
                                {/* The Moving Beam */}
                                <motion.div
                                    className={`absolute w-full top-0 bg-gradient-to-b from-transparent ${currentScenario.color === 'rose' ? 'via-rose-500' : currentScenario.color === 'amber' ? 'via-amber-500' : 'via-teal-500'} to-transparent`}
                                    animate={{
                                        height: ["0%", "25%", "25%", "0%"],
                                        top: [`${activeStep * 25}%`, `${activeStep * 25}%`, `${(activeStep * 25) + 25}%`, `${(activeStep * 25) + 50}%`]
                                    }}
                                    transition={{ duration: 2, ease: "linear" }}
                                    style={{ height: "25%" }}
                                />
                            </div>

                            <div className="space-y-8 relative">
                                {steps.map((step, index) => {
                                    const isActive = index === activeStep;
                                    const isPast = index < activeStep;

                                    return (
                                        <div key={step.id} className="relative flex items-center gap-6">
                                            {/* Icon Node */}
                                            <motion.div
                                                className={`relative z-10 w-16 h-16 rounded-2xl border-2 flex items-center justify-center transition-all duration-300
                                        ${isActive
                                                        ? `${getColor()} scale-110 shadow-lg`
                                                        : isPast
                                                            ? "bg-slate-50 border-slate-200 text-slate-300"
                                                            : "bg-white border-slate-100 text-slate-200"
                                                    }
                                    `}
                                            >
                                                {isActive ? currentScenario.icon : step.icon}

                                                {/* Pulse effect when active */}
                                                {isActive && (
                                                    <span className={`absolute inset-0 rounded-2xl animate-ping opacity-20 ${currentScenario.color === 'rose' ? 'bg-rose-500' : currentScenario.color === 'amber' ? 'bg-amber-500' : 'bg-teal-500'}`} />
                                                )}
                                            </motion.div>

                                            {/* Live Terminal Card (Only visible for active step) */}
                                            <div className="flex-1 h-20 relative">
                                                <AnimatePresence mode="wait">
                                                    {isActive ? (
                                                        <motion.div
                                                            key="active"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: 10 }}
                                                            className={`absolute inset-0 rounded-xl border flex flex-col justify-center px-5 shadow-sm ${getColor()}`}
                                                        >
                                                            <div className="flex items-center justify-between mb-1">
                                                                <span className="text-xs font-bold uppercase tracking-wider">{step.title}</span>
                                                                <Terminal size={12} className="opacity-50" />
                                                            </div>
                                                            <div className="font-mono text-sm font-medium">
                                                                {index === 0 && `> ALERT: ${currentScenario.alert}`}
                                                                {index === 1 && `> TIMESTAMP: ${new Date().toISOString()}`}
                                                                {index === 2 && `> ANALYZING_LOGS...`}
                                                                {index === 3 && `> CORRELATING_EVENTS...`}
                                                                {index === 4 && `> IMPACT_ANALYSIS: IN_PROGRESS`}
                                                                {index === 5 && `> EXEC: ${currentScenario.action}`}
                                                                {index === 6 && `> VERIFYING_FIX...`}
                                                                {index === 7 && `> HEALTH_CHECK: PASSED`}
                                                                {index === 8 && `> STATUS: ${currentScenario.fix}`}
                                                                {index === 9 && `> INCIDENT_CLOSED ✔`}
                                                            </div>

                                                        </motion.div>
                                                    ) : (
                                                        /* Placeholder Ghost Card */
                                                        <motion.div
                                                            key="inactive"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            className="absolute inset-0 flex flex-col justify-center px-5"
                                                        >
                                                            <div className="h-2 w-20 bg-slate-100 rounded mb-2" />
                                                            <div className="h-2 w-32 bg-slate-50 rounded" />
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

                            {/* Steps Description List */}
                            <div className="space-y-6 border-l-2 border-slate-100 pl-6">
                                {steps.map((step, i) => (
                                    <div key={i} className={`transition-opacity duration-500 ${activeStep === i ? "opacity-100" : "opacity-40"}`}>
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