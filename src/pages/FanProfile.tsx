import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import { 
  Trophy, 
  Medal, 
  Crown, 
  Users, 
  MapPin, 
  Calendar,
  Music,
  Star,
  Heart,
  MessageCircle,
  Share2,
  Music2,
  BarChart3,
  Award
} from "lucide-react";

const FanProfile = () => {
  const { id } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);

  // Mock data - In real app, this would come from API based on ID
  const fanProfiles = {
    "1": {
      id: 1,
      name: "Marina Silva",
      avatar: "/placeholder.svg",
      points: 2450,
      level: "Superfã",
      campaignsSupported: 15,
      showsAttended: 12,
      city: "São Paulo",
      joinedAt: "2023-03-15",
      badges: ["Pioneira", "Fã Dedicada", "Líder da Comunidade"],
      bio: "Apaixonada por música desde criança. Adoro descobrir novos artistas e apoiar a cena musical brasileira. Sempre presente nos shows que ajudo a trazer!",
      followers: 342,
      following: 128,
      favoriteGenres: ["Rock", "Pop", "Indie", "MPB"],
      stats: {
        totalSpent: 2840,
        averageSupport: 95,
        successfulCampaigns: 13
      }
    },
    "2": {
      id: 2,
      name: "Carlos Santos",
      avatar: "/placeholder.svg", 
      points: 2180,
      level: "Entusiasta",
      campaignsSupported: 12,
      showsAttended: 10,
      city: "Rio de Janeiro",
      joinedAt: "2023-05-20",
      badges: ["Explorer Musical", "Apoiador Fiel"],
      bio: "Músico amador e eterno fã de boa música. Acredito no poder da música para unir pessoas e transformar comunidades.",
      followers: 187,
      following: 95,
      favoriteGenres: ["Rock", "Blues", "Jazz"],
      stats: {
        totalSpent: 1950,
        averageSupport: 80,
        successfulCampaigns: 10
      }
    }
  };

  const fan = fanProfiles[id as keyof typeof fanProfiles] || fanProfiles["1"];

  const recentActivity = [
    {
      id: 1,
      type: "support",
      description: "Apoiou a campanha do Dream Theater",
      amount: "R$ 120",
      date: "2 dias atrás",
      icon: <Heart className="h-4 w-4 text-red-500" />
    },
    {
      id: 2,
      type: "show",
      description: "Compareceu ao show do Iron Maiden",
      date: "1 semana atrás",
      icon: <Music className="h-4 w-4 text-music-purple" />
    },
    {
      id: 3,
      type: "achievement",
      description: "Desbloqueou conquista 'Fã Dedicada'",
      date: "2 semanas atrás",
      icon: <Award className="h-4 w-4 text-yellow-500" />
    },
    {
      id: 4,
      type: "support",
      description: "Apoiou a campanha do Fresno",
      amount: "R$ 85",
      date: "3 semanas atrás",
      icon: <Heart className="h-4 w-4 text-red-500" />
    }
  ];

  const supportedCampaigns = [
    {
      id: 1,
      artist: "Dream Theater",
      city: "São Paulo",
      amount: 120,
      status: "Concluída",
      date: "Jan 2024"
    },
    {
      id: 2,
      artist: "Iron Maiden",
      city: "São Paulo",
      amount: 150,
      status: "Concluída",
      date: "Dez 2023"
    },
    {
      id: 3,
      artist: "Fresno",
      city: "Campinas",
      amount: 85,
      status: "Em andamento",
      date: "Fev 2024"
    }
  ];

  const getLevelBadge = (level: string) => {
    const levelConfig = {
      "Superfã": { variant: "success" as const, icon: "👑" },
      "Entusiasta": { variant: "secondary" as const, icon: "🌟" },
      "Ativo": { variant: "outline" as const, icon: "🎵" },
      "Iniciante": { variant: "outline" as const, icon: "🎭" }
    };
    
    const config = levelConfig[level as keyof typeof levelConfig] || levelConfig["Iniciante"];
    
    return (
      <Badge variant={config.variant} className="gap-1">
        <span>{config.icon}</span>
        {level}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={fan.avatar} alt={fan.name} />
                    <AvatarFallback className="text-2xl">{fan.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2">
                    <Crown className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">{fan.name}</h1>
                    {getLevelBadge(fan.level)}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {fan.city}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Membro desde {new Date(fan.joinedAt).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{fan.bio}</p>
                  
                  <div className="flex items-center gap-6 mb-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-music-purple">{fan.followers}</div>
                      <div className="text-sm text-muted-foreground">Seguidores</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-music-purple">{fan.following}</div>
                      <div className="text-sm text-muted-foreground">Seguindo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-music-purple">{fan.points.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Pontos</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {fan.badges.map((badge, index) => (
                      <Badge key={index} variant="outline" className="gap-1">
                        <Award className="h-3 w-3" />
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Button 
                    variant={isFollowing ? "outline" : "default"}
                    onClick={() => setIsFollowing(!isFollowing)}
                    className="w-32"
                  >
                    {isFollowing ? "Seguindo" : "Seguir"}
                  </Button>
                  <Button variant="outline" size="icon">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-music-purple/10 rounded-lg">
                    <Heart className="h-6 w-6 text-music-purple" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{fan.campaignsSupported}</div>
                    <div className="text-sm text-muted-foreground">Campanhas Apoiadas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-music-pink/10 rounded-lg">
                    <Music2 className="h-6 w-6 text-music-pink" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{fan.showsAttended}</div>
                    <div className="text-sm text-muted-foreground">Shows Assistidos</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">R$ {fan.stats.totalSpent.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Total Investido</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/10 rounded-lg">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{fan.stats.successfulCampaigns}</div>
                    <div className="text-sm text-muted-foreground">Campanhas Exitosas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs Content */}
          <Tabs defaultValue="activity" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="activity">Atividade</TabsTrigger>
              <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
              <TabsTrigger value="preferences">Preferências</TabsTrigger>
            </TabsList>
            
            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Atividade Recente</CardTitle>
                  <CardDescription>
                    Acompanhe as últimas ações de {fan.name} na plataforma
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        {activity.icon}
                        <div className="flex-1">
                          <p className="font-medium">{activity.description}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{activity.date}</span>
                            {activity.amount && (
                              <>
                                <span>•</span>
                                <span className="text-green-600 font-medium">{activity.amount}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="campaigns" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Campanhas Apoiadas</CardTitle>
                  <CardDescription>
                    Todas as campanhas que {fan.name} apoiou
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {supportedCampaigns.map((campaign) => (
                      <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Music className="h-8 w-8 text-music-purple" />
                          <div>
                            <h4 className="font-medium">{campaign.artist}</h4>
                            <p className="text-sm text-muted-foreground">{campaign.city} • {campaign.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-600">R$ {campaign.amount}</div>
                          <Badge variant={campaign.status === "Concluída" ? "success" : "secondary"}>
                            {campaign.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Gêneros Favoritos</CardTitle>
                  <CardDescription>
                    Estilos musicais preferidos de {fan.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {fan.favoriteGenres.map((genre, index) => (
                      <Badge key={index} variant="outline" className="gap-1">
                        <Music className="h-3 w-3" />
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Estatísticas de Apoio</CardTitle>
                  <CardDescription>
                    Métricas de contribuição para a comunidade
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Taxa de Sucesso</span>
                      <span className="font-medium">{Math.round((fan.stats.successfulCampaigns / fan.campaignsSupported) * 100)}%</span>
                    </div>
                    <Progress value={(fan.stats.successfulCampaigns / fan.campaignsSupported) * 100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Valor Médio de Apoio</span>
                      <span className="font-medium">R$ {fan.stats.averageSupport}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Nível de Engajamento</span>
                      <span className="font-medium">Alto</span>
                    </div>
                    <Progress value={85} className="h-2" />
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

export default FanProfile;