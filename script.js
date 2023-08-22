const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Paris", "Berlin", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    // Add more quiz questions here
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesContainer = document.getElementById("choices-container");
    const currentQuizData = quizData[currentQuestion];

    questionElement.textContent = currentQuizData.question;
    choicesContainer.innerHTML = "";

    currentQuizData.choices.forEach((choice) => {
        const choiceElement = document.createElement("button");
        choiceElement.textContent = choice;
        choiceElement.setAttribute("onclick", `checkAnswer('${choice}')`);
        choicesContainer.appendChild(choiceElement);
    });
}

function checkAnswer(userChoice) {
    const currentQuizData = quizData[currentQuestion];
    if (userChoice === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} out of ${quizData.length}</p>
    `;
}

loadQuestion();
