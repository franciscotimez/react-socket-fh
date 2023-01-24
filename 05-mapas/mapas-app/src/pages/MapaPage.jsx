import React, { useEffect, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import { useMapbox } from '../hooks/useMapbox';


const puntoInicial = {
  lng: -55.8992,
  lat: -27.4096,
  zoom: 13.3
};

export const MapaPage = () => {

  const { coords, setRef, agregarMarcador, actualizarMarcador, nuevoMarcador$, movimientoMarcador$ } = useMapbox(puntoInicial);

  const { socket } = useContext(SocketContext);

  // Escuchar marcadores activos
  useEffect(() => {
    socket.on('marcadores-activos', (marcadores) => {
      for (const key of Object.keys(marcadores)) {
        agregarMarcador(marcadores[key], key);
      }
    });
  }, [socket, agregarMarcador]);

  useEffect(() => {
    nuevoMarcador$.subscribe(marcador => {
      // console.log(marcador);
      socket.emit('marcador-nuevo', marcador);
    });
  }, [nuevoMarcador$, socket]);

  useEffect(() => {
    movimientoMarcador$.subscribe(marcador => {
      // console.log(marcador);
      socket.emit("marcador-actualizado", marcador);
    });
  }, [movimientoMarcador$, socket]);

  // mover marcador por socket
  // Escuchar nuevos marcadores
  useEffect(() => {
    socket.on('marcador-actualizado', (marcador) => {
      actualizarMarcador(marcador);
    });

  }, [socket, actualizarMarcador]);

  // Escuchar nuevos marcadores
  useEffect(() => {
    socket.on('marcador-nuevo', (marcador) => {
      agregarMarcador(marcador, marcador.id);
    });

  }, [socket, agregarMarcador]);

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

