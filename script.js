// Quiz Questions
const questions = [
    {
        question: "What is the capital of India?",
        answers: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
        correct: "Delhi"
    },
    {
        question: "Which planet is called the Red Planet?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
        correct: "Mars"
    },
    {
        question: "Which language is used for web pages?",
        answers: ["HTML", "Python", "Java", "C++"],
        correct: "HTML"
    }
];

// Get HTML elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionNumber =
document.getElementById("question-number");
const restartButton =
document.getElementById("restart-btn");

// Variables
let currentQuestion = 0;
let score = 0;

// Display first question
loadQuestion();

nextButton.addEventListener("click", nextQuestion);

restartButton.addEventListener("click", restartQuiz);

function loadQuestion() {

    const currentQuiz = questions[currentQuestion];

    questionElement.innerText = currentQuiz.question;

    questionNumber.innerText =
    "Question " + (currentQuestion + 1) +
    " of " + questions.length;

    answerButtons.innerHTML = "";

    nextButton.style.display = "none";

    for (let i = 0; i < currentQuiz.answers.length; i++) {

        const button = document.createElement("button");

        button.innerText = currentQuiz.answers[i];

        button.classList.add("btn");

        button.addEventListener("click", selectAnswer);

        answerButtons.appendChild(button);
    }
}

function selectAnswer(event) {

    const selectedButton = event.target;

    const correctAnswer = questions[currentQuestion].correct;

    const buttons = answerButtons.children;

    if (selectedButton.innerText === correctAnswer) {

        selectedButton.style.backgroundColor = "green";

        score++;

    } else {

        selectedButton.style.backgroundColor = "red";
    }

    for (let i = 0; i < buttons.length; i++) {

        if (buttons[i].innerText === correctAnswer) {

            buttons[i].style.backgroundColor = "green";
        }

        buttons[i].disabled = true;
    }

    nextButton.style.display = "block";
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showScore();

    }

}

function showScore(){

    questionNumber.innerText="";

    questionElement.innerText="Quiz Completed!";

    let message="";

    if(score==questions.length){

        message="Excellent! Perfect Score!";

    }

    else if(score>=2){

        message="Good Job!";

    }

    else{

        message="Keep Practicing!";
    }

    answerButtons.innerHTML=
    "<h2>Your Score: "
    +score+
    " / "
    +questions.length+
    "</h2><h3>"+message+"</h3>";

    nextButton.style.display="none";

    restartButton.style.display="block";
}

function restartQuiz(){

    currentQuestion = 0;

    score = 0;

    restartButton.style.display = "none";

    loadQuestion();

}