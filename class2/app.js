console.log("Servidor web 1.0, class2");

const http = require('http');
const fs = require("fs");
const myserver = require("./lib/server");


const server = http.createServer(myserver);

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);