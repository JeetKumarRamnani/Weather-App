//API INFO
const API_KEY = "863242cfb2b1d357e6093d9a4df19a4b";
const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
// karachi&appid=

//Selecting Fields
const d = document;
const userInput = d.querySelector("#userInput");
const searchBtn = d.querySelector("#searchBtn");
const weatherImg = d.querySelector("#weatherImg");
const temp = d.querySelector("#temp");
const city = d.querySelector("#city");
const humidity = d.querySelector("#humidity");
const windSpeed = d.querySelector("#windSpeed");
// console.log(searchBtn);

searchBtn.addEventListener("click", fetchWeatherData);

async function fetchWeatherData(e) {
  try {
    console.log(e);
    const CompleteURL = `${URL}${userInput.value}&appid=${API_KEY}`;
    const response = await fetch(CompleteURL);
    const data = await response.json();
    console.log(data);
    bindDataToDom(data);
  } catch {
    alert("Please Enter Correct City Name");
    location.reload();
  }
}

function bindDataToDom(data) {
  if (data.weather[0].main == "Clouds") {
    weatherImg.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherImg.src = "./images/rain.png";
  }
  temp.innerHTML = Math.round(data.main.temp - 273);
  city.innerHTML = data.name;
  humidity.innerHTML = data.main.humidity;
  windSpeed.innerHTML = data.wind.speed;
}
