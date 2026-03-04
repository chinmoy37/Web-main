import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative flex flex-col bg-transparent">
    {/* Content */}
    <div className="relative z-10 flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedCaseStudies />
      <WhyChooseUs />
      <Footer />
    </div>
  </div>
);

export default Index;
