// alert("This is an alert!");
console.log("JavaScript is working.");

$(document).ready(function(){
    console.log("jQuery is ready");
    
    // basic selectors
    // id selector
    $('#firstHeader').css("color", "blue");
    
    // class selector
    $('.subHeads').css("color", "purple");
    
    // element selector
    $('h3').css("color", "green");
    
    // filters
    // odd
    $('#tableSection tr:odd').css("background-color","yellow").css("color","green");
    // even
    $('#tableSection tr:even').css("background-color","green").css("color","yellow");
    //first
    $('#tableSection tr:first').css("background-color","black").css("color","white");
    // last
    $('#tableSection tr:last').css({
                                    "background-color": "pink",
                                    "color":"blue",
                                    "font-weight": "bold",
                                    "font-variant": "small-caps",
                                    "font-size":"36px"
                                    });
    // :has()
    $('#tableSection td:has(a)').css("background-color","white");
    $('#tableSection td:contains("out")').css({"background-color":"white","color":"red","font-style":"bold"});
    
    // advanced selectors
    $('#advancedSelectors h5').css("color","blue");
    
    // child
    $('#advancedSelectors > h5').css("color","green");
    
    // sibling
    $('#advancedSelectors h5 + p').css("color","red");
    
    
});