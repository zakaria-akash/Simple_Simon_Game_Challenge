
//creating a new array called buttonColours and setting it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

//creating a new empty array called gamePattern.
var gamePattern = [];

//a new function called nextSequence()
function nextSequence() {

  //a new random number between 0 and 3, and store it in a variable called randomNumber
  var randomNumber = Math.floor(Math.random() * 4);

  //a new variable called randomChosenColour and using the randomNumber to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[randomNumber];

  //adding the new randomChosenColour to the end of the gamePattern.
  gamePattern.push(randomChosenColour);

}
