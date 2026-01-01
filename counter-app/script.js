const count = document.getElementById('count')
const incrementBtn = document.getElementById('incrementBtn')
const resetBtn = document.getElementById('resetBtn')
const decrementBtn = document.getElementById('decrementBtn')
let storeCount = 0;

function increment(){
    count.innerText = ++storeCount;
}

function decrement(){
    count.innerText = --storeCount;
}

incrementBtn.addEventListener('click',increment);
decrementBtn.addEventListener('click',decrement);