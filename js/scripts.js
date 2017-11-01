$(document).ready(function() {

  $("#userInput").submit(function(event) {
    event.preventDefault();
    var input = $("#inputString").val();

    console.log(input);
    //var newString = inputString.reduce(/[a-zA-Z]/g, "");
  })

})
