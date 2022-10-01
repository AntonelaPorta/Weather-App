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

document.addEventListener('DOMContentLoaded', fetchWeather)