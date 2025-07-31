import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  DollarSign, 
  Music, 
  MapPin,
  Plus,
  Eye,
  Edit,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";

const ProducerDashboard = () => {
  const { user, login } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  // Auto-login as producer when accessing producer dashboard
  useEffect(() => {
    if (!user) {
      login('producer');
    }
  }, [user, login]);

  const producerStats = {
    totalCampaigns: 15,
    activeCampaigns: 8,
    completedCampaigns: 7,
    totalRaised: 850000,
    avgSuccess: 87,
    nextPayment: 15000
  };

  const campaigns = [
    {
      id: 1,
      artist: "Fresno",
      city: "Campinas",
      status: "active",
      progress: 74,
      raised: 48500,
      target: 65000,
      supporters: 387,
      daysLeft: 12,
      commission: 4850
    },
    {
      id: 2,
      artist: "Lagum", 
      city: "Belo Horizonte",
      status: "completed",
      progress: 107,
      raised: 75000,
      target: 70000,
      supporters: 892,
      daysLeft: 0,
      commission: 7500
    },
    {
      id: 3,
      artist: "Dream Theater",
      city: "São Paulo", 
      status: "pending",
      progress: 0,
      raised: 0,
      target: 200000,
      supporters: 0,
      daysLeft: 30,
      commission: 0
    }
  ];

  const monthlyData = [
    { month: 'Jan', campaigns: 2, revenue: 25000 },
    { month: 'Fev', campaigns: 3, revenue: 45000 },
    { month: 'Mar', campaigns: 4, revenue: 65000 },
    { month: 'Abr', campaigns: 5, revenue: 85000 },
    { month: 'Mai', campaigns: 1, revenue: 15000 }
  ];

  const genreData = [
    { name: 'Rock', value: 35, color: '#8b5cf6' },
    { name: 'Pop', value: 25, color: '#ec4899' },
    { name: 'Indie', value: 20, color: '#06b6d4' },
    { name: 'Eletrônica', value: 15, color: '#10b981' },
    { name: 'Outros', value: 5, color: '#f59e0b' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="secondary">Ativa</Badge>;
      case 'completed':
        return <Badge variant="success">Concluída</Badge>;
      case 'pending':
        return <Badge variant="outline">Pendente</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold">Painel do Produtor</h1>
                <p className="text-muted-foreground">Gerencie suas campanhas e acompanhe o desempenho</p>
              </div>
              <Button variant="hero">
                <Plus className="h-4 w-4 mr-2" />
                Nova Campanha
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Music className="h-5 w-5 text-music-purple" />
                  <div>
                    <p className="text-2xl font-bold">{producerStats.totalCampaigns}</p>
                    <p className="text-sm text-muted-foreground">Total de campanhas</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="text-2xl font-bold">{producerStats.activeCampaigns}</p>
                    <p className="text-sm text-muted-foreground">Ativas</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-2xl font-bold">{producerStats.completedCampaigns}</p>
                    <p className="text-sm text-muted-foreground">Concluídas</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-music-success" />
                  <div>
                    <p className="text-2xl font-bold">R$ {(producerStats.totalRaised / 1000).toFixed(0)}k</p>
                    <p className="text-sm text-muted-foreground">Total arrecadado</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-music-pink" />
                  <div>
                    <p className="text-2xl font-bold">{producerStats.avgSuccess}%</p>
                    <p className="text-sm text-muted-foreground">Taxa de sucesso</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-music-purple" />
                  <div>
                    <p className="text-2xl font-bold">R$ {(producerStats.nextPayment / 1000).toFixed(0)}k</p>
                    <p className="text-sm text-muted-foreground">Próximo pagamento</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="finances">Financeiro</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  {/* Revenue Chart */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Receita Mensal</CardTitle>
                      <CardDescription>Arrecadação dos últimos 5 meses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={monthlyData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip formatter={(value) => [`R$ ${value}`, 'Receita']} />
                          <Bar dataKey="revenue" fill="#8b5cf6" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Active Campaigns */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Campanhas Ativas</CardTitle>
                      <CardDescription>Acompanhe o progresso em tempo real</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {campaigns.filter(c => c.status === 'active').map((campaign) => (
                          <div key={campaign.id} className="space-y-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">{campaign.artist} - {campaign.city}</h4>
                                <p className="text-sm text-muted-foreground">
                                  R$ {campaign.raised.toLocaleString()} de R$ {campaign.target.toLocaleString()}
                                </p>
                              </div>
                              <div className="text-right">
                                <Badge variant="secondary">{campaign.progress}%</Badge>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {campaign.daysLeft} dias restantes
                                </p>
                              </div>
                            </div>
                            <Progress value={campaign.progress} />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  {/* Genre Distribution */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Distribuição por Gênero</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                          <Pie
                            data={genreData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            dataKey="value"
                          >
                            {genreData.map((entry, index) => (
                              <Cell key={index} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value}%`, 'Participação']} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {genreData.map((genre) => (
                          <div key={genre.name} className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: genre.color }}
                            />
                            <span className="text-sm">{genre.name}</span>
                          </div>
                        ))}
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
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <div className="flex-1">
                            <p className="text-sm">Campanha do <strong>Lagum</strong> foi concluída</p>
                            <p className="text-xs text-muted-foreground">2 horas atrás</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <TrendingUp className="h-4 w-4 text-blue-500" />
                          <div className="flex-1">
                            <p className="text-sm"><strong>Fresno</strong> atingiu 70% da meta</p>
                            <p className="text-xs text-muted-foreground">5 horas atrás</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Plus className="h-4 w-4 text-music-purple" />
                          <div className="flex-1">
                            <p className="text-sm">Nova campanha do <strong>Dream Theater</strong> criada</p>
                            <p className="text-xs text-muted-foreground">1 dia atrás</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="campaigns" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Todas as Campanhas</CardTitle>
                  <CardDescription>Gerencie e acompanhe suas campanhas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Status</TableHead>
                        <TableHead>Artista</TableHead>
                        <TableHead>Cidade</TableHead>
                        <TableHead>Progresso</TableHead>
                        <TableHead>Arrecadado</TableHead>
                        <TableHead>Apoiadores</TableHead>
                        <TableHead>Dias Restantes</TableHead>
                        <TableHead>Comissão</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {campaigns.map((campaign) => (
                        <TableRow key={campaign.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(campaign.status)}
                              {getStatusBadge(campaign.status)}
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">{campaign.artist}</TableCell>
                          <TableCell>{campaign.city}</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>{campaign.progress}%</span>
                              </div>
                              <Progress value={campaign.progress} className="h-2" />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="font-medium">R$ {campaign.raised.toLocaleString()}</p>
                              <p className="text-sm text-muted-foreground">
                                de R$ {campaign.target.toLocaleString()}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>{campaign.supporters}</TableCell>
                          <TableCell>{campaign.daysLeft > 0 ? campaign.daysLeft : '-'}</TableCell>
                          <TableCell>R$ {campaign.commission.toLocaleString()}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Mensal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="campaigns" fill="#8b5cf6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Métricas Detalhadas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-accent rounded-lg">
                        <p className="text-sm text-muted-foreground">Taxa de Conversão</p>
                        <p className="text-2xl font-bold">78%</p>
                      </div>
                      <div className="p-4 bg-accent rounded-lg">
                        <p className="text-sm text-muted-foreground">Ticket Médio</p>
                        <p className="text-2xl font-bold">R$ 95</p>
                      </div>
                      <div className="p-4 bg-accent rounded-lg">
                        <p className="text-sm text-muted-foreground">Tempo Médio</p>
                        <p className="text-2xl font-bold">23 dias</p>
                      </div>
                      <div className="p-4 bg-accent rounded-lg">
                        <p className="text-sm text-muted-foreground">ROI</p>
                        <p className="text-2xl font-bold">312%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="finances" className="mt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Receita Total</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-music-success">
                        R$ {(producerStats.totalRaised / 1000).toFixed(0)}k
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        +15% vs mês anterior
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Comissões Pendentes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-music-purple">
                        R$ {(producerStats.nextPayment / 1000).toFixed(0)}k
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Pagamento em 5 dias
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Comissão Média</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-music-pink">8.5%</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Por campanha concluída
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Histórico de Pagamentos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Data</TableHead>
                          <TableHead>Campanha</TableHead>
                          <TableHead>Valor da Campanha</TableHead>
                          <TableHead>Comissão</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>15/02/2024</TableCell>
                          <TableCell>Lagum - Belo Horizonte</TableCell>
                          <TableCell>R$ 75.000</TableCell>
                          <TableCell>R$ 7.500</TableCell>
                          <TableCell><Badge variant="success">Pago</Badge></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>28/01/2024</TableCell>
                          <TableCell>Capital Inicial - Brasília</TableCell>
                          <TableCell>R$ 95.000</TableCell>
                          <TableCell>R$ 9.500</TableCell>
                          <TableCell><Badge variant="success">Pago</Badge></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>12/01/2024</TableCell>
                          <TableCell>Fresno - Campinas</TableCell>
                          <TableCell>R$ 65.000</TableCell>
                          <TableCell>R$ 6.500</TableCell>
                          <TableCell><Badge variant="secondary">Pendente</Badge></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
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

export default ProducerDashboard;