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

      // votar por la banda
      socket.on('votar-banda', (id) => {
        this.bandList.increaseVotes(id);
        this.io.emit('current-bands', this.bandList.getBands());
      });

      // borrar la banda
      socket.on('borrar-banda', (id) => {
        this.bandList.removeBand(id);
        this.io.emit('current-bands', this.bandList.getBands());
      });

      // cambiar nombre de la banda
      socket.on('cambiar-name-banda', (data) => {
        this.bandList.changeName(data.id, data.name);
        this.io.emit('current-bands', this.bandList.getBands());
      });
    });
  }

}

module.exports = Sockets;