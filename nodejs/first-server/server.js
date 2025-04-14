const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("REQ OBJECT IS: ", req)
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if(req.url == "/products"){
    res.end('These are your products!\n');
  }else if(req.url == "/account"){
    res.end('This is your account information')
  }else{
    res.end('Hello, World!\n');
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 