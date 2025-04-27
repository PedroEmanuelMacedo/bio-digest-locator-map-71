
import React from 'react';

const Benefits = () => {
  return (
    <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-biogreen-100 px-3 py-1 text-sm text-biogreen-700">
              Benefícios
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-bioearth-800">
              Por Que Adotar Biodigestores?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Descubra os múltiplos benefícios desta tecnologia sustentável para você e o planeta.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center text-center space-y-4 p-6 border border-border rounded-lg bg-biogreen-50/50">
            <div className="h-16 w-16 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 12c0-3 2.5-5 5-5 0 0 3 1 3 5-2 0-5 0-8 0Z"></path>
                <path d="M4 12c0-3 2.5-5 5-5 0 0 3 1 3 5-2 0-5 0-8 0Z"></path>
                <path d="M14 7c0-2 1-3 3-3 0 0 1 1 1 3-1 0-3 0-4 0Z"></path>
                <path d="M6 7c0-2 1-3 3-3 0 0 1 1 1 3-1 0-3 0-4 0Z"></path>
                <path d="M10 22c0-5 2-8 4-8s4 3 4 8"></path>
                <path d="M5 22c0-5 2-8 5-8"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Sustentabilidade Ambiental</h3>
            <p className="text-muted-foreground">
              Reduz a emissão de gases de efeito estufa e impede que metano seja liberado na atmosfera, contribuindo para combater as mudanças climáticas.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4 p-6 border border-border rounded-lg bg-biogreen-50/50">
            <div className="h-16 w-16 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M13 5v2"></path>
                <path d="M13 17v2"></path>
                <path d="M13 11v2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Energia Renovável</h3>
            <p className="text-muted-foreground">
              Produz biogás que pode ser utilizado para cozinhar, aquecer água, gerar eletricidade ou até mesmo como combustível para veículos adaptados.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4 p-6 border border-border rounded-lg bg-biogreen-50/50">
            <div className="h-16 w-16 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Economia de Recursos</h3>
            <p className="text-muted-foreground">
              Reduz custos com energia e fertilizantes, criando independência energética e diminuindo a necessidade de insumos externos para a agricultura.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4 p-6 border border-border rounded-lg bg-biogreen-50/50">
            <div className="h-16 w-16 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h20"></path>
                <path d="M12 2v20"></path>
                <path d="M12 9v0"></path>
                <path d="M12 15v0"></path>
                <path d="M9 12v0"></path>
                <path d="M15 12v0"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Fertilizante Natural</h3>
            <p className="text-muted-foreground">
              O biofertilizante resultante é rico em nutrientes e melhora a qualidade do solo, aumentando a produtividade agrícola de forma natural.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4 p-6 border border-border rounded-lg bg-biogreen-50/50">
            <div className="h-16 w-16 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Saneamento</h3>
            <p className="text-muted-foreground">
              Melhora as condições sanitárias ao tratar adequadamente resíduos orgânicos, reduzindo a proliferação de patógenos e mau cheiro.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4 p-6 border border-border rounded-lg bg-biogreen-50/50">
            <div className="h-16 w-16 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 13a3 3 0 1 0 0-6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-3"></path>
                <path d="M9 10h1"></path>
                <path d="M9 14h3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Desenvolvimento Local</h3>
            <p className="text-muted-foreground">
              Promove autonomia energética e gera oportunidades de trabalho e renda para comunidades rurais e urbanas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
