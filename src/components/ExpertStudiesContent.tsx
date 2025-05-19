
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Book, BookOpen } from 'lucide-react';

const ExpertStudiesContent = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-biogreen-800 mb-4">Estudos de Especialistas</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça as pesquisas e estudos científicos que fundamentam a eficácia e importância dos biodigestores para o meio ambiente e a sociedade.
          </p>
        </div>

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Artigos</span>
            </TabsTrigger>
            <TabsTrigger value="research" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              <span>Pesquisas</span>
            </TabsTrigger>
            <TabsTrigger value="cases" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Casos de Sucesso</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles">
            <div className="grid gap-6 md:grid-cols-2">
              <StudyCard 
                title="Eficiência de Biodigestores Urbanos"
                author="Dra. Maria Silva, UFPR"
                year="2023"
                description="Estudo comparativo sobre a eficiência energética de biodigestores em diferentes ambientes urbanos no Brasil."
                link="#"
              />
              <StudyCard 
                title="Biodigestão Anaeróbica em Ambientes Controlados"
                author="Dr. João Pereira, USP"
                year="2022"
                description="Análise dos processos de biodigestão anaeróbica e sua aplicabilidade em projetos de compostagem urbana."
                link="#"
              />
              <StudyCard 
                title="Impacto Ambiental da Compostagem Urbana"
                author="Profa. Ana Costa, UFRJ"
                year="2023"
                description="Avaliação do impacto ambiental positivo da implementação de sistemas de compostagem em grandes cidades."
                link="#"
              />
              <StudyCard 
                title="Biogás de Resíduos Orgânicos Domésticos"
                author="Dr. Carlos Mendes, Unicamp"
                year="2021"
                description="Pesquisa sobre o potencial de geração de biogás a partir de resíduos orgânicos domésticos em biodigestores comunitários."
                link="#"
              />
            </div>
          </TabsContent>

          <TabsContent value="research">
            <div className="space-y-6">
              <ResearchItem 
                title="Eficiência Energética em Biodigestores Comunitários"
                institution="Universidade Federal do Paraná (UFPR)"
                period="2021-2023"
                description="Pesquisa abrangente sobre a eficiência energética de biodigestores comunitários em diferentes condições climáticas e socioeconômicas do Brasil."
                findings={[
                  "Biodigestores comunitários podem reduzir em até 30% o volume de resíduos enviados para aterros sanitários",
                  "Produção de biogás em escala comunitária é economicamente viável em cidades com mais de 100 mil habitantes",
                  "A instalação de biodigestores em regiões periféricas cria oportunidades de trabalho e renda para comunidades locais"
                ]}
              />
              <ResearchItem 
                title="Tecnologias de Biodigestão para Resíduos Urbanos"
                institution="Universidade de São Paulo (USP)"
                period="2020-2022"
                description="Desenvolvimento e teste de novas tecnologias de biodigestão adaptadas para o contexto urbano brasileiro."
                findings={[
                  "Sistemas modulares de biodigestão são mais adaptáveis a diferentes espaços urbanos",
                  "A combinação de digestão anaeróbica com compostagem aeróbica resulta em maior aproveitamento dos resíduos",
                  "Automação e monitoramento digital podem aumentar em até 25% a eficiência da biodigestão"
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="cases">
            <div className="space-y-8">
              <CaseStudy 
                title="Rede de Biodigestores no Bairro Boqueirão, Curitiba"
                year="2020-Presente"
                description="Implementação de uma rede de biodigestores comunitários no bairro Boqueirão, em Curitiba, atendendo mais de 15 mil habitantes."
                results={[
                  "Redução de 45% na coleta de resíduos orgânicos no bairro",
                  "Produção de adubo suficiente para manutenção de todas as praças e áreas verdes da região",
                  "Geração de biogás utilizado em restaurantes comunitários",
                  "Criação de 12 postos de trabalho diretos para moradores locais"
                ]}
                imageUrl="https://images.unsplash.com/photo-1617693739920-b890df56e0ff?q=80&w=1974&auto=format&fit=crop"
              />
              <CaseStudy 
                title="Biodigestores nas Escolas de Florianópolis"
                year="2021-Presente"
                description="Projeto que instalou biodigestores em 25 escolas municipais de Florianópolis como ferramenta pedagógica e de sustentabilidade."
                results={[
                  "Transformação de 100% dos resíduos orgânicos das merendas escolares em compostos para hortas pedagógicas",
                  "Economia de 30% no consumo de gás para cozinha nas escolas participantes",
                  "Formação de mais de 12 mil alunos em princípios de compostagem e digestão anaeróbica",
                  "Projeto premiado pela UNESCO como iniciativa inovadora em educação ambiental"
                ]}
                imageUrl="https://images.unsplash.com/photo-1595541436845-5a474bf0b985?q=80&w=1974&auto=format&fit=crop"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Componente de Card para estudos e artigos
const StudyCard = ({ title, author, year, description, link }: { 
  title: string; 
  author: string; 
  year: string; 
  description: string; 
  link: string;
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-biogreen-700">{title}</CardTitle>
        <CardDescription>{author} • {year}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={link} className="text-biogreen-600 hover:text-biogreen-800 text-sm font-medium flex items-center">
          Acessar estudo completo
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </CardContent>
    </Card>
  );
};

// Componente para pesquisas
const ResearchItem = ({ title, institution, period, description, findings }: { 
  title: string; 
  institution: string; 
  period: string; 
  description: string; 
  findings: string[];
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-biogreen-700">{title}</CardTitle>
        <CardDescription className="flex flex-col gap-1">
          <span className="font-medium">{institution}</span>
          <span>{period}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <div>
          <h4 className="font-semibold text-biogreen-800 mb-2">Principais descobertas:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {findings.map((finding, index) => (
              <li key={index} className="text-gray-700">{finding}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

// Componente para casos de sucesso
const CaseStudy = ({ title, year, description, results, imageUrl }: { 
  title: string; 
  year: string; 
  description: string; 
  results: string[];
  imageUrl: string;
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="order-2 md:order-1">
        <h3 className="text-xl font-semibold text-biogreen-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{year}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <div>
          <h4 className="font-semibold text-biogreen-700 mb-2">Resultados Alcançados:</h4>
          <ul className="list-disc pl-5 space-y-2">
            {results.map((result, index) => (
              <li key={index} className="text-gray-700">{result}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-56 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ExpertStudiesContent;
