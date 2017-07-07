
/*jshint esversion: 6 */

// Objectives
  // Receive the request
  // Respond to the request
  // End connection

const net = require('net');
const fs = require('fs');

// Create new server
const server = net.createServer(function(socket){
  socket.on('data', function(data){

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

    const today = new Date('Wed, 08 Jul 2015 22:31:15 GMT');

    // Function to write header
    function makeHeader(status, type, length, name){

      return `HTTP/${status}
Server: betaserver
Date: ${today};
Content-Type: ${type}; charset=utf-8
Content-Length: ${length}
Connection: keep-alive

${name}`;

      }

    // Define switch expression; find what data to target
    var URI = (data.toString().split('\n')[0].split(" ")[1]);

    // Conditions for each request
    switch(URI){
      case "/":
        socket.write(makeHeader( '1.1 200 OK', 'text/html', '404', index ));
        socket.destroy();
        break;

      case "/index.html":
        socket.write(makeHeader( '1.1 200 OK', 'text/html', '404', index ));
        socket.destroy();
        break;

      case "/hydrogen.html":
        socket.write(makeHeader( '1.1 200 OK', 'text/html', '771', hydrogen ));
        socket.destroy();
        break;

      case "/helium.html":
        socket.write(makeHeader( '1.1 200 OK', 'text/html', '605', helium ));
        socket.destroy();
        break;


      case "/css/styles.css":
        socket.write(makeHeader( '1.1 200 OK', 'text/css', '1961', css ));
        socket.destroy();
        break;

      default:
        socket.write(makeHeader( '1.0 404 Not Found', 'text/html', '263', err ));
        socket.destroy();
        break;

    }
  });
});

// Make server listen
server.listen(8080, '0.0.0.0', () => {
  console.log('Server is listening on port 8080 \n');
});



