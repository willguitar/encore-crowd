
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Users, 
  TrendingUp,
  Music,
  Heart,
  Star,
  SlidersHorizontal
} from "lucide-react";
import Header from "@/components/Header";
import CampaignCard from "@/components/CampaignCard";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("trending");

  const genres = [
    "Rock", "Pop", "Indie", "Eletrônica", "Sertanejo", "Funk", "MPB", "Rap", "Reggae", "Jazz"
  ];

  const campaigns = [
    {
      id: 1,
      artist: "Fresno",
      city: "Campinas",
      venue: "Arena Corporativa",
      targetAmount: 65000,
      currentAmount: 48500,
      supporters: 387,
      daysLeft: 12,
      image: "/placeholder.svg",
      genre: "Rock",
      spotifyListeners: 250000
    },
    {
      id: 2,
      artist: "Lagum",
      city: "Belo Horizonte", 
      venue: "Esplanada Mineirão",
      targetAmount: 70000,
      currentAmount: 75000,
      supporters: 892,
      daysLeft: 0,
      image: "/placeholder.svg",
      genre: "Indie Pop",
      spotifyListeners: 180000
    },
    {
      id: 3,
      artist: "Jão",
      city: "São Paulo",
      venue: "Allianz Parque", 
      targetAmount: 200000,
      currentAmount: 125000,
      supporters: 1250,
      daysLeft: 25,
      image: "/placeholder.svg",
      genre: "Pop",
      spotifyListeners: 450000
    },
    {
      id: 4,
      artist: "Vintage Culture",
      city: "Rio de Janeiro",
      venue: "Rock in Rio",
      targetAmount: 300000,
      currentAmount: 89000,
      supporters: 567,
      daysLeft: 18,
      image: "/placeholder.svg",
      genre: "Eletrônica",
      spotifyListeners: 320000
    },
    {
      id: 5,
      artist: "Matheus & Kauan",
      city: "Goiânia",
      venue: "Villa Mix",
      targetAmount: 150000,
      currentAmount: 95000,
      supporters: 890,
      daysLeft: 8,
      image: "/placeholder.svg",
      genre: "Sertanejo",
      spotifyListeners: 800000
    }
  ];

  const artists = [
    {
      id: 1,
      name: "Fresno",
      genre: "Rock",
      monthlyListeners: 250000,
      image: "/placeholder.svg",
      isAvailable: true,
      priceRange: "R$ 40k - 60k",
      rating: 4.8,
      pastShows: 145,
      bio: "Uma das principais bandas de rock alternativo do Brasil"
    },
    {
      id: 2,
      name: "Lagum", 
      genre: "Indie Pop",
      monthlyListeners: 180000,
      image: "/placeholder.svg",
      isAvailable: true,
      priceRange: "R$ 35k - 50k",
      rating: 4.9,
      pastShows: 98,
      bio: "Banda mineira que conquistou o Brasil com seu indie pop"
    },
    {
      id: 3,
      name: "Jão",
      genre: "Pop",
      monthlyListeners: 450000,
      image: "/placeholder.svg", 
      isAvailable: false,
      priceRange: "R$ 70k - 100k",
      rating: 4.7,
      pastShows: 203,
      bio: "Um dos maiores nomes do pop brasileiro atual"
    }
  ];

  const handleGenreChange = (genre: string, checked: boolean) => {
    if (checked) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(campaign.genre);
    return matchesSearch && matchesGenre;
  });

  const filteredArtists = artists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.genre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(artist.genre);
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent mb-4">
              Explorar
            </h1>
            <p className="text-muted-foreground">
              Descubra campanhas ativas e artistas disponíveis para shows
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar artistas, cidades ou gêneros..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="px-6"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>

            {showFilters && (
              <Card className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Gêneros Musicais</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {genres.map((genre) => (
                        <div key={genre} className="flex items-center space-x-2">
                          <Checkbox
                            id={genre}
                            checked={selectedGenres.includes(genre)}
                            onCheckedChange={(checked) => handleGenreChange(genre, checked as boolean)}
                          />
                          <label htmlFor={genre} className="text-sm cursor-pointer">
                            {genre}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Faixa de Preço (Ingressos)</h3>
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={500}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>R$ {priceRange[0]}</span>
                        <span>R$ {priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Ordenar por</h3>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trending">Tendência</SelectItem>
                        <SelectItem value="deadline">Prazo final</SelectItem>
                        <SelectItem value="progress">Progresso</SelectItem>
                        <SelectItem value="supporters">Apoiadores</SelectItem>
                        <SelectItem value="amount">Valor arrecadado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            )}
          </div>

          <Tabs defaultValue="campaigns" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger value="campaigns" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Campanhas
              </TabsTrigger>
              <TabsTrigger value="artists" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                Artistas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="campaigns" className="mt-8">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-muted-foreground">
                  {filteredCampaigns.length} campanhas encontradas
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="cursor-pointer">🔥 Tendência</Badge>
                  <Badge variant="outline" className="cursor-pointer">⏰ Acabando</Badge>
                  <Badge variant="outline" className="cursor-pointer">🎯 Quase lá</Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCampaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} {...campaign} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="artists" className="mt-8">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-muted-foreground">
                  {filteredArtists.length} artistas encontrados
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="cursor-pointer">✅ Disponível</Badge>
                  <Badge variant="outline" className="cursor-pointer">🔥 Popular</Badge>
                  <Badge variant="outline" className="cursor-pointer">💡 Sugerido</Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArtists.map((artist) => (
                  <Card key={artist.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 bg-gradient-to-br from-music-purple to-music-pink rounded-full flex items-center justify-center">
                            <Music className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{artist.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{artist.genre}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {artist.bio}
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Ouvintes mensais</p>
                          <p className="font-semibold">{(artist.monthlyListeners / 1000).toFixed(0)}k</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Shows realizados</p>
                          <p className="font-semibold">{artist.pastShows}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Avaliação</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{artist.rating}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Faixa de cachê</p>
                          <p className="font-semibold text-xs">{artist.priceRange}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge variant={artist.isAvailable ? "success" : "secondary"}>
                          {artist.isAvailable ? "Disponível" : "Indisponível"}
                        </Badge>
                        <Badge variant="outline">{artist.genre}</Badge>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1" size="sm">
                          Ver Perfil
                        </Button>
                        <Button 
                          variant="hero" 
                          className="flex-1" 
                          size="sm"
                          disabled={!artist.isAvailable}
                        >
                          Criar Campanha
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Explore;
