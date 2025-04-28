
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 hero-pattern relative overflow-hidden">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-biogreen-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-bioblue-100 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="space-y-3 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-bioearth-800 max-w-3xl mx-auto">
            Descubra <span className="text-biogreen-600">Biodigestores</span> Perto de Você
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Encontre soluções sustentáveis para resíduos orgânicos e descubra como biodigestores estão transformando comunidades.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6 justify-center">
          <Button 
            className="bg-biogreen-600 hover:bg-biogreen-700 text-white rounded-full px-8"
            onClick={() => scrollToSection('mapa')}
          >
            Explorar Mapa
          </Button>
          <Button 
            variant="outline" 
            className="rounded-full px-8 border-biogreen-600 text-bioearth-800 hover:bg-biogreen-50"
            onClick={() => scrollToSection('sobre')}
          >
            Saiba Mais
          </Button>
        </div>
        
        <div className="flex gap-8 justify-center items-center py-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-biogreen-600">250+</span>
            <span className="text-sm text-muted-foreground">Biodigestores</span>
          </div>
          <div className="h-10 w-px bg-border"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-biogreen-600">50+</span>
            <span className="text-sm text-muted-foreground">Comunidades</span>
          </div>
          <div className="h-10 w-px bg-border"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-biogreen-600">10k+</span>
            <span className="text-sm text-muted-foreground">kg CO₂ Economizados</span>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-biogreen-500"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
