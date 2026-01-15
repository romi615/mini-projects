// declare a variable and store its referrence inside declare variable
const colorBtn = document.getElementById("colorBtn");

const DEFAULT_COLOR = "#ffffff";

// function to save color in localStorage
function saveColor(color){
  localStorage.setItem('color', color);
}

// function to apply color safely
function applyColor(color) {
  if (typeof color === "string" && color.startsWith("#")) {
    document.body.style.backgroundColor = color;
  }
}

// function to generate and change color
function colorChanger() {
  const hexValue = "0123456789ABCDEF";
  let hexLength = hexValue.length;
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * hexLength)];
  }

  saveColor(color);
  applyColor(color);


}

// attach event handler with button (colorBtn)
colorBtn.addEventListener("click", colorChanger);

// apply saved color on page load
document.addEventListener('DOMContentLoaded', ()=>{
  const savedColor = localStorage.getItem('color') || DEFAULT_COLOR;
  applyColor(savedColor)
})
