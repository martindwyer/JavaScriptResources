// alert("This is an alert!");
console.log("JavaScript is working.");

$(document).ready(function(){
    console.log("jQuery is ready");
    
    $('span.pq').each(function(){       //find all the span tags of class pq
    var quote = $(this).clone();    //clone each span that was found
                                    //and refer to it by the var quote
    quote.removeClass('pq');        //remove the class to avoid finding the clone
    quote.addClass('pullquote');   //give it the pullquote class so it will be 
                                    //styled as a pullquote
    $(this).before(quote);          // add the enw pullquote to the text before the span
                                    // of class pq that we started with
    });                                 
});