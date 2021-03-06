// Function to fade out the page
function fadeout(id1, id2 = null, id3 = null) {
    document.getElementById(id1).style = "animation: fadeout 0.4s ease-in forwards;";

    // Checks if id 1 and 2 are not null so it does not throw an error message.
    // Time out so the buttons do not immediately disappear.
    if (id2 !== null) {
        document.getElementById(id2).style = "animation: fadeout 0.4s ease-in forwards;";
    }
    if (id3 !== null) {
        document.getElementById(id3).style = "animation: fadeout 0.4s ease-in forwards;";
    }
}

if (document.getElementById('start')) {
    document.getElementById('start').addEventListener("click", function() {
        fadeout("about", "start", "newGame");
        fadeout("background")
        document.getElementById("start").innerText = "Loading...";
        setTimeout(function() {
            location.assign(`files.html`);
        }, 400);
    });
}

// Event listener to listen for click in the "about" button
if (document.getElementById('about')) {
    document.getElementById('about').addEventListener("click", function(){
        fadeout("about", "start", "newGame");
        fadeout("name-wrapper", "background");
        document.getElementById("about").innerText = "Loading...";
        setTimeout(function() {
            location.assign(`about.html`);
        }, 400);
    });
}

if (document.getElementById('backbutton')) {
    document.getElementById('backbutton').addEventListener("click", function() {
        fadeout("container");
        setTimeout(function() {
            location.assign(`index.html`);
        }, 400);
    });
}

