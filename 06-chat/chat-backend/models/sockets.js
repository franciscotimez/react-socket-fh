class Sockets {
  constructor(io) {
    this.io = io;

    this.socketsEvents();
  }

  socketsEvents() {
    // on connection
    this.io.on("connection", (socket) => {
      console.log("Cliente conectado => ", socket.id);

      // todo: Validar JWT y desconectar si no es valido
      
      // todo: Saber que usuario esta activo
      
      // todo: Emitir todos los usuarios conectados
      
      // todo: Socket join
      
      // todo: Escuchar cuando un cliente manda un mensaje-personal
      
      // Manejar el Disconect
      socket.on("disconnect", () => {
        console.log("Cliente desconectado => ", socket.id);
      });
    });
  }
}

module.exports = Sockets;
