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

let questionCount = 0;

function showQuestion() {
  let answerCount = 0;

  if (questionCount < questions.length) {
    question.innerText = questions[questionCount].question;

    options.forEach((option) => {
      option.innerText = questions[questionCount].answer[answerCount].option;
      option.dataset.id = questions[questionCount].answer[answerCount].isCorrect;
      answerCount++;
    });

    
    questionCount++;
  } else {
    startQuiz();
  }
}

nextBtn.addEventListener("click", () => {
  showQuestion();
});
// showQuestion();
// showQuestion();

function startQuiz() {
  questionCount = 0;
}
