// Medium Level

// Declaring variables
let cards2 = document.querySelectorAll('.memory-card') as NodeListOf<HTMLElement>;
let flippedcard2 = false;
let firstcard2: HTMLElement | null;
let secondcard2: HTMLElement | null;
let totCards2 = 12;
let counter2 = 0;
let CWL2: string | undefined;
let CW2: string | undefined;
let second2: number | undefined;
let downloadTimer2: NodeJS.Timeout;
let timeleft2 = 40;
let moves2 = 0; // Initialize the move counter

function calculateScore2(moves: number, time: number): number {
    const baseScore = 100;
    const score = baseScore - moves * 10 + time * 5;
    return Math.max(score, 0);
}

// Image data
const imageData2: { path: string; card: string }[] = [
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
function createImageElements2(imageData: { path: string; card: string }[]): void {
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach((card, index) => {
        const frontFace = card.querySelector('.front-face') as HTMLImageElement;
        frontFace.src = imageData2[index].path;
        card.setAttribute('data-card', imageData2[index].card);
    });
}

// Call the function when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    const imageData2: { path: string; card: string }[] = [
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
function flipcard2(this: HTMLElement): void {
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
        let buttonx = document.getElementsByClassName("buttonx")[1] as HTMLElement;
        buttonx.setAttribute("disabled", "true");
        buttonx.style.cursor = "not-allowed";
        buttonx.style.opacity = "0.6";
        let countdown2 = document.getElementById("countdown2") as HTMLElement;
        countdown2.innerHTML = "Time Up!";
        second2 = 40 - timeleft2;
        const finalScore = calculateScore2(moves2, second2); // Calculate the final score
        CWL2 = "OPSS :(";
        CW2 = "TIME IS OVER";
        result2(CWL2, CW2, finalScore);
    } else {
        let countdown2 = document.getElementById("countdown2") as HTMLElement;
        countdown2.innerHTML = timeleft2 + " seconds";
    }
    timeleft2 -= 1;
}, 1000);

cards2.forEach(card => card.addEventListener('click', flipcard2));

// Function to check the matching of cards
function matchMedium(): void {
    if (firstcard2?.dataset.card === secondcard2?.dataset.card) {
        disableMedium();
        counter2++;
        if (totCards2 / 2 === counter2) {
            clearInterval(downloadTimer2);
            second2 = 40 - timeleft2;
            const finalScore = calculateScore2(moves2, second2); // Calculate the final score
            CWL2 = "CONGRATULATIONS!!!";
            CW2 = `YOU WON THE GAME IN ${second2} SECONDS. YOUR FINAL SCORE IS : <strong>${finalScore}</strong>`;
            result2(CWL2, CW2, finalScore);
        }
        return;
    }

    unflipMedium();
}

// Function to remove the event listener from the variables
function disableMedium(): void {
    firstcard2?.removeEventListener('click', flipcard2);
    secondcard2?.removeEventListener('click', flipcard2);
}

// Function to remove the class from the variables
function unflipMedium(): void {
    setTimeout(function () {
        firstcard2?.classList.remove('flip');
        secondcard2?.classList.remove('flip');
    }, 1000);
}

// Function to shuffle the cards
function shuffle2(): void {
    cards2.forEach(card => {
        let randomCards = Math.floor(Math.random() * 8);
        card.style.order = randomCards.toString();
    });
}
shuffle2();



function result2(CWL: string, CW: string, finalScore: number): void {
    let overlay = document.getElementsByClassName("overlay")[0] as HTMLElement;
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    let contentWonLost = document.getElementById("contentWonLost") as HTMLElement;
    contentWonLost.innerHTML = CWL;
    let contectWrite = document.getElementById("contectWrite") as HTMLElement;
    contectWrite.innerHTML = CW;
}

// Function to display the total score on the final score screen
function displayTotalScore(): void {
    const totalScore = Number(localStorage.getItem('totalScore')) || 0;
    let totalScoreElement = document.getElementById('totalScore') as HTMLElement;
    totalScoreElement.innerText = `Total Score: ${totalScore}`;
}