// variables

let lives = 5;
let points = 0;
let time_left = 60;
let gameMusic = document.querySelector("#game_music");
let menuMusic = document.querySelector("#menu_music");
let loseMusic = document.querySelector("#lose_music");
let winMusic = document.querySelector("#win_music");

// time

function showTimer () {
    console.log("showTimer");
    time_left--;
    document.querySelector("#time").textContent = time_left;
    startTimer();
}

function startTimer() {
    if (time_left > 0) {
        setTimeout(showTimer, 1000);
    } else {
        loseGame();
    }
}

window.addEventListener("load", firstClick);
sound();

// pre-start

function firstClick() {
    document.querySelector("#pre-start").addEventListener("click", main)
}

// /* sound button */

function sound() {
document.querySelector("#sound_button").addEventListener("click", soundOff);
}

function soundOff() {
    console.log("soundOff");
    this.removeEventListener("click", soundOff)
    this.classList.remove("sound_on");
    this.classList.add("sound_off");
    this.addEventListener("click", soundOn);
    gameMusic.muted = true;
}

function soundOn() {
    console.log("soundOn");
    this.removeEventListener("click", soundOn)
    this.classList.remove("sound_off");
    this.classList.add("sound_on");
    this.addEventListener("click", soundOff);
    gameMusic.muted = false;
}

// main menu
function main() {
    this.removeEventListener("click", main)
    this.classList.add("hidden");
    document.querySelector("#menu").classList.remove("hidden");
    document.querySelector("#black").classList.add("lights");
    document.querySelector("#courtain").classList.add("courtain");
    playMenumusic();
    document.querySelector("#play_button").addEventListener("click", menuStart);
    document.querySelector("#instruction_play_button").addEventListener("click", menuStart);
    document.querySelector("#instructions_button").addEventListener("click", showInstructions);
}

function menuStart() {
    document.querySelector("#menu").classList.add("hidden");
    start();
}

function showInstructions() {
    document.querySelector("#instruction_text").classList.remove("hidden");
    document.querySelector("#instruction_play_button").classList.remove("hidden");
}

// playing menu music from beginning

function playMenumusic() {
    menuMusic.currentTime = 0;
    menuMusic.play();
}

// playing game music from the beginning

function playMusic() {
    gameMusic.currentTime = 0;
    gameMusic.play();
}

function stopMenumusic() {
    menuMusic.muted = true
}

// starting the game

function start() {

    document.querySelector("#menu").classList.add("hidden");
    document.querySelector("#game_screen").classList.remove("hidden");

    showTimer ();
    setPosition();

    stopMenumusic();
    playMusic();

    document.querySelector("#container_phone").addEventListener("animationiteration", randomPosition);
    document.querySelector("#container_phone2").addEventListener("animationiteration", randomPosition);
    document.querySelector("#container_phone3").addEventListener("animationiteration", randomPosition);
    document.querySelector("#container_applause").addEventListener("animationiteration", randomPosition);
    document.querySelector("#container_applause2").addEventListener("animationiteration", randomPosition);
    document.querySelector("#container_applause3").addEventListener("animationiteration", randomPosition);

    // animated objects

    document.querySelector("#sprite_phone").classList.add("fading_objects");
    document.querySelector("#sprite_phone2").classList.add("fading_objects");
    document.querySelector("#sprite_phone3").classList.add("fading_objects");
    document.querySelector("#sprite_applause").classList.add("fading_objects");
    document.querySelector("#sprite_applause2").classList.add("fading_objects");
    document.querySelector("#sprite_applause3").classList.add("fading_objects");

    // clicking bad objects

    document.querySelector("#container_phone").addEventListener("click", clickPhone);
    document.querySelector("#container_phone2").addEventListener("click", clickPhone);
    document.querySelector("#container_phone3").addEventListener("click", clickPhone);


    // clicking good objects

    document.querySelector("#container_applause").addEventListener("click", clickClap);
    document.querySelector("#container_applause2").addEventListener("click", clickClap);
    document.querySelector("#container_applause3").addEventListener("click", clickClap);

}

// objects - setting position

function randomNumber() {
    let rn = Math.floor(Math.random() * 13 + 1);
    return "position" + rn;
}

function setPosition() {
    document.querySelector("#container_phone").classList.add(randomNumber());
    document.querySelector("#container_phone2").classList.add(randomNumber());
    document.querySelector("#container_phone3").classList.add(randomNumber());
    document.querySelector("#container_applause").classList.add(randomNumber());
    document.querySelector("#container_applause2").classList.add(randomNumber());
    document.querySelector("#container_applause3").classList.add(randomNumber());
}

// objects - showing randomly

function randomPosition() {
    this.classList = "";
    this.classList.add(randomNumber());
}

// preventing objects from appearing one on another

const positions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

for (let i = 0; i < positions.length; i++) {

}

// objects - animations and behavior

function clickClap() {
    this.removeEventListener("click", clickClap);
    this.firstElementChild.classList.remove("fading_objects");
    this.firstElementChild.classList.add("good_click");
    this.firstElementChild.addEventListener("animationend", restartClap);
    addPoint();
}

function clickPhone() {
    this.removeEventListener("click", clickPhone);
    this.firstElementChild.classList.remove("fading_objects");
    this.firstElementChild.classList.add("bad_click");
    this.firstElementChild.addEventListener("animationend", restartPhone);
    angryPavarotti();
    removeHealth();
}

// when phone is clicked

function angryPavarotti() {
    document.querySelector("#pavarotti").classList.remove("sprite_pavarotti");
    document.querySelector("#pavarotti").classList.add("angry_pavarotti");
}

// points and health

function addPoint() {
    points++;
    document.querySelector("#point" + points).classList.add("point");
    if (points > 9) {
        winGame();
    }
}

function removeHealth() {
    lives--;
    document.querySelector("#heart" + lives).classList.remove("heart");
    if (lives < 1) {
        loseGame();
    }
}

// restart phone

function restartPhone() {
    console.log("restartPhone");
    this.parentNode.classList.add(randomNumber());
    this.parentNode.addEventListener("animationiteration", randomPosition);
    this.classList.remove("bad_click");
    this.classList.add("fading_objects");
    this.parentNode.addEventListener("click", clickPhone);
    document.querySelector("#pavarotti").classList.remove("angry_pavarotti");
    document.querySelector("#pavarotti").classList.add("sprite_pavarotti");
}

// restart bad element

function restartClap() {
    console.log("restartClap");
    this.parentNode.classList.add(randomNumber());
    this.parentNode.addEventListener("animationiteration", randomPosition);
    this.classList.remove("good_click");
    this.classList.add("fading_objects");
    this.parentNode.addEventListener("click", clickClap);
}

// winning game and reply

function winGame() {
    console.log("winGame");
    endGame();
    winMusic.play();
    document.querySelector("#win").classList.remove("hidden");
    document.querySelector("#win_illustration").classList.remove("hidden");
    document.querySelector("#win_text").classList.remove("hidden");
    document.querySelector("#win_replay_button").addEventListener("click", winReplay);
}

function winReplay() {
    console.log("replay");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#win_illustration").classList.add("hidden");
    document.querySelector("#win_text").classList.add("hidden");
    document.querySelector("#heart0").classList.add("heart");
    document.querySelector("#heart1").classList.add("heart");
    document.querySelector("#heart2").classList.add("heart");
    document.querySelector("#heart3").classList.add("heart");
    document.querySelector("#heart4").classList.add("heart");
    document.querySelector("#point1").classList.remove("point");
    document.querySelector("#point2").classList.remove("point");
    document.querySelector("#point3").classList.remove("point");
    document.querySelector("#point4").classList.remove("point");
    document.querySelector("#point5").classList.remove("point");
    document.querySelector("#point6").classList.remove("point");
    document.querySelector("#point7").classList.remove("point");
    document.querySelector("#point8").classList.remove("point");
    document.querySelector("#point9").classList.remove("point");
    document.querySelector("#point10").classList.remove("point");
    lives = 5;
    points = 0;
    time_left = 60;
    gameMusic.muted = false;
    start();
}

// losing game

function loseGame() {
    console.log("loseGame");
    endGame();
    loseMusic.play();
    document.querySelector("#lose").classList.remove("hidden");
    document.querySelector("#lose_illustration").classList.remove("hidden");
    document.querySelector("#lose_text").classList.remove("hidden");
    document.querySelector("#lose_replay_button").addEventListener("click", loseReplay);
}

function loseReplay() {
    console.log("replay");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#lose_illustration").classList.add("hidden");
    document.querySelector("#lose_text").classList.add("hidden");
    document.querySelector("#heart0").classList.add("heart");
    document.querySelector("#heart1").classList.add("heart");
    document.querySelector("#heart2").classList.add("heart");
    document.querySelector("#heart3").classList.add("heart");
    document.querySelector("#heart4").classList.add("heart");
    document.querySelector("#point1").classList.remove("point");
    document.querySelector("#point2").classList.remove("point");
    document.querySelector("#point3").classList.remove("point");
    document.querySelector("#point4").classList.remove("point");
    document.querySelector("#point5").classList.remove("point");
    document.querySelector("#point6").classList.remove("point");
    document.querySelector("#point7").classList.remove("point");
    document.querySelector("#point8").classList.remove("point");
    document.querySelector("#point9").classList.remove("point");
    document.querySelector("#point10").classList.remove("point");
    lives = 5;
    points = 0;
    time_left = 60;
    gameMusic.muted = false;
    start();
}

function endGame() {
    gameMusic.muted = true;
    document.querySelector("#container_phone").removeEventListener("animationiteration", randomPosition);
    document.querySelector("#container_phone2").removeEventListener("animationiteration", randomPosition);
    document.querySelector("#container_phone3").removeEventListener("animationiteration", randomPosition);
    document.querySelector("#container_applause").removeEventListener("animationiteration", randomPosition);
    document.querySelector("#container_applause2").removeEventListener("animationiteration", randomPosition);
    document.querySelector("#container_applause3").removeEventListener("animationiteration", randomPosition);
}
