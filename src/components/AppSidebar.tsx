import { 
  Home, 
  Search, 
  Vote, 
  Trophy, 
  Plus, 
  User, 
  Settings as SettingsIcon,
  BarChart3,
  Music2
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { user } = useAuth();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-music-purple/20 text-music-purple font-medium" : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  // Main navigation items
  const mainItems = [
    { title: "Início", url: "/", icon: Home },
    { title: "Explorar", url: "/explore", icon: Search },
    { title: "Votação", url: "/voting", icon: Vote },
    { title: "Rankings", url: "/rankings", icon: Trophy },
  ];

  // User-specific items
  const getUserItems = () => {
    if (!user) return [];
    
    const items = [
      { title: "Dashboard", url: getDashboardUrl(), icon: BarChart3 },
      { title: "Perfil", url: "/profile", icon: User },
      { title: "Configurações", url: "/settings", icon: SettingsIcon },
    ];

    // Add specific items based on user type
    if (user.type === 'artist') {
      items.splice(1, 0, { 
        title: "Perfil Público", 
        url: `/artist/${user.name.toLowerCase().replace(/\s+/g, '-')}`, 
        icon: Music2 
      });
    }

    if (user.type !== 'fan') {
      items.splice(-2, 0, { title: "Criar Campanha", url: "/create-campaign", icon: Plus });
    }

    return items;
  };

  const getDashboardUrl = () => {
    switch (user?.type) {
      case 'venue': return '/venue-dashboard';
      case 'artist': return '/artist-dashboard';
      case 'fan': 
      default: return '/dashboard';
    }
  };

  const userItems = getUserItems();

  return (
    <Sidebar className="border-r border-border/40">
      <SidebarContent className="bg-background">

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4">
            Navegação
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="mx-2">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      <span className="ml-3">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Navigation */}
        {user && userItems.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-4">
              Minha Conta
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {userItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="mx-2">
                      <NavLink to={item.url} className={getNavCls}>
                        <item.icon className="h-4 w-4" />
                        <span className="ml-3">{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Quick Create Button */}
        {user && (
          <div className="mt-auto p-4 border-t border-border/40">
            <NavLink 
              to="/create-campaign" 
              className="flex items-center gap-3 w-full p-3 rounded-lg bg-gradient-to-r from-music-purple to-music-pink text-white hover:opacity-90 transition-opacity"
            >
              <Plus className="h-4 w-4" />
              <span className="font-medium">Criar Campanha</span>
            </NavLink>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}