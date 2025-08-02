import CampaignCard from "./CampaignCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CampaignsSection = () => {
  const navigate = useNavigate();

  const handleFilterClick = () => {
    console.log('Filter button clicked');
    // Aqui poderia abrir um modal de filtros
  };

  const handleViewAllClick = () => {
    console.log('View all campaigns button clicked');
    navigate('/explore');
  };

  // Mock data - em produção viria do Supabase
  const campaigns = [
    {
      id: 1,
      artist: "Dream Theater",
      city: "São Paulo, SP",
      venue: "Allianz Parque",
      targetAmount: 300000,
      currentAmount: 185000,
      supporters: 1850,
      daysLeft: 25,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
      genre: "Metal Progressivo",
      spotifyListeners: 850000
    },
    {
      id: 2,
      artist: "Jorge & Mateus",
      city: "Rio de Janeiro, RJ",
      venue: "Jeunesse Arena",
      targetAmount: 250000,
      currentAmount: 175000,
      supporters: 2100,
      daysLeft: 18,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      genre: "Sertanejo",
      spotifyListeners: 1200000
    },
    {
      id: 3,
      artist: "Iron Maiden",
      city: "Belo Horizonte, MG",
      venue: "Mineirão",
      targetAmount: 350000,
      currentAmount: 215000,
      supporters: 2450,
      daysLeft: 15,
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=800&q=80",
      genre: "Heavy Metal",
      spotifyListeners: 2500000
    },
    {
      id: 4,
      artist: "Gusttavo Lima",
      city: "Brasília, DF",
      venue: "Arena BRB",
      targetAmount: 200000,
      currentAmount: 145000,
      supporters: 1890,
      daysLeft: 22,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
      genre: "Sertanejo",
      spotifyListeners: 1800000
    },
    {
      id: 5,
      artist: "Sepultura",
      city: "Porto Alegre, RS",
      venue: "Arena do Grêmio",
      targetAmount: 180000,
      currentAmount: 98000,
      supporters: 1234,
      daysLeft: 28,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      genre: "Metal",
      spotifyListeners: 980000
    },
    {
      id: 6,
      artist: "Marília Mendonça",
      city: "Curitiba, PR",
      venue: "Pedreira Paulo Leminski",
      targetAmount: 220000,
      currentAmount: 165000,
      supporters: 2567,
      daysLeft: 12,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
      genre: "Sertanejo",
      spotifyListeners: 1500000
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20">{/* Dark theme gradient */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Campanhas em 
              <span className="bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
                {" "}Destaque
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Descubra shows incríveis sendo financiados pela sua comunidade
            </p>
          </div>
          
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm" onClick={handleFilterClick}>
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Badge variant="secondary" className="bg-music-purple text-white"> {/* Spotify Green Badge */}
              <TrendingUp className="h-4 w-4 mr-1" />
              Baseado no seu Spotify
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={handleViewAllClick}>
            Ver Todas as Campanhas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;