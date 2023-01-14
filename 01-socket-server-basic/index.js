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

  // Emito un evento desde el servidor
  socket.emit('mensaje-bienvenida', {
    msg: 'Bienvenido al server',
    fecha: new Date()
  });

  // Escucho evento emitido desde el cliente
  socket.on('mensaje-cliente', (data) => {
    console.log("El cliente dijo -> ", data);
  });
});

server.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});