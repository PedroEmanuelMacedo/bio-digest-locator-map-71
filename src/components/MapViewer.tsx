
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from './ui/button';

type Biodigestor = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: string;
  status: string;
};

interface MapViewerProps {
  selectedLocation: { lat: number; lng: number } | null;
  biodigestors: Biodigestor[];
}

export const MapViewer: React.FC<MapViewerProps> = ({ selectedLocation, biodigestors }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [mapboxApiKeyInput, setMapboxApiKeyInput] = useState('');
  const [mapboxApiKey, setMapboxApiKey] = useState('');

  // Função para inicializar o mapa
  const initializeMap = () => {
    if (!mapContainer.current || !mapboxApiKey) return;

    // Definir a chave de API do Mapbox
    mapboxgl.accessToken = mapboxApiKey;
    
    // Criar o mapa
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: selectedLocation 
        ? [selectedLocation.lng, selectedLocation.lat] 
        : [-49.2, -16.7], // Centro do Brasil como padrão
      zoom: selectedLocation ? 11 : 4
    });

    // Adicionar controles de navegação
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Adicionar marcadores quando o mapa é carregado
    map.current.on('load', () => {
      addMarkersToMap();
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  };

  // Adiciona marcadores ao mapa
  const addMarkersToMap = () => {
    if (!map.current) return;
    
    // Limpar marcadores existentes
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];
    
    // Adicionar novos marcadores
    biodigestors.forEach(biodigestor => {
      // Criar um elemento personalizado para o marcador
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundColor = '#65ad21';
      el.style.width = '20px';
      el.style.height = '20px';
      el.style.borderRadius = '50%';
      el.style.border = '2px solid white';
      el.style.boxShadow = '0 0 0 2px rgba(101, 173, 33, 0.5)';
      el.style.cursor = 'pointer';
      
      // Criar popup com informações do biodigestor
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <h3 style="font-weight: 600; font-size: 16px;">${biodigestor.name}</h3>
          <p style="margin-top: 4px; font-size: 14px;">Tipo: ${biodigestor.type}</p>
          <p style="margin-top: 2px; font-size: 14px;">Status: 
            <span style="color: ${biodigestor.status === 'Ativo' ? '#16a34a' : '#ea580c'}">
              ${biodigestor.status}
            </span>
          </p>
          <button
            style="margin-top: 8px; padding: 4px 8px; background-color: #65ad21; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px"
          >
            Ver detalhes
          </button>
        `);
      
      // Criar e adicionar o marcador ao mapa
      const marker = new mapboxgl.Marker(el)
        .setLngLat([biodigestor.lng, biodigestor.lat])
        .setPopup(popup)
        .addTo(map.current!);
      
      // Salvar referência ao marcador
      markersRef.current.push(marker);
    });
  };

  // Efeito para inicializar o mapa quando o componente montar
  useEffect(() => {
    if (!mapboxApiKey) return;
    
    // Se o mapa já existe, apenas ajuste o centro
    if (map.current && selectedLocation) {
      map.current.flyTo({
        center: [selectedLocation.lng, selectedLocation.lat],
        zoom: 11,
        essential: true
      });
    } else {
      // Inicializar o mapa
      initializeMap();
    }
  }, [mapboxApiKey, selectedLocation]);

  // Efeito para atualizar os marcadores quando os biodigestores mudarem
  useEffect(() => {
    if (map.current && map.current.loaded()) {
      addMarkersToMap();
    }
  }, [biodigestors]);

  // Salvar a chave da API do Mapbox no localStorage
  const handleSaveMapboxApiKey = () => {
    if (mapboxApiKeyInput) {
      setMapboxApiKey(mapboxApiKeyInput);
      localStorage.setItem('mapbox-api-key', mapboxApiKeyInput);
    }
  };

  // Carregar a chave da API do Mapbox do localStorage quando o componente montar
  useEffect(() => {
    const storedKey = localStorage.getItem('mapbox-api-key');
    if (storedKey) {
      setMapboxApiKey(storedKey);
      setMapboxApiKeyInput(storedKey);
    }
  }, []);

  if (!mapboxApiKey) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4 p-4">
        <div className="text-center space-y-2 max-w-md">
          <h3 className="font-bold text-xl">Chave de API do Mapbox Necessária</h3>
          <p className="text-muted-foreground text-sm">
            Para visualizar o mapa de biodigestores, insira sua chave pública de API do Mapbox.
            Você pode obter uma gratuitamente em <a href="https://mapbox.com" target="_blank" rel="noreferrer" className="text-biogreen-600 hover:underline">mapbox.com</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Input
              type="text"
              placeholder="Cole sua chave pública do Mapbox"
              value={mapboxApiKeyInput}
              onChange={(e) => setMapboxApiKeyInput(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSaveMapboxApiKey} className="bg-biogreen-600 hover:bg-biogreen-700">
              Salvar e Carregar Mapa
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Sua chave será salva apenas no seu navegador e não será compartilhada.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <div ref={mapContainer} className="h-full w-full rounded-lg overflow-hidden" />
    </div>
  );
};

// Componente Input utilizado apenas no formulário de API key do Mapbox
const Input = ({ 
  className, 
  type = "text", 
  ...props 
}: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};
