import Link from "next/link";
import { ChevronRight } from "lucide-react";

const projects = [
    {
        title: "AI Fraud Detection",
        industry: "FINTECH",
        desc: "ML model reducing fraud by 37% for a leading fintech startup.",
        image: "/case-studies/fraud-detection.png",
    },
    {
        title: "E-Commerce Platform",
        industry: "RETAIL",
        desc: "Next.js application delivering 40% faster checkout and 20% conversion boost.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    },
];

const FeaturedCaseStudies = () => {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-4">OUR WORK</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Featured <span className="text-[#00EAFF]">Case Studies</span>
                    </h2>
                    <p className="text-gray-200 font-light max-w-xl leading-relaxed">
                        Discover how we've helped companies across industries scale through mission-critical technology solutions.
                    </p>
                </div>
                <Link
                    href="/case-studies"
                    className="group flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest hover:text-[#00EAFF] transition-colors pb-2 border-b border-white/10 hover:border-[#00EAFF]/50"
                >
                    View All Projects <ChevronRight className="h-4 w-4 text-[#00EAFF] group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((p) => (
                    <div key={p.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0A121D] hover:border-[#00EAFF]/30 transition-all duration-500">
                        <div className="aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[#00EAFF] text-[10px] font-bold tracking-[0.2em]">{p.industry}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00EAFF] transition-colors">{p.title}</h3>
                            <p className="text-sm text-gray-200 font-light leading-relaxed mb-6">
                                {p.desc}
                            </p>
                            <Link href="/case-studies" className="inline-flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest hover:gap-3 transition-all">
                                Read Full Story <ChevronRight className="h-3 w-3 text-[#00EAFF]" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCaseStudies;
