var timerCount = 60;
var startQuiz = document.querySelector("#start-btn");
var info = document.querySelector(".info-container");
var displayHighScore = document.querySelector("#high");
var highScores = document.querySelector(".high-score-container");
var questionContainer = document.querySelector(".question-container");
var timing = document.querySelector(".timer");
var ending = document.querySelector(".ending-container");
var choices = document.querySelector("#answer-btn");
var clearHighScore = document.querySelector("#clear");
var goBack = document.querySelector("#go-back");
var timer
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: ["strings", "boolean", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____",
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correctAnswer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console log"],
        correctAnswer: "console log"
    }
];

var questionTracker = 0;
questionContainer.setAttribute("class", "hide");
ending.setAttribute("class", "hide");
highScores.setAttribute("class", "hide");


function startGame() {
    questionTracker = 0;
    info.setAttribute("class", "hide");
    timer = setInterval(startTimer, 1000);
    timing.textContent = timerCount;
    timing.removeAttribute("class");
    questionContainer.removeAttribute("class");
    renderQuestion();
};

function startTimer() {
    timerCount--;
    timing.textContent = timerCount;
    if (timerCount <= 0) {
        renderEnding();
    }
};

startQuiz.addEventListener('click', startGame);