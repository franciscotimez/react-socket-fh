import React, { useEffect, useState } from "react";

import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";
import { useSocket } from "./hooks/useSocket";

function App() {
  const [bands, setBands] = useState([]);

  const { socket, online } = useSocket('http://localhost:8080');

  useEffect(() => {
    socket.on('current-bands', (bands) => {
      setBands(bands);
    });
  }, [socket]);


  const votar = (id) => {
    socket.emit('votar-banda', id);
  };

  const borrar = (id) => {
    socket.emit('borrar-banda', id);
  };

  const cambiarName = (id, name) => {
    socket.emit('cambiar-name-banda', { id, name });
  };

  const crearBanda = (name) => {
    socket.emit('crear-banda', name);
  };

  return (
    <div className="container">

      <div className="alert">
        <p>
          Service status:
          {
            online ?
              <span className="text-success"> Online</span>
              :
              <span className="text-danger"> Offline</span>
          }
        </p>
      </div>

      <h1>Band Names</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <BandList
            data={bands}
            votar={votar}
            borrar={borrar}
            cambiarName={cambiarName}
          />
        </div>

        <div className="col-4">
          <BandAdd
            crearBanda={crearBanda}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
