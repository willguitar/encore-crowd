import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  Heart,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentFlowProps {
  open: boolean;
  campaign: {
    id: number;
    artist: string;
    amount: number;
    tier: string;
  };
  onClose: () => void;
  onSuccess?: () => void;
}

const PaymentFlow = ({ open, campaign, onClose, onSuccess }: PaymentFlowProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false);
  const { toast } = useToast();

  const processPayment = () => {
    setIsProcessing(true);
    setCurrentStep(3);
    
    setTimeout(() => {
      setCurrentStep(4);
      setIsProcessing(false);
      
      if (onSuccess) {
        onSuccess();
      }
      
      toast({
        title: "Pagamento aprovado! 🎉",
        description: `Obrigado por apoiar ${campaign.artist}!`,
      });
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
            Apoiar {campaign.artist}
          </DialogTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6 p-2">
          {/* PIX Payment - Simplified for modal */}
          <Tabs defaultValue="pix" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="pix">PIX</TabsTrigger>
              <TabsTrigger value="card">Cartão</TabsTrigger>
              <TabsTrigger value="boleto">Boleto</TabsTrigger>
            </TabsList>

            <TabsContent value="pix" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <QrCode className="h-5 w-5 text-green-600" />
                    PIX - R$ {campaign.amount.toFixed(2)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-center p-4 bg-white rounded-lg">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PIX_${campaign.id}`}
                      alt="QR Code PIX" 
                      className="w-32 h-32"
                    />
                  </div>
                  <Button onClick={processPayment} className="w-full" variant="hero">
                    Simular Pagamento PIX
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="card" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    Cartão - R$ {campaign.amount.toFixed(2)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="1234 5678 9012 3456" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="MM/AA" />
                    <Input placeholder="CVV" />
                  </div>
                  <Button onClick={processPayment} className="w-full" variant="hero">
                    Simular Pagamento Cartão
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="boleto" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-purple-600" />
                    Boleto - R$ {campaign.amount.toFixed(2)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg text-center">
                    <p className="text-sm">Vencimento: 3 dias úteis</p>
                  </div>
                  <Button onClick={processPayment} className="w-full" variant="hero">
                    Gerar Boleto
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {isProcessing && (
            <Card>
              <CardContent className="p-6 text-center">
                <RefreshCw className="h-8 w-8 mx-auto animate-spin text-music-purple mb-4" />
                <h3 className="font-semibold mb-2">Processando...</h3>
                <Progress value={65} className="w-full" />
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentFlow;