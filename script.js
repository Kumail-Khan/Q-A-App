const questions = [
    {
        question: "What is your Name?",
        answers: [
            { text: "Walter White", correct: false },
            { text: "Optimus Prime", correct: false },
            { text: "Batman", correct: false },
            { text: "Narendra Modi", correct: true }
        ]
    },
    {
        question: "What is your Father's Name?",
        answers: [
            { text: "Shinchan", correct: true },
            { text: "Flying Airplane", correct: false },
            { text: "The Man With No Name", correct: false },
            { text: "Elvish Yadav", correct: false }
        ]
    },
    {
        question: "What is your favourite Movie?",
        answers: [
            { text: "Kisi Ka Bhai Kisi Ki Jaan", correct: false },
            { text: "Heropanti 2", correct: true },
            { text: "Maa Tujhhe Salaam", correct: false },
            { text: "Bade Miyan Chote Miyan", correct: true }
        ]
    },
    {
        question: "Who is the world's Richest Man?",
        answers: [
            { text: "Deepak kalal", correct: false },
            { text: "Kamaal R. Khan", correct: false },
            { text: "Doli Chai Wala", correct: true },
            { text: "Yousaf Phattan tiktoker", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".answers-button");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("Btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

startQuiz();
