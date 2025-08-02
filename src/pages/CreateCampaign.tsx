import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Music, Calendar, DollarSign, Users, Plus, Trash2, Lightbulb, AlertCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";


const CreateCampaign = () => {
  const { user } = useAuth();
  const [campaignType, setCampaignType] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");
  const [tiers, setTiers] = useState([
    { id: 1, name: "Ingresso Básico", price: 50, benefits: ["Entrada para o show"], quantity: 100 }
  ]);

  // Define campaign types based on user profile
  useEffect(() => {
    if (user?.type === 'fan') {
      setCampaignType('simple');
    } else if (user?.type === 'producer') {
      setCampaignType('advanced');
    } else if (user?.type === 'artist') {
      setCampaignType('artist');
    }
  }, [user]);

  const suggestedArtists = [
    { name: "Dream Theater", popularity: "Muito Alta", localDemand: "95%", estimatedFee: "R$ 150.000" },
    { name: "Jorge & Mateus", popularity: "Muito Alta", localDemand: "89%", estimatedFee: "R$ 85.000" },
    { name: "Iron Maiden", popularity: "Muito Alta", localDemand: "92%", estimatedFee: "R$ 200.000" },
  ];

  const addTier = () => {
    const newTier = {
      id: tiers.length + 1,
      name: "",
      price: 0,
      benefits: [""],
      quantity: 0
    };
    setTiers([...tiers, newTier]);
  };

  const removeTier = (id: number) => {
    setTiers(tiers.filter(tier => tier.id !== id));
  };

  // Show access denied if user doesn't have permission
  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-8 px-4">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
                <h2 className="text-xl font-semibold">Acesso Negado</h2>
                <p className="text-muted-foreground">
                  Você precisa estar logado para criar campanhas.
                </p>
                <Button variant="hero" onClick={() => window.location.href = '/'}>
                  Fazer Login
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent mb-4">
              Criar Nova Campanha
            </h1>
            <p className="text-xs text-muted-foreground mt-2">
              Traga seus artistas favoritos para sua cidade
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">Criar Nova Campanha</CardTitle>
              <CardDescription className="text-center">
                {user?.type === 'fan' && 'Crie uma campanha para trazer seu artista favorito para sua cidade'}
                {user?.type === 'producer' && 'Configure uma campanha completa com todos os detalhes do evento'}
                {user?.type === 'artist' && 'Crie uma campanha para promover seus próprios shows'}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {/* Campanha Simples - Fã */}
              {user?.type === 'fan' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="artist">Artista Desejado</Label>
                        <div className="relative">
                          <Music className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            id="artist" 
                            placeholder="Digite o nome do artista..." 
                            className="pl-10"
                            value={selectedArtist}
                            onChange={(e) => setSelectedArtist(e.target.value)}
                          />
                        </div>
                        
                        {selectedArtist && (
                          <div className="space-y-2">
                            <Label>Sugestões baseadas no Spotify:</Label>
                            {suggestedArtists.map((artist, index) => (
                              <Card key={index} className="p-3 cursor-pointer hover:bg-accent" onClick={() => setSelectedArtist(artist.name)}>
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="font-medium">{artist.name}</h4>
                                    <div className="flex gap-2 mt-1">
                                      <Badge variant="secondary">{artist.popularity}</Badge>
                                      <Badge variant="outline">Demanda local: {artist.localDemand}</Badge>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-sm font-medium">{artist.estimatedFee}</p>
                                    <p className="text-xs text-muted-foreground">Cachê estimado</p>
                                  </div>
                                </div>
                              </Card>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="city" placeholder="São Paulo, SP" className="pl-10" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="venue">Local Sugerido (Opcional)</Label>
                        <Input id="venue" placeholder="Nome do local ou tipo de venue" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Card className="p-4 bg-gradient-to-r from-music-purple/10 to-music-pink/10">
                        <div className="flex items-center gap-2 mb-3">
                          <Lightbulb className="h-5 w-5 text-music-purple" />
                          <h3 className="font-semibold">IA Insights</h3>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p><strong>Meta estimada:</strong> R$ 65.000</p>
                          <p><strong>Público esperado:</strong> 800-1200 pessoas</p>
                          <p><strong>Score de viabilidade:</strong> <Badge variant="secondary">85% - Muito Viável</Badge></p>
                          <p><strong>Melhor época:</strong> Março-Maio, Setembro-Novembro</p>
                        </div>
                      </Card>

                      <div className="space-y-2">
                        <Label htmlFor="description">Por que você quer este show?</Label>
                        <Textarea 
                          id="description" 
                          placeholder="Conte por que essa banda faria sucesso na sua cidade..."
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button variant="outline">Salvar Rascunho</Button>
                    <Button variant="hero">Criar Campanha</Button>
                  </div>
                </div>
              )}

              {/* Campanha Avançada - Produtor */}
              {user?.type === 'producer' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="artistAdvanced">Artista</Label>
                        <Input id="artistAdvanced" placeholder="Nome do artista/banda" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cityAdvanced">Cidade</Label>
                        <Input id="cityAdvanced" placeholder="São Paulo, SP" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="venueAdvanced">Local do Evento</Label>
                        <Input id="venueAdvanced" placeholder="Nome e endereço do local" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="capacity">Capacidade do Local</Label>
                        <Input id="capacity" type="number" placeholder="1000" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="eventDate">Data do Evento</Label>
                          <Input id="eventDate" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="eventTime">Horário</Label>
                          <Input id="eventTime" type="time" defaultValue="20:00" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="targetAmount">Meta de Arrecadação</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="targetAmount" type="number" placeholder="65000" className="pl-10" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="minAmount">Valor Mínimo (Para confirmação)</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="minAmount" type="number" placeholder="45000" className="pl-10" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="campaignDuration">Duração da Campanha (dias)</Label>
                        <Input id="campaignDuration" type="number" placeholder="30" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="genre">Gênero Musical</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o gênero" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="metal">Metal</SelectItem>
                            <SelectItem value="sertanejo">Sertanejo</SelectItem>
                            <SelectItem value="rock">Rock</SelectItem>
                            <SelectItem value="heavymetal">Heavy Metal</SelectItem>
                            <SelectItem value="progressivemetal">Metal Progressivo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Faixas de Apoio/Ingressos</h3>
                      <Button variant="outline" size="sm" onClick={addTier}>
                        <Plus className="h-4 w-4 mr-2" />
                        Adicionar Faixa
                      </Button>
                    </div>

                    {tiers.map((tier, index) => (
                      <Card key={tier.id} className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Faixa {index + 1}</h4>
                            {tiers.length > 1 && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => removeTier(tier.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label>Nome da Faixa</Label>
                              <Input placeholder="Ingresso Básico" />
                            </div>
                            <div className="space-y-2">
                              <Label>Preço (R$)</Label>
                              <Input type="number" placeholder="50" />
                            </div>
                            <div className="space-y-2">
                              <Label>Quantidade</Label>
                              <Input type="number" placeholder="100" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label>Benefícios</Label>
                            <Textarea placeholder="- Entrada para o show&#10;- Acesso prioritário&#10;- Meet & greet" rows={3} />
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="campaignDescription">Descrição da Campanha</Label>
                    <Textarea 
                      id="campaignDescription" 
                      placeholder="Descreva o evento, o artista e por que este show será especial..."
                      rows={4}
                    />
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button variant="outline">Salvar Rascunho</Button>
                    <Button variant="hero">Publicar Campanha</Button>
                  </div>
                </div>
              )}

              {/* Campanha de Artista */}
              {user?.type === 'artist' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="artistName">Nome do Artista/Banda</Label>
                        <Input id="artistName" placeholder={user.name} defaultValue={user.name} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cityArtist">Cidade do Show</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="cityArtist" placeholder="São Paulo, SP" className="pl-10" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="venueArtist">Local do Show</Label>
                        <Input id="venueArtist" placeholder="Nome e endereço do local" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="showDate">Data do Show</Label>
                          <Input id="showDate" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="showTime">Horário</Label>
                          <Input id="showTime" type="time" defaultValue="21:00" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="genreArtist">Gênero Musical</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o gênero" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="metal">Metal</SelectItem>
                            <SelectItem value="sertanejo">Sertanejo</SelectItem>
                            <SelectItem value="rock">Rock</SelectItem>
                            <SelectItem value="heavymetal">Heavy Metal</SelectItem>
                            <SelectItem value="progressivemetal">Metal Progressivo</SelectItem>
                            <SelectItem value="pop">Pop</SelectItem>
                            <SelectItem value="rap">Rap/Hip-Hop</SelectItem>
                            <SelectItem value="eletronica">Eletrônica</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="targetGoal">Meta de Financiamento</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="targetGoal" type="number" placeholder="25000" className="pl-10" />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Custos de produção, equipamentos, divulgação, etc.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="minGoal">Meta Mínima</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="minGoal" type="number" placeholder="15000" className="pl-10" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="campaignDays">Duração da Campanha (dias)</Label>
                        <Input id="campaignDays" type="number" placeholder="45" />
                      </div>

                      <Card className="p-4 bg-gradient-to-r from-music-purple/10 to-music-pink/10">
                        <div className="flex items-center gap-2 mb-3">
                          <Music className="h-5 w-5 text-music-purple" />
                          <h3 className="font-semibold">Dica para Artistas</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Crie recompensas atrativas como meet & greet, merchan exclusivo, ou ensaios privados para seus fãs!
                        </p>
                      </Card>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Recompensas para os Fãs</h3>
                      <Button variant="outline" size="sm" onClick={addTier}>
                        <Plus className="h-4 w-4 mr-2" />
                        Adicionar Recompensa
                      </Button>
                    </div>

                    {tiers.map((tier, index) => (
                      <Card key={tier.id} className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Recompensa {index + 1}</h4>
                            {tiers.length > 1 && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => removeTier(tier.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label>Nome da Recompensa</Label>
                              <Input placeholder="Meet & Greet" />
                            </div>
                            <div className="space-y-2">
                              <Label>Valor de Apoio (R$)</Label>
                              <Input type="number" placeholder="100" />
                            </div>
                            <div className="space-y-2">
                              <Label>Quantidade Limitada</Label>
                              <Input type="number" placeholder="20" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label>Descrição da Recompensa</Label>
                            <Textarea placeholder="- Entrada para o show&#10;- Conversa exclusiva com a banda&#10;- Foto autografada" rows={3} />
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="artistDescription">Sobre o Show</Label>
                    <Textarea 
                      id="artistDescription" 
                      placeholder="Conte sobre seu show, as músicas que irá tocar, a experiência que os fãs terão..."
                      rows={4}
                    />
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button variant="outline">Salvar Rascunho</Button>
                    <Button variant="hero">Lançar Campanha</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;