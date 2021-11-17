// variables

let lives = 5;
let points = 0;
let time_left = 60;

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

window.addEventListener("load", main);
sound();

// /* sound button */

function sound() {
document.querySelector("#container_sound").classList.add("sound_on");
document.querySelector("#container_sound").addEventListener("click", soundOff);
}

function soundOff() {
    console.log("soundOff");
    document.querySelector("#container_sound").classList.toggle("sound_off");
}

// main menu
function main() {
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


// starting the game

function start() {

    document.querySelector("#menu").classList.add("hidden");
    document.querySelector("#game_screen").classList.remove("hidden");

    showTimer ();
    setPosition();

    document.querySelector("#container_phone").addEventListener("animationiteration", randomPosition);
    document.querySelector("#container_applause").addEventListener("animationiteration", randomPosition);
    document.querySelector("#container_angry").addEventListener("animationiteration", randomPosition);
    

    // animated objects

    document.querySelector("#sprite_phone").classList.add("fading_objects");
    document.querySelector("#sprite_applause").classList.add("fading_objects");
    document.querySelector("#sprite_angry").classList.add("fading_objects");

    // missing phone

    document.querySelector("#container_phone").addEventListener("animationiteration", missPhone);

    // clicking good objects

    document.querySelector("#container_phone").addEventListener("click", clickPhone);


    // clicking bad objects

    document.querySelector("#container_applause").addEventListener("click", clickBadobject);
    document.querySelector("#container_angry").addEventListener("click", clickBadobject);
}

// objects - setting position

function randomNumber() {
    let rn = Math.floor(Math.random() * 13 + 1);
    return "position" + rn;
}

function setPosition() {
    document.querySelector("#container_phone").classList.add(randomNumber());
    document.querySelector("#container_applause").classList.add(randomNumber());
    document.querySelector("#container_angry").classList.add(randomNumber());
}

// objects - showing randomly

function randomPosition() {
    this.classList = "";
    this.classList.add(randomNumber());
}


function clickPhone() {
    this.removeEventListener("click", clickPhone);
    this.firstElementChild.classList.remove("fading_objects");
    this.firstElementChild.classList.add("good_click");
    this.firstElementChild.addEventListener("animationend", restartPhone);
    addPoint();
}

function clickBadobject() {
    this.removeEventListener("click", clickBadobject);
    this.firstElementChild.classList.remove("fading_objects");
    this.firstElementChild.classList.add("bad_click");
    this.firstElementChild.addEventListener("animationend", restartBadelement);
    removeHealth();
}

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
    this.classList.remove("good_click");
    this.classList.add("fading_objects");
    this.parentNode.addEventListener("click", clickPhone);
}

// restart bad element

function restartBadelement() {
    console.log("restartBadelement");
    this.parentNode.classList.add(randomNumber());
    this.parentNode.addEventListener("animationiteration", randomPosition);
    this.classList.remove("bad_click");
    this.classList.add("fading_objects");
    this.parentNode.addEventListener("click", clickBadobject);
}

function missPhone() {
    console.log("missPhone");
    this.firstElementChild.addEventListener("animationend", restartBadelement);
    removeHealth();
}

function winGame() {
    console.log("winGame");
    endGame();
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
    lives = 5;
    points = 0;
    time = 60;
    start();
}

function loseGame() {
    console.log("loseGame");
    endGame();
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
    lives = 5;
    points = 0;
    time = 60;
    start();
}

function endGame() {
    document.querySelector("#container_phone").removeEventListener("animationiteration", randomPosition);
    document.querySelector("#container_applause").removeEventListener("animationiteration", randomPosition);
    document.querySelector("#container_angry").removeEventListener("animationiteration", randomPosition);
    document.querySelector("#container_phone").removeEventListener("animationiteration", missPhone);
}











// /* variables */

// const sprites = ["#container_phone", "#container_applause", "#container_angry"];
// let objects = Math.floor(Math.random() * sprites.length);
// let random_id = sprites[objects];

// let objects_number = Math.floor(Math.random() * 6 + 1);



// /* objects appearing in random places */

// function random_objects() {
//     document.querySelector(random_id).classList.add("position" + objects_number);
//     console.log(objects_number + " " + random_id);
// }


// function remove_position() {
//     document.querySelector(random_id).classList.remove("position" + objects_number)
//     console.log("remove_position");
// }

// // document.querySelector("#container_phone").classList.add("position" + objects_number);

// // document.querySelector("#container_applause").classList.add("position" + objects_number);

// // document.querySelector("#container_angry").classList.add("position" + objects_number);

// setInterval(random_objects, 4000);

// if()
// remove_position();

// /* clicking good objects */

// // function good_object() {
// //     // play animation
// //     // add a point
// //     document.querySelector("#points_container").classList.add("point" + )
// // }

// // document.querySelector("#container_phone").addEventListener("click", good_object);

// // /* clicking bad objects */

// // function bad_object() {
// //     // play animation
// //     // subtract one life
// // }

// // document.querySelector("#container_applause").addEventListener("click", bad_object);
// // document.querySelector("#container_angry").addEventListener("click", bad_object);
