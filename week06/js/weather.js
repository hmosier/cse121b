const button = document.querySelector("#button");
const baseURL = "https://api.openweathermap.org/data/2.5/weather?lat=39.3318&lon=-82.9817&appid=2c5b9238c69ab8caead4ac1eaebe1cb0&units=imperial"

button.addEventListener('click', () => {
    findWeather(baseURL);
});

async function findWeather(URL) {
    let response = await fetch(URL);
    if (response.ok) {
        let forecast = await response.json();
        console.log(response);
        // output(forecast);
    }
};


const output = (Weather) => {
    let article = document.createElement("article");

    let temp = document.createElement("h3")
    temp.textContent = Weather.main.temp;

    let humidity = document.createElement("p")
    humidity.textContent = Weather.main.humidity;

    let wind_speed = document.createElement("p")
    wind_speed.textContent = Weather.wind.speed;

    article.appendChild(temp);
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