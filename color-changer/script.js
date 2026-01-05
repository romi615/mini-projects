// declare a variable and store its     referrence inside declare variable
const colorBtn = document.getElementById("colorBtn");



function saveColorChanger(color){
  localStorage.setItem('color', color);
}

//    function to color change
function colorChanger() {
  const hexValue = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * hexValue.length)];
  }

  saveColorChanger(color);

  document.body.style.backgroundColor = localStorage.getItem('color');

}

// attach event handler with button (colorBtn)
colorBtn.addEventListener("click", colorChanger);

document.addEventListener('DOMContentLoaded', ()=>{
  document.body.style.backgroundColor = localStorage.getItem('color');
})
