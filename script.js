const city = document.getElementById("input-text")
const btn = document.getElementById("search-button")
const weahterImg = document.getElementById("weather-img")
const weatherText = document.getElementById("weather-text")
const loc = document.getElementById("location")
const currentTemp = document.getElementById("current-temp")
const minTemp = document.getElementById("min-temp")
const maxTemp = document.getElementById("max-temp")
const humidity = document.getElementById("humidity")
const chanceOfRain = document.getElementById("chance-of-rain")
const windSpeed = document.getElementById("wind-speed")
const app = document.getElementById("info")
const search = document.getElementById("search")

app.style.display = "none"

const getWeatherInfo = async (e) => {
    try {
        if (city.value) {
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f8df5c3b7caa4242aab155736241806&q=${city.value}&aqi=no&alerts=no`)
            const weather = await response.json()
            const forecast = weather.forecast.forecastday[0].day

            app.style.display = "block"
            search.style.display = "none"

            weahterImg.innerHTML = `<img src="${weather.current.condition.icon}" alt="weatherImg">`
            weatherText.innerHTML = `${weather.current.condition.text}`
            loc.innerText = `${weather.location.name}, ${weather.location.region}, ${weather.location.country}`
            currentTemp.innerText = `${weather.current.temp_c}°`
            minTemp.innerText = `${forecast.mintemp_c}°`
            maxTemp.innerHTML = `${forecast.maxtemp_c}°`
            humidity.innerText = `${weather.current.humidity}%`
            chanceOfRain.innerText = `${forecast.daily_chance_of_rain}%`
            windSpeed.innerText = `${weather.current.wind_kph}km/h`
        }
        else {
            throw new Error("Enter The City Name");
        }

    } catch (error) {
        alert(error)
    }
}

btn.addEventListener('click', getWeatherInfo)
