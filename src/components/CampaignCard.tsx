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

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50/30 border-purple-200/50">
      <CardHeader className="p-0 relative">
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Badge 
            variant="secondary" 
            className="absolute top-3 left-3 bg-music-purple text-white"
          >
            {genre}
          </Badge>
          
          {isComplete && (
            <Badge 
              variant="secondary" 
              className="absolute top-3 right-3 bg-music-success text-white"
            >
              ✓ Meta Atingida!
            </Badge>
          )}
          
          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="text-xl font-bold mb-1">{artist}</h3>
            <div className="flex items-center gap-1 text-sm">
              <MapPin className="h-4 w-4" />
              {city}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Music2 className="h-4 w-4" />
            <span>{venue}</span>
          </div>
          
          {spotifyListeners && (
            <div className="flex items-center gap-2 text-sm text-music-purple">
              <span className="text-green-600">♪</span>
              <span>{spotifyListeners.toLocaleString()} ouvintes mensais no Spotify</span>
            </div>
          )}
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progresso</span>
              <span className="font-semibold">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>R$ {amount.toLocaleString()}</span>
              <span>R$ {targetAmount.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>{supporterCount} apoiadores</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>{daysLeft} dias restantes</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" size="sm" className="flex-1">
            <Heart className="h-4 w-4 mr-1" />
            Favoritar
          </Button>
          {isComplete ? (
            <Button variant="success" size="sm" className="flex-2">
              Ver Show
            </Button>
          ) : (
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
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;