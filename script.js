const searchInput = document.querySelector(".search--input");
const searchBtn = document.querySelector(".btn");
const boxCity = document.querySelector(".box__city");
const cityName = document.querySelector(".city--name");
const weatherType = document.querySelector(".weather-type");
const gradus = document.querySelector(".gradus");

let temp;
let type;
let selsiy;
let farad;

searchBtn.addEventListener("click", function () {
  let city = searchInput.value;
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=44d37f22c06d4dbba27165419220204&q=${city}&aqi=no`
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (res) {
      console.log(res);
      type = res.current.condition.text;
      selsiy = res.current.feelslike_c;
      wind = res.current.wind_kph;

      farad = res.current.feelslike_f;
    });
  if (type == "Sunny") {
    let html = `<div class="box sun">      
    <p class="city--name">${city}</p>
    <p class="weather-type">${type}</p>
    <p class="gradus">${selsiy}&#176</p>

  </div>`;
    boxCity.insertAdjacentHTML("beforeend", html);
  }
  if (type == "Rainy") {
    let html = `<div class="box rain">      
    <p class="city--name">${city}</p>
    <p class="weather-type">${type}</p>
    <p class="gradus">${selsiy}&#176</p>

  </div>`;
    boxCity.insertAdjacentHTML("beforeend", html);
  }
  if (type == "Light snow") {
    let html = `<div class="box qor">      
    <p class="city--name">${city}</p>
    <p class="weather-type">${type}</p>
    <p class="gradus">${selsiy}&#176</p>

  </div>`;
    boxCity.insertAdjacentHTML("beforeend", html);
  }
});

fetch(
  `https://api.weatherapi.com/v1/current.json?key=44d37f22c06d4dbba27165419220204&q=Tashkent&aqi=no`
)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (res) {
    console.log(res);
  });
