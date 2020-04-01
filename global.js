var http =  require('http');
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(4000);
console.log('the server is raining at http://127.0.0.1:4000');


