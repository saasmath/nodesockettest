var http = require('http');
var fs = require('fs');
var count = 0;

var server = http.createServer(function(req,res){
    fs.readFile('./index.html', function(error, data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data, 'utf-8');
    });
}).listen(3001);

console.log('Server is running');

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    console.log('User connected');
    setInterval(function(){
    fs.readFile('/sys/class/thermal/thermal_zone0/temp', function(error, data){
        //console.log(data.toString()/1000);
        socket.emit('temperature',{number: data.toString()/1000});
    });
    }, 1000);
});


