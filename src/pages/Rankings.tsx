import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Trophy, 
  Medal, 
  Crown, 
  TrendingUp, 
  Users, 
  MapPin, 
  Calendar,
  Music,
  Star,
  Award,
  Target,
  Flame
} from "lucide-react";
import Header from "@/components/Header";

const Rankings = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const topSupporters = [
    {
      id: 1,
      name: "Marina Silva",
      avatar: "/placeholder.svg",
      points: 2450,
      level: "Superfã",
      campaignsSupported: 15,
      showsAttended: 12,
      city: "São Paulo",
      joinedAt: "2023-03-15",
      badges: ["Pioneira", "Fã Dedicada", "Líder da Comunidade"]
    },
    {
      id: 2,
      name: "Carlos Santos",
      avatar: "/placeholder.svg", 
      points: 2180,
      level: "Entusiasta",
      campaignsSupported: 12,
      showsAttended: 10,
      city: "Rio de Janeiro",
      joinedAt: "2023-05-20",
      badges: ["Explorer Musical", "Apoiador Fiel"]
    },
    {
      id: 3,
      name: "Ana Costa",
      avatar: "/placeholder.svg",
      points: 1950,
      level: "Entusiasta", 
      campaignsSupported: 11,
      showsAttended: 8,
      city: "Belo Horizonte",
      joinedAt: "2023-04-10",
      badges: ["Descobridora", "Fã Regional"]
    },
    {
      id: 4,
      name: "Pedro Oliveira",
      avatar: "/placeholder.svg",
      points: 1720,
      level: "Ativo",
      campaignsSupported: 9,
      showsAttended: 7,
      city: "Porto Alegre",
      joinedAt: "2023-06-01",
      badges: ["Apoiador Ativo"]
    },
    {
      id: 5,
      name: "Julia Mendes",
      avatar: "/placeholder.svg",
      points: 1680,
      level: "Ativo",
      campaignsSupported: 8,
      showsAttended: 6,
      city: "Curitiba",
      joinedAt: "2023-07-12",
      badges: ["Iniciante Promissor"]
    }
  ];

  const topCampaigns = [
    {
      id: 1,
      artist: "Jão",
      city: "São Paulo",
      raised: 195000,
      target: 200000,
      supporters: 1250,
      completion: 97.5,
      timeToComplete: "18 dias",
      producer: "Eventos SP"
    },
    {
      id: 2,
      artist: "Lagum", 
      city: "Belo Horizonte",
      raised: 75000,
      target: 70000,
      supporters: 892,
      completion: 107.1,
      timeToComplete: "25 dias",
      producer: "MG Produções"
    },
    {
      id: 3,
      artist: "Ludmilla",
      city: "Rio de Janeiro", 
      raised: 68000,
      target: 80000,
      supporters: 756,
      completion: 85.0,
      timeToComplete: "Em andamento",
      producer: "Rio Shows"
    },
    {
      id: 4,
      artist: "Fresno",
      city: "Campinas",
      raised: 48500,
      target: 65000,
      supporters: 387,
      completion: 74.6,
      timeToComplete: "Em andamento", 
      producer: "Eventos SP"
    },
    {
      id: 5,
      artist: "Vintage Culture",
      city: "Rio de Janeiro",
      raised: 89000,
      target: 120000,
      supporters: 567,
      completion: 74.2,
      timeToComplete: "Em andamento",
      producer: "Rio Shows"
    }
  ];

  const topProducers = [
    {
      id: 1,
      name: "Eventos SP Produtora",
      avatar: "/placeholder.svg",
      totalRaised: 485000,
      campaignsCompleted: 8,
      successRate: 94,
      avgRating: 4.8,
      city: "São Paulo",
      experience: "5+ anos"
    },
    {
      id: 2,
      name: "MG Produções",
      avatar: "/placeholder.svg",
      totalRaised: 320000,
      campaignsCompleted: 6,
      successRate: 100,
      avgRating: 4.9,
      city: "Belo Horizonte", 
      experience: "3+ anos"
    },
    {
      id: 3,
      name: "Rio Shows",
      avatar: "/placeholder.svg",
      totalRaised: 275000,
      campaignsCompleted: 5,
      successRate: 87,
      avgRating: 4.7,
      city: "Rio de Janeiro",
      experience: "4+ anos"
    }
  ];

  const regionalStats = [
    {
      region: "São Paulo",
      totalCampaigns: 45,
      totalRaised: 1250000,
      avgSuccess: 89,
      topGenre: "Pop"
    },
    {
      region: "Rio de Janeiro", 
      totalCampaigns: 32,
      totalRaised: 890000,
      avgSuccess: 85,
      topGenre: "Funk"
    },
    {
      region: "Belo Horizonte",
      totalCampaigns: 28,
      totalRaised: 670000,
      avgSuccess: 92,
      topGenre: "Indie"
    },
    {
      region: "Porto Alegre",
      totalCampaigns: 22,
      totalRaised: 520000,
      avgSuccess: 88,
      topGenre: "Rock"
    }
  ];

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">{position}</span>;
    }
  };

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
      
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent mb-4">
              Rankings da Comunidade
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubra quem são os maiores apoiadores, as campanhas de maior sucesso e os produtores top-rated da plataforma
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex gap-4 justify-center">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Esta Semana</SelectItem>
                <SelectItem value="monthly">Este Mês</SelectItem>
                <SelectItem value="quarterly">Últimos 3 Meses</SelectItem>
                <SelectItem value="yearly">Este Ano</SelectItem>
                <SelectItem value="alltime">Todos os Tempos</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Regiões</SelectItem>
                <SelectItem value="sp">São Paulo</SelectItem>
                <SelectItem value="rj">Rio de Janeiro</SelectItem>
                <SelectItem value="mg">Minas Gerais</SelectItem>
                <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                <SelectItem value="pr">Paraná</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="supporters" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="supporters">Top Apoiadores</TabsTrigger>
              <TabsTrigger value="campaigns">Top Campanhas</TabsTrigger>
              <TabsTrigger value="producers">Top Produtores</TabsTrigger>
              <TabsTrigger value="regions">Ranking Regional</TabsTrigger>
            </TabsList>

            <TabsContent value="supporters" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-music-purple" />
                    Maiores Apoiadores da Comunidade
                  </CardTitle>
                  <CardDescription>
                    Fãs que mais contribuem para trazer música ao vivo para suas cidades
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topSupporters.map((supporter, index) => (
                      <div key={supporter.id} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent transition-colors">
                        <div className="flex items-center justify-center w-12">
                          {getPositionIcon(index + 1)}
                        </div>
                        
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={supporter.avatar} />
                          <AvatarFallback>{supporter.name[0]}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-semibold">{supporter.name}</h4>
                            {getLevelBadge(supporter.level)}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {supporter.city}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              Desde {new Date(supporter.joinedAt).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {supporter.badges.map((badge, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <Trophy className="h-4 w-4 text-yellow-500" />
                            <span className="text-xl font-bold text-music-purple">
                              {supporter.points.toLocaleString()}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>{supporter.campaignsSupported} campanhas apoiadas</p>
                            <p>{supporter.showsAttended} shows assistidos</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="campaigns" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-music-pink" />
                    Campanhas de Maior Sucesso
                  </CardTitle>
                  <CardDescription>
                    Campanhas que mais se destacaram por arrecadação e engajamento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topCampaigns.map((campaign, index) => (
                      <div key={campaign.id} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent transition-colors">
                        <div className="flex items-center justify-center w-12">
                          {getPositionIcon(index + 1)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-semibold">{campaign.artist}</h4>
                            <Badge variant={campaign.completion >= 100 ? "success" : "secondary"}>
                              {campaign.completion >= 100 ? "Concluída" : "Em andamento"}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {campaign.city}
                            </span>
                            <span>Por {campaign.producer}</span>
                            <span>{campaign.timeToComplete}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {campaign.supporters} apoiadores
                            </span>
                            <span className="flex items-center gap-1">
                              <Target className="h-3 w-3" />
                              {campaign.completion.toFixed(1)}% da meta
                            </span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-xl font-bold text-music-success mb-1">
                            R$ {campaign.raised.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            de R$ {campaign.target.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="producers" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Produtores Mais Bem Avaliados
                  </CardTitle>
                  <CardDescription>
                    Produtores que mais se destacam por qualidade e sucesso dos eventos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topProducers.map((producer, index) => (
                      <div key={producer.id} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent transition-colors">
                        <div className="flex items-center justify-center w-12">
                          {getPositionIcon(index + 1)}
                        </div>
                        
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={producer.avatar} />
                          <AvatarFallback>{producer.name[0]}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="font-semibold">{producer.name}</h4>
                            <Badge variant="outline">{producer.experience}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {producer.city}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3" />
                              {producer.avgRating} de avaliação
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <span>{producer.campaignsCompleted} campanhas concluídas</span>
                            <span>{producer.successRate}% de taxa de sucesso</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-xl font-bold text-music-success mb-1">
                            R$ {(producer.totalRaised / 1000).toFixed(0)}k
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Total arrecadado
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="regions" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regionalStats.map((region) => (
                  <Card key={region.region}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-music-purple" />
                        {region.region}
                      </CardTitle>
                      <CardDescription>
                        Estatísticas da região
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-accent rounded-lg">
                          <div className="text-2xl font-bold text-music-purple">
                            {region.totalCampaigns}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Campanhas
                          </div>
                        </div>
                        <div className="text-center p-3 bg-accent rounded-lg">
                          <div className="text-2xl font-bold text-music-success">
                            R$ {(region.totalRaised / 1000).toFixed(0)}k
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Arrecadado
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Taxa de sucesso</span>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{region.avgSuccess}%</span>
                          <Flame className="h-4 w-4 text-orange-500" />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Gênero mais popular</span>
                        <Badge variant="outline">{region.topGenre}</Badge>
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

export default Rankings;