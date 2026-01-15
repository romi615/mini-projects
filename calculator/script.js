/* ==========================
   DOM REFERENCES
========================== */
const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("display");

/* ==========================
   STATE
========================== */
let currentValue = "";
let previousValue = "";
let operator = null;

/* ==========================
   EVENT HANDLING
========================== */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (value) {
      if (isNumber(value)) handleNumber(value);
      else if (isOperator(value)) handleOperator(value);
    }

    if (action === "calculate") calculate();
    if (action === "clear") clearAll();
    if (action === "delete") deleteLast();
  });
});

/* ==========================
   LOGIC
========================== */
function handleNumber(value) {
  currentValue += value;
  display.value = currentValue;
}

function handleOperator(value) {
  if (!currentValue && !previousValue) return;

  if (previousValue && currentValue) calculate();

  operator = value;
  previousValue = currentValue || previousValue;
  currentValue = "";
}

function calculate() {
  if (!previousValue || !currentValue || !operator) return;

  const num1 = Number(previousValue);
  const num2 = Number(currentValue);
  let result;

  switch (operator) {
    case "+": result = num1 + num2; break;
    case "-": result = num1 - num2; break;
    case "*": result = num1 * num2; break;
    case "/":
      if (num2 === 0) return clearAll("Error");
      result = num1 / num2;
      break;
    case "%": result = (num1 * num2) / 100; break;
  }

  display.value = result;
  previousValue = result.toString();
  currentValue = "";
  operator = null;
}

/* ==========================
   UTILITIES
========================== */
function clearAll(message = "0") {
  currentValue = "";
  previousValue = "";
  operator = null;
  display.value = message;
}

function deleteLast() {
  currentValue = currentValue.slice(0, -1);
  display.value = currentValue || "0";
}

function isNumber(value) {
  return !isNaN(value);
}

function isOperator(value) {
  return ["+", "-", "*", "/", "%"].includes(value);
}
