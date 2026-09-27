const questions = [
    {
        question: "1. What is the capital of India?",
        options: ["Chennai", "Delhi", "Mumbai", "Kolkata"],
        answer: "Delhi"
    },
    {
        question: "2. Which keyword is used to create a function in Python?",
        options: ["function", "def", "fun", "define"],
        answer: "def"
    },
    {
        question: "3. Which symbol is used for comments in Python?",
        options: ["//", "/* */", "#", "--"],
        answer: "#"
    },
    {
        question: "4. Which language is used to style web pages?",
        options: ["HTML", "Python", "CSS", "Java"],
        answer: "CSS"
    },
    {
        question: "5. What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "6. Which language is mainly used for web page interactivity?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "7. Which data type is used to store True or False in Python?",
        options: ["String", "Boolean", "Integer", "Float"],
        answer: "Boolean"
    },
    {
        question: "8. Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "9. Which symbol is used to assign a value to a variable in Python?",
        options: ["==", "=", "!=", "=>"],
        answer: "="
    },
    {
        question: "10. Which technology is used to manage data in tables?",
        options: ["SQL", "CSS", "HTML", "Python"],
        answer: "SQL"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextBtn");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const wrongElement = document.getElementById("wrong");
const percentageElement = document.getElementById("percentage");

function showQuestion() {
    const current = questions[currentQuestion];

    questionElement.textContent = current.question;
    optionsElement.innerHTML = "";

    current.options.forEach(option => {
        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option");

        button.onclick = function () {
            checkAnswer(option);
        };

        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    document.querySelectorAll(".option").forEach(button => {
        button.disabled = true;

        if (button.textContent === correctAnswer) {
            button.style.background = "#90EE90";
        }

        if (button.textContent === selectedAnswer && selectedAnswer !== correctAnswer) {
            button.style.background = "#FFB6B6";
        }
    });
}

let answered = false;

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestion].answer;

    answered = true;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    document.querySelectorAll(".option").forEach(button => {
        button.disabled = true;

        if (button.textContent === correctAnswer) {
            button.style.background = "#90EE90";
        }

        if (
            button.textContent === selectedAnswer &&
            selectedAnswer !== correctAnswer
        ) {
            button.style.background = "#FFB6B6";
        }
    });
}

nextButton.addEventListener("click", function () {

    if (!answered) {
        alert("Please select an answer!");
        return;
    }

    currentQuestion++;
    answered = false;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        quizElement.classList.add("hide");
        resultElement.classList.remove("hide");

        scoreElement.textContent =
            `Your Score: ${score} / ${questions.length}`;
            const wrongAnswers = questions.length - score;
const percentage = (score / questions.length) * 100;

wrongElement.textContent = `Wrong Answers: ${wrongAnswers}`;
percentageElement.textContent = `Percentage: ${percentage}%`;
    }
});

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    resultElement.classList.add("hide");
    quizElement.classList.remove("hide");

    showQuestion();
}

showQuestion();