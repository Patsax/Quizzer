var timerCount = 60;
var startQuiz = document.querySelector("#start-btn");
var info = document.querySelector(".info-container");
var displayHighScore = document.querySelector("#high");
var highScores = document.querySelector(".high-score-container");
var quizQuestion = document.querySelector("#question");
var questionContainer = document.querySelector(".question-container");
var timing = document.querySelector(".timer");
var ending = document.querySelector(".ending-container");
var choices = document.querySelector("#answer-btn");
var initials = document.querySelector("#initials")
var clearHighScore = document.querySelector("#clear");
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

function renderQuestion() {
    if (questionTracker >= questions.length) {
        renderEnding();
        return;
    }
    var currentQuestion = questions [questionTracker];
    quizQuestion.textContent = currentQuestion.question
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        var answers = currentQuestion.answers[i];
        var button = document.createElement("button");
        button.textContent = answers;
        button.className = "questionAnswer button-grid btn";
        questionContainer.append(button);
        if (answers === currentQuestion.correctAnswer) {
            button.addEventListener("click", correctAnswer)
        } else {
            button.addEventListener("click", incorrectAnswer)
        }
    }
};

function removeButtons() {
    var buttons = document.getElementsByClassName("questionAnswer");
    while (buttons.length > 0) {
        buttons[0].remove()
    }
};

function loadNextQuestion() {
    questionTracker++;
    removeButtons();
    renderQuestion();
};

function correctAnswer() {
    loadNextQuestion();
}

function incorrectAnswer() {
    timerCount = timerCount - 5;
    timing.textContent = timerCount;
    loadNextQuestion();
};

function renderEnding() {
    var score = timerCount;
    ending.textContent = score;
    questionContainer.setAttribute("class", "hide");
    timing.setAttribute("class", "hide");
    clearInterval(timer);
    ending.removeAttribute("class");
};

function saveHighScores(event) {
    event.preventDefault();

    var scoreHistory = JSON.parse(localStorage.getItem("score")) || [];
    var currentScore = {
        name: initials.value,
        score: ending.textContent
    }

    scoreHistory.push(currentScore);
    localStorage.setItem("score", JSON.stringify(scoreHistory));
    ending.setAttribute("class", "hide");
    info.removeAttribute("class");
}

startQuiz.addEventListener('click', startGame);
