/*jshint esversion: 6 */

// Connect to server
const net = require('net');
// console.log(process.argv);
// console.log(process.argv[2]);

const socket = net.createConnection( { host: process.argv[2], port: 80 }, () => {
  console.log('Connected!');
  const host = process.argv[2];
  const today = new Date('Wed, 08 Jul 2015 22:31:15 GMT');

  // Send HTTP Request
  socket.write(`GET / HTTP/1.1
Host: ${host}
Date: ${today}
Connection: keep-alive

` );

  // Listen, receive data from server, write to terminal
  socket.on('data', (data) => {
    // console.log(data.toString().split('\n'));
    console.log(data.toString().split('\n')[0]);
    process.stdout.write(data.toString());

    // When data finished writing to terminal; end connection
    socket.destroy();
  });
});
