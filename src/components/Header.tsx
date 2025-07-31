import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
            <Music className="h-8 w-8 text-music-purple" />
            <span className="text-2xl font-bold">ShowFund</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-music-purple transition-colors">
            Explorar
          </a>
          <a href="#" className="text-sm font-medium hover:text-music-purple transition-colors">
            Criar Campanha
          </a>
          <a href="#" className="text-sm font-medium hover:text-music-purple transition-colors">
            Como Funciona
          </a>
          <a href="#" className="text-sm font-medium hover:text-music-purple transition-colors">
            Artistas
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Entrar
          </Button>
          <Button variant="hero" size="sm">
            Cadastrar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;