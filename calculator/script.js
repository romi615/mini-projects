const buttons = document.querySelectorAll(".btn");
const input = document.getElementById("userInput");

let firstNumber = "";
let secondNumber = "";
let operator = "";

let experession = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (!isNaN(value)) {
      handleNumber(value);
    } else if (
      value === "+" ||
      value === "-" ||
      value === "X" ||
      value === "/" ||
      value === "%"
    ) {
      handleOperator(value);
    } else if (value === "=") {
      calculate();
    } else if (value === "CL") {
      clearAllInput();
    } else if (value === "DEL") {
      deleteInputOneByOne();
    }
  });
});

function handleNumber(value) {
  if (operator === "") {
    firstNumber += value;
    input.value = firstNumber;
  } else {
    secondNumber += value;
    input.value = secondNumber;
  }
}

function handleOperator(value) {
  if (firstNumber === "") return;

  operator = value;
}

function calculate() {
  if (firstNumber === "" || secondNumber === "" || operator === "") return;

  const num1 = Number(firstNumber);
  const num2 = Number(secondNumber);

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "X":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        input.value = "Error";
        reset();
        return;
      }
      result = num1 / num2;
      break;
    case "%":
      result = num1 - num1 * (num2 / 100);
      break;
  }

  input.value = result;
  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
}

function clearAllInput() {
  input.value = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

function deleteInputOneByOne() {
  // console.log( input.value)
  let i = 1;

  let deleteInput = input.value;
  // console.log(deleteInput.length)

  let newDeleteInput = deleteInput.slice(0, deleteInput.length - i++);
  reset();
  handleNumber(newDeleteInput);
  // console.log(newDeleteInput)
  input.value = newDeleteInput > 0 ? newDeleteInput : "0";
}

function reset() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
}
