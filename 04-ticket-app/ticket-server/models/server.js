// Servidor de express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const cors = require('cors');

const Sockets = require('./sockets');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    // Http Server
    this.server = http.createServer(this.app);

    // Configuraciones de sockets
    this.io = socketio(this.server, {/** Configuraciones */ });

    // Inicializar Sockets
    this.sockets = new Sockets(this.io);
  }

  middlewares() {
    // Desplegar directorio publico
    this.app.use(express.static(path.resolve(__dirname, '../public')));

    // Habilito CORS
    this.app.use(cors());

    // Get de los ultimos tickets
    this.app.get('/api/ultimos13', (req, res) => {
      res.json({
        ok: true,
        tickets: this.sockets.ticketList.ultimos13
      });
    });
  }

  execute() {
    // Inicializar middlewares
    this.middlewares();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log(`Servidor escuchando en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;