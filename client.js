/*jshint esversion: 6 */

// Connect to server
const net = require('net');

// URI
  // Parse URL to target URI
  const argv = process.argv;
  const url =(argv[2].split(""));
  console.log(url);

  //Loop through url to find "/"
  for (var i = 0; i < url.length; i++){
    if(url[i] === "/"){

      const backslash = url.indexOf("/");
      console.log("backslash is at idx ", backslash);
      console.log("this is the first idx in the arr ", url[0]);

      // get rid of everything before url.indexOf("/")
      console.log("this should be the idx# after / ", backslash + 1);
      const uriArr = url.slice(backslash, url.length);
      console.log("this is the uriArr: ", uriArr);
      const uri = uriArr.join("");
      console.log("this is the uri: ", uri);

    }
  }


const socket = net.createConnection( { host: process.argv[2], port: 80 }, () => {
  console.log('Connected!');
  const host = process.argv[2];
  const today = new Date('Wed, 08 Jul 2015 22:31:15 GMT');

  // Send HTTP Request
  socket.write(`GET /index.html HTTP/1.1
Host: ${host}
Date: ${today}
Connection: keep-alive

` );

  // Listen, receive data from server, write to terminal
  socket.on('data', (data) => {
    // console.log(data.toString().split('\n'));
    // console.log(data.toString().split('\n')[0]);
    process.stdout.write(data.toString());

    // When data finished writing to terminal; end connection
    socket.destroy();
  });
});
