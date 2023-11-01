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

document.addEventListener('DOMContentLoaded', function () {
    createImageElements();
});
