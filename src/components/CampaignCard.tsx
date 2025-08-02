import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, MapPin, Users, Heart, Music2 } from "lucide-react";
import SupportModal from "./SupportModal";

interface CampaignCardProps {
  id: number;
  artist: string;
  city: string;
  venue: string;
  targetAmount: number;
  currentAmount: number;
  supporters: number;
  daysLeft: number;
  image: string;
  genre: string;
  spotifyListeners?: number;
}

const CampaignCard = ({
  id,
  artist,
  city,
  venue,
  targetAmount,
  currentAmount,
  supporters,
  daysLeft,
  image,
  genre,
  spotifyListeners
}: CampaignCardProps) => {
  const [amount, setAmount] = useState(currentAmount);
  const [supporterCount, setSupporterCount] = useState(supporters);
  
  const progressPercentage = (amount / targetAmount) * 100;
  const isComplete = progressPercentage >= 100;

  const handleSupportSuccess = (supportAmount: number) => {
    setAmount(prev => prev + supportAmount);
    setSupporterCount(prev => prev + 1);
  };

  const handleFavoriteClick = () => {
    console.log('Favorite button clicked for campaign:', id);
    // Aqui poderia adicionar lógica para favoritar/desfavoritar
  };

  const handleViewShowClick = () => {
    console.log('View show button clicked for campaign:', id);
    // Aqui poderia navegar para página de detalhes do show
  };

  return (
    <Card className="group overflow-hidden enhanced-card hover:scale-[1.02] transition-all duration-500 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border-white/10">
      <CardHeader className="p-0 relative overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center relative transition-transform duration-700 group-hover:scale-110"
          style={{ 
            backgroundImage: `url(${image})`,
            filter: 'contrast(1.1) brightness(0.9)'
          }}
        >
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-music-purple/20 via-transparent to-music-pink/20 opacity-80" />
          
          {/* Genre Badge */}
          <Badge 
            variant="secondary" 
            className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white border-white/20 font-medium px-3 py-1"
          >
            {genre}
          </Badge>
          
          {/* Success Badge */}
          {isComplete && (
            <Badge 
              variant="secondary" 
              className="absolute top-4 right-4 bg-music-success/90 text-white border-music-success animate-pulse shadow-lg"
            >
              ✓ Meta Atingida!
            </Badge>
          )}
          
          {/* Artist Info with Glass Effect */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="glass rounded-lg p-3 border-white/20">
              <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-music-purple transition-colors">
                {artist}
              </h3>
              <div className="flex items-center gap-2 text-sm text-white/90">
                <MapPin className="w-4 h-4" />
                <span>{city}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-4">
        {/* Venue Info */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Music2 className="w-4 h-4 text-music-purple" />
          <span className="font-medium">{venue}</span>
        </div>
        
        {/* Spotify Info */}
        {spotifyListeners && (
          <div className="flex items-center gap-2 text-sm">
            <div className="w-4 h-4 rounded-full bg-music-success flex items-center justify-center">
              <span className="text-xs text-white">♪</span>
            </div>
            <span className="text-music-success font-medium">
              {spotifyListeners.toLocaleString()} ouvintes/mês
            </span>
          </div>
        )}
        
        {/* Progress Section */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Progresso</span>
            <span className="font-bold text-white bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          
          <div className="relative">
            <Progress value={progressPercentage} className="h-3 bg-white/10" />
            <div 
              className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-music-purple to-music-pink transition-all duration-700 ease-out"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-white font-semibold">R$ {amount.toLocaleString()}</span>
            <span className="text-muted-foreground">R$ {targetAmount.toLocaleString()}</span>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="flex justify-between items-center pt-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4 text-music-pink" />
            <span className="font-medium">{supporterCount} apoiadores</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 text-music-blue" />
            <span className="font-medium">{daysLeft} dias</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-3 w-full">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 group border-music-purple/30 hover:border-music-purple/60"
            onClick={handleFavoriteClick}
          >
            <Heart className="w-4 h-4 mr-2 group-hover:text-music-pink transition-colors" />
            Favoritar
          </Button>
          
          {isComplete ? (
            <Button 
              variant="success" 
              size="sm" 
              className="flex-2 bg-music-success hover:bg-music-success/90 shadow-lg hover:shadow-music-success/25"
              onClick={handleViewShowClick}
            >
              <Music2 className="w-4 h-4 mr-2" />
              Ver Show
            </Button>
          ) : (
            <div className="flex-2">
              <SupportModal 
                campaign={{
                  id,
                  artist,
                  city,
                  venue,
                  targetAmount,
                  currentAmount: amount,
                }} 
                onSupportSuccess={handleSupportSuccess}
              />
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;