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
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Protótipo - Teste de Usuários</h2>
              <p className="text-muted-foreground">
                Faça login como diferentes tipos de usuário para explorar as funcionalidades
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
