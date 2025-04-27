
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapViewer } from "./MapViewer";
import { MapPin, Search, Filter } from "lucide-react";

// Dados de exemplo para biodigestores
const EXAMPLE_BIODIGESTORS = [
  { id: 1, name: "Biodigestor Comunitário Vila Verde", lat: -23.5505, lng: -46.6333, type: "Comunitário", status: "Ativo" },
  { id: 2, name: "Fazenda Sustentável São João", lat: -23.5605, lng: -46.6233, type: "Rural", status: "Ativo" },
  { id: 3, name: "Centro de Tratamento Orgânico", lat: -23.5705, lng: -46.6433, type: "Industrial", status: "Em manutenção" },
  { id: 4, name: "Eco Parque Jardim Botânico", lat: -23.5805, lng: -46.6533, type: "Municipal", status: "Ativo" },
  { id: 5, name: "Escola Técnica Ambiental", lat: -23.5905, lng: -46.6133, type: "Educacional", status: "Ativo" },
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
      }, (error) => {
        console.error("Error getting location:", error);
        // Usar uma localização padrão
        setSelectedLocation({ lat: -23.5505, lng: -46.6333 });
      });
    } else {
      // Fallback para navegadores sem geolocalização
      setSelectedLocation({ lat: -23.5505, lng: -46.6333 });
    }
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
                  <Button variant="outline" className="flex items-center gap-2 border-bioblue-200 text-bioblue-700">
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
