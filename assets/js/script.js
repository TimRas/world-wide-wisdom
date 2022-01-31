//Gets the modal
var modalInstructions = document.getElementById("modal-instructions");
var modalEnterName = document.getElementById("modal-enter-name");

//Gets the button that opens the modal
var startButton = document.getElementById("button-div");
var nextButton = document.getElementById("next-div");
var confirmNameButton = document.getElementById("begin-button-div");

//Gets the <span> element that closes the modal
var spanInstruction = document.getElementById("close-instruction");
var spanEnterName = document.getElementById("close-enter-name");

//Gets the namefield that opens the modal
var nameField = document.getElementById("name-field-id");

//Gets gamer-name div
var gamerNameElement = document.getElementById("gamer-name");

//Gets counter div
var questionCounter = document.getElementById("questions-counter");

//Gets main question div
var mainQuestion = document.getElementById("main-question");

//Gets highscore body
var highScoreBody = document.getElementById("highscore-body");

//Gets answer buttons
var firstAnswer = document.getElementById("first-answer");
var secondAnswer = document.getElementById("second-answer");
var thirdAnswer = document.getElementById("third-answer");

//Tracks already shown questions
var shownQuestions = [];

//Tracks current question
var currentQuestion;

var nameFieldValue = "";

//Array of questions
var questionLibrary;

//Tracks total amount of questions
var totalQuestionTracker = 1;

//Tracks score
var totalScoreTracker = 0;


if (highScoreBody != undefined) {
    highScoreBody.addEventListener('load',(event) => {
        loadHighscores();
    } );
}

// Enters name value in gamer-name div when pressed start
confirmNameButton.onclick = function () {
    localStorage.setItem("gamername", nameField.value);
};
// Puts value of begin-button-div is gamer-name div
function setGamerName() {
    gamerNameElement.innerHTML = localStorage.getItem("gamername");
}

//Gets new question
function getNewQuestion() {
    if (totalQuestionTracker === 11) {
        localStorage.setItem("score", totalScoreTracker);
        window.location = "highscore.html";
    } else {
        var randomQuestionIndex = randomIntBetween(0, questionLibrary.length - 1);
        while (shownQuestions.includes(randomQuestionIndex)) { 
            randomQuestionIndex =  randomIntBetween(0, questionLibrary.length - 1);
        } 
        shownQuestions.push(randomQuestionIndex);
        currentQuestion = randomQuestionIndex;
        var questionObject = questionLibrary[randomQuestionIndex];
        mainQuestion.innerHTML = questionObject.question;
        firstAnswer.innerHTML = questionObject.answers.a;
        secondAnswer.innerHTML = questionObject.answers.b;
        thirdAnswer.innerHTML = questionObject.answers.c;
        questionCounter.innerHTML = totalQuestionTracker++;
        activateButtons();
    }
}

//Parses questionbank into a array
function parseQuestionBank() {
    fetch("assets/content/questionbank.JSON").then(storageFile => {
        storageFile.json().then(questionArray => {
            questionLibrary = questionArray;
            getNewQuestion();
        });


    });

}

//Creates random number for a to choose a question
function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Checks for right answer and starts next question
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

//Checks, loads and saves highscores
function loadHighscores() {
    var gamerName = localStorage.getItem("gamername");
    var highScores = JSON.parse(localStorage.getItem("highscores"));
    var gamerScore = localStorage.getItem("score");
    var highScoreEntry = {
        "name": gamerName,
        "score": gamerScore
    };
    if (highScores === undefined || highScores === null) {
        highScores = [highScoreEntry];
    } else {
        if (highScores.length < 10) {
            highScores.push(highScoreEntry);
        } else {
            if (gamerScore > highScores[9].score) {
                highScores.pop();
                highScores.push(highScoreEntry);
            }
        }
    }
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });
    localStorage.setItem("highscores", JSON.stringify(highScores));
    for (let step = 0; step < highScores.length; step++) {
        var nameLabel = document.getElementById("name-wrap"+(step+1));
        var scoreWrap = document.getElementById("score-wrap"+(step+1));
        nameLabel.innerHTML = highScores[step].name;
        scoreWrap.innerHTML = highScores[step].score;
      }
}

// When the user clicks on the button it opens the modal
startButton.onclick = function () {
    if (nameFieldValue != '') {
    } else {
        modalInstructions.style.display = "block";
    }
};

nextButton.onclick = function () {
    modalInstructions.style.display = "none";
    modalEnterName.style.display = "block";
};

// When the user clicks on <span> (x) it closes the modal
spanInstruction.onclick = function () {
    modalInstructions.style.display = "none";
};

spanEnterName.onclick = function () {
    modalEnterName.style.display = "none";
};
