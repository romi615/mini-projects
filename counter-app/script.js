// declare variables and take elements' referrences and assign them to variables
const count = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const decrementBtn = document.getElementById("decrementBtn");

// declare a variable currentCount  to store counting
const savedCount = localStorage.getItem("currentCount ");
let currentCount = savedCount ? Number(savedCount) : 0;

// intial value
count.textContent = currentCount;

function saveCount() {
  localStorage.setItem("currentCount ", currentCount);
}

function updateUI() {
  count.innerText = currentCount;
}

// function to increment
function increment() {
  currentCount++;
  updateUI();
  saveCount();
}

// function to decrement
function decrement() {
  if (currentCount > 0) {
    currentCount--;
    updateUI();
    saveCount();
  }
}

// function to reset
function reset() {
  currentCount = 0;
  updateUI();
  saveCount();
}

// attach event handlers with buttons(increment, reset, and decrement)
if (incrementBtn && resetBtn && decrementBtn) {
  incrementBtn.addEventListener("click", increment);
  resetBtn.addEventListener("click", reset);
  decrementBtn.addEventListener("click", decrement);
}
