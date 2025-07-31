import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, Home, ArrowLeft } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-music-purple/20 via-background to-music-pink/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Music className="h-24 w-24 text-music-purple/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-music-purple">404</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-muted-foreground mb-8">
          Ops! A página que você está procurando não existe ou foi movida.
        </p>
        
        <div className="space-y-3">
          <Button 
            onClick={() => navigate(-1)} 
            variant="outline" 
            className="w-full"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          
          <Link to="/">
            <Button variant="hero" className="w-full">
              <Home className="h-4 w-4 mr-2" />
              Ir para o Início
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
