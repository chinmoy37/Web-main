import { Terminal, Heart, Lightbulb, Globe } from "lucide-react";

const values = [
  {
    icon: Terminal,
    title: "Precision Engineering",
    desc: "Every line of code is purposeful. We don’t cut corners — we build solutions designed to endure and scale.",
  },
  {
    icon: Heart,
    title: "Client Obsession",
    desc: "Your success is our mission. We integrate seamlessly with your team, treating your challenges as our own.",
  },
  {
    icon: Lightbulb,
    title: "Relentless Innovation",
    desc: "We stay ahead of the curve, constantly exploring emerging technologies and modern methodologies to deliver smarter solutions.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    desc: "With team members across multiple countries, we bring diverse perspectives and expertise to every challenge, ensuring broad, informed solutions.",
  },
];

const team = [
  { image: "team/aa.mp4", initials: "DK", name: " Ajfar Uddin Ahmed Chowdhury", role: "Chief Technology Officer", desc: "Built engineering teams at Uber and Airbnb. Expert in distributed systems." },
  { image: "team/Chinmoy.png", initials: "dfdf", name: "Chinmoy Kumar Das", role: "Chief Operating Officer", desc: "Ex-Google Cloud architect. Pioneered multi-region deployment strategies." },
  { image: "team/Dipa.png", initials: "DK", name: " Ruhia Rahman", role: "Head of Marketing & Seals", desc: "Built engineering teams at Uber and Airbnb. Expert in distributed systems." },
  { image: "team/Mi.jpg", initials: "DK", name: "Fahima Chowdhury", role: "Development Lead", desc: "Built engineering teams at Uber and Airbnb. Expert in distributed systems." },
  { image: "team/Rakib.jpeg", initials: "DK", name: " Rakib Bhuiyan", role: "Data Engineer", desc: "Built engineering teams at Uber and Airbnb. Expert in distributed systems." },
  { image: "/team/Bangi1.jpeg", initials: "AC", name: "Binita Shammi Naz Shahid", role: "UI/UX Designer", desc: "Former VP Engineering at Stripe. 15+ years building scalable payment systems." },
  { image: "team/Nohan.jpeg", initials: "DK", name: " Rizouan Ur Rashid", role: "Cyber Security Engineer", desc: "Built engineering teams at Uber and Airbnb. Expert in distributed systems." },

];

const milestones = [
  { year: "2014", text: "Founded in San Francisco by Alex & Mike" },
  { year: "2016", text: "First $5M revenue milestone, team of 10" },
  { year: "2018", text: "Expanded to London and Singapore offices" },
  { year: "2020", text: "Launched AI/ML division, 100+ employees" },
  { year: "2022", text: "Series B funding, valued at $150M" },
  { year: "2024", text: "250+ projects delivered, 50+ engineers" },
  { year: "2026", text: "Opened Berlin office, launched NovaTech Labs" },
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
            Founded in 2024, RadianCore was created to solve a simple challenge: many businesses struggle to find technology partners who truly understand both the technical and business sides of operations.
          </p>
          <p>
            We bridge that gap. Our team doesn't just write code — we immerse ourselves in your industry, understand your customers, and architect solutions that create lasting competitive advantages. Every project we take on is a partnership, not a transaction.
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
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
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
