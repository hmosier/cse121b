const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
const api = "2c5b9238c69ab8caead4ac1eaebe1cb0";
const lat = 39.3318
const long = -82.9817


let forecastList = [];

const button = document.querySelector("#button");

button.addEventListener('click', () => {
    let url = weatherUrl;
    let apiKey = api
    findWeather(`${url}lat=${lat}&lon=${long}&appid=${apiKey}`);
});


async function findWeather(URL) {
    let response = await fetch(URL);
    if (response.ok) {
        console.log(response)
        let forecastList = await response.json();
        output(forecastList);

    }
};
findWeather();

const output = (weather) => {
   weather.forEach(
       city => {
            let article = document.createElement("article");

            let temp = document.createElement("h3")
            temp.textContent = weather.main.temp;

            let humidity = document.createElement("p")
            humidity.textContent = weather.main.humidity;

            let wind_speed = document.createElement("p")
            wind_speed.textContent = weather.wind.speed;

            article.appendChild(temp);
            article.appendChild(humidity);
            article.appendChild(wind_speed);
       }
   );
}


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