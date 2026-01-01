const buttons = document.querySelectorAll(".btn");
const input = document.getElementById("userInput")

let firsNumber = "";
let secondNumber = "";
let operator = ""


let experession = ""

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        const value = button.innerText;

        if(!isNaN(value)){
            handleNumber(value)
        }

        else if(value === "+" || value === "-" || value === "X" || value === "/") {
            handleOperator(value);
        }

        else if(value === "="){
            calculate();
        }
            
    })
});


