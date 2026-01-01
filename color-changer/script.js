const colorBtn = document.getElementById("colorBtn");

function colorChanger() {
  const hexValue = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * hexValue.length)];

    document.body.style.backgroundColor = color;
  }
}

colorBtn.addEventListener("click", colorChanger);
