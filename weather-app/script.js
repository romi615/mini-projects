const input = document.getElementById("userInput");
const searchBtn = document.getElementById("searchBtn");

const apiKey = "8cb1b8b3bdfe2861513353bb3ba967d0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    // document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clear") {
      document.querySelector(".weather-icon").src = "images/clear.png";
    } else if (data.weather[0].main === "Clouds") {
      document.querySelector(".weather-icon").src = "images/clouds.png";
    } else if (data.weather[0].main === "Drizzle") {
      document.querySelector(".weather-icon").src = "images/drizzle.png";
    } else if (data.weather[0].main === "Rain") {
      document.querySelector(".weather-icon").src = "images/rain.png";
    } else if (data.weather[0].main === "Mist") {
      document.querySelector(".weather-icon").src = "images/mist.png";
    } else if (data.weather[0].main === "Snow") {
      document.querySelector(".weather-icon").src = "images/snow.png";
    }
    document.querySelector(".error").style.display = "none";
    // document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(input.value);
  input.value = "";
  document.querySelector('.weather').classList.add('show')
});
