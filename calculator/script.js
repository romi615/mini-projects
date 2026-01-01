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


function handleNumber(value){
    if(operator === ""){
        firsNumber += value;
        input.value = firsNumber;
    }
     else {
        secondNumber += value;
        input.value = secondNumber;
     }

}


function handleOperator(value){
    if(firsNumber === "") return;

    operator = value;
}

function calculate(){
    if(firsNumber === "" || secondNumber === "" || operator ==="") return ;

    const num1 = Number(firsNumber);
    const num2 = Number(secondNumber)

    let result;

    switch(operator){
        case "+":
            result = num1+num2
            break;
            case "-":
            result = num1-num2
            break;case "X":
            result = num1*num2
            break;
            case "/":
                if(num2===0){
                    input.value = "Error";
                    reset()
                    return;
                }
            result = num1/num2
            break;
    }

    input.value = result;
    firsNumber = result.toString();
    secondNumber = ""
    operator = "";
}


