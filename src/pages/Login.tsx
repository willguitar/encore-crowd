import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Music, Users, Mic2 } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState("fan");

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
          <Tabs value={userType} onValueChange={setUserType} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="fan" className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                Fã
              </TabsTrigger>
              <TabsTrigger value="producer" className="flex items-center gap-1">
                <Mic2 className="h-4 w-4" />
                Produtor
              </TabsTrigger>
              <TabsTrigger value="artist" className="flex items-center gap-1">
                <Music className="h-4 w-4" />
                Artista
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value={userType} className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              
              <Button className="w-full" variant="hero">
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
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;