
export interface Coord {
    lon: number,
    lat: number
}
export interface Weather {
    id: number,
    main: string,
    description: string,
    icon: string
}
export interface WeatherInfo {
    coor: Coord,
    weather: Weather,
    base: string,
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number
  }
export default class WeatherService {

    static getWeather(city:string,units:string) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=f825344b0cf0672c689378549f9868db")
        .then(response => response.json())
        .then(data => console.log(data))
    }
}