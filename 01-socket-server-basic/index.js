const Server = require("./models/server");

const server = new Server();

server.execute()






// io.on('connection', (socket) => {

//   // Escucho evento emitido desde el cliente
//   socket.on('message-to-server', (data) => {
//     console.log("El cliente dijo -> ", data);

//     io.emit('message-from-server', data)
//   });
// });

