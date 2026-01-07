const questions = [
  {
    question: "Who is the prime minister of india in 2014?",
    answer: [
      { option: "Indira Gandhi", isCorrect: false },
      { option: "Rajiv Gandhi", isCorrect: false },
      { option: "Manmohan Singh", isCorrect: false },
      { option: "Narendra Modi", isCorrect: true },
    ],
  },

  {
    question: "Who painted the Mona Lisa?",
    answer: [
      { option: "Vincent van Gogh", isCorrect: false },
      { option: "Pablo Picasso", isCorrect: false },
      { option: "Leonardo da Vinci", isCorrect: true },
      { option: "Claude Monet", isCorrect: false },
    ],
  },

  {
    question: "What is the capital of Japan?",
    answer: [
      { option: "Beijing", isCorrect: false },
      { option: "Tokyo", isCorrect: true },
      { option: "Seoul", isCorrect: false },
      { option: "Bangkok", isCorrect: false },
    ],
  },
];

const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");
const restartQuizBtn = document.getElementById("restartQuizBtn");

let currentQuestionIndex = 0;

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  question.innerText = currentQuestion.question;

  options.forEach((option, index) => {
    // console.log(index);
    option.innerText = currentQuestion.answer[index].option;
    option.dataset.correct = currentQuestion.answer[index].isCorrect;

    // reset colors
    option.classList.remove("green", "red");
  });
}

// one time event listener
options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((opt) => {
      if (opt.dataset.correct === "true") {
        opt.classList.add("green");
      } else {
        opt.classList.add("red");
      }
      opt.style.pointerEvents = "none";
      // opt.disabled = true;
    });
  });
});

function startQuiz() {
  currentQuestionIndex = 0;
  options.forEach((option) => (option.style.display = "block"));
  nextBtn.style.display = "block";
  restartQuizBtn.style.display = "none";
  showQuestion();
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
    options.forEach((opt) => {
      opt.style.pointerEvents = "auto";
    });
  } else {
    question.innerText = "Quiz finished!";
    options.forEach((option) => (option.style.display = "none"));
    nextBtn.style.display = "none";
    restartQuizBtn.style.display = "block";
    restartQuizBtn.addEventListener("click", () => {
      startQuiz();
    });
  }
});

// load first question
showQuestion();
