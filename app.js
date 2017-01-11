var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello, deploying via buddy standalone for the last time today!\n");
});
server.listen(9083);
console.log("Server running at http://127.0.0.1:9083/");
