document.getElementById('backbutton').addEventListener("click", function() {
    fadeout("container");
    setTimeout(function() {
        location.assign("index.html");
    }, 600);
});



// function to slide the buttons to the left and delete them
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