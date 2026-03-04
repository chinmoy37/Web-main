import { Activity, Cloud, Smartphone, Shield, Database, Globe } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Web Development",
    desc: "Custom websites and apps using React, Next.js, and Node.js — built for speed and scalability.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Scalable cloud architecture on AWS, Azure, and GCP — optimized for performance, security, and cost.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Protect your data with enterprise-grade security solutions, compliance audits, and threat detection.",
  },
  {
    icon: Database,
    title: "AI & Data Analytics",
    desc: "AI models tailored to your business goals, machine learning pipelines, and predictive analytics.",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    desc: "Modernize legacy systems and digitalize workflows to stay competitive in an evolving marketplace.",
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-white/5 bg-transparent mt-12">
      <div className="text-center mb-16">
        <p className="text-[#00EAFF] text-xs font-semibold tracking-[0.2em] uppercase mb-4">WHAT WE DO</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Services That <span className="text-[#00EAFF]">Drive Results</span>
        </h2>
        <p className="text-gray-200 font-light max-w-2xl mx-auto leading-relaxed text-sm">
          We deliver end-to-end technology solutions that empower businesses to innovate, scale, and lead their industries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-[#0A121D] border border-white/10 rounded-xl p-8 hover:border-[#00EAFF]/30 transition-all duration-300 group flex flex-col items-start"
          >
            <div className="w-12 h-12 rounded-lg bg-[#00EAFF]/10 flex items-center justify-center mb-8 group-hover:bg-[#00EAFF]/20 transition-colors">
              <s.icon className="h-6 w-6 text-[#00EAFF]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#00EAFF] transition-colors leading-tight">
              {s.title}
            </h3>
            <p className="text-sm text-white font-light leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
