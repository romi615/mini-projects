const count = document.getElementById('count')
const incrementBtn = document.getElementById('incrementBtn')
const resetBtn = document.getElementById('resetBtn')
const decrementBtn = document.getElementById('decrementBtn')
let storeCount = 0;

function increment(){
    count.innerText = ++storeCount;
}

function decrement(){
    if(storeCount > 0){
        count.innerText = --storeCount;
    }
}

function reset(){
    storeCount = 0;
    count.innerText = storeCount;
}


incrementBtn.addEventListener('click',increment);
resetBtn.addEventListener('click',reset);
decrementBtn.addEventListener('click',decrement);