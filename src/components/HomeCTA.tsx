import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";

const HomeCTA = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 bg-transparent border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#00EAFF] text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00EAFF] animate-pulse" /> Ready to Scale?
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-[1.1]">
          Launch Your <span className="text-[#00EAFF]">Next Project</span><br />
          With Confidence
        </h2>
        <p className="text-gray-400 font-semibold max-w-lg mx-auto mb-12 leading-relaxed text-sm">
          Partner with a leading IT solutions company and unlock the full potential of digital innovation. Let’s build scalable, secure, and future-ready solutions tailored to your business goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#00EAFF] text-black px-10 py-4 rounded font-bold text-xs uppercase tracking-wider hover:bg-[#00EAFF]/90 transition-all duration-300 gap-2 group"
          >
            Get Started Now <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="mailto:hello@novatech.io"
            className="inline-flex items-center justify-center gap-2 border border-white/10 text-white bg-white/5 px-10 py-4 rounded font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all duration-300 group"
          >
            <Mail className="h-4 w-4" />
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
