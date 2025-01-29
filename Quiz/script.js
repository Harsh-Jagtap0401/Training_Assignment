const questions = [
    {
        question: "What is the output of the following Python code?\n\nx = 5\ny = 10\nprint(x + y)",
        options: ["5", "10", "15", "Error"],
        correctAnswer: 2
    },
    {
        question: "What is the output of the following Python code?\n\nx = 'Hello'\ny = 'World'\nprint(x + y)",
        options: ["HelloWorld", "Hello World", "Hello World ", "Error"],
        correctAnswer: 0
    },
    {
        question: "What is the output of the following Python code?\n\nx = [1, 2, 3]\nprint(x[1])",
        options: ["1", "2", "3", "Error"],
        correctAnswer: 1
    },
    {
        question: "What is the output of the following Python code?\n\nx = [1, 2, 3]\nprint(len(x))",
        options: ["2", "3", "4", "Error"],
        correctAnswer: 1
    },
    {
        question: "What is the output of the following Python code?\n\nx = {1: 'a', 2: 'b'}\nprint(x.get(1))",
        options: ["'a'", "'b'", "Error", "None"],
        correctAnswer: 0
    }
];
 
let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 600; // in seconds
const userAnswers = [];
 
const quizContainer = document.getElementById("quiz-container");
const progressBar = document.getElementById("progress-bar");
const timerDisplay = document.getElementById("timer");
 
function startQuiz() {
    document.getElementById("start-btn").classList.add("d-none");
    document.querySelector(".progress").classList.remove("d-none");
    timerDisplay.classList.remove("d-none");
    loadQuestion();
}
 
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
 
    const currentQuestion = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h4>${currentQuestion.question}</h4>
        ${currentQuestion.options.map((option, index) => `
            <div class="option-block" onclick="selectOption(${index})" id="option-block${index}">
                <input type="radio" name="option" id="option${index}" value="${index}">
                <label for="option${index}" class="m-0">${option}</label>
            </div>
        `).join('')}
        <button class="btn btn-primary mt-3" onclick="submitAnswer()">Submit</button>
    `;
}
 
function selectOption(index) {
    document.querySelectorAll('.option-block').forEach(block => block.classList.remove('selected'));
    document.getElementById(`option-block${index}`).classList.add('selected');
    document.getElementById(`option${index}`).checked = true;
}
 
function submitAnswer() {
    const options = document.getElementsByName("option");
    let selectedOption = -1;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = parseInt(options[i].value);
            break;
        }
    }
 
    userAnswers.push(selectedOption);
 
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }
 
    currentQuestionIndex++;
progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
    loadQuestion();
}
 
function showResults() {
    clearInterval(timerInterval);
 
    const resultHTML = questions.map((q, index) => {
        const isCorrect = userAnswers[index] === q.correctAnswer;
        const answerClass = isCorrect ? "correct" : "incorrect";
 
        return `
            <div class="mt-3 p-2 border ${answerClass}">
                <p><strong>Q${index + 1}: ${q.question}</strong></p>
                <p>Your Answer: ${q.options[userAnswers[index]] || "Not Answered"}</p>
                <p>Correct Answer: ${q.options[q.correctAnswer]}</p>
            </div>
        `;
    }).join('');
 
    quizContainer.innerHTML = `
        <h4>Exam Completed!</h4>
        <p>Your Score: ${(score / questions.length) * 100}%</p>
        ${resultHTML}
    `;
}
 
function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `Time Remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    timeRemaining--;
 
    if (timeRemaining < 0) {
        showResults();
    }
}
 
const timerInterval = setInterval(updateTimer, 1000);