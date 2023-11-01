/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nconst imageData = [\n    { path: \"images/aurelia.svg\", card: \"aurelia\" },\n    { path: \"images/aurelia.svg\", card: \"aurelia\" },\n    { path: \"images/vue.svg\", card: \"vue\" },\n    { path: \"images/vue.svg\", card: \"vue\" },\n    { path: \"images/ember.svg\", card: \"ember\" },\n    { path: \"images/ember.svg\", card: \"ember\" },\n    { path: \"images/backbone.svg\", card: \"backbone\" },\n    { path: \"images/backbone.svg\", card: \"backbone\" }\n];\n// Function to dynamically create image elements with data-card attribute\nfunction createImageElements() {\n    const memoryCards = document.querySelectorAll('.memory-card');\n    memoryCards.forEach((card, index) => {\n        const frontFace = card.querySelector('.front-face');\n        frontFace.src = imageData[index].path;\n        card.setAttribute('data-card', imageData[index].card);\n    });\n}\n// Call the function when the page is loaded\ndocument.addEventListener('DOMContentLoaded', () => {\n    createImageElements();\n});\n// declaring variables\nlet cards = document.querySelectorAll('.memory-card');\nlet flippedcard = false;\nlet firstcard;\nlet secondcard;\nlet totCards = 8;\nlet counter = 0;\nlet CWL;\nlet CW;\nlet second;\nlet timeleft = 30;\nlet downloadTimer;\nlet audio = document.getElementById(\"myAudio\");\n// for result\nfunction result(CWL, CW) {\n    let overlay = document.getElementsByClassName(\"overlay\")[0];\n    overlay.style.visibility = \"visible\";\n    overlay.style.opacity = \"1\";\n    let contentWonLost = document.getElementById(\"contentWonLost\");\n    contentWonLost.innerHTML = CWL;\n    let contectWrite = document.getElementById(\"contectWrite\");\n    contectWrite.innerHTML = CW;\n}\n// for flipping the cards\nfunction flipcard() {\n    this.classList.toggle('flip');\n    if (!flippedcard) {\n        flippedcard = true;\n        firstcard = this;\n        return;\n    }\n    secondcard = this;\n    flippedcard = false;\n    match();\n}\n// for the matching of cards\nfunction match() {\n    if ((firstcard === null || firstcard === void 0 ? void 0 : firstcard.dataset.card) === (secondcard === null || secondcard === void 0 ? void 0 : secondcard.dataset.card)) {\n        disable();\n        counter++;\n        if (totCards / 2 === counter) {\n            clearInterval(downloadTimer);\n            second = 30 - timeleft;\n            CWL = \"CONGRATULATIONS!!!\";\n            CW = \"YOU WON THE GAME IN \" + --second + \" SECONDS\";\n            result(CWL, CW);\n        }\n        return;\n    }\n    unflip();\n}\n// removing the event listener from the variables\nfunction disable() {\n    firstcard === null || firstcard === void 0 ? void 0 : firstcard.removeEventListener('click', flipcard);\n    secondcard === null || secondcard === void 0 ? void 0 : secondcard.removeEventListener('click', flipcard);\n}\n// removing the class from the variables\nfunction unflip() {\n    setTimeout(function () {\n        firstcard === null || firstcard === void 0 ? void 0 : firstcard.classList.remove('flip');\n        secondcard === null || secondcard === void 0 ? void 0 : secondcard.classList.remove('flip');\n    }, 1000);\n}\n// for the shuffling of cards\nfunction shuffle() {\n    cards.forEach(card => {\n        let randomCards = Math.floor(Math.random() * 8);\n        card.style.order = randomCards.toString();\n    });\n}\nshuffle();\ncards.forEach(card => card.addEventListener('click', flipcard));\n// counter\ndownloadTimer = setInterval(function () {\n    if (timeleft <= 0) {\n        clearInterval(downloadTimer);\n        let buttonx = document.getElementsByClassName(\"buttonx\")[1];\n        buttonx.setAttribute(\"disabled\", \"true\");\n        buttonx.style.cursor = \"not-allowed\";\n        buttonx.style.opacity = \"0.6\";\n        let countdown = document.getElementById(\"countdown\");\n        countdown.innerHTML = \"Time Up!\";\n        CWL = \"OPSS :(\";\n        CW = \"TIME IS OVER\";\n        result(CWL, CW);\n    }\n    else {\n        let countdown = document.getElementById(\"countdown\");\n        countdown.innerHTML = timeleft + \" seconds\";\n    }\n    timeleft -= 1;\n}, 1000);\nfunction playAudio() {\n    audio.play();\n}\nfunction stopAudio() {\n    audio.pause();\n}\n\n\n//# sourceURL=webpack://typescript-final-project/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;