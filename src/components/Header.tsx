
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-biogreen-500 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5 text-white"
            >
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              <path d="M8.5 8.5v.01" />
              <path d="M16 15.5v.01" />
              <path d="M12 12a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Z" />
            </svg>
          </div>
          <span className="text-lg font-semibold text-biogreen-800">BioDiGeo</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#sobre" className="text-sm font-medium text-foreground hover:text-biogreen-600 transition-colors">Sobre</a>
          <a href="#como-funciona" className="text-sm font-medium text-foreground hover:text-biogreen-600 transition-colors">Como Funciona</a>
          <a href="#beneficios" className="text-sm font-medium text-foreground hover:text-biogreen-600 transition-colors">Benefícios</a>
          <a href="#mapa" className="text-sm font-medium text-foreground hover:text-biogreen-600 transition-colors">Mapa</a>
          <a href="#contato" className="text-sm font-medium text-foreground hover:text-biogreen-600 transition-colors">Contato</a>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">Entrar</Button>
          <Button variant="default" size="sm" className="bg-biogreen-600 hover:bg-biogreen-700">Registrar</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
