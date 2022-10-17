//Clase que toma como propiedades los parametros de la url para realizar la peticion de datos a la API.

export class Weather {
    constructor(city, countryCode) {
        this.apikey = 'c81953275f8b464b0b934afb580fc3f9'
        this.city = city
        this.countryCode = countryCode
    }

    async getWeather(URI) {
        try {
            const response = await fetch(URI)
            return await response.json()
        } catch (error) {
            console.error(error);
        }
    }

    changeLocation(city, countryCode) {
        this.city = city
        this.countryCode = countryCode
    }
}