const Marcadores = require("./marcadores");


class Sockets {

  constructor(io) {
    this.io = io;

    this.marcadores = new Marcadores();

    this.socketsEvents();
  }

  socketsEvents() {
    // on connection
    this.io.on('connection', (socket) => {

      // marcadores-activos
      socket.emit('marcadores-activos', this.marcadores.activos);

      // marcador-nuevo
      socket.on('marcador-nuevo', (marcador) => {
        console.log("Marcador nuevo -> ", marcador);

        this.marcadores.agregarMarcador(marcador);
        socket.broadcast.emit('marcador-nuevo', marcador);
      });

      // marcador-actualizado
      socket.on('marcador-actualizado', (marcador) => {
        console.log("Marcador updated -> ", marcador);
        this.marcadores.actualizarMarcador(marcador);
        socket.broadcast.emit('marcador-actualizado', marcador);
      });

    });
  }

}

module.exports = Sockets;