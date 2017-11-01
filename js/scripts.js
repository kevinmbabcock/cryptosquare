//initialize global variables
var arrayOfRows = [];
var outputArray = [];
var finalString = "";
var outputString = "";
var clearString = "";
var clearStringLength = 0;
var numberOfRows;
var numberOfColumns;
var characters;

var createArrays = function() {
  for (index = 0; index < numberOfRows; index ++) {
    var newArray = [];
    arrayOfRows.push(newArray);
  }
  if (((numberOfColumns * numberOfColumns) + numberOfColumns) < characters.length) {
    numberOfColumns++;
  }
}

var pushToArray = function() {
  for (var index = 0; index < numberOfRows; index++) {
    for (var j = index * numberOfColumns; j < numberOfColumns * (index + 1); j++) {
      arrayOfRows[index].push(characters[j]);
    }
  }
}

var removeUndefined = function() {
  if (Math.sqrt(characters.length) !== numberOfRows * numberOfColumns) {
    var numberOfIterations = (numberOfRows * numberOfColumns) - characters.length;
    for (index = 0; index < numberOfIterations; index++) {
      arrayOfRows[numberOfRows - 1].pop();
    }
  }
}

var scrambleLetters = function() {
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
}

var changeToString = function() {
  for (var index = 0; index < outputArray.length; index ++) {
    finalString = finalString.concat(outputArray[index]);
  }
  console.log(numberOfColumns)
  for (var index = 0; index < finalString.length; index ++) {
    outputString = outputString.concat(finalString.slice((5 * index), (5 * (index + 1))) + " ");
  }
}

$(document).ready(function() {

  $("#userInput").submit(function(event) {
    event.preventDefault();
    var inputString = $("#inputString").val();

    clearString = inputString.replace(/[^a-zA-Z]/g, "");
    clearStringLength = clearString.length;
    numberOfRows = Math.ceil(Math.sqrt(clearStringLength));
    numberOfColumns = Math.floor(Math.sqrt(clearStringLength));
    characters = clearString.split("");
    $(".result").show();

    createArrays();
    pushToArray();
    removeUndefined();
    scrambleLetters();
    changeToString();

    $("#scrambleSentence").text(outputString);
  })
})
