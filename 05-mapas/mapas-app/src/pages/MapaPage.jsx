import React, { useEffect, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import { useMapbox } from '../hooks/useMapbox';


const puntoInicial = {
  lng: -55.8992,
  lat: -27.4096,
  zoom: 13.3
};

export const MapaPage = () => {

  const { coords, setRef, nuevoMarcador$, movimientoMarcador$ } = useMapbox(puntoInicial);

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    nuevoMarcador$.subscribe(marcador => {
      // console.log(marcador);
      socket.emit('marcador-nuevo', marcador);
    });
  }, [nuevoMarcador$, socket]);

  useEffect(() => {
    movimientoMarcador$.subscribe(marcador => {
      // console.log(marcador);
      // todo: emitir marcador movido
    });
  }, [movimientoMarcador$]);

  // Escuchar nuevos marcadores
  useEffect(() => {
    socket.on('marcador-nuevo', (marcador) => {
      console.log(marcador);
    });

  }, [socket]);

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

