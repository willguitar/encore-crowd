import { Music, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Music className="h-8 w-8 text-music-purple" />
              <span className="text-2xl font-bold bg-gradient-to-r from-music-purple to-music-pink bg-clip-text text-transparent">
                ShowFund
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              A plataforma que conecta fãs, artistas e produtores para realizar shows 
              incríveis através do financiamento coletivo baseado na demanda local.
            </p>
            <div className="flex gap-4">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-music-purple cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-music-purple cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-music-purple cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-music-purple cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Para Fãs */}
          <div>
            <h4 className="font-semibold mb-4 text-music-purple">Para Fãs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Como Apoiar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Encontrar Shows</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ranking de Fãs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conectar Spotify</a></li>
            </ul>
          </div>
          
          {/* Para Artistas */}
          <div>
            <h4 className="font-semibold mb-4 text-music-pink">Para Artistas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Criar Perfil</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gerenciar Shows</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 ShowFund. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Ajuda</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;