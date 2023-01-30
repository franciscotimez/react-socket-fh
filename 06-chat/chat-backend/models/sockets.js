const {
  usuarioConectado,
  usuarioDesconectado,
  getUsuarios,
  grabarMensaje,
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

      // Emitir todos los usuarios conectados
      this.io.emit("lista-usuarios", await getUsuarios());

      // Unir al usuario a una sala de socket.io
      socket.join(uid);

      // Escuchar cuando un cliente manda un mensaje-personal
      socket.on("mensaje-personal", async (payload, callback) => {
        const mensaje = await grabarMensaje(payload);
        this.io.to(payload.to).emit("mensaje-personal", mensaje);
        this.io.to(payload.from).emit("mensaje-personal", mensaje);
        // callback(mensaje);
      });

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
