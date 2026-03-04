const caseStudies = [
  {
    image: "/case-studies/fraud-detection.png",
    industry: "FINTECH",
    title: "AI-Powered Fraud Detection",
    client: "Global Fintech Leader",
    desc: "Built a sophisticated AI fraud detection system for a fintech startup using Python, TensorFlow, and AWS. The platform analyzes real-time transactional data to identify and block fraudulent activities before they occur.",
    metrics: [
      { label: "FRAUD REDUCTION", value: "37%" },
      { label: "ACCURACY RATE", value: "99.8%" },
      { label: "LATENCY", value: "<15ms" },
    ],
    tags: ["Python", "TensorFlow", "AWS", "SageMaker"],
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    industry: "HEALTHCARE",
    title: "AI-Powered Diagnostic Platform",
    client: "MediVision.AI",
    desc: "Built a HIPAA-compliant machine learning platform that assists radiologists in detecting anomalies with 98.7% accuracy, reducing diagnosis time from hours to minutes.",
    metrics: [
      { label: "DETECTION ACCURACY", value: "98.7%" },
      { label: "TIME SAVED", value: "85%" },
      { label: "SCANS PROCESSED", value: "1M+" },
    ],
    tags: ["Python", "TensorFlow", "AWS", "React"],
    reverse: true,
  },
  {
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    industry: "E-COMMERCE",
    title: "Scaling a Global Marketplace",
    client: "VeloMarket",
    desc: "Architected a globally distributed e-commerce platform handling 50K concurrent users with sub-200ms response times across 12 regions.",
    metrics: [
      { label: "CONCURRENT USERS", value: "50K" },
      { label: "RESPONSE TIME", value: "<200ms" },
      { label: "REVENUE GROWTH", value: "340%" },
    ],
    tags: ["Next.js", "Node.js", "Redis", "Cloudflare"],
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    industry: "SAAS",
    title: "Real-Time Collaboration Suite",
    client: "SyncSpace",
    desc: "Developed a Figma-like real-time collaboration tool with CRDT-based conflict resolution supporting 100+ simultaneous editors per document.",
    metrics: [
      { label: "SIMULTANEOUS EDITORS", value: "100+" },
      { label: "CONFLICT LATENCY", value: "0ms" },
      { label: "APP STORE RATING", value: "4.9/5" },
    ],
    tags: ["TypeScript", "WebSockets", "Raft", "Rust"],
    reverse: true,
  },
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    industry: "LOGISTICS",
    title: "Intelligent Fleet Management",
    client: "RouteIQ",
    desc: "Built an AI-powered fleet management platform that optimizes delivery routes in real-time, reducing fuel costs by 31% and improving on-time delivery rates.",
    metrics: [
      { label: "FUEL COST REDUCTION", value: "31%" },
      { label: "ON-TIME DELIVERY", value: "99.5%" },
      { label: "ROUTES OPTIMIZED", value: "2.4M" },
    ],
    tags: ["Python", "Graph Theory", "GCP", "Google Maps"],
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    industry: "CYBERSECURITY",
    title: "Zero-Trust Security Overhaul",
    client: "SecureGrid Corp",
    desc: "Implemented a comprehensive zero-trust architecture for a Fortune 500 company, reducing security incidents by 94% and achieving SOC 2 Type II certification in 3 months.",
    metrics: [
      { label: "FEWER INCIDENTS", value: "94%" },
      { label: "SOC 2 CERTIFIED", value: "3mo" },
      { label: "ROI DETECTED", value: "$12M" },
    ],
    tags: ["Okta", "Vault", "AWS", "Zscaler"],
    reverse: true,
  },
];

const testimonials = [
  {
    quote: "RadianCore didn't just build our platform — they architected our future. The scalability we have now is something we only dreamed of before they stepped in.",
    author: "Sarah Jenkins",
    role: "CTO, QuantumPay",
  },
  {
    quote: "Working with RadianCore felt like having a local engineering team. Their communication is impeccable, and the quality of code is the best I've seen in 20 years.",
    author: "Mark Thompson",
    role: "VP Engineering, MediVision.AI",
  },
  {
    quote: "Our revenue grew 340% after the platform overhaul. RadianCore's focus on performance and conversion optimization was the key driver of our global success.",
    author: "Elena Rodriguez",
    role: "CEO, VeloMarket",
  },
];

const CaseStudies = () => {
  return (
    <div className="flex flex-col items-center pb-24 border-t border-white/5 bg-transparent">
      {/* Header */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-24 pb-12">
        <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-4">CASE STUDIES</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Results That <span className="text-[#00EAFF]">Speak</span> for<br className="hidden md:block" /> Themselves
        </h1>
        <p className="text-gray-200 font-light max-w-2xl leading-relaxed">
          Explore how we've helped industry leaders solve complex challenges and achieve measurable business outcomes through technology.
        </p>
      </section>

      {/* Case Studies List */}
      <section className="w-full max-w-6xl mx-auto px-6 py-12 space-y-12">
        {caseStudies.map((study) => (
          <div
            key={study.title}
            className={`flex flex-col md:flex-row items-stretch gap-0 bg-[#0A121D] border border-white/10 rounded-xl overflow-hidden hover:border-[#00EAFF]/30 transition-all duration-300 ${study.reverse ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image/Graphic Side */}
            <div className={`flex-1 relative overflow-hidden min-h-[300px] md:min-h-full`}>
              <img
                src={study.image}
                alt={study.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A121D] via-transparent to-transparent opacity-80" />
            </div>

            {/* Content Side */}
            <div className="flex-[1.5] p-8 md:p-12 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[#00EAFF] text-xs font-bold tracking-widest">{study.industry}</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-white">{study.title}</h2>
                  <p className="text-gray-400 text-sm">Client: {study.client}</p>
                </div>
                <p className="text-gray-200 font-light leading-relaxed">
                  {study.desc}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="space-y-1">
                      <p className="text-2xl font-bold text-white">{metric.value}</p>
                      <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-sm bg-white/5 text-gray-400 font-mono tracking-tight leading-none h-fit border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-3">TESTIMONIALS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What Our <span className="text-[#00EAFF]">Clients</span> Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-[#0A121D] border border-white/10 rounded-xl p-8 hover:border-[#00EAFF]/30 transition-all duration-300 group">
              <p className="text-gray-200 font-light leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div className="space-y-1">
                <p className="text-white font-bold text-sm">{t.author}</p>
                <p className="text-[#00EAFF] text-xs font-semibold tracking-wide">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
