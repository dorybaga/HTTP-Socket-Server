
/*jshint esversion: 6 */

const net = require('net');
const fs = require('fs');

// Create new server
const server = net.createServer(function(socket){
  socket.on('data', function(data){
  console.log("connection recieved");
  // console.log(data.toString().split('\n')[0].split(" ")[1]);

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


  function makeHeader(status, type, name){

    return `HTTP/${status}
Server: betaserver
Date: ${today};
Content-Type: ${type}; charset=utf-8
Content-Length: ${name}.length
Connection: keep-alive

${name}`;

  }

  console.log(makeHeader( '1.1 200 OK', 'text/html', index ));
  socket.write(makeHeader( '1.1 200 OK', 'text/html', index ));


  var URI = (data.toString().split('\n')[0].split(" ")[1]);

  // switch(URI){
  //   case "/":
  //     socket.write(makeHeader( '200 OK', 'text/html', index ));
  //     break;

  //   case "/index.html":
  //     socket.write(makeHeader( '200 OK', 'text/html', index ));
  //     break;

  //   case "/hydrogen.html":
  //     socket.write(makeHeader( '200 OK', 'text/html', hydrogen ));
  //     break;

  //   case "/helium.html":
  //     socket.write(makeHeader( '200 OK', 'text/html', helium ));
  //     break;

  //   case "/css/styles.css":
  //     socket.write(makeHeader( '200 OK', 'text/html', css ));
  //     break;

  //   default:
  //     socket.write(makeHeader( '404 Not Found', 'text/html', err ));
  //     break;

  // }




//   socket.write(`HTTP/1.1 200 OK
// Server: betaserver
// Date: ${today};
// Content-Type: text/html; charset=utf-8
// Content-Length: index.length
// Connection: keep-alive

// ${index}`);

// socket.write(`HTTP/1.1 200 OK
// Server: betaserver
// Date: ${today};
// Content-Type: text/html; charset=utf-8
// Content-Length: hydrogen.length
// Connection: keep-alive

// ${hydrogen}`);

// socket.write(`HTTP/1.1 200 OK
// Server: betaserver
// Date: ${today};
// Content-Type: text/html; charset=utf-8
// Content-Length: helium.length
// Connection: keep-alive

// ${helium}`);

// socket.write(`HTTP/1.1 200 OK
// Server: betaserver
// Date: ${today};
// Content-Type: text/html; charset=utf-8
// Content-Length: err.length
// Connection: keep-alive

// ${err}`);


// socket.write(`HTTP/1.1 200 OK
// Server: betaserver
// Date: ${today};
// Content-Type: text/html; charset=utf-8
// Content-Length: css.length
// Connection: keep-alive

// ${css}`);


  socket.destroy();

  });

});

// Make server listen
server.listen(8080, '0.0.0.0', () => {

  console.log('Server is listening on port 8080');

});


// receive the request
// respond
// end connection



