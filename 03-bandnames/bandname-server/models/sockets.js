const BandList = require("./band-list");


class Sockets {

  constructor(io) {
    this.io = io;
    this.bandList = new BandList();

    this.socketsEvents();
  }

  socketsEvents() {
    // on connection
    this.io.on('connection', (socket) => {
      console.log('Cliente conectado');

      // Emitir al cliente conectado todas las bandas
      socket.emit('current-bands', this.bandList.getBands());
      
      // // Escucho evento emitido desde el cliente
      // socket.on('message-to-server', (data) => {
      //   console.log("El cliente dijo -> ", data);

      //   this.io.emit('message-from-server', data);
      // });
    });
  }

}

module.exports = Sockets;