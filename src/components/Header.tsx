
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            {/* Novo logo com imagem enviada */}
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center shadow">
              <img
                src="/lovable-uploads/5a2e5b95-b628-4543-9edf-9b7aa79ef7f7.png"
                alt="Logo Compostaqui"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg font-semibold text-biogreen-800">Compostaqui</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/#sobre" className="text-sm font-medium text-foreground hover:text-biogreen-600 transition-colors">Sobre</Link>
          <Link to="/#como-funciona" className="text-sm font-medium text-foreground hover:text-biogreen-600 transition-colors">Como Funciona</Link>
          <Link to="/#beneficios" className="text-sm font-medium text-foreground hover:text-biogreen-600 transition-colors">Benefícios</Link>
          <Link to="/#mapa" className="text-sm font-medium text-foreground hover:text-biogreen-600 transition-colors">Mapa</Link>
          <Link to="/estudos" className="text-sm font-medium text-foreground hover:text-biogreen-600 transition-colors">Estudos</Link>
          <Link to="/#contato" className="text-sm font-medium text-foreground hover:text-biogreen-600 transition-colors">Contato</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
