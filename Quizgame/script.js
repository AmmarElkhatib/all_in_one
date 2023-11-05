const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "Rome", "Madrid", "Berlin"],
    correctAnswer: 0
  },
  {
    question: "What is the tallest mountain in the world?",
    choices: ["Mount Everest", "MountKilimanjaro", "Mount Fuji", "Mount McKinley"],
    correctAnswer: 0
  },
  {
    question: "What is the largest country in the world by area?",
    choices: ["Russia", "Canada", "Australia", "China"],
    correctAnswer: 0
  },
  {
    question: "Who wrote the Harry Potter series?",
    choices: ["J.K. Rowling", "Stephenie Meyer", "Suzanne Collins", "Veronica Roth"],
    correctAnswer: 0
  }
];

let currentQuestion = 0;
let score = 0;

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'ammar' && password === 'ammar2011') {
    document.querySelector('.login-form').classList.add('hidden');
    document.querySelector('.quiz-container').classList.remove('hidden');
    showQuestion();
  } else {
    alert('Invalid username or password');
  }
}

function showQuestion() {
  const questionElement = document.querySelector('.question');
  const answersElement = document.querySelector('.answers');
  questionElement.innerText = questions[currentQuestion].question;
  answersElement.innerHTML = '';
  for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    const answerButton = document.createElement('button');
    answerButton.innerText = questions[currentQuestion].choices[i];
   answerButton.addEventListener('click', function() {
      checkAnswer(i);
    });
    answersElement.appendChild(answerButton);
  }
}

function checkAnswer(answerIndex) {
  if (answerIndex === questions[currentQuestion].correctAnswer) {
    score++;
  }
  document.getElementById('score').innerText = `Score: ${score}/${questions.length}`;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  const quizContainer = document.querySelector('.quiz-container');
  quizContainer.innerHTML = `
    <h2>Quiz Complete</h2>
    <p>Your Score: ${score}/${questions.length}</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
  `;
  quizContainer.classList.add('hidden');
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.querySelector('.quiz-container').classList.remove('hidden');
  document.getElementById('score').innerText = '';
  showQuestion();
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
  document.querySelector('.next-button').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.next-button').classList.add('hidden');
});