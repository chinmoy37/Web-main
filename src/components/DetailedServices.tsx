import { Cloud, Code, Shield, Cpu, Database, Globe, ChevronRight } from "lucide-react";

const mainServices = [
    {
        icon: Code,
        title: "Web & Mobile Development",
        desc: "Build responsive, scalable applications with React, Next.js, and Node.js. We focus on performance and seamless user experiences.",
        features: ["React & Next.js Expert", "Node.js Backend", "Mobile-first Design", "40% faster checkout (Example)"],
    },
    {
        icon: Cpu,
        title: "AI & Machine Learning",
        desc: "Predictive analytics, recommendation engines, and process automation tailored to your unique business workflows.",
        features: ["Custom ML Models", "Process Automation", "NLP & Chatbots", "37% loss reduction (Example)"],
        reverse: true,
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        desc: "Protect your organization from data breaches and cyber attacks with our multi-layer security protocols.",
        features: ["SOC 2 Compliance", "Zero-trust Architecture", "Penetration Testing", "Multi-layer security (Example)"],
    },
    {
        icon: Cloud,
        title: "Cloud & DevOps",
        desc: "Migrate, scale, and maintain high-performance cloud infrastructure on AWS, Azure, and GCP.",
        features: ["Multi-cloud Strategy", "CI/CD Pipelines", "Cost Optimization", "25% cost reduction (Example)"],
        reverse: true,
    },
    {
        icon: Database,
        title: "Data Engineering & Analytics",
        desc: "Collect, process, and visualize data for better decision-making through real-time KPI monitoring.",
        features: ["ETL Pipelines", "Real-time Dashboards", "Integrations", "KPI Monitoring (Example)"],
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
        title: "QA & Testing",
        desc: "Rigorous automated and manual testing to ensure performance, security, and bug-free delivery.",
    },
    {
        number: "05",
        title: "Deployment & Maintenance",
        desc: "Zero-downtime production launch followed by 24/7 monitoring and iterative improvements.",
    },
];

const pricingPlans = [
    {
        name: "Custom MVP",
        price: "Custom",
        desc: "Perfect for startups looking to validate their core value proposition quickly.",
        features: ["Feature prioritization", "UI/UX Prototype", "Core Logic Implementation", "Cloud Setup"],
    },
    {
        name: "Enterprise Solution",
        price: "Custom",
        desc: "Scalable systems built for high-performance and complex business requirements.",
        features: ["Scalable Architecture", "Advanced AI/ML Integration", "SOC 2 Compliance", "Dedicated Support"],
    }
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
            {/* Header */}
            <section className="w-full max-w-6xl mx-auto px-6 pt-32 pb-12 text-center">
                <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-4">OUR SERVICES</p>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                    Our Services – <br />
                    <span className="text-[#00EAFF]">Tailored Solutions</span> for Every Business Challenge
                </h1>
                <p className="text-gray-200 font-light max-w-2xl mx-auto leading-relaxed text-lg">
                    We deliver specialized technology solutions that empower businesses to innovate, scale, and lead their industries.
                </p>
            </section>

            {/* Featured Services */}
            <section id="services-list" className="w-full max-w-6xl mx-auto px-6 py-24 space-y-12">
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
                        How We <span className="text-[#00EAFF]">Deliver success</span>
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {processSteps.map((step) => (
                        <div key={step.number} className="bg-[#0A121D] border border-white/10 rounded-xl p-8 hover:border-[#00EAFF]/30 transition-all duration-300 group">
                            <span className="text-3xl font-bold text-white/20 group-hover:text-[#00EAFF]/40 transition-colors mb-6 block font-mono">
                                {step.number}
                            </span>
                            <h3 className="text-lg font-bold text-white mb-3 leading-tight">{step.title}</h3>
                            <p className="text-[xs] sm:text-sm text-gray-200 font-light leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
                <div className="text-center mb-16">
                    <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-3">PLANNING</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Project <span className="text-[#00EAFF]">Investment</span>
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {pricingPlans.map((plan) => (
                        <div key={plan.name} className="bg-[#0A121D] border border-white/10 rounded-xl p-10 hover:border-[#00EAFF]/30 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-sm text-gray-400 mb-6 font-light">{plan.desc}</p>
                            <div className="flex items-baseline gap-2 mb-8 border-b border-white/5 pb-8">
                                <span className="text-xs text-gray-400 uppercase font-bold tracking-widest">Starting at</span>
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                            </div>
                            <ul className="space-y-4">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-200 font-light">
                                        <ChevronRight className="h-4 w-4 text-[#00EAFF]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
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
