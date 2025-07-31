import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Play,
  ExternalLink,
  Heart,
  Share2,
  Star,
  Music,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";
import Header from "@/components/Header";

const ArtistProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const artist = {
    id: 1,
    name: "Fresno",
    genre: "Rock Alternativo",
    bio: "Fresno é uma banda brasileira de rock alternativo formada em 1999, em Porto Alegre. Conhecida por suas letras emotivas e sonoridade única, a banda conquistou uma legião de fãs por todo o Brasil.",
    image: "/placeholder.svg",
    monthlyListeners: 250000,
    followers: 180000,
    isVerified: true,
    isAvailable: true,
    priceRange: "R$ 40.000 - R$ 60.000",
    rating: 4.8,
    totalShows: 145,
    yearsActive: 24,
    baseLocation: "Porto Alegre, RS",
    socialLinks: {
      spotify: "https://spotify.com/fresno",
      instagram: "@fresnooficial",
      youtube: "Fresno Oficial"
    },
    topSongs: [
      { name: "Quebre as Correntes", plays: "15M", duration: "3:45" },
      { name: "Infinito", plays: "12M", duration: "4:12" },
      { name: "Milonga", plays: "8M", duration: "3:28" },
      { name: "Acordar", plays: "6M", duration: "4:01" }
    ],
    stats: {
      avgTicketPrice: 85,
      avgVenueCapacity: 2500,
      completionRate: 94,
      avgRating: 4.8
    }
  };

  const pastCampaigns = [
    {
      id: 1,
      city: "Curitiba",
      venue: "Ópera de Arame",
      date: "2024-01-15",
      raised: 45000,
      target: 45000,
      supporters: 567,
      status: "completed"
    },
    {
      id: 2,
      city: "Florianópolis", 
      venue: "P12 Floripa",
      date: "2023-11-20",
      raised: 38000,
      target: 40000,
      supporters: 456,
      status: "completed"
    },
    {
      id: 3,
      city: "Campinas",
      venue: "Arena Corporativa", 
      date: "Em andamento",
      raised: 48500,
      target: 65000,
      supporters: 387,
      status: "active"
    }
  ];

  const upcomingShows = [
    {
      id: 1,
      city: "Campinas",
      venue: "Arena Corporativa",
      date: "2024-04-15",
      time: "20:00",
      ticketsAvailable: true
    }
  ];

  const reviews = [
    {
      id: 1,
      user: "Marina Silva",
      rating: 5,
      comment: "Show incrível! A banda estava em excelente forma e a interação com o público foi fantástica.",
      date: "2024-01-16",
      event: "Curitiba - Ópera de Arame"
    },
    {
      id: 2,
      user: "Carlos Santos",
      rating: 5,
      comment: "Uma das melhores apresentações que já vi. Som perfeito e energia contagiante!",
      date: "2023-11-21", 
      event: "Florianópolis - P12 Floripa"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Artist Header */}
          <div className="relative mb-8">
            <div className="h-64 bg-gradient-to-br from-music-purple via-music-pink to-music-purple rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-end gap-6">
                  <Avatar className="h-24 w-24 border-4 border-white">
                    <AvatarImage src={artist.image} />
                    <AvatarFallback>{artist.name[0]}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-4xl font-bold">{artist.name}</h1>
                      {artist.isVerified && (
                        <CheckCircle className="h-6 w-6 text-blue-400" />
                      )}
                    </div>
                    <p className="text-lg opacity-90 mb-2">{artist.genre}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <span>{(artist.monthlyListeners / 1000).toFixed(0)}k ouvintes mensais</span>
                      <span>{(artist.followers / 1000).toFixed(0)}k seguidores</span>
                      <span>{artist.yearsActive} anos de carreira</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant={isFollowing ? "secondary" : "outline"}
                      onClick={() => setIsFollowing(!isFollowing)}
                      className="text-white border-white hover:bg-white/20"
                    >
                      <Heart className={`h-4 w-4 mr-2 ${isFollowing ? 'fill-current' : ''}`} />
                      {isFollowing ? 'Seguindo' : 'Seguir'}
                    </Button>
                    <Button variant="outline" className="text-white border-white hover:bg-white/20">
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartilhar
                    </Button>
                    <Button variant="hero">
                      Criar Campanha
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-2xl font-bold">{artist.rating}</span>
              </div>
              <p className="text-sm text-muted-foreground">Avaliação média</p>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Music className="h-5 w-5 text-music-purple" />
                <span className="text-2xl font-bold">{artist.totalShows}</span>
              </div>
              <p className="text-sm text-muted-foreground">Shows realizados</p>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-2xl font-bold">{artist.stats.completionRate}%</span>
              </div>
              <p className="text-sm text-muted-foreground">Taxa de sucesso</p>
            </Card>
            
            <Card className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-5 w-5 text-music-pink" />
                <span className="text-2xl font-bold">{artist.stats.avgVenueCapacity}</span>
              </div>
              <p className="text-sm text-muted-foreground">Capacidade média</p>
            </Card>
          </div>

          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="about">Sobre</TabsTrigger>
              <TabsTrigger value="music">Músicas</TabsTrigger>
              <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
              <TabsTrigger value="shows">Shows</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sobre o Artista</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {artist.bio}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Estatísticas de Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Preço médio do ingresso</span>
                            <span className="font-medium">R$ {artist.stats.avgTicketPrice}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Capacidade média</span>
                            <span className="font-medium">{artist.stats.avgVenueCapacity} pessoas</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Taxa de sucesso das campanhas</span>
                          <span className="font-medium">{artist.stats.completionRate}%</span>
                        </div>
                        <Progress value={artist.stats.completionRate} />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Informações</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{artist.baseLocation}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{artist.yearsActive} anos de carreira</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Music className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{artist.genre}</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-3">Disponibilidade</h4>
                        <Badge variant={artist.isAvailable ? "success" : "secondary"}>
                          {artist.isAvailable ? "Disponível para shows" : "Indisponível"}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-2">
                          Faixa de cachê: {artist.priceRange}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Redes Sociais</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Play className="h-4 w-4 mr-2" />
                        Spotify
                        <ExternalLink className="h-3 w-3 ml-auto" />
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Music className="h-4 w-4 mr-2" />
                        Instagram
                        <ExternalLink className="h-3 w-3 ml-auto" />
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Play className="h-4 w-4 mr-2" />
                        YouTube
                        <ExternalLink className="h-3 w-3 ml-auto" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="music" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Músicas no Spotify</CardTitle>
                  <CardDescription>As faixas mais populares do artista</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {artist.topSongs.map((song, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors">
                        <div className="flex items-center gap-4">
                          <span className="w-6 text-center font-medium text-muted-foreground">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="font-medium">{song.name}</h4>
                            <p className="text-sm text-muted-foreground">{song.plays} reproduções</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-muted-foreground">{song.duration}</span>
                          <Button variant="ghost" size="sm">
                            <Play className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="campaigns" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Campanhas Passadas e Atuais</CardTitle>
                    <CardDescription>Histórico de campanhas do artista</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pastCampaigns.map((campaign) => (
                        <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="space-y-1">
                            <h4 className="font-medium">{campaign.city} - {campaign.venue}</h4>
                            <p className="text-sm text-muted-foreground">
                              {campaign.status === 'active' ? campaign.date : new Date(campaign.date).toLocaleDateString('pt-BR')}
                            </p>
                            <div className="flex items-center gap-4 text-sm">
                              <span>R$ {campaign.raised.toLocaleString()} arrecadado</span>
                              <span>{campaign.supporters} apoiadores</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant={campaign.status === 'completed' ? 'success' : 'secondary'}>
                              {campaign.status === 'completed' ? 'Concluída' : 'Ativa'}
                            </Badge>
                            <div className="mt-2">
                              <Progress 
                                value={(campaign.raised / campaign.target) * 100} 
                                className="w-24 h-2"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="shows" className="mt-6">
              <div className="space-y-6">
                {upcomingShows.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Próximos Shows</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingShows.map((show) => (
                          <div key={show.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="space-y-1">
                              <h4 className="font-medium">{show.city} - {show.venue}</h4>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(show.date).toLocaleDateString('pt-BR')}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {show.time}
                                </span>
                              </div>
                            </div>
                            <Button variant="hero">
                              {show.ticketsAvailable ? 'Comprar Ingresso' : 'Esgotado'}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle>Shows Anteriores</CardTitle>
                    <CardDescription>Histórico de apresentações</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-8">
                      Histórico completo de shows em desenvolvimento
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Avaliações dos Fãs</CardTitle>
                  <CardDescription>O que os fãs falam sobre os shows</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6 last:border-b-0">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{review.user[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{review.user}</h4>
                              <p className="text-sm text-muted-foreground">{review.event}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {new Date(review.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;