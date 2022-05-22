
//creating a new array called buttonColours and setting it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

//creating a new empty array called gamePattern.
var gamePattern = [];


//creating a new empty array with the name userClickedPattern.
var userClickedPattern = [];

//using jQuery to detect when any of the buttons got clicked and trigger an event handler function
$(".btn").click(function() {

  //inside the handler function, creating a new variable "userChosenColour" to store the id of the button that got clicked
  var userChosenColour = $(this).attr("id");

  //adding the ID of the detected buttons to the array "userClickedPattern" through the variable "userChosenColour"
  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern); //testing the code for all clicked buttons in the console

});

//a new function called nextSequence()
function nextSequence() {

  //a new random number between 0 and 3, and store it in a variable called randomNumber
  var randomNumber = Math.floor(Math.random() * 4);

  //a new variable called randomChosenColour and using the randomNumber to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[randomNumber];

  //adding the new randomChosenColour to the end of the gamePattern.
  gamePattern.push(randomChosenColour);

  //using jQuery to select the button with the same id as the randomChosenColour
  //2. using jQuery to animate a flash to the selected button
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. using Javascript Audio() constructor to play the sound based on the selected button color
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

}
