import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CampaignsSection from "@/components/CampaignsSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import LoginSimulator from "@/components/LoginSimulator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        <CampaignsSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
