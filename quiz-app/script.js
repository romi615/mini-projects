const questions = [
  {
    question: "Who is the prime minister of india in 2014?",
    answer: [
      { option1: "Indira Gandhi", isCorrect : false},
      { option2: "Rajiv Gandhi" ,isCorrect : false},
      { option3: "Manmohan Singh" ,isCorrect : false},
      { option4: "Narendra Modi" ,isCorrect : true},
    ],
  },

  {
    question: "Who painted the Mona Lisa?",
    answer: [
      { option1: "Vincent van Gogh", isCorrect : false},
      { option2: "Pablo Picasso" ,isCorrect : false},
      { option3: "Leonardo da Vinci" ,isCorrect : true},
      { option4: "Claude Monet" ,isCorrect : false},
    ],
  },

  {
    question: "What is the capital of Japan?",
    answer: [
      { option1: "Beijing", isCorrect : false},
      { option2: "Tokyo" ,isCorrect : true},
      { option3: "Seoul" ,isCorrect : false},
      { option4: "Bangkok" ,isCorrect : false},
    ],
  },
];

const question = document.getElementById('question');
const options = document.querySelectorAll("option");


function showQuiz(){

}
