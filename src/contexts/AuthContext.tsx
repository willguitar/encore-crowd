import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  type: 'fan' | 'venue' | 'artist';
  avatar: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  login: (userType: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userType: string) => {
    const users = {
      fan: { 
        name: "João Silva", 
        type: "fan" as const, 
        avatar: "/placeholder.svg",
        email: "joao@email.com" 
      },
      venue: { 
        name: "Arena Music Hall", 
        type: "venue" as const, 
        avatar: "/placeholder.svg",
        email: "contato@arenareunits.com" 
      },
      artist: { 
        name: "Dream Theater", 
        type: "artist" as const, 
        avatar: "/placeholder.svg",
        email: "contact@dreamtheater.com" 
      }
    };
    setUser(users[userType as keyof typeof users]);
  };

  const logout = () => {
    setUser(null);
  };

  const isLoggedIn = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};