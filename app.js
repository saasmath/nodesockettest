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
  //on initial connection send out entire buffer
  socket.emit('serve', Buffer);
  console.log("First Serve");

  //on update connection
  socket.on('update', function (data) 
  {
    //add the data to the buffer to keep forever
    Buffer.push(data);

    //send most recent update out to client
    io.sockets.emit('serve', [data]);
  });
});