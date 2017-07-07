/*jshint esversion: 6 */

// Connect to server
const net = require('net');
// console.log(process.argv);
// console.log(process.argv[2]);

const socket = net.createConnection( { host: process.argv[2], port: 80 }, () => {
  console.log('Connected!');
  const host = process.argv[2];

  socket.write(`GET / HTTP/1.1
Host: ${host}
Connection: keep-alive

` );

  // Listen, receive data from server, write to terminal
  socket.on('data', (data) => {
    console.log(data.toString());
    // process.stdout.write(data);

  });
});
