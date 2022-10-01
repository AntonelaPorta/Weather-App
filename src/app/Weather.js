export class Weather {
    constructor(city, countryCode) {
        this.apikey = 'c81953275f8b464b0b934afb580fc3f9'
        this.city = city
        this.countryCode = countryCode
    }

    async getWeather() {
        try {
            const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`
            const response = await fetch(URI)
            return await response.json()
        } catch (error) {
            console.error(error);
        }
        
    }
}