//initialize global variables
var socket;
var ServerData;

function ServerUpdate(JSONObject)
{
	socket.emit('update', JSON.stringify(JSONObject));
}

function Chat(Data)
{
	socket.emit('chat', Data);
}

//once the document is ready
$(document).ready(function()
{
	//establish the socket commection
	socket = io.connect('http://saasmath.seattleacademy.org:443');

	//once the connection is functional
	socket.on('connect', function()
	{
		//send a request for the whole buffer
		socket.emit('initial');
	});

	//when data is recieved from the server
	socket.on('serve', function (data)
	{
		//make the change for all of the data sent
		ServerData = JSON.parse(data);
	});

	socket.on('chat', function (data)
	{
		//chat functionality here
		alert(data);
	});
});