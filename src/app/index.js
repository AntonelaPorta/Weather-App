require('./index.css')
const { Weather } = require('./modules/Weather')
const { WeatherCard } = require('./modules/WeatherCard')

const weatherCard = new WeatherCard()
const weather = new Weather('Buenos Aires', 'ar')

//Evento que luego de cargar el DOM, pide al usuario su geolocalizacion
document.addEventListener('DOMContentLoaded', () => {
    navigator.geolocation.getCurrentPosition(success, error)
})

//Callback success, aceptacion de geolocalizacion
function success(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    fetchWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather.apikey}&lang=es&units=metric`)
}

//Callback error, rechazo de geolocalizacion
function error(err) {
    console.error(`ERROR(${err.code}): ${err.message}`)
    fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${weather.city},${weather.countryCode}&appid=${weather.apikey}&lang=es&units=metric`)
}

//Evento que toma el input value para buscar el clima de dicho lugar
document.getElementById('weather-form').addEventListener('submit' , e => {
    e.preventDefault()
    const location = document.getElementById('location').value.split(", ")
    const city = location[0]
    const countryCode = location[1]
    weather.changeLocation(city, countryCode)
    fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${weather.city},${weather.countryCode}&appid=${weather.apikey}&lang=es&units=metric`)
})

//Funcion que realiza la peticion fetch y renderiza la data obtenida
async function fetchWeather(URI) {
    const data = await weather.getWeather(URI)
    if(data.cod === '404') {
        console.log(data.cod, data.message)
        const errorAlert = document.getElementById('error-message')
        errorAlert.innerHTML = `<p class="text-center m-0">Error ${data.cod}: ${data.message}</p>`
        errorAlert.classList.remove('d-none')
    } else {
        weatherCard.render(data)
        document.getElementById('spinner').classList.add('d-none')
        document.getElementById('weather').classList.remove('d-none')
    }
}