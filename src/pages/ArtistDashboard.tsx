import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Music, 
  Users, 
  Calendar, 
  MapPin, 
  Heart,
  Share2,
  TrendingUp,
  DollarSign,
  MessageCircle,
  Settings,
  Instagram,
  Youtube,
  Music2,
  Star,
  Edit,
  Camera,
  Plus,
  Mail,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";

const ArtistDashboard = () => {
  const { user, login } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  // Auto-login as artist when accessing artist dashboard
  useEffect(() => {
    if (!user) {
      login('artist');
    }
  }, [user, login]);

  // Mock data para a banda
  const artistData = {
    name: "Dream Theater",
    genre: "Metal Progressivo",
    bio: "Banda americana de metal progressivo formada em 1985. Pioneiros do gênero com álbuns aclamados como 'Images and Words' e 'Metropolis Pt. 2'.",
    image: "/placeholder.svg",
    monthlyListeners: 850000,
    followers: 125000,
    location: "Nova York, EUA",
    email: "contato@dreamtheater.com",
    phone: "+1 (555) 123-4567",
    social: {
      instagram: "@dreamtheater",
      youtube: "/dreamtheater",
      spotify: "4f9a0c1234567890"
    },
    stats: {
      totalShows: 2456,
      totalFans: 850000,
      campaignsActive: 3,
      totalRaised: 1250000
    }
  };

  const activeCampaigns = [
    {
      id: 1,
      city: "São Paulo",
      venue: "Allianz Parque",
      targetAmount: 300000,
      currentAmount: 185000,
      supporters: 1850,
      daysLeft: 25,
      status: "active"
    },
    {
      id: 2,
      city: "Rio de Janeiro", 
      venue: "Rock in Rio",
      targetAmount: 450000,
      currentAmount: 287000,
      supporters: 2890,
      daysLeft: 45,
      status: "active"
    },
    {
      id: 3,
      city: "Belo Horizonte",
      venue: "Mineirão",
      targetAmount: 250000,
      currentAmount: 98000,
      supporters: 987,
      daysLeft: 18,
      status: "pending"
    }
  ];

  const recentMessages = [
    {
      id: 1,
      user: "João Silva",
      message: "Quando vão tocar 'Pull Me Under' no show de SP?",
      time: "2h atrás",
      city: "São Paulo"
    },
    {
      id: 2,
      user: "Maria Santos",
      message: "Obrigada por trazerem o prog metal para o Brasil! 🤘",
      time: "5h atrás",
      city: "Rio de Janeiro"
    },
    {
      id: 3,
      user: "Carlos Metal",
      message: "Setlist vai incluir músicas do novo álbum?",
      time: "1d atrás",
      city: "São Paulo"
    }
  ];

  const upcomingShows = [
    {
      id: 1,
      city: "São Paulo",
      venue: "Allianz Parque",
      date: "2024-04-15",
      time: "20:00",
      status: "confirmed",
      ticketsSold: 35000,
      capacity: 45000
    },
    {
      id: 2,
      city: "Rio de Janeiro",
      venue: "Rock in Rio",
      date: "2024-06-20",
      time: "22:00", 
      status: "pending",
      ticketsSold: 0,
      capacity: 100000
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header da Banda */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={artistData.image} alt={artistData.name} />
                  <AvatarFallback className="text-2xl">{artistData.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="absolute -bottom-2 -right-2"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h1 className="text-4xl font-bold">{artistData.name}</h1>
                  <Badge variant="secondary" className="bg-music-purple text-white">
                    {artistData.genre}
                  </Badge>
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Editar Perfil
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {artistData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Music className="h-4 w-4" />
                    {artistData.monthlyListeners.toLocaleString()} ouvintes/mês
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {artistData.followers.toLocaleString()} seguidores
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 max-w-2xl">
                  {artistData.bio}
                </p>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm">
                    <Youtube className="h-4 w-4 mr-2" />
                    YouTube
                  </Button>
                  <Button variant="outline" size="sm">
                    <Music2 className="h-4 w-4 mr-2" />
                    Spotify
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Shows Realizados</CardTitle>
                <Music className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{artistData.stats.totalShows}</div>
                <p className="text-xs text-muted-foreground">+12 este ano</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Fãs</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{artistData.stats.totalFans.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">+8.2% este mês</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Campanhas Ativas</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{artistData.stats.campaignsActive}</div>
                <p className="text-xs text-muted-foreground">2 confirmadas</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Arrecadado</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ {(artistData.stats.totalRaised / 1000)}k</div>
                <p className="text-xs text-muted-foreground">Últimos 12 meses</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="campaigns" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
              <TabsTrigger value="shows">Shows</TabsTrigger>
              <TabsTrigger value="fans">Fãs</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Configurações</TabsTrigger>
            </TabsList>

            <TabsContent value="campaigns" className="mt-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Suas Campanhas</h3>
                  <Button variant="hero">
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Campanha
                  </Button>
                </div>

                <div className="grid gap-6">
                  {activeCampaigns.map((campaign) => {
                    const progress = (campaign.currentAmount / campaign.targetAmount) * 100;
                    return (
                      <Card key={campaign.id}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-music-purple" />
                                {campaign.city}
                              </CardTitle>
                              <CardDescription>{campaign.venue}</CardDescription>
                            </div>
                            <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                              {campaign.status === 'active' ? 'Ativa' : 'Pendente'}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                              <span>Progresso</span>
                              <span>R$ {campaign.currentAmount.toLocaleString()} / R$ {campaign.targetAmount.toLocaleString()}</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                            <div className="flex justify-between items-center">
                              <div className="flex gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  {campaign.supporters} apoiadores
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {campaign.daysLeft} dias restantes
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">Ver Detalhes</Button>
                                <Button variant="outline" size="sm">
                                  <Share2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="shows" className="mt-8">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Próximos Shows</h3>
                <div className="space-y-4">
                  {upcomingShows.map((show) => (
                    <Card key={show.id}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <h4 className="font-semibold">{show.city}</h4>
                            <p className="text-sm text-muted-foreground">{show.venue}</p>
                            <p className="text-sm">{new Date(show.date).toLocaleDateString('pt-BR')} às {show.time}</p>
                          </div>
                          <div className="text-right space-y-2">
                            <Badge variant={show.status === 'confirmed' ? 'default' : 'secondary'}>
                              {show.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                            </Badge>
                            <p className="text-sm text-muted-foreground">
                              {show.ticketsSold.toLocaleString()} / {show.capacity.toLocaleString()} ingressos
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fans" className="mt-8">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Mensagens dos Fãs</h3>
                <div className="space-y-4">
                  {recentMessages.map((message) => (
                    <Card key={message.id}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="text-xs">{message.user.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">{message.user}</p>
                              <p className="text-xs text-muted-foreground">{message.city}</p>
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">{message.time}</span>
                        </div>
                        <p className="text-sm">{message.message}</p>
                        <div className="flex gap-2 mt-3">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Responder
                          </Button>
                          <Button variant="outline" size="sm">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Crescimento de Seguidores</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-muted-foreground">
                      [Gráfico de crescimento de seguidores]
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Performance das Campanhas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-muted-foreground">
                      [Gráfico de performance das campanhas]
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-8">
              <div className="space-y-6 max-w-2xl">
                <Card>
                  <CardHeader>
                    <CardTitle>Informações da Banda</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome da Banda</label>
                      <Input defaultValue={artistData.name} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Gênero Musical</label>
                      <Input defaultValue={artistData.genre} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Biografia</label>
                      <Textarea defaultValue={artistData.bio} rows={4} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Localização</label>
                      <Input defaultValue={artistData.location} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contato</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input defaultValue={artistData.email} type="email" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Telefone</label>
                      <Input defaultValue={artistData.phone} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Redes Sociais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Instagram</label>
                      <Input defaultValue={artistData.social.instagram} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">YouTube</label>
                      <Input defaultValue={artistData.social.youtube} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Spotify ID</label>
                      <Input defaultValue={artistData.social.spotify} />
                    </div>
                  </CardContent>
                </Card>

                <Button variant="hero" className="w-full">
                  Salvar Alterações
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ArtistDashboard;