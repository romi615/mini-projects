// declare variables and store their referrences inside variables
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


// function to digital clock
function digitalClock(){

const date = new Date();

const h = date.getHours();
const m = date.getMinutes();
const s = date.getSeconds();


 hours.innerText = h < 10 ? "0" + h : h;
 minutes.innerText = m < 10 ? "0" + m : m;
 seconds.innerText = s < 10 ? "0" + s : s;

}

// setInterval function update time every second
setInterval(digitalClock, 1000);