const button = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");
const container = document.getElementById("movieContainer");


button.addEventListener("click", async function () {
  const movieName = input.value.trim();

  if (movieName === "") {
    alert("Please enter a movie name");
    return;
  }

  container.innerHTML = "Loading...";

  const response = await fetch(
    `https://www.omdbapi.com/?apikey=&s=${movieName}`,
  );

  const data = await response.json();

  container.innerHTML = "";

  if (data.Response === "False") {
    container.innerText = "No movie found";
    return;
  }

  data.Search.forEach((movie) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    `;
    container.appendChild(div);
  });
});
