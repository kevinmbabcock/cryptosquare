$(document).ready(function() {

  $("#userInput").submit(function(event) {
    event.preventDefault();
    var inputString = $("#inputString").val();



    var clearString = inputString.replace(/[^a-zA-Z]/g, "");
    var clearStringLength = clearString.length;
    var numberOfRows = Math.ceil(Math.sqrt(clearStringLength));
    var numberOfColumns = Math.floor(Math.sqrt(clearStringLength));
    var arrayOfRows = [];

    for (index = 0; index < numberOfRows; index ++) {
      var newArray = [];
      arrayOfRows.push(newArray);
    }

    var characters = clearString.split("");

    //console.log(numberOfColumns);
    for (var index = 0; index < numberOfRows; index++) {
      for (var j = index * numberOfColumns; j < numberOfColumns * (index + 1); j++) {
        arrayOfRows[index].push(characters[j]);

      }

    }
    arrayOfRows.forEach(function(row) {
      console.log(row);
    })
  })

})
