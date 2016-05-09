
var http = require('http');
var message = require('./modules/message');


http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(message.balance() + message.getRandomUSD() );
  res.end();
}).listen(3000);

console.log('listening on port 3000');
