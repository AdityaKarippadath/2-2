const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: 2
    },
    {
        question: "Which is not a JavaScript framework?",
        options: ["React", "Angular", "Django", "Vue"],
        answer: 2
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["<!-- -->", "//", "**", "##"],
        answer: 1
    },
    {
        question: "Which HTML tag is used for JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        answer: 0
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        answer: 1
    },
    {
        question: "Which CSS property controls text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: 2
    },
    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Display Object Management",
            "Digital Object Model",
            "Document Order Model"
        ],
        answer: 0
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "float"],
        answer: 0
    },
    {
        question: "Which method is used to fetch data from an API?",
        options: ["get()", "fetch()", "request()", "api()"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;

    optionButtons.forEach((btn, index) => {
        btn.textContent = q.options[index];
        btn.disabled = false;
    });

    nextBtn.style.display = "none";
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }

    optionButtons.forEach(btn => btn.disabled = true);
    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionEl.textContent = "Quiz Completed!";
    document.querySelector(".options").style.display = "none";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
}

loadQuestion();
