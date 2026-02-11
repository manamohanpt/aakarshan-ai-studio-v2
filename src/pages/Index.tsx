import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { WorkflowSection } from "@/components/home/WorkflowSection";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
