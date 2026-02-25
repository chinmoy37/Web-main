"use client";

import { useState } from "react";
import { Send, Mail, MessageSquare, Clock, Globe, MapPin, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { question: "What's your typical project timeline?", answer: "Project timelines vary depending on the scope and complexity. A typical web application takes 12-16 weeks from discovery to launch. We provide detailed timeline estimates after our initial discovery phase." },
  { question: "Do you work with startups or only enterprises?", answer: "We work with businesses of all sizes, from early-stage startups to established enterprises. Our scalable solutions are tailored to meet your specific needs and growth stage." },
  { question: "What's your pricing model?", answer: "We offer flexible pricing models including fixed-price contracts for well-defined projects and time-and-materials for ongoing development and support. We'll recommend the best approach based on your requirements." },
  { question: "Can you augment our existing team?", answer: "Yes, we provide staff augmentation services. Our experienced engineers can seamlessly integrate with your existing team to accelerate development and fill skill gaps." },
  { question: "What happens after launch?", answer: "We offer comprehensive post-launch support and maintenance plans to ensure your application remains secure, up-to-date, and performs optimally. We're committed to long-term partnerships." },
];

const offices = [
  { city: "San Francisco", address: "400 Mason St, Suite 200", tz: "PST (UTC-8)", phone: "+1 (415) 555-0142" },
  { city: "London", address: "71 Queen Victoria St, EC4V 4AY", tz: "GMT (UTC+0)", phone: "+44 20 7946 0953" },
  { city: "Singapore", address: "1 Raffles Place, #44-01", tz: "SGT (UTC+8)", phone: "+65 6872 4567" },
  { city: "Berlin", address: "Friedrichstraße 133, 10117", tz: "CET (UTC+1)", phone: "+49 30 1234 5678" }
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center pb-24 border-t border-white/5 bg-transparent">

      {/* Header */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-24 pb-12">
        <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-4">CONTACT US</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Let's Start a <br className="hidden md:block" /> <span className="text-[#00EAFF]">Conversation</span>
        </h1>
        <p className="text-gray-200 font-light max-w-2xl leading-relaxed">
          Whether you have a project in mind or just want to explore possibilities — we'd love to hear from you. No sales pitch, just a genuine conversation.
        </p>
      </section>

      {/* Main Contact Grid */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Left Form */}
          <div className="bg-[#0A121D] border border-white/10 rounded-lg p-8 h-fit">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-2">Send us a message</h2>
              <p className="text-sm text-gray-200">We typically respond within 2 business hours.</p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#00EAFF]/10 flex items-center justify-center mb-6">
                  <Send className="h-8 w-8 text-[#00EAFF]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-200">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">First Name</label>
                    <input type="text" required className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#00EAFF] focus:outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">Last Name</label>
                    <input type="text" required className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#00EAFF] focus:outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Email</label>
                  <input type="email" required className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#00EAFF] focus:outline-none transition-colors" placeholder="john@company.com" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Company</label>
                  <input type="text" className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#00EAFF] focus:outline-none transition-colors" placeholder="Acme Inc." />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Project Budget</label>
                  <div className="relative">
                    <select required className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-gray-200 text-sm focus:border-[#00EAFF] focus:outline-none transition-colors appearance-none cursor-pointer">
                      <option value="" disabled selected>Select a range</option>
                      <option value="10k-50k">$10k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-2">Tell us about your project</label>
                  <textarea rows={4} required className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#00EAFF] focus:outline-none transition-colors resize-none mb-2" placeholder="Describe your project, challenges, and goals..." />
                </div>

                <button type="submit" className="w-full bg-[#00EAFF] hover:bg-[#00EAFF]/90 text-black font-semibold py-4 rounded text-sm flex items-center justify-center gap-2 transition-colors">
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Info Cards */}
          <div className="flex flex-col gap-4">
            <div className="bg-transparent border border-white/10 rounded-lg p-6 hover:border-[#00EAFF]/30 transition-colors">
              <Mail className="h-5 w-5 text-[#00EAFF] mb-4" />
              <h3 className="text-white font-bold text-sm mb-1">Email Us</h3>
              <p className="text-gray-200 text-xs mb-1">radiancoresys@gmail.com</p>

            </div>

            <div className="bg-transparent border border-white/10 rounded-lg p-6 hover:border-[#00EAFF]/30 transition-colors">
              <MessageSquare className="h-5 w-5 text-[#00EAFF] mb-4" />
              <h3 className="text-white font-bold text-sm mb-1">Live Chat</h3>
              <p className="text-gray-200 text-xs">Available, 10am-6pm </p>
            </div>

            <div className="bg-transparent border border-white/10 rounded-lg p-6 hover:border-[#00EAFF]/30 transition-colors">
              <Clock className="h-5 w-5 text-[#00EAFF] mb-4" />
              <h3 className="text-white font-bold text-sm mb-1">Response Time</h3>
              <p className="text-gray-200 text-xs">We respond within 2 business hours</p>
            </div>

            <div className="bg-transparent border border-white/10 rounded-lg p-6 hover:border-[#00EAFF]/30 transition-colors">
              <Globe className="h-5 w-5 text-[#00EAFF] mb-4" />
              <h3 className="text-white font-bold text-sm mb-1">Global Presence</h3>
              <p className="text-gray-200 text-xs">Offices in SF, London, Singapore & Berlin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Locations */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-3">LOCATIONS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Our <span className="text-[#00EAFF]">Offices</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offices.map((office) => (
            <div key={office.city} className="bg-transparent border border-white/10 rounded-lg p-6 hover:border-[#00EAFF]/30 transition-colors">
              <MapPin className="h-4 w-4 text-[#00EAFF] mb-4" />
              <h3 className="text-white font-bold text-sm mb-2">{office.city}</h3>
              <p className="text-gray-400 text-xs mb-1">{office.address}</p>
              <p className="text-gray-400 text-xs mb-6">{office.tz}</p>
              <p className="text-[#00EAFF] text-xs font-semibold">{office.phone}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <p className="text-[#00EAFF] text-xs font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Common <span className="text-[#00EAFF]">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-lg bg-transparent px-6 border-b-white/10 data-[state=open]:border-[#00EAFF]/30 transition-colors">
              <AccordionTrigger className="text-left text-sm font-semibold text-white hover:no-underline hover:text-[#00EAFF]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm font-light leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

    </div>
  );
};

export default Contact;

