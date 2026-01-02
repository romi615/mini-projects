const userInput = document.getElementById("userInput")
const guessBtn = document.getElementById("guessBtn")
const feedbackBox = document.getElementById("feedbackBox")


function userGuess(){
    const randomNumber = Math.round(Math.random()*10)
    // console.log(randomNumber);

    const input = Number(userInput.value);
    // console.log(input)

    if(userInput.value === ""){
        alert("please, enter the number!");
        return;
    }

    if(input > randomNumber){
        feedbackBox.innerHTML = "high";
    } else if(input < randomNumber){
        feedbackBox.innerText = 'low';
    } else {
        feedbackBox.innerText = "correct"
    }
    userInput.value = ""
    
}

guessBtn.addEventListener('click', userGuess);