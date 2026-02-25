"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const stats = [
  { label: "Projects Delivered", value: 250, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Team Experts", value: 50, suffix: "+" },
  { label: "Years Experience", value: 12, suffix: "+" },
];

const logos = ["STRIPE", "NOTION", "VERCEL", "FIGMA", "SLACK"];

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
            We Build Technology<br />
            That <span className="text-[#00EAFF]">Drives Growth</span>
          </h1>

          <p className="text-sm md:text-base text-gray-400 max-w-xl mb-12 leading-relaxed font-light">
            Enterprise-grade software development, cloud solutions, and digital transformation — engineered for scale and built for impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#00EAFF] text-black px-8 py-3.5 rounded font-bold text-xs uppercase tracking-wider hover:bg-[#00EAFF]/90 transition-all duration-300 gap-2 group"
            >
              Start Your Project <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/10 text-white bg-white/5 px-8 py-3.5 rounded font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all duration-300 gap-2 group"
            >
              Explore Services
            </a>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-30 grayscale mb-24">
            {logos.map((logo) => (
              <span key={logo} className="text-[10px] font-bold tracking-[0.3em] text-white">
                {logo}
              </span>
            ))}
          </div>

          {/* Stats Bar */}
          <InView triggerOnce threshold={0.1}>
            {({ inView, ref }) => (
              <div ref={ref} className="w-full grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-20">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col items-center border-l first:border-l-0 border-white/5">
                    <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {inView ? (
                        <CountUp start={0} end={s.value} duration={2.5} separator="," suffix={s.suffix} />
                      ) : (
                        `0${s.suffix}`
                      )}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#00EAFF] font-bold">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </InView>
        </div>
      </div>
    </section>
  );
};

export default Hero;
