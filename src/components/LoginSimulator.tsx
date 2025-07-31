import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, BarChart3, Music2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const LoginSimulator = () => {
  const { user, login, logout } = useAuth();

  if (user) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            {user.type === 'producer' && <BarChart3 className="h-5 w-5" />}
            {user.type === 'artist' && <Music2 className="h-5 w-5" />}
            {user.type === 'fan' && <User className="h-5 w-5" />}
            Logado como {user.name}
          </CardTitle>
          <CardDescription>
            {user.type === 'producer' && 'Produtor de Eventos'}
            {user.type === 'artist' && 'Artista/Banda'}
            {user.type === 'fan' && 'Fã/Apoiador'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" onClick={logout} className="w-full">
            Fazer Logout
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle>Testar Login</CardTitle>
        <CardDescription>
          Escolha um tipo de usuário para testar o protótipo
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button 
          variant="outline" 
          onClick={() => login('fan')} 
          className="w-full justify-start"
        >
          <User className="h-4 w-4 mr-2" />
          Entrar como Fã/Apoiador
        </Button>
        <Button 
          variant="outline" 
          onClick={() => login('producer')} 
          className="w-full justify-start"
        >
          <BarChart3 className="h-4 w-4 mr-2" />
          Entrar como Produtor
        </Button>
        <Button 
          variant="outline" 
          onClick={() => login('artist')} 
          className="w-full justify-start"
        >
          <Music2 className="h-4 w-4 mr-2" />
          Entrar como Artista
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginSimulator;