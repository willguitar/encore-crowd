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
        
        {/* Simulador de Login para Prototipagem */}
        <section className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-music-purple/10 border border-music-purple/20 rounded-full px-4 py-2 mb-4">
                <div className="w-2 h-2 bg-music-purple rounded-full animate-pulse"></div>
                <span className="text-music-purple text-sm font-medium">Demonstração Interativa</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Explore o 
                <span className="bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent"> Protótipo</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Teste diferentes perspectivas de usuário e explore todas as funcionalidades da plataforma
              </p>
            </div>
            <LoginSimulator />
          </div>
        </section>
        
        <CampaignsSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
