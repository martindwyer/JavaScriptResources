console.log("JavaScript is working.");

var messageState = false;

function runscript() {
    // alert("This is an alert!");
    
    var messageArea = document.getElementById("messageArea");
	 
    var messageSpaces = document.getElementsByClassName("messageSpace");
    
    for(i = 0; i < messageSpaces.length; i++) {
        messageSpaces[i].innerHTML = "test";
    }
    
    if (messageState == false) {
        messageArea.innerHTML = "Ouch! Stop clicking ME!";
        messageState = true;
    } else {
        messageArea.innerHTML = "&nbsp;";
        messageState = false;
    }
    
}