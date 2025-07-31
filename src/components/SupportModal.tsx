import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, CreditCard, Check, Music, Users, Calendar, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SupportTier {
  id: number;
  name: string;
  amount: number;
  benefits: string[];
  popular?: boolean;
}

interface SupportModalProps {
  campaign: {
    id: number;
    artist: string;
    city: string;
    venue: string;
    targetAmount: number;
    currentAmount: number;
  };
  onSupportSuccess: (amount: number) => void;
}

const SupportModal = ({ campaign, onSupportSuccess }: SupportModalProps) => {
  const [selectedTier, setSelectedTier] = useState<SupportTier | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
    email: ""
  });
  const { toast } = useToast();

  const supportTiers: SupportTier[] = [
    {
      id: 1,
      name: "Apoiador",
      amount: 25,
      benefits: ["Agradecimento nas redes sociais", "Wallpaper exclusivo", "Newsletter VIP"]
    },
    {
      id: 2,
      name: "Fã Premium",
      amount: 50,
      benefits: ["Tudo do nível anterior", "Ingresso para o show", "Acesso prioritário ao venue"],
      popular: true
    },
    {
      id: 3,
      name: "VIP Experience",
      amount: 100,
      benefits: ["Tudo do nível anterior", "Meet & Greet com o artista", "Kit exclusivo de merchandise", "Foto autografada"]
    },
    {
      id: 4,
      name: "Super Fan",
      amount: 250,
      benefits: ["Tudo do nível anterior", "Soundcheck privado", "Camarote VIP", "Jantar exclusivo (se aplicável)"]
    }
  ];

  const handleTierSelect = (tier: SupportTier) => {
    setSelectedTier(tier);
    setCustomAmount("");
  };

  const handleCustomAmount = (amount: string) => {
    setCustomAmount(amount);
    setSelectedTier(null);
  };

  const getCurrentAmount = () => {
    if (selectedTier) return selectedTier.amount;
    return parseFloat(customAmount) || 0;
  };

  const getCurrentBenefits = () => {
    const amount = getCurrentAmount();
    
    // Find the best tier for the amount
    const applicableTier = supportTiers
      .filter(tier => tier.amount <= amount)
      .sort((a, b) => b.amount - a.amount)[0];
    
    if (applicableTier) {
      return applicableTier.benefits;
    }
    
    return ["Agradecimento especial", "Wallpaper exclusivo"];
  };

  const handleContinue = () => {
    const amount = getCurrentAmount();
    if (amount < 10) {
      toast({
        title: "Valor mínimo",
        description: "O valor mínimo de apoio é R$ 10",
        variant: "destructive"
      });
      return;
    }
    setShowPayment(true);
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const amount = getCurrentAmount();
    onSupportSuccess(amount);
    setIsProcessing(false);
    
    toast({
      title: "Apoio confirmado! 🎉",
      description: `Obrigado por apoiar ${campaign.artist} com R$ ${amount}!`,
    });
  };

  const progress = (campaign.currentAmount / campaign.targetAmount) * 100;

  if (showPayment) {
    return (
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-music-purple" />
            Finalizar Pagamento
          </DialogTitle>
          <DialogDescription>
            Apoio de R$ {getCurrentAmount()} para {campaign.artist}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Card className="p-4 bg-gradient-to-r from-music-purple/10 to-music-pink/10">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Valor do apoio:</span>
                <span className="font-semibold">R$ {getCurrentAmount()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Taxa da plataforma:</span>
                <span>R$ {(getCurrentAmount() * 0.05).toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>R$ {(getCurrentAmount() * 1.05).toFixed(2)}</span>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                placeholder="João Silva"
                value={paymentData.name}
                onChange={(e) => setPaymentData({...paymentData, name: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="joao@email.com"
                value={paymentData.email}
                onChange={(e) => setPaymentData({...paymentData, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardNumber">Número do cartão</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={paymentData.cardNumber}
                onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Validade</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/AA"
                  value={paymentData.expiryDate}
                  onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={paymentData.cvv}
                  onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={() => setShowPayment(false)}>
              Voltar
            </Button>
            <Button 
              variant="hero" 
              className="flex-1" 
              onClick={handlePayment}
              disabled={isProcessing}
            >
              {isProcessing ? "Processando..." : "Confirmar Pagamento"}
            </Button>
          </div>
        </div>
      </DialogContent>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="hero" size="sm">
          <Heart className="h-4 w-4 mr-2" />
          Apoiar Campanha
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Music className="h-5 w-5 text-music-purple" />
            Apoiar {campaign.artist}
          </DialogTitle>
          <DialogDescription>
            Ajude a trazer {campaign.artist} para {campaign.city}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Campaign Info */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <CardTitle className="text-lg">{campaign.artist}</CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {campaign.city}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {campaign.venue}
                    </span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progresso atual</span>
                  <span className="font-medium">
                    R$ {campaign.currentAmount.toLocaleString()} / R$ {campaign.targetAmount.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-music-purple to-music-pink h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {progress.toFixed(1)}% da meta atingida
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Support Tiers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Escolha seu nível de apoio</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supportTiers.map((tier) => (
                <Card 
                  key={tier.id} 
                  className={`cursor-pointer transition-all ${
                    selectedTier?.id === tier.id 
                      ? 'ring-2 ring-music-purple border-music-purple' 
                      : 'hover:border-music-purple/50'
                  } ${tier.popular ? 'relative' : ''}`}
                  onClick={() => handleTierSelect(tier)}
                >
                  {tier.popular && (
                    <Badge className="absolute -top-2 left-4 bg-music-purple">
                      Mais Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-base">{tier.name}</CardTitle>
                        <CardDescription className="text-2xl font-bold text-music-purple mt-1">
                          R$ {tier.amount}
                        </CardDescription>
                      </div>
                      {selectedTier?.id === tier.id && (
                        <Check className="h-5 w-5 text-music-purple" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      {tier.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-music-success" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Custom Amount */}
            <Card className={`cursor-pointer transition-all ${
              customAmount ? 'ring-2 ring-music-purple border-music-purple' : 'hover:border-music-purple/50'
            }`}>
              <CardHeader>
                <CardTitle className="text-base">Valor Personalizado</CardTitle>
                <CardDescription>
                  Defina o valor que deseja apoiar (mínimo R$ 10)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <span className="text-lg">R$</span>
                  <Input
                    type="number"
                    placeholder="0"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    min="10"
                    className="text-lg"
                  />
                </div>
                {customAmount && parseFloat(customAmount) >= 10 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Benefícios inclusos:</p>
                    <ul className="space-y-1 text-sm">
                      {getCurrentBenefits().map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="h-3 w-3 text-music-success" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Continue Button */}
          <div className="flex justify-end">
            <Button 
              variant="hero" 
              onClick={handleContinue}
              disabled={getCurrentAmount() < 10}
              className="px-8"
            >
              Continuar com R$ {getCurrentAmount() || 0}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SupportModal;