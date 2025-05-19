
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// This is our mock database of studies
const studiesData = {
  "efficiency-biodigestors": {
    title: "Eficiência de Biodigestores Urbanos",
    author: "Dra. Maria Silva, UFPR",
    year: "2023",
    description: "Estudo comparativo sobre a eficiência energética de biodigestores em diferentes ambientes urbanos no Brasil.",
    content: `
      <h2>Resumo</h2>
      <p>Este estudo avaliou a eficiência energética de biodigestores instalados em diferentes contextos urbanos no Brasil. Foram analisados 15 sistemas em operação em capitais das cinco regiões do país, considerando variáveis como temperatura ambiente, composição dos resíduos e design dos biodigestores.</p>
      
      <h2>Metodologia</h2>
      <p>A pesquisa utilizou uma abordagem mista com coleta de dados quantitativos sobre produção de biogás, temperatura de operação e composição de resíduos, além de entrevistas com operadores e usuários dos sistemas.</p>
      
      <h2>Resultados principais</h2>
      <ul>
        <li>Biodigestores em regiões mais quentes apresentaram eficiência 23% superior na produção de biogás.</li>
        <li>Sistemas que receberam treinamento técnico regular tiveram 31% menos problemas operacionais.</li>
        <li>A separação prévia de resíduos aumentou a eficiência energética em até 42%.</li>
      </ul>
      
      <h2>Conclusões</h2>
      <p>Os resultados demonstram que a eficiência de biodigestores urbanos no Brasil pode ser significativamente melhorada através da combinação de design apropriado para condições climáticas locais, capacitação técnica contínua e educação para separação adequada de resíduos.</p>
    `,
    references: [
      "Silva, M. et al. (2023). Comparative analysis of urban biodigesters in Brazil. Journal of Renewable Energy, 45(3), 234-249.",
      "Pereira, J. & Costa, A. (2022). Urban waste management through anaerobic digestion. Environmental Engineering Science, 38(2), 112-128.",
      "Santos, C. & Oliveira, T. (2023). Climate impact on biogas production in tropical regions. Bioresource Technology, 388, 121-135."
    ]
  },
  
  "anaerobic-biodigestion": {
    title: "Biodigestão Anaeróbica em Ambientes Controlados",
    author: "Dr. João Pereira, USP",
    year: "2022",
    description: "Análise dos processos de biodigestão anaeróbica e sua aplicabilidade em projetos de compostagem urbana.",
    content: `
      <h2>Resumo</h2>
      <p>Esta pesquisa investigou os processos de biodigestão anaeróbica em ambientes controlados, com foco em aplicações urbanas de pequena e média escala. O estudo desenvolveu protocolos otimizados para maximizar a produção de biogás e biofertilizantes em condições variáveis.</p>
      
      <h2>Metodologia</h2>
      <p>Foram construídos protótipos de biodigestores em escala laboratorial com diferentes configurações. Os experimentos controlaram variáveis como temperatura, pH, relação C/N e tempo de retenção hidráulica.</p>
      
      <h2>Resultados principais</h2>
      <ul>
        <li>A manutenção de temperatura entre 35°C e 37°C resultou na maior produção de biogás.</li>
        <li>pH entre 6.8 e 7.2 demonstrou ser ótimo para o desenvolvimento das comunidades microbianas anaeróbicas.</li>
        <li>A adição controlada de resíduos ricos em nitrogênio aumentou a produção de biogás em até 28%.</li>
        <li>O pré-tratamento mecânico dos resíduos acelerou o processo de decomposição em 45%.</li>
      </ul>
      
      <h2>Conclusões</h2>
      <p>Os resultados indicam que pequenos ajustes nos parâmetros operacionais podem ter impactos significativos na eficiência dos biodigestores urbanos. O estudo propõe um modelo de operação adaptável a diferentes escalas e condições ambientais.</p>
    `,
    references: [
      "Pereira, J. & Santos, L. (2022). Optimization of anaerobic digestion parameters for urban applications. Bioresource Technology, 356, 189-203.",
      "Almeida, R., Pereira, J. & Costa, P. (2021). Microbial communities in urban biodigesters. Journal of Environmental Microbiology, 18(4), 432-445.",
      "Fernandes, T. & Pereira, J. (2022). Pre-treatment methods for organic waste digestion. Waste Management Research, 29(3), 245-261."
    ]
  },
  
  "environmental-impact": {
    title: "Impacto Ambiental da Compostagem Urbana",
    author: "Profa. Ana Costa, UFRJ",
    year: "2023",
    description: "Avaliação do impacto ambiental positivo da implementação de sistemas de compostagem em grandes cidades.",
    content: `
      <h2>Resumo</h2>
      <p>Este estudo avaliou o impacto ambiental da implementação de programas de compostagem em três grandes cidades brasileiras. A pesquisa quantificou a redução na emissão de gases de efeito estufa, economia de recursos hídricos e redução no volume de resíduos enviados para aterros sanitários.</p>
      
      <h2>Metodologia</h2>
      <p>Foi realizada uma análise de ciclo de vida (ACV) comparando cenários com e sem implementação de sistemas de compostagem urbana, utilizando dados coletados ao longo de dois anos em São Paulo, Rio de Janeiro e Belo Horizonte.</p>
      
      <h2>Resultados principais</h2>
      <ul>
        <li>Redução média de 32% nas emissões de metano relacionadas à gestão de resíduos orgânicos.</li>
        <li>Diminuição de 28% no volume de resíduos enviados para aterros sanitários.</li>
        <li>Economia de 143 milhões de litros de água anualmente através do uso de composto em vez de fertilizantes sintéticos.</li>
        <li>Economia financeira estimada de R$ 18,5 milhões por ano em custos de transporte e disposição de resíduos.</li>
      </ul>
      
      <h2>Conclusões</h2>
      <p>Os resultados demonstram que a implementação sistemática de programas de compostagem urbana representa uma estratégia eficaz para mitigação de impactos ambientais no contexto das grandes cidades brasileiras, gerando benefícios ambientais mensuráveis e economias significativas.</p>
    `,
    references: [
      "Costa, A. & Ribeiro, M. (2023). Environmental benefits of urban composting in Brazilian metropolises. Journal of Cleaner Production, 387, 221-236.",
      "Almeida, S., Costa, A. & Silva, P. (2022). Life cycle assessment of organic waste management scenarios. Waste Management, 78, 411-425.",
      "Costa, A., Ferreira, J. & Santos, B. (2023). Economic impacts of waste diversion through composting. Resources, Conservation & Recycling, 192, 172-188."
    ]
  },
  
  "biogas-domestic": {
    title: "Biogás de Resíduos Orgânicos Domésticos",
    author: "Dr. Carlos Mendes, Unicamp",
    year: "2021",
    description: "Pesquisa sobre o potencial de geração de biogás a partir de resíduos orgânicos domésticos em biodigestores comunitários.",
    content: `
      <h2>Resumo</h2>
      <p>Este estudo investigou o potencial energético dos resíduos orgânicos domésticos processados em biodigestores comunitários, avaliando a composição e volume de biogás gerado, bem como sua aplicabilidade prática em contextos urbanos.</p>
      
      <h2>Metodologia</h2>
      <p>Foram instalados seis biodigestores experimentais em diferentes bairros de Campinas, SP, com monitoramento contínuo da produção de biogás, composição de metano e eficiência energética ao longo de 18 meses.</p>
      
      <h2>Resultados principais</h2>
      <ul>
        <li>Cada tonelada de resíduos orgânicos domésticos gerou em média 215m³ de biogás.</li>
        <li>O teor médio de metano no biogás foi de 63%, indicando alto potencial energético.</li>
        <li>Um conjunto habitacional de 200 famílias pode gerar biogás suficiente para atender 35% de suas necessidades de cozimento.</li>
        <li>A eficiência do sistema foi significativamente afetada pela qualidade da separação de resíduos na fonte.</li>
      </ul>
      
      <h2>Conclusões</h2>
      <p>Os resultados demonstram que biodigestores comunitários são uma alternativa viável para gestão de resíduos orgânicos domésticos com geração descentralizada de energia. O estudo propõe um modelo de implementação escalonável para áreas urbanas densamente povoadas.</p>
    `,
    references: [
      "Mendes, C. & Oliveira, F. (2021). Biogas potential from household organic waste in urban Brazil. Renewable Energy, 174, 210-225.",
      "Santos, L., Mendes, C. & Almeida, R. (2021). Methane content variations in small-scale biodigesters. Energy for Sustainable Development, 64, 108-122.",
      "Mendes, C., Ferreira, P. & Garcia, T. (2022). Decentralized energy production through community biodigesters. Applied Energy, 312, 185-201."
    ]
  }
};

const StudyDetail = () => {
  const { studyId } = useParams<{ studyId: string }>();
  const study = studiesData[studyId as keyof typeof studiesData];
  
  if (!study) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-biogreen-800 mb-4">Estudo não encontrado</h1>
          <p className="mb-6">O estudo que você está procurando não foi encontrado.</p>
          <Link to="/estudos">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para estudos
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <Link to="/estudos">
        <Button variant="outline" className="mb-8 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar para estudos
        </Button>
      </Link>
      
      <article className="prose prose-green max-w-none">
        <h1 className="text-3xl font-bold text-biogreen-800 mb-2">{study.title}</h1>
        <div className="flex items-center text-gray-600 mb-6">
          <span className="font-medium">{study.author}</span>
          <span className="mx-2">•</span>
          <span>{study.year}</span>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="text-lg italic text-gray-700">{study.description}</p>
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: study.content }} />
        
        <div className="mt-12">
          <h2 className="text-xl font-bold text-biogreen-800 mb-4">Referências</h2>
          <ul className="list-disc pl-5 space-y-2">
            {study.references.map((reference, index) => (
              <li key={index} className="text-gray-700">{reference}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
};

export default StudyDetail;
