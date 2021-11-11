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

// function start

function start() {

    showTimer ();
    setPosition();

    document.querySelector("#container_phone").addEventListener("animationiteration", randomPosition);
    document.querySelector("#container_applause").addEventListener("animationiteration", randomPosition);
    document.querySelector("#container_angry").addEventListener("animationiteration", randomPosition);
    

    // animated objects

    document.querySelector("#sprite_phone").classList.add("fading_objects");
    document.querySelector("#sprite_applause").classList.add("fading_objects");
    document.querySelector("#sprite_angry").classList.add("fading_objects");
}

// clicking good objects

document.querySelector("#container_phone").addEventListener("click", clickPhone);

function clickPhone() {
    this.firstElementChild.classList = "";
    this.firstElementChild.classList.add("good_click");
    // addPoint(); 
}

// clicking bad objects

document.querySelector("#container_applause").addEventListener("click", clickBadobject);
document.querySelector("#container_angry").addEventListener("click", clickBadobject);

function clickBadobject() {
    this.firstElementChild.classList = "";
    this.firstElementChild.classList.add("bad_click");
    // removeHealth();
}

function addPoint() {
    
}



window.addEventListener("load", start);










// /* variables */

// const sprites = ["#container_phone", "#container_applause", "#container_angry"];
// let objects = Math.floor(Math.random() * sprites.length);
// let random_id = sprites[objects];

// let objects_number = Math.floor(Math.random() * 6 + 1);

// /* sound button */

// document.querySelector("#container_sound").classList.add("sound_on");

// document.querySelector("#container_sound").addEventListener("click", soundOff);


// function soundOff() {
//     console.log("soundOff");
//     document.querySelector("#container_sound").classList.toggle("sound_off");
// }

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
