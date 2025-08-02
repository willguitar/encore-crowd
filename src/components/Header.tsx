import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Music, User, Settings, LogOut, BarChart3, Music2, Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo - sempre visível */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-music-purple to-music-pink rounded-xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-music-purple to-music-pink p-2 rounded-xl">
                <Music className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
                ShowFund
              </span>
              <span className="text-xs text-muted-foreground -mt-1 hidden sm:block">Music Platform</span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
          <Link to="/explore" className="text-sm font-medium hover:text-music-purple transition-colors flex items-center justify-center py-2">
            Explorar
          </Link>
          <Link to="/voting" className="text-sm font-medium hover:text-music-purple transition-colors flex items-center justify-center py-2">
            Votação
          </Link>
          <Link to="/rankings" className="text-sm font-medium hover:text-music-purple transition-colors flex items-center justify-center py-2">
            Rankings
          </Link>
          {user && (
            <Link to="/create-campaign" className="text-sm font-medium hover:text-music-purple transition-colors flex items-center justify-center py-2 px-3 rounded-md bg-music-purple/10">
              Criar Campanha
            </Link>
          )}
        </nav>

        {/* Desktop User Menu */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
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
              <DropdownMenuContent className="w-56 bg-background border z-50" align="end" forceMount>
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
                  {getDashboardLabel()}
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
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Entrar
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-background border z-50" align="end">
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
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border z-50" align="end" forceMount>
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
                  {getDashboardLabel()}
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
          )}
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background">
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex items-center gap-3 px-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-music-purple to-music-pink rounded-xl blur-sm opacity-60"></div>
                    <div className="relative bg-gradient-to-r from-music-purple to-music-pink p-2 rounded-xl">
                      <Music className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
                      ShowFund
                    </span>
                    <span className="text-xs text-muted-foreground -mt-1">Music Platform</span>
                  </div>
                </div>
                
                <nav className="flex flex-col gap-2">
                  <Link 
                    to="/explore" 
                    className="text-lg font-medium hover:text-music-purple transition-colors p-3 rounded-md hover:bg-music-purple/10"
                    onClick={handleNavClick}
                  >
                    Explorar
                  </Link>
                  <Link 
                    to="/voting" 
                    className="text-lg font-medium hover:text-music-purple transition-colors p-3 rounded-md hover:bg-music-purple/10"
                    onClick={handleNavClick}
                  >
                    Votação
                  </Link>
                  <Link 
                    to="/rankings" 
                    className="text-lg font-medium hover:text-music-purple transition-colors p-3 rounded-md hover:bg-music-purple/10"
                    onClick={handleNavClick}
                  >
                    Rankings
                  </Link>
                  {user && (
                    <Link 
                      to="/create-campaign" 
                      className="text-lg font-medium hover:text-music-purple transition-colors p-3 rounded-md bg-music-purple/10"
                      onClick={handleNavClick}
                    >
                      Criar Campanha
                    </Link>
                  )}
                </nav>
                
                {!user && (
                  <div className="flex flex-col gap-3 mt-6 px-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="justify-start">
                          <User className="mr-2 h-4 w-4" />
                          Entrar
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-48 bg-background border z-50">
                        <DropdownMenuLabel>Entrar como:</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => { login('fan'); handleNavClick(); }}>
                          <User className="mr-2 h-4 w-4" />
                          Fã/Apoiador
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { login('producer'); handleNavClick(); }}>
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Produtor de Eventos
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => { login('artist'); handleNavClick(); }}>
                          <Music2 className="mr-2 h-4 w-4" />
                          Artista/Banda
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="hero" onClick={() => { navigate('/register'); handleNavClick(); }}>
                      Cadastrar
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;