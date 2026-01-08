// const userInput = document.querySelector('.searchBox input')
// const searchBtn = document.querySelector('.searchBox button')

// const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

// async function searchWordMeaning(word){
//     const response = await fetch(url+`${word}`)
//     const data = await response.json()
//     console.log(data);

//     document.querySelector('#word').innerHTML = data[0].word + ":";
//     document.querySelector('#meaning').innerHTML = data[0].meanings[1].definitions[0].definition;

//         document.querySelector('.exampleBox p').innerHTML = `<span>Example: </span>` + data[0].meanings[1].definitions[0].example;


    
// }

// searchBtn.addEventListener('click', ()=>{
//     searchWordMeaning(userInput.value);
//     userInput.value = ""
// })

fetch("https://api.api-ninjas.com/v1/dictionary?word=expose", {
  headers: {
    "X-Api-Key": "4SRYNMqH+yPMtslE0EEmHg==odPTZv3b0FcBKICA"
  }
})
.then(res => res.json())
.then(data => console.log(data));

