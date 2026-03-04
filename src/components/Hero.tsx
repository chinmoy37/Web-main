"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const stats = [
  { label: "Projects Success", value: 300, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" },
  { label: "Global Clients Leased", value: 75, suffix: "+" },
  { label: "Industry Experts", value: 15, suffix: "+" },
];


const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-center section-padding pt-32 pb-12 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 w-full flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00EAFF]" /> Trusted by 250+ companies worldwide
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-white">
            RadianCore – <br />
            <span className="text-[#00EAFF]">AI & Web Solutions</span> for Businesses
          </h1>

          <p className="text-sm md:text-base text-gray-400 max-w-xl mb-12 leading-relaxed font-light">
            We build intelligent, secure, and scalable technology to help startups and enterprises grow.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#00EAFF] text-black px-8 py-3.5 rounded font-bold text-xs uppercase tracking-wider hover:bg-[#00EAFF]/90 transition-all duration-300 gap-2 group"
            >
              Book Your Free Consultation <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center border border-white/10 text-white bg-white/5 px-8 py-3.5 rounded font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all duration-300 gap-2 group"
            >
              View Our Case Studies
            </a>
          </div>
        </div>

        {/* Stats Section with Headline */}
        <div className="w-full max-w-7xl mx-auto px-6 mt-16">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Why Choose Our <span className="text-[#00EAFF]">IT Solutions Company</span>
            </h2>
          </div>

          <InView triggerOnce threshold={0.1}>
            {({ inView, ref }) => (
              <div ref={ref} className="w-full flex flex-wrap items-center justify-center gap-y-8 pt-10 border-t border-white/5">
                <div className="flex items-center flex-wrap justify-center font-bold">
                  {stats.map((s, idx) => (
                    <div key={s.label} className="flex items-center">
                      <div className="flex items-center gap-3 px-6 md:px-8">
                        <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                          {inView ? (
                            <CountUp start={0} end={s.value} duration={2.5} separator="," suffix={s.suffix} />
                          ) : (
                            `0${s.suffix}`
                          )}
                        </span>
                        <span className="text-[9px] text-white/50 font-bold text-left leading-[1.2] uppercase tracking-widest max-w-[80px]">
                          {s.label}
                        </span>
                      </div>
                      {idx < stats.length - 1 && (
                        <div className="h-6 w-[1px] bg-white/10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </InView>
        </div>
      </div>
    </section>
  );
};

export default Hero;
