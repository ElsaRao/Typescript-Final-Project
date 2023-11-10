// Medium Level

// Declaring variables
let cards3 = document.querySelectorAll('.memory-card') as NodeListOf<HTMLElement>;
let flippedcard3 = false;
let firstcard3: HTMLElement | null;
let secondcard3: HTMLElement | null;
let totcards3 = 16;
let counter3 = 0;
let CWL3: string | undefined;
let CW3: string | undefined;
let second3: number | undefined;
let downloadTimer3: NodeJS.Timeout;
let timeleft3 = 60;
let moves3 = 0;
var audioHard = document.getElementById("myAudio") as  HTMLMediaElement;

function calculateScore3(moves: number, time: number): number {
    const baseScore = 100;
    const score = baseScore - moves * 10 + time * 5;
    return Math.max(score, 0);
}

// Image data
const imageData3: { path: string; card: string }[] = [
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
function createImageElements3(imageData: { path: string; card: string }[]): void {
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach((card, index) => {
        const frontFace = card.querySelector('.front-face') as HTMLImageElement;
        frontFace.src = imageData3[index].path;
        card.setAttribute('data-card', imageData3[index].card);
    });
}

// Call the function when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    const imageData3: { path: string; card: string }[] = [
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
function flipcard3(this: HTMLElement): void {
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
        let buttonx = document.getElementsByClassName("buttonx")[1] as HTMLElement;
        buttonx.setAttribute("disabled", "true");
        buttonx.style.cursor = "not-allowed";
        buttonx.style.opacity = "0.6";
        let countdown2 = document.getElementById("countdown3") as HTMLElement;
        countdown2.innerHTML = "Time Up!";
        second3 = 60 - timeleft3;
        const finalScore = calculateScore3(moves3, second3); // Calculate the final score
        CWL3 = "OPSS :(";
        CW3 = "TIME IS OVER";
        result3(CWL3, CW3, finalScore);
    } else {
        let countdown2 = document.getElementById("countdown3") as HTMLElement;
        countdown2.innerHTML = timeleft3 + " seconds";
    }
    timeleft3 -= 1;
}, 1000);

cards3.forEach(card => card.addEventListener('click', flipcard3));

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
function matchHard(): void {
    if (firstcard3?.dataset.card === secondcard3?.dataset.card) {
        disableHard();
        counter3++;
        if (totcards3 / 2 === counter3) {
            clearInterval(downloadTimer3);
            second3 = 60 - timeleft3;
            const finalScore = calculateScore3(moves3, second3); // Calculate the final score
            CWL3 = "CONGRATULATIONS!!!";
            CW3 = `YOU WON THE GAME IN ${second3} SECONDS. YOUR FINAL SCORE IS : <strong>${finalScore}</strong>`;
            result3(CWL3, CW3, finalScore);
        }
        return;
    }

    unflipHard();
}

// Function to remove the event listener from the variables
function disableHard(): void {
    firstcard3?.removeEventListener('click', flipcard3);
    secondcard3?.removeEventListener('click', flipcard3);
}

// Function to remove the class from the variables
function unflipHard(): void {
    setTimeout(function () {
        firstcard3?.classList.remove('flip');
        secondcard3?.classList.remove('flip');
    }, 1000);
}

// Function to shuffle the cards
function shuffle3(): void {
    cards3.forEach(card => {
        let randomCards = Math.floor(Math.random() * 8);
        card.style.order = randomCards.toString();
    });
}
shuffle3();



function result3(CWL: string, CW: string, finalScore: number): void {
    let overlay = document.getElementsByClassName("overlay")[0] as HTMLElement;
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    let contentWonLost = document.getElementById("contentWonLost") as HTMLElement;
    contentWonLost.innerHTML = CWL;
    let contectWrite = document.getElementById("contectWrite") as HTMLElement;
    contectWrite.innerHTML = CW;
}

function playAudio(): void {
    audioHard.play();
}

function stopAudio(): void {
    audioHard.pause();
}