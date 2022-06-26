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

  //calling playSound() method inside the event handler function to play the corresponding sound
  //for everytime a button got clicked
  playSound(userChosenColour);

  //calling the clickAnimation() method to apply the click animation to the button got clicked
  clickAnimation(userChosenColour);

  //Calling checkAnswer() method at every level with passing the index of the last user input
  //to justify the user input against the game pattern and to initiate the game for the next level
  checkAnswer(userClickedPattern.length-1);
});

//creating a function called checkAnswer() with one input parameter currentLevel
function checkAnswer(currentLevel) {

    //if statement inside checkAnswer() to check if the most recent user input is the same as the game pattern
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      //another if statement to check whether the user has finished the input or not
      //if so, then call the nextSequence() method again for the next level
      if (userClickedPattern.length === gamePattern.length){

        //Calling nextSequence() method again after a 1000 millisecond delay to initiate the next level of the game
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
      //playing the wrong.mp3 from sounds folder through playSound() method if the user got one of the answers wrong
      playSound("wrong");

      //applying the html class game-over to the entire body for 200 milliseconds if any input from the user is wrong
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //changing the h1 title to "Game Over, Press Any Key to Restart" if any input from the user is wrong
      $("#level-title").text("Game Over, Press Any Key to Restart");

      //calling the restartGame() method if any input from the user is wrong
      restartGame();

    }

}

//a new function called nextSequence()
function nextSequence() {
  //once nextSequence() is initiated, reset the userClickedPattern to an empty array for the next level
  userClickedPattern = [];
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

//creating a new function called restartGame() to restart the game
function restartGame() {

  //resetting the values of level, gamePattern and started variables for the purpose to restart the game
  level = 0;
  gamePattern = [];
  started = false;
}

//adding comment for new commit texting!