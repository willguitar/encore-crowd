import { Button } from "@/components/ui/button";
import { Play, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-music-dark.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Traga seus
            <span className="bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
              {" "}artistas favoritos{" "}
            </span>
            para sua cidade
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Una-se a outros fãs e financie coletivamente shows dos seus artistas preferidos. 
            Quando a meta é atingida, o show acontece!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Explorar Campanhas
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Users className="mr-2 h-5 w-5" />
              Criar Campanha
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-music-purple mb-1">127</div>
              <div className="text-sm text-gray-300">Shows realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-music-pink mb-1">15K+</div>
              <div className="text-sm text-gray-300">Fãs conectados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-music-success mb-1">89</div>
              <div className="text-sm text-gray-300">Cidades atendidas</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <MapPin className="h-6 w-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;