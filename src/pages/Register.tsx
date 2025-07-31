import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Music, Users, Mic2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
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
          <CardTitle className="text-2xl">Criar Conta</CardTitle>
          <CardDescription>
            Junte-se à comunidade que move a música local
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
            
            <TabsContent value="fan" className="space-y-4 mt-6">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input id="firstName" placeholder="João" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input id="lastName" placeholder="Silva" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="city" placeholder="São Paulo, SP" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
            </TabsContent>

            <TabsContent value="producer" className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Nome/Empresa</Label>
                <Input id="companyName" placeholder="Produtora Musical XYZ" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="contato@produtora.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Cidade de Atuação</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="city" placeholder="São Paulo, SP" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Experiência</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione sua experiência" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Iniciante (0-2 anos)</SelectItem>
                    <SelectItem value="intermediate">Intermediário (3-5 anos)</SelectItem>
                    <SelectItem value="advanced">Avançado (5+ anos)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Sobre você</Label>
                <Textarea id="bio" placeholder="Conte sobre sua experiência em produção de eventos..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
            </TabsContent>

            <TabsContent value="artist" className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="artistName">Nome Artístico/Banda</Label>
                <Input id="artistName" placeholder="Nome da Banda" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="contato@banda.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="genre">Gênero Musical</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o gênero principal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rock">Rock</SelectItem>
                    <SelectItem value="pop">Pop</SelectItem>
                    <SelectItem value="indie">Indie</SelectItem>
                    <SelectItem value="electronic">Eletrônica</SelectItem>
                    <SelectItem value="sertanejo">Sertanejo</SelectItem>
                    <SelectItem value="funk">Funk</SelectItem>
                    <SelectItem value="mpb">MPB</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Cidade Base</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="city" placeholder="São Paulo, SP" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
            </TabsContent>
            
            <div className="space-y-4 mt-6">
              <Button className="w-full" variant="hero">
                Criar Conta
              </Button>
              
              <div className="text-center space-y-2">
                <Button variant="outline" className="w-full">
                  Conectar com Spotify
                </Button>
                <p className="text-sm text-muted-foreground">
                  Já tem conta? <Link to="/login" className="text-music-purple hover:underline">Entrar</Link>
                </p>
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;