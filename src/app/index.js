require('./index.css')
const { Weather } = require('./Weather')
const weather = new Weather('London', 'uk')

async function fetchWeather() {
    const data = await weather.getWeather()
    console.log(data)
}

document.addEventListener('DOMContentLoaded', fetchWeather)