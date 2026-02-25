import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative flex flex-col bg-transparent">
    {/* Content */}
    <div className="relative z-10 flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <HomeCTA />
      <Footer />
    </div>
  </div>
);

export default Index;
