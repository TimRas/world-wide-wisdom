// Get the modal
var myModalInstruction = document.getElementById("myModalInstruction");
var myModalEnterName = document.getElementById("myModalEnterName");

// Get the button that opens the modal
var startButton = document.getElementById("button-div");
var nextButton = document.getElementById("next-div");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the namefield that opens the modal
var nameField = document.getElementById("namefield-div hier ofz");

// Nieuwe Let aanmaken
let nameFieldValue = '';

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
span.onclick = function () {
    myModalInstruction.style.display = "none";
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