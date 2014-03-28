//sets up includes
var express = require('express')
var http = require('http');
var app = express();

//sets up the express.js server
app.use(express.static(__dirname));
var server = app.listen(443);

//sets up socket.io with the express server
var io = require('socket.io').listen(server);

//initializes global variables
var Buffer = [];

function AddToBuffer(BufferArray)
{
  if(BufferArray[0] == "AddNode")
  {
    Buffer.push(BufferArray);
    return 1;
  }

  for(i = 0; i < Buffer.length; i++)
  {
    if(Buffer[i][0] == BufferArray[0] && Buffer[i][1] == BufferArray[1])
    {
      Buffer[i] = BufferArray;
      console.log("Replace");
      return 1;
    }
  }

  Buffer.push(BufferArray);
  return 1;
}

//once the connection is established
io.sockets.on('connection', function (socket) 
{
  //on the request for the initial connection
  socket.on('initial', function(data)
  {
    //send out the entire buffer
    socket.emit('serve', Buffer);
    console.log("Initial Page Serve");
  });

  //on update connection
  socket.on('update', function (data)
  {
    //add the data to the buffer to keep forever
    AddToBuffer(data);

    //

    //send most recent update out to client
    io.sockets.emit('serve', [data]);
    console.log("Page Data Updated")
  });
});