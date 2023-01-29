const {
  usuarioConectado,
  usuarioDesconectado,
  getUsuarios,
} = require("../controllers/sockets");
const { verificarJWT } = require("../helpers/jwt");

class Sockets {
  constructor(io) {
    this.io = io;

    this.socketsEvents();
  }

  socketsEvents() {
    // on connection
    this.io.on("connection", async (socket) => {
      // Validar JWT y desconectar si no es valido
      const [valid, uid] = verificarJWT(socket.handshake.query["x-token"]);

      if (!valid) {
        socket.disconnect();
        console.log("Usuario no Identificado.");
        return;
      }

      // Saber que usuario esta activo
      await usuarioConectado(uid);

      // todo: Emitir todos los usuarios conectados
      this.io.emit("lista-usuarios", await getUsuarios());

      // todo: Socket join

      // todo: Escuchar cuando un cliente manda un mensaje-personal

      // Manejar el Disconect
      socket.on("disconnect", async () => {
        await usuarioDesconectado(uid);
        this.io.emit("lista-usuarios", await getUsuarios());

        console.log("Cliente desconectado => ", uid);
      });
    });
  }
}

module.exports = Sockets;
