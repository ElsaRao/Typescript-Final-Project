// Medium Level
// Declaring variables
var cards3 = document.querySelectorAll('.memory-card');
var flippedcard3 = false;
var firstcard3;
var secondcard3;
var totcards3 = 16;
var counter3 = 0;
var CWL3;
var CW3;
var second3;
var downloadTimer3;
var timeleft3 = 60;
var moves3 = 0; // Initialize the move counter
function calculateScore3(moves, time) {
    var baseScore = 100;
    var score = baseScore - moves * 10 + time * 5;
    return Math.max(score, 0);
}
// Image data
var imageData3 = [
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
    { path: "images/react.svg", card: "react" },
    { path: "images/chick.svg", card: "chick" },
    { path: "images/chick.svg", card: "chick" },
    { path: "images/ball.svg", card: "ball" },
    { path: "images/ball.svg", card: "ball" },
    { path: "images/flower.svg", card: "flower" },
    { path: "images/flower.svg", card: "flower" },
];
// Function to dynamically create image elements with data-card attribute
function createImageElements3(imageData) {
    var memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(function (card, index) {
        var frontFace = card.querySelector('.front-face');
        frontFace.src = imageData3[index].path;
        card.setAttribute('data-card', imageData3[index].card);
    });
}
// Call the function when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    var imageData3 = [
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
    createImageElements3(imageData3);
});
// Function to flip the cards
function flipcard3() {
    this.classList.toggle('flip');
    if (!flippedcard3) {
        flippedcard3 = true;
        firstcard3 = this;
        return;
    }
    secondcard3 = this;
    flippedcard3 = false;
    moves3++; // Increment the move counter
    // document.getElementById("moves")!.innerHTML = moves.toString();
    matchHard();
}
// Counter function for Medium Level
downloadTimer3 = setInterval(function () {
    if (timeleft3 <= 0) {
        clearInterval(downloadTimer3);
        var buttonx = document.getElementsByClassName("buttonx")[1];
        buttonx.setAttribute("disabled", "true");
        buttonx.style.cursor = "not-allowed";
        buttonx.style.opacity = "0.6";
        var countdown2 = document.getElementById("countdown3");
        countdown2.innerHTML = "Time Up!";
        second3 = 60 - timeleft3;
        var finalScore = calculateScore3(moves3, second3); // Calculate the final score
        CWL3 = "OPSS :(";
        CW3 = "TIME IS OVER";
        result3(CWL3, CW3, finalScore);
    }
    else {
        var countdown2 = document.getElementById("countdown3");
        countdown2.innerHTML = timeleft3 + " seconds";
    }
    timeleft3 -= 1;
}, 1000);
cards3.forEach(function (card) { return card.addEventListener('click', flipcard3); });
// Function to check the matching of cards
// function matchHard(): void {
//     if (firstcard3?.dataset.card === secondcard3?.dataset.card) {
//         disableHard();
//         counter3++;
//         if (totcards3 / 2 === counter3) {
//             clearInterval(downloadTimer3);
//             second3 = 60 - timeleft3;
//             const finalScore = calculateScore3(moves3, second3); // Calculate the final score
//             CWL3 = "CONGRATULATIONS!!!";
//             CW3 = `YOU WON THE GAME IN ${second3} SECONDS. YOUR FINAL SCORE IS : <strong>${finalScore}</strong>`;
//             result3(CWL3, CW3, finalScore);
//         }
//         return;
//     }
//     unflipHard();
// }
// Function to check the matching of cards
function matchHard() {
    if ((firstcard3 === null || firstcard3 === void 0 ? void 0 : firstcard3.dataset.card) === (secondcard3 === null || secondcard3 === void 0 ? void 0 : secondcard3.dataset.card)) {
        disableHard();
        counter3++;
        if (totcards3 / 2 === counter3) {
            clearInterval(downloadTimer3);
            second3 = 60 - timeleft3;
            var finalScore = calculateScore3(moves3, second3); // Calculate the final score
            CWL3 = "CONGRATULATIONS!!!";
            CW3 = "YOU WON THE GAME IN ".concat(second3, " SECONDS. YOUR FINAL SCORE IS : <strong>").concat(finalScore, "</strong>");
            result3(CWL3, CW3, finalScore);
        }
        return;
    }
    unflipHard();
}
// Function to remove the event listener from the variables
function disableHard() {
    firstcard3 === null || firstcard3 === void 0 ? void 0 : firstcard3.removeEventListener('click', flipcard3);
    secondcard3 === null || secondcard3 === void 0 ? void 0 : secondcard3.removeEventListener('click', flipcard3);
}
// Function to remove the class from the variables
function unflipHard() {
    setTimeout(function () {
        firstcard3 === null || firstcard3 === void 0 ? void 0 : firstcard3.classList.remove('flip');
        secondcard3 === null || secondcard3 === void 0 ? void 0 : secondcard3.classList.remove('flip');
    }, 1000);
}
// Function to shuffle the cards
function shuffle3() {
    cards3.forEach(function (card) {
        var randomCards = Math.floor(Math.random() * 8);
        card.style.order = randomCards.toString();
    });
}
shuffle3();
function result3(CWL, CW, finalScore) {
    var overlay = document.getElementsByClassName("overlay")[0];
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    var contentWonLost = document.getElementById("contentWonLost");
    contentWonLost.innerHTML = CWL;
    var contectWrite = document.getElementById("contectWrite");
    contectWrite.innerHTML = CW;
}
// Function to display the total score on the final score screen
function displayTotalScore2() {
    var totalScore = Number(localStorage.getItem('totalScore')) || 0;
    var totalScoreElement = document.getElementById('totalScore');
    totalScoreElement.innerText = "Total Score: ".concat(totalScore);
}
