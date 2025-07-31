import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Heart, 
  Share2, 
  Music, 
  CheckCircle,
  Star,
  MessageCircle,
  TrendingUp
} from "lucide-react";
import Header from "@/components/Header";

const CampaignDetails = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [isSupporting, setIsSupporting] = useState(false);

  const campaign = {
    id: 1,
    artist: "Fresno",
    city: "Campinas",
    venue: "Arena Corporativa",
    targetAmount: 65000,
    currentAmount: 48500,
    supporters: 387,
    daysLeft: 12,
    image: "/placeholder.svg",
    genre: "Rock Alternativo",
    description: "Fresno é uma das bandas mais icônicas do rock brasileiro. Com mais de 20 anos de carreira, eles prometem um show inesquecível em Campinas, cidade que sempre os recebeu de braços abertos.",
    createdBy: {
      name: "Marina Silva",
      type: "Fã",
      avatar: "/placeholder.svg"
    },
    producer: {
      name: "Eventos SP Produtora",
      experience: "5+ anos",
      rating: 4.8,
      avatar: "/placeholder.svg"
    },
    eventDetails: {
      date: "2024-04-15",
      time: "20:00",
      capacity: 2000,
      address: "Av. das Avenidas, 1234 - Centro, Campinas - SP"
    },
    tiers: [
      {
        id: 1,
        name: "Ingresso Básico",
        price: 80,
        originalPrice: 120,
        benefits: ["Entrada para o show", "Acesso ao piso"],
        quantity: 800,
        sold: 298,
        popular: false
      },
      {
        id: 2,
        name: "Ingresso Premium",
        price: 150,
        originalPrice: 200,
        benefits: ["Entrada para o show", "Área VIP", "Bebida inclusa", "Pôster autografado"],
        quantity: 200,
        sold: 89,
        popular: true
      },
      {
        id: 3,
        name: "Meet & Greet",
        price: 300,
        originalPrice: 400,
        benefits: ["Tudo do Premium", "Meet & greet com a banda", "Foto exclusiva", "Setlist autografado"],
        quantity: 50,
        sold: 12,
        popular: false
      }
    ],
    updates: [
      {
        date: "2024-02-10",
        title: "Confirmação do local!",
        content: "Pessoal, conseguimos confirmar a Arena Corporativa! O lugar é perfeito para o show."
      },
      {
        date: "2024-02-08",
        title: "50% da meta atingida!",
        content: "Estamos quase lá! Obrigado a todos que já apoiaram. Vamos fazer esse show acontecer!"
      }
    ],
    comments: [
      {
        user: "João Pedro",
        avatar: "/placeholder.svg",
        comment: "Não vejo a hora! Fresno é demais 🔥",
        time: "2h atrás"
      },
      {
        user: "Ana Costa",
        avatar: "/placeholder.svg", 
        comment: "Já garanti meu ingresso premium! Quem mais vai?",
        time: "5h atrás"
      }
    ]
  };

  const progressPercentage = (campaign.currentAmount / campaign.targetAmount) * 100;

  const handleSupport = (tier: any) => {
    setSelectedTier(tier);
    setIsSupporting(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero Section */}
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-64 bg-gradient-to-br from-music-purple to-music-pink rounded-t-lg">
                    <div className="absolute inset-0 bg-black/20 rounded-t-lg" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{campaign.genre}</Badge>
                        <Badge variant="outline" className="border-white text-white">
                          {campaign.daysLeft} dias restantes
                        </Badge>
                      </div>
                      <h1 className="text-3xl font-bold">{campaign.artist}</h1>
                      <div className="flex items-center gap-4 mt-2 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {campaign.city}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(campaign.eventDetails.date).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {campaign.eventDetails.time}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={campaign.createdBy.avatar} />
                          <AvatarFallback>{campaign.createdBy.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Criado por {campaign.createdBy.name}</p>
                          <p className="text-sm text-muted-foreground">{campaign.createdBy.type}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4 mr-2" />
                          Favoritar
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          Compartilhar
                        </Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="mt-6">
                      <Tabs defaultValue="about" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="about">Sobre</TabsTrigger>
                          <TabsTrigger value="updates">Atualizações</TabsTrigger>
                          <TabsTrigger value="comments">Comentários</TabsTrigger>
                          <TabsTrigger value="producer">Produtor</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="about" className="mt-6">
                          <div className="space-y-4">
                            <p className="text-muted-foreground">{campaign.description}</p>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <Card className="p-4">
                                <h4 className="font-medium mb-2">Local do Evento</h4>
                                <p className="text-sm text-muted-foreground">{campaign.venue}</p>
                                <p className="text-sm text-muted-foreground">{campaign.eventDetails.address}</p>
                                <p className="text-sm mt-2">Capacidade: {campaign.eventDetails.capacity.toLocaleString()} pessoas</p>
                              </Card>
                              
                              <Card className="p-4">
                                <h4 className="font-medium mb-2">Detalhes do Show</h4>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                  <p>Data: {new Date(campaign.eventDetails.date).toLocaleDateString('pt-BR')}</p>
                                  <p>Horário: {campaign.eventDetails.time}</p>
                                  <p>Gênero: {campaign.genre}</p>
                                </div>
                              </Card>
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="updates" className="mt-6">
                          <div className="space-y-4">
                            {campaign.updates.map((update, index) => (
                              <Card key={index} className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <CheckCircle className="h-5 w-5 text-music-success" />
                                  <h4 className="font-medium">{update.title}</h4>
                                  <Badge variant="outline" className="text-xs">
                                    {new Date(update.date).toLocaleDateString('pt-BR')}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{update.content}</p>
                              </Card>
                            ))}
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="comments" className="mt-6">
                          <div className="space-y-4">
                            {campaign.comments.map((comment, index) => (
                              <div key={index} className="flex gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={comment.avatar} />
                                  <AvatarFallback>{comment.user[0]}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <p className="font-medium text-sm">{comment.user}</p>
                                    <p className="text-xs text-muted-foreground">{comment.time}</p>
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1">{comment.comment}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="producer" className="mt-6">
                          <Card className="p-4">
                            <div className="flex items-center gap-4 mb-4">
                              <Avatar>
                                <AvatarImage src={campaign.producer.avatar} />
                                <AvatarFallback>{campaign.producer.name[0]}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">{campaign.producer.name}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm">{campaign.producer.rating}</span>
                                  </div>
                                  <Badge variant="outline">{campaign.producer.experience}</Badge>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Produtor experiente com mais de 50 eventos realizados. Especializado em shows de rock e música independente.
                            </p>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Progresso da Campanha</CardTitle>
                    <Badge variant={progressPercentage >= 100 ? "success" : "secondary"}>
                      {progressPercentage >= 100 ? "Concluída" : "Ativa"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Arrecadado</span>
                      <span className="text-sm font-medium">{progressPercentage.toFixed(0)}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-3" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-music-purple">
                        R$ {campaign.currentAmount.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">Arrecadado</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">
                        R$ {campaign.targetAmount.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">Meta</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-xl font-bold">{campaign.supporters}</p>
                      <p className="text-sm text-muted-foreground">Apoiadores</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold">{campaign.daysLeft}</p>
                      <p className="text-sm text-muted-foreground">Dias restantes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Tiers */}
              <Card>
                <CardHeader>
                  <CardTitle>Apoie Esta Campanha</CardTitle>
                  <CardDescription>
                    Escolha sua forma de apoio e garante seu ingresso
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {campaign.tiers.map((tier) => (
                    <Card 
                      key={tier.id} 
                      className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                        tier.popular ? 'ring-2 ring-music-purple' : ''
                      }`}
                      onClick={() => handleSupport(tier)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{tier.name}</h4>
                        {tier.popular && <Badge variant="default">Mais Popular</Badge>}
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-music-purple">
                          R$ {tier.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          R$ {tier.originalPrice}
                        </span>
                      </div>
                      
                      <ul className="text-sm text-muted-foreground mb-3 space-y-1">
                        {tier.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-music-success" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span>{tier.sold} apoiadores</span>
                        <span>{tier.quantity - tier.sold} restantes</span>
                      </div>
                      
                      <Progress 
                        value={(tier.sold / tier.quantity) * 100} 
                        className="mt-2 h-2" 
                      />
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Support Dialog */}
      <Dialog open={isSupporting} onOpenChange={setIsSupporting}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apoiar Campanha</DialogTitle>
            <DialogDescription>
              Você está apoiando a campanha "{campaign.artist}" com o pacote "{selectedTier?.name}"
            </DialogDescription>
          </DialogHeader>
          
          {selectedTier && (
            <div className="space-y-4">
              <Card className="p-4 bg-accent">
                <h4 className="font-medium mb-2">{selectedTier.name}</h4>
                <p className="text-2xl font-bold text-music-purple mb-2">
                  R$ {selectedTier.price}
                </p>
                <ul className="text-sm space-y-1">
                  {selectedTier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-music-success" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" placeholder="(11) 99999-9999" />
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1" onClick={() => setIsSupporting(false)}>
                  Cancelar
                </Button>
                <Button variant="hero" className="flex-1">
                  Confirmar Apoio - R$ {selectedTier.price}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CampaignDetails;