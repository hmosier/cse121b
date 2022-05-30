const button = document.querySelector("#button");
const baseURL = "https://api.openweathermap.org/data/2.5/weather?lat=39.3318&lon=-82.9817&appid=2c5b9238c69ab8caead4ac1eaebe1cb0&units=imperial"

button.addEventListener('click', () => {
    findWeather(baseURL);
});

async function findWeather(URL) {
    let response = await fetch(URL);
    if (response.ok) {
        let forecast = await response.json();
        // console.log(forecast);
        output(forecast);
    }
};


const output = (weather) => {
    let article = document.getElementById("weathergoeshere")

    let temperature = document.createElement("h3")
    temperature.textContent = `Current Temperature: ${weather.main.temp} F`;

    let feelsLike = document.createElement("p")
    feelsLike.textContent = `Feels like: ${weather.main.feels_like} F`;

    let tempMax = document.createElement("p")
    tempMax.textContent = `Today's High: ${weather.main.temp_max} F`;

    let tempMin = document.createElement("p")
    tempMin.textContent = `Today's Low: ${weather.main.temp_min} F`;

    let humidity = document.createElement("p")
    humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;

    let wind_speed = document.createElement("p")
    wind_speed.textContent = `Wind Speed: ${weather.wind.speed} mph`;

    article.appendChild(temperature);
    article.appendChild(feelsLike);
    article.appendChild(tempMax);
    article.appendChild(tempMin);
    article.appendChild(humidity);
    article.appendChild(wind_speed);
};


let date = new Date().getDay();
switch (date) {
    case 0:
        weekDayString = `Sunday`;
        break;
    case 1:
        weekDayString = `Monday`;
        break;
    case 2:
        weekDayString = `Tuesday`;
        break;
    case 3:
        weekDayString = `Wednesday`;
        break;
    case 4:
        weekDayString = `Thursday`;
        break;
    case 5:
        weekDayString = `Friday`;
        break;
    case 6:
        weekDayString = `Saturday`;
        break;
}

let weekDate = `${weekDayString}`;
document.querySelector("#date").textContent = weekDate;