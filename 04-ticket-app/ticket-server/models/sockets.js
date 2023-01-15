const TicketList = require("./ticket-list");


class Sockets {

  constructor(io) {
    this.io = io;

    // Ticket List
    this.ticketList = new TicketList;

    this.socketsEvents();
  }

  socketsEvents() {
    // on connection
    this.io.on('connection', (socket) => {

      console.log("Cliente conectado => ", socket.id);

      // Escucho evento emitido desde el cliente
      socket.on('solicitar-ticket', (_, callback) => {
        const nuevoTicket = this.ticketList.crearTicket();
        console.log("Nuevo ticket Backend => ", nuevoTicket);
        callback(nuevoTicket);

      });
    });
  }

}

module.exports = Sockets;