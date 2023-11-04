// Declaring variables
var cards = document.querySelectorAll('.memory-card');
var flippedcard = false;
var firstcard;
var secondcard;
var totCards = 8;
var counter = 0;
var CWL;
var CW;
var second;
var timeleft = 30;
var downloadTimer;
var audio = document.getElementById("myAudio");
var moves = 0; // Initialize the move counter
// Image data
var imageData = [
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
function createImageElements() {
    var memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(function (card, index) {
        var frontFace = card.querySelector('.front-face');
        frontFace.src = imageData[index].path;
        card.setAttribute('data-card', imageData[index].card);
    });
}
// Call the function when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    createImageElements();
});
// Function to calculate the final score based on moves and time
function calculateScore(moves, time) {
    var baseScore = 100;
    var score = baseScore - moves * 10 + time * 5;
    return Math.max(score, 0);
}
// Function to display the result
function result(CWL, CW, finalScore) {
    var overlay = document.getElementsByClassName("overlay")[0];
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    var contentWonLost = document.getElementById("contentWonLost");
    contentWonLost.innerHTML = CWL;
    var contectWrite = document.getElementById("contectWrite");
    contectWrite.innerHTML = CW;
}
// Function to flip the cards
function flipcard() {
    this.classList.toggle('flip');
    if (!flippedcard) {
        flippedcard = true;
        firstcard = this;
        return;
    }
    secondcard = this;
    flippedcard = false;
    moves++; // Increment the move counter
    // document.getElementById("moves")!.innerHTML = moves.toString();
    match();
}
// Function to check the matching of cards
function match() {
    if ((firstcard === null || firstcard === void 0 ? void 0 : firstcard.dataset.card) === (secondcard === null || secondcard === void 0 ? void 0 : secondcard.dataset.card)) {
        disable();
        counter++;
        if (totCards / 2 === counter) {
            clearInterval(downloadTimer);
            second = 30 - timeleft;
            var finalScore = calculateScore(moves, second); // Calculate the final score
            CWL = "CONGRATULATIONS!!!";
            CW = "YOU WON THE GAME IN ".concat(second, " SECONDS. YOUR FINAL SCORE IS : <strong>").concat(finalScore, "</strong>");
            result(CWL, CW, finalScore);
        }
        return;
    }
    unflip();
}
// Function to remove the event listener from the variables
function disable() {
    firstcard === null || firstcard === void 0 ? void 0 : firstcard.removeEventListener('click', flipcard);
    secondcard === null || secondcard === void 0 ? void 0 : secondcard.removeEventListener('click', flipcard);
}
// Function to remove the class from the variables
function unflip() {
    setTimeout(function () {
        firstcard === null || firstcard === void 0 ? void 0 : firstcard.classList.remove('flip');
        secondcard === null || secondcard === void 0 ? void 0 : secondcard.classList.remove('flip');
    }, 1000);
}
// Function to shuffle the cards
function shuffle() {
    cards.forEach(function (card) {
        var randomCards = Math.floor(Math.random() * 8);
        card.style.order = randomCards.toString();
    });
}
shuffle();
cards.forEach(function (card) { return card.addEventListener('click', flipcard); });
// Counter
downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        var buttonx = document.getElementsByClassName("buttonx")[1];
        buttonx.setAttribute("disabled", "true");
        buttonx.style.cursor = "not-allowed";
        buttonx.style.opacity = "0.6";
        var countdown = document.getElementById("countdown");
        countdown.innerHTML = "Time Up!";
        second = 30 - timeleft;
        var finalScore = calculateScore(moves, second); // Calculate the final score
        CWL = "OPSS :(";
        CW = "TIME IS OVER";
        result(CWL, CW, finalScore);
    }
    else {
        var countdown = document.getElementById("countdown");
        countdown.innerHTML = timeleft + " seconds";
    }
    timeleft -= 1;
}, 1000);
function playAudio() {
    audio.play();
}
function stopAudio() {
    audio.pause();
}
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
var moves2 = 0; // Initialize the move counter
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
// Function to check the matching of cards
function matchMedium() {
    if ((firstcard2 === null || firstcard2 === void 0 ? void 0 : firstcard2.dataset.card) === (secondcard2 === null || secondcard2 === void 0 ? void 0 : secondcard2.dataset.card)) {
        disable();
        counter2++;
        if (totCards2 / 2 === counter) {
            clearInterval(downloadTimer);
            second2 = 40 - timeleft2;
            var finalScore = calculateScore(moves, second2); // Calculate the final score
            CWL2 = "CONGRATULATIONS!!!";
            CW2 = "YOU WON THE GAME IN ".concat(second, " SECONDS. YOUR FINAL SCORE IS : <strong>").concat(finalScore, "</strong>");
            result(CWL2, CW2, finalScore);
        }
        return;
    }
    unflip();
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
        var finalScore = calculateScore(moves2, second2); // Calculate the final score
        CWL2 = "OPSS :(";
        CW2 = "TIME IS OVER";
        result(CWL2, CW2, finalScore);
    }
    else {
        var countdown2 = document.getElementById("countdown2");
        countdown2.innerHTML = timeleft2 + " seconds";
    }
    timeleft2 -= 1;
}, 1000);
cards2.forEach(function (card) { return card.addEventListener('click', flipcard2); });
