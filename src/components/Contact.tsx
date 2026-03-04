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
  { city: "San Francisco", address: "400 Mason St, Suite 200, CA", tz: "PST (UTC-8)", phone: "+1 (415) 555-0142" },
  { city: "Berlin", address: "Friedrichstraße 133, 10117, Germany", tz: "CET (UTC+1)", phone: "+49 30 1234 5678" }
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

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">Email</label>
                    <input type="email" required className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#00EAFF] focus:outline-none transition-colors" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">Phone Number (Optional)</label>
                    <input type="tel" className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#00EAFF] focus:outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">Company</label>
                    <input type="text" className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#00EAFF] focus:outline-none transition-colors" placeholder="Acme Inc." />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">Project Type</label>
                    <div className="relative">
                      <select required className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-gray-200 text-sm focus:border-[#00EAFF] focus:outline-none transition-colors appearance-none cursor-pointer">
                        <option value="" disabled selected>Select a type</option>
                        <option value="web">Web Development</option>
                        <option value="ai">AI & ML Solutions</option>
                        <option value="security">Cybersecurity</option>
                        <option value="cloud">Cloud & DevOps</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-200 pointer-events-none" />
                    </div>
                  </div>
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

                <div className="flex items-start gap-3">
                  <input type="checkbox" required id="privacy" className="mt-1 accent-[#00EAFF]" />
                  <label htmlFor="privacy" className="text-[10px] text-gray-400 leading-tight cursor-pointer">
                    I agree to RadianCore’s privacy policy. We will never share your data.
                  </label>
                </div>

                <button type="submit" className="w-full bg-[#00EAFF] hover:bg-[#00EAFF]/90 text-black font-semibold py-4 rounded text-sm flex items-center justify-center gap-2 transition-colors">
                  Get Your Free Consultation
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
              <p className="text-gray-200 text-xs mb-1">hello@radiancore.com</p>
            </div>

            <div className="bg-transparent border border-white/10 rounded-lg p-6 hover:border-[#00EAFF]/30 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <Globe className="h-5 w-5 text-[#00EAFF]" />
                <h3 className="text-white font-bold text-sm">Follow Our Journey</h3>
              </div>
              <div className="flex gap-6">
                <a href="https://linkedin.com/company/radiancore" className="text-gray-400 hover:text-[#00EAFF] transition-colors text-xs font-bold uppercase tracking-widest">LinkedIn</a>
                <a href="https://twitter.com/radiancore" className="text-gray-400 hover:text-[#00EAFF] transition-colors text-xs font-bold uppercase tracking-widest">Twitter</a>
                <a href="https://github.com/radiancore" className="text-gray-400 hover:text-[#00EAFF] transition-colors text-xs font-bold uppercase tracking-widest">GitHub</a>
              </div>
            </div>

            <div className="bg-transparent border border-white/10 rounded-lg p-6 hover:border-[#00EAFF]/30 transition-colors">
              <Clock className="h-5 w-5 text-[#00EAFF] mb-4" />
              <h3 className="text-white font-bold text-sm mb-1">Working Hours</h3>
              <p className="text-gray-200 text-xs">Mon - Fri: 9:00 AM - 6:00 PM (Local Time)</p>
            </div>

            <div className="h-full bg-transparent border border-white/10 rounded-lg overflow-hidden min-h-[200px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158855.12781559885!2d-122.51862417865181!3d37.75545281895696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1709462400000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, opacity: 0.6 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale invert"
              ></iframe>
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

