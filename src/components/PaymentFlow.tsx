import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  CreditCard, 
  QrCode, 
  Smartphone, 
  Clock, 
  CheckCircle, 
  Copy,
  RefreshCw,
  ArrowLeft,
  Shield,
  Heart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentFlowProps {
  campaign: {
    id: number;
    artist: string;
    amount: number;
    tier: string;
  };
  onClose: () => void;
  onSuccess?: () => void;
}

const PaymentFlow = ({ campaign, onClose, onSuccess }: PaymentFlowProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false);
  const { toast } = useToast();

  const steps = [
    { id: 1, title: "Método de Pagamento", icon: CreditCard },
    { id: 2, title: "Confirmação", icon: CheckCircle },
    { id: 3, title: "Processamento", icon: Clock },
    { id: 4, title: "Concluído", icon: CheckCircle }
  ];

  const pixKey = "00020126360014BR.GOV.BCB.PIX0114+55119876543210520400005303986540520.005802BR5925SHOWFUND PLATAFORMA LTDA6009SAO PAULO62070503***6304ABCD";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixKey)}`;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    toast({
      title: "PIX Copia e Cola copiado!",
      description: "O código foi copiado para sua área de transferência",
    });
  };

  const generateQRCode = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setQrCodeGenerated(true);
      setIsProcessing(false);
      toast({
        title: "QR Code gerado!",
        description: "Escaneie o código para efetuar o pagamento",
      });
    }, 1500);
  };

  const processPayment = () => {
    setIsProcessing(true);
    setCurrentStep(3);
    
    setTimeout(() => {
      setCurrentStep(4);
      setIsProcessing(false);
      
      // Chama a função de sucesso se fornecida
      if (onSuccess) {
        onSuccess();
      }
      
      toast({
        title: "Pagamento aprovado! 🎉",
        description: `Obrigado por apoiar ${campaign.artist}!`,
      });
    }, 3000);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
            currentStep >= step.id 
              ? 'bg-music-purple text-white border-music-purple' 
              : 'border-muted text-muted-foreground'
          }`}>
            <step.icon className="w-5 h-5" />
          </div>
          {index < steps.length - 1 && (
            <div className={`w-12 h-0.5 mx-2 transition-all ${
              currentStep > step.id ? 'bg-music-purple' : 'bg-muted'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderPaymentMethods = () => (
    <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="pix">PIX</TabsTrigger>
        <TabsTrigger value="card">Cartão</TabsTrigger>
        <TabsTrigger value="boleto">Boleto</TabsTrigger>
      </TabsList>

      <TabsContent value="pix" className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <QrCode className="h-5 w-5 text-music-purple" />
              <CardTitle>Pagamento via PIX</CardTitle>
            </div>
            <CardDescription>
              Pagamento instantâneo via QR Code ou Copia e Cola
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!qrCodeGenerated ? (
              <Button 
                onClick={generateQRCode} 
                className="w-full" 
                variant="hero"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Gerando QR Code...
                  </>
                ) : (
                  <>
                    <QrCode className="mr-2 h-4 w-4" />
                    Gerar QR Code PIX
                  </>
                )}
              </Button>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg">
                  <img src={qrCodeUrl} alt="QR Code PIX" className="w-48 h-48" />
                  <p className="text-sm text-muted-foreground mt-2">
                    Escaneie com o app do seu banco
                  </p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>PIX Copia e Cola:</Label>
                  <div className="flex gap-2">
                    <Input 
                      value={pixKey} 
                      readOnly 
                      className="text-xs font-mono"
                    />
                    <Button size="sm" variant="outline" onClick={handleCopyPix}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-music-purple/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-music-purple" />
                    <span className="text-sm font-medium">Tempo limite: 30 minutos</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <Button onClick={() => setCurrentStep(2)} className="w-full" variant="hero">
                  Já paguei - Confirmar
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="card" className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-music-purple" />
              <CardTitle>Cartão de Crédito/Débito</CardTitle>
            </div>
            <CardDescription>
              Pagamento seguro via cartão
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Número do Cartão</Label>
              <Input 
                id="cardNumber" 
                placeholder="1234 5678 9012 3456"
                className="font-mono"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Validade</Label>
                <Input id="expiry" placeholder="MM/AA" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name">Nome no Cartão</Label>
              <Input id="name" placeholder="João Silva" />
            </div>

            <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm text-green-700">
                Pagamento 100% seguro e criptografado
              </span>
            </div>

            <Button onClick={() => setCurrentStep(2)} className="w-full" variant="hero">
              Continuar para Confirmação
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="boleto" className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-music-purple" />
              <CardTitle>Boleto Bancário</CardTitle>
            </div>
            <CardDescription>
              Pagamento em até 3 dias úteis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-800">
                  Vencimento: 3 dias úteis
                </span>
              </div>
              <p className="text-sm text-orange-700">
                O boleto será enviado por email e pode ser pago em qualquer banco, 
                casa lotérica ou pelo app do seu banco.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email para envio</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="joao@email.com"
                defaultValue="joao@email.com"
              />
            </div>

            <Button onClick={() => setCurrentStep(2)} className="w-full" variant="hero">
              Gerar Boleto
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );

  const renderConfirmation = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-music-purple" />
          Confirmar Pagamento
        </CardTitle>
        <CardDescription>
          Revise os detalhes antes de finalizar
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Artista:</span>
            <span className="font-semibold">{campaign.artist}</span>
          </div>
          <div className="flex justify-between">
            <span>Nível de apoio:</span>
            <Badge variant="secondary">{campaign.tier}</Badge>
          </div>
          <div className="flex justify-between">
            <span>Valor:</span>
            <span className="font-semibold text-music-purple">
              R$ {campaign.amount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Método:</span>
            <span className="font-semibold capitalize">{paymentMethod}</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span className="text-music-purple">R$ {campaign.amount.toFixed(2)}</span>
        </div>

        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={() => setCurrentStep(1)}
            className="flex-1"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
          <Button 
            onClick={processPayment}
            className="flex-1"
            variant="hero"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                <Heart className="mr-2 h-4 w-4" />
                Confirmar Apoio
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderProcessing = () => (
    <Card>
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <RefreshCw className="h-12 w-12 text-music-purple animate-spin" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Processando pagamento...</h3>
            <p className="text-muted-foreground">
              Aguarde enquanto confirmamos seu pagamento
            </p>
          </div>
          <Progress value={65} className="w-full" />
        </div>
      </CardContent>
    </Card>
  );

  const renderSuccess = () => (
    <Card>
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              Pagamento Aprovado!
            </h3>
            <p className="text-muted-foreground">
              Obrigado por apoiar {campaign.artist}! 
              Você receberá um email de confirmação em breve.
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Próximos passos:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Você receberá atualizações sobre a campanha</li>
              <li>• Seu apoio foi contabilizado na meta</li>
              <li>• Em breve você receberá seus benefícios</li>
            </ul>
          </div>

          <Button onClick={onClose} variant="hero" className="w-full">
            Voltar para Campanhas
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" onClick={onClose} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
            Apoiar Campanha
          </h1>
          <p className="text-muted-foreground">
            {campaign.artist} - {campaign.tier}
          </p>
        </div>

        {renderStepIndicator()}

        <div className="space-y-6">
          {currentStep === 1 && renderPaymentMethods()}
          {currentStep === 2 && renderConfirmation()}
          {currentStep === 3 && renderProcessing()}
          {currentStep === 4 && renderSuccess()}
        </div>
      </div>
    </div>
  );
};

export default PaymentFlow;