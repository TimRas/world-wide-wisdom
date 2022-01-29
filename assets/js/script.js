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
var myGamerNameElement = document.getElementById("gamer-name");

//Gets counter div
var questionCounter = document.getElementById("questions-counter");

// Gets main question div
var myMainQuestion = document.getElementById("main-question");

//Gets highscore body
var myHighscoreBody = document.getElementById("highscore-body");

// Gets answer buttons
var firstAnswer = document.getElementById("first-answer");
var secondAnswer = document.getElementById("second-answer");
var thirdAnswer = document.getElementById("third-answer");

//Tracks already shown questions

var shownQuestions = [];

// Tracks current question
var currentQuestion;

// Nieuwe Let aanmaken
let nameFieldValue = "";

var questionLibrary;

//Tracks total amount of questions

var totalQuestionTracker = 1;

//Tracks score

var totalScoreTracker = 0;

if (myHighscoreBody != undefined) {
    myHighscoreBody.addEventListener('load',(event) => {
        loadHighscores();
    } )
}

// Enters name value in gamer-name div when pressed start
confirmNameButton.onclick = function () {
    localStorage.setItem("gamername", nameField.value);
}
// Puts value of confirm-button-div is gamer-name div
function setGamerName() {
    myGamerNameElement.innerHTML = localStorage.getItem("gamername");
}

function getNewQuestion() {
    if (totalQuestionTracker === 11) {
        localStorage.setItem("score", totalScoreTracker);
        window.location = "highscore.html"
    } else {
        var randomQuestionIndex = randomIntBetween(0, questionLibrary.length - 1);
        while (shownQuestions.includes(randomQuestionIndex)) { 
            randomQuestionIndex =  randomIntBetween(0, questionLibrary.length - 1);
        } 
        shownQuestions.push(randomQuestionIndex);
        currentQuestion = randomQuestionIndex;
        var questionObject = questionLibrary[randomQuestionIndex];
        myMainQuestion.innerHTML = questionObject.question;
        firstAnswer.innerHTML = questionObject.answers.a;
        secondAnswer.innerHTML = questionObject.answers.b;
        thirdAnswer.innerHTML = questionObject.answers.c;
        questionCounter.innerHTML = totalQuestionTracker++;
        activateButtons();
    }
}

function parseQuestionBank() {
    fetch("assets/content/questionbank.JSON").then(storageFile => {
        storageFile.json().then(questionArray => {
            questionLibrary = questionArray;
            getNewQuestion();
        });


    });

}

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function activateButtons() {
    firstAnswer.onclick = function () {
        var question = questionLibrary[currentQuestion];
        if ("a" === question.correctChoice) {
            totalScoreTracker++;
            alert("That's the right answer!");
        } else {
            alert(`That's the wrong answer, the answer is ${question.correctAnswer}`);
        }
        getNewQuestion();
    };
    secondAnswer.onclick = function () {
        var question = questionLibrary[currentQuestion];
        if ("b" === question.correctChoice) {
            totalScoreTracker++;
            alert("That's the right answer!");
        } else {
            alert(`That's the wrong answer, the answer is ${question.correctAnswer}`);
        }
        getNewQuestion();
    };
    thirdAnswer.onclick = function () {
        var question = questionLibrary[currentQuestion];
        if ("c" === question.correctChoice) {
            totalScoreTracker++;
            alert("That's the right answer!");
        } else {
            alert(`That's the wrong answer, the answer is ${question.correctAnswer}`);
        }
        getNewQuestion();
    };
}

function loadHighscores() {
    console.log("hallo ah mattie");
    var gamerName = localStorage.getItem("gamername");
    var highScores = JSON.parse(localStorage.getItem("highscores"));
    var gamerScore = localStorage.getItem("score");
    console.log(highScores);
    var highScoreEntry = {
        "name": gamerName,
        "score": gamerScore
    };
    if (highScores === undefined || highScores === null) {
        highScores = [highScoreEntry];
        console.log(highScores);
    } else {
        if (highScores.length < 10) {
            highScores.push(highScoreEntry);
            console.log(highScores);
        } else {
            // als score hoger is dan de score van nummer 10 voeg toe
            if (gamerScore > highScores[9].score) {
                highScores.pop();
                console.log(highScores);
                highScores.push(highScoreEntry);
            }
        }
    };
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });
    localStorage.setItem("highscores", JSON.stringify(highScores));
    console.log(highScores);
    for (let step = 0; step < highScores.length; step++) {
        var nameLabel = document.getElementById("name-wrap"+(step+1));
        var scoreWrap = document.getElementById("score-wrap"+(step+1));
        nameLabel.innerHTML = highScores[step].name;
        scoreWrap.innerHTML = highScores[step].score;
      }
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