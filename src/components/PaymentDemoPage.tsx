import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  QrCode, 
  CreditCard, 
  Smartphone, 
  Copy, 
  CheckCircle,
  Clock,
  Users,
  Heart,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PaymentFlow from "./PaymentFlow";

const PaymentDemoPage = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const { toast } = useToast();

  const pixExamples = [
    {
      type: "PIX Estático",
      description: "QR Code fixo para valores específicos",
      qrData: "00020126580014BR.GOV.BCB.PIX0136123e4567-e12b-12d1-a456-426614174000520400005303986540550.005802BR5925ShowFund Platform LTDA6009SAO PAULO62070503***6304C2A3",
      amount: 50.00
    },
    {
      type: "PIX Dinâmico", 
      description: "QR Code com valor editável",
      qrData: "00020126580014BR.GOV.BCB.PIX0136456e7890-e12b-12d1-a456-426614174001520400005303986540750.005802BR5925ShowFund Platform LTDA6009SAO PAULO62070503***630455B2",
      amount: 75.00
    }
  ];

  const handleCopyPix = (data: string) => {
    navigator.clipboard.writeText(data);
    toast({
      title: "PIX copiado!",
      description: "Código Pix foi copiado para área de transferência",
    });
  };

  const mockCampaign = {
    id: 1,
    artist: "Dream Theater",
    amount: selectedAmount,
    tier: "Apoiador Premium"
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent mb-4">
            Demo - Fluxo de Pagamento
          </h1>
          <p className="text-muted-foreground text-lg">
            Demonstração completa dos métodos de pagamento disponíveis na plataforma
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="pix">PIX Demo</TabsTrigger>
            <TabsTrigger value="cards">Cartões</TabsTrigger>
            <TabsTrigger value="flow">Fluxo Completo</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <QrCode className="h-6 w-6 text-green-600" />
                    <CardTitle>PIX</CardTitle>
                  </div>
                  <CardDescription>
                    Pagamento instantâneo brasileiro
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      QR Code dinâmico
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Copia e Cola
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Confirmação instantânea
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      Disponível 24h
                    </li>
                  </ul>
                  <Badge className="mt-4 bg-green-100 text-green-800">
                    Mais Popular no Brasil
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                    <CardTitle>Cartões</CardTitle>
                  </div>
                  <CardDescription>
                    Crédito e débito nacional/internacional
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Visa, Mastercard, Elo
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Parcelamento disponível
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      Pagamento seguro
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      Aprovação em segundos
                    </li>
                  </ul>
                  <Badge className="mt-4 bg-blue-100 text-blue-800">
                    Internacional
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                    <CardTitle>Boleto</CardTitle>
                  </div>
                  <CardDescription>
                    Pagamento tradicional brasileiro
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      Sem necessidade de conta
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      Pagamento em casas lotéricas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      Apps bancários
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      Vencimento em 3 dias
                    </li>
                  </ul>
                  <Badge className="mt-4 bg-purple-100 text-purple-800">
                    Tradicional
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Estatísticas de Pagamento</CardTitle>
                <CardDescription>
                  Dados de uso dos métodos de pagamento na plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">68%</div>
                    <div className="text-sm text-muted-foreground">Pagamentos via PIX</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">25%</div>
                    <div className="text-sm text-muted-foreground">Cartão de Crédito</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">7%</div>
                    <div className="text-sm text-muted-foreground">Boleto Bancário</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pix" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {pixExamples.map((example, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{example.type}</CardTitle>
                        <CardDescription>{example.description}</CardDescription>
                      </div>
                      <Badge variant="outline">
                        R$ {example.amount.toFixed(2)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-center p-4 bg-white rounded-lg">
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(example.qrData)}`}
                        alt={`QR Code ${example.type}`}
                        className="w-32 h-32"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-xs">Código PIX (Copia e Cola):</Label>
                      <div className="flex gap-2">
                        <Input 
                          value={example.qrData} 
                          readOnly 
                          className="text-xs font-mono text-muted-foreground"
                        />
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleCopyPix(example.qrData)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground space-y-1">
                      <p><strong>Beneficiário:</strong> ShowFund Platform LTDA</p>
                      <p><strong>CNPJ:</strong> 12.345.678/0001-90</p>
                      <p><strong>Banco:</strong> Simulado para demo</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Como funciona o PIX?</CardTitle>
                <CardDescription>
                  Processo completo de pagamento via PIX
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <QrCode className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-sm">1. Gerar QR Code</h3>
                    <p className="text-xs text-muted-foreground">
                      Sistema gera QR Code único para transação
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <Smartphone className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-sm">2. Escanear</h3>
                    <p className="text-xs text-muted-foreground">
                      Cliente escaneia com app do banco
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-sm">3. Autorizar</h3>
                    <p className="text-xs text-muted-foreground">
                      Confirma pagamento no app bancário
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-sm">4. Confirmar</h3>
                    <p className="text-xs text-muted-foreground">
                      Transação aprovada instantaneamente
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cards" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cartões Aceitos</CardTitle>
                  <CardDescription>
                    Bandeiras e tipos de cartão suportados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="w-12 h-8 bg-blue-600 rounded mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">VISA</span>
                        </div>
                        <span className="text-xs">Visa</span>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="w-12 h-8 bg-red-600 rounded mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">MC</span>
                        </div>
                        <span className="text-xs">Mastercard</span>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="w-12 h-8 bg-yellow-500 rounded mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">ELO</span>
                        </div>
                        <span className="text-xs">Elo</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Tipos aceitos:</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Cartão de Crédito
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Cartão de Débito
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Cartão Pré-pago
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Cartões Corporativos
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Parcelamento</CardTitle>
                  <CardDescription>
                    Opções de parcelamento disponíveis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-green-50 rounded-lg text-center">
                        <div className="text-lg font-bold text-green-600">1x</div>
                        <div className="text-xs text-green-700">Sem juros</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg text-center">
                        <div className="text-lg font-bold text-green-600">2-3x</div>
                        <div className="text-xs text-green-700">Sem juros</div>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg text-center">
                        <div className="text-lg font-bold text-yellow-600">4-6x</div>
                        <div className="text-xs text-yellow-700">Com juros</div>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg text-center">
                        <div className="text-lg font-bold text-yellow-600">7-12x</div>
                        <div className="text-xs text-yellow-700">Com juros</div>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      <p><strong>Juros:</strong> A partir de 2.99% a.m.</p>
                      <p><strong>Aprovação:</strong> Instantânea</p>
                      <p><strong>Segurança:</strong> SSL 256 bits</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="flow" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Testar Fluxo Completo</CardTitle>
                <CardDescription>
                  Experimente o fluxo de pagamento completo da plataforma
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Valor do Apoio</Label>
                    <div className="flex items-center gap-2">
                      <span>R$</span>
                      <Input 
                        type="number" 
                        value={selectedAmount}
                        onChange={(e) => setSelectedAmount(Number(e.target.value))}
                        min="10"
                        max="1000"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Artista</Label>
                    <Input value="Dream Theater" readOnly />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Nível</Label>
                    <Input value="Apoiador Premium" readOnly />
                  </div>
                </div>

                <Button 
                  onClick={() => setShowDemo(true)} 
                  className="w-full" 
                  variant="hero"
                  size="lg"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Iniciar Demo do Pagamento
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Este é um ambiente de demonstração.</p>
                  <p>Nenhum pagamento real será processado.</p>
                </div>
              </CardContent>
            </Card>

            {showDemo && (
              <PaymentFlow 
                open={showDemo}
                campaign={mockCampaign}
                onClose={() => setShowDemo(false)}
                onSuccess={() => {
                  setShowDemo(false);
                  toast({
                    title: "Demo concluída! 🎉",
                    description: "O fluxo de pagamento foi demonstrado com sucesso!",
                  });
                }}
              />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PaymentDemoPage;