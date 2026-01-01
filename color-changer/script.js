// declare a variable and store its     referrence inside declare variable
const colorBtn = document.getElementById("colorBtn");

//    function to color change
function colorChanger() {
  const hexValue = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * hexValue.length)];

    document.body.style.backgroundColor = color;
  }
}

// attach event handler with button (colorBtn)
colorBtn.addEventListener("click", colorChanger);
