// alert("This is an alert!");
console.log("JavaScript is working.");



var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

var calendar = document.getElementById("calendar");
var calendar2 = document.getElementById("anotherCalendar");

drawCalendarA(calendar);
drawCalendarB(calendar2, 3, 30);

function drawCalendarA(calendar){

    var topRow = getTopRow();

    // constructing the date rows
    var dateRows = "";
    var dateToDisplay = 0;
    for (j=1; j <= 4; j++) {
        dateRows += "<tr>";
        for (k = 1; k <=7; k++){
            dateToDisplay ++;
            dateRows += "<td>" + dateToDisplay + "</td>";
            }
        dateRows += "</tr>";
        }

    calendar.innerHTML = topRow;
    calendar.innerHTML += dateRows;
 }

function drawCalendarB(calendar, startDay, daysInMonth) {
    
    calendar.innerHTML = getTopRow();
    
    var dateRows = "";
    var days = daysInMonth;
    var dateToDisplay = startDay*-1;
    
    while(dateToDisplay <= days) {
        dateRows += "<tr>";
        for (k = 1; k <=7; k++){
            dateToDisplay ++;
            var displayValue = "";
            if (dateToDisplay <= days && dateToDisplay > 0) {
                displayValue = dateToDisplay;
            }
            dateRows += "<td>" + displayValue + "</td>";
            }
        dateRows += "</tr>";
        }            
       calendar.innerHTML += dateRows; 
}

function getTopRow() {
    
    var topRow = "";

    topRow += "<tr>";

    // looping over an array with a for loop
    // creating the day headers for the calendar
    for (i=0; i < days.length; i++) {
        topRow += "<th>" + days[i] + "</th>"
    }
    topRow += "</tr>";
    
    return topRow;
}