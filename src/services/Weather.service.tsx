import { appId, BASE_URL } from '../util/constant';

export function getWeather(city: string, units: string = 'metric') {
	const response = fetch(
		`${BASE_URL}/data/2.5/weather?q=${city}&units=${units}&appid=${appId}`
	).then((response) => {
		return response.json();
	});
	return response;
}
