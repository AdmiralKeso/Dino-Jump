var character = document.getElementById("character");
var block = document.getElementById("block");
var jump = document.getElementById("jump-btn");
var score = document.getElementById("score");

jump.addEventListener("click", function() {
    character.classList.add("animate"); //Add the jump animation
    character.addEventListener("animationend", function () { //Remove jump animation
          character.classList.remove("animate");
        },{ once: true }); //Ensures that it only runs once
});