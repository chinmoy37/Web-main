import Navbar from "@/components/Navbar";
import DetailedServices from "@/components/DetailedServices";
import Footer from "@/components/Footer";

const ServicesPage = () => (
  <div className="min-h-screen bg-transparent">
    <Navbar />
    <div className="pt-20">
      <DetailedServices />
    </div>
    <Footer />
  </div>
);

export default ServicesPage;
