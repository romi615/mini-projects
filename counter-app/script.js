// declare variables and take elements' referrences and assign them to variables
const count = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const decrementBtn = document.getElementById("decrementBtn");

// declare a variable storeCount to store counting
let storeCount = localStorage.getItem("storeCount")
  ? Number(localStorage.getItem("storeCount"))
  : 0;

  // intial value
count.innerText = storeCount;

function saveCount() {
  localStorage.setItem("storeCount", storeCount);
}

// function to increment
function increment() {
  storeCount++;
  count.innerText = storeCount;
  saveCount();
}

// function to decrement
function decrement() {
  if (storeCount > 0) {
    storeCount--;
    count.innerText = storeCount;
  }
  saveCount();
}

// function to reset
function reset() {
  storeCount = 0;
  count.innerText = storeCount;
  saveCount();
}

// attach event handlers with buttons(increment, reset, and decrement)
incrementBtn.addEventListener("click", increment);
resetBtn.addEventListener("click", reset);
decrementBtn.addEventListener("click", decrement);
