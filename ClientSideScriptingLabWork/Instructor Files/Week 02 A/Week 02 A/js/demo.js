console.log("JavaScript is working.");


var messageState = false;

function runscript() {
    // alert("This is annoying!");
    // document.writeln("This is a bad way to output to a web page.");
    
    var messageArea = document.getElementById("messageArea");
    
    var messageSpaces = document.getElementsByClassName("messageSpace");
    
    for(i = 0; i < messageSpaces.length; i++) {
        messageSpaces[i].innerHTML = "test";
    }
    
    if ( messageState == false) {
        messageArea.innerHTML = "Ouch! Stop clicking me!";
        messageState = true;
    } else {
        messageArea.innerHTML = "&nbsp;";
        messageState = false;
    }
}