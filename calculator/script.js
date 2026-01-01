const buttons = document.querySelectorAll(".btn");
const userInput = document.getElementById("userInput")


function display(input){
    // console.log(input);
    userInput.innerText = input;
    // userInput.style.color = "black";
    // userInput.ReadOnly = true;
}


buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        display(e.target.innerText);
    })
});


