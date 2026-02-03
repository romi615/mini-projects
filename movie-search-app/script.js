const button = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");
const container = document.getElementById("movieContainer");

button.addEventListener("click", function () {
  const movieName = input.value;

  fetch(`https://www.omdbapi.com/?apikey=&s=${movieName}`)
    .then(response => response.json())
    .then(data => {
      container.innerHTML = "";

      data.Search.forEach(movie => {
        const p = document.createElement("p");
        p.innerText = movie.Title;
        container.appendChild(p);
      });
    });
});
