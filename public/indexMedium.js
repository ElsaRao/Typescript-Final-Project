// Medium Level
// Declaring variables
var cards2 = document.querySelectorAll('.memory-card');
var flippedcard2 = false;
var firstcard2;
var secondcard2;
var totCards2 = 12;
var counter2 = 0;
var CWL2;
var CW2;
var second2;
var downloadTimer2;
var timeleft2 = 40;
var moves2 = 0;
var audioMedium = document.getElementById("myAudio");
function calculateScore2(moves, time) {
    var baseScore = 100;
    var score = baseScore - moves * 10 + time * 5;
    return Math.max(score, 0);
}
// Image data
var imageData2 = [
    { path: "images/aurelia.svg", card: "aurelia" },
    { path: "images/aurelia.svg", card: "aurelia" },
    { path: "images/vue.svg", card: "vue" },
    { path: "images/vue.svg", card: "vue" },
    { path: "images/ember.svg", card: "ember" },
    { path: "images/ember.svg", card: "ember" },
    { path: "images/backbone.svg", card: "backbone" },
    { path: "images/backbone.svg", card: "backbone" },
    { path: "images/angular.svg", card: "angular" },
    { path: "images/angular.svg", card: "angular" },
    { path: "images/react.svg", card: "react" },
    { path: "images/react.svg", card: "react" }
];
// Function to dynamically create image elements with data-card attribute
function createImageElements2(imageData) {
    var memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(function (card, index) {
        var frontFace = card.querySelector('.front-face');
        frontFace.src = imageData2[index].path;
        card.setAttribute('data-card', imageData2[index].card);
    });
}
// Call the function when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    var imageData2 = [
        { path: "images/aurelia.svg", card: "aurelia" },
        { path: "images/aurelia.svg", card: "aurelia" },
        { path: "images/vue.svg", card: "vue" },
        { path: "images/vue.svg", card: "vue" },
        { path: "images/ember.svg", card: "ember" },
        { path: "images/ember.svg", card: "ember" },
        { path: "images/backbone.svg", card: "backbone" },
        { path: "images/backbone.svg", card: "backbone" },
        { path: "images/angular.svg", card: "angular" },
        { path: "images/angular.svg", card: "angular" },
        { path: "images/react.svg", card: "react" },
        { path: "images/react.svg", card: "react" }
    ];
    createImageElements2(imageData2);
});
// Function to flip the cards
function flipcard2() {
    this.classList.toggle('flip');
    if (!flippedcard2) {
        flippedcard2 = true;
        firstcard2 = this;
        return;
    }
    secondcard2 = this;
    flippedcard2 = false;
    moves2++; // Increment the move counter
    // document.getElementById("moves")!.innerHTML = moves.toString();
    matchMedium();
}
// Counter function for Medium Level
downloadTimer2 = setInterval(function () {
    if (timeleft2 <= 0) {
        clearInterval(downloadTimer2);
        var buttonx = document.getElementsByClassName("buttonx")[1];
        buttonx.setAttribute("disabled", "true");
        buttonx.style.cursor = "not-allowed";
        buttonx.style.opacity = "0.6";
        var countdown2 = document.getElementById("countdown2");
        countdown2.innerHTML = "Time Up!";
        second2 = 40 - timeleft2;
        var finalScore = calculateScore2(moves2, second2); // Calculate the final score
        CWL2 = "OOPS :(";
        CW2 = "TIME IS OVER";
        result2(CWL2, CW2, finalScore);
    }
    else {
        var countdown2 = document.getElementById("countdown2");
        countdown2.innerHTML = timeleft2 + " seconds";
    }
    timeleft2 -= 1;
}, 1000);
cards2.forEach(function (card) { return card.addEventListener('click', flipcard2); });
// Function to check the matching of cards
function matchMedium() {
    if ((firstcard2 === null || firstcard2 === void 0 ? void 0 : firstcard2.dataset.card) === (secondcard2 === null || secondcard2 === void 0 ? void 0 : secondcard2.dataset.card)) {
        disableMedium();
        counter2++;
        if (totCards2 / 2 === counter2) {
            clearInterval(downloadTimer2);
            second2 = 40 - timeleft2;
            var finalScore = calculateScore2(moves2, second2); // Calculate the final score
            var level = document.getElementsByClassName("level")[0];
            level.style.cursor = "pointer";
            CWL2 = "CONGRATULATIONS!!!";
            CW2 = "YOU WON THE GAME IN ".concat(second2, " SECONDS. YOUR FINAL SCORE IS : <strong>").concat(finalScore, "</strong>");
            result2(CWL2, CW2, finalScore);
        }
        return;
    }
    unflipMedium();
}
// Function to remove the event listener from the variables
function disableMedium() {
    firstcard2 === null || firstcard2 === void 0 ? void 0 : firstcard2.removeEventListener('click', flipcard2);
    secondcard2 === null || secondcard2 === void 0 ? void 0 : secondcard2.removeEventListener('click', flipcard2);
}
// Function to remove the class from the variables
function unflipMedium() {
    setTimeout(function () {
        firstcard2 === null || firstcard2 === void 0 ? void 0 : firstcard2.classList.remove('flip');
        secondcard2 === null || secondcard2 === void 0 ? void 0 : secondcard2.classList.remove('flip');
    }, 500);
}
// Function to shuffle the cards
function shuffle2() {
    cards2.forEach(function (card) {
        var randomCards = Math.floor(Math.random() * 8);
        card.style.order = randomCards.toString();
    });
}
shuffle2();
function result2(CWL, CW, finalScore) {
    var overlay = document.getElementsByClassName("overlay")[0];
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    var contentWonLost = document.getElementById("contentWonLost");
    contentWonLost.innerHTML = CWL;
    var contectWrite = document.getElementById("contectWrite");
    contectWrite.innerHTML = CW;
}
function playAudiomedium() {
    audioMedium.play();
}
function stopAudiomedium() {
    audioMedium.pause();
}
