
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32 bg-biogreen-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-biogreen-200 px-3 py-1 text-sm text-biogreen-800">
              Processo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-bioearth-800">
              Como Funcionam os Biodigestores
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Um ciclo sustentável que transforma resíduos em recursos valiosos.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Card className="border-none shadow-md bg-white">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold">Coleta de Resíduos</h3>
              <p className="text-muted-foreground">
                Resíduos orgânicos como esterco animal, restos de alimentos e resíduos agrícolas são coletados e preparados para alimentar o biodigestor.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md bg-white">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold">Digestão Anaeróbica</h3>
              <p className="text-muted-foreground">
                Dentro do biodigestor, bactérias decompõem os materiais orgânicos sem oxigênio, produzindo biogás rico em metano e dióxido de carbono.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md bg-white">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold">Aproveitamento</h3>
              <p className="text-muted-foreground">
                O biogás é utilizado como fonte de energia para cozinhar, aquecer ou gerar eletricidade, enquanto o biofertilizante é aplicado no solo.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 relative">
          <div className="w-full h-1 bg-biogreen-200 absolute top-1/2"></div>
          <div className="flex justify-between relative">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-biogreen-600 text-white flex items-center justify-center mx-auto relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                  <path d="m7 16.5-4.74-2.85"></path>
                  <path d="m7 16.5 5-3"></path>
                  <path d="M7 16.5v5.17"></path>
                  <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                  <path d="m17 16.5-5-3"></path>
                  <path d="m17 16.5 4.74-2.85"></path>
                  <path d="M17 16.5v5.17"></path>
                  <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                  <path d="M12 10.5 7.26 7.65"></path>
                  <path d="m12 10.5 4.74-2.85"></path>
                  <path d="M12 10.5V2.17"></path>
                </svg>
              </div>
              <p className="mt-2 font-medium text-biogreen-800">Resíduos Orgânicos</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-biogreen-600 text-white flex items-center justify-center mx-auto relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11v1a10 10 0 1 1-9-10"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M10.5 3a15 15 0 0 1 4 10"></path>
                </svg>
              </div>
              <p className="mt-2 font-medium text-biogreen-800">Biodigestor</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-biogreen-600 text-white flex items-center justify-center mx-auto relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"></path>
                  <path d="M12 16.5V17"></path>
                  <rect x="5" y="21" width="14" height="2" rx="1"></rect>
                  <path d="M5 11h14"></path>
                  <path d="m8 5.5.01-.01"></path>
                  <path d="M16 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path>
                  <path d="M12 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path>
                  <path d="M8 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path>
                  <path d="M16 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path>
                </svg>
              </div>
              <p className="mt-2 font-medium text-biogreen-800">Biogás</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-biogreen-600 text-white flex items-center justify-center mx-auto relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h20"></path>
                  <path d="M12 2v20"></path>
                  <path d="M12 9v0"></path>
                  <path d="M12 15v0"></path>
                  <path d="M9 12v0"></path>
                  <path d="M15 12v0"></path>
                </svg>
              </div>
              <p className="mt-2 font-medium text-biogreen-800">Biofertilizante</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
