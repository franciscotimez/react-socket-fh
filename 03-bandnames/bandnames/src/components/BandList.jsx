import React, { useEffect, useState } from 'react';

export const BandList = ({ data, votar, borrar, cambiarName }) => {

  const [bands, setBands] = useState(data);

  useEffect(() => {
    setBands(data);
  }, [data]);

  const cambioNombre = (event, id) => {
    const newName = event.target.value;

    setBands(bands => bands.map(band => {
      if (band.id === id) {
        band.name = newName;
      }
      return band;
    }));
  };

  const onPerdioFoco = (id, name) => {
    cambiarName(id, name);
  };

  const crearRows = () => {
    return (
      bands.map(band => (
        <tr key={band.id}>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => votar(band.id)}
            >
              +1
            </button>
          </td>
          <td>
            <input
              className="form-control"
              value={band.name}
              onChange={(event) => cambioNombre(event, band.id)}
              onBlur={() => onPerdioFoco(band.id, band.name)}
            />
          </td>
          <td><h3> {band.votes} </h3></td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => borrar(band.id)}
            >
              Borrar
            </button>
          </td>
        </tr>
      ))
    );
  };

  return (
    <>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>

        <tbody>
          {crearRows()}
        </tbody>
      </table>
    </>
  );
};
