var http = require('http');

http.createServer(function (req, res) {
  console.log("incomming http request...");;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Test deploy ECS-EC2 v3');
}).listen(3001);
console.log("Server started!");;
