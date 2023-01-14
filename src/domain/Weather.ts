export interface Location {
	lon: number;
	lat: number;
}
export interface WeatherInfo {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface WeatherCommonInfo {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}

export interface Wind {
	speed: number;
	deg: number;
}

export interface Volume {
	'1h'?: number;
	'3h'?: number;
}

export interface Clouds {
	all: number;
}
export default interface Weather {
	coor: Location;
	weather: WeatherInfo;
	base: string;
	main: WeatherCommonInfo;
	visibility: number;
	wind: Wind;
	rain?: Volume;
	snow?: Volume;
	clouds: Clouds;
	name : String
}
