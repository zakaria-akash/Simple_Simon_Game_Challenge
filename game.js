//creating a new array called buttonColours and setting it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

//creating a new empty array called gamePattern.
var gamePattern = [];


//creating a new empty array with the name userClickedPattern.
var userClickedPattern = [];

//a variable to detect and keep track whether if the game has started or not
var started = false;

//creating a new variable called level and start at level 0.
var level = 0;

//declaring an event handler method with keypress event to start the game for the first time by calling nextSequence() method inside it
$(document).keypress(function() {
  if (!started) {

    //once the game has started the title will show the current level instead of showing "Press A Key to Start"
    $("#level-title").text("Level: " + level);
    nextSequence();
    started = true;
  }
});

//using jQuery to detect when any of the buttons got clicked and trigger an event handler function
$(".btn").click(function() {

  //inside the handler function, creating a new variable "userChosenColour" to store the id of the button that got clicked
  var userChosenColour = $(this).attr("id");

  //adding the ID of the detected buttons to the array "userClickedPattern" through the variable "userChosenColour"
  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern); //testing the code for all clicked buttons in the console

  //calling playSound() method inside the event handler function to play the corresponding sound
  //for everytime a button got clicked
  playSound(userChosenColour);

  //calling the clickAnimation() method to apply the click animation to the button got clicked
  clickAnimation(userChosenColour);
});

//a new function called nextSequence()
function nextSequence() {
  //increasing the level by 1 every time nextSequence() is called.
  level++;

  //updating the h1 title with this change in the value of level.
  $("#level-title").text("Level " + level);

  //a new random number between 0 and 3, and store it in a variable called randomNumber
  var randomNumber = Math.floor(Math.random() * 4);

  //a new variable called randomChosenColour and using the randomNumber to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[randomNumber];

  //adding the new randomChosenColour to the end of the gamePattern.
  gamePattern.push(randomChosenColour);

  //selecting the button with the same id as the randomChosenColour
  //and adding an animated flash to the selected button
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //calling playSound() method inside the nextSequence() method to play corresponding sound
  //for a randomly selected button which will lead the user to the next level of this game
  playSound(randomChosenColour);

}


//declaring a new function called playSound() that takes a single input parameter called name
//this method will be used to play corresponding sound for the four buttons
function playSound(name) {

  //using Javascript Audio() constructor to play the sound based on the selected button color
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//declaring a new function called clickAnimation(), it should take a single input parameter called currentColour.
function clickAnimation(currentColor) {

  //adding the HTML class named "pressed" to the button got clicked to change the background
  $("#" + currentColor).addClass("pressed");

  //removing the HTML class named "pressed" from the button got clicked to retain the background after 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
