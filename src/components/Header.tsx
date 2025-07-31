import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Music, User, Settings, LogOut, BarChart3, Music2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { user, login, logout } = useAuth();


  const getDashboardUrl = () => {
    switch (user?.type) {
      case 'producer': return '/producer-dashboard';
      case 'artist': return '/artist-dashboard';
      case 'fan': 
      default: return '/dashboard';
    }
  };

  const getDashboardLabel = () => {
    return 'Dashboard';
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-music-purple to-music-pink rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-music-purple to-music-pink p-2 rounded-xl">
                <Music className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
                ShowFund
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Music Platform</span>
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="/explore" className="text-sm font-medium hover:text-music-purple transition-colors"> {/* Spotify Green hover */}
            Explorar
          </a>
          <a href="/voting" className="text-sm font-medium hover:text-music-purple transition-colors">
            Votação
          </a>
          <a href="/rankings" className="text-sm font-medium hover:text-music-purple transition-colors">
            Rankings
          </a>
          {user && (
            <a href="/create-campaign" className="text-sm font-medium hover:text-music-purple transition-colors">
              Criar Campanha
            </a>
          )}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.type === 'producer' && 'Produtor de Eventos'}
                      {user.type === 'artist' && 'Artista'}
                      {user.type === 'fan' && 'Fã/Apoiador'}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                <DropdownMenuItem onClick={() => window.location.href = '/dashboard'}>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  {getDashboardLabel()}
                </DropdownMenuItem>
                
                {user.type === 'artist' && (
                  <DropdownMenuItem onClick={() => window.location.href = '/artist-profile'}>
                    <Music2 className="mr-2 h-4 w-4" />
                    Perfil Público
                  </DropdownMenuItem>
                )}
                
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Perfil
                </DropdownMenuItem>
                
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Configurações
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Entrar
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48" align="end">
                  <DropdownMenuLabel>Entrar como:</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => login('fan')}>
                    <User className="mr-2 h-4 w-4" />
                    Fã/Apoiador
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => login('producer')}>
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Produtor de Eventos
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => login('artist')}>
                    <Music2 className="mr-2 h-4 w-4" />
                    Artista/Banda
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="hero" size="sm" onClick={() => window.location.href = '/register'}>
                Cadastrar
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;