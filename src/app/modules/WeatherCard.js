//Clase weatherCard que tiene como propiedades los elementos del DOM a renderizar y toma los datos de la peticion a la api para hacerlo.

export class WeatherCard {
    constructor() {
        this.location = document.getElementById('weather-location')
        this.description = document.getElementById('weather-description')
        this.string = document.getElementById('weather-string')
        this.humidity = document.getElementById('weather-humidity')
        this.wind = document.getElementById('weather-wind')
        this.tempMax = document.getElementById('weather-tempMax')
        this.tempMin = document.getElementById('weather-tempMin')
        this.icon = document.getElementById('weather-icon')
    }

    render(weather) {
        this.location.textContent = weather.name + ", " + weather.sys.country
        this.description.textContent = weather.weather[0].description
        this.string.textContent = weather.main.temp.toFixed(1) + ' °C'
        this.humidity.textContent = 'Humedad: ' + weather.main.humidity + ' %'
        this.wind.textContent = 'Viento: ' + (weather.wind.speed * 3.6).toFixed(1) + ' km/h'
        this.tempMax.textContent = 'Max: ' + weather.main.temp_max.toFixed(1) + ' °C'
        this.tempMin.textContent = 'Min: ' + weather.main.temp_min.toFixed(1) + ' °C'
        this.icon.src = "http://openweathermap.org/img/w/" +  weather.weather[0].icon + ".png";
    }
}