import React from 'react';

export const BandList = () => {

  const crearRows = () => {
    return (
      <tr>
        <td>
          <button className="btn btn-primary">+1</button>
        </td>
        <td>
          <input className="form-control" />
        </td>
        <td><h3> 0 </h3></td>
        <td>
          <button className="btn btn-danger">Borrar</button>
        </td>
      </tr>
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
