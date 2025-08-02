import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Music } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();

  const handleLogin = () => {
    // Simular verificação de credenciais
    if (!email || !password) {
      toast({
        title: "Erro no login",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Simular diferentes tipos de usuário baseado no email para o protótipo
    let userType = 'fan'; // padrão
    if (email.includes('producer') || email.includes('produtor')) {
      userType = 'producer';
    } else if (email.includes('artist') || email.includes('artista') || email.includes('banda')) {
      userType = 'artist';
    }

    // Fazer login com o tipo detectado
    login(userType as 'fan' | 'producer' | 'artist');

    toast({
      title: "Login realizado com sucesso!",
      description: `Bem-vindo(a) de volta!`,
    });

    // Redirecionar baseado no tipo de usuário
    setTimeout(() => {
      switch (userType) {
        case "fan":
          navigate("/dashboard");
          break;
        case "producer":
          navigate("/producer-dashboard");
          break;
        case "artist":
          navigate("/artist-dashboard");
          break;
        default:
          navigate("/dashboard");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-music-purple/20 via-background to-music-pink/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Music className="h-8 w-8 text-music-purple" />
            <span className="text-2xl font-bold bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
              ShowFund
            </span>
          </div>
          <CardTitle className="text-2xl">Bem-vindo de volta</CardTitle>
          <CardDescription>
            Entre na sua conta para continuar apoiando a música local
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                💡 Para teste: use emails como "fan@teste.com", "produtor@teste.com" ou "artista@teste.com"
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <Button className="w-full" variant="hero" onClick={handleLogin}>
              Entrar
            </Button>
            
            <div className="text-center space-y-2">
              <Button variant="outline" className="w-full">
                Conectar com Spotify
              </Button>
              <p className="text-sm text-muted-foreground">
                Não tem conta? <Link to="/register" className="text-music-purple hover:underline">Cadastre-se</Link>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;