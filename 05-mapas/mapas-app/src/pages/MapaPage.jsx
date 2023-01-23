import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbnRpbWV6IiwiYSI6ImNsY2dqM3Y5cDNka3kzcGw3bG01b3I0encifQ.Ti2e1awq7MT8PLLkI-goSg';

const puntoInicial = {
  lng: -55.8992,
  lat: -27.4096,
  zoom: 13.3
};

export const MapaPage = () => {

  const mapaDiv = useRef();
  const [mapa, setMapa] = useState();
  const [coords, setCoords] = useState(puntoInicial);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapaDiv.current, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [puntoInicial.lng, puntoInicial.lat], // starting position [lng, lat]
      zoom: puntoInicial.zoom, // starting zoom
    });

    setMapa(map);
  }, []);

  useEffect(() => {
    mapa?.on('move', () => {
      const { lng, lat } = mapa.getCenter();
      setCoords({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: mapa.getZoom().toFixed(4)
      });
    });
    return () => {
      mapa?.off('move');
    };
  }, [mapa]);


  return (
    <>
      <div className="info">
        Lng: {coords.lng} | Lat: {coords.lat} | zoom: {coords.zoom}
      </div>
      <div
        ref={mapaDiv}
        className="mapContainer"
      ></div>
    </>
  );
}

