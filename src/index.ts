const imageData = [
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
        const frontFace = card.querySelector('.front-face') as any;
        frontFace.src = imageData[index].path;
        card.setAttribute('data-card', imageData[index].card);
    });
}

// Call the function when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    createImageElements();
});
