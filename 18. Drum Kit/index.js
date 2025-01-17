function makeSound(key) {
  if (key === "w") {
    var audio = new Audio("./sounds/tom-1.mp3");
  } else if (key === "a") {
    var audio = new Audio("./sounds/tom-2.mp3");
  } else if (key === "s") {
    var audio = new Audio("./sounds/tom-3.mp3");
  } else if (key === "d") {
    var audio = new Audio("./sounds/tom-4.mp3");
  } else if (key === "j") {
    var audio = new Audio("./sounds/snare.mp3");
  } else if (key === "k") {
    var audio = new Audio("./sounds/crash.mp3");
  } else if (key === "l") {
    var audio = new Audio("./sounds/kick-bass.mp3");
  }
  audio.play();
}

function buttonAnimation(currentKey) {
  // taking the current class .w/.a/.s/...
  var activeButton = document.querySelector("." + currentKey);
  // adding a new class called pressed (already included in CSS)
  activeButton.classList.add("pressed");
  // setting a timer for this new class of 1 second
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// detecting button pressed
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// detecting key pressed
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
