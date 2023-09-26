var startQuiz = document.querySelector("#quizStartPage");
var startButton = document.querySelector("#startQuizButton");
var timerEl = document.querySelector("#timer");
var quizQuestionsPage = document.querySelector("#quizQuestionsPage");
var quizQuestions = document.querySelector(".quizQuestion");
var buttonA = document.querySelector(".buttonA");
var buttonB = document.querySelector(".buttonB");
var buttonC = document.querySelector(".buttonC");
var buttonD = document.querySelector(".buttonD");
var quizAnswerResult = document.querySelector("#quizAnswerResult");
var quizEndPage = document.querySelector("#quizEndPage");
var finalScoreEl = document.querySelector("#finalScore");
var initialsInput = document.querySelector("#initials");
var submitScoreButton = document.querySelector("#submitScoreButton");
var highScorePage = document.querySelector("#highScorePage");
var highScoreList = document.querySelector("#highScoreList");
var playAgainButton = document.querySelector("#playAgainButton");
var clearHighScoreButton = document.querySelector("#clearHighScoreButton");
// these are the questions for the quiz, the answer options, and the correct answer, stored into an array
var questions = [{
    question: "Commonly used data types DO NOT include:",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correct: "C"
    },
    {
    question: "The condition in an if / else statement is enclosed within ____.",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parentheses",
    choiceD: "square brackets",
    correct: "C"

    },
    {
    question: "Arrays in JavaScript can be used to store ____.",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    correct: "D"
    },
    {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parentheses",
    correct: "C"
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "JavaScript",
    choiceB: "terminal/bash",
    choiceC: "for loops",
    choiceD: "console.log",
    correct: "D"
    }]

//Setting the initial value of the timer to 100
var timer;
var timeRemaining = 100;
//setting the initial value of the score to 0
score = 0;

//using a for loop, to tick down the timer by 1 second for each second that passes, calling game over, when the timer reaches 0
function startTimer(){
    timerEl.style.display = "inline-block";
    timerEl.textContent = "Time left: " + timeRemaining;
    timer = setInterval(function(){
    timeRemaining--;
    if (timeRemaining === 0) {
        gameOver();
    }
}, 1000)
}
function pickQuestion(){
    //randomly picks a question from the questions array
    var questionIndex = Math.floor(Math.random() * questions.length);
    var questionPicked = questions[questionIndex];
    //sets the question to the page
    quizQuestions.textContent = questionPicked.question;
    //sets the answers to the page
    buttonA.textContent = questionPicked.choiceA;
    buttonB.textContent = questionPicked.choiceB;
    buttonC.textContent = questionPicked.choiceC;
    buttonD.textContent = questionPicked.choiceD;
    //removes the question from the array, so it can't be picked again
    questions.splice(questionIndex, 1);

    if (questions.length === 0){
        highScorePage();
    }
    //sets the correct answer to the page
    correctAnswer = questionPicked.correct;
}
buttonA.addEventListener("click", function(){
    //if the button clicked is the correct answer, then the user gets a point, and the next question is picked
    if (correctAnswer === "A"){
        score++;
        alert("Correct!");
        pickQuestion();
    }
    //if the button clicked is the wrong answer, then the user loses 10 seconds, and the next question is picked
    else {
        timeRemaining -= 10;
        alert("Wrong!");
        pickQuestion();
    }
})
buttonB.addEventListener("click", function(){
    if (correctAnswer === "B"){
        score++;
        alert("Correct!");
        pickQuestion();
    }
    else {
        timeRemaining -= 10;
        alert("Wrong!");
        pickQuestion();
    }
})
buttonC.addEventListener("click", function(){
    if (correctAnswer === "C"){
        score++;
        alert("Correct!");
        pickQuestion();
    }
    else {
        timeRemaining -= 10;
        alert("Wrong!");
        pickQuestion();
    }
})
buttonD.addEventListener("click", function(){
    if (correctAnswer === "D"){
        score++;
        alert("Correct!");
        pickQuestion();
    }
    else{
        timeRemaining -= 10;
        alert("Wrong!");
        pickQuestion();
    }
})

//creating a function for when the game is over, to clear the timer, and alert the user that the game is over, and to call the replay quiz function
function gameOver(){
    clearInterval(timerEl);
    alert("Game Over");
    replayQuiz();
}
//resets the timer to 100, and calls the start quiz function, bringing us back to the start page
function replayQuiz(){
    window.location.reload();
}

//creating a function to start the quiz, and hide the start page, and show the quiz questions page, as well as starting the timer
startButton.addEventListener("click", function(){
    startQuiz.style.display = "none";
    pickQuestion();
    quizQuestionsPage.style.display = "inline-block";
    startTimer();
});