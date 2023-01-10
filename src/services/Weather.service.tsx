

export default class WeatherService {

    static getWeather(city:string,units:string) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=f825344b0cf0672c689378549f9868db")
        .then(response => response.json())
        .then(data => console.log(data))
    }
}