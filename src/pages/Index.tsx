import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PopularCars from "@/components/PopularCars";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <PopularCars />
      <Footer />
    </div>
  );
};

export default Index;
