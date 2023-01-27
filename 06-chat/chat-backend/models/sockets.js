const { verificarJWT } = require("../helpers/jwt");

class Sockets {
  constructor(io) {
    this.io = io;

    this.socketsEvents();
  }

  socketsEvents() {
    // on connection
    this.io.on("connection", (socket) => {
      // Validar JWT y desconectar si no es valido
      const [valid, uid] = verificarJWT(socket.handshake.query["x-token"]);

      if (!valid) {
        socket.disconnect()
        console.log("Usuario no Identificado.");
        return;
      }
      console.log("Cliente conectado => ", uid);

      // todo: Saber que usuario esta activo

      // todo: Emitir todos los usuarios conectados

      // todo: Socket join

      // todo: Escuchar cuando un cliente manda un mensaje-personal

      // Manejar el Disconect
      socket.on("disconnect", () => {
        console.log("Cliente desconectado => ", uid);
      });
    });
  }
}

module.exports = Sockets;
