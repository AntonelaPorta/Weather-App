require('./index.css')
const { Weather } = require('./Weather')
const { UI } = require('./UI')

const ui = new UI()
const weather = new Weather('London', 'uk')


document.getElementById('w-change-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const city = document.getElementById('city').value
    const countryCode = document.getElementById('countryCode').value
    weather.changeLocation(city, countryCode)
    fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${weather.city},${weather.countryCode}&appid=${weather.apikey}&units=metric`)
})

document.addEventListener('DOMContentLoaded', () => {
    navigator.geolocation.getCurrentPosition(success, error)
})

function success(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    fetchWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather.apikey}&units=metric`)
}

function error(err) {
    console.error(`ERROR(${err.code}): ${err.message}`)
}

async function fetchWeather(URI) {
    const data = await weather.getWeather(URI)
    ui.render(data)
}