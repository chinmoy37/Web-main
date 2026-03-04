import { Terminal, Heart, Lightbulb, Globe } from "lucide-react";

const values = [
  {
    icon: Terminal,
    title: "Precision Engineering",
    desc: "Every line of code is purposeful. We implemented AI-based automation that reduced client infrastructure costs by 20% through efficient resource allocation.",
  },
  {
    icon: Heart,
    title: "Client Obsession",
    desc: "Your success is our mission. We maintain a 99% client satisfaction rate across 50+ delivered projects by treating your challenges as our own.",
  },
  {
    icon: Lightbulb,
    title: "Relentless Innovation",
    desc: "We stay ahead of the curve, constantly exploring emerging technologies like LLMs and Edge Computing to deliver smarter, faster solutions.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    desc: "With team members specializing in diverse ecosystems, we bring unique perspectives to solve complex problems for international startups and enterprises.",
  },
];

const team = [
  { image: "/team/aa.mp4", initials: "AC", name: "Ajfar Uddin Ahmed Chowdhury", role: "Chief Technology Officer", desc: "Specializes in high-performance distributed systems. Leading the technical vision and engineering excellence at RadianCore." },
  { image: "/team/Chinmoy.png", initials: "CD", name: "Chinmoy Kumar Das", role: "Chief Operating Officer", desc: "Expert in enterprise-scale cloud operations. Ensuring seamless project delivery and operational efficiency for all global clients." },
  { image: "/team/Dipa.png", initials: "RR", name: "Ruhia Rahman", role: "Head of Marketing & Sales", desc: "Strategist behind RadianCore's global outreach. Focused on building strong, long-term partnerships with tech-forward enterprises." },
  { image: "/team/Mi.jpg", initials: "FC", name: "Fahima Chowdhury", role: "Development Lead", desc: "Full-stack architect with a focus on scalable React applications. Mentors our engineering teams to deliver pixel-perfect software." },
  { image: "/team/Rakib.jpeg", initials: "RB", name: "Rakib Bhuiyan", role: "Data Engineer", desc: "Builds robust data pipelines and machine learning models. Turning complex data into actionable insights for our fintech partners." },
  { image: "/team/Bangi1.jpeg", initials: "BS", name: "Binita Shammi Naz Shahid", role: "UI/UX Designer", desc: "Dedicated to user-centric design. Creates intuitive interfaces that bridge the gap between complex technology and human interaction." },
  { image: "/team/Nohan.jpeg", initials: "RR", name: "Rizouan Ur Rashid", role: "Cyber Security Engineer", desc: "Guardian of our clients' digital assets. Implements zero-trust architectures and rigorous security compliance protocols." },
];

const milestones = [
  { year: "2024", text: "RadianCore founded to help companies embrace AI and cloud technologies without complexity." },
  { year: "2025", text: "Expanded core team to include 20+ specialized engineers and launched AI/ML division." },
  { year: "2026", text: "Completed 50+ successful projects globally and opened our second regional operations hub." },
];

const About = () => {
  return (
    <div className="flex flex-col items-center pb-24 border-t border-white/5 bg-transparent">

      {/* Mission */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="flex-1">
          <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-4">OUR MISSION</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Empowering businesses through <br className="hidden md:block" /> <span className="text-[#00EAFF]">RadianCore</span>
          </h2>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-6 text-lg text-gray-200 font-light leading-relaxed">
          <p>
            RadianCore was founded to help companies embrace AI and cloud technologies without complexity. Our mission is to make innovation simple and reliable.
          </p>
          <p>
            We bridge the gap between complex digital transformation and business growth. Our team doesn't just write code — we immerse ourselves in your industry to architect solutions that create lasting competitive advantages.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-3">OUR VALUES</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What <span className="text-[#00EAFF]">Drives</span> Us
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-[#0A121D] border border-white/10 rounded-lg p-8 flex items-start gap-6 hover:border-[#00EAFF]/30 transition-all duration-300">
              <div className="mt-1">
                <v.icon className="w-6 h-6 text-[#00EAFF]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed font-light">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-3">LEADERSHIP</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Meet the <span className="text-[#00EAFF]">Team</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="bg-[#0A121D] border border-white/10 rounded-lg p-8 hover:border-[#00EAFF]/30 transition-all duration-300">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-[#00EAFF]/10 text-[#00EAFF] flex items-center justify-center font-bold text-lg mb-6">
                {m.image ? (
                  m.image.toLowerCase().endsWith('.mp4') ? (
                    <video
                      src={m.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                  )
                ) : (
                  m.initials
                )}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{m.name}</h3>
              <p className="text-[#00EAFF] text-xs font-semibold mb-4">{m.role}</p>
              <p className="text-sm text-gray-200 font-light leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="w-full max-w-3xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-3">OUR JOURNEY</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Key <span className="text-[#00EAFF]">Milestones</span>
          </h2>
        </div>
        <div className="pl-6 md:pl-0 flex justify-center">
          <div className="relative border-l border-white/10 space-y-12 py-4">
            {milestones.map((m) => (
              <div key={m.year} className="relative pl-10">
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#00EAFF] -left-[5px] top-1.5 ring-4 ring-[#050B14]"></div>
                <div className="flex flex-col">
                  <span className="text-[#00EAFF] font-bold text-sm mb-1">{m.year}</span>
                  <p className="text-gray-200 font-light text-sm">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
