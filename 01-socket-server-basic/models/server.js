// Servidor de express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {

  constructor() {
    this.app = express();
    this.port = 8080;

    // Http Server
    this.server = http.createServer(this.app);

    // Configuraciones de sockets
    this.io = socketio(this.server, {/** Configuraciones */ });
  }

  middlewares() {
    // Desplegar directorio publico
    this.app.use(express.static(path.resolve(__dirname, '../public')));
  }

  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    // Inicializar middlewares
    this.middlewares();

    // Inicializar Sockets
    this.configurarSockets();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log(`Servidor escuchando en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;