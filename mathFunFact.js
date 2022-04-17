$(document).ready(function(){
    //Run when the button is clicked
    $("#factButton").click(function(){
      //Execute the API call.
      var fact = $.get("http://numbersapi.com/random/math");
      
      //Function that runs when the API runs successfully
      fact.done(function(response){
        //Set the text
        document.getElementById("funFact").innerHTML = response;
      });
    });
  });