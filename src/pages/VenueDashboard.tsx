import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  Star, 
  Music, 
  Clock,
  Plus,
  Eye,
  Settings,
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const VenueDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  const venueStats = {
    totalEvents: 24,
    monthlyRevenue: 85000,
    capacity: 1500,
    occupancyRate: 78,
    rating: 4.8,
    nextEvent: "Dream Theater - 15/03/2024"
  };

  const preReservations = [
    {
      id: 1,
      artist: "Dream Theater",
      campaign: "Progressive Metal Night",
      date: "2024-03-15",
      capacity: 1200,
      currentFunding: 185000,
      targetFunding: 300000,
      status: "pending",
      daysLeft: 25,
      estimatedRevenue: 45000
    },
    {
      id: 2,
      artist: "Fresno",
      campaign: "Rock Nacional Tour",
      date: "2024-04-20",
      capacity: 800,
      currentFunding: 48500,
      targetFunding: 65000,
      status: "approved",
      daysLeft: 12,
      estimatedRevenue: 28000
    }
  ];

  const confirmedShows = [
    {
      id: 1,
      artist: "Iron Maiden",
      date: "2024-02-28",
      capacity: 1500,
      ticketsSold: 1420,
      revenue: 120000,
      status: "confirmed"
    }
  ];

  const venueProfile = {
    name: "Arena Music Hall",
    description: "Espaço premium para shows de rock e metal com infraestrutura completa",
    capacity: 1500,
    features: ["Sistema de som profissional", "Iluminação LED", "Camarins climatizados", "Bar completo"],
    location: "São Paulo, SP",
    pricePerEvent: 15000,
    commissionRate: 12
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "success";
      case "pending": return "secondary";
      case "approved": return "default";
      case "rejected": return "destructive";
      default: return "secondary";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed": return "Confirmado";
      case "pending": return "Pendente";
      case "approved": return "Aprovado";
      case "rejected": return "Rejeitado";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AMH</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">Arena Music Hall</h1>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary">Venue Premium</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{venueStats.rating}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Music className="h-5 w-5 text-music-purple" />
                  <div>
                    <p className="text-2xl font-bold">{venueStats.totalEvents}</p>
                    <p className="text-sm text-muted-foreground">Eventos realizados</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-music-success" />
                  <div>
                    <p className="text-2xl font-bold">R$ {venueStats.monthlyRevenue.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Receita mensal</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-music-pink" />
                  <div>
                    <p className="text-2xl font-bold">{venueStats.capacity}</p>
                    <p className="text-sm text-muted-foreground">Capacidade máxima</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-2xl font-bold">{venueStats.occupancyRate}%</p>
                    <p className="text-sm text-muted-foreground">Taxa de ocupação</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full flex flex-wrap sm:grid sm:grid-cols-4 h-auto p-1 gap-1">
              <TabsTrigger value="overview" className="flex-1 sm:flex-initial">Visão Geral</TabsTrigger>
              <TabsTrigger value="reservations" className="flex-1 sm:flex-initial">Pré-Reservas</TabsTrigger>
              <TabsTrigger value="calendar" className="flex-1 sm:flex-initial">Calendário</TabsTrigger>
              <TabsTrigger value="profile" className="flex-1 sm:flex-initial">Perfil do Venue</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  {/* Pré-reservas Pendentes */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-music-purple" />
                        Pré-Reservas Condicionais
                      </CardTitle>
                      <CardDescription>
                        Solicitações de artistas aguardando sua aprovação
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {preReservations.filter(r => r.status === 'pending').map((reservation) => (
                          <div key={reservation.id} className="p-4 border rounded-lg">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-semibold">{reservation.artist}</h4>
                                <p className="text-sm text-muted-foreground">{reservation.campaign}</p>
                              </div>
                              <Badge variant={getStatusColor(reservation.status)}>
                                {getStatusText(reservation.status)}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Data solicitada</p>
                                <p className="font-medium">{new Date(reservation.date).toLocaleDateString('pt-BR')}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Capacidade necessária</p>
                                <p className="font-medium">{reservation.capacity} pessoas</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Progresso da campanha</p>
                                <p className="font-medium">R$ {reservation.currentFunding.toLocaleString()} / R$ {reservation.targetFunding.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Receita estimada</p>
                                <p className="font-medium text-music-success">R$ {reservation.estimatedRevenue.toLocaleString()}</p>
                              </div>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button size="sm" variant="default">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Aprovar
                              </Button>
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4 mr-2" />
                                Ver Detalhes
                              </Button>
                              <Button size="sm" variant="destructive">
                                <XCircle className="h-4 w-4 mr-2" />
                                Rejeitar
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Shows Confirmados */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-music-success" />
                        Próximos Shows Confirmados
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {confirmedShows.map((show) => (
                          <div key={show.id} className="p-4 border rounded-lg">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold">{show.artist}</h4>
                                <p className="text-sm text-muted-foreground flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(show.date).toLocaleDateString('pt-BR')}
                                </p>
                              </div>
                              <Badge variant="success">Confirmado</Badge>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                              <div>
                                <p className="text-muted-foreground">Ingressos vendidos</p>
                                <p className="font-medium">{show.ticketsSold} / {show.capacity}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Taxa de ocupação</p>
                                <p className="font-medium">{Math.round((show.ticketsSold / show.capacity) * 100)}%</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Receita</p>
                                <p className="font-medium text-music-success">R$ {show.revenue.toLocaleString()}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  {/* Próximo Evento */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-music-purple" />
                        Próximo Evento
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <h3 className="font-semibold">{venueStats.nextEvent.split(' - ')[0]}</h3>
                        <p className="text-2xl font-bold text-music-purple mt-2">
                          {venueStats.nextEvent.split(' - ')[1]}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">20:00</p>
                        <Button variant="outline" className="w-full mt-4" size="sm">
                          Ver Detalhes
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Configurações Rápidas */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Configurações Rápidas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Aceitar pré-reservas</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Visibilidade pública</Label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Notificações automáticas</Label>
                        <Switch defaultChecked />
                      </div>
                      <Button variant="outline" className="w-full" size="sm">
                        <Settings className="h-4 w-4 mr-2" />
                        Todas as Configurações
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reservations" className="mt-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Gerenciar Pré-Reservas</h2>
                  <div className="flex gap-2">
                    <Button variant="outline">Filtros</Button>
                    <Button variant="hero">
                      <Plus className="h-4 w-4 mr-2" />
                      Bloquear Data
                    </Button>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {preReservations.map((reservation) => (
                    <Card key={reservation.id}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold">{reservation.artist}</h3>
                            <p className="text-muted-foreground">{reservation.campaign}</p>
                          </div>
                          <Badge variant={getStatusColor(reservation.status)}>
                            {getStatusText(reservation.status)}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Data</p>
                            <p className="font-medium">{new Date(reservation.date).toLocaleDateString('pt-BR')}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Capacidade</p>
                            <p className="font-medium">{reservation.capacity} pessoas</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Progresso</p>
                            <p className="font-medium">{Math.round((reservation.currentFunding / reservation.targetFunding) * 100)}%</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Receita Estimada</p>
                            <p className="font-medium text-music-success">R$ {reservation.estimatedRevenue.toLocaleString()}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          {reservation.status === 'pending' && (
                            <>
                              <Button size="sm">Aprovar</Button>
                              <Button size="sm" variant="destructive">Rejeitar</Button>
                            </>
                          )}
                          <Button size="sm" variant="outline">Ver Campanha</Button>
                          <Button size="sm" variant="outline">Detalhes</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Calendário de Disponibilidade</CardTitle>
                  <CardDescription>
                    Gerencie suas datas disponíveis e eventos confirmados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Calendário Interativo</h3>
                    <p className="text-muted-foreground mb-4">
                      Visualize e gerencie sua disponibilidade de datas
                    </p>
                    <Button variant="hero">
                      Abrir Calendário Completo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Perfil do Venue</CardTitle>
                    <CardDescription>
                      Gerencie as informações do seu espaço
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="venue-name">Nome do Venue</Label>
                        <Input id="venue-name" value={venueProfile.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="venue-capacity">Capacidade</Label>
                        <Input id="venue-capacity" type="number" value={venueProfile.capacity} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="venue-location">Localização</Label>
                        <Input id="venue-location" value={venueProfile.location} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="venue-price">Preço por Evento</Label>
                        <Input id="venue-price" value={`R$ ${venueProfile.pricePerEvent}`} />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="venue-description">Descrição</Label>
                      <Textarea 
                        id="venue-description" 
                        value={venueProfile.description}
                        rows={3}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Características do Espaço</Label>
                      <div className="flex flex-wrap gap-2">
                        {venueProfile.features.map((feature, index) => (
                          <Badge key={index} variant="outline">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Adicionar Característica
                      </Button>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button>Salvar Alterações</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default VenueDashboard;