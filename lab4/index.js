const apikey = "5d50cb77a4d850371ce5a430e31c9b24";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

const getWeatherData = async (cityValue) => {
    console.log('city', cityValue)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("HTTP error");
        }
        const data = await response.json();
        console.log('data', data);
        const tempreature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `feels like ${Math.round(data.main.feels_like)}`,
            `humidity ${data.main.humidity} %`,
            `wind speed ${data.wind.speed} m/s`
        ];
        weatherDataEl.querySelector('.icon').innerHTML
        = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">`;
        weatherDataEl.querySelector('.tempreature').textContent = `${tempreature}C`;
        weatherDataEl.querySelector('.description').textContent = description;
        weatherDataEl.querySelector('.details').innerHTML = details.map(details=>`<div>${details}</div>`).join('');
    } catch (error) {

    }
};

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});