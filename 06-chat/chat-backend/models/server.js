// Servidor de express
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const cors = require("cors");

const Sockets = require("./sockets");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    // Conectar a DB
    dbConnection();

    // Http Server
    this.server = http.createServer(this.app);

    // Configuraciones de sockets
    this.io = socketio(this.server, {
      /** Configuraciones */
    });
  }

  middlewares() {
    // Desplegar directorio publico
    this.app.use(express.static(path.resolve(__dirname, "../public")));

    // Habilito CORS
    this.app.use(cors());

    // Parseo del body
    this.app.use(express.json());
    
    // API endpoints
    this.app.use("/api/login", require("../router/auth"));
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
