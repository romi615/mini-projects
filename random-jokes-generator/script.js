const questionJoke = document.querySelector('.questionJoke');
const answerJoke = document.querySelector('.answerJoke');
const jokeBtn = document.querySelector('#jokeBtn');


const url = "https://official-joke-api.appspot.com/random_joke"

async function jokeGenerator(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

questionJoke.innerHTML=`<span>Question: </span>${data.setup}`
answerJoke.innerHTML=`<span>Answer: </span>${data.punchline}`
}

jokeBtn.addEventListener('click',()=>{
    jokeGenerator();
})