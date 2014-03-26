$(document).ready(function() {
    function addUpHomePoints(itemClicked)
    {
        var twopoints = $(itemClicked).parent().children(".hometwopoint").text();
        var threepoints = $(itemClicked).parent().children(".homethreepoint").text();
        var freethrows = $(itemClicked).parent().children(".homefreethrow").text();
        
        RemoteText("#homescore", twopoints*1+threepoints*1+freethrows*1);
    }
    function addUpAwayPoints(itemClicked)
    {
        var twopoints = $(itemClicked).parent().children(".awaytwopoint").text();
        var threepoints = $(itemClicked).parent().children(".awaythreepoint").text();
        var freethrows = $(itemClicked).parent().children(".awayfreethrow").text();

        RemoteText("#visitingscore", twopoints*1+threepoints*1+freethrows*1);
    } 

    $('.court').click(function(event) {
        console.log(event);
        $('<div class="shot">x<div/>').appendTo(this)
                .css('top', event.offsetY)
                .css('left', event.offsetX);
    });

    $('.hometwopoint').click(function(event) {
        var currentScore = $(this).text();
        RemoteText(".hometwopoint", currentScore * 1 + 2);

        addUpHomePoints(this);

    });

    $('.homethreepoint').click(function(event) 
    {
        var currentScore = $(this).text();
        RemoteText(".homethreepoint", currentScore * 1 + 3);

        addUpHomePoints(this);

    });

    $('.homefreethrow').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        RemoteText(".homefreethrow", currentScore * 1 + 1);

        addUpHomePoints(this);
    });

    $('.awaytwopoint').click(function(event) {
        var currentScore = $(this).text();
        RemoteText(".awaytwopoint", currentScore * 1 + 2);

        addUpAwayPoints(this);
    });

    $('.awaythreepoint').click(function(event) {
        var currentScore = $(this).text();
        RemoteText(".awaythreepoint", currentScore * 1 + 3);

        addUpAwayPoints(this);
    });

    $('.awayfreethrow').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        RemoteText(".awayfreethrow", currentScore * 1 + 1);

        addUpAwayPoints(this);
    });
    $('.homerebound').click(function(event) {
    //console.log(event);
    var currentScore = $(this).text();
    $(this).text(currentScore * 1 + 1);
    });
    $('.awayrebound').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $('.homeassists').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $('.awayassists').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $('.homesteals').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#homest").text();
        $("#homest").text(currentScore * 1 + 1);
    });
    $('.awaysteals').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#awayst").text();
        $("#awayst").text(currentScore * 1 + 1);
    });
    $('.homepf').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#homefoul").text();
        $("#homefoul").text(currentScore * 1 + 1);
    });
    $('.awaypf').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#awayfoul").text();
        $("#awayfoul").text(currentScore * 1 + 1);
    });
    $('.hometo').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $('.awayto').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $('.timeoutbutton').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });   
});