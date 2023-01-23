import React from 'react';
import { useMapbox } from '../hooks/useMapbox';


const puntoInicial = {
  lng: -55.8992,
  lat: -27.4096,
  zoom: 13.3
};

export const MapaPage = () => {

  const {coords, setRef} = useMapbox(puntoInicial)

  return (
    <>
      <div className="info">
        Lng: {coords.lng} | Lat: {coords.lat} | zoom: {coords.zoom}
      </div>
      <div
        ref={setRef}
        className="mapContainer"
      ></div>
    </>
  );
}

