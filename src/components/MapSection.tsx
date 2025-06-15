
import React, { useState } from 'react';
import { MapViewer } from "./MapViewer";
import { Filter } from "lucide-react";

// Dados de exemplo para biodigestores
const EXAMPLE_BIODIGESTORS = [
  { id: 1, name: "Biodigestor Comunitário Vila Verde", lat: -23.5505, lng: -46.6333, type: "Comunitário", status: "Ativo" },
  { id: 2, name: "Fazenda Sustentável São João", lat: -23.5605, lng: -46.6233, type: "Rural", status: "Ativo" },
  { id: 3, name: "Centro de Tratamento Orgânico", lat: -23.5705, lng: -46.6433, type: "Industrial", status: "Em manutenção" },
  { id: 4, name: "Eco Parque Jardim Botânico", lat: -23.5805, lng: -46.6533, type: "Municipal", status: "Ativo" },
  { id: 5, name: "Escola Técnica Ambiental", lat: -23.5905, lng: -46.6133, type: "Educacional", status: "Ativo" },
  // Adicionar exemplos de Curitiba
  { id: 6, name: "Biodigestor Batel", lat: -25.4391, lng: -49.2872, type: "Privado", status: "Ativo" },
  { id: 7, name: "Biodigestor Água Verde", lat: -25.4525, lng: -49.2764, type: "Público", status: "Ativo" },
  { id: 8, name: "Biodigestor Alto da Glória", lat: -25.4195, lng: -49.2630, type: "Privado", status: "Em manutenção" },
  { id: 9, name: "Biodigestor Zoológico de Curitiba", lat: -25.559541, lng: -49.231445, type: "Público", status: "Ativo" },
  { id: 10, name: "Biodigestor UTFPR Sede Centro", lat: -25.439259, lng: -49.268807, type: "Público", status: "Ativo" },
];

const MapSection = () => {
  // O estado de busca e localização não são mais necessários, mas deixaremos biodigestors para o MapViewer
  const [biodigestors] = useState(EXAMPLE_BIODIGESTORS);

  // Manter selectedLocation nulo para mostrar Curitiba como padrão no mapa
  const selectedLocation = null;

  return (
    <section id="mapa" className="w-full py-12 md:py-24 lg:py-32 bg-biogreen-50/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-bioblue-100 px-3 py-1 text-sm text-bioblue-700">
              Localização
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-bioearth-800">
              Encontre Biodigestores
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Localize biodigestores próximos à sua região e conecte-se a iniciativas sustentáveis.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">

            {/* REMOVIDO: Card de buscar biodigestores e usar localização */}

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Filtros</h3>
                <Filter size={18} className="text-muted-foreground" />
              </div>
              <div className="space-x-2">
                <button className="border border-biogreen-100 bg-biogreen-50 text-biogreen-700 text-xs px-3 py-1 rounded-full hover:bg-biogreen-100 transition-colors">
                  Comunitário
                </button>
                <button className="border border-biogreen-100 bg-biogreen-50 text-biogreen-700 text-xs px-3 py-1 rounded-full hover:bg-biogreen-100 transition-colors">
                  Rural
                </button>
                <button className="border border-border bg-white text-foreground text-xs px-3 py-1 rounded-full hover:bg-muted/50 transition-colors">
                  Industrial
                </button>
              </div>
            </div>
            
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white p-2 rounded-lg shadow-md h-[600px] overflow-hidden">
              <MapViewer selectedLocation={selectedLocation} biodigestors={biodigestors} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
