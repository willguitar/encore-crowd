import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

import { 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  CreditCard, 
  Trash2,
  AlertTriangle,
  Eye,
  EyeOff
} from "lucide-react";

const Settings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [notifications, setNotifications] = useState({
    emailCampaigns: true,
    emailShows: true,
    pushNotifications: true,
    smsUpdates: false,
    marketingEmails: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    showActivity: true,
    showLocation: true,
    allowMessages: true
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSaveSettings = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas preferências foram atualizadas com sucesso.",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Solicitação de exclusão",
      description: "Sua solicitação de exclusão de conta foi enviada para análise.",
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Configurações</h1>
            <p className="text-muted-foreground">
              Gerencie suas preferências e configurações da conta
            </p>
          </div>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="general">Geral</TabsTrigger>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
              <TabsTrigger value="privacy">Privacidade</TabsTrigger>
              <TabsTrigger value="billing">Pagamento</TabsTrigger>
              <TabsTrigger value="account">Conta</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Preferências Gerais
                  </CardTitle>
                  <CardDescription>
                    Configure suas preferências básicas da plataforma
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="language">Idioma</Label>
                      <Select defaultValue="pt-br">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o idioma" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pt-br">Português (Brasil)</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Fuso Horário</Label>
                      <Select defaultValue="brasilia">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o fuso horário" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brasilia">Brasília (GMT-3)</SelectItem>
                          <SelectItem value="sao-paulo">São Paulo (GMT-3)</SelectItem>
                          <SelectItem value="acre">Acre (GMT-5)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Tema escuro</Label>
                        <p className="text-sm text-muted-foreground">
                          Use o tema escuro da interface
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Auto-play de música</Label>
                        <p className="text-sm text-muted-foreground">
                          Reproduzir automaticamente prévia de músicas
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notificações
                  </CardTitle>
                  <CardDescription>
                    Configure como você quer receber notificações
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email - Campanhas</Label>
                        <p className="text-sm text-muted-foreground">
                          Receber emails sobre novas campanhas e atualizações
                        </p>
                      </div>
                      <Switch 
                        checked={notifications.emailCampaigns}
                        onCheckedChange={(checked) => 
                          setNotifications({...notifications, emailCampaigns: checked})
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email - Shows</Label>
                        <p className="text-sm text-muted-foreground">
                          Receber emails sobre shows e eventos
                        </p>
                      </div>
                      <Switch 
                        checked={notifications.emailShows}
                        onCheckedChange={(checked) => 
                          setNotifications({...notifications, emailShows: checked})
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Notificações Push</Label>
                        <p className="text-sm text-muted-foreground">
                          Receber notificações no navegador
                        </p>
                      </div>
                      <Switch 
                        checked={notifications.pushNotifications}
                        onCheckedChange={(checked) => 
                          setNotifications({...notifications, pushNotifications: checked})
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>SMS</Label>
                        <p className="text-sm text-muted-foreground">
                          Receber atualizações importantes por SMS
                        </p>
                      </div>
                      <Switch 
                        checked={notifications.smsUpdates}
                        onCheckedChange={(checked) => 
                          setNotifications({...notifications, smsUpdates: checked})
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Emails promocionais</Label>
                        <p className="text-sm text-muted-foreground">
                          Receber ofertas especiais e novidades
                        </p>
                      </div>
                      <Switch 
                        checked={notifications.marketingEmails}
                        onCheckedChange={(checked) => 
                          setNotifications({...notifications, marketingEmails: checked})
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Privacidade e Segurança
                  </CardTitle>
                  <CardDescription>
                    Controle quem pode ver suas informações
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Visibilidade do perfil</Label>
                      <Select 
                        value={privacy.profileVisibility}
                        onValueChange={(value) => 
                          setPrivacy({...privacy, profileVisibility: value})
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Público</SelectItem>
                          <SelectItem value="friends">Apenas amigos</SelectItem>
                          <SelectItem value="private">Privado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Mostrar atividade</Label>
                        <p className="text-sm text-muted-foreground">
                          Permitir que outros vejam sua atividade
                        </p>
                      </div>
                      <Switch 
                        checked={privacy.showActivity}
                        onCheckedChange={(checked) => 
                          setPrivacy({...privacy, showActivity: checked})
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Mostrar localização</Label>
                        <p className="text-sm text-muted-foreground">
                          Exibir sua cidade no perfil
                        </p>
                      </div>
                      <Switch 
                        checked={privacy.showLocation}
                        onCheckedChange={(checked) => 
                          setPrivacy({...privacy, showLocation: checked})
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Permitir mensagens</Label>
                        <p className="text-sm text-muted-foreground">
                          Outros usuários podem te enviar mensagens
                        </p>
                      </div>
                      <Switch 
                        checked={privacy.allowMessages}
                        onCheckedChange={(checked) => 
                          setPrivacy({...privacy, allowMessages: checked})
                        }
                      />
                    </div>
                  </div>

                  <Separator />
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Alterar senha</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Senha atual</Label>
                        <div className="relative">
                          <Input 
                            id="current-password" 
                            type={showPassword ? "text" : "password"}
                            placeholder="Digite sua senha atual"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nova senha</Label>
                        <Input 
                          id="new-password" 
                          type="password"
                          placeholder="Digite sua nova senha"
                        />
                      </div>
                    </div>
                    <Button>Alterar senha</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Pagamento e Faturamento
                  </CardTitle>
                  <CardDescription>
                    Gerencie seus métodos de pagamento e histórico
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-12 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                          VISA
                        </div>
                        <div>
                          <p className="font-medium">**** **** **** 1234</p>
                          <p className="text-sm text-muted-foreground">Expira em 12/26</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Editar</Button>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      + Adicionar método de pagamento
                    </Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Histórico de transações</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Apoio - Dream Theater</p>
                          <p className="text-sm text-muted-foreground">15 jan 2024</p>
                        </div>
                        <span className="font-medium">R$ 50,00</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Apoio - Iron Maiden</p>
                          <p className="text-sm text-muted-foreground">10 jan 2024</p>
                        </div>
                        <span className="font-medium">R$ 100,00</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações da Conta</CardTitle>
                  <CardDescription>
                    Gerencie suas informações básicas da conta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="account-email">Email da conta</Label>
                      <Input 
                        id="account-email" 
                        value={user?.email || ""}
                        disabled
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="account-type">Tipo de conta</Label>
                      <Input 
                        id="account-type" 
                        value={
                          user?.type === 'producer' ? 'Produtor' :
                          user?.type === 'artist' ? 'Artista' : 'Fã'
                        }
                        disabled
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive">
                <CardHeader>
                  <CardTitle className="text-destructive flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Zona de Perigo
                  </CardTitle>
                  <CardDescription>
                    Ações irreversíveis relacionadas à sua conta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-destructive rounded-lg">
                    <div>
                      <h4 className="font-medium text-destructive">Excluir conta</h4>
                      <p className="text-sm text-muted-foreground">
                        Esta ação não pode ser desfeita. Todos os seus dados serão permanentemente removidos.
                      </p>
                    </div>
                    <Button 
                      variant="destructive" 
                      onClick={handleDeleteAccount}
                      className="flex items-center gap-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      Excluir conta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end mt-8">
            <Button onClick={handleSaveSettings}>
              Salvar todas as configurações
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;