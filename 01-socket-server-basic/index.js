// Servidor de express
const express = require('express');
const app = express();

// Servidor de sockets
const server = require('http').createServer(app);

// Configuracion de socket server
const io = require('socket.io')(server);

// Desplegar directorio publico
app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {

  // Escucho evento emitido desde el cliente
  socket.on('message-to-server', (data) => {
    console.log("El cliente dijo -> ", data);

    io.emit('message-from-server', data)
  });
});

server.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});