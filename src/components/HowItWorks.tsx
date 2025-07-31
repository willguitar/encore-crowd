import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Music, CheckCircle, Sparkles, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      title: "Descubra e Conecte",
      description: "Encontre outros fãs na sua cidade ou crie uma campanha para trazer seu artista favorito. Nosso algoritmo usa dados do Spotify para sugerir artistas populares na sua região.",
      color: "text-music-purple"
    },
    {
      icon: Target,
      title: "Defina a Meta",
      description: "Estabeleça o valor necessário para o show, local e benefícios. Quanto mais apoiadores, mais chances de sucesso!",
      color: "text-music-pink"
    },
    {
      icon: Sparkles,
      title: "Mobilize a Comunidade",
      description: "Compartilhe a campanha, convide amigos e acompanhe o progresso em tempo real. Ganhe conquistas e suba no ranking dos maiores mobilizadores!",
      color: "text-music-success"
    },
    {
      icon: CheckCircle,
      title: "Show Confirmado!",
      description: "Meta atingida? Show confirmado! Os ingressos são liberados automaticamente para todos os apoiadores.",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Como 
            <span className="bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
              {" "}Funciona
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Um processo simples e transparente para transformar sua paixão musical em realidade
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-purple-100 hover:border-purple-200">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Spotify Integration Highlight */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-800">Integração com Spotify</h3>
                <p className="text-green-700">Conecte sua conta e receba sugestões personalizadas baseadas no seu gosto musical</p>
              </div>
            </div>
            <Button variant="success" size="lg">
              <Music className="h-5 w-5 mr-2" />
              Conectar Spotify
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="px-8">
            Começar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;