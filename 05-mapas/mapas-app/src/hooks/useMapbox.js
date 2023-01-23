import { useCallback, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { v4 as uuidv4 } from 'uuid';

mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbnRpbWV6IiwiYSI6ImNsY2dqM3Y5cDNka3kzcGw3bG01b3I0encifQ.Ti2e1awq7MT8PLLkI-goSg';


export const useMapbox = (puntoInicial) => {

  // Referencia al div del mapa
  const mapaDiv = useRef();
  const setRef = useCallback((node) => {
    mapaDiv.current = node;
  }, []);

  // Marcadores
  const marcadores = useRef({});

  // Referencia al mapa
  const mapa = useRef();
  const [coords, setCoords] = useState(puntoInicial);

  // Funcion para agregar marcadores
  const agregarMarcador = useCallback((event) => {
    const { lng, lat } = event.lngLat;

    const marker = new mapboxgl.Marker();
    marker.id = uuidv4();

    marker.setLngLat([lng, lat]).addTo(mapa.current).setDraggable(true);

    marcadores.current[marker.id] = marker;
  }, []);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapaDiv.current, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [puntoInicial.lng, puntoInicial.lat], // starting position [lng, lat]
      zoom: puntoInicial.zoom, // starting zoom
    });

    mapa.current = map;
  }, [puntoInicial]);

  useEffect(() => {
    mapa.current?.on('move', () => {
      const { lng, lat } = mapa.current.getCenter();
      setCoords({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: mapa.current.getZoom().toFixed(4)
      });
    });
    return () => {
      mapa.current?.off('move');
    };
  }, []);

  // Agregar marcador cuando se hace click
  useEffect(() => {
    mapa.current?.on('click', agregarMarcador);
    return () => {
      mapa.current?.off('click');
    };
  }, [agregarMarcador]);

  return {
    coords,
    setRef,
    marcadores,
    agregarMarcador
  };
};
