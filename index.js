// to detect click
var numberOfButtons = document.querySelectorAll(".drum");

for (var i=0; i<numberOfButtons.length; i++) {
  numberOfButtons[i].addEventListener("click", function(){
    numberOfButtons = this.innerHTML
    makeSound (numberOfButtons);
    buttonAnimation(numberOfButtons);
 })
}

// to detect keyboard
document.addEventListener("keydown", function() {
  makeSound(event.key);
  buttonAnimation(event.key);
})

// to make sound wheck buttons are clicked or typed
function makeSound(key) {
switch (key) {
  case "j":
  var snare = new Audio('sounds/snare.mp3');
  snare.play();
    break;

  case "k":
  var cymbal = new Audio('sounds/cymbal.mp3');
  cymbal.play();
    break;

  case "l":
  var kick = new Audio('sounds/kick.mp3');
  kick.play();
    break;

  case "z":
  var tom1 = new Audio('sounds/tom-1.mp3');
  tom1.play();
    break;

  case "q":
  var tom2 = new Audio('sounds/tom-2.mp3');
  tom2.play();
    break;

  case "s":
  var tom3 = new Audio('sounds/tom-3.mp3');
  tom3.play();
    break;

  case "d":
  var tom4 = new Audio('sounds/tom-4.mp3');
  tom4.play();
    break;

  default: console.log(numberOfButtons);
}
}

// add animation to the buttons
function buttonAnimation (currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 200);
}
