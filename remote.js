//initialize global variables
var socket;

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
		for(i = 0; i < data.length; i++)
		{
			if(data[i][0] == "Attribute")
			{
				$(data[i][1]).attr(data[i][2], data[i][3]);
			}
			else if(data[i][0] == "Text")
			{
				$(data[i][1]).text(data[i][2]);
			}

			console.log(data[i][0] + ": " + data[i][1] + ", " + data[i][2]);
		}
	});
});

function RemoteAttribute(Selector, Attribute, Value)
{
	socket.emit('update', ["Attribute", Selector, Attribute, Value]);
}

function RemoteText(Selector, Value)
{
	socket.emit('update', ["Text", Selector, Value]);
}