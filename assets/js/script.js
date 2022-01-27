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

// Gets main question div
var myMainQuestion = document.getElementById("main-question");

// Gets answer buttons
var firstAnswer = document.getElementById("first-answer");
var secondAnswer = document.getElementById("second-answer");
var thirdAnswer = document.getElementById("third-answer");

// Nieuwe Let aanmaken
let nameFieldValue = "";

var questionLibrary;



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
   console.log(questionLibrary.length);
   var questionObject = questionLibrary[randomQuestionIndex];
   console.log(questionObject);
   myMainQuestion.innerHTML = questionObject.question;
   firstAnswer.innerHTML = questionObject.answers.a;
   secondAnswer.innerHTML = questionObject.answers.b;
   thirdAnswer.innerHTML = questionObject.answers.c;
}

function parseQuestionBank() {
    fetch("assets/content/questionbank.JSON").then( storageFile =>
        {
            storageFile.json().then( questionArray => {
                questionLibrary = questionArray;
                getNewQuestion();   
            });
            

        }
    );
    
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

