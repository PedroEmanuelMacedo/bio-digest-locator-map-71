
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from './ui/button';
import { toast } from '@/hooks/use-toast';

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

  // Define a chave de API do Mapbox diretamente
  const mapboxApiKey = 'pk.eyJ1Ijoib2FjLWNvbXBvc3RhcXVpIiwiYSI6ImNsdXBid3pqZjBqMWsyam50NGRxM3kwbXYifQ.ru12-YAtwyi54Q-kGqxlQw';

  // Função para inicializar o mapa
  const initializeMap = () => {
    if (!mapContainer.current) return;

    try {
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
    } catch (error) {
      console.error("Erro ao inicializar o mapa:", error);
      toast({
        title: "Erro ao carregar o mapa",
        description: "Não foi possível inicializar o mapa. Verifique sua conexão.",
        variant: "destructive"
      });
    }
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
    // Inicializar o mapa
    initializeMap();
  }, [selectedLocation]);

  // Efeito para atualizar os marcadores quando os biodigestores mudarem
  useEffect(() => {
    if (map.current && map.current.loaded()) {
      addMarkersToMap();
    }
  }, [biodigestors]);

  return (
    <div className="relative h-full w-full">
      <div ref={mapContainer} className="h-full w-full rounded-lg overflow-hidden" />
    </div>
  );
};
