import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Vote, 
  TrendingUp, 
  Users, 
  MapPin, 
  Plus,
  Search,
  Music,
  Star,
  Heart,
  Award,
  Crown
} from "lucide-react";
import Header from "@/components/Header";

const Voting = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [votedArtists, setVotedArtists] = useState<number[]>([]);

  const topArtistsByCity = {
    "São Paulo": [
      { id: 1, name: "Jão", votes: 2547, percentage: 35, genre: "Pop", trending: true },
      { id: 2, name: "Vintage Culture", votes: 1834, percentage: 25, genre: "Eletrônica", trending: false },
      { id: 3, name: "Pabllo Vittar", votes: 1456, percentage: 20, genre: "Pop", trending: true },
      { id: 4, name: "Alok", votes: 1098, percentage: 15, genre: "Eletrônica", trending: false },
      { id: 5, name: "Anitta", votes: 365, percentage: 5, genre: "Pop", trending: false }
    ],
    "Rio de Janeiro": [
      { id: 6, name: "Ludmilla", votes: 1876, percentage: 32, genre: "Funk", trending: true },
      { id: 7, name: "Thiaguinho", votes: 1543, percentage: 26, genre: "Pagode", trending: false },
      { id: 8, name: "Iza", votes: 1234, percentage: 21, genre: "Pop/R&B", trending: true },
      { id: 9, name: "Marcelo D2", votes: 876, percentage: 15, genre: "Rap", trending: false },
      { id: 10, name: "Caetano Veloso", votes: 359, percentage: 6, genre: "MPB", trending: false }
    ],
    "Belo Horizonte": [
      { id: 11, name: "Lagum", votes: 1234, percentage: 28, genre: "Indie Pop", trending: true },
      { id: 12, name: "Skank", votes: 1089, percentage: 25, genre: "Rock", trending: false },
      { id: 13, name: "14 Bis", votes: 891, percentage: 20, genre: "MPB", trending: false },
      { id: 14, name: "Jota Quest", votes: 756, percentage: 17, genre: "Rock", trending: false },
      { id: 15, name: "Clube da Esquina", votes: 434, percentage: 10, genre: "MPB", trending: false }
    ]
  };

  const globalTrending = [
    { id: 1, name: "Bad Bunny", votes: 15670, genre: "Reggaeton", country: "Internacional" },
    { id: 2, name: "Taylor Swift", votes: 14892, genre: "Pop", country: "Internacional" },
    { id: 3, name: "Jão", votes: 8934, genre: "Pop", country: "Brasil" },
    { id: 4, name: "Dua Lipa", votes: 7823, genre: "Pop", country: "Internacional" },
    { id: 5, name: "Lagum", votes: 6745, genre: "Indie Pop", country: "Brasil" }
  ];

  const myVotes = [
    { id: 1, artist: "Jão", city: "São Paulo", votedAt: "2024-02-15", position: 1 },
    { id: 2, artist: "Lagum", city: "Belo Horizonte", votedAt: "2024-02-10", position: 1 },
    { id: 3, artist: "Ludmilla", city: "Rio de Janeiro", votedAt: "2024-02-08", position: 1 }
  ];

  const cities = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília", "Porto Alegre", "Curitiba"];

  const handleVote = (artistId: number) => {
    if (!votedArtists.includes(artistId)) {
      setVotedArtists([...votedArtists, artistId]);
      // In a real app, this would make an API call
    }
  };

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Award className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="w-5 text-center font-bold text-muted-foreground">{position}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent mb-4">
              Votação da Comunidade
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vote nos artistas que você mais quer ver na sua cidade. Sua opinião ajuda a priorizar as próximas campanhas!
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar artistas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Todas as cidades" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todas as cidades</SelectItem>
                {cities.map(city => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="local" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="local">Por Cidade</TabsTrigger>
              <TabsTrigger value="trending">Tendências</TabsTrigger>
              <TabsTrigger value="suggest">Sugerir Artista</TabsTrigger>
              <TabsTrigger value="myvotes">Meus Votos</TabsTrigger>
            </TabsList>

            <TabsContent value="local" className="mt-8">
              <div className="space-y-8">
                {Object.entries(topArtistsByCity).map(([city, artists]) => {
                  if (selectedCity && selectedCity !== city) return null;
                  
                  return (
                    <Card key={city}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-music-purple" />
                            <CardTitle className="text-xl">{city}</CardTitle>
                          </div>
                          <Badge variant="outline">
                            {artists.reduce((sum, artist) => sum + artist.votes, 0)} votos totais
                          </Badge>
                        </div>
                        <CardDescription>
                          Artistas mais votados para shows em {city}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {artists.map((artist, index) => (
                            <div key={artist.id} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent transition-colors">
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                <div className="flex items-center justify-center w-8">
                                  {getPositionIcon(index + 1)}
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold">{artist.name}</h4>
                                    {artist.trending && (
                                      <Badge variant="secondary" className="text-xs">
                                        🔥 Tendência
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground">{artist.genre}</p>
                                  <div className="flex items-center gap-4 mt-2">
                                    <div className="flex-1">
                                      <div className="flex justify-between text-sm mb-1">
                                        <span>{artist.votes} votos</span>
                                        <span>{artist.percentage}%</span>
                                      </div>
                                      <Progress value={artist.percentage} className="h-2" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <Button
                                variant={votedArtists.includes(artist.id) ? "secondary" : "outline"}
                                size="sm"
                                onClick={() => handleVote(artist.id)}
                                disabled={votedArtists.includes(artist.id)}
                                className="shrink-0"
                              >
                                {votedArtists.includes(artist.id) ? (
                                  <>
                                    <Heart className="h-4 w-4 mr-2 fill-current" />
                                    Votado
                                  </>
                                ) : (
                                  <>
                                    <Vote className="h-4 w-4 mr-2" />
                                    Votar
                                  </>
                                )}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="trending" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-music-pink" />
                    Tendências Globais
                  </CardTitle>
                  <CardDescription>
                    Os artistas mais votados em todas as cidades
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {globalTrending.map((artist, index) => (
                      <div key={artist.id} className="flex items-center gap-4 p-4 rounded-lg border">
                        <div className="flex items-center justify-center w-8">
                          {getPositionIcon(index + 1)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{artist.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {artist.country}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{artist.genre}</p>
                          <p className="text-sm font-medium mt-1">{artist.votes.toLocaleString()} votos</p>
                        </div>
                        
                        <Button
                          variant={votedArtists.includes(artist.id) ? "secondary" : "outline"}
                          size="sm"
                          onClick={() => handleVote(artist.id)}
                          disabled={votedArtists.includes(artist.id)}
                        >
                          {votedArtists.includes(artist.id) ? (
                            <>
                              <Heart className="h-4 w-4 mr-2 fill-current" />
                              Votado
                            </>
                          ) : (
                            <>
                              <Vote className="h-4 w-4 mr-2" />
                              Votar
                            </>
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="suggest" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5 text-music-purple" />
                    Sugerir Novo Artista
                  </CardTitle>
                  <CardDescription>
                    Não encontrou seu artista favorito? Sugira para a comunidade votar!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome do Artista/Banda</label>
                      <Input placeholder="Ex: Arctic Monkeys" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Gênero Musical</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o gênero" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rock">Rock</SelectItem>
                          <SelectItem value="pop">Pop</SelectItem>
                          <SelectItem value="indie">Indie</SelectItem>
                          <SelectItem value="electronic">Eletrônica</SelectItem>
                          <SelectItem value="sertanejo">Sertanejo</SelectItem>
                          <SelectItem value="funk">Funk</SelectItem>
                          <SelectItem value="rap">Rap/Hip-Hop</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Cidade Desejada</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a cidade" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map(city => (
                            <SelectItem key={city} value={city}>{city}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Link do Spotify (opcional)</label>
                      <Input placeholder="https://open.spotify.com/artist/..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Por que este artista?</label>
                    <Input placeholder="Conte por que a comunidade deveria votar neste artista..." />
                  </div>
                  <Button variant="hero" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Sugerir Artista
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="myvotes" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-music-pink" />
                    Meus Votos
                  </CardTitle>
                  <CardDescription>
                    Acompanhe o progresso dos artistas que você votou
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {myVotes.length > 0 ? (
                    <div className="space-y-4">
                      {myVotes.map((vote) => (
                        <div key={vote.id} className="flex items-center justify-between p-4 rounded-lg border">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-8">
                              {getPositionIcon(vote.position)}
                            </div>
                            <div>
                              <h4 className="font-semibold">{vote.artist}</h4>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                <span>{vote.city}</span>
                                <span>•</span>
                                <span>Votado em {new Date(vote.votedAt).toLocaleDateString('pt-BR')}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={vote.position === 1 ? "success" : "secondary"}>
                              {vote.position === 1 ? "1º lugar" : `${vote.position}º lugar`}
                            </Badge>
                            <Button variant="outline" size="sm">
                              Ver Detalhes
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Vote className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Você ainda não votou</h3>
                      <p className="text-muted-foreground mb-4">
                        Comece votando nos seus artistas favoritos!
                      </p>
                      <Button variant="hero">Explorar Votações</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Voting;