let typing = new Audio("sound/typing2.wav");

setTimeout(function() {
    typing.play();
    typing.volume = 1;
    typing.loop = true;
    changeHowToBtn();
}, 1500);

setTimeout(function() {
    typing.pause();
}, 21000);

function clickSound() {
    let sound = new Audio("sound/click.wav");
    sound.play();
}

function mainClick() {
    clickSound();
    setTimeout(function() {
        window.location.replace("index.html");
    }, 500);
}


function playClick() {
    clickSound();
    animatePlayBtn();
    setTimeout(function() {
        window.location.replace("play.html");
    }, 3500);
}

function animatePlayBtn() {
    let playBtn = document.querySelector(".play-btn");
    playBtn.style["-webkit-animation"] = "animate-play-btn-when-clicked 2s ease-in";
    setTimeout(function() {
        let playBtnAudio = new Audio ("sound/glitch2.wav");
        playBtnAudio.play();
    }, 1000);
}

function changeHowToBtn() {
    const button = document.querySelector(".main-page-btn");
    button.style["-webkit-animation"] = "animate-btn-text 5s linear, animate-btns 1500ms infinite ease alternate";
    button.style.animation = "animate-btn-text 5s linear, animate-btns 1500ms infinite ease alternate";
    setTimeout(function() {
        button.textContent = "Main Page";
    }, 2500);
}