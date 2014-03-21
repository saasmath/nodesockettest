var app = require('http').createServer(handler)
var io = require('socket.io').listen(app)
var fs = require('fs')

app.listen(443);

var Buffer = [];

function handler (req, res) {
  if(req.url == "/JQuery.js" || req.url == "JQuery.js")
  {
    fs.readFile(__dirname + '/JQuery.js',
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading JQuery.js');
      }

      res.writeHead(200);
      res.end(data);
    });
  }
  else
  {
    fs.readFile(__dirname + '/index.html',
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }

      res.writeHead(200);
      res.end(data);
    });
  }
}

io.sockets.on('connection', function (socket) 
{
  socket.on('update', function (data) 
  {
    Buffer.push([data["ID"], data["Attribute"], data["Value"]]);
    //send message to all clients
    io.sockets.emit('serve', Buffer);
  });
});