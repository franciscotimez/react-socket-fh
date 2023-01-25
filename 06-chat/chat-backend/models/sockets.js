class Sockets {
  constructor(io) {
    this.io = io;

    this.socketsEvents();
  }

  socketsEvents() {
    // on connection
    this.io.on("connection", (socket) => {
      // todo: Validar JWT y desconectar si no es valido

      // todo: Saber que usuario esta activo

      // todo: Emitir todos los usuarios conectados

      // todo: Socket join

      // todo: Escuchar cuando un cliente manda un mensaje-personal

      // todo: Manejar el Disconect

    });
  }
}

module.exports = Sockets;
