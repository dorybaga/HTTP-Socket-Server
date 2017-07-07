
/*jshint esversion: 6 */

const net = require('net');
const fs = require('fs');

// Create new server
const server = net.createServer(function(socket){
  socket.on('data', function(data){
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

    const today = new Date('Wed, 08 Jul 2015 22:31:15 GMT');


    function makeHeader(status, type, length, name){

      return `HTTP/${status}
Server: betaserver
Date: ${today};
Content-Type: ${type}; charset=utf-8
Content-Length: ${length}
Connection: keep-alive

${name}`;

      }

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


  // console.log(makeHeader( '1.1 200 OK', 'text/html', '404', index ));
  // console.log(index.length, hydrogen.length, helium.length, css.length, err.length);

    var URI = (data.toString().split('\n')[0].split(" ")[1]);

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
        socket.write(makeHeader( '1.1 200 OK', 'text/html', '1961', css ));
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


// receive the request
// respond
// end connection



