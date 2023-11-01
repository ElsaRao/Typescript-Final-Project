const imageData: { path: string; card: string }[] = [
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
function createImageElements(): void {
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach((card, index) => {
        const frontFace = card.querySelector('.front-face') as HTMLImageElement;
        frontFace.src = imageData[index].path;
        card.setAttribute('data-card', imageData[index].card);
    });
}

// Call the function when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    createImageElements();
});

// declaring variables
let cards = document.querySelectorAll('.memory-card') as NodeListOf<HTMLElement>;

let flippedcard = false;
let firstcard: HTMLElement | null;
let secondcard: HTMLElement | null;
let totCards = 8;
let counter = 0;
let CWL: string | undefined;
let CW: string | undefined;
let second: number | undefined;
let timeleft = 30;
let downloadTimer: NodeJS.Timeout;
let audio = document.getElementById("myAudio") as HTMLMediaElement;

// for result
function result(CWL: string, CW: string): void {
    let overlay = document.getElementsByClassName("overlay")[0] as HTMLElement;
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    let contentWonLost = document.getElementById("contentWonLost") as HTMLElement;
    contentWonLost.innerHTML = CWL;
    let contectWrite = document.getElementById("contectWrite") as HTMLElement;
    contectWrite.innerHTML = CW;
}

// for flipping the cards
function flipcard(this: HTMLElement): void {
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
function match(): void {
    if (firstcard?.dataset.card === secondcard?.dataset.card) {
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
function disable(): void {
    firstcard?.removeEventListener('click', flipcard);
    secondcard?.removeEventListener('click', flipcard);
}

// removing the class from the variables
function unflip(): void {
    setTimeout(function () {
        firstcard?.classList.remove('flip');
        secondcard?.classList.remove('flip');
    }, 1000);
}

// for the shuffling of cards
function shuffle(): void {
    cards.forEach(card => {
        let randomCards = Math.floor(Math.random() * 8);
        card.style.order = randomCards.toString();
    });
}
shuffle();

cards.forEach(card => card.addEventListener('click', flipcard));

// counter
downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        let buttonx = document.getElementsByClassName("buttonx")[1] as HTMLElement;
        buttonx.setAttribute("disabled", "true");
        buttonx.style.cursor = "not-allowed";
        buttonx.style.opacity = "0.6";
        let countdown = document.getElementById("countdown") as HTMLElement;
        countdown.innerHTML = "Time Up!";
        CWL = "OPSS :(";
        CW = "TIME IS OVER";
        result(CWL, CW);
    } else {
        let countdown = document.getElementById("countdown") as HTMLElement;
        countdown.innerHTML = timeleft + " seconds";
    }
    timeleft -= 1;
}, 1000);

function playAudio(): void {
    audio.play();
}
function stopAudio(): void {
    audio.pause();
}
