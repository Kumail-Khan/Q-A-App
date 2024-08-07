const quextions = [
    {
        question: "What is you Name?",
        answers: [
            { text: "Walter White", correct: "false" },
            { text: "Optimus Prime", correct: "false" },
            { text: "Batman", correct: "false" },
            { text: "Narendra Modi", correct: "True" }
        ]
    },
    {
        question: "What is your Father Name?",
        answers: [
            { text: "Shinchan", correct: "true" },
            { text: "Flying Airplane", correct: "false" },
            { text: "The Man With No Name", correct: "false" },
            { text: "Elvish Yadav", correct: "false" }

        ]
    },
    {
        question: "What is your favourite Movie?",
        answers: [
            { text: "Kisi Ka Bhai Kisi Ki Jaan", correct: "false" },
            { text: "Heropanti 2", correct: "true" },
            { text: "Maa Tujhhe Salaam", correct: "false" },
            { text: "Bade Miyan Chote Miyan", correct: "True" }
        ]
    },
    {
        question: "Who is world Richest Man?",
        answers: [
            { text: "Deepak kalal", correct: "false" },
            { text: "Kamaal R. Khan", correct: "false" },
            { text: "Doli Chai Wala", correct: "True" },
            { text: "Yousaf Phattan tiktoker", correct: "false" }

        ]
    }
]

const questionElement = document.querySelector(".question")
const answerBtn = document.querySelector(".answers-button")
const nextBtn = document.querySelector(".next-Btn")

let currentQuestionidx = 0;
let score = 0;

function startQuiz() {
    currentQuestionidx = 0
    score = 0

    nextBtn.innerHTML = "Next";

    showQuextion();
}


function showQuextion() {
    let currentQuestion = quextions[currentQuestionidx];
    let questionNo = currentQuestion + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button")
        button.innerHTML = answers.text;
        button.classList.add("btn")
        answerBtn.appendChild(button);
    });

}


startQuiz();

