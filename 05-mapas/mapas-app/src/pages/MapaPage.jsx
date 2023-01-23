import React, { useEffect } from 'react';
import { useMapbox } from '../hooks/useMapbox';


const puntoInicial = {
  lng: -55.8992,
  lat: -27.4096,
  zoom: 13.3
};

export const MapaPage = () => {

  const { coords, setRef, nuevoMarcador$, movimientoMarcador$ } = useMapbox(puntoInicial);

  useEffect(() => {
    nuevoMarcador$.subscribe(marcador => {
      console.log(marcador);
      // todo: emitir nuevo marcador
    });
  }, [nuevoMarcador$]);

  useEffect(() => {
    movimientoMarcador$.subscribe(marcador => {
      console.log(marcador);
      // todo: emitir marcador movido
    });
  }, [movimientoMarcador$]);

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

