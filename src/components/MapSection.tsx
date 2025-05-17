
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapViewer } from "./MapViewer";
import { MapPin, Search, Filter } from "lucide-react";
import { toast } from '@/hooks/use-toast';

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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<{lat: number, lng: number} | null>(null);
  const [biodigestors, setBiodigestors] = useState(EXAMPLE_BIODIGESTORS);
  
  const handleSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setSelectedLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        toast({
          title: "Localização encontrada",
          description: "Exibindo biodigestores próximos à sua localização.",
        });
      }, (error) => {
        console.error("Error getting location:", error);
        // Usar uma localização padrão para Curitiba
        setSelectedLocation({ lat: -25.4284, lng: -49.2707 });
        toast({
          title: "Erro ao obter localização",
          description: "Usando localização de Curitiba como padrão.",
          variant: "destructive"
        });
      });
    } else {
      // Fallback para navegadores sem geolocalização
      setSelectedLocation({ lat: -25.4284, lng: -49.2707 });
      toast({
        title: "Geolocalização indisponível",
        description: "Seu navegador não suporta geolocalização. Usando Curitiba como padrão.",
        variant: "destructive"
      });
    }
  };
  
  const handleUseMyLocation = () => {
    handleSearch();
  };
  
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Buscar Biodigestores</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Digite um local..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="default" onClick={handleSearch} className="bg-biogreen-600 hover:bg-biogreen-700">
                    Buscar
                  </Button>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-bioblue-200 text-bioblue-700"
                    onClick={handleUseMyLocation}
                  >
                    <MapPin size={16} />
                    Usar Minha Localização
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Filtrar por:</span>
                  <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1">
                    <Filter size={12} />
                    Filtros
                  </Button>
                </div>
                
                <div className="space-x-2">
                  <Button variant="outline" size="sm" className="text-xs bg-biogreen-50 border-biogreen-100 text-biogreen-700">
                    Comunitário
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs bg-biogreen-50 border-biogreen-100 text-biogreen-700">
                    Rural
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Industrial
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Biodigestores Próximos</h3>
              
              <div className="space-y-4">
                {biodigestors.slice(0, 3).map((biodigestor) => (
                  <div key={biodigestor.id} className="p-3 border border-border rounded-md hover:bg-muted/20 cursor-pointer">
                    <h4 className="font-medium">{biodigestor.name}</h4>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin size={10} />
                        {biodigestor.lat.toFixed(4)}, {biodigestor.lng.toFixed(4)}
                      </span>
                      <span className="bg-biogreen-100 text-biogreen-700 px-2 py-0.5 rounded-full">
                        {biodigestor.type}
                      </span>
                    </div>
                  </div>
                ))}
                
                <Button variant="link" size="sm" className="w-full text-bioblue-600">
                  Ver mais biodigestores
                </Button>
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
