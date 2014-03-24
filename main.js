$(document).ready(function (){
	$("#send").click(function()
	{
		if($('#Attribute').is(':checked'))
		{
			RemoteAttribute($("#selector").val(), $("#attribute").val(), $("#value").val());
		}
		else if($('#Text').is(':checked'))
		{
			RemoteText($("#selector").val(), $("#value").val());
		}
	});
});