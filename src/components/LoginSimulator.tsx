import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, BarChart3, Music2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const LoginSimulator = () => {
  const { user, login, logout } = useAuth();

  if (user) {
    return (
      <Card className="w-full max-w-md mx-auto bg-card/80 backdrop-blur border-music-purple/20 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-foreground">
            {user.type === 'venue' && <BarChart3 className="h-5 w-5 text-music-purple" />}
            {user.type === 'artist' && <Music2 className="h-5 w-5 text-music-pink" />}
            {user.type === 'fan' && <User className="h-5 w-5 text-music-success" />}
            Conectado como {user.name}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {user.type === 'venue' && 'Proprietário de Espaço • Gerencie seu venue'}
            {user.type === 'artist' && 'Artista/Banda • Conecte-se com seus fãs'}
            {user.type === 'fan' && 'Fã/Apoiador • Financie seus artistas favoritos'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            variant="outline" 
            onClick={logout} 
            className="w-full border-music-purple/30 hover:border-music-purple hover:bg-music-purple/10"
          >
            Desconectar
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-card/80 backdrop-blur border-music-purple/20 shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-foreground">Demonstração Interativa</CardTitle>
        <CardDescription className="text-muted-foreground">
          Selecione um perfil para explorar a plataforma
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button 
          variant="outline" 
          onClick={() => login('fan')} 
          className="w-full justify-start border-music-success/30 hover:border-music-success hover:bg-music-success/10 group"
        >
          <User className="h-4 w-4 mr-3 text-music-success group-hover:scale-110 transition-transform" />
          <div className="text-left">
            <div className="font-medium">Fã/Apoiador</div>
            <div className="text-xs text-muted-foreground">Financie seus artistas favoritos</div>
          </div>
        </Button>
        <Button 
          variant="outline" 
          onClick={() => login('venue')} 
          className="w-full justify-start border-music-purple/30 hover:border-music-purple hover:bg-music-purple/10 group"
        >
          <BarChart3 className="h-4 w-4 mr-3 text-music-purple group-hover:scale-110 transition-transform" />
          <div className="text-left">
            <div className="font-medium">Proprietário de Espaço</div>
            <div className="text-xs text-muted-foreground">Gerencie seu venue</div>
          </div>
        </Button>
        <Button 
          variant="outline" 
          onClick={() => login('artist')} 
          className="w-full justify-start border-music-pink/30 hover:border-music-pink hover:bg-music-pink/10 group"
        >
          <Music2 className="h-4 w-4 mr-3 text-music-pink group-hover:scale-110 transition-transform" />
          <div className="text-left">
            <div className="font-medium">Artista/Banda</div>
            <div className="text-xs text-muted-foreground">Conecte-se com seus fãs</div>
          </div>
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginSimulator;