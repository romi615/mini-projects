const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
let s = 0;
let m = 0;
let h = 0;


function startWatch(){

    if(s < 60){
        seconds.innerText = ++s;
    }
    else if (m < 60){
        s = 0;
        minutes.innerText = ++m;
    }
    else {
        m = 0;
        hours.innerText = ++h;
    }

    // console.log(timer);
}

startBtn.addEventListener('click', ()=>{
    setInterval(startWatch, 100);
})


