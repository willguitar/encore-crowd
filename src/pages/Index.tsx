import HeroSection from "@/components/HeroSection";
import CampaignsSection from "@/components/CampaignsSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-first responsive layout */}
      <div className="w-full">
        <HeroSection />
        <CampaignsSection />
        <HowItWorks />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
