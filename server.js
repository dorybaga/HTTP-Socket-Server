
/*jshint esversion: 6 */

const net = require('net');
const fs = require('fs');

const server = net.createServer(function(socket){
  // socket.write("");
  socket.on('data', function(data){
  console.log("connection recieved");
  // console.log(data.toString());

  const index = fs.readFileSync('public/index.html', 'utf8', () =>{

  });

  const hydrogen = fs.readFileSync('public/hydrogen.html', 'utf8', () =>{

  });

  const helium = fs.readFileSync('public/helium.html', 'utf8', () =>{

  });

  const err = fs.readFileSync('public/404.html', 'utf8', () =>{

  });

  const css = fs.readFileSync('public/css/styles.css', 'utf8', () =>{
  });


  const today = new Date('Wed, 08 Jul 2015 22:31:15 GMT \n');


  socket.write(`HTTP/1.1 200 OK
Server: betaserver
Date: ${today};
Content-Type: text/html; charset=utf-8
Content-Length: index.length
Connection: keep-alive

${index}`);

socket.write(`HTTP/1.1 200 OK
Server: betaserver
Date: ${today};
Content-Type: text/html; charset=utf-8
Content-Length: index.length
Connection: keep-alive

${hydrogen}`);

socket.write(`HTTP/1.1 200 OK
Server: betaserver
Date: ${today};
Content-Type: text/html; charset=utf-8
Content-Length: index.length
Connection: keep-alive

${helium}`);

socket.write(`HTTP/1.1 200 OK
Server: betaserver
Date: ${today};
Content-Type: text/html; charset=utf-8
Content-Length: index.length
Connection: keep-alive

${err}`);


socket.write(`HTTP/1.1 200 OK
Server: betaserver
Date: ${today};
Content-Type: text/html; charset=utf-8
Content-Length: index.length
Connection: keep-alive

${css}`);


  socket.destroy();

  });


  // The correct status code should be sent
  // Date : The current timestamp should be sent in RFC1123 format
  // Server : The name of your custom http server

});

// Make server listen
server.listen(8080, '0.0.0.0', () => {

  console.log('Server is listening on port 8080');

});


// receive the request
// respond
// end connection



