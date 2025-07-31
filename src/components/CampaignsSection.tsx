import CampaignCard from "./CampaignCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Filter } from "lucide-react";

const CampaignsSection = () => {
  // Mock data - em produção viria do Supabase
  const campaigns = [
    {
      artist: "Fresno",
      city: "Ribeirão Preto, SP",
      venue: "Teatro Pedro II",
      targetAmount: 45000,
      currentAmount: 38200,
      supporters: 156,
      daysLeft: 12,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
      genre: "Rock Nacional",
      spotifyListeners: 890000
    },
    {
      artist: "Pabllo Vittar",
      city: "Campinas, SP",
      venue: "Estádio Moisés Lucarelli",
      targetAmount: 120000,
      currentAmount: 127500,
      supporters: 421,
      daysLeft: 8,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      genre: "Pop/Drag",
      spotifyListeners: 2100000
    },
    {
      artist: "Tiago Iorc",
      city: "Santos, SP",
      venue: "Teatro Coliseu",
      targetAmount: 35000,
      currentAmount: 22800,
      supporters: 89,
      daysLeft: 15,
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=800&q=80",
      genre: "MPB/Indie",
      spotifyListeners: 650000
    },
    {
      artist: "Emicida",
      city: "Sorocaba, SP",
      venue: "Centro Cultural",
      targetAmount: 55000,
      currentAmount: 31200,
      supporters: 134,
      daysLeft: 22,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
      genre: "Hip Hop",
      spotifyListeners: 1200000
    },
    {
      artist: "Pitty",
      city: "Piracicaba, SP",
      venue: "Arena Show",
      targetAmount: 62000,
      currentAmount: 48900,
      supporters: 201,
      daysLeft: 6,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      genre: "Rock Nacional",
      spotifyListeners: 980000
    },
    {
      artist: "Criolo",
      city: "Jundiaí, SP",
      venue: "Teatro Polytheama",
      targetAmount: 42000,
      currentAmount: 18500,
      supporters: 67,
      daysLeft: 28,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
      genre: "Rap/MPB",
      spotifyListeners: 720000
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50/50 to-pink-50/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Campanhas em 
              <span className="bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
                {" "}Destaque
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Descubra shows incríveis sendo financiados pela sua comunidade
            </p>
          </div>
          
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Badge variant="secondary" className="bg-music-purple text-white">
              <TrendingUp className="h-4 w-4 mr-1" />
              Baseado no seu Spotify
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {campaigns.map((campaign, index) => (
            <CampaignCard key={index} {...campaign} />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg">
            Ver Todas as Campanhas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;