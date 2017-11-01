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
    $(".result").show();

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

    //loop through last array to remove undefined elements
    if (Math.sqrt(characters.length) !== numberOfRows * numberOfColumns) {
      var numberOfIterations = (numberOfRows * numberOfColumns) - characters.length;
      for (index = 0; index < numberOfIterations; index++) {
        arrayOfRows[numberOfRows - 1].pop();
      }

    }

    for (var index = 0; index < arrayOfRows.length; index++) {
      for (var j = 0; j < arrayOfRows.length; j++) {
        var currentArray = arrayOfRows[j];
        if (!currentArray[index]) {
           //do nothing
        } else {
        outputArray.push(currentArray[index]);
        }
      }
    }
    for (var index = 0; index < outputArray.length; index ++) {
      finalString = finalString.concat(outputArray[index]);
    }
    console.log(numberOfColumns)
    for (var index = 0; index < finalString.length; index ++) {
      outputString = outputString.concat(finalString.slice((5 * index), (5 * (index + 1))) + " ");
    }
    $("#scrambleSentence").text(outputString);


  })

})
