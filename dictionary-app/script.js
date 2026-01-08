const userInput = document.querySelector('.searchBox input')
const searchBtn = document.querySelector('.searchBox button')

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

async function searchWordMeaning(word){
    const response = await fetch(url+`${word}`)
    const data = await response.json()
    console.log(data);

    document.querySelector('#word').innerHTML = data[0].word;
    document.querySelector('#meaning').innerHTML = data[0].meanings[1].definitions[0].definition;

        document.querySelector('.exampleBox p').innerHTML = "Example: " + data[0].meanings[1].definitions[0].example;


    
}

searchBtn.addEventListener('click', ()=>{
    searchWordMeaning(userInput.value);
    userInput.value = ""
})
