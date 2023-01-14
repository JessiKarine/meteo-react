import Weather from '@domain/Weather';
import config from '../config.json';

export function getWeather(city: string, units: string = 'metric') : Promise<Weather>{
    const BASE_URL = config.WeatherAPI.url;
    const appId = process.env.REACT_APP_WEATHER_ID;
	const response = fetch(
		`${BASE_URL}/data/2.5/weather?q=${city}&units=${units}&appid=${appId}`
	).then((response) => {
		return response.json();
	});
	return response;
}
