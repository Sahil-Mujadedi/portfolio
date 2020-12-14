document.getElementById('start').addEventListener("click", function() {
    fadeout("about", "start", "newGame");
    document.getElementById("start").innerText = "Loading...";
    setTimeout(function() {
        location.assign("files.html");
    }, 600);
});

// Event listener to listen for click in the "about" button
document.getElementById('about').addEventListener("click", function(){
    fadeout("about", "start", "newGame");
    fadeout("name-wrapper");
    document.getElementById("about").innerText = "Loading...";
    setTimeout(function() {
        location.assign("about.html");
    }, 600);
});

// function to fade out the buttons
function fadeout(id1, id2 = null, id3 = null) {
    document.getElementById(id1).style = "animation: fadeout 0.4s ease-in";
    
    setTimeout(function(){
        document.getElementById(id1).remove()
    }, 400);

    // Checks if id 1 and 2 are not null so it does not throw an error message.
    // Time out so the buttons do not immediately disappear.
    if (id2 !== null) {
        document.getElementById(id2).style = "animation: fadeout 0.4s ease-in;";
        setTimeout(function(){
            document.getElementById(id2).remove()
        }, 400);
    }
    if (id3 !== null) {
        document.getElementById(id3).style = "animation: fadeout 0.4s ease-in;";
        setTimeout(function(){
            document.getElementById(id3).remove()
        }, 400);
    }

}
