import { Target, Users, Zap, Shield } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Proven Results",
    desc: "Over 50 projects delivered across various industries with measurable impact.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Engineers and designers with global experience and deep technical expertise.",
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    desc: "Agile methodology ensures quick turnaround without compromising quality.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Security-first approach protecting your data and business from day one.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-white/5 bg-transparent">
      <div className="text-center mb-16">
        <p className="text-[#00EAFF] text-xs font-semibold tracking-[0.2em] uppercase mb-4">WHY CHOOSE US</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          The RadianCore <span className="text-[#00EAFF]">Advantage</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="bg-[#0A121D] border border-white/10 rounded-xl p-8 hover:border-[#00EAFF]/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-[#00EAFF]/10 flex items-center justify-center mb-6 group-hover:bg-[#00EAFF]/20 transition-colors">
              <r.icon className="h-6 w-6 text-[#00EAFF]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00EAFF] transition-colors">
              {r.title}
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              {r.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
