var imageData = [
    { path: "images/aurelia.svg", card: "aurelia" },
    { path: "images/aurelia.svg", card: "aurelia" },
    { path: "images/vue.svg", card: "vue" },
    { path: "images/vue.svg", card: "vue" },
    { path: "images/ember.svg", card: "ember" },
    { path: "images/ember.svg", card: "ember" },
    { path: "images/backbone.svg", card: "backbone" },
    { path: "images/backbone.svg", card: "backbone" }
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
// declaring variables
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
// for result
function result(CWL, CW) {
    var overlay = document.getElementsByClassName("overlay")[0];
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    var contentWonLost = document.getElementById("contentWonLost");
    contentWonLost.innerHTML = CWL;
    var contectWrite = document.getElementById("contectWrite");
    contectWrite.innerHTML = CW;
}
// for flipping the cards
function flipcard() {
    this.classList.toggle('flip');
    if (!flippedcard) {
        flippedcard = true;
        firstcard = this;
        return;
    }
    secondcard = this;
    flippedcard = false;
    match();
}
// for the matching of cards
function match() {
    if ((firstcard === null || firstcard === void 0 ? void 0 : firstcard.dataset.card) === (secondcard === null || secondcard === void 0 ? void 0 : secondcard.dataset.card)) {
        disable();
        counter++;
        if (totCards / 2 === counter) {
            clearInterval(downloadTimer);
            second = 30 - timeleft;
            CWL = "CONGRATULATIONS!!!";
            CW = "YOU WON THE GAME IN " + --second + " SECONDS";
            result(CWL, CW);
        }
        return;
    }
    unflip();
}
// removing the event listener from the variables
function disable() {
    firstcard === null || firstcard === void 0 ? void 0 : firstcard.removeEventListener('click', flipcard);
    secondcard === null || secondcard === void 0 ? void 0 : secondcard.removeEventListener('click', flipcard);
}
// removing the class from the variables
function unflip() {
    setTimeout(function () {
        firstcard === null || firstcard === void 0 ? void 0 : firstcard.classList.remove('flip');
        secondcard === null || secondcard === void 0 ? void 0 : secondcard.classList.remove('flip');
    }, 1000);
}
// for the shuffling of cards
function shuffle() {
    cards.forEach(function (card) {
        var randomCards = Math.floor(Math.random() * 8);
        card.style.order = randomCards.toString();
    });
}
shuffle();
cards.forEach(function (card) { return card.addEventListener('click', flipcard); });
// counter
downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        var buttonx = document.getElementsByClassName("buttonx")[1];
        buttonx.setAttribute("disabled", "true");
        buttonx.style.cursor = "not-allowed";
        buttonx.style.opacity = "0.6";
        var countdown = document.getElementById("countdown");
        countdown.innerHTML = "Time Up!";
        CWL = "OPSS :(";
        CW = "TIME IS OVER";
        result(CWL, CW);
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
