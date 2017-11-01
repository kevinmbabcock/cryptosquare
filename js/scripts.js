$(document).ready(function() {

  $("#userInput").submit(function(event) {
    event.preventDefault();
    var inputString = $("#inputString").val();

    var clearString = inputString.replace(/[^a-zA-Z]/g, "");
    var clearStringLength = clearString.length;
    var numberOfRows = Math.ceil(Math.sqrt(clearStringLength));
    var numberOfColumns = Math.floor(Math.sqrt(clearStringLength));
    var arrayOfRows = [];
    var outputArray = [];
    var finalString = "";
    var outputString = "";


    var characters = clearString.split("");


    for (index = 0; index < numberOfRows; index ++) {
      var newArray = [];
      arrayOfRows.push(newArray);
    }
    if (((numberOfColumns * numberOfColumns) + numberOfColumns) < characters.length) {
      numberOfColumns++;
    }

    for (var index = 0; index < numberOfRows; index++) {
      for (var j = index * numberOfColumns; j < numberOfColumns * (index + 1); j++) {
        arrayOfRows[index].push(characters[j]);
      }
    }

//create loop to remove undefined elements
    if (Math.sqrt(characters.length) !== numberOfRows * numberOfColumns) {
      var numberOfIterations = (numberOfRows * numberOfColumns) - characters.length;
      for (index = 0; index < numberOfIterations; index++) {
        arrayOfRows[numberOfRows - 1].pop();
      }
      console.log(arrayOfRows);
    }

    for (var index = 0; index < arrayOfRows.length; index++) {
      for (var j = 0; j < arrayOfRows.length; j++) {
        var currentArray = arrayOfRows[j];
        outputArray.push(currentArray[index]);
      }
    }
    for (var index = 0; index < outputArray.length; index ++) {
      finalString = finalString.concat(outputArray[index]);
    }

    for (var index = 0; index < finalString.length; index ++) {
      outputString = outputString.concat(finalString.slice((numberOfColumns * index), (numberOfColumns * (index + 1))) + " ");
    }
    console.log(outputArray);
  })

})
