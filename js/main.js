// Setting the footer
let year = new Date().getFullYear();
const footerNote = document.querySelector("footer");
footerNote.innerHTML =
  "The Dreamer " +
  year +
  '<span class="material-symbols-outlined rocket-icon">rocket_launch</span>';

function loadPage() {
  // window.onload = function() {
  const btnClass = document.querySelector(".btns-container");
  btnClass.style.visibility = "visible";
  setTimeout(function () {
    let introSound = new Audio("sound/intro.wav");
    introSound.play();
  }, 100);
  document.removeEventListener("click", loadPage);
}
// }

function main() {
  document.addEventListener("click", loadPage);
}

function clickSound() {
  let sound = new Audio("sound/click.wav");
  sound.play();
}

function howToClick() {
  clickSound();
  setTimeout(function () {
    window.location.replace("how-to-play.html");
  }, 500);
}

function playClick() {
  clickSound();
  animatePlayBtn();
  setTimeout(function () {
    window.location.replace("play.html");
  }, 3000);
}

function animatePlayBtn() {
  let playBtn = document.querySelector(".play-btn");
  playBtn.style["-webkit-animation"] =
    "animate-play-btn-when-clicked 2s ease-in";
  setTimeout(function () {
    let playBtnAudio = new Audio("sound/glitch2.wav");
    playBtnAudio.play();
  }, 1000);
}

main();
