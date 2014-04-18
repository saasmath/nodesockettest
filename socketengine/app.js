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
var Data = {};
var Time = {};

function SendJSON()
{
  io.sockets.emit('serve', JSON.stringify(Data));
}

function UpdateJSON(JSONString)
{
  ParsedData = JSON.parse(JSONString);
  User = ParsedData.User;
  Data[User] = ParsedData.Data;

  //writes the time it was updated
  var CurrentTime = new Date();
  Time[User] = CurrentTime.getTime();
}

function EliminateTimeouts()
{
  Users = Object.keys(Time);

  for(i = 0; i < Users.length; i++)
  {
    var CurrentTime = new Date().getTime();

    if(CurrentTime - Time[Users[i]] > 10000)
    {
      delete Time[Users[i]];
      delete Data[Users[i]];
    }
  }
}

//once the connection is established
io.sockets.on('connection', function (socket) 
{
  //send the json object
  SendJSON();

  //on update connection
  socket.on('update', function (data)
  {
    EliminateTimeouts();
    
    console.log("Time:" + JSON.stringify(Time));
    console.log("Data:" + JSON.stringify(Data));

    //update the json object
    UpdateJSON(data);

    //send the json object
    SendJSON();
  });
});