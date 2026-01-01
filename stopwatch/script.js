const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
let timer;
let s = 0;
let m = 0;
let h = 0;


function startWatch(){

timer = setInterval(()=>{
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
}, 1000);

    

    // console.log(timer);
}


function stopWatch(){
    clearInterval(timer);
}

function resetWatch(){
    clearInterval(timer);
    s = 0;
    m = 0;
    h = 0;
    seconds.innerText = s + "0";
    minutes.innerText = m + "0";
    hours.innerText = h+"0";

}

startBtn.addEventListener('click', startWatch);

stopBtn.addEventListener('click', stopWatch);
resetBtn.addEventListener('click', resetWatch);


