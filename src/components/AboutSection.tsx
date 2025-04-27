
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-biogreen-100 px-3 py-1 text-sm text-biogreen-700">
              Sobre Biodigestores
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-bioearth-800">
              O Que São Biodigestores?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Uma tecnologia sustentável para transformar resíduos orgânicos em energia e fertilizante.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-bioearth-700">Tecnologia Sustentável</h3>
            <p className="text-muted-foreground">
              Biodigestores são sistemas que transformam matéria orgânica em biogás e biofertilizante 
              através de um processo chamado digestão anaeróbica. Este processo ocorre sem a presença 
              de oxigênio e é realizado por bactérias que decompõem os materiais orgânicos.
            </p>
            
            <h3 className="text-2xl font-bold text-bioearth-700 mt-6">Impacto Ambiental</h3>
            <p className="text-muted-foreground">
              Além de gerarem energia renovável, os biodigestores ajudam a reduzir a emissão de gases
              de efeito estufa, diminuem o volume de resíduos enviados para aterros e produzem um 
              biofertilizante de excelente qualidade para plantações.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-biogreen-50 border-biogreen-100">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="h-12 w-12 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12a7 7 0 0 1 7 7v1"></path>
                    <path d="M8.5 2H12a7 7 0 0 1 7 7v6c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V9a7 7 0 0 1 7-7Z"></path>
                    <path d="M10 16v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Biogás</h4>
                <p className="text-sm text-muted-foreground">Energia limpa e renovável para cozinhar, aquecer e gerar eletricidade</p>
              </CardContent>
            </Card>
            
            <Card className="bg-bioblue-50 border-bioblue-100">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="h-12 w-12 rounded-full bg-bioblue-100 flex items-center justify-center text-bioblue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h20"></path>
                    <path d="M12 2v20"></path>
                    <path d="M12 9v0"></path>
                    <path d="M12 15v0"></path>
                    <path d="M9 12v0"></path>
                    <path d="M15 12v0"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Biofertilizante</h4>
                <p className="text-sm text-muted-foreground">Nutrientes ricos para melhorar a saúde do solo e produtividade agrícola</p>
              </CardContent>
            </Card>
            
            <Card className="bg-bioearth-100 border-bioearth-200">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="h-12 w-12 rounded-full bg-bioearth-200 flex items-center justify-center text-bioearth-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h12l4 6-10 13L2 9Z"></path>
                    <path d="M11 3 8 9l4 13 4-13-3-6"></path>
                    <path d="M6 3 2 9h20l-4-6"></path>
                    <path d="M2 9v4c0 2.5 2.5 3 2.5 5s-2.5 2.5-2.5 5h20c0-2.5-2.5-2.5-2.5-5s2.5-2.5 2.5-5V9"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Gestão de Resíduos</h4>
                <p className="text-sm text-muted-foreground">Redução do volume de lixo orgânico enviado para aterros sanitários</p>
              </CardContent>
            </Card>
            
            <Card className="bg-biogreen-50 border-biogreen-100">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="h-12 w-12 rounded-full bg-biogreen-100 flex items-center justify-center text-biogreen-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m2 9 3-3 3 3"></path>
                    <path d="M13 18H7a2 2 0 0 1-2-2V6"></path>
                    <path d="m22 15-3 3-3-3"></path>
                    <path d="M11 6h6a2 2 0 0 1 2 2v10"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold">Economia Circular</h4>
                <p className="text-sm text-muted-foreground">Transformação de resíduos em recursos valiosos para a comunidade</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
