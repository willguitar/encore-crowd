import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { User, Settings, LogOut, BarChart3, Music2, Music } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  const getDashboardUrl = () => {
    switch (user?.type) {
      case 'producer': return '/producer-dashboard';
      case 'artist': return '/artist-dashboard';
      case 'fan': 
      default: return '/dashboard';
    }
  };

  return (
    <header className="flex h-16 items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-6 sticky top-0 z-40">
      <div className="flex items-center justify-between w-full max-w-screen-2xl mx-auto">
        {/* Left section */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <SidebarTrigger className="lg:hidden" />
          
          {/* Logo - responsive */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-music-purple to-music-pink rounded-xl blur-sm opacity-60"></div>
              <div className="relative bg-gradient-to-r from-music-purple to-music-pink p-2 rounded-xl">
                <Music className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
                ShowFund
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Music Platform</span>
            </div>
          </Link>
        </div>

        {/* Center section - Navigation for larger screens */}
        <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
          <Link 
            to="/explore" 
            className="text-sm font-medium hover:text-music-purple transition-colors px-4 py-2 rounded-md hover:bg-music-purple/10 whitespace-nowrap"
          >
            Explorar
          </Link>
          <Link 
            to="/voting" 
            className="text-sm font-medium hover:text-music-purple transition-colors px-4 py-2 rounded-md hover:bg-music-purple/10 whitespace-nowrap"
          >
            Votação
          </Link>
          <Link 
            to="/rankings" 
            className="text-sm font-medium hover:text-music-purple transition-colors px-4 py-2 rounded-md hover:bg-music-purple/10 whitespace-nowrap"
          >
            Rankings
          </Link>
          {user && (
            <Link 
              to="/create-campaign" 
              className="text-sm font-medium bg-gradient-to-r from-music-purple to-music-pink text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg"
            >
              Criar Campanha
            </Link>
          )}
        </nav>

        {/* Right section - User menu */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-xs">{user.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border" align="end" forceMount>
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
                
                <DropdownMenuItem onClick={() => navigate(getDashboardUrl())}>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Dashboard
                </DropdownMenuItem>
                
                {user.type === 'artist' && (
                  <DropdownMenuItem onClick={() => navigate(`/artist/${user.name.toLowerCase().replace(/\s+/g, '-')}`)}>
                    <Music2 className="mr-2 h-4 w-4" />
                    Perfil Público
                  </DropdownMenuItem>
                )}
                
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  <User className="mr-2 h-4 w-4" />
                  Perfil
                </DropdownMenuItem>
                
                <DropdownMenuItem onClick={() => navigate('/settings')}>
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
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Entrar
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-background border" align="end">
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
              <Button variant="hero" size="sm" onClick={() => navigate('/register')}>
                Cadastrar
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;