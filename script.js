var character = document.getElementById("character");
var block = document.getElementById("block");
var jump = document.getElementById("jump-btn");
var scoreDisplay = document.getElementById("score");
var score = 0;
isJumping = false;

jump.addEventListener("click", function() {
  isJumping = true;
    character.classList.add("animate"); //Add the jump animation

    character.addEventListener("animationend", function () { //Remove jump animation
          character.classList.remove("animate");
          isJumping = false;
        },{ once: true }); //Ensures that it only runs once
});

setInterval(function() {
  if (isJumping && parseInt(window.getComputedStyle(block).getPropertyValue("left")) <= 10) { //If isJumping=true & block position is 10px, score + 1
    score ++;
    scoreDisplay.innerText = score;
  }
  else if (!isJumping && parseInt(window.getComputedStyle(block).getPropertyValue("left")) <= 10) { //If isJumping=false & block position is 10px, score reset
    score = 0; //reset score
    scoreDisplay.innerText = score;
  }
