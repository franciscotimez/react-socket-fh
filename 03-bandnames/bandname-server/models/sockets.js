

class Sockets {

  constructor(io) {
    this.io = io;

    this.socketsEvents();
  }

  socketsEvents() {
    // on connection
    this.io.on('connection', (socket) => {

      // Escucho evento emitido desde el cliente
      socket.on('message-to-server', (data) => {
        console.log("El cliente dijo -> ", data);

        this.io.emit('message-from-server', data);
      });
    });
  }

}

module.exports = Sockets;