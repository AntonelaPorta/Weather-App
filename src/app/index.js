require('./index.css')
const { Weather } = require('./Weather')
const { UI } = require('./UI')

const ui = new UI()
const weather = new Weather('London', 'uk')

async function fetchWeather() {
    const data = await weather.getWeather()
    console.log(data)
    ui.render(data)
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const city = document.getElementById('city').value
    const countryCode = document.getElementById('countryCode').value
    weather.changeLocation(city, countryCode)
    fetchWeather()
})

document.addEventListener('DOMContentLoaded', fetchWeather)