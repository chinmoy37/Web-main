import { Terminal, Heart, Lightbulb, Globe } from "lucide-react";

const values = [
  {
    title: "Innovation",
    desc: "Continuously improving technology for real results.",
    achievement: "Custom AI frameworks developed for 10+ clients",
  },
  {
    title: "Client Obsession",
    desc: "Delivering solutions that exceed expectations.",
    achievement: "99% client satisfaction rate across all projects",
  },
  {
    title: "Precision Engineering",
    desc: "High-quality code and design as our baseline.",
    achievement: "Zero critical security vulnerabilities in 50+ audits",
  },
  {
    title: "Global Perspective",
    desc: "Experience in international markets and standards.",
    achievement: "Projects delivered across 15+ countries",
  },
];

const team = [
  {
    name: "Ajfar Uddin Ahmed Chowdhury",
    role: "Chief Technology Officer",
    image: "/team/aa.mp4",
    bio: "10+ years in AI & cloud solutions. Former engineer at Uber.",
    linkedin: "#",
  },
  {
    name: "Chinmoy Kumar Das",
    role: "Chief Operating Officer",
    image: "/team/Chinmoy.png",
    bio: "Expert in cloud infrastructure & business operations.",
    linkedin: "#",
  },
  {
    name: "Ruhia Rahman",
    role: "Head of Marketing",
    image: "/team/Dipa.png",
    bio: "Experienced in global tech marketing and strategy.",
    linkedin: "#",
  },
  {
    name: "Fahima Chowdhury",
    role: "Development Lead",
    image: "/team/Mi.jpg",
    bio: "Senior web engineer specializing in full-stack solutions.",
    linkedin: "#",
  },
  {
    name: "Rakib Bhuiyan",
    role: "Data Engineer",
    image: "/team/Rakib.jpeg",
    bio: "Expert in building scalable data pipelines for analytics.",
    linkedin: "#",
  },
  {
    name: "Binita Shammi Naz Shahid",
    role: "UI/UX Designer",
    image: "/team/Bangi1.jpeg",
    objectPosition: "center",
    bio: "Designer focused on intuitive, human-centered interfaces.",
    linkedin: "#",
  },
  {
    name: "Rizouan Ur Rashid",
    role: "Cyber Security Engineer",
    image: "/team/Nohan.jpeg",
    bio: "Specialist in protecting systems against modern threats.",
    linkedin: "#",
  },
];

const milestones = [
  { year: "2024", event: "RadianCore founded to help businesses embrace AI and cloud tech." },
  { year: "2025", event: "First 20 projects delivered successfully across multiple industries." },
  { year: "2025", event: "Expanded team and launched dedicated AI & Machine Learning division." },
  { year: "2026", event: "Global client base established & Berlin office opened for European operations." },
];

const About = () => {
  return (
    <div className="flex flex-col items-center pb-24 border-t border-white/5 bg-transparent">

      {/* Mission */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-32 pb-24 flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="flex-1">
          <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-4">OUR MISSION</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Empowering businesses through <br className="hidden md:block" /> <span className="text-[#00EAFF]">RadianCore</span>
          </h2>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-6 text-lg text-gray-200 font-light leading-relaxed">
          <p>
            RadianCore was founded to help businesses embrace AI, cloud, and web technologies without complexity. Our mission is to deliver innovative, secure, and scalable solutions that drive real impact.
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
            <div key={v.title} className="bg-[#0A121D] border border-white/10 rounded-lg p-8 flex flex-col gap-4 hover:border-[#00EAFF]/30 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white">{v.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed font-light">{v.desc}</p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-[#00EAFF] text-[10px] uppercase font-bold tracking-widest mb-1 italic">Achievement</p>
                <p className="text-xs text-white font-semibold">{v.achievement}</p>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m) => (
            <div key={m.name} className="bg-[#0A121D] border border-white/10 rounded-xl p-8 hover:border-[#00EAFF]/30 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden mb-6 transition-transform duration-500 hover:scale-105 border-4 border-white/10 hover:border-[#00EAFF]/50 flex items-center justify-center bg-[#050B14]">
                {m.image.endsWith('.mp4') ? (
                  <video src={m.image} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" style={{ objectPosition: m.objectPosition || 'center' }} />
                )}
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-2">{m.name}</h3>
                <p className="text-[#00EAFF] text-xs font-bold tracking-widest uppercase">{m.role}</p>
              </div>
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
              <div key={m.year + m.event} className="relative pl-10">
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#00EAFF] -left-[5px] top-1.5 ring-4 ring-[#050B14]"></div>
                <div className="flex flex-col">
                  <span className="text-[#00EAFF] font-bold text-sm mb-1">{m.year}</span>
                  <p className="text-gray-200 font-light text-sm">{m.event}</p>
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
