let typing = new Audio("sound/typing2.wav");

setTimeout(function () {
  typing.play();
  typing.volume = 1;
  typing.loop = true;
  changeHowToBtn();
}, 1500);

setTimeout(function () {
  typing.pause();
}, 21000);

function clickSound() {
  let sound = new Audio("sound/click.wav");
  sound.play();
}

function mainClick() {
  clickSound();
  setTimeout(function () {
    window.location.replace("index.html");
  }, 500);
}

function playClick() {
  clickSound();
  animatePlayBtn();
  setTimeout(function () {
    window.location.replace("play.html");
  }, 3500);
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

function changeHowToBtn() {
  const button = document.querySelector(".main-page-btn");
  button.style["-webkit-animation"] =
    "animate-btn-text 5s linear, animate-btns 1500ms infinite ease alternate";
  button.style.animation =
    "animate-btn-text 5s linear, animate-btns 1500ms infinite ease alternate";
  setTimeout(function () {
    button.textContent = "Main Page";
  }, 2500);
}

// Setting the footer
let year = new Date().getFullYear();
const footerNote = document.querySelector("footer");
footerNote.innerHTML =
  "The Dreamer " +
  year +
  '<span class="material-symbols-outlined">rocket_launch</span>';

if (window.innerWidth <= 770) {
  typing.pause();

  // adding new elements in the How to Container
  const newP1 = document.createElement("p");
  const newP2 = document.createElement("p");
  const newP3 = document.createElement("p");
  const cont = document.querySelector(".how-to");
  cont.appendChild(newP1);
  cont.appendChild(newP2);
  cont.appendChild(newP3);
  newP1.textContent =
    "Four colors will be randomly picked by the computer. The objective is for you to guess the colors within ten attempts.";
  newP2.textContent =
    "The colors should match in order. Keep in mind that there could be two, or three, or all of the same colors in each round";
  newP3.textContent =
    "For each attempt, small markers of white and black will be given as a clue or feedback. White marker denotes that the color is correct but in the wrong position. While black means the position and color is correct. If none of the colors are correct, then no marker will be given.";

  // removing elements in the How to Container
  const oldP1 = document.querySelector(".p1");
  const oldP2 = document.querySelector(".p2");
  const oldP3 = document.querySelector(".p3");
  const oldP4 = document.querySelector(".p4");
  const oldP5 = document.querySelector(".p5");
  const oldP6 = document.querySelector(".p6");
  oldP1.remove();
  oldP2.remove();
  oldP3.remove();
  oldP4.remove();
  oldP5.remove();
  oldP6.remove();
}
