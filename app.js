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
// these are the questions for the quiz and the answers stored in an array
var questions = [{
    question: "Commonly used data types DO NOT include:",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers"
    },
    {
    question: "The condition in an if / else statement is enclosed within ____.",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parentheses",
    choiceD: "square brackets"
    },
    {
    question: "Arrays in JavaScript can be used to store ____.",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above"
    },
    {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parentheses"},
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "JavaScript",
    choiceB: "terminal/bash",
    choiceC: "for loops",
    choiceD: "console.log"
    }]
//Setting the initial value of the timer to 100
score = 0;
timerEl = 100;
//using a for loop, to tick down the timer by 1 second for each second that passes, calling game over, when the timer reaches 0
function startTimerEl(){
var timerInterval = setInterval(function(){
    for (var i = 0; i < timerEl; i++) {
        if (timerEl > 0){
        timerEl--;
    }
    else {
        gameOver();
    }
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
    //sets the correct answer to the page
    correctAnswer = questionPicked.correct;
}
//creating a function for when the game is over, to clear the timer, and alert the user that the game is over, and to call the replay quiz function
function gameOver(){
    clearInterval(timerEl);
    alert("Game Over");
    replayQuiz();
}
//resets the timer to 100, and calls the start quiz function, bringing us back to the start page
function replayQuiz(){
    timerEl = 100;
    startQuiz();
}

//creating a function to start the quiz, and hide the start page, and show the quiz questions page, as well as starting the timer
startButton.addEventListener("click", function(){
    startQuiz.style.display = "none";
    pickQuestion();
    quizQuestionsPage.style.display = "inline-block";
    startTimerEl();
});
