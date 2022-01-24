// Get the modal
var myModalInstruction = document.getElementById("myModalInstruction");
var myModalEnterName = document.getElementById("myModalEnterName");

// Get the button that opens the modal
var startButton = document.getElementById("button-div");
var nextButton = document.getElementById("next-div");
var confirmNameButton = document.getElementById("confirm-button-div");

// Get the <span> element that closes the modal
var spanInstruction = document.getElementById("closeInstruction");
var spanEnterName = document.getElementById("close-enter-name");

// Get the namefield that opens the modal
var nameField = document.getElementById("namefieldid");

// Gets gamer-name div
var myGamerName = document.getElementById("gamer-name");

var myGameBody = document.getElementById("game-body");

// Nieuwe Let aanmaken
let nameFieldValue = "";

const questionBank = '[{ "question": "Who was the person to travel to space?","answers": { "a": "Yuri Alekseyevich Gagarin", "b": "Neil Armstrong","c": "William E. Thornton"},"correctAnswer": "Yuri Alekseyevich Gagarin"},{"question": "What was the first animal to travel to space?","answers": { "a": "Mika the monkey","b": "Olaf the chimp","c": "Laika the dog"},"correctAnswer": "Laika the dog"}]';

// Parse library to array
const questionLibrary = JSON.parse(questionBank);

// Enters name value in gamer-name div when pressed start
confirmNameButton.onclick = function () {
    localStorage.setItem("gamername", nameField.value);
}
// Puts value of confirm-button-div is gamer-name div
function setGamerName() {
    myGamerName.innerHTML = localStorage.getItem("gamername");
    console.log(localStorage.getItem("gamername"));
}

function getNewQuestion() {
   var randomQuestionIndex = randomIntBetween(0,questionLibrary.length - 1);
   var question = questionLibrary[randomQuestionIndex];
}

function randomIntBetween(min,max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}
// When the user clicks on the button, open the modal
startButton.onclick = function () {
    if (nameFieldValue != '') {
        //start de game.. 
    } else {
        myModalInstruction.style.display = "block";
    }
}
nextButton.onclick = function () {
    myModalInstruction.style.display = "none";
    myModalEnterName.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanInstruction.onclick = function () {
    myModalInstruction.style.display = "none";
}

spanEnterName.onclick = function () {
    myModalEnterName.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        myModalInstruction.style.display = "none";
    }
}

//when the namefield is getting entered by the user onkeydown

nameField.onkeydown = function () {
    //sla hier de value van nameField op in de Let die je hebt aangemaakt nameFieldValue 
}



//question bank for the quiz

// const questionBank = '[{ "question": "Who was the person to travel to space?","answers": { "a": "Yuri Alekseyevich Gagarin", "b": "Neil Armstrong","c": "William E. Thornton"},"correctAnswer": "Yuri Alekseyevich Gagarin"},{"question": "What was the first animal to travel to space?","answers": { "a": "Mika the monkey","b": "Olaf the chimp","c": "Laika the dog"},"correctAnswer": "Laika the dog"}]';

//     question: "What is the biggest planet in our solar system?",
//     answers: {
//         a: "Saturn",
//         b: "Uranus",
//         c: "Jupiter"
//     },
//     correctAnswer: "Jupiter"
// }, {
//     question: "How long does the earth takes to complete its rotation around the sun?",
//     answers: {
//         a: "24 hours",
//         b: "365 days",
//         c: "15 months"
//     },
//     correctAnswer: "365 days"
// }, {
//     question: "How many people have been to the moon?",
//     answers: {
//         a: "12 people",
//         b: "24 people",
//         c: "7 people"
//     },
//     correctAnswer: "12 people"
// }, {
//     question: "What is the smallest planet in our solar system?",
//     answers: {
//         a: "Mars",
//         b: "Earth",
//         c: "Mercury"
//     },
//     correctAnswer: "Mercury"
// }, {
//     question: "How many miles do you need to go upwards to reach space?",
//     answers: {
//         a: "34 miles",
//         b: "62 miles",
//         c: "103 miles"
//     },
//     correctAnswer: "62 miles"
// }, {
//     question: "Which country was to first to reach space?",
//     answers: {
//         a: "Soviet Union",
//         b: "United States",
//         c: "China"
//     },
//     correctAnswer: "Soviet Union"
// }, {
//     question: "which of these planets is a gas planet?",
//     answers: {
//         a: "Mars",
//         b: "Saturn",
//         c: "Venus"
//     },
//     correctAnswer: "Saturn"
// }, {
//     question: "How many moons does Jupiter have?",
//     answers: {
//         a: "79 moons",
//         b: "4 moons",
//         c: "12 moons"
//     },
//     correctAnswer: "79 moons"
// }, {
//     question: "Which planet orbits the Sun the fastest?",
//     answers: {
//         a: "Mars",
//         b: "Earth",
//         c: "Mercury"
//     },
//     correctAnswer: "Mercury"
// }, {
//     question: "Which planet has the least amount of moons orbiting it?",
//     answers: {
//         a: "Earth",
//         b: "Venus",
//         c: "Jupiter"
//     },
//     correctAnswer: "venus"
// }, {
//     question: "Which planet is closest to the Sun?",
//     answers: {
//         a: "Venus",
//         b: "Mars",
//         c: "Mercury"
//     },
//     correctAnswer: "Mercury"
// }, {
//     question: "What's the oldest planet in our solar system?",
//     answers: {
//         a: "Mercury",
//         b: "Jupiter",
//         c: "Earth"
//     },
//     correctAnswer: "Jupiter"
// }, {
//     question: "How many miles are there between the Earth and the Sun?",
//     answers: {
//         a: "93 million miles",
//         b: "48 million miles",
//         c: "142 million miles"
//     },
//     correctAnswer: "93 million miles"
// }, {
//     question: "How many females have been to space?",
//     answers: {
//         a: "32 women",
//         b: "65 women",
//         c: "12 women"
//     },
//     correctAnswer: "65 women"
// }, {

// }



// ]
// ';