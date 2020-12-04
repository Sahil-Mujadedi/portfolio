document.getElementById('start').addEventListener("click", function() {
    slideleft("about", "start", "newGame");
    document.getElementById("start").innerText = "Loading...";
    setTimeout(function() {
        location.assign("files.html");
    }, 2000);
});

document.getElementById('about').addEventListener("click", function(){
    slideleft("about", "start", "newGame");
    document.getElementById("about").innerText = "Loading...";
    setTimeout(function() {
        location.assign("about.html");
    }, 2000);
})

// function to slide the buttons to the left and delete them
function slideleft(id1, id2 = null, id3 = null) {
    document.getElementById(id1).style = "animation: slideleft 2s linear";
    
    setTimeout(function(){
        document.getElementById(id1).remove()
    }, 2000);

    // Checks if id 1 and 2 are not null so it does not throw an error message.
    // Time out so the buttons do not immediately disappear.
    if (id2 !== null) {
        document.getElementById(id2).style = "animation: slideleft 2s linear";
        setTimeout(function(){
            document.getElementById(id2).remove()
        }, 2000);
    }
    if (id3 !== null) {
        document.getElementById(id3).style = "animation: slideleft 2s linear";
        setTimeout(function(){
            document.getElementById(id3).remove()
        }, 2000);
    }

}