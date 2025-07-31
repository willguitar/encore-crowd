import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Trophy, 
  Star, 
  Music, 
  MapPin,
  Plus,
  Heart,
  Ticket
} from "lucide-react";
import Header from "@/components/Header";
import CampaignCard from "@/components/CampaignCard";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  // Redirect based on user type
  useEffect(() => {
    if (user) {
      switch (user.type) {
        case 'producer':
          window.location.href = '/producer-dashboard';
          break;
        case 'artist':
          window.location.href = '/artist-dashboard';
          break;
        case 'fan':
        default:
          // Stay on current dashboard for fans
          break;
      }
    }
  }, [user]);

  const userStats = {
    campaignsSupported: 12,
    showsAttended: 8,
    totalSpent: 2450,
    level: "Superfã",
    points: 1250,
    nextLevelPoints: 1500,
    achievements: [
      { id: 1, name: "Primeiro Apoio", description: "Apoiou sua primeira campanha", icon: "🎵", unlocked: true },
      { id: 2, name: "Fã Dedicado", description: "Apoiou 5 campanhas", icon: "🌟", unlocked: true },
      { id: 3, name: "Líder da Comunidade", description: "Criou 3 campanhas bem-sucedidas", icon: "👑", unlocked: false },
      { id: 4, name: "Explorador Musical", description: "Apoiou bandas de 5 gêneros diferentes", icon: "🎭", unlocked: true }
    ]
  };

  const supportedCampaigns = [
    {
      id: 1,
      artist: "Fresno",
      city: "Campinas",
      venue: "Arena Corporativa",
      currentAmount: 48500,
      targetAmount: 65000,
      supporters: 387,
      daysLeft: 12,
      image: "/placeholder.svg",
      genre: "Rock",
      status: "active",
      myContribution: 150
    },
    {
      id: 2,
      artist: "Lagum",
      city: "Belo Horizonte",
      venue: "Esplanada Mineirão",
      currentAmount: 75000,
      targetAmount: 70000,
      supporters: 892,
      daysLeft: 0,
      image: "/placeholder.svg",
      genre: "Indie Pop",
      status: "completed",
      myContribution: 80
    }
  ];

  const upcomingShows = [
    {
      id: 1,
      artist: "Lagum",
      date: "2024-03-15",
      time: "20:00",
      venue: "Esplanada Mineirão",
      city: "Belo Horizonte",
      ticketType: "Premium"
    }
  ];

  const recommendations = [
    {
      id: 3,
      artist: "Dream Theater",
      city: "São Paulo",
      venue: "Allianz Parque",
      currentAmount: 185000,
      targetAmount: 300000,
      supporters: 1250,
      daysLeft: 25,
      image: "/placeholder.svg",
      genre: "Pop",
      spotifyMatch: 92
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">Bem-vindo, Marina!</h1>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="success">{userStats.level}</Badge>
                  <span className="text-muted-foreground">Nível 4</span>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Music className="h-5 w-5 text-music-purple" />
                  <div>
                    <p className="text-2xl font-bold">{userStats.campaignsSupported}</p>
                    <p className="text-sm text-muted-foreground">Campanhas apoiadas</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-music-pink" />
                  <div>
                    <p className="text-2xl font-bold">{userStats.showsAttended}</p>
                    <p className="text-sm text-muted-foreground">Shows assistidos</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-music-success" />
                  <div>
                    <p className="text-2xl font-bold">R$ {userStats.totalSpent}</p>
                    <p className="text-sm text-muted-foreground">Total investido</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="text-2xl font-bold">{userStats.points}</p>
                    <p className="text-sm text-muted-foreground">Pontos ShowFund</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="campaigns">Minhas Campanhas</TabsTrigger>
              <TabsTrigger value="tickets">Meus Ingressos</TabsTrigger>
              <TabsTrigger value="achievements">Conquistas</TabsTrigger>
              <TabsTrigger value="recommendations">Para Você</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  {/* Level Progress */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        Progresso do Nível
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Nível 4 - {userStats.level}</span>
                          <span className="text-sm text-muted-foreground">
                            {userStats.points}/{userStats.nextLevelPoints} pontos
                          </span>
                        </div>
                        <Progress value={(userStats.points / userStats.nextLevelPoints) * 100} />
                        <p className="text-sm text-muted-foreground">
                          Faltam {userStats.nextLevelPoints - userStats.points} pontos para o próximo nível
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Atividade Recente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 bg-music-success rounded-full"></div>
                          <p className="text-sm">Apoiou a campanha do <strong>Fresno</strong> em Campinas</p>
                          <span className="text-xs text-muted-foreground ml-auto">2 dias atrás</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 bg-music-purple rounded-full"></div>
                          <p className="text-sm">Show do <strong>Lagum</strong> foi confirmado!</p>
                          <span className="text-xs text-muted-foreground ml-auto">5 dias atrás</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 bg-music-pink rounded-full"></div>
                          <p className="text-sm">Desbloqueou a conquista <strong>"Fã Dedicado"</strong></p>
                          <span className="text-xs text-muted-foreground ml-auto">1 semana atrás</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  {/* Next Show */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-music-purple" />
                        Próximo Show
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {upcomingShows.length > 0 ? (
                        <div className="space-y-3">
                          {upcomingShows.map((show) => (
                            <div key={show.id} className="space-y-2">
                              <h4 className="font-semibold">{show.artist}</h4>
                              <div className="text-sm text-muted-foreground space-y-1">
                                <p className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(show.date).toLocaleDateString('pt-BR')} às {show.time}
                                </p>
                                <p className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {show.venue}, {show.city}
                                </p>
                              </div>
                              <Badge variant="outline">{show.ticketType}</Badge>
                            </div>
                          ))}
                          <Button variant="outline" className="w-full" size="sm">
                            Ver Ingresso
                          </Button>
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-center py-4">
                          Nenhum show agendado
                        </p>
                      )}
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Ações Rápidas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="hero" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Criar Campanha
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Music className="h-4 w-4 mr-2" />
                        Explorar Artistas
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Users className="h-4 w-4 mr-2" />
                        Ranking da Comunidade
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="campaigns" className="mt-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Campanhas que Apoiei</h2>
                  <Button variant="hero">
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Campanha
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {supportedCampaigns.map((campaign) => (
                    <Card key={campaign.id} className="overflow-hidden">
                      <div className="relative">
                        <CampaignCard {...campaign} />
                        <div className="absolute top-4 right-4">
                          <Badge variant={campaign.status === 'completed' ? 'success' : 'secondary'}>
                            {campaign.status === 'completed' ? 'Confirmado' : 'Ativo'}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <Badge variant="outline" className="bg-white/90">
                            Minha contribuição: R$ {campaign.myContribution}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tickets" className="mt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Meus Ingressos</h2>
                
                <Tabs defaultValue="upcoming">
                  <TabsList>
                    <TabsTrigger value="upcoming">Próximos Shows</TabsTrigger>
                    <TabsTrigger value="past">Shows Anteriores</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upcoming" className="mt-6">
                    {upcomingShows.length > 0 ? (
                      <div className="grid gap-4">
                        {upcomingShows.map((show) => (
                          <Card key={show.id} className="p-6">
                            <div className="flex justify-between items-start">
                              <div className="space-y-2">
                                <h3 className="text-xl font-bold">{show.artist}</h3>
                                <div className="space-y-1 text-muted-foreground">
                                  <p className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(show.date).toLocaleDateString('pt-BR')} às {show.time}
                                  </p>
                                  <p className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    {show.venue}, {show.city}
                                  </p>
                                </div>
                                <Badge variant="outline">{show.ticketType}</Badge>
                              </div>
                              <Button variant="hero">Ver Ingresso</Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Ticket className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">Nenhum show próximo</h3>
                        <p className="text-muted-foreground mb-4">Apoie mais campanhas para garantir seus ingressos!</p>
                        <Button variant="hero">Explorar Campanhas</Button>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="past" className="mt-6">
                    <div className="text-center py-12">
                      <Music className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Histórico de shows</h3>
                      <p className="text-muted-foreground">Seus shows anteriores aparecerão aqui</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-6">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Suas Conquistas</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {userStats.achievements.map((achievement) => (
                    <Card key={achievement.id} className={`p-4 ${achievement.unlocked ? 'bg-gradient-to-br from-music-purple/10 to-music-pink/10' : 'opacity-60'}`}>
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{achievement.name}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          <Badge 
                            variant={achievement.unlocked ? "success" : "secondary"} 
                            className="mt-2"
                          >
                            {achievement.unlocked ? "Desbloqueada" : "Bloqueada"}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="recommendations" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Recomendações Para Você</h2>
                  <p className="text-muted-foreground">Baseado no seu histórico do Spotify e campanhas apoiadas</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendations.map((campaign) => (
                    <Card key={campaign.id} className="overflow-hidden">
                      <div className="relative">
                        <CampaignCard {...campaign} />
                        <div className="absolute top-4 right-4">
                          <Badge variant="success" className="bg-music-success/90">
                            {campaign.spotifyMatch}% match
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;