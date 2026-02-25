import { Cloud, Code, Shield, Cpu, Database, Globe, ChevronRight } from "lucide-react";

const mainServices = [
    {
        icon: Cloud,
        title: "Cloud Architecture & Migration",
        desc: "We design and implement enterprise-grade cloud infrastructure on AWS, Azure, and GCP. Our architects ensure your systems are resilient, cost-optimized, and future-proof.",
        features: ["Multi-cloud strategy", "Auto-scaling infrastructure", "Cost optimization", "24/7 monitoring"],
    },
    {
        icon: Code,
        title: "Custom Software Development",
        desc: "Full-stack applications built with cutting-edge frameworks. From MVPs to enterprise platforms, we deliver pixel-perfect, performant software.",
        features: ["React & Next.js", "Node.js & Python", "Mobile-first design", "CI/CD pipelines"],
        reverse: true,
    },
    {
        icon: Shield,
        title: "Cybersecurity & Compliance",
        desc: "Comprehensive security audits, penetration testing, and zero-trust architecture. We protect your business from evolving threats while ensuring regulatory compliance.",
        features: ["Penetration testing", "SOC 2 compliance", "Zero-trust architecture", "Incident response"],
    },
    {
        icon: Cpu,
        title: "AI & Machine Learning",
        desc: "Transform raw data into intelligent automation. We build custom ML models, NLP systems, and computer vision solutions that drive real business outcomes.",
        features: ["Custom ML models", "NLP & chatbots", "Predictive analytics", "Computer vision"],
        reverse: true,
    },
    {
        icon: Database,
        title: "Data Engineering & Analytics",
        desc: "Real-time data pipelines, warehousing, and visualization. We turn your data chaos into structured, actionable insights that power decision-making.",
        features: ["ETL pipelines", "Data warehousing", "Real-time dashboards", "Business Intelligence"],
    },
    {
        icon: Globe,
        title: "Digital Transformation",
        desc: "End-to-end modernization of legacy systems. We help organizations embrace digital-first strategies and build competitive advantages through technology.",
        features: ["Legacy modernization", "Process automation", "API-first design", "Change management"],
        reverse: true,
    },
];

const processSteps = [
    {
        number: "01",
        title: "Discovery",
        desc: "Deep dive into your business needs, goals, and technical landscape.",
    },
    {
        number: "02",
        title: "Strategy",
        desc: "Architect a tailored roadmap with clear milestones and deliverables.",
    },
    {
        number: "03",
        title: "Build",
        desc: "Agile development with weekly demos and continuous feedback loops.",
    },
    {
        number: "04",
        title: "Launch & Scale",
        desc: "Production deployment with monitoring, optimization, and ongoing support.",
    },
];

const techStack = [
    {
        category: "FRONTEND",
        techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
    },
    {
        category: "BACKEND",
        techs: ["Node.js", "Python", "Go", "Rust", "GraphQL"],
    },
    {
        category: "CLOUD",
        techs: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
    },
    {
        category: "DATA",
        techs: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Spark"],
    },
];

const DetailedServices = () => {
    return (
        <div className="flex flex-col items-center bg-transparent">
            {/* Featured Services */}
            <section id="services" className="w-full max-w-6xl mx-auto px-6 py-24 space-y-12">
                {mainServices.map((service) => (
                    <div
                        key={service.title}
                        className={`flex flex-col md:flex-row items-center gap-12 bg-[#0A121D] border border-white/10 rounded-xl p-8 md:p-12 hover:border-[#00EAFF]/30 transition-all duration-300 ${service.reverse ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Description Path */}
                        <div className="flex-1 space-y-6">
                            <div className="w-12 h-12 rounded-lg bg-[#00EAFF]/10 flex items-center justify-center">
                                <service.icon className="h-6 w-6 text-[#00EAFF]" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                            <p className="text-gray-200 font-light leading-relaxed max-w-lg">
                                {service.desc}
                            </p>
                            <button className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider group bg-white/5 px-4 py-2 rounded-md hover:bg-white/10 transition-colors">
                                Learn More <ChevronRight className="h-4 w-4 text-[#00EAFF] group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Features Path */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.features.map((feature) => (
                                <div
                                    key={feature}
                                    className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-3"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00EAFF]" />
                                    <span className="text-xs font-semibold text-white tracking-wide">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Process Section */}
            <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
                <div className="text-center mb-16">
                    <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-3">OUR PROCESS</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        How We <span className="text-[#00EAFF]">Deliver</span>
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((step) => (
                        <div key={step.number} className="bg-[#0A121D] border border-white/10 rounded-xl p-8 hover:border-[#00EAFF]/30 transition-all duration-300 group">
                            <span className="text-3xl font-bold text-white/20 group-hover:text-[#00EAFF]/40 transition-colors mb-6 block">
                                {step.number}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-sm text-gray-200 font-light leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
                <div className="text-center mb-16">
                    <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-3">TECHNOLOGY</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Our <span className="text-[#00EAFF]">Tech Stack</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techStack.map((category) => (
                        <div key={category.category} className="space-y-6">
                            <h3 className="text-[#00EAFF] text-xs font-bold tracking-widest border-b border-white/10 pb-4">
                                {category.category}
                            </h3>
                            <ul className="space-y-3">
                                {category.techs.map((tech) => (
                                    <li key={tech} className="text-sm text-gray-200 font-light hover:text-white transition-colors cursor-default">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DetailedServices;
